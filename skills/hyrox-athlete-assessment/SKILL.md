---
name: Athlete Assessment
description: Use when a HYROX athlete or coach provides test results, training logs, race splits, or video and asks where they are losing time, what their limiters are, or what to prioritize across running, compromised running, the eight stations, grip, strength, transitions, and pacing. Expects whatever data exists (paces, station times, loads, RPE) and returns a ranked time-loss profile, not a training plan (route to hyrox-training-plan-builder) and not a finish-time prediction (route to hyrox-goal-time-and-race-predictor); it does not diagnose injuries.
category: assessment
risk_level: low
requires_current_rules: false
---

# Athlete Assessment

Turn whatever an athlete has — paces, station times, a race result, a training
log, a coach's video notes — into a ranked **time-loss profile**: where the
minutes are going and which limiters, fixed in order, return the most time for
the least training cost. HYROX is a fixed sequence of 8 × ~1 km runs interleaved
with 8 functional stations through the roxzone (see
[race-structure](../../references/race-structure.md)); an assessment must read
the athlete *as a race system*, not as a collection of isolated gym lifts. The
dominant limiter for most athletes is running expressed under fatigue, so the
assessment weights compromised running heavily and never treats a strong fresh
5 km or a big deadlift as the target adaptation. Apply the shared
[coaching-principles](../../references/coaching-principles.md) throughout.

## Workflow

1. **Intake the data you were given.** Catalogue every signal: fresh run pace,
   compromised splits, the eight station times, grip/strength markers, transition
   estimates, RPE/HR, bodyweight, race history, division, goal, and training age.
   Note explicitly what is present and what is missing.
2. **Normalize to the race demand.** Express each capacity against what the race
   asks: run pace held *across 8 runs on compromised legs*, station times at
   *sub-threshold repeatable* effort, grip endurance across farmers carry → into
   lunges, posterior-chain durability across both sleds.
3. **Estimate time cost per limiter.** For each area, estimate seconds lost
   versus a realistic target for this athlete (not an elite standard). Use the
   athlete's own data first; where you must assume, label the assumption and the
   band, and never invent a precise number you cannot support.
4. **Run a movement read where movement evidence exists** (video, fault notes,
   failed reps). Use the movement-assessment contract: observations / what cannot
   be determined / prioritized faults by time cost / cues / drills / retest.
5. **Rank the limiters.** Build the time-loss profile and a ranked limiter table
   ordering fixes by time returned ÷ training cost, flagging quick wins
   (transitions, pacing discipline, wall-ball cadence) versus slow builds
   (aerobic base, sled durability).
6. **Define retests.** Attach a concrete retest and date to each top priority so
   progress is measurable, not assumed.
7. **Route onward.** Hand the ranked profile to the plan builder or predictor;
   do not write the plan or the prediction here.

## Required Inputs

- At least one objective performance signal: a recent race result with splits, a
  station time trial, a compromised-run test, or a structured training log. With
  zero objective data the skill returns only a provisional limiter *hypothesis*
  and a testing request (route to hyrox-benchmark-and-testing-builder).
- The athlete's division/category and goal context (first finish vs. goal time),
  since limiters are ranked relative to the goal, not in the abstract.

## Optional Inputs

- Fresh vs. compromised run paces (the single most useful pair).
- All eight station times, or as many as exist, with the load/height used.
- Grip and strength markers (e.g. dead-hang, farmers hold, trap-bar or hinge load).
- RPE/heart-rate per segment, bodyweight, age, training age, injury history.
- Roxzone/transition estimates and video of any station for a movement read.
- Equipment access and weekly training time (sharpens the cost side of the ranking).

## Non-Goals

- **Not a training plan.** It prioritizes; it does not build phases, weeks, or
  sessions → route to `hyrox-training-plan-builder`.
- **Not a finish-time prediction.** It does not produce an optimistic/expected/
  conservative finish → route to `hyrox-goal-time-and-race-predictor`.
- **Not a test battery.** Designing standardized tests to *gather* the missing
  data → route to `hyrox-benchmark-and-testing-builder`.
- **Not medical diagnosis.** It never names an injury, pathology, or cause of
  pain. Pain or red-flag symptoms route to the safety framework below.

## Default Output

1. **Snapshot** — athlete, division, goal, data on hand, and confidence in the
   read (high/medium/low) given that data.
2. **Time-loss profile** — a table by race area (running, compromised running,
   each station, grip, strength endurance, transitions, pacing discipline) with:
   current marker, realistic target, estimated seconds lost, and confidence.
3. **Ranked limiter table** — limiters ordered by time returned ÷ training cost,
   tagged quick-win vs. slow-build, each with the lever that addresses it.
4. **Movement read (when evidence exists)** — observations / what cannot be
   determined / prioritized faults by time cost / cues / drills / retest.
5. **Top 3 priorities** — the few things that matter, each with a measurable
   retest and a retest date.
6. **Data gaps & next step** — what to test next and which skill to route to.

## Safety and Scope

This is a coaching analysis tool. It does not diagnose injuries or illness,
attribute pain to a structure, or clear an athlete to train or race. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
a clean dataset needs only a one-line scope note; a mentioned niggle gets an
acknowledgement plus a conservative read; a red-flag symptom (chest pain,
syncope, neurological signs, suspected fracture, rhabdomyolysis or heat-illness
warning signs, and the rest of the red-flag list) stops the assessment and leads
with a referral to an appropriate professional. Never promise injury prevention
and never present a movement fault as a medical finding.

## Handling Incomplete Information

Most assessments arrive partial. Always return a clearly-labeled **provisional**
profile from what exists, with each gap named and its effect on confidence
stated. Ask only for the fields that would materially change the ranking — the
fresh/compromised run pair and the worst two station times usually do; bodyweight
to one decimal usually does not. Never fabricate athlete data and never
manufacture a confident split for an athlete you have no data on; widen the band
or hold the limiter as a hypothesis pending a test instead. If the supplied data
is internally contradictory (e.g. a faster compromised split than fresh split),
surface the contradiction rather than silently choosing one number.

## Related Skills and Routing

- **Gather missing data** → `hyrox-benchmark-and-testing-builder` (designs the
  test battery; this skill interprets the results).
- **Turn priorities into a plan** → `hyrox-training-plan-builder`.
- **Predict a finish time** → `hyrox-goal-time-and-race-predictor`.
- **Deep station technique fault work** → `hyrox-technique-and-fault-analyzer`
  (this skill flags the fault and its time cost; that skill drills it out).
- **Falling apart specifically after stations** → `hyrox-compromised-running-coach`.
- **Review a finished race in depth** → `hyrox-post-race-performance-analyzer`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
