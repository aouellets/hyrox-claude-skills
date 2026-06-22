# Expected behaviors — Wall Ball Completion Planner

## When this skill should trigger
- The athlete/coach wants a **realistic plan to complete the wall ball station**: target
  set structure, planned and backup breaks, breathing rhythm, squat efficiency, throw
  timing, catch position, no-rep mitigation, fatigue-specific practice, prep volume.
- Signals: "plan my wall balls", "how should I break up the wall balls", "I fall apart
  on wall balls", "I keep getting no-repped", "wall balls after the lunges destroy me".

## When it should NOT trigger (route instead)
- **Squat / leg strength programming** (the strength base under the station) →
  `hyrox-station-progression-builder`.
- **The season/division rep count and standards** →
  `hyrox-division-and-rules-advisor`.
- **Whole-race in-race pacing and the run before wall balls** →
  `hyrox-race-pacing-planner`.
- **Vague "why are my wall balls failing"** from thin evidence →
  `hyrox-technique-and-fault-analyzer` first.

## The non-negotiables
- **Plan for cooked legs, not fresh.** Size the working set to *fatigued* capacity;
  build a **broken-set plan with planned and backup breaks**; **refuse an
  unbroken-fresh-only set** even on request, explaining that planned breaks beat a
  stall and a no-rep spiral.
- **Never assert the season/division rep count from memory.** Require it or use a
  **clearly-labeled assumption**, route to the rules advisor, and give the set
  structure as **proportions** so it holds for any count.
- **Never guarantee a completion time.** Use ranges and confidence language.

## Correct handoffs
- Names the target skill and *why*; plans completion but defers the strength base, the
  rep count, the whole-race pace, and bare-evidence fault diagnosis.

## Failure modes to avoid
- **Prescribing an unbroken set built on fresh capacity** for the final station.
- **Asserting a season/division rep count from memory** instead of routing it.
- Training wall balls **only fresh**, never pre-fatigued.
- Ignoring **no-reps** (depth/target) — the most expensive failure late in the set.
- **Guaranteeing a completion time.**
- **Planning around a red flag** (knee giving-way, sharp or worsening pain) instead of
  referring.
- **Silently programming a contradiction** (unbroken demand vs a low fresh max).
