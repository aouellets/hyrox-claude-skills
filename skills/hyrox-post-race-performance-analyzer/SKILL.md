---
name: Post Race Performance Analyzer
description: Use after a HYROX athlete finishes a race and provides their run splits, station times, transitions, penalties, planned targets, and notes on fueling, warm-up, or perceived effort, and asks where the race was won or lost; it compares planned vs actual segment by segment, ranks the largest addressable losses, classifies the split direction and pace decay, and separates observed facts from labeled root-cause hypotheses. It does not rewrite the training plan (route to hyrox-adaptive-training-plan-manager) or assess an athlete from scratch with no race (route to hyrox-athlete-assessment).
category: post-race
risk_level: low
requires_current_rules: false
---

# Post Race Performance Analyzer

Turn a completed HYROX result into a prioritized debrief: where the time went,
which losses are worth fixing, and what to test next cycle — with observed facts
kept strictly separate from labeled hypotheses. HYROX is a fixed sequence of
8 × ~1 km runs interleaved with 8 stations through the roxzone (see
[race-structure](../../references/race-structure.md)); the analysis reads the
result *as a system*, weighting the runs (especially the compromised ones after
sleds and lunges) and the roxzone, not just the headline finish. Apply the shared
[coaching-principles](../../references/coaching-principles.md) and the
even-effort model in [pacing-model](../../references/pacing-model.md) throughout.

## The split-analysis model (`lib/split-analysis.ts`)

The deterministic math lives in
[lib/split-analysis.ts](../../lib/split-analysis.ts). It is pure (no network,
clock, or stored athlete data) and reports *what* changed and ranks the
magnitude; it never fabricates causes. Describe it in prose so the athlete can
audit it:

- **`comparePlannedVsActual(input)`** takes 8 run `{plannedSec, actualSec}`
  pairs, all 8 station pairs, and optional transition pairs. It returns, per
  segment, `deltaSec` (`actual − planned`; positive = slower than planned, a
  loss) and `deltaFraction`, plus **`largestLosses`** (segments ranked most-over
  first) and **`largestGains`** (segments beaten, most-under first), the planned
  and actual totals, and the embedded `paceDecay`.
- **`analyzePaceDecay(runActualSec)`** fits a least-squares slope of run time vs
  run index. It reports `slopeSecPerRun`, `slopeFractionPerRun` (slope ÷ first
  run), the run spread, fastest/slowest run index, and a **direction**:
  `positive` (slowed — the common HYROX fade), `even`, or `negative` (sped up).
  The even band is `|fraction| < 0.015` (~1.5% drift per run) — a documented
  **modelling choice**, not a measured constant, so say so.
- **`summarizeTopLoss(report)`** names the single biggest addressable loss in one
  line (segment, seconds over plan, percent over).

Where the athlete has no *planned* numbers, set plausible planned targets from
the goal-time model or their own history, **label them as assumptions**, and
widen the read — do not present an assumed plan as if it were the athlete's.

## Workflow

1. **Collect the actual result and the plan** — 8 run splits, 8 station times,
   transitions, penalties/no-reps, plus the planned targets if any.
2. **Validate the data.** Check internal consistency: segment times should sum
   toward the stated finish (allowing for un-itemized roxzone). If they don't,
   surface the contradiction (Workflow step 7) rather than reconciling it.
3. **Run the comparison** via `comparePlannedVsActual` to get per-segment deltas,
   ranked losses/gains, and pace decay.
4. **Classify the split** from `analyzePaceDecay` (positive/even/negative) and
   note the slowest run and where the fade accelerates (typically post-sled,
   post-lunge).
5. **Separate facts from hypotheses.** State the observed losses as facts. For
   each top loss, offer **labeled** root-cause *hypotheses* with a confidence
   level, never asserted as proven.
6. **Prioritize next cycle.** Rank fixes by time returned ÷ training cost and
   attach a recommended test to confirm each hypothesis.
