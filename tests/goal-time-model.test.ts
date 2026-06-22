import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  STATION_IDS,
  RUN_COUNT,
  runSplits,
  computeRaceTime,
  projectFinishRange,
  allocateSplitsForGoal,
  formatHMS,
  parseHMS,
  type RaceInputs,
  type SegmentTemplate,
  type StationSeconds,
} from '../lib/goal-time-model.ts';

function stationConst(sec: number): StationSeconds {
  return STATION_IDS.reduce((acc, id) => {
    acc[id] = sec;
    return acc;
  }, {} as StationSeconds);
}

const baseInputs: RaceInputs = {
  run: { basePaceSecPerKm: 300 }, // 5:00/km
  stationSeconds: stationConst(240), // 4:00 per station
  transitionSeconds: 20,
};

test('runSplits produces 8 even splits with no decay', () => {
  const splits = runSplits({ basePaceSecPerKm: 300 });
  assert.equal(splits.length, RUN_COUNT);
  assert.ok(splits.every((s) => s === 300));
});

test('runSplits applies compromised decay progressively', () => {
  const splits = runSplits({ basePaceSecPerKm: 300, compromisedDecayPerRun: 0.02 });
  assert.equal(splits[0], 300); // first run unaffected
  assert.equal(Math.round(splits[7]), Math.round(300 * (1 + 0.02 * 7))); // 342
  // strictly increasing
  for (let i = 1; i < splits.length; i++) assert.ok(splits[i] > splits[i - 1]);
});

test('computeRaceTime sums runs, stations, and transitions correctly', () => {
  const r = computeRaceTime(baseInputs);
  assert.equal(r.runTotalSec, 8 * 300); // 2400
  assert.equal(r.stationTotalSec, 8 * 240); // 1920
  assert.equal(r.transitionTotalSec, 8 * 20); // 160
  assert.equal(r.totalSec, 2400 + 1920 + 160); // 4480 => 1:14:40
  assert.equal(formatHMS(r.totalSec), '1:14:40');
  assert.equal(r.stationSplitsSec.length, 8);
  assert.equal(r.stationSplitsSec[0].station, 'ski-erg');
});

test('computeRaceTime accepts a per-station transition array', () => {
  const r = computeRaceTime({ ...baseInputs, transitionSeconds: [10, 20, 30, 40, 10, 20, 30, 40] });
  assert.equal(r.transitionTotalSec, 200);
});

test('projectFinishRange brackets the expected time with an asymmetric tail', () => {
  const p = projectFinishRange(baseInputs, 0.05);
  assert.equal(p.expectedSec, 4480);
  assert.ok(p.optimisticSec < p.expectedSec);
  assert.ok(p.conservativeSec > p.expectedSec);
  // conservative tail widened 1.5x relative to optimistic
  const optGap = p.expectedSec - p.optimisticSec;
  const consGap = p.conservativeSec - p.expectedSec;
  assert.ok(Math.abs(consGap - optGap * 1.5) < 1e-6);
  assert.ok(p.assumptions.length >= 3);
});

test('allocateSplitsForGoal scales a template to hit the goal exactly', () => {
  const template: SegmentTemplate = {
    run: 2400,
    stations: stationConst(240),
    transitions: 160,
  };
  const goal = 70 * 60; // 4200s
  const a = allocateSplitsForGoal(goal, template);
  const sumStations = a.stationTargetsSec.reduce((acc, s) => acc + s.sec, 0);
  const total = a.runTotalSec + sumStations + a.transitionTotalSec;
  assert.ok(Math.abs(total - goal) < 1e-6);
  assert.equal(a.stationTargetsSec.length, 8);
  assert.ok(Math.abs(a.perRunSec * RUN_COUNT - a.runTotalSec) < 1e-6);
});

test('formatHMS and parseHMS round-trip', () => {
  assert.equal(formatHMS(4480), '1:14:40');
  assert.equal(formatHMS(280), '4:40');
  assert.equal(parseHMS('1:14:40'), 4480);
  assert.equal(parseHMS('4:40'), 280);
});

// ---- validation / error paths ----

test('computeRaceTime throws on missing station', () => {
  const bad = { ...baseInputs, stationSeconds: { ...stationConst(240) } } as RaceInputs;
  // @ts-expect-error intentionally delete a required key
  delete bad.stationSeconds['row'];
  assert.throws(() => computeRaceTime(bad), /missing required station "row"/);
});

test('computeRaceTime throws on non-positive pace', () => {
  assert.throws(() => computeRaceTime({ ...baseInputs, run: { basePaceSecPerKm: 0 } }), /greater than 0/);
});

test('computeRaceTime throws on wrong-length transition array', () => {
  assert.throws(
    () => computeRaceTime({ ...baseInputs, transitionSeconds: [10, 20] }),
    /exactly 8 entries/,
  );
});

test('projectFinishRange rejects variance >= 1', () => {
  assert.throws(() => projectFinishRange(baseInputs, 1), /must be < 1/);
});

test('allocateSplitsForGoal rejects non-positive goal', () => {
  const template: SegmentTemplate = { run: 1, stations: stationConst(1), transitions: 1 };
  assert.throws(() => allocateSplitsForGoal(0, template), /greater than 0/);
});

test('parseHMS rejects malformed input', () => {
  assert.throws(() => parseHMS('90 minutes'), /Expected/);
});
