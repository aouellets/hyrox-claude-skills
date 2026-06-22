# Expected behaviors — Equipment Substitution Engine

## When this skill should trigger
- The athlete/coach needs to **train a station without the matching equipment** and
  wants a substitution that preserves the closest feasible station-specific demand.
- Signals: "my gym lost the sled, what do I do instead", "no farmers handles, how do I
  train the carry", "travelling with only X, sub the row/wall balls/burpees", "what's
  the closest swap for station Y".

## When it should NOT trigger (route instead)
- **Building the station block once equipment exists** →
  `hyrox-station-progression-builder` (this skill is the *instead-of*, that one is the
  *build*).
- **Real-sled push/pull deep coaching** → `hyrox-sled-performance-specialist`.
- **The season/division race load, rep count, or standards** →
  `hyrox-division-and-rules-advisor`.
- **Fault diagnosis** → `hyrox-technique-and-fault-analyzer`; **whole-race pacing** →
  `hyrox-race-pacing-planner`.

## The non-negotiables
- **State PRESERVES and FAILS for every swap.** A substitute approximates; it is never
  an equivalence. Map the target station onto the **six demand axes** (joint action,
  force orientation, contraction type, energy-system load, grip demand,
  compromised-run transfer) and choose the swap on the most-important-to-preserve axis.
- **Refuse to equate a gym substitute with race resistance** — sled friction is the
  worst case (turf, flooring, sled model, friction/wear, calibration, distance). Treat
  any race comparison as a **labeled assumption** to re-calibrate by feel.
- **Never assert a race resistance, load, or rep count from memory** — route to the
  rules advisor.
- Pair the swap with a **run** where compromised-running transfer is part of the demand.

## Correct handoffs
- Names the target skill and *why*; provides the swap and its limits, then hands off the
  real station block, real-sled coaching, and rules-owned numbers.

## Failure modes to avoid
- **Equating a gym substitute (especially a sled) with race resistance.**
- **Asserting a race load or rep count from memory.**
- Presenting a swap as equivalent / omitting what it FAILS to reproduce.
- Picking a swap by superficial resemblance with no demand-axis analysis.
- **Committing to a swap without knowing the available equipment.**
- **Building a swap around a red-flag injury** instead of referring.
- Treating HYROX stations as generic CrossFit movements.
