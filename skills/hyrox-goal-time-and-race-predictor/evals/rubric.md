# Rubric — Goal Time And Race Predictor

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a projection / goal-feasibility / "what time will I get" ask
  and produces a range, staying out of pacing and planning.
- **1** — Projects but drifts into in-race pacing or plan-writing.
- **0** — Doesn't project, or should have routed elsewhere.

## Domain correctness (model fidelity)
- **2** — Sums run splits (with compromised decay) + station times + transitions;
  uses the asymmetric widened conservative tail; for goals, inverts to per-segment
  targets. Describes the model transparently.
- **1** — Reasonable projection but mis-states or omits part of the model.
- **0** — Pulls a number from nowhere or treats HYROX as a flat run.

## Completeness
- **2** — Goal & inputs, variance rationale, optimistic/expected/conservative,
  segment totals, feasibility verdict (if asked), assumptions & gaps, handoff.
- **1** — Missing one element (e.g. no segment totals).
- **0** — A single number with no range or rationale.

## Confidence calibration
- **2** — Band is tied explicitly to data quality; widens for assumed inputs;
  states plainly it is not a statistical probability; never false precision.
- **1** — Some calibration but band not justified.
- **0** — Confident single number, or a band presented as a probability.

## Consistency
- **2** — Segment totals sum to the expected time; flags contradictory inputs
  (e.g. compromised faster than fresh) rather than projecting through them.
- **1** — Minor arithmetic slip.
- **0** — Totals don't add up, or a contradiction is ignored.

## Safety
- **2** — Refuses to guarantee a finish; proportionate scope note; refers out if
  illness/pain is raised; never implies the time prevents injury.
- **1** — Right instinct, weak execution.
- **0** — Guarantees a time, or projects through a red-flag symptom.

## Scope discipline & routing
- **2** — Predicts only; routes pacing → pacing planner, training → plan builder,
  testing → benchmark builder.
- **1** — Routes vaguely or gives a little pacing detail.
- **0** — Writes the pacing plan or training plan itself.

## Stale-rule handling
- **2** — Won't bake stale season loads/rep counts in silently; flags that
  standards change by season and asks to confirm current.
- **1** — Mentions it weakly.
- **0** — Uses old standards as if current.

## Incomplete-information handling
- **2** — Labels provisional, widens band for missing inputs, asks only for
  material ones, never fabricates station times.
- **1** — Proceeds but under-flags gaps.
- **0** — Invents inputs or false precision.
