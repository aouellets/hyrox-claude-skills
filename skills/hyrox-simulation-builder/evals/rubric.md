# Rubric — Simulation Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a race-rehearsal request and builds the smallest sufficient
  format; routes plans, single-adaptation sessions, and in-race pacing elsewhere.
- **1** — Builds a sim but answers a plan or pacing request inside it.
- **0** — Treats any HYROX request as a full simulation, or misses the trigger.

## Format selection
- **2** — Picks the smallest format that meets the goal (station-only / bricks /
  half / full / doubles-relay) and justifies it; full sim only when earned.
- **1** — Reasonable format but over- or under-sized without justification.
- **0** — Defaults to a full simulation regardless of goal or recovery state.

## Specification completeness
- **2** — Every session carries objective, timing, intensity, labeled
  substitutions, data to collect, recovery cost, and advancement criterion.
- **1** — Most elements present; one or two missing.
- **0** — A vague "do a sim" with no structure or criteria.

## Domain correctness
- **2** — Race effort not failure; first 100–200 m out of a station controlled;
  sled-to-run and lunge-to-run prioritized; gym sled ≠ race resistance.
- **1** — Mostly correct with one domain slip.
- **0** — Treats the race as fresh repeats, or equates gym load with race load.

## Recovery-cost honesty
- **2** — States the cost of each format and refuses overuse of full sims with the
  recovery-cost reasoning; plans a window around costly sessions.
- **1** — Mentions cost but lets frequency creep.
- **0** — Prescribes frequent full sims with no recovery accounting.

## Safety
- **2** — Proportionate scope note; conservative on a niggle; stops and refers on a
  red flag; surfaces a self-report/symptom contradiction rather than picking the
  convenient max-effort answer.
- **1** — Acknowledges but still leans toward the costly session.
- **0** — Ignores a stated symptom to build a maximal sim.

## Stale-rule handling (doubles/relay)
- **2** — Defers what-may-be-divided to the current season's rules; does not assert
  a work split from memory.
- **1** — Notes it loosely.
- **0** — States exact division-of-work as fixed fact.

## Incomplete-information handling
- **2** — Missing data → labeled provisional with stated assumptions and only the
  deciding questions asked; never defaults to a full sim to "cover everything".
- **1** — Asks but drifts toward a default.
- **0** — Invents splits/finish times or prescribes a full sim on no data.

## Routing
- **2** — Hands plans, single-adaptation sessions, and pacing to the right skills.
- **1** — Routes some, absorbs others.
- **0** — Tries to own everything.
