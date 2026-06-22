/**
 * goal-time-model.ts
 *
 * Deterministic split / goal-time math for the fixed HYROX race format
 * (8 × ~1 km runs interleaved with 8 fixed functional stations, separated by
 * roxzone transitions).
 *
 * Design constraints (see docs/architecture.md):
 *   - Pure functions. No network calls, no filesystem access, no clock reads.
 *   - No athlete data is persisted, logged, or transmitted. Inputs in, numbers out.
 *   - Inputs are validated; invalid input throws a descriptive Error rather than
 *     silently producing a misleading projection.
 *   - The model is transparent and conservative: it never invents variance it
 *     was not given, and it exposes every assumption it used.
 *
 * This module is consumed by the `hyrox-goal-time-and-race-predictor` skill. The
 * skill body describes the model in prose so an athlete can audit the numbers.
 */

/** The eight fixed HYROX stations, in standard race order. */
export const STATION_IDS = [
  'ski-erg',
  'sled-push',
  'sled-pull',
  'burpee-broad-jumps',
  'row',
  'farmers-carry',
  'sandbag-lunges',
  'wall-balls',
] as const;

export type StationId = (typeof STATION_IDS)[number];

/** Number of running segments in a standard HYROX race. */
export const RUN_COUNT = 8;

/** Nominal length of each running segment, in kilometres. */
export const RUN_SEGMENT_KM = 1;

/**
 * Running model.
 *
 * `compromisedDecayPerRun` captures the central HYROX phenomenon that running
 * gets slower as the race progresses because each station leaves the legs and
 * lungs compromised. Pace on run `i` (1-indexed) is:
 *
 *     basePaceSecPerKm * (1 + compromisedDecayPerRun * (i - 1))
 *
 * A decay of 0 models a perfectly even runner (rare and usually unrealistic);
 * 0.02 means each subsequent 1 km run is ~2% slower than the previous baseline.
 */
export interface RunModel {
  /** Fresh, uncompromised pace for a single 1 km segment, in seconds per km. */
  basePaceSecPerKm: number;
  /** Fractional pace decay accumulated per run due to station fatigue. Default 0. */
  compromisedDecayPerRun?: number;
}

/** Per-station work time, in seconds. */
export type StationSeconds = Record<StationId, number>;

/**
 * Full set of inputs needed to compute a race time.
 *
 * `transitionSeconds` models roxzone time. There are 8 transition windows by
 * default (one per station: the combined approach + exit). Pass a single number
 * to apply the same value to all, or an array (length must equal the number of
 * stations) for per-station transition costs.
 */
export interface RaceInputs {
  run: RunModel;
  stationSeconds: StationSeconds;
  transitionSeconds: number | number[];
}

/** Per-segment breakdown produced by {@link computeRaceTime}. */
export interface RaceBreakdown {
  /** Seconds for each of the 8 runs, in order. */
  runSplitsSec: number[];
  /** Total running time, seconds. */
  runTotalSec: number;
  /** Seconds for each of the 8 stations, keyed by station id and in race order. */
  stationSplitsSec: Array<{ station: StationId; sec: number }>;
  /** Total station time, seconds. */
  stationTotalSec: number;
  /** Seconds for each of the 8 transition windows, in order. */
  transitionSplitsSec: number[];
  /** Total roxzone / transition time, seconds. */
  transitionTotalSec: number;
  /** Grand total finish time, seconds. */
  totalSec: number;
}

/** Three-point projection produced by {@link projectFinishRange}. */
export interface FinishProjection {
  optimisticSec: number;
  expectedSec: number;
  conservativeSec: number;
  /** The fractional variance band that was applied (e.g. 0.04 = ±4%). */
  varianceFraction: number;
  /** Plain-language assumptions echoed back so the caller can audit the result. */
  assumptions: string[];
}

// --------------------------------------------------------------------------
// Validation helpers
// --------------------------------------------------------------------------

function assertFinitePositive(value: number, label: string): void {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${label} must be a finite number, received: ${String(value)}`);
  }
  if (value <= 0) {
    throw new RangeError(`${label} must be greater than 0, received: ${value}`);
  }
}

function assertFiniteNonNegative(value: number, label: string): void {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${label} must be a finite number, received: ${String(value)}`);
  }
  if (value < 0) {
    throw new RangeError(`${label} must be 0 or greater, received: ${value}`);
  }
}

