# Expected Behaviors — Athlete Progress Report

## When this skill should trigger
- An athlete or coach has block data (running, stations, simulations, strength,
  adherence, recovery, technique, transitions) plus a prior baseline, and asks how
  progress is tracking, whether the block worked, or what to focus on next.
- "How's my progress?", "did this block work?", "what should I focus on next?"

## When it should NOT trigger (route instead)
- "Rewrite my next block / re-architect my plan" →
  `hyrox-adaptive-training-plan-manager` (this skill reports + names priorities).
- "I have no prior baseline" → `hyrox-athlete-assessment` (a snapshot is an
  assessment, not progress).
- "Turn these numbers into a finish range" → `hyrox-goal-time-and-race-predictor`.
- "Standardize the retests I should run" → `hyrox-benchmark-and-testing-builder`.
- "Deep-review one race result" → `hyrox-post-race-performance-analyzer`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct handoffs
- Always compare current to a prior baseline; without one, route to assessment.
- Distinguish "training not done" (adherence) from "training failed" (programming).
- End with 2–4 measurable next priorities + retest dates, then route the rewrite.

## Failure modes to avoid
- **Plan rewriting.** Don't re-architect phases/weeks/sessions here; route it.
- **Inventing baselines.** Don't fabricate a prior value to complete a table, and
  don't infer a trend from one data point.
- **Averaging contradictions.** Surface divergent trends or conflicting log
  entries rather than netting them out.
- **Ignoring recovery.** Don't praise through a red-flag/under-recovery pattern or
  prescribe a harder block on top of unresolved illness; refer out, don't diagnose.
- **Mis-weighting.** Don't celebrate a non-transferring fresh PB as if it were the
  goal; weight compromised running and the block's focus.
- **False endorsement.** Don't present the report as official or brand-certified.
