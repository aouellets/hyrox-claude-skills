# Example 01 — Complete data, multi-intent request (routing)

**Request:**

> "I just finished HYROX Singles in 1:21. I have all my run and station splits.
> I want to know where I lost time, what realistic finish I can chase, and a plan
> for the next 14 weeks. My race is in 14 weeks. No pain, feeling fine."

## Routing decision

**Identified intents**

1. Review the finished race (where time was lost).
2. Predict a realistic next-race finish / target splits.
3. Build a 14-week training plan.

**Routing table**

| Intent | Route to | Why this one (vs adjacent) | What it will need |
|---|---|---|---|
| Review finished race | `hyrox-post-race-performance-analyzer` | Has the splits → planned-vs-actual + pace-decay analysis, not a from-scratch limiter read | 8 run splits, 8 station times, transitions, planned targets if any |
| Predict next finish | `hyrox-goal-time-and-race-predictor` | Wants a *target* finish/splits, not in-race execution (that's the pacing planner) | fresh pace, station times, compromised decay (from the analysis) |
| Build 14-week plan | `hyrox-training-plan-builder` | New block from scratch, not editing an existing one (that's the adaptive manager) | ranked limiters, goal, weekly days/equipment |

**Sequence**

`hyrox-post-race-performance-analyzer` → `hyrox-goal-time-and-race-predictor` →
`hyrox-training-plan-builder`

Reason: the post-race analysis surfaces the ranked losses and the measured pace
decay; the predictor uses those to set a realistic target; the plan builder uses
the ranked limiters to decide where the 14 weeks go.

**Safety / scope flags**

No symptoms reported — routine, one-line scope note only. Nothing pulled to
readiness. All three intents are in pack scope.

**Start here**

Begin with `hyrox-post-race-performance-analyzer`. First input to gather: the 8
run splits and 8 station times you already have, plus any transition estimates
and what you had *planned* to run (so the analyzer can compare planned vs actual).
