# Transition Strategy

The **roxzone** — the transition area between each run and station — is real,
measurable race time that compounds across 16 transitions (run-in and run-out of
8 stations). It is also one of the most *trainable* and cheaply improved parts of
a HYROX race: a few seconds saved per transition adds up to a meaningful chunk of
the finish time with no extra fitness required. See
[race-structure](race-structure.md) for where the roxzone sits in the format.

All example time ranges below are **assumptions/illustrations, not fixed truths**
— roxzone size, layout, and crowding vary by event and division, so treat targets
as ranges to be measured for the specific athlete and venue, not standards to
assert from memory.

## What happens in a transition

Each transition is a small sequence that can be rehearsed:

- **Station approach and exit.** Running in from the prior run and out toward the
  next, including the often-overlooked distance *within* the roxzone.
- **Route awareness.** Knowing the path to your station and lane in advance so you
  do not hesitate or take a long line. Walk the venue route beforehand where
  possible.
- **Pace change.** Deciding where to ease from running into the transition and
  where to resume — not slamming to a walk the moment you cross the line.
- **Equipment entry / setup.** Getting onto the erg, gripping the sled, picking up
  the implements, racking/unracking cleanly. Fumbling setup is pure lost time.
- **Chalk.** A quick deliberate chalk for grip stations (sled pull, farmers carry,
  wall balls) — planned, not a leisurely stop.
- **Hydration.** If taken, a planned brief sip at a chosen point, not an
  unplanned dawdle.
- **Strap handling.** Rower straps in particular — a decided, practiced strategy
  for strapping/unstrapping quickly ([erg-strategy](erg-strategy.md)).

## Walk vs run decisions

Decide in advance which transitions to jog through and which to power-walk to
recover. The choice depends on which station just finished (recover more after a
sled or lunges) and which is next. A blanket "always run" or "always walk" rule
is rarely optimal — make it station-specific and rehearse it.

## Transitions are measurable and trainable

- **Measure them.** In simulations ([simulation-design](simulation-design.md)),
  time the transitions, not just the runs and stations. `lib/split-analysis.ts`
  separates transition time so it can be tracked planned-vs-actual.
- **Train them.** Rehearse station entry/exit, chalk, and strap handling as drills
  so they are automatic on race day. Smooth transitions are a skill, like the
  stations themselves.
- **Budget them.** The [pacing-model](pacing-model.md) includes a transition-time
  target for each roxzone; treat it as a range derived from the athlete's measured
  transitions, widened where unknown.

## Example target ranges (illustrative assumptions only)

As a *starting assumption* to be replaced by measured data: a clean, well-drilled
transition is often on the order of a handful of seconds for a simple station
entry and longer where straps, setup, or a long roxzone path are involved. These
are not standards — measure the athlete and venue and refine.

## Doubles and relay transitions

In team formats the handoff and partner communication add a transition layer:
deciding who takes which work, where to stand, and the swap/handoff cues. This is
covered in [doubles-strategy](doubles-strategy.md) and
[relay-strategy](relay-strategy.md); the handoff rules themselves are
season-dependent and come from the rules registry.

## Cross-references

- Format and roxzone: [race-structure](race-structure.md)
- Race-wide pacing and transition budgets: [pacing-model](pacing-model.md)
- Strap/erg specifics: [erg-strategy](erg-strategy.md)
- Rehearsing transitions: [simulation-design](simulation-design.md)
- Team handoffs: [doubles-strategy](doubles-strategy.md), [relay-strategy](relay-strategy.md)