function normalizeTransitions(transitionSeconds: number | number[]): number[] {
  if (typeof transitionSeconds === 'number') {
    assertFiniteNonNegative(transitionSeconds, 'transitionSeconds');
    return new Array(STATION_IDS.length).fill(transitionSeconds);
  }
  if (!Array.isArray(transitionSeconds)) {
    throw new TypeError('transitionSeconds must be a number or an array of numbers');
  }
  if (transitionSeconds.length !== STATION_IDS.length) {
    throw new RangeError(
      `transitionSeconds array must have exactly ${STATION_IDS.length} entries (one per station), received ${transitionSeconds.length}`,
    );
  }
  transitionSeconds.forEach((t, i) => assertFiniteNonNegative(t, `transitionSeconds[${i}]`));
  return [...transitionSeconds];
}

function validateRunModel(run: RunModel): Required<RunModel> {
  if (run == null || typeof run !== 'object') {
    throw new TypeError('run model is required');
  }
  assertFinitePositive(run.basePaceSecPerKm, 'run.basePaceSecPerKm');
  const decay = run.compromisedDecayPerRun ?? 0;
  assertFiniteNonNegative(decay, 'run.compromisedDecayPerRun');
  if (decay > 1) {
    throw new RangeError(
      `run.compromisedDecayPerRun of ${decay} implies the last run is >700% slower than the first; pass a fraction such as 0.03`,
    );
  }
  return { basePaceSecPerKm: run.basePaceSecPerKm, compromisedDecayPerRun: decay };
}

function validateStationSeconds(stationSeconds: StationSeconds): void {
  if (stationSeconds == null || typeof stationSeconds !== 'object') {
    throw new TypeError('stationSeconds is required');
  }
  for (const id of STATION_IDS) {
    if (!(id in stationSeconds)) {
      throw new RangeError(`stationSeconds is missing required station "${id}"`);
    }
    assertFinitePositive(stationSeconds[id], `stationSeconds["${id}"]`);
  }
}

// --------------------------------------------------------------------------
// Core computation
// --------------------------------------------------------------------------

/** Per-run splits implied by a {@link RunModel}, applying compromised decay. */
export function runSplits(run: RunModel): number[] {
  const { basePaceSecPerKm, compromisedDecayPerRun } = validateRunModel(run);
  const splits: number[] = [];
  for (let i = 0; i < RUN_COUNT; i++) {
    splits.push(basePaceSecPerKm * RUN_SEGMENT_KM * (1 + compromisedDecayPerRun * i));
  }
  return splits;
}

/**
 * Compute the full deterministic race breakdown for a set of inputs.
 *
 * @throws if any input is missing, non-numeric, or out of range.
 */
export function computeRaceTime(inputs: RaceInputs): RaceBreakdown {
  if (inputs == null || typeof inputs !== 'object') {
    throw new TypeError('inputs object is required');
  }
  validateStationSeconds(inputs.stationSeconds);
  const transitions = normalizeTransitions(inputs.transitionSeconds);
  const runSplitsSec = runSplits(inputs.run);

  const stationSplitsSec = STATION_IDS.map((station) => ({
    station,
    sec: inputs.stationSeconds[station],
  }));

  const runTotalSec = runSplitsSec.reduce((a, b) => a + b, 0);
  const stationTotalSec = stationSplitsSec.reduce((a, s) => a + s.sec, 0);
  const transitionTotalSec = transitions.reduce((a, b) => a + b, 0);

  return {
    runSplitsSec,
    runTotalSec,
    stationSplitsSec,
    stationTotalSec,
    transitionSplitsSec: transitions,
    transitionTotalSec,
    totalSec: runTotalSec + stationTotalSec + transitionTotalSec,
  };
}

/**
 * Produce an optimistic / expected / conservative finish band around the
 * deterministic expected time.
 *
 * The band is applied symmetrically to the expected total using
 * `varianceFraction`. The caller MUST supply the variance it believes is
 * justified by the athlete's data quality — the model never fabricates a band.
 * A small band (≈0.02) suits an athlete with recent race data; a wide band
 * (≈0.08+) suits sparse or stale data. Variance is asymmetric in reality
 * (blow-ups cost more than perfect days save), so the conservative tail is
 * widened by 50% relative to the optimistic tail.
 *
 * @param varianceFraction fractional band, 0 <= f < 1 (e.g. 0.05 = ±5% base).
 */
