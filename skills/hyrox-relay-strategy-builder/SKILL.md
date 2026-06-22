---
name: Relay Strategy Builder
description: Use when a HYROX Relay team wants to assign race segments from member specialties, running, station ability, sequence effects, back-to-back fatigue, warm-up logistics, recovery windows, handoff rules, and team risk; it evaluates multiple candidate assignments with explicit tradeoffs and returns a recommended assignment plus warm-up and handoff logistics. How the race is segmented and how handoffs work are season-dependent, so it requires the event season or rule text and labels output conditional when absent. It is not doubles (route to hyrox-doubles-strategy-builder) and not rule interpretation (hyrox-division-and-rules-advisor); it never asserts segmentation from memory and never scrapes HYROX content.
category: partners
risk_level: low
requires_current_rules: true
---

# Relay Strategy Builder

Assign HYROX **Relay** segments by matching each team member's specialties to a
portion of the run-station sequence, accounting for sequence effects, back-to-back
fatigue, recovery windows, warm-up logistics, and handoff cost (see
[relay-strategy](../../references/relay-strategy.md)). The core deliverable is
**multiple candidate assignments evaluated with explicit tradeoffs**, not one
asserted answer. **How the race is segmented and how handoffs work change by
season** — this skill does not invent that structure; it requires the event
**season** (or the relevant rule text) and labels its assignment **conditional**
when the structure is not yet confirmed. Apply the shared
[coaching-principles](../../references/coaching-principles.md) and
[safety-and-referral](../../references/safety-and-referral.md).

## Rules dependency (read first)

The segment boundaries, what each member must complete, and the legal handoff
mechanics are **season- and division-set** and are **never asserted from memory**
here. Use the same four labels as the rules advisor:

- **OFFICIAL RULE** — only when a source matching the event `season` /
  `effective_date` exists in
  [source-version-registry.json](../../references/source-version-registry.json)
  (`authorization_status` `user_supplied` / `public_reference` / `licensed`).
- **INTERPRETATION** / **COMMON PRACTICE** / **UNVERIFIED ASSUMPTION** — for
  reasoned readings, general practice, and placeholders respectively.

The registry **ships empty**. So by default this skill **requests the current rule
text** (or routes to `hyrox-division-and-rules-advisor`) for the segmentation and
handoff rules, and otherwise builds a **clearly-labeled CONDITIONAL assignment**
whose segment/handoff basis is tagged UNVERIFIED ASSUMPTION. It **warns when a rule
may be stale**, never silently uses a previous season's rulebook, and never scrapes
HYROX content.

## Workflow

1. **Confirm the division and event season/date.** Ask for them if missing; the
   segmentation and handoff rules depend on the season.
2. **Resolve the segment structure and handoff rules.** Check the registry for a
   matching, authorized source. Match → apply it as OFFICIAL RULE. No match →
   request the current rule text (or route to `hyrox-division-and-rules-advisor`)
   and proceed CONDITIONALLY on a labeled UNVERIFIED ASSUMPTION about how the race
   is segmented. Warn if any available source is stale.
3. **Profile each member relatively** — running (fresh and under fatigue), per-
   station ability across the eight stations, capacity/durability for a higher-cost
   segment, and who fades.
4. **Generate candidate assignments.** Build **two or three** distinct assignments
   that match specialties to segments, respecting sequence effects (grip before
   lunges, sleds before a run, wall balls on cooked legs) and recovery windows.
5. **Evaluate the tradeoffs.** For each candidate, state what it maximizes and what
   it risks (e.g. "A maximizes the sled specialist but stacks back-to-back leg cost
   on member 2"). Minimize the **worst-case** ill-fit, not just the best case.
6. **Recommend one**, with confidence ranges, and say what would change the call.
7. **Plan warm-up and handoff logistics** — re-warm-up windows for later members,
   the exact (season-dependent) handoff to rehearse, and clean exchange execution.

## Required Inputs

- The **division** (Relay) and the **event season or date** (or the relevant rule
  text). Without a season anchor, the segmentation/handoff rules cannot be confirmed
  and the assignment is labeled CONDITIONAL.
- A **relative profile of the team members** — at minimum each member's strongest
  running/station qualities. With less, the assignment is provisional and the skill
  asks for the deciding gaps.

## Optional Inputs

- Per-member station times and fresh/fatigued run paces, durability notes, prior
  relay results, team goal, warm-up space constraints, and any registry `source_id`
  already loaded for the season.

## Non-Goals

- **Not doubles.** A two-athlete shared-run/divided-station strategy →
  `hyrox-doubles-strategy-builder`.
- **Not the rule interpretation.** Deciding *how the race is segmented* or *what a
  legal handoff is* → `hyrox-division-and-rules-advisor`. This skill consumes that
  ruling.
- **Not solo pacing.** A single member's split plan → `hyrox-race-pacing-planner`.
- **Not a training plan.** Building the block to get the team fitter →
  `hyrox-training-plan-builder`.

## Default Output

1. **Division & season in use** — and the rules source/label (OFFICIAL RULE vs
   CONDITIONAL/UNVERIFIED) for segmentation and handoffs, with a staleness note or a
   request for current text.
2. **Member profiles (relative)** — the comparison that drives the assignment.
3. **Candidate assignments** — **two or three**, each laid out by segment/member.
4. **Tradeoff table** — what each candidate maximizes and what it risks, including
   the worst-case ill-fit.
5. **Recommended assignment** — with confidence range and what would change it.
6. **Warm-up & handoff logistics** — re-warm-up windows and the handoff to rehearse.
7. **Assumptions & confidence** — including every rule assumption flagged for
   verification.

## Safety and Scope

Low-risk planning, but it applies
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
it keeps a member's segment load conservative when a niggle is mentioned, offers a
lighter-segment option, and refers out red-flag symptoms rather than assigning
around them. It honors trademark/non-affiliation — writes the mark as HYROX, claims
no partnership, endorsement, certification, or official status, and will not present
itself or this pack as endorsed. It never asserts the segmentation, handoff rules,
loads, or rep counts from memory, never scrapes HYROX content, and never embeds a
proprietary rulebook; it requires a season anchor and authorized rule text for any
OFFICIAL-RULE claim, and warns when a rule may be stale.

## Handling Incomplete Information

Two kinds of gaps. **Missing rules** (no season, no authorized text): the skill
returns a **CONDITIONAL** assignment whose segmentation/handoff basis is a labeled
UNVERIFIED ASSUMPTION, requests the current rule text (or routes to
`hyrox-division-and-rules-advisor`), and warns the assumption must be confirmed —
it never invents the segment structure or carries a prior season forward silently.
**Missing athlete data** (thin member profiles): it returns a clearly-labeled
**provisional** assignment with the candidate tradeoffs it *can* support, names the
specific gaps that would change it (e.g. each member's run pace and standout
station), and never fabricates member times or false precision. If member
self-reports contradict, it surfaces the contradiction rather than quietly picking
one.

## Related Skills and Routing

- **Doubles (not relay)** → `hyrox-doubles-strategy-builder`.
- **Is this segmentation/handoff legal?** → `hyrox-division-and-rules-advisor`.
- **Solo pacing / splits for one member** → `hyrox-goal-time-and-race-predictor`
  then `hyrox-race-pacing-planner`.
- **Get the team fitter first** → `hyrox-training-plan-builder`;
  **rehearse it** → `hyrox-simulation-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
