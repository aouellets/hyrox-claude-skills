---
name: Training Plan Builder
description: Use when a HYROX athlete or coach provides a race date, division, experience, goal time, weekly availability, and equipment and asks to build a periodized training plan from scratch. Returns a phased plan (general prep, capacity, race-specific, simulations, peak, taper, recovery) with weekly goals, session structure, paces, and progression criteria sized to the time available. It does not revise a plan already underway (route to hyrox-adaptive-training-plan-manager), does not produce final-week taper detail (route to hyrox-race-week-and-taper-planner), and does not assess limiters or predict a finish time rather than program for one.
category: planning
risk_level: low
requires_current_rules: false
---

# Training Plan Builder

Build a periodized HYROX plan from an athlete's start point to a specific race
date. The race is the fixed 8 × ~1 km runs interleaved with 8 stations through the
roxzone (see [race-structure](../../references/race-structure.md)), so the plan is
not "running with some lifting" — it develops the aerobic engine expressed under
fatigue, repeatable sub-threshold station power, grip endurance, and compromised
running, sequenced so concurrent training does not blunt either side (see
[coaching-principles](../../references/coaching-principles.md) and
[running-development](../../references/running-development.md)). Every plan fits the
athlete's real availability, protects easy/aerobic volume, avoids unjustified
workload spikes, and states its assumptions. When the goal and the timeline are in
tension, say so rather than promising what the weeks cannot deliver.

## Workflow

1. **Establish the architecture.** Count the weeks from today to the race date,
   subtract the taper window, and decide how many weeks each phase gets. Anchor the
   phase sequence to the time available, not a fixed template.
2. **Set the weekly skeleton.** From available days/week and session length, fix the
   recurring shape: how many easy runs, how many quality runs (threshold +
   race-pace/brick), how many strength/station sessions, and where the long run and
   the brick sit. Keep hard runs and heavy lower-body/sled days separated by easy
   days.
3. **Phase the emphasis.** General prep (build base + movement competence) →
   capacity (threshold, station conditioning, grip endurance) → race-specific
   (goal-pace bricks, station-to-run transitions) → simulations (partial and, rarely,
   full) → peak → taper → recovery. Each phase declares its objective, weekly
   structure, and the criterion to progress.
4. **Make every prescription concrete.** Give paces (per km), RPE, set/break
   structure, loads as %effort or RPE (never a hardcoded division weight), distances,
   and rest. Pair each progression with a regression for under-recovered weeks.
5. **Protect the engine and manage spikes.** Keep most running easy; advance weekly
   running volume by roughly ≤10% with a down week every 3–4 weeks; track sled and
   lunge eccentric volume so it never jumps disproportionately.
6. **Build in testing.** Schedule a baseline test early and retests at phase
   boundaries (run pace, a key station, a short brick) so progression is criterion-led.
7. **State assumptions, risks, and handoffs.** Name what was assumed, where the goal
   is aggressive, and which skill owns mid-plan changes, the final week, assessment,
   and prediction.

## Required Inputs

- **Race date** (to count weeks and place the taper).
- **Division / category** (singles, doubles, relay, age group) — shapes emphasis;
  loads and rep counts are never hardcoded.
- **Experience level** (first-timer, recreational, competitive).
- **Weekly availability** — days/week and typical session length.
- **Equipment access** (treadmill/track, sled, erg(s), wall-ball target, sandbag,
  weights) — drives substitutions.

## Optional Inputs

- **Goal time** (turns the plan from general fitness into goal-paced work).
- **Running background** (current easy pace, weekly mileage, recent race times).
- **Strength background** and **station proficiency** (where the hours should go).
- **Restrictions / niggles**, life load, and recovery capacity.
- **Recent performance data** (a benchmark, a prior race) to set starting paces.
- **Concurrent training** the athlete won't drop (a sport, a lifting habit) to
  sequence around.

## Non-Goals

- **Not mid-plan revision.** Once the plan is running and the athlete logs misses,
  fatigue, or a schedule change, updating the next block is
  `hyrox-adaptive-training-plan-manager`.
- **Not the final-week taper detail.** This plan places the taper window; the
  day-by-day race-week protocol (last sled, travel, activation) is
  `hyrox-race-week-and-taper-planner`.
- **Not assessment.** Ranking limiters by time cost is `hyrox-athlete-assessment`.
- **Not prediction.** Projecting a finish range is
  `hyrox-goal-time-and-race-predictor`; this skill programs toward a goal, it does
  not promise one.

## Default Output

Use the Training-plan contract:

1. **Athlete & goal** — division, experience, race date, weeks available, goal (if
   given), days/week, session length, equipment.
2. **Assumptions** — every value inferred or assumed, flagged as such.
3. **Architecture** — the phase map across the available weeks (phase → week range →
   one-line objective), plus the recurring weekly skeleton.
4. **Phases** — for each phase: objective, weekly structure (the actual sessions
   with paces/RPE/sets/rest), and the progression criterion to advance.
5. **Testing & retesting** — baseline test and retest dates/markers.
6. **Adjustment rules** — what to do on a missed week, a bad night's sleep, or a
   niggle (regress, do not stack).
7. **Recovery** — down weeks, easy-day discipline, sleep, and the taper placement
   (handed to the race-week skill for detail).
8. **Risks & referral** — where the goal/timeline is tight, overuse risks, and the
   safety boundary.

## Safety and Scope

Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately: a routine plan needs a one-line scope note. If the athlete reports
a niggle, keep load conservative, give the regression, and say what would warrant
stepping back or seeking advice. If a red-flag symptom appears (chest pain,
syncope, suspected fracture, rhabdomyolysis or heat-illness signs, disordered-eating
indicators, pregnancy/postpartum uncertainty), stop programming, name the boundary,
and refer to the appropriate professional rather than building around it. This skill
never promises injury prevention or a guaranteed finish.

## Handling Incomplete Information

Always return a clearly-labeled **provisional** plan from what exists rather than
refusing. Assume conservative, named starting paces and loads when running or
strength data is missing, and tie the plan's confidence to that. Ask only for the
fields that materially change the plan — race date, days/week, and equipment almost
always do; an exact current 5 km PR rarely changes the architecture. Never fabricate
athlete test results or a division weight, and never present a provisional pace as a
measured one. If the requested goal is implausible in the weeks available, give a
realistic provisional plan plus the honest caveat instead of a flattering one.

## Related Skills and Routing

- **Revise a plan already in progress** → `hyrox-adaptive-training-plan-manager`.
- **Final-week taper / race-week protocol** → `hyrox-race-week-and-taper-planner`
  (this skill only *places* the taper).
- **Rank limiters before programming** → `hyrox-athlete-assessment`.
- **Project a finish range / test goal feasibility** →
  `hyrox-goal-time-and-race-predictor`.
- **Design the baseline/retest battery** → `hyrox-benchmark-and-testing-builder`.
- **Standalone running build** → `hyrox-running-development-plan`; **compromised
  running** → `hyrox-compromised-running-coach`; **station conditioning** →
  `hyrox-station-progression-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
