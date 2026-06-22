---
name: Goal Time And Race Predictor
description: Use when a HYROX athlete or coach provides paces, station times, and transition estimates and asks for a projected finish, a realistic goal-time range, or whether a target is feasible. Returns optimistic/expected/conservative finish, run/station/transition totals, a confidence band tied to data quality, and explicit assumptions and gaps — never a single guaranteed number and never false precision. It does not give in-race pacing instructions (route to hyrox-race-pacing-planner) and does not build a training plan.
category: assessment
risk_level: low
requires_current_rules: false
---

# Goal Time And Race Predictor

Project a HYROX finish as an honest **range**, not a single confident number. The
race is the fixed 8 × ~1 km runs interleaved with 8 stations through the roxzone
(see [race-structure](../../references/race-structure.md)), so a defensible
projection sums three things — running, station work, and transitions — and then
widens a band around them according to how good the input data is. The output is
optimistic / expected / conservative, with the assumptions and data gaps shown so
the athlete can audit it. Per
[coaching-principles](../../references/coaching-principles.md), predictions are
ranges with stated confidence; this skill never promises a finish time.

## The deterministic model (`lib/goal-time-model.ts`)

This skill is backed by a transparent, pure-function model. It makes no network
calls, reads no clock, and stores no athlete data. Describe it in prose so the
athlete can audit every number:

- **`runSplits(run)`** — produces the eight 1 km run splits from a fresh
  `basePaceSecPerKm` and a `compromisedDecayPerRun` fraction. Run *i* (1-indexed)
  is `basePace × (1 + decay × (i − 1))`, so each run is modeled slower than the
  last — the central HYROX fatigue effect. Decay 0 = a perfectly even runner
  (rare/unrealistic); 0.02 = each run ~2% slower than the previous baseline.
- **`computeRaceTime(inputs)`** — the deterministic expected time. It sums the
  eight run splits (with compromised decay), the eight supplied station times, and
  the roxzone transition windows (one number applied to all eight, or a
  per-station array). Returns per-segment splits and grand totals. Missing or
  invalid inputs throw rather than silently produce a misleading number.
- **`projectFinishRange(inputs, varianceFraction, extraAssumptions)`** — wraps the
  expected total in a band the **caller chooses** from data quality. The
  optimistic tail is `−varianceFraction`; the conservative tail is **widened to
  `+1.5 × varianceFraction`** because real races fail asymmetrically (blow-ups
  cost more than perfect days save). The model never fabricates a band: a small
  band (~0.02) suits recent race data, a wide band (~0.08+) suits sparse or stale
  data. It echoes back the assumptions used.
- **`allocateSplitsForGoal(goalSec, template)`** — the inverse: given a goal time
  and a *relative* segment template (the athlete's strengths), it scales the
  template so the parts sum to the goal and returns concrete per-segment targets.
  This answers "what would each segment need to be to hit X?" without inventing a
  single canonical answer.

Crucially: **the variance band reflects data quality, not a statistical
guarantee.** It is not a probability that the athlete will finish in the range; it
is a transparency device that gets wider as the inputs get weaker.

## Workflow

1. **Collect the model inputs.** Fresh run pace, a compromised-decay estimate, the
   eight station times, and a roxzone/transition estimate. Note which are measured
   and which are assumed.
2. **Set the variance from data quality, explicitly.** Recent race + tested
   stations → tight band (~0.02–0.03). Some measured, some assumed → ~0.04–0.06.
   Little hard data → ~0.08+ and say so. State why you chose the band.
3. **Compute the expected time and the band** (`computeRaceTime` then
   `projectFinishRange`), and break it into run / station / transition totals.
4. **For a goal-feasibility ask, invert** (`allocateSplitsForGoal`): show the
   per-segment targets the goal implies and judge whether they're realistic for
   this athlete.
5. **Surface assumptions and gaps.** List every assumed input and how it widens
   the band; name what to measure to tighten it.
6. **Route onward.** In-race pacing execution → pacing planner; training to close
   the gap → plan builder.

## Required Inputs

- A fresh run pace (per km) — measured or, if assumed, clearly labeled.
- Station times for the eight stations, or enough of them that the rest can be
  assumed with a stated, widened band.
- A roxzone/transition estimate (a single per-station number is fine).
- For a feasibility check: the goal time being tested.

## Optional Inputs

- A compromised-decay estimate from a compromised-run test (sharpens run totals).
- Recent race splits (tightens the variance band considerably).
- Division/category and conditions (heat, venue) that shift expectations.
- The athlete's segment strengths (improves the goal-inversion template).

## Non-Goals

- **Not in-race pacing instructions.** It predicts the outcome; it does not tell
  the athlete how to execute each run/station on the day → route to
  `hyrox-race-pacing-planner`. (Overlap note below.)
- **Not a training plan.** It does not build training to reach the goal → route to
  `hyrox-training-plan-builder`.
- **Not a guarantee.** It never returns a single promised finish time or a
  probability dressed up as certainty.

## Default Output

1. **Goal & inputs** — the question asked, every input, and which are measured vs.
   assumed.
2. **Variance rationale** — the band chosen and why (data quality), stated plainly.
3. **Finish projection** — optimistic / expected / conservative (H:MM:SS), with
   the conservative tail explicitly wider.
4. **Segment totals** — run total, station total, transition total, and per-run /
   per-station splits with compromised decay applied.
5. **Goal feasibility (if asked)** — the per-segment targets the goal implies and
   a realistic/borderline/unrealistic verdict for this athlete.
6. **Assumptions & gaps** — assumed inputs, their effect on the band, and what to
   measure to tighten the prediction.
7. **Handoff** — pacing planner for execution, plan builder for training.

## Safety and Scope

This is an analysis tool, not a medical or guarantee instrument. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
projection needs only a one-line scope note. If the athlete raises pain, illness,
or a red-flag symptom alongside the prediction, name it and refer out rather than
projecting as if the athlete were healthy; whether to race after illness is a
separate decision (`hyrox-race-readiness-decision-tool`, coaching judgment, not
medical clearance). Never imply a predicted time is a promise or that hitting it
prevents injury.

## Handling Incomplete Information

Always return a clearly-labeled projection from what exists, widening the variance
band to match the missing data instead of refusing. Use assumed inputs only when
labeled as assumptions, and tie each to how much it widens the band. Ask only for
the inputs that materially tighten the range — a compromised-decay estimate and
the two slowest station times usually do; a precise transition number rarely does.
Never fabricate a station time or a confident split for an athlete with no data,
and never present the band as a statistical probability. If a goal demands
segment targets that are clearly unrealistic for the athlete, say so plainly
rather than producing flattering numbers.

## Related Skills and Routing

- **In-race execution / how to pace each segment** → `hyrox-race-pacing-planner`.
  *Overlap note:* this skill answers "what time will I get / is X feasible?"; the
  pacing planner answers "how do I run and break each segment on the day to hit
  it?" Prediction first, pacing second.
- **Training to reach the goal** → `hyrox-training-plan-builder`.
- **Rank limiters behind the gap** → `hyrox-athlete-assessment`.
- **Gather the inputs this needs** → `hyrox-benchmark-and-testing-builder`.
- **Review an actual result vs. the projection** → `hyrox-post-race-performance-analyzer`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
