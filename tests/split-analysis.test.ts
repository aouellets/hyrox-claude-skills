import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STATION_IDS, type StationId } from '../lib/goal-time-model.ts';
import {
  analyzePaceDecay,
  comparePlannedVsActual,
  summarizeTopLoss,
  type RaceSplitInput,
  type SplitPair,
} from '../lib/split-analysis.ts';

function stationPairs(planned: number, actual: number): Record<StationId, SplitPair> {
  return STATION_IDS.reduce((acc, id) => {
    acc[id] = { plannedSec: planned, actualSec: actual };
    return acc;
  }, {} as Record<StationId, SplitPair>);
}

function runs(planned: number, actuals: number[]): SplitPair[] {
  return actuals.map((a) => ({ plannedSec: planned, actualSec: a }));
}

test('analyzePaceDecay detects the positive (fading) split direction', () => {
  const d = analyzePaceDecay([300, 305, 312, 318, 326, 333, 340, 350]);
  assert.equal(d.direction, 'positive');
  assert.ok(d.slopeSecPerRun > 0);
  assert.equal(d.fastestRunIndex, 0);
  assert.equal(d.slowestRunIndex, 7);
  assert.equal(d.spreadSec, 50);
});

test('analyzePaceDecay detects an even race', () => {
  const d = analyzePaceDecay([300, 301, 299, 300, 302, 300, 301, 299]);
  assert.equal(d.direction, 'even');
});

test('analyzePaceDecay detects a negative split', () => {
  const d = analyzePaceDecay([330, 325, 320, 315, 310, 305, 300, 295]);
  assert.equal(d.direction, 'negative');
  assert.ok(d.slopeSecPerRun < 0);
});

test('analyzePaceDecay requires at least 2 runs', () => {
  assert.throws(() => analyzePaceDecay([300]), /at least 2/);
});

test('comparePlannedVsActual ranks the largest loss first', () => {
  const input: RaceSplitInput = {
    runs: runs(300, [300, 300, 300, 300, 300, 300, 300, 300]),
    stations: {
      ...stationPairs(240, 240),
      'wall-balls': { plannedSec: 240, actualSec: 360 }, // +120s blow-up
      'sled-push': { plannedSec: 200, actualSec: 230 }, // +30s
    },
    transitions: [
      { plannedSec: 20, actualSec: 20 },
      { plannedSec: 20, actualSec: 20 },
    ],
  };
  const r = comparePlannedVsActual(input);
  assert.equal(r.largestLosses[0].segment, 'wall-balls');
  assert.equal(r.largestLosses[0].deltaSec, 120);
  assert.equal(r.largestLosses[1].segment, 'sled-push');
  assert.equal(r.totalDeltaSec, 150);
  assert.match(summarizeTopLoss(r), /Wall Balls/);
});

test('comparePlannedVsActual surfaces gains where the athlete beat plan', () => {
  const input: RaceSplitInput = {
    runs: runs(300, [300, 300, 300, 300, 300, 300, 300, 300]),
    stations: { ...stationPairs(240, 240), row: { plannedSec: 240, actualSec: 210 } },
  };
  const r = comparePlannedVsActual(input);
  assert.equal(r.largestGains[0].segment, 'row');
  assert.equal(r.largestGains[0].deltaSec, -30);
});

test('comparePlannedVsActual throws when a run split is missing', () => {
  const input = {
    runs: runs(300, [300, 300, 300]),
    stations: stationPairs(240, 240),
  } as RaceSplitInput;
  assert.throws(() => comparePlannedVsActual(input), /exactly 8 split pairs/);
});

test('comparePlannedVsActual throws on negative time', () => {
  const input: RaceSplitInput = {
    runs: runs(300, [300, 300, 300, 300, 300, 300, 300, -1]),
    stations: stationPairs(240, 240),
  };
  assert.throws(() => comparePlannedVsActual(input), /0 or greater/);
});

test('summarizeTopLoss handles a race run entirely at or under plan', () => {
  const input: RaceSplitInput = {
    runs: runs(300, [300, 300, 300, 300, 300, 300, 300, 300]),
    stations: stationPairs(240, 240),
  };
  const r = comparePlannedVsActual(input);
  assert.match(summarizeTopLoss(r), /at or under plan/);
});
