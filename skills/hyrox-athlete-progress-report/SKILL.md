---
name: Athlete Progress Report
description: Use when a HYROX athlete or coach has training-block data — running, station times, simulations, strength, adherence, recovery, technique, transitions — and asks how progress is tracking, whether the block worked, or what to focus on next. Returns a measured progress report against prior baselines plus actionable next priorities. It does not rewrite the training plan itself (route to hyrox-adaptive-training-plan-manager) and does not predict a finish time or diagnose injuries.
category: assessment
risk_level: low
requires_current_rules: false
---

# Athlete Progress Report

Summarize how a HYROX athlete is tracking across a training block and convert it
into a short list of **actionable next priorities** — without rewriting the plan
itself. The race is the fixed 8 × ~1 km runs interleaved with 8 stations through
the roxzone (see [race-structure](../../references/race-structure.md)); a useful
report reads progress *against that demand* and against the athlete's own prior
baselines, not against generic standards. It synthesizes running, station times,
simulations, strength, projections, adherence, recovery, technique, and
transitions into a clear "what's improving / what's stuck / what's next." Apply
the shared [coaching-principles](../../references/coaching-principles.md):
measured, individualized, honest about uncertainty.

## Workflow

1. **Gather the block's data.** Collect current values and the prior baseline for
   each tracked area: running, the eight stations, simulation segments, strength,
   any finish projection, adherence (sessions completed vs. planned), recovery
   markers, technique notes, and transitions.
2. **Compare to baseline.** For each area compute the delta (improved / flat /
   regressed) and whether it cleared the progression criterion that was set.
3. **Weight by race relevance.** Emphasize compromised running and the limiters
   that were the block's focus; don't celebrate a fresh-PB that doesn't transfer.
4. **Read adherence and recovery honestly.** Distinguish "the training didn't
   work" from "the training wasn't done"; flag under-recovery as a cause before
   blaming programming.
5. **Note technique and transition trends.** Record whether fault work and roxzone
   rehearsal are paying off, with time evidence where available.
6. **Surface observations.** Call out anything notable: a plateau, a divergence
   between gym and simulation numbers, an adherence pattern, a recovery red flag.
7. **Set next priorities.** Produce 2–4 concrete, measurable next priorities with
   retest dates — then route any actual plan rewrite to the adaptive plan manager.

## Required Inputs

- Current values for at least the focus areas of the block (running and/or the
  worked stations), so progress can be reported on something measured.
- A prior baseline or prior report to compare against — without it, this becomes a
  one-point snapshot and should route to `hyrox-athlete-assessment` instead.

## Optional Inputs

- Adherence data (sessions completed vs. planned, missed-session reasons).
- Recovery markers (sleep, resting HR/HRV, soreness, life load).
- Simulation-segment results and any current finish projection.
- Strength markers, technique/fault notes, and transition/roxzone times.
- The block's original objectives and progression criteria (so "did it work?" is
  answerable against the actual targets).

## Non-Goals

- **Not a plan rewrite.** It reports progress and names priorities; it does not
  re-architect phases, weeks, or sessions → route to
  `hyrox-adaptive-training-plan-manager`.
- **Not a finish prediction.** It may cite a projection but does not produce the
  optimistic/expected/conservative model → route to
  `hyrox-goal-time-and-race-predictor`.
- **Not an initial assessment.** With no baseline to compare against, it's an
  assessment, not a progress report → route to `hyrox-athlete-assessment`.
- **Not medical diagnosis.** It flags recovery/red-flag concerns and refers out;
  it never names an injury or pathology.

## Default Output

1. **Header** — athlete, block window, focus areas, data on hand, confidence.
2. **Progress table** — per area: baseline → current, delta, met-criterion?
   (yes/no/partial), and a one-line read. Cover running, worked stations,
   simulations, strength, projection, transitions.
3. **Adherence & recovery** — sessions done vs. planned, recovery trend, and
   whether either explains the results.
4. **Technique & transitions trend** — what fault/roxzone work is or isn't
   returning, with time evidence where available.
5. **Observations** — notable patterns, plateaus, divergences, or concerns.
6. **Next priorities (2–4)** — concrete, measurable, each with a retest date.
7. **Handoff** — route plan changes to `hyrox-adaptive-training-plan-manager`.

## Safety and Scope

This is a reporting and prioritization tool, not a medical instrument. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
clean block needs only a one-line scope note. If recovery data or notes show a
red-flag pattern (e.g. worsening pain, signs of under-recovery trending toward
illness, disordered-eating indicators, rhabdo or heat-illness warning signs), lead
with that, recommend appropriate professional evaluation where warranted, and do
not paper over it with performance praise. Never diagnose, never promise injury
prevention, and never override a clinician's guidance that appears in the data.

## Handling Incomplete Information

If some areas lack a baseline or current value, report the areas you can and mark
the rest **"no comparison — needs data,"** clearly labeling the whole report
provisional where coverage is thin. Ask only for the inputs that change the
priorities — the focus-area current values and adherence usually do; a strength
PB on an unrelated lift usually does not. Never fabricate a prior baseline or a
current result to complete the table, and never infer a trend from a single data
point. If the data is internally contradictory (e.g. simulation times improving
while every gym station regressed), surface the divergence rather than averaging
it away.

## Related Skills and Routing

- **Rewrite/adjust the plan from this report** → `hyrox-adaptive-training-plan-manager`.
- **No baseline to compare against** → `hyrox-athlete-assessment`.
- **Turn current numbers into a finish range** → `hyrox-goal-time-and-race-predictor`.
- **Standardize the retests this report references** → `hyrox-benchmark-and-testing-builder`.
- **Deep review of a single race result** → `hyrox-post-race-performance-analyzer`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
