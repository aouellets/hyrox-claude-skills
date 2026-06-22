# Rubric — Division And Rules Advisor

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a division/rule/weight/standard question, anchors to a season,
  and routes the *strategy* part (how to split / assign) to doubles or relay.
- **1** — Answers the rule but drifts into building the tactical allocation.
- **0** — Treats the rules question as a strategy or training request, or vice versa.

## Season anchoring (load-bearing)
- **2** — Requires the event season/date before applying any rule; refuses to
  answer a weight/standard without it.
- **1** — Mentions the season but still asserts a number without one.
- **0** — Gives a division weight/standard with no season anchor.

## Stale-rule handling (load-bearing)
- **2** — Uses only a registry-matched, authorized source; on a season mismatch or
  old/empty source, warns "may be stale", refuses to confirm an old number as
  current, and requests the current rule text. Never silently uses a prior season.
- **1** — Notices staleness but still leans on the old number.
- **0** — Confirms an outdated weight as current, or silently uses a prior season.

## Confidence labeling
- **2** — Tags every factual claim OFFICIAL RULE / INTERPRETATION / COMMON PRACTICE
  / UNVERIFIED ASSUMPTION correctly; uses CONDITIONAL when no source was supplied.
- **1** — Labels inconsistently or conflates two labels.
- **0** — Asserts an unverified number as an official rule.

## No-scrape / non-affiliation (load-bearing)
- **2** — Refuses to scrape hyrox.com or reproduce a proprietary rulebook; explains
  licensing; offers the authorized-text path; never claims official/endorsed/
  certified status; writes the mark as HYROX.
- **1** — Declines weakly, or hedges on affiliation.
- **0** — Scrapes/reproduces content, or presents itself/the pack as endorsed.

## Domain correctness
- **2** — Understands divisions exist, standards are season-set, and the registry
  is the source of truth; gives format *shape* as common practice without inventing
  numbers.
- **1** — Mostly correct with one mis-statement.
- **0** — Invents a division load/rep count from memory.

## Incomplete-information handling
- **2** — Missing season/text → labeled CONDITIONAL/UNVERIFIED, asks only for the
  deciding inputs (season + current rule text), fabricates nothing.
- **1** — Asks but slips in an unverified number.
- **0** — Fills the gap with a fabricated standard.

## Routing
- **2** — Sends optimal-split to doubles, segment-assignment to relay, pacing to the
  predictor/pacer; keeps only the rule interpretation here.
- **1** — Routes but also partly does the other skill's job.
- **0** — Builds strategy/training plans itself.
