# Expected Behaviors — Simulation Builder

## When this skill should trigger
- A request to build a HYROX race-rehearsal session: station-only, run-station
  bricks, a half/segmented sim, a full simulation, or a doubles/relay sim.
- "Build me a sim", "rehearse the race", "test my pacing over a chunk",
  "train the post-sled runs with bricks".

## When it should NOT trigger (route instead)
- "Build my whole training program" → `hyrox-training-plan-builder`.
- "A single session for threshold / grip / race pace" (no race rehearsal) →
  `hyrox-race-specific-workout-generator`.
- "What splits should I run on race day" → `hyrox-race-pacing-planner`.
- "Analyze the splits from my sim" → `hyrox-post-race-performance-analyzer`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct behavior
- Pick the **smallest sufficient format** for the stated goal; justify it.
- For every session, specify all seven elements: objective, timing, intensity,
  labeled equipment substitutions, data to collect, recovery cost, advancement
  criterion.
- Pace stations to a repeatable effort, not to failure; control the first
  100–200 m out of each station; prioritize sled-to-run and lunge-to-run bricks.
- Treat the full simulation as a sparse, earned benchmark with a recovery window;
  never equate gym sled friction with race resistance.
- Defer doubles/relay work-split rules to the current season; do not assert them.

## The required adversarial behavior
- **Athlete wants a full race simulation every week:** refuse to build it. Explain
  the recovery cost — the full sim is the most fatiguing session and weekly use
  crowds out the easy volume and quality running that build the engine — and give
  a smarter exposure plan (bricks/segments as the workhorse, one or two half sims,
  a single earned full sim clear of the taper, none in race week).

## Failure modes to avoid
- Defaulting to a full simulation when a smaller format meets the goal.
- Scheduling frequent full sims with no recovery accounting.
- Prescribing stations to failure or fresh-pace runs off heavy legs.
- Equating gym sled load/friction with race resistance.
- Fabricating splits or a finish time when data is missing (should be provisional).
- Picking a maximal session when a self-report contradicts a stated symptom.
- Building the periodized plan or the in-race pacing plan instead of routing.
- Presenting the tool as official, certified, or endorsed.
