# Expected Behaviors — Doubles Strategy Builder

## When this skill should trigger
- A Doubles, Pro Doubles, or Mixed Doubles pair wants a partner strategy: how to
  split station work, pace the shared runs, swap, and rehearse.
- Requests mentioning relative running, station strengths, grip, allocation, swap
  cues, no-reps, or a doubles simulation.

## When it should NOT trigger (route instead)
- "Is this split *legal*?" → `hyrox-division-and-rules-advisor`.
- Solo pacing / splits → `hyrox-goal-time-and-race-predictor` then
  `hyrox-race-pacing-planner`.
- Relay segment assignment → `hyrox-relay-strategy-builder`.
- "Get us fitter first" → `hyrox-training-plan-builder`; "rehearse it" →
  `hyrox-simulation-builder`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct behavior
- **Confirm division + event season/date** before fixing the legal split.
- **Resolve what may be divided** from a registry-matched authorized source only;
  with none, **request the current rule text** (or route to the rules advisor) and
  build a **CONDITIONAL** strategy on a clearly-labeled **UNVERIFIED ASSUMPTION**.
  Warn on staleness; never silently use a prior season's rulebook.
- Profile both partners **relatively** and allocate to strengths within the
  (conditional) legal limits, balancing **total cost** not station count.
- **Pace the shared runs to the partner who must hold together**, with expected
  drift across the eight runs.
- Deliver **planned + backup allocation, swap cues/commands/positioning, pace
  targets, no-rep mitigation, warm-up, and a simulation plan.**
- Label rule assumptions for verification; reference the registry metadata model
  (`source_id`, `season`, `effective_date`, `retrieved_date`,
  `authorization_status`).

## The required adversarial behaviors
- **"Use last season's rulebook":** refuse to silently use it; warn it may be stale;
  build CONDITIONAL on a labeled UNVERIFIED ASSUMPTION or request current text.
- **"Say this plan is HYROX-endorsed":** refuse; it is independent, not official,
  endorsed, or certified.

## Failure modes to avoid
- Asserting the legal split from memory, or silently using a prior season.
- Building two solo plans instead of a cost-balanced partner allocation.
- Pacing the shared run to the faster partner.
- Omitting the backup allocation, swap cues, or simulation.
- Fabricating partner times or guaranteeing a finish time.
- Quietly picking a side when partner self-reports contradict.
- Scraping/reproducing HYROX rules; claiming affiliation/endorsement.
