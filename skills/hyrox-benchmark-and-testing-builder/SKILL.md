---
name: Benchmark And Testing Builder
description: Use when a HYROX athlete or coach asks how to test or baseline themselves, what benchmarks to run, or how to gather the data an assessment needs — covering run thresholds, station time trials, compromised-running tests, and simulation segments. Expects available equipment, training time, and division. Returns a minimum useful test battery with standardized setup, scoring, baseline, and retest dates; it does not interpret the results into limiters (pairs with hyrox-athlete-assessment) and does not build a training plan.
category: assessment
risk_level: low
requires_current_rules: false
---

# Benchmark And Testing Builder

Design the **minimum useful test battery** that produces the data a HYROX athlete
actually needs — and nothing more. The fixed format (8 × ~1 km runs interleaved
with 8 stations through the roxzone; see
[race-structure](../../references/race-structure.md)) means a few well-chosen
tests reveal far more than a pile of random benchmarks: a run-threshold marker, a
handful of station time trials, a compromised-running test, and a short
simulation segment. The job is to standardize each test (setup, scoring,
conditions) so results are comparable over time, set a baseline, schedule
retests, and say *how each result changes training* — without drowning the
athlete in testing they can't recover from. Apply the shared
[coaching-principles](../../references/coaching-principles.md): test the demand,
keep it specific, avoid excessive full-race simulations.

## Workflow

1. **Establish purpose.** Confirm what decision the data will inform (assessment,
   plan design, prediction, retest checkpoint). Tests with no decision attached
   are not built.
2. **Inventory constraints.** Capture equipment access, weekly time, training age,
   injury history, and division — the battery must fit what the athlete can
   actually do and recover from.
3. **Select the minimum battery.** Pick the fewest tests that cover the limiters
   in question: a run threshold/economy marker, the relevant station time trials
   (load/height stated), a compromised-running test, and at most one short
   simulation segment. Justify each inclusion; cut anything redundant.
4. **Standardize each test.** Define setup, exact protocol, scoring metric,
   conditions to hold constant (equipment, friction note for sleds, rest,
   warm-up), and pass/fail or recording rules so the number is repeatable.
5. **Sequence and space the battery.** Order tests to avoid fatigue
   contamination; split across sessions/days where needed; never stack a maximal
   sled test before a run-threshold test.
6. **Set baseline and retest cadence.** Record the first result as baseline and
   schedule each retest with a date and the condition that triggers it.
7. **State the training implication.** For each test, write the rule: "if the
   result is X, training shifts toward Y." Then route interpretation to the
   assessment skill.

## Required Inputs

- The athlete's available equipment and approximate weekly training time (the
  battery is sized to these).
- The decision the data should inform (assessment, plan, prediction, or
  checkpoint), so the battery is purpose-built rather than exhaustive.

## Optional Inputs

- Division/category and goal (focuses which station loads/heights to test at).
- Existing results or a prior baseline (so retests reuse the same protocol).
- Training age, injury history, and recovery capacity (caps test intensity).
- Race date / weeks out (sets retest cadence and whether a simulation fits).

## Non-Goals

- **Not the interpretation.** It builds and standardizes tests; it does not rank
  limiters or read a time-loss profile → pair with `hyrox-athlete-assessment`.
- **Not a training plan.** It schedules *tests*, not training phases or weekly
  sessions → route to `hyrox-training-plan-builder`.
- **Not a prediction.** It does not project a finish time → route to
  `hyrox-goal-time-and-race-predictor`.
- **Not a full race simulation generator.** At most one short simulation segment
  here; full simulations → `hyrox-simulation-builder`.

## Default Output

1. **Purpose & constraints** — what the data informs, equipment/time available.
2. **Test battery table** — for each test: name, what it measures, protocol
   summary, scoring metric, equipment/conditions, and why it's included.
3. **Standardized protocols** — per test: setup, step-by-step, hold-constant
   conditions (incl. sled friction caveat), warm-up, rest, recording rule.
4. **Sequencing & schedule** — which tests on which day, spacing rationale.
5. **Baseline record sheet** — fields to log so retests are comparable.
6. **Retest cadence** — each test's retest date and the trigger to retest sooner.
7. **Training-implication map** — for each result band, what training changes.
8. **Handoff** — route results to `hyrox-athlete-assessment` for interpretation.

## Safety and Scope

Testing is intentionally submaximal-biased and recovery-aware. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
warn against maximal eccentric or sled volume that risks rhabdomyolysis in
unaccustomed athletes, build in heat-illness caution for time trials in the heat,
and keep tests conservative for novices and returners. If the athlete reports a
red-flag symptom or pain, do not prescribe a test that loads it; pause and refer
to an appropriate professional. This skill does not diagnose and does not clear
an athlete to test through pain.

## Handling Incomplete Information

If equipment, time, or purpose is missing, return a clearly-labeled
**provisional** battery built on stated assumptions (e.g. "assuming gym access to
SkiErg, rower, and sled; ~4 h/week"), and ask only for the constraints that
change the battery — equipment access and weekly time usually do; exact bodyweight
usually does not. Never invent a baseline result the athlete hasn't produced and
never present an untested protocol as if it had already yielded a number. If the
athlete asks for an exhaustive 20-test battery they can't recover from, push back
and propose the minimum useful subset instead.

## Related Skills and Routing

- **Interpret the results** → `hyrox-athlete-assessment` (this skill's natural pair).
- **Turn findings into a plan** → `hyrox-training-plan-builder`.
- **Predict a finish from the numbers** → `hyrox-goal-time-and-race-predictor`.
- **Build full race or partial simulations** → `hyrox-simulation-builder`.
- **Track progress across many tests over time** → `hyrox-athlete-progress-report`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
