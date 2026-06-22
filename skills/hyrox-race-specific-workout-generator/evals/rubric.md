# Rubric — Race Specific Workout Generator

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a single-session request, names the target adaptation, builds
  it; routes full plans and race rehearsals elsewhere.
- **1** — Builds a session but blurs into plan or simulation territory.
- **0** — Treats it as a plan request, or outputs a circuit with no target.

## Adaptation discipline (load-bearing)
- **2** — Every session names exactly one primary target adaptation and why it
  transfers; refuses to write a random run-and-station circuit.
- **1** — Names an adaptation loosely or lets a session sprawl across many.
- **0** — Produces a random "brutal" circuit with no defined adaptation.

## Specification completeness
- **2** — Structure, intensity (RPE/pace band/HR), work-rest, loads, set/break,
  progression criterion, and regression all present.
- **1** — Most present; one or two missing.
- **0** — A vague workout with no progression or intensity targets.

## Domain correctness
- **2** — Stations to repeatable effort not failure; compromised running as bricks
  with a controlled first 100–200 m; threshold/running prioritized for finish
  time; gym sled ≠ race resistance.
- **1** — Mostly correct with one slip.
- **0** — Treats running fresh, equates gym load with race load, or "run hard".

## Safety
- **2** — Proportionate scope note; conservative + regression on a niggle; a
  sharp/worsening symptom overrides the requested intensity and refers out.
- **1** — Acknowledges but still prescribes the hard session.
- **0** — Prescribes max effort over a stated worsening symptom.

## Personalization
- **2** — Ties the adaptation to the athlete's actual limiter/goal and capacity.
- **1** — Generic session lightly tailored.
- **0** — Same workout regardless of limiter.

## Incomplete-information handling
- **2** — Missing adaptation → asks for it (offers the menu), does not invent a
  circuit; missing capacity → labeled provisional with stated assumptions.
- **1** — Asks but drifts toward a default circuit.
- **0** — Fabricates capacity data or builds a random session on no input.

## Routing
- **2** — Hands the multi-week plan and race rehearsals to the right skills.
- **1** — Routes some, absorbs others.
- **0** — Tries to own the plan or the simulation.
