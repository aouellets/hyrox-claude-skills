# Relay Strategy

In the Relay format a team divides the race into segments; each member runs and
works an assigned portion of the run-station sequence, with handoffs between
segments. The central coaching task is **segment assignment**: matching team
members' specialties to portions of the race, accounting for sequence effects and
back-to-back fatigue, then evaluating the tradeoffs of competing assignments. See
[race-structure](race-structure.md) for the format shape.

> **Rules and handoffs are season-dependent.** How the race is segmented, how
> handoffs work, and what each member must complete change by season and division.
> This reference is the *assignment strategy*; resolve the actual segmentation and
> handoff rules from the rules registry / division advisor, never from memory
> ([coaching-principles](coaching-principles.md), §9).

## Profile the team

Profile each member relatively (as in [athlete-intake](athlete-intake.md) and
[doubles-strategy](doubles-strategy.md)):

- **Running.** Who is fastest fresh and who holds pace under fatigue.
- **Station ability.** Each member's strongest and weakest stations across the 8.
- **Capacity and durability.** Who can absorb a longer or higher-cost segment;
  who fades.

## Assigning segments

The art is matching specialties to the sequence, not just handing out equal
chunks:

- **Specialty to segment.** Assign each member the segment whose stations and
  running best fit their strengths — put the strong sled athlete on the
  sled-heavy portion, the strongest runner where running dominates.
- **Sequence effects.** Stations are not independent: grip-heavy work precedes
  lunges, sleds precede a run, wall balls land on cooked legs
  ([station-taxonomy](station-taxonomy.md)). An assignment that hands one member
  two consecutive high-leg-cost demands sets them up to fade.
- **Back-to-back fatigue.** Within a member's own segment, consecutive efforts
  compound; budget the running and station effort across the segment so the member
  can finish it strong and hand off cleanly ([pacing-model](pacing-model.md),
  [compromised-running](compromised-running.md)).
- **Recovery windows.** Between their segments, members recover while teammates
  work. A good assignment gives each member enough recovery before their next
  effort; a poor one stacks a member's hardest work with little rest.

## Warm-up and handoff logistics

- **Warm-up timing.** Members who go later must time their warm-up to be ready at
  handoff without standing around cold — plan re-warm-up windows.
- **Handoff rules and execution.** Handoffs cost time and carry risk (a missed or
  illegal handoff is expensive). Rehearse the exact handoff the current season's
  rules require; keep the exchange clean and pre-agreed
  ([transition-strategy](transition-strategy.md)).
- **Team risk.** A relay is only as fast as its weakest-fit assignment; a single
  member buried on an ill-suited segment can cost more than any other member
  gains. Assignments should minimize that worst-case, not just maximize the best.

## Evaluating multiple assignments

Rarely is there one obvious assignment. Lay out two or three candidate
assignments and state the tradeoffs explicitly — e.g. "Assignment A maximizes the
sled specialist but leaves the second runner doing back-to-back high-leg-cost
work; Assignment B is more balanced but uses no one's standout strength." Project
each with the team's data and present the comparison with confidence ranges
rather than asserting a single right answer ([coaching-principles](coaching-principles.md),
§9). Rehearse the chosen assignment and its handoffs in a relay simulation
([simulation-design](simulation-design.md)).

## Cross-references

- Format shape: [race-structure](race-structure.md)
- Station sequence effects: [station-taxonomy](station-taxonomy.md)
- Pacing and fade within a segment: [pacing-model](pacing-model.md), [compromised-running](compromised-running.md)
- Handoffs and transitions: [transition-strategy](transition-strategy.md)
- Profiling and the doubles variant: [athlete-intake](athlete-intake.md), [doubles-strategy](doubles-strategy.md)
