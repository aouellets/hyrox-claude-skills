---
name: Roxzone And Transition Strategist
description: Use when a HYROX athlete or coach asks to sharpen the roxzone — station approach and exit, route awareness, where to ease and resume pace, equipment entry and setup, chalk, planned hydration, walk-vs-run choices, rower strap handling, partner communication, and transition target ranges — and provides which stations and what venue/measured transition data they have. Returns a transition-by-transition plan with target ranges treated as assumptions to measure. Not in-race run/station pacing (route to hyrox-race-pacing-planner), not partner work allocation (route to hyrox-doubles-strategy-builder or hyrox-relay-strategy-builder).
category: race-execution
risk_level: low
requires_current_rules: false
---

# Roxzone And Transition Strategist

Make the **roxzone** — the transition area between each run and station — fast. It
is real, measurable race time that compounds across the 16 transitions (run-in and
run-out of 8 stations), and it is one of the most *trainable* and cheaply improved
parts of a HYROX race: a few seconds saved per transition adds up to a meaningful
chunk of the finish with no extra fitness required (see
[transition-strategy](../../references/transition-strategy.md) and
[race-structure](../../references/race-structure.md)). This skill plans and drills
the transition itself — approach and exit, route awareness, the pace change, clean
equipment entry/setup, chalk, planned hydration, walk-vs-run decisions, rower strap
handling, and partner communication — and gives each roxzone a **target range
treated as an assumption to be measured**, not a standard asserted from memory. It
does **not** set the in-race running or station pacing
(`hyrox-race-pacing-planner`) and it does **not** allocate partner work
(`hyrox-doubles-strategy-builder` / `hyrox-relay-strategy-builder`). See routing
for the overlaps.

## Workflow

1. **Map the 16 transitions.** Walk through each run-in and run-out for all eight
   stations, in order, so nothing is overlooked — including the often-ignored
   distance *within* the roxzone itself.
2. **Establish route awareness.** For the specific venue (where known), plan the
   path and lane to each station so the athlete doesn't hesitate or take a long
   line; recommend walking the route beforehand where possible.
3. **Plan the pace change.** For each transition decide where to ease from running
   and where to resume — not slamming to a walk the moment the line is crossed, and
   not sprinting in cold. Tie the resume point to the compromised-running first
   100–200 m so the handoff to the pacing plan is clean.
4. **Drill equipment entry and setup.** Getting onto the erg, gripping the sled,
   picking up the implements, racking/unracking cleanly. Fumbled setup is pure lost
   time; rehearse it as a skill.
5. **Plan chalk and grip.** A quick, deliberate chalk for grip stations (sled pull,
   farmers carry, wall balls) — planned, not a leisurely stop.
6. **Plan hydration.** If taken, a planned brief sip at a chosen point, not an
   unplanned dawdle.
7. **Decide strap handling.** Especially the rower straps — a decided, practiced
   strap/unstrap strategy. Cross-reference [erg-strategy](../../references/erg-strategy.md).
8. **Set walk-vs-run per transition.** Make it station-specific — recover more
   after a sled or lunges, jog the cheaper transitions — not a blanket "always run"
   or "always walk."
9. **Assign target ranges (as assumptions).** Give each roxzone a target *range* to
   be measured and refined for this athlete and venue, explicitly labeled as a
   starting assumption, not a fixed truth.
10. **Prescribe transition drills.** Rehearse entry/exit, chalk, and strap handling
    as standalone drills so they're automatic on race day, and say to *time the
    transitions* in simulations, not just the runs and stations.

## Required Inputs

- **Which stations / transitions to focus on** — all 16, or the specific ones the
  athlete loses time in (e.g. the row strap fumble, the sled-pull chalk stop).
  Without this the plan is generic; the skill asks before specializing.
- **Venue and/or measured transition data** — the event/venue (for route
  awareness) and/or any measured transition times from a simulation. Where neither
  exists, the skill proceeds with clearly-labeled assumption ranges and says to
  measure.

## Optional Inputs

- Measured transition times per roxzone from a recent simulation (replaces the
  assumption ranges with real data).
- The athlete's grip/strap pain points and any history of fumbling specific setups.
- Hydration plan and where a sip is wanted (ties to the fueling plan, not detailed
  here).
- Division and format — singles vs doubles/relay changes the transition layer
  (handoffs); season-dependent handoff rules come from the rules advisor, never
  from memory.
