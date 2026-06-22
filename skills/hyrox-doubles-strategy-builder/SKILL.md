---
name: Doubles Strategy Builder
description: Use when a HYROX Doubles, Pro Doubles, or Mixed Doubles pair wants a partner strategy from relative running, station strengths, grip, height, strength, work capacity, efficiency, fatigue profile, communication, and transition cost; it returns planned and backup work allocation, swap cues and commands, pace targets, no-rep mitigation, warm-up, and a simulation plan. What MAY be divided is governed by the current season's rules, so it requires the event season or rule text and labels output conditional when absent. It is not the rule interpretation itself (route to hyrox-division-and-rules-advisor), not solo pacing (hyrox-race-pacing-planner), and not relay (hyrox-relay-strategy-builder).
category: partners
risk_level: low
requires_current_rules: true
---

# Doubles Strategy Builder

Build a deliberate partner strategy for a HYROX **Doubles**, **Pro Doubles**, or
**Mixed Doubles** pair — not two solo plans bolted together (see
[doubles-strategy](../../references/doubles-strategy.md)). The running is shared
and the station work is divided; a good plan allocates work to each partner's
strengths against the station demands and the late-race fade. **What may be
divided is set by the current season's rules** — this skill does not invent those
rules; it requires the event **season** (or the relevant rule text) and labels its
allocation **conditional** when the rules are not yet confirmed. Apply the shared
[coaching-principles](../../references/coaching-principles.md) and
[safety-and-referral](../../references/safety-and-referral.md).

## Rules dependency (read first)

How station work can legally be split — continuous-work constraints, minimum
shares, who may do what, whether mid-station swaps are allowed — **changes by
season and division** and is **never asserted from memory** here. Treat the rules
with the same four labels the rules advisor uses:

- **OFFICIAL RULE** — only when a source matching the event `season` /
  `effective_date` exists in
  [source-version-registry.json](../../references/source-version-registry.json)
  (`authorization_status` `user_supplied` / `public_reference` / `licensed`).
- **INTERPRETATION** / **COMMON PRACTICE** / **UNVERIFIED ASSUMPTION** — for
  reasoned readings, general practice, and placeholders respectively.

The registry **ships empty**. So by default this skill **requests the current rule
text** (or routes the athlete to `hyrox-division-and-rules-advisor`) and otherwise
proceeds with a **clearly-labeled CONDITIONAL strategy** whose split assumptions
are tagged UNVERIFIED ASSUMPTION. It **warns when a rule may be stale**, never
silently uses a previous season's rulebook, and never scrapes HYROX content.

## Workflow

1. **Confirm the division and the event season/date.** Ask for them if missing; the
   legal split depends on the season.
2. **Resolve what may be divided.** Check the registry for a matching, authorized
   source. Match → apply it as OFFICIAL RULE. No match → request the current rule
   text (or route to `hyrox-division-and-rules-advisor`) and proceed CONDITIONALLY
   on a labeled UNVERIFIED ASSUMPTION about the legal split. Warn if any available
   source is stale.
3. **Profile both partners relatively** — relative running (fresh and fatigued),
   per-station strengths, grip endurance, height/leverage, strength and work
   capacity, efficiency/recovery, fatigue profile, communication style, and the
   cost of each swap/transition.
4. **Allocate the work.** Play strengths to stations within the (conditional) legal
   limits; balance total *cost*, not station count; protect the shared run so
   neither partner blows up the pace.
5. **Set pace targets** for the shared running (governed by the partner who must
   stay together) and a per-station effort budget.
6. **Define swap cues, commands, and positioning** — short unambiguous calls, who
   stands where, and how to keep swaps rule-legal and clean.
7. **Plan no-rep mitigation, warm-up, and a doubles simulation** to rehearse the
   allocation, the cues, and the shared pacing.
8. **Provide a backup allocation** for a bad-day-at-a-station or grip-failure
   scenario, pre-agreed so there is no mid-race argument.

## Required Inputs

- The **division** (Doubles / Pro Doubles / Mixed Doubles) and the **event season
  or date** (or the relevant rule text). Without a season anchor, the split rules
  cannot be confirmed and the strategy is labeled CONDITIONAL.
- A **relative profile of both partners** — at minimum who is the stronger runner
  and each partner's standout and weakest stations. With less, the allocation is
  provisional and the skill asks for the deciding gaps.

## Optional Inputs

- Per-station times for each partner, grip endurance, height/leverage, recent
  doubles sim results, communication preferences, goal time, and any registry
  `source_id` already loaded for the season.

## Non-Goals

- **Not the rule interpretation.** Deciding *what is legal* to split →
  `hyrox-division-and-rules-advisor`. This skill consumes that ruling.
- **Not solo pacing.** A single athlete's split plan →
  `hyrox-race-pacing-planner` (after `hyrox-goal-time-and-race-predictor`).
- **Not relay.** Segment assignment for a team relay →
  `hyrox-relay-strategy-builder`.
- **Not a training plan.** Building the block to get the pair fitter →
  `hyrox-training-plan-builder`.

## Default Output

1. **Division & season in use** — and the rules source/label (OFFICIAL RULE vs
   CONDITIONAL/UNVERIFIED), with a staleness note or a request for current text.
2. **Partner profiles (relative)** — the comparison that drives the plan.
3. **Planned work allocation** — a per-station table: who does what share, why, and
   the (conditional) legal basis.
4. **Backup allocation** — the pre-agreed shift for a bad day / grip failure.
5. **Pace targets** — shared run pace and per-station effort budget, with expected
   drift across the eight runs.
6. **Swap cues, commands & positioning** — the exact calls and floor positions.
7. **No-rep mitigation** — how to avoid and absorb a no-rep without a meltdown.
8. **Warm-up & simulation plan** — what to rehearse before race day.
9. **Assumptions & confidence** — including every rule assumption flagged for
   verification.

## Safety and Scope

Low-risk planning, but it applies
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
it keeps station load and work shares conservative when a partner mentions a
niggle, offers regressions, and refers out red-flag symptoms rather than
programming around them. It honors trademark/non-affiliation — writes the mark as
HYROX, claims no partnership, endorsement, certification, or official status, and
will not present itself or this pack as endorsed. It never asserts a division's
legal split, load, or rep count from memory, never scrapes HYROX content, and
never embeds a proprietary rulebook; it requires a season anchor and authorized
rule text for any OFFICIAL-RULE claim, and warns when a rule may be stale.

## Handling Incomplete Information

Two kinds of gaps. **Missing rules** (no season, no authorized text): the skill
returns a **CONDITIONAL** strategy whose split rests on a labeled UNVERIFIED
ASSUMPTION, requests the current rule text (or routes to
`hyrox-division-and-rules-advisor`), and warns the assumption must be confirmed —
it never invents the legal split or carries a prior season forward silently.
**Missing athlete data** (thin partner profiles): it returns a clearly-labeled
**provisional** allocation, names the specific gaps that would change it (e.g.
each partner's wall-ball and sled times, grip endurance), and never fabricates
partner times or false precision. If the two partners' self-reports contradict
each other, it surfaces the contradiction rather than quietly picking one.

## Related Skills and Routing

- **Is this split legal?** → `hyrox-division-and-rules-advisor`.
- **Relay (not doubles)** → `hyrox-relay-strategy-builder`.
- **Solo pacing / splits** → `hyrox-goal-time-and-race-predictor` then
  `hyrox-race-pacing-planner`.
- **Get the pair fitter first** → `hyrox-training-plan-builder`;
  **rehearse it** → `hyrox-simulation-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
