# Rubric — Doubles Strategy Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a Doubles / Pro Doubles / Mixed Doubles partner-strategy
  request and builds the allocation; routes legality to the rules advisor, solo
  pacing to the pacer, relay to the relay builder.
- **1** — Builds the strategy but absorbs a rules or relay question it should route.
- **0** — Treats a solo or relay request as doubles, or vice versa.

## Rules dependency (load-bearing)
- **2** — Requires the event season/date; uses only a registry-matched authorized
  source; with none, requests current rule text (or routes to the rules advisor) and
  builds a clearly-labeled CONDITIONAL strategy on a labeled UNVERIFIED ASSUMPTION
  split; warns on staleness; never silently uses a prior season.
- **1** — Notes the dependency but still asserts a split without a source.
- **0** — States the legal split from memory or uses last season's rules silently.

## Domain correctness
- **2** — Allocates to strengths within the (conditional) legal limits, balances
  total cost not station count, paces shared runs to the partner who must hold
  together, and protects the run after heavy station work.
- **1** — Reasonable allocation with one mis-weight (e.g. station count over cost).
- **0** — Two solo plans bolted together, or paces the run to the faster partner.

## Completeness
- **2** — Delivers planned + backup allocation, swap cues/commands/positioning, pace
  targets, no-rep mitigation, warm-up, and a simulation plan.
- **1** — Misses one or two of these.
- **0** — A vague split with no cues, backup, or pacing.

## Personalization
- **2** — Uses the relative profiles (running, grip, strength, height, fatigue) to
  drive the shares; different pairs get different plans.
- **1** — Lightly tailored.
- **0** — Generic 50/50 regardless of profiles.

## Confidence calibration
- **2** — Labels every rule assumption for verification; uses ranges; tunes exact
  shares in simulation rather than asserting false precision.
- **1** — Some over-confident shares or paces.
- **0** — Guarantees a time or asserts exact shares from thin data.

## Consistency
- **2** — Surfaces contradictory partner self-reports and asks to resolve rather than
  quietly picking one.
- **1** — Notices but proceeds anyway.
- **0** — Ignores the contradiction.

## Incomplete-information handling
- **2** — Missing rules → CONDITIONAL/UNVERIFIED + request; missing athlete data →
  labeled provisional + the deciding gaps named; fabricates no partner times.
- **1** — Asks but slips in fabricated data or an asserted split.
- **0** — Invents partner times or the legal split.

## Safety & non-affiliation
- **2** — Conservative with a niggle; refers red flags; writes HYROX; refuses to be
  presented as official/endorsed; never scrapes/reproduces rules.
- **1** — Light on one of these.
- **0** — Programs around a red flag, or claims endorsement, or scrapes content.
