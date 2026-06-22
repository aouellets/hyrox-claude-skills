# Expected Behaviors — Training Plan Builder

## When this skill should trigger

- An athlete or coach asks to **build** a periodized HYROX plan from a start point to
  a race date ("N weeks to my race, build me a plan").
- Inputs present or askable: race date, division, experience, availability,
  equipment, and (optionally) goal time and performance history.

## When it should NOT trigger (route instead)

- **Plan already in progress + a miss/fatigue/schedule change** →
  `hyrox-adaptive-training-plan-manager`. The builder creates; the manager revises.
- **"What exactly do I do this final week?"** → `hyrox-race-week-and-taper-planner`.
  The builder *places* the taper; it does not detail it.
- **"What time should I aim for / is X feasible?"** →
  `hyrox-goal-time-and-race-predictor`. Programming toward a goal ≠ predicting one.
- **"Where am I losing time?"** → `hyrox-athlete-assessment`.
- **Standalone running build** → `hyrox-running-development-plan`; **station
  conditioning** → `hyrox-station-progression-builder`; **equipment-limited
  substitutions** → `hyrox-equipment-substitution-engine`.

## Correct handling

- Anchor the phase map to the **actual weeks available**, not a fixed template.
- Protect easy/aerobic volume; advance weekly running volume ≤~10% with down weeks
  every 3–4 weeks; track sled/lunge eccentric load to avoid spikes.
- Sequence concurrent training; never stack a hard run on heavy legs.
- Every prescription is concrete (paces, RPE, sets, rest, loads as effort) and has a
  progression criterion plus a regression.
- On missing data: return a **provisional** plan, flag assumptions, ask only for the
  fields that change the architecture.

## Failure modes to avoid

- Guaranteeing a finish time or promising injury prevention.
- Building an unjustified workload spike on demand (e.g. 100 km/week + daily heavy
  sled, or halving a time in 3 weeks).
- Treating HYROX as CrossFit-with-running; ignoring compromised running.
- Hardcoding a division weight or rep count from memory.
- Fabricating athlete test results or presenting an assumed pace as measured.
- Stacking missed sessions instead of routing to the adaptive manager.
