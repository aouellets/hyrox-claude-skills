---
name: Wall Ball Completion Planner
description: Use when a HYROX athlete or coach wants a realistic plan to complete the wall ball station — target set structure, planned and backup breaks, breathing rhythm, squat efficiency, throw timing, catch position, no-rep mitigation, fatigue-specific practice, and prep volume — and provides the season/division rep count (or accepts a labeled assumption) and recent wall ball capacity. Returns a broken-set completion plan built for cooked legs at the END of the race, not an unbroken set the athlete can only hit fresh. Not general squat strength programming (route to hyrox-station-progression-builder) and not whole-race in-race pacing (route to hyrox-race-pacing-planner) rather than absorbing them here.
category: stations
risk_level: low
requires_current_rules: false
---

# Wall Ball Completion Planner

Build a realistic plan to **complete the wall ball station** — the final station of
the race, performed on the most fatigued legs of the day with no run after it
([station-taxonomy](../../references/station-taxonomy.md),
[compromised-running](../../references/compromised-running.md)). This covers target
set structure, planned and backup breaks, breathing rhythm, squat efficiency, throw
timing, catch position, no-rep mitigation, fatigue-specific practice, and prep volume.

> **The core discipline: plan for cooked legs, not for fresh.** Wall balls come last,
> after eight runs and seven stations including the sleds and sandbag lunges that
> flood the legs. A plan built around an **unbroken set the athlete can only hit
> fresh** is a fantasy that ends in a failure spiral mid-station. This skill builds a
> **broken-set plan with planned and backup breaks** sized to the athlete's
> *fatigued* capacity, so the station gets finished without a stall.

> **Rep count is season- and division-dependent — never asserted from memory.** The
> total number of wall balls changes by season and division. This skill **requires
> the rep count** or proceeds on a **clearly-labeled assumption**, and points the
> athlete to `hyrox-division-and-rules-advisor` for the authoritative number. The set
> structure is given as *proportions and a method* so it holds for any rep count.

## Workflow

1. **Establish the rep count and capacity.** Get the **season/division rep count** (or
   set a labeled assumption and flag it) and the athlete's **recent wall ball
   capacity** — ideally what they can do *fatigued*, but at minimum a fresh unbroken
   number and how it degrades. State that the plan is built for end-of-race legs.
2. **Estimate fatigued capacity.** Translate fresh capacity into a realistic fatigued
   working-set size. A set the athlete grinds out fresh is **not** their race set; the
   race set is smaller and protects against a stall. Label this as an estimate.
3. **Coach squat & throw efficiency.** Hit consistent depth and the target standard
   every rep (no-reps are the most expensive failure), an efficient catch-into-squat
   rhythm (receive the ball into the descent rather than catching, pausing, then
   squatting), and a throw timing that uses leg drive into the throw rather than
   muscling it with the arms when the legs are gone.
4. **Build the broken-set plan.** Lay out **planned sets with planned breaks** sized to
   fatigued capacity (e.g. descending set sizes as fatigue accumulates), plus
   **backup breaks** the athlete is *allowed* to take without it being a failure —
   pre-deciding the breaks prevents the demoralizing unplanned stall.
5. **Set the breathing rhythm.** Tie breathing to the rep cycle (exhale on the throw),
   and use the planned breaks for a few deliberate breaths to reset rather than
   standing gassed and panicked.
6. **Mitigate no-reps.** Prioritize depth and target consistency over speed late in the
   set; a no-rep costs a redo on the most fatigued legs of the day. Standard-honest
   reps at a steady cadence beat fast sloppy reps that get waved off.
7. **Prescribe fatigue-specific practice and prep volume.** Rehearse wall balls
   **pre-fatigued** (after leg work or a short brick — lunges or a run into wall
   balls), not just fresh, so the broken-set plan is trained under the real condition.
   Give prep volume, a progression criterion (hold the planned set sizes under
   fatigue), and a retest date.

## Required Inputs

- **Season/division rep count** — the total wall ball reps. Required, or proceed on a
  **clearly-labeled assumption** and route the athlete to the rules advisor for the
  real number. The skill never asserts the count from memory.
- **Recent wall ball capacity** — a fresh unbroken number at minimum, ideally a
  *fatigued* number (e.g. wall balls after leg work). Sets the working-set size; if
  absent, the skill prescribes a baseline test rather than inventing a number.

## Optional Inputs

