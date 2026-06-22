/**
 * split-analysis.ts
 *
 * Planned-vs-actual split comparison and pace-decay analysis for a completed
 * HYROX race. Consumed by the `hyrox-post-race-performance-analyzer` skill.
 *
 * Design constraints (identical to goal-time-model.ts):
 *   - Pure functions, no network, no filesystem, no clock, no telemetry.
 *   - Inputs validated; bad input throws rather than returning misleading deltas.
 *   - The module reports *what* changed and ranks the magnitude; it does not
 *     fabricate root causes. Causal interpretation is the skill's job, clearly
 *     labelled as hypothesis.
 */

import { STATION_IDS, type StationId, formatHMS } from './goal-time-model';

/** A single planned-vs-actual pair, in seconds. */
export interface SplitPair {
  plannedSec: number;
  actualSec: number;
}

/** Labelled segment for ranking. */
export interface SegmentDelta {
  /** Stable identifier, e.g. "run-3", "ski-erg", "transition-2". */
  segment: string;
  /** Human label, e.g. "Run 3", "SkiErg", "Transition into Sled Push". */
  label: string;
  plannedSec: number;
  actualSec: number;
  /** actual − planned. Positive = slower than planned (a loss). */
  deltaSec: number;
  /** deltaSec as a fraction of planned. */
  deltaFraction: number;
}

export interface RaceSplitInput {
  /** Exactly 8 run splits, in order. */
  runs: SplitPair[];
  /** Station splits keyed by station id. All 8 required. */
  stations: Record<StationId, SplitPair>;
  /** Optional transition splits, in order (0–8 entries). */
  transitions?: SplitPair[];
}

export type SplitDirection = 'negative' | 'even' | 'positive';

export interface PaceDecayResult {
  /** Ordered run times actually recorded, seconds. */
  runActualSec: number[];
  /** Mean seconds added per subsequent run (least-squares slope). */
  slopeSecPerRun: number;
  /** Slope as a fraction of the first run (e.g. 0.03 = +3% per run). */
  slopeFractionPerRun: number;
  /** Difference between the slowest and fastest run, seconds. */
  spreadSec: number;
  /** Fastest / slowest run for quick reference. */
  fastestRunIndex: number;
  slowestRunIndex: number;
  /**
   * Overall direction of the run splits across the race.
   *   negative = got faster (rare; usually under-paced start)
   *   even     = held pace (well-paced or well-conditioned)
   *   positive = slowed down (the common HYROX fade)
   */
  direction: SplitDirection;
}

export interface SplitAnalysisReport {
  plannedTotalSec: number;
  actualTotalSec: number;
  totalDeltaSec: number;
  /** Every segment delta, race order. */
  segments: SegmentDelta[];
  /** Segments ranked by largest loss (most positive deltaSec) first. */
  largestLosses: SegmentDelta[];
  /** Segments where the athlete beat plan (most negative deltaSec) first. */
  largestGains: SegmentDelta[];
  paceDecay: PaceDecayResult;
}

// --------------------------------------------------------------------------
// Validation
// --------------------------------------------------------------------------

function assertPair(pair: SplitPair, label: string): void {
  if (pair == null || typeof pair !== 'object') {
    throw new TypeError(`${label} must be a {plannedSec, actualSec} object`);
  }
  for (const key of ['plannedSec', 'actualSec'] as const) {
    const v = pair[key];
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      throw new TypeError(`${label}.${key} must be a finite number, received: ${String(v)}`);
    }
    if (v < 0) {
      throw new RangeError(`${label}.${key} must be 0 or greater, received: ${v}`);
    }
  }
}

// --------------------------------------------------------------------------
// Pace decay
// --------------------------------------------------------------------------

/**
 * Least-squares slope of run time vs run index, plus a robust direction call.
 *
 * Direction uses the slope normalised to the first run: |fraction| < 0.015
 * (≈1.5% drift per run) is treated as "even". This threshold is a modelling
 * choice documented in the predictor/post-race skills, not a measured constant.
 */
