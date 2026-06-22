# Expected Behaviors — Adaptive Training Plan Manager

## When this skill should trigger

- An athlete is **partway through an existing plan** and reports completed work,
  misses, fatigue, a niggle, or a schedule/performance change, and asks how to adjust.
- Inputs present or askable: the existing plan (or its key parameters) and a recent
  training log.

## When it should NOT trigger (route instead)

- **No existing plan** → `hyrox-training-plan-builder`.
- **"Tell the story of my progress / trends"** → `hyrox-athlete-progress-report`.
- **"Should I race/train given this illness or pain?"** →
  `hyrox-race-readiness-decision-tool` (coaching judgment, not medical clearance).
- **"What do I do in the final week specifically?"** →
  `hyrox-race-week-and-taper-planner`.

## Correct handling

- **Preserve the trajectory, not the calendar.** Re-anchor to the race date and decide
  what the next block must still achieve.
- **Never stack missed work** into the remaining days. Missed volume is gone; adjust
  the goal expectation or block emphasis, not the daily density.
- Make per-thread progression decisions (advance / hold / regress) from what the log
  shows was actually tolerated.
- Output a concrete revised block (paces, RPE, sets, rest) with each change marked
  against the original.
- On thin input, return a provisional revision and ask only race-date/phase and
  recent completed-vs-missed.

## Failure modes to avoid

- Stacking the backlog ("double up to catch up").
- Rebuilding the whole plan from scratch (that's the builder).
- Reprogramming through worsening pain or illness instead of referring out.
- Quietly resolving a contradictory athlete report instead of surfacing it.
- Promising the original goal/date still holds; presenting an assumed tolerance as
  measured.
- Hardcoding division weights/rep counts from memory.
