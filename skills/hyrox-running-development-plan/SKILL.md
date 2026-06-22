---
name: Running Development Plan
description: Use when a HYROX athlete or coach asks to build a standalone running block — aerobic base, threshold, race-pace, speed reserve, economy, durability, repeat-1km, easy volume, or interval progression — and provides current running fitness, weekly running availability, and a race date or goal. Returns a periodized running-capacity plan integrated with stations and strength with tracked impact exposure. Not the post-station fade fix (route to hyrox-compromised-running-coach) and not a full HYROX plan (route to hyrox-training-plan-builder).
category: running
risk_level: low
requires_current_rules: false
---

# Running Development Plan

Build a **standalone running-development block** that grows the engine HYROX runs
on: aerobic base, threshold, race-pace work, speed reserve, economy, and
durability, sequenced so each quality is progressed on a defined criterion rather
than the calendar. HYROX is a fixed sequence of 8 × ~1 km runs interleaved with 8
stations through the roxzone (see
[race-structure](../../references/race-structure.md)); running fitness expressed
under fatigue is the single biggest determinant of finish time for most athletes
(see [coaching-principles](../../references/coaching-principles.md), §2). This
skill develops running *capacity* and integrates it with the athlete's station
and strength work without either side blunting the other. The domain model lives
in [running-development](../../references/running-development.md). The distinct
skill of running *off heavy legs right after a station* belongs to
`hyrox-compromised-running-coach` — see routing below.

## Workflow

1. **Read current running fitness.** Anchor off recent times (5 km, 10 km, a
   threshold or 1 km test, or a fresh HYROX run pace). Derive working paces —
   easy, threshold, race-pace ~1 km, speed-reserve — from the athlete's own data,
   never from an assumed standard.
2. **Map availability and timeline.** Fix the number of running days, session
   length, terrain/equipment, and the weeks to the race. The plan must fit what
   the athlete can actually run and recover from
   ([coaching-principles](../../references/coaching-principles.md), §8).
3. **Set the architecture.** Most weeks are mostly easy volume plus two quality
   sessions; place the priority quality first when fresh and keep easy days easy.
   Phase the block: base → threshold/economy → race-pace and durability, tapering
   the emphasis toward the race demand as it nears.
4. **Prescribe the qualities with progressions.** For each — aerobic base,
   threshold, race-pace, speed reserve, economy, durability — give concrete
   paces, interval structure, rest, RPE, and a progression criterion (advance only
   when the prior session hit target pace at the prescribed rest and RPE).
5. **Integrate with stations and strength.** Sequence hard runs away from heavy
   sled/lunge days; convert repeat-1 km work toward run-station bricks as the
   block matures so the engine is rehearsed under the race's interruptions.
6. **Track impact exposure.** Sum running volume, sled distance, and
   lunge/eccentric volume week to week so load rises gradually; avoid unjustified
   spikes. Build a down week roughly every 3–4 weeks; when under-recovered, the
   regression *is* the plan.
7. **Define testing and retests.** Attach a retest and date to each priority
   quality (e.g. a threshold or repeat-1 km retest) so progress is measured, not
   assumed.

## Required Inputs

- **Current running fitness** — at least one recent time or pace test (5 km,
  10 km, threshold test, a fresh ~1 km HYROX run pace, or a structured running
  log). Without any objective running signal the plan is provisional and the
  first prescription is a paced time-trial to anchor the rest.
- **Weekly running availability** — how many days per week the athlete can run,
  typical session length, and terrain/treadmill access.
- **Race date / goal context** — weeks to the race and whether the goal is a first
  finish or a target time, since the phase emphasis and race-pace work depend on
  the timeline.

## Optional Inputs

- Fresh vs. compromised run paces (sharpens where durability and race-pace sit).
- Heart-rate data and the athlete's easy/threshold HR ceilings.
- Cadence, recent injury/niggle history, age and training age.
- The current station and strength schedule (so running is sequenced around it).
- Recent weekly mileage and any prior overuse history (calibrates the safe ramp).