- The athlete's squat strength and depth/mobility notes (informs efficiency and the
  no-rep risk).
- Observed degradation pattern (how the set falls apart now — depth, target, or pace).
- The lunge/run that precedes wall balls in their training (to set up pre-fatigued
  practice realistically).
- Goal finish time and weeks to race (for prep volume and retest timing).
- Shoulder/knee niggle history (calibrates volume and regressions).
- Ball weight / target height if the athlete trains off-standard (so the plan notes
  the gap to race standard).

## Non-Goals

- **Not general squat strength programming.** Building the underlying leg strength,
  squat patterning, or a strength block → route to `hyrox-station-progression-builder`.
  This skill plans *completion of the station*, not the strength base under it.
- **Not whole-race in-race pacing.** How wall balls fit the eight-run/eight-station
  effort budget and the run that precedes them → `hyrox-race-pacing-planner`.
- **Not an asserted rep count.** It will **not** state the season/division rep count
  from memory → `hyrox-division-and-rules-advisor`.
- **Not an unbroken-set fantasy.** It will **not** prescribe an all-fresh unbroken set
  the athlete can only hit rested, even on request.
- **Not fault diagnosis from a bare description** → `hyrox-technique-and-fault-analyzer`
  first when the issue is "why is this breaking down" with thin evidence.
- **Not medical or rehab**, and **never** a guaranteed completion time.

## Default Output

1. **Station framing & rep count** — wall balls as the final station on cooked legs;
   the rep count stated as given **or** as a labeled assumption with the rules-advisor
   pointer.
2. **Capacity read & fatigued estimate** — fresh vs estimated *fatigued* working-set
   size, labeled as an estimate.
3. **Squat & throw efficiency** — depth/target standard, catch-into-squat rhythm, throw
   timing and leg drive.
4. **Broken-set plan** — the planned sets and planned breaks sized to fatigued
   capacity, **plus the backup breaks** the athlete may take without it being failure;
   given as proportions/method so it holds for any rep count.
5. **Breathing rhythm** — tied to the rep cycle and used on the planned breaks.
6. **No-rep mitigation** — depth/target priority late in the set; the cost of a redo.
7. **Fatigue-specific practice & prep volume** — pre-fatigued rehearsal, prep volume,
   progression criterion, and a retest date.
8. **Integration & adjustment** — how the practice sits in the week and the referral
   note.

## Safety and Scope

This is a coaching tool for completing the wall ball station. It does not diagnose,
treat injuries, provide rehab, override a clinician, or promise injury prevention or a
completion time. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
routine plan needs a one-line scope note; a knee or shoulder niggle gets a
conservative dose and a regression. Route sharp or worsening knee/shoulder pain,
giving-way, or any red-flag symptom to a medical professional rather than training
through it; heavy late-race leg fatigue should be ordinary tiredness, not sharp or
localized pain.

## Handling Incomplete Information

Wall ball requests often arrive without the rep count or without a *fatigued*
capacity. Always return a clearly-labeled **provisional** plan and name each gap. **If
the rep count is missing, proceed on a clearly-labeled assumption** (and route to the
rules advisor for the real number) rather than asserting it from memory; give the set
structure as proportions so it survives a different count. **If wall ball capacity is
missing, open with a baseline test** — ideally a fatigued test — rather than inventing
a number. If only a fresh number is given, say plainly that the race set is smaller
and estimate the fatigued set, labeled. Ask only for the fields that change the plan
(rep count, a fatigued capacity). If inputs conflict (e.g. an unbroken-set demand
paired with a fresh-only capacity), surface it and resolve toward a realistic broken
plan.

## Related Skills and Routing

- **Squat strength / leg strength base** → `hyrox-station-progression-builder` (this
  skill plans completion; that skill builds the strength under it).
- **The season/division rep count and standards** → `hyrox-division-and-rules-advisor`
  (this skill never asserts the count).
- **Whole-race in-race pacing and the run before wall balls** →
  `hyrox-race-pacing-planner`.
- **The compromised state arriving into wall balls** →
  `hyrox-compromised-running-coach` (the run before); **the lunges before that** are a
  `hyrox-station-progression-builder` / `hyrox-technique-and-fault-analyzer` matter.
- **"Why are my wall balls failing" from thin evidence** →
  `hyrox-technique-and-fault-analyzer` first.
- **Sparse full simulations that place wall balls last** → `hyrox-simulation-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
