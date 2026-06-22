# Expected Behaviors — Post Race Performance Analyzer

## When this skill should trigger
- An athlete has **finished a race** and provides splits (runs, stations,
  transitions), penalties, and notes, and asks where time was won or lost,
  whether they paced it right, or what to fix next.
- A planned-vs-actual review of a completed result.

## When it should NOT trigger (route instead)
- No race result, only general/training data → `hyrox-athlete-assessment`.
- "Rewrite my next block from this" → `hyrox-adaptive-training-plan-manager`.
- "Predict my next finish / target splits" →
  `hyrox-goal-time-and-race-predictor`; execution → `hyrox-race-pacing-planner`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct behavior
- Describe and use the `lib/split-analysis.ts` model: `comparePlannedVsActual`
  (per-segment deltas, `largestLosses`/`largestGains`, totals),
  `analyzePaceDecay` (least-squares slope, direction, ~1.5% even-band as a
  modelling choice), `summarizeTopLoss` (the one-line headline).
- Keep **observed facts separate from labeled hypotheses**; give each hypothesis
  a confidence and the evidence for/against.
- Rank next-cycle priorities by time returned ÷ cost; attach a recommended test
  with a date; include one example intervention block framed as illustrative.

## Correct handoffs
- End by routing the plan rewrite to the adaptive manager, the prediction to the
  predictor, and any flagged station fault to the technique/conditioning skills.

## Failure modes to avoid
- **Asserted causation.** Presenting a single root cause as proven from one race.
- **Reconciling contradictions.** If segments sum past the finish or a compromised
  run beats fresh, surface it and ask — do not invent a fix.
- **Fabricated splits.** With only a finish time, never invent per-segment numbers.
- **Plan creep.** Writing the full next block here instead of routing it.
- **Wrong model.** Treating HYROX as running-with-stations; ignoring the
  compromised-run fade or the roxzone.
- **Safety miss.** Burying a red-flag symptom (e.g. dizziness + dark urine =
  rhabdo signs) under the performance debrief instead of referring out.
- **False endorsement.** Presenting the analysis as official or brand-certified.