## Non-Goals

- **Not compromised-running training.** It does not build the station-to-run
  transition skill — running off heavy legs, cadence/breathing recovery in the
  first 100–200 m after a station → route to `hyrox-compromised-running-coach`.
- **Not a full HYROX plan.** It does not program the stations, strength, taper,
  and race execution as one block → route to `hyrox-training-plan-builder`.
- **Not race pacing.** It does not set in-race per-run targets or the roxzone plan
  → route to `hyrox-race-pacing-planner`.
- **Not finish-time prediction or assessment** → route to
  `hyrox-goal-time-and-race-predictor` / `hyrox-athlete-assessment`.
- **Not medical or rehab.** It never diagnoses or programs around a red-flag
  symptom; pain routes to the safety framework below.

## Default Output

1. **Athlete & goal** — current running fitness, derived working paces, days
   available, weeks to race, goal context.
2. **Assumptions** — every value inferred rather than given, labeled, with the
   effect on confidence.
3. **Architecture** — weekly shape (easy volume + two quality sessions), how
   running sits alongside stations/strength, and the impact-exposure budget.
4. **Phases** — each phase with its objective, weekly structure, the quality
   prescriptions (paces / interval structure / rest / RPE), and the progression
   criterion to advance.
5. **Interval progressions** — concrete ladders (e.g. repeat-1 km, threshold
   cruise intervals, long-run extension) with hold-pace-advance-volume logic.
6. **Integration & impact tracking** — sequencing rules, the run→brick transition,
   and a weekly load table (run volume / sled / eccentric) with the down-week
   cadence.
7. **Testing & retests** — the anchor test and dated retests per quality.
8. **Adjustment rules & risks** — what to do when a session is missed, paces
   drift, or fatigue accumulates; plus the referral note.

## Safety and Scope

This is a coaching tool that builds running capacity. It does not diagnose, treat
injuries, provide rehab, override a clinician, or promise injury prevention. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
clean intake needs only a one-line scope note; a mentioned niggle gets an
acknowledgement, a conservative ramp, a regression on hand, and a marker for when
to seek advice; a red-flag symptom (sharp/worsening pain, suspected stress
fracture, acute joint instability giving way, rhabdomyolysis or heat-illness
warning signs, and the rest of the red-flag list) stops normal programming and
leads with a referral to an appropriate professional. Bone-stress and overuse risk
is managed by capping the weekly ramp and avoiding unjustified mileage spikes,
never by promising the plan prevents injury.

## Handling Incomplete Information

Most intakes are partial. Always return a clearly-labeled **provisional** plan
from what exists, naming each gap and its effect on confidence. Derive paces only
from data the athlete actually gave; where a pace must be assumed, label the
assumption, widen the band, and make the first session a paced test that anchors
the rest rather than inventing a precise pace. Ask only for the fields that
materially change the plan — current running fitness, running days available, and
weeks to race usually do; exact cadence or HR usually do not. Never fabricate
times, paces, or weekly mileage. If the inputs are internally contradictory (e.g.
a claimed 1 km pace faster than the stated 5 km pace), surface the contradiction
rather than silently picking one number.

## Related Skills and Routing

- **Running falling apart specifically after a station** → `hyrox-compromised-running-coach`
  (this skill builds the engine; that skill trains running on compromised legs).
  Overlap rule: if the request is about *capacity* — base, threshold, race-pace,
  economy, durability, weekly running structure — it belongs here; if it is about
  *recovering turnover and pace in the first 100–200 m off heavy legs after a
  station*, it belongs there. A full block usually needs both, sequenced.
- **Build the whole HYROX block** (running + stations + strength + taper) →
  `hyrox-training-plan-builder`.
- **In-race per-run pacing and roxzone targets** → `hyrox-race-pacing-planner`.
- **Rehearse running under race fatigue in full** → `hyrox-simulation-builder`.
- **Rank limiters first** → `hyrox-athlete-assessment`;
  **predict a finish** → `hyrox-goal-time-and-race-predictor`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
