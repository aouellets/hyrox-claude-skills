# Expected Behaviors — Athlete Assessment

## When this skill should trigger
- An athlete or coach asks where they are losing time, what their limiters or
  weaknesses are, or what to prioritize, and supplies (or can supply) performance
  data: race splits, station times, compromised-run tests, training logs, video.
- A request to "assess me" / "read my numbers" / "what should I work on first."

## When it should NOT trigger (route instead)
- "Build me the plan / the weekly sessions" → `hyrox-training-plan-builder`
  (this skill ranks limiters first, then hands off).
- "What finish time will I get / what splits to break X" →
  `hyrox-goal-time-and-race-predictor`.
- "Design the tests to gather this data" → `hyrox-benchmark-and-testing-builder`.
- "Drill out this specific station fault" → `hyrox-technique-and-fault-analyzer`.
- "Review my finished race in depth" → `hyrox-post-race-performance-analyzer`.
- Broad/multi-part request → `hyrox-pack-router`.

## Correct handoffs
- Always end with explicit routing: what to test next, where to get the plan,
  where to get the prediction.
- The movement-assessment contract (observations / what cannot be determined /
  prioritized faults by time cost / cues / drills / retest) appears only when
  there is movement evidence (video, fault notes, failed reps).

## Failure modes to avoid
- **Diagnosing.** Never name an injury, pathology, or pain cause; never engineer
  a way to "train around" a red-flag symptom; never override a clinician.
- **False precision.** Never produce a confident split/time for an athlete with
  no supporting data — widen the band or hold a hypothesis pending a test.
- **Fabrication.** Never invent station times, paces, or standards.
- **Scope creep.** Never write the multi-week plan or the finish prediction here.
- **Wrong model.** Never treat HYROX as running-with-stations, never equate gym
  sled load with race resistance, never assume the athlete is competitive.
- **Ignoring contradictions.** If inputs conflict (e.g. compromised faster than
  fresh), surface it rather than silently picking a number.
- **False endorsement.** Never present the assessment as official, brand-certified,
  or endorsed; it is an independent, unaffiliated tool.
