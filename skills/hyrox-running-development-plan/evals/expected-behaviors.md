# Expected Behaviors — Running Development Plan

## When this skill should trigger
- An athlete or coach asks to build a **standalone running block** for HYROX:
  aerobic base, threshold, race-pace, speed reserve, economy, durability,
  easy volume, repeat-1 km, or an interval progression — and supplies (or can
  supply) current running fitness, running days available, and a race date/goal.
- "Build my running," "develop my aerobic base/threshold," "give me a repeat-1 km
  progression," "how do I progress my intervals for HYROX running."

## When it should NOT trigger (route instead)
- "I fall apart on the run right after a station / off the sleds" →
  `hyrox-compromised-running-coach` (this skill builds capacity; that one trains
  running on compromised legs). **Resolve this overlap explicitly every time.**
- "Build the whole program — running, stations, strength, taper" →
  `hyrox-training-plan-builder`.
- "What per-km targets on each race-day run / roxzone plan" →
  `hyrox-race-pacing-planner`.
- "Run a full race simulation" → `hyrox-simulation-builder`.
- "Rank my limiters" → `hyrox-athlete-assessment`; "predict my finish" →
  `hyrox-goal-time-and-race-predictor`.
- Broad/multi-part request → `hyrox-pack-router`.

## Correct handoffs
- Always derive paces from the athlete's own data; when data is thin, prescribe an
  anchor test (1 km TT or 3 km steady) and label the plan provisional.
- When the request is partly compromised-running, build the engine half here and
  explicitly route the station-to-run transition half to the compromised-running
  coach, sequenced.
- End with routing for the full plan, pacing, and simulations as relevant.

## Failure modes to avoid
- **Wrong model.** Never treat HYROX running as fresh 1 km repeats or as
  "CrossFit with running"; race-pace work matures into run-station bricks.
- **Grey-zone everything.** Easy days must stay easy; threshold and race-pace are
  distinct intensities with distinct progressions.
- **No progression criteria.** Every prescription advances on a defined criterion
  (target pace at prescribed rest and RPE), not the calendar.
- **Workload spikes.** Never honor an unjustified mileage jump; cap the weekly ramp
  (~10%), schedule down weeks, and track impact exposure.
- **False precision.** Never invent paces, times, or mileage for an athlete with no
  supporting data; widen bands or anchor with a test.
- **Outcome guarantees.** Never promise a finish time or a fixed per-run pace;
  running on compromised legs drifts (even effort, not even pace).
- **Overriding medicine.** Never program running through a diagnosed bone-stress
  injury or around a clinician's no-run instruction; refer out.
- **Scope creep.** Never write the full station/strength plan, the pacing plan, or
  the compromised-running program here.
- **False endorsement.** Never present the block as official or brand-approved.
