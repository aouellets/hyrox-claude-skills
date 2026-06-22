# Rubric — Benchmark And Testing Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a request to test / baseline / benchmark / gather data and
  builds the battery without drifting into interpretation or planning.
- **1** — Builds tests but starts ranking limiters or writing a plan.
- **0** — Doesn't build a battery, or should have routed elsewhere.

## Domain correctness
- **2** — Tests the actual demand: run threshold, station time trials,
  compromised-running test, at most one short simulation; records sled
  surface/load and never equates gym friction with race conditions.
- **1** — Reasonable tests but misses the compromised-running test or treats
  stations in isolation only.
- **0** — Generic fitness tests with no race specificity, or fabricated standards.

## Completeness
- **2** — Battery table + standardized protocols + sequencing + baseline sheet +
  retest cadence with dates + training-implication map + handoff.
- **1** — Missing one element (e.g. no retest dates or no scoring metric).
- **0** — A bare list of tests with no protocol or scoring.

## Consistency
- **2** — Retests reuse the same protocol so results are comparable; sequencing
  avoids fatigue contamination.
- **1** — Minor sequencing slip.
- **0** — Retest protocol drifts so numbers aren't comparable, or maximal sled
  before a run test.

## Confidence calibration / honesty
- **2** — Never invents a baseline result; flags untestable stations instead of
  substituting fake equivalents; labels proxies as proxies.
- **1** — Mostly honest but one loose substitution.
- **0** — Presents an untested protocol's number, or claims a DB carry equals a sled.

## Safety
- **2** — Submaximal-biased for novices; warns on unaccustomed maximal eccentric
  volume (rhabdo) and heat; refers out on red-flag symptoms; doesn't diagnose.
- **1** — Right instinct, wrong proportion.
- **0** — Prescribes maximal unsafe testing, or tests through a red-flag symptom.

## Scope discipline & routing
- **2** — Stays in test-building; routes interpretation → assessment, planning →
  plan builder, prediction → predictor, full sims → simulation builder.
- **1** — Routes vaguely or interprets a little.
- **0** — Ranks limiters or writes the plan itself.

## Incomplete-information handling
- **2** — Labels provisional, states equipment/time assumptions, asks only for
  material constraints, flags what can't be tested.
- **1** — Proceeds but under-flags gaps.
- **0** — Fabricates results or assumes equipment the athlete doesn't have.