- Roxzone size/layout notes, expected crowding, weather.
- Whether the athlete can attend a venue walkthrough.

## Non-Goals

- **Not in-race run or station pacing.** It does not set per-km run targets, the
  station target times, the fade ladder, or effort ceilings → that is
  `hyrox-race-pacing-planner`. This skill owns the *transition* time within that
  plan, including the transition target ranges; the pacing planner owns the runs
  and stations.
- **Not partner work allocation.** Who does which station reps and the run split in
  doubles/relay → `hyrox-doubles-strategy-builder` / `hyrox-relay-strategy-builder`.
  This skill covers the *communication and handoff mechanics* of a transition, not
  the work division.
- **Not the rules.** Handoff legality, what may be split, and division specifics are
  season-dependent → `hyrox-division-and-rules-advisor`. Never assert a rule from
  memory.
- **Not scraping the venue.** It will not fabricate a specific venue's roxzone
  layout; it asks for the athlete's walkthrough notes or works from assumptions.
- **Not medical or rehab.** Pain or red-flag symptoms route to the safety framework
  below.

## Default Output

1. **Athlete & focus** — which transitions are in scope, venue/data on hand, and
   confidence in the read.
2. **Assumptions** — every target range and any inferred layout labeled as an
   assumption to be measured, with its effect on confidence.
3. **Transition-by-transition plan** — for each of the 16 (or the in-scope subset):
   approach/exit, route note, the pace-change/resume point, equipment
   entry/setup cue, chalk/strap/hydration as relevant, the walk-vs-run decision,
   and a **target range** (labeled assumption).
4. **Highest-value fixes** — the two or three transitions where this athlete leaks
   most time and the specific drill for each.
5. **Drills** — standalone transition drills (entry/exit, chalk, strap handling) to
   make them automatic, and the instruction to time transitions in simulations.
6. **Partner-handoff note (if doubles/relay)** — the communication/handoff *cues*,
   with work allocation and rules routed out.
7. **Measure-and-refine loop** — how to replace the assumption ranges with measured
   transition times and re-tune.

## Safety and Scope

This is a coaching tool that plans and drills transitions. It does not diagnose,
treat injuries, provide rehab, override a clinician, or guarantee a time. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
a routine transition plan needs only a one-line scope note. Transitions touch grip,
chalk, and quick changes of direction, so if the athlete reports a grip/forearm or
joint issue, keep the relevant drilling conservative, offer a regression, and say
what would warrant stepping back. If pain is sharp, worsening, or there is a
red-flag symptom (acute joint instability, a suspected fracture from a fall in the
roxzone, severe or worsening pain, or any of the safety reference's red flags), the
skill stops normal programming and leads with a referral to an appropriate medical
professional.

## Handling Incomplete Information

Transition requests often arrive without venue layout or measured transition times.
Always return a clearly-labeled **provisional** plan, naming each gap, with every
target range marked as an *assumption to be measured for this athlete and venue* —
roxzone size, layout, and crowding vary by event, so a confident per-transition
second-count asserted from memory would be false precision. Ask only for the fields
that materially change the plan: which transitions leak time, and whether a venue
walkthrough or measured sim data exists, usually do; the exact crowding usually does
not. Never fabricate a specific venue's layout or invent a "standard" transition
time. If inputs conflict (e.g. a claimed 5-second sled-pull transition that includes
chalk and a long roxzone path), surface it rather than silently accepting it.

## Related Skills and Routing

- **In-race run and station pacing** → `hyrox-race-pacing-planner`. Overlap rule:
  the pacing planner owns the per-km run bands, station target times, the fade
  ladder, and the effort ceilings *and sets the transition target ranges as part of
  the whole race plan*; this skill drills the transition *execution* — approach,
  route, setup, chalk, straps, walk-vs-run — and refines those ranges with measured
  data. A complete race plan uses both: pacing for the runs/stations, this for the
  roxzone.
- **Partner work allocation** → `hyrox-doubles-strategy-builder` /
  `hyrox-relay-strategy-builder` (who does which reps and the run split). This skill
  only covers the handoff *communication and mechanics*.
- **Rower strap/erg technique in depth** → `hyrox-erg-strategy-coach`.
- **Handoff legality / division rules** → `hyrox-division-and-rules-advisor`
  (season-dependent; never from memory).
- **Rehearsing transitions in a full run-through** → `hyrox-simulation-builder`
  (where transitions are timed).
- For broad or multi-part requests, start at `hyrox-pack-router`.