export function analyzePaceDecay(runActualSec: number[]): PaceDecayResult {
  if (!Array.isArray(runActualSec) || runActualSec.length < 2) {
    throw new RangeError('analyzePaceDecay requires at least 2 run splits');
  }
  runActualSec.forEach((v, i) => {
    if (typeof v !== 'number' || !Number.isFinite(v) || v <= 0) {
      throw new RangeError(`runActualSec[${i}] must be a positive finite number, received: ${String(v)}`);
    }
  });

  const n = runActualSec.length;
  const meanX = (n - 1) / 2;
  const meanY = runActualSec.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (i - meanX) * (runActualSec[i] - meanY);
    den += (i - meanX) ** 2;
  }
  const slopeSecPerRun = den === 0 ? 0 : num / den;
  const slopeFractionPerRun = slopeSecPerRun / runActualSec[0];

  let fastestRunIndex = 0;
  let slowestRunIndex = 0;
  runActualSec.forEach((v, i) => {
    if (v < runActualSec[fastestRunIndex]) fastestRunIndex = i;
    if (v > runActualSec[slowestRunIndex]) slowestRunIndex = i;
  });

  const EVEN_THRESHOLD = 0.015;
  let direction: SplitDirection = 'even';
  if (slopeFractionPerRun > EVEN_THRESHOLD) direction = 'positive';
  else if (slopeFractionPerRun < -EVEN_THRESHOLD) direction = 'negative';

  return {
    runActualSec: [...runActualSec],
    slopeSecPerRun,
    slopeFractionPerRun,
    spreadSec: runActualSec[slowestRunIndex] - runActualSec[fastestRunIndex],
    fastestRunIndex,
    slowestRunIndex,
    direction,
  };
}

// --------------------------------------------------------------------------
// Full comparison
// --------------------------------------------------------------------------

function toDelta(segment: string, label: string, pair: SplitPair): SegmentDelta {
  const deltaSec = pair.actualSec - pair.plannedSec;
  return {
    segment,
    label,
    plannedSec: pair.plannedSec,
    actualSec: pair.actualSec,
    deltaSec,
    deltaFraction: pair.plannedSec > 0 ? deltaSec / pair.plannedSec : 0,
  };
}

const STATION_LABELS: Record<StationId, string> = {
  'ski-erg': 'SkiErg',
  'sled-push': 'Sled Push',
  'sled-pull': 'Sled Pull',
  'burpee-broad-jumps': 'Burpee Broad Jumps',
  row: 'Rowing',
  'farmers-carry': 'Farmers Carry',
  'sandbag-lunges': 'Sandbag Lunges',
  'wall-balls': 'Wall Balls',
};

/**
 * Compare a planned race against the actual result: per-segment deltas, ranked
 * losses and gains, and run pace-decay. Returns structured data only — the
 * skill turns it into prioritised coaching guidance.
 *
 * @throws if runs/stations are missing or malformed.
 */
export function comparePlannedVsActual(input: RaceSplitInput): SplitAnalysisReport {
  if (input == null || typeof input !== 'object') {
    throw new TypeError('input is required');
  }
  if (!Array.isArray(input.runs) || input.runs.length !== 8) {
    throw new RangeError(`runs must contain exactly 8 split pairs, received ${input.runs?.length ?? 0}`);
  }
  input.runs.forEach((p, i) => assertPair(p, `runs[${i}]`));
  if (input.stations == null || typeof input.stations !== 'object') {
    throw new TypeError('stations is required');
  }
  for (const id of STATION_IDS) {
    if (!(id in input.stations)) throw new RangeError(`stations is missing required station "${id}"`);
    assertPair(input.stations[id], `stations["${id}"]`);
  }
  const transitions = input.transitions ?? [];
  if (!Array.isArray(transitions)) throw new TypeError('transitions must be an array when provided');
  transitions.forEach((p, i) => assertPair(p, `transitions[${i}]`));

  const segments: SegmentDelta[] = [];

  // Interleave in race order: run, station, (transition) ...
  input.runs.forEach((pair, i) => {
    segments.push(toDelta(`run-${i + 1}`, `Run ${i + 1}`, pair));
  });
  STATION_IDS.forEach((id) => {
    segments.push(toDelta(id, STATION_LABELS[id], input.stations[id]));
  });
  transitions.forEach((pair, i) => {
    segments.push(toDelta(`transition-${i + 1}`, `Transition ${i + 1}`, pair));
  });

  const plannedTotalSec = segments.reduce((a, s) => a + s.plannedSec, 0);
  const actualTotalSec = segments.reduce((a, s) => a + s.actualSec, 0);

  const byLoss = [...segments].sort((a, b) => b.deltaSec - a.deltaSec);
  const largestLosses = byLoss.filter((s) => s.deltaSec > 0);
  const largestGains = [...segments].filter((s) => s.deltaSec < 0).sort((a, b) => a.deltaSec - b.deltaSec);

  return {
    plannedTotalSec,
    actualTotalSec,
    totalDeltaSec: actualTotalSec - plannedTotalSec,
    segments,
    largestLosses,
    largestGains,
    paceDecay: analyzePaceDecay(input.runs.map((r) => r.actualSec)),
  };
}

/** Convenience: render a one-line summary of the biggest addressable loss. */
export function summarizeTopLoss(report: SplitAnalysisReport): string {
  const top = report.largestLosses[0];
  if (!top) return 'No segment finished slower than planned; the race was paced at or under plan throughout.';
  return `Largest addressable loss: ${top.label} (+${formatHMS(top.deltaSec)} vs plan, ${(top.deltaFraction * 100).toFixed(1)}% over).`;
}