export function projectFinishRange(
  inputs: RaceInputs,
  varianceFraction: number,
  extraAssumptions: string[] = [],
): FinishProjection {
  assertFiniteNonNegative(varianceFraction, 'varianceFraction');
  if (varianceFraction >= 1) {
    throw new RangeError(`varianceFraction must be < 1, received: ${varianceFraction}`);
  }
  const { totalSec } = computeRaceTime(inputs);
  const optimisticSec = totalSec * (1 - varianceFraction);
  // Conservative tail is widened: real races fail asymmetrically.
  const conservativeSec = totalSec * (1 + varianceFraction * 1.5);

  return {
    optimisticSec,
    expectedSec: totalSec,
    conservativeSec,
    varianceFraction,
    assumptions: [
      `Expected time is the deterministic sum of supplied run, station, and transition inputs (${formatHMS(totalSec)}).`,
      `Optimistic tail applies −${(varianceFraction * 100).toFixed(1)}%; conservative tail applies +${(varianceFraction * 150).toFixed(1)}% (widened because race-day blow-ups cost more than perfect days save).`,
      'No variance is modelled beyond the band the caller supplied; the band reflects data quality, not a statistical guarantee.',
      ...extraAssumptions,
    ],
  };
}

/**
 * Inverse model: given a goal finish time and a *relative* segment template,
 * allocate concrete second targets to each segment so the parts sum to the goal.
 *
 * `template` provides the relative weight (any positive units) of running,
 * each station, and transitions. The function scales the template so the
 * weighted total equals `goalSec`, then returns absolute targets. This lets a
 * pacing skill answer "what splits do I need to break X?" without fabricating a
 * single canonical answer — the template encodes the athlete's strengths.
 */
export interface SegmentTemplate {
  /** Relative weight of total running. */
  run: number;
  /** Relative weight of each station. */
  stations: Record<StationId, number>;
  /** Relative weight of total transitions. */
  transitions: number;
}

export interface GoalAllocation {
  goalSec: number;
  runTotalSec: number;
  /** Even per-run target (does not bake in decay; pacing skill layers that on). */
  perRunSec: number;
  stationTargetsSec: Array<{ station: StationId; sec: number }>;
  transitionTotalSec: number;
  perTransitionSec: number;
}

export function allocateSplitsForGoal(goalSec: number, template: SegmentTemplate): GoalAllocation {
  assertFinitePositive(goalSec, 'goalSec');
  if (template == null || typeof template !== 'object') {
    throw new TypeError('template is required');
  }
  assertFiniteNonNegative(template.run, 'template.run');
  assertFiniteNonNegative(template.transitions, 'template.transitions');
  validateStationSeconds(template.stations);

  const stationWeight = STATION_IDS.reduce((a, id) => a + template.stations[id], 0);
  const totalWeight = template.run + stationWeight + template.transitions;
  if (totalWeight <= 0) {
    throw new RangeError('template weights sum to 0; at least one segment must be positive');
  }

  const scale = goalSec / totalWeight;
  const runTotalSec = template.run * scale;
  const transitionTotalSec = template.transitions * scale;

  return {
    goalSec,
    runTotalSec,
    perRunSec: runTotalSec / RUN_COUNT,
    stationTargetsSec: STATION_IDS.map((station) => ({
      station,
      sec: template.stations[station] * scale,
    })),
    transitionTotalSec,
    perTransitionSec: transitionTotalSec / STATION_IDS.length,
  };
}

// --------------------------------------------------------------------------
// Formatting helpers (pure, no locale/clock dependence)
// --------------------------------------------------------------------------

/** Format a number of seconds as H:MM:SS (or M:SS under an hour). */
export function formatHMS(totalSeconds: number): string {
  assertFiniteNonNegative(totalSeconds, 'totalSeconds');
  const rounded = Math.round(totalSeconds);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

/** Parse an "M:SS" or "H:MM:SS" string into seconds. */
export function parseHMS(value: string): number {
  if (typeof value !== 'string' || !/^\d{1,2}(:\d{2}){1,2}$/.test(value.trim())) {
    throw new TypeError(`Expected "M:SS" or "H:MM:SS", received: ${String(value)}`);
  }
  const parts = value
    .trim()
    .split(':')
    .map((p) => Number.parseInt(p, 10));
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}
