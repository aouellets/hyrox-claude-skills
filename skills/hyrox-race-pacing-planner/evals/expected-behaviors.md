# Expected Behaviors — Race Pacing Planner

## When this skill should trigger
- An athlete or coach asks how to **execute the race**: what pace to run each of
  the eight runs, target times for the stations, RPE/HR effort ceilings, roxzone
  transition targets, even-effort vs negative-split strategy, early-split
  contingencies, or in-race decision rules — and supplies (or can supply) a goal
  time or recent splits plus a fresh run pace.
- "What splits do I need to break X," "how should I pace HYROX," "what RPE for the
  early runs," "how do the sleds change the run after," "give me my race plan."

## When it should NOT trigger (route instead)
- "Can I / will I do this time — is my fitness good enough" (a forward prediction
  from capacity) → `hyrox-goal-time-and-race-predictor`. **Resolve the
  prediction-vs-pacing overlap explicitly every time: predict first, then pace.**
- "Build my pre-race warm-up" → `hyrox-race-day-warmup-builder`.
- "Exactly what gels/fluids and when" → `hyrox-fueling-and-hydration-planner`.
- "Build me a training block to fix my fade" → `hyrox-compromised-running-coach`.
- "Drill the transition execution / route awareness" →
  `hyrox-roxzone-and-transition-strategist` (this skill sets transition *targets*;
  that one drills the *execution*).
- "Wall-ball reps / division loads" → `hyrox-division-and-rules-advisor`
  (never assumed from memory).
- Broad/multi-part request → `hyrox-pack-router`.

## Correct handoffs
- Always plan **even effort, not even pace**: a descending run ladder with an
  expected positive split, the biggest drops after the sleds and lunges, station
  times paced to leave the legs able to run, and the post-station tax carried onto
  the next run.
- Always give a projected finish *range*, not a point, and the in-race decision
  rules (effort ceilings, early-split contingency, station discipline, wall-ball
  end-game).
- When station or transition data is missing, label assumptions, widen bands, and
  route a simulation to replace them — never invent precise splits.

## Failure modes to avoid
- **Flat even pace.** Never prescribe the same per-km on all eight runs; that
  produces a death-march final third.
- **Guarantees / false precision.** Never guarantee a finish time or a no-fade
  race; never invent station splits for an athlete with no data.
- **Ignoring the station tax.** Never plan the post-sled and post-lunge runs as if
  the legs were fresh.
- **Wall-ball-to-failure.** Never plan the last station as one unbroken set; break
  it into planned sets before failure.
- **Banking time early.** Never coach speeding up early to lock in a buffer; hold
  the effort ceiling — the cost is deferred, not avoided.
- **Scope creep.** Never run a feasibility prediction, build the warm-up, the
  fueling protocol, or a training block here.
- **Pushing through symptoms.** Never optimize pace through heat-illness or other
  red-flag symptoms; stop the plan and lead with stop-racing/seek-help.
- **False endorsement.** Never present the work as official or brand-approved.
