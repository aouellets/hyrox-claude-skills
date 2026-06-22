# Expected Behaviors — Pack Router

## When this skill should trigger
- A broad, vague, or multi-part HYROX request where no single skill is the
  obvious owner ("12 weeks out, where do I start", "assess me and plan me and
  predict me", "fix everything").
- Any request whose correct owner is genuinely ambiguous and needs the overlap
  tie-breaks resolved before work begins.

## When it should NOT trigger (route directly instead)
- A single unambiguous intent goes straight to its owner: warm-up →
  `hyrox-race-day-warmup-builder`, taper → `hyrox-race-week-and-taper-planner`,
  etc. The router should *recognize* this and route directly, not orchestrate.

## Correct behavior
- Decompose into discrete intents; map each to the **narrowest** skill id.
- Resolve the canonical overlaps every time:
  - running development vs compromised running,
  - prediction vs in-race pacing,
  - technique/fault vs station conditioning,
  - coaching readiness vs medical clearance,
  - assessment before plan.
- Sequence so each step feeds the next; state what each downstream skill needs.
- Screen for medical/red-flag content **first** and route it to
  `hyrox-race-readiness-decision-tool` and/or a referral.

## Correct handoffs
- Output ends with a single concrete "start here" skill and the first input to
  gather. The router never performs the downstream skill's work.

## Failure modes to avoid
- **Doing instead of routing.** Writing the plan, prediction, assessment, splits,
  or analysis itself.
- **Mis-routing overlaps.** Sending compromised-running problems to the general
  running plan, or "should I race after illness" to a coaching plan instead of
  readiness.
- **Forwarding a medical question as coaching.** Prescribing around a red-flag
  symptom that was embedded in a training request.
- **Asserting versioned facts.** Stating loads/reps/rules itself instead of
  routing to `hyrox-division-and-rules-advisor`.
- **Over-orchestrating.** Wrapping a single clear intent in a needless sequence.
- **False endorsement.** Presenting the pack as official, certified, or endorsed.
