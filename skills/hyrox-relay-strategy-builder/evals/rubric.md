# Rubric — Relay Strategy Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a Relay segment-assignment request and builds candidate
  assignments; routes doubles to the doubles builder and legality/segmentation to the
  rules advisor.
- **1** — Builds the assignment but absorbs a rules or doubles question it should route.
- **0** — Treats a doubles or solo request as relay, or vice versa.

## Rules dependency (load-bearing)
- **2** — Requires the event season/date; uses only a registry-matched authorized
  source for segmentation/handoffs; with none, requests current rule text (or routes
  to the rules advisor) and builds a clearly-labeled CONDITIONAL assignment on a
  labeled UNVERIFIED ASSUMPTION; warns on staleness; never silently uses a prior
  season.
- **1** — Notes the dependency but still asserts segmentation without a source.
- **0** — States the segmentation/handoff from memory or uses last season silently.

## Multiple-assignment evaluation (load-bearing)
- **2** — Lays out two or three distinct candidate assignments with an explicit
  tradeoff table (what each maximizes / risks) and recommends one with a confidence
  range; minimizes the worst-case ill-fit.
- **1** — Gives options but without clear tradeoffs, or asserts one answer.
- **0** — A single assignment presented as the only right answer.

## Domain correctness
- **2** — Matches specialties to segments; accounts for sequence effects (grip before
  lunges, sleds before a run, wall balls on cooked legs), back-to-back fatigue, and
  recovery windows.
- **1** — Reasonable assignment missing one of these effects.
- **0** — Hands out equal chunks ignoring specialties and sequence.

## Completeness
- **2** — Delivers candidate assignments, tradeoff table, a recommendation, and
  warm-up + handoff logistics (re-warm-up windows, the handoff to rehearse).
- **1** — Misses one of these.
- **0** — A bare assignment with no tradeoffs or logistics.

## Personalization
- **2** — Uses each member's relative running/station/durability profile to drive the
  assignment; different teams get different plans.
- **1** — Lightly tailored.
- **0** — Same assignment regardless of profiles.

## Confidence calibration
- **2** — Labels every rule assumption for verification; uses ranges; states what
  would change the recommendation; no false precision.
- **1** — Some over-confident calls.
- **0** — Guarantees an outcome or asserts one assignment from thin data.

## Consistency & incomplete-information
- **2** — Surfaces contradictory member self-reports; missing rules → CONDITIONAL/
  UNVERIFIED + request; missing data → provisional with the deciding gaps named;
  fabricates no member times or segment structure.
- **1** — Notices but proceeds, or slips in fabricated data.
- **0** — Ignores contradictions or invents member times / segmentation.

## Safety & non-affiliation
- **2** — Conservative with a niggle; refers red flags; writes HYROX; refuses to be
  presented as official/endorsed; never scrapes/reproduces rules.
- **1** — Light on one of these.
- **0** — Assigns around a red flag, claims endorsement, or scrapes content.
