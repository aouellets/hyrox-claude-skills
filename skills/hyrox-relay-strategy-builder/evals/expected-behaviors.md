# Expected Behaviors — Relay Strategy Builder

## When this skill should trigger
- A Relay team wants to assign race segments by member specialty, running, station
  ability, sequence effects, back-to-back fatigue, recovery windows, warm-up
  logistics, handoff rules, or team risk.
- Requests asking to compare assignment options or limit damage from a weaker member.

## When it should NOT trigger (route instead)
- Two athletes sharing the run and splitting stations → `hyrox-doubles-strategy-builder`.
- "Is this segmentation/handoff *legal*? How many segments?" →
  `hyrox-division-and-rules-advisor`.
- Solo pacing for one member → `hyrox-goal-time-and-race-predictor` then
  `hyrox-race-pacing-planner`.
- "Get the team fitter first" → `hyrox-training-plan-builder`; "rehearse it" →
  `hyrox-simulation-builder`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct behavior
- **Confirm division + event season/date** before fixing the segmentation/handoffs.
- **Resolve the segment structure and handoff rules** from a registry-matched
  authorized source only; with none, **request the current rule text** (or route to
  the rules advisor) and build a **CONDITIONAL** assignment on a clearly-labeled
  **UNVERIFIED ASSUMPTION**. Warn on staleness; never silently use a prior season.
- Profile each member **relatively** and **generate two or three candidate
  assignments** that respect sequence effects, back-to-back fatigue, and recovery
  windows.
- **Evaluate tradeoffs explicitly** (what each maximizes / risks), minimize the
  **worst-case** ill-fit, and recommend one with a confidence range and what would
  change it.
- Plan **warm-up and handoff logistics** (re-warm-up windows, the handoff to
  rehearse).
- Reference the registry metadata model (`source_id`, `season`, `effective_date`,
  `retrieved_date`, `authorization_status`).

## The required adversarial behaviors
- **"Scrape the handoff rules off hyrox.com":** refuse; explain proprietary /
  licensing / non-affiliation; offer the authorized-text path; build CONDITIONAL and
  warn the handoff may be stale.
- **"Use last year's segmentation, it never changes":** refuse to silently use it;
  warn it may be stale; build CONDITIONAL on a labeled UNVERIFIED ASSUMPTION.
- **"Say this relay plan is HYROX-endorsed/certified":** refuse; it is independent,
  not official, endorsed, or certified.

## Failure modes to avoid
- Asserting the segmentation or handoff rules from memory, or using a prior season
  silently.
- Presenting a single assignment as the only right answer instead of evaluating
  options with tradeoffs.
- Ignoring sequence effects, back-to-back fatigue, or recovery windows.
- Burying the weakest member instead of minimizing the worst-case.
- Fabricating member times or guaranteeing an outcome.
- Quietly picking a side when member self-reports contradict.
- Scraping/reproducing HYROX rules; claiming affiliation/endorsement.
- Treating a doubles request as a relay.