7. **Surface contradictions.** If the data is internally inconsistent (station
   times sum past the finish, a compromised run faster than fresh, a penalty that
   doesn't fit the total), name it and ask for the correct figure; do not invent
   a reconciliation.

## Required Inputs

- The **actual** result with enough granularity to analyze: at minimum the 8 run
  splits and 8 station times. With only a finish time, the skill returns a
  provisional, low-confidence read and asks for the splits.
- The athlete's **division/category** and goal context, so losses are ranked
  against a realistic target rather than an elite standard.

## Optional Inputs

- The **planned** splits/targets (enables true planned-vs-actual; otherwise plan
  is an explicit assumption).
- Transition/roxzone times, penalties and no-reps, RPE/HR per segment, fueling
  and hydration taken, warm-up done, sleep/travel, weather/heat, and any
  technical notes (grip failure, broken wall-ball sets, sled stalls).

## Non-Goals

- **Not a plan rewrite.** It prioritizes and recommends tests; it does not build
  the next block → route to `hyrox-adaptive-training-plan-manager`.
- **Not an assessment from scratch.** With no race result, ranking limiters from
  general data → `hyrox-athlete-assessment`.
- **Not a finish-time prediction** for the *next* race → route to
  `hyrox-goal-time-and-race-predictor`.
- **Not medical diagnosis.** It never names an injury or pain cause; symptoms
  route to the safety framework.

## Default Output

1. **Result snapshot** — finish, division, goal, data completeness, and read
   confidence.
2. **Planned-vs-actual table** — per segment: planned, actual, delta (s and %),
   in race order; totals row.
3. **Largest addressable losses** — the ranked top losses from
   `largestLosses` (and notable `largestGains`), with the one-line
   `summarizeTopLoss` headline.
4. **Pace-decay read** — direction (positive/even/negative), slope per run,
   spread, slowest run, where the fade accelerates; note the ~1.5% even-band is a
   modelling choice.
5. **Root-cause hypotheses (LABELED, separated from facts)** — for each top loss,
   1–2 candidate causes, each with a confidence (low/medium/high) and the
   evidence for/against.
6. **Next-cycle priorities** — ranked by time returned ÷ cost.
7. **Recommended tests** — the specific retest that would confirm or refute each
   top hypothesis, with a date.
8. **Example intervention block** — one concrete sample (e.g. a compromised-run
   transition session) illustrating how the top priority would be trained, framed
   as an example, not the plan.

## Safety and Scope

This is a coaching analysis tool. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
a clean dataset gets a one-line scope note; a mentioned niggle gets a
conservative acknowledgement; a red-flag symptom in the race notes (chest pain,
syncope, neurological signs, heat-illness or rhabdomyolysis warning signs, severe
unexplained pain) stops the performance analysis and leads with a referral to an
appropriate professional. It never names an injury, never attributes pain to a
structure, and never presents a technical fault as a medical finding.

## Handling Incomplete Information

Most results arrive partial. Return a clearly-labeled **provisional** analysis
from what exists, naming each gap and its effect on confidence. With only a
finish time, do not invent splits — say what can and cannot be concluded and ask
for the run/station breakdown. Where planned targets are missing, label the
assumed plan explicitly and widen the read. Keep root causes as hypotheses with
stated confidence; never assert a single cause as proven from a single race. If
the data is internally contradictory, surface it and request the correct figure
rather than quietly picking an interpretation.

## Related Skills and Routing

- **Rewrite the next block from these findings** →
  `hyrox-adaptive-training-plan-manager`.
- **Rank limiters with no race (general data only)** →
  `hyrox-athlete-assessment`.
- **Predict the next race finish/target splits** →
  `hyrox-goal-time-and-race-predictor`; **execute** that plan →
  `hyrox-race-pacing-planner`.
- **Drill out a specific station fault flagged here** →
  `hyrox-technique-and-fault-analyzer`; **build the capacity** →
  `hyrox-station-progression-builder`.
- **Decide whether to race the next event after this one** →
  `hyrox-race-readiness-decision-tool`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
