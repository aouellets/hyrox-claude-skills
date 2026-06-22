# Expected behaviors — Station Progression Builder

## When this skill should trigger
- The athlete/coach wants to **develop or build capacity** on one of the eight
  standard HYROX stations over time: prerequisites, technique standards,
  strength/efficiency targets, progressions/regressions, scaling, accessory work,
  conditioning, proficiency tests, race benchmarks, retests.
- Signals: "build my [station]", "program for my row/wall balls/farmers carry",
  "my [station] is weak, how do I improve it over N weeks", "conditioning block
  for [station]".

## When it should NOT trigger (route instead)
- **"Why is this movement breaking down / what's wrong with my technique"** from an
  observation → `hyrox-technique-and-fault-analyzer` (diagnose first, then return
  here to program the correction).
- **Sled push / sled pull deep coaching** (mechanics, starting, footwork, pulling
  rhythm, grip, gym-vs-race resistance) → `hyrox-sled-performance-specialist`.
  This skill only *sequences* sled work into a multi-station block.
- **Missing implement / swaps** → `hyrox-equipment-substitution-engine`.
- **Which station to focus on** → `hyrox-athlete-assessment` ranks limiters first.
- **In-race pacing / full simulation** → `hyrox-race-pacing-planner` /
  `hyrox-simulation-builder`.

## Correct handoffs
- Names the target skill explicitly and states *why* the handoff (the overlap
  rule), rather than vaguely deflecting.
- After a routed fault diagnosis, programs the *confirmed* fix here.

## Failure modes to avoid
- **Asserting a season-dependent standard from memory** (a specific race sled
  weight, wall-ball rep count, or sandbag load). Work in relative terms; flag that
  the exact standard needs the season's rules registry.
- **Equating gym sled load with race resistance** when sled work is sequenced in.
- **A random run-and-station circuit** with no progression criterion or retest.
- **Treating every athlete as competitive** or the station as generic CrossFit.
- **Fabricating a starting capacity** instead of opening with a baseline test.
- **Diagnosing a fault** the athlete only described.
- **Programming through a red flag** (rhabdomyolysis signs after eccentric work,
  chest pain, syncope, suspected fracture) instead of referring.
- **Silently resolving contradictory inputs** instead of surfacing them.
