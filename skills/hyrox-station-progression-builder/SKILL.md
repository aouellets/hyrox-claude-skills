---
name: Station Progression Builder
description: Use when a HYROX athlete or coach requests a development program to build capacity on one standard station (ski-erg, sled push, sled pull, burpee broad jumps, row, farmers carry, sandbag lunges, or wall balls) — prerequisites, technique, strength and efficiency targets, progressions, regressions, scaling, accessory work, conditioning, proficiency tests, and race benchmarks with retest dates — and provides the station, the athlete's current capacity, equipment, and weeks to race. Returns periodized station conditioning. Not fault diagnosis from a description (route to hyrox-technique-and-fault-analyzer), not equipment swaps (route to hyrox-equipment-substitution-engine), and not sled-specific deep coaching (route to hyrox-sled-performance-specialist) rather than treating the sleds here.
category: stations
risk_level: low
requires_current_rules: false
---

# Station Progression Builder

Build a periodized **conditioning and development program for a single standard
HYROX station** so the athlete can deliver it strongly and *repeatably* inside a
60–90+ minute race, then run off it. This skill takes one of the eight stations —
ski-erg, sled push, sled pull, burpee broad jumps, row, farmers carry, sandbag
lunges, wall balls (see [station-taxonomy](../../references/station-taxonomy.md)
and [race-structure](../../references/race-structure.md)) — and returns
prerequisites, technique standards, strength/efficiency targets, progressions and
regressions, scaling, accessory work, conditioning, proficiency tests, race
benchmarks, and retest dates.

This is **development programming**, not in-session fault diagnosis. The line with
the technique skill matters and is resolved explicitly: if the athlete asks
*"why is this happening / what is wrong with my technique"* from an observation,
that is fault analysis ([hyrox-technique-and-fault-analyzer]) — bring the fix
*back here* to program around. If the athlete asks *"how do I build this station
over the next N weeks"*, that is this skill. For the **sled push and sled pull**
specifically, this skill defers to the deeper specialist
([hyrox-sled-performance-specialist]) rather than reproducing sled mechanics; it
will still slot the sled work into a broader station block when asked. Station
loads, distances, and rep counts are **season- and division-dependent and never
asserted from memory** — they come from the rules registry; this skill works in
relative terms (% of capacity, RPE, race-effort) and labels any assumed standard.

## Workflow

1. **Identify the station and the demand.** Pull the station's energy system,
   movement demand, and common limiters from
   [station-taxonomy](../../references/station-taxonomy.md). State whether the
   limiter is strength, technique/efficiency, grip endurance, pacing, or
   conditioning — that decides where the hours go.
2. **Establish current capacity.** Get the athlete's current station number (time,
   load handled, reps, or a description) and weeks to race. If a key number is
   missing, prescribe a baseline test first rather than assuming one.
3. **Check prerequisites.** Name the movement and strength prerequisites for safe,
   effective work (e.g. a competent hinge before heavy ski/row volume, a stable
   front-rack/overhead before loaded wall-ball volume). Where a prerequisite is
   absent, regress to build it first.
4. **Set technique standards.** State what "good" looks like for the station as
   coachable standards (depth/target on wall balls, leg-drive sequencing on the
   erg/row, posture on carries). Reference the standard but do not diagnose a
   fault the athlete only described — that is the technique skill.
5. **Define strength and efficiency targets.** Give relative targets (e.g. RPE,
   % of a tested capacity, stroke rate, cadence) — never a hardcoded race weight.
6. **Build the progression ladder.** Lay out progressions and regressions with an
   explicit **progression criterion** for each step and a regression on hand for
   under-recovered weeks. Advance on criteria, not the calendar
   ([coaching-principles](../../references/coaching-principles.md), §5).
7. **Add accessory and conditioning work.** Prescribe accessory lifts/drills that
   address the limiter and the *repeatability* conditioning (intervals at
   race-effort, sustainable power), biased toward delivering the station and then
   running — not a one-rep max.
8. **Set proficiency tests, race benchmarks, and retests.** Define a measurable
   proficiency test, a race-relevant benchmark (station time/quality at race
   effort with a run attached where relevant), and a **retest date**.

## Required Inputs

- **Which station** — one of the eight standard stations. The whole program is
  station-specific; without it the skill asks which one.
- **Current capacity on that station** — a recent time, load handled, rep count,
  or at minimum a description of where it breaks down. Used to set the starting
  level and progression criteria. If absent, the skill opens with a baseline test.
- **Weeks to race (or "no race scheduled / general build")** — sets the
  periodization horizon and how aggressively to progress.

## Optional Inputs

- Equipment access (erg model, sled availability/surface, sandbag, wall-ball
  target height) — determines which work is buildable; missing implements route to
  `hyrox-equipment-substitution-engine`.
- The athlete's ranked limiters / time-loss profile from
  `hyrox-athlete-assessment` (lets the program target the real leak).
- Training days/week, session length, and concurrent running/strength load (for
  concurrent-training management, [coaching-principles](../../references/coaching-principles.md), §4).
- Relevant strength numbers (squat, hinge, press) for setting accessory loads.
- Injury/niggle history (calibrates the conservative dose and regressions).
- The current season/division so any quoted standard can be flagged as needing the
  rules registry rather than assumed.

## Non-Goals

- **Not fault diagnosis from a description.** It does not infer *why* a movement is
  breaking down from an observation → route to
  `hyrox-technique-and-fault-analyzer`, then program around the confirmed fault.
- **Not equipment substitution.** It does not design swaps when an implement is
  missing → route to `hyrox-equipment-substitution-engine`.
- **Not sled-specific deep coaching.** For sled push/pull mechanics, starting,
  footwork, pulling rhythm, grip, and race-vs-gym resistance → route to
  `hyrox-sled-performance-specialist`; this skill only slots sled work into a
  broader station block.
- **Not in-race pacing or whole-race simulation** → `hyrox-race-pacing-planner` /
  `hyrox-simulation-builder`.
- **Not medical or rehab.** Pain or red-flag symptoms go to the safety framework;
  it never programs around an injury or guarantees prevention.

## Default Output

1. **Station & demand read** — the station, its energy system and movement demand,
   the identified limiter, and confidence in that read.
2. **Current capacity & assumptions** — the athlete's starting number (or the
   baseline test prescribed), weeks to race, every assumed value labeled.
3. **Prerequisites** — movement/strength prerequisites and any regression needed
   before the main work.
4. **Technique standards** — what "good" looks like as coachable standards (not a
   fault diagnosis).
5. **Strength & efficiency targets** — relative targets (RPE / % capacity /
   rate/cadence), never a hardcoded race load.
6. **Progression ladder** — progressions and regressions, each with an explicit
   progression criterion and a scaling option.
7. **Accessory & conditioning prescription** — accessory work plus the
   repeatability conditioning (sets, reps, loads-as-ranges, RPE, rest), biased to
   race-effort repeatability and running off the station.
8. **Proficiency test, race benchmark & retest** — the measurable test, the
   race-relevant benchmark, and the retest date.
9. **Integration & adjustment** — how this station block sits alongside running
   and other work, plus the referral note.

## Safety and Scope

This is a conditioning/development tool for one station. It does not diagnose,
treat injuries, provide rehab, override a clinician, or promise injury prevention.
Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately: routine capacity work needs only a one-line scope note; a
mentioned niggle gets an acknowledgement, a conservative dose, and a named
regression. Heavy eccentric stations — **sandbag lunges** especially, and sled
work — carry the classic **rhabdomyolysis** context when load/volume is
unaccustomed; progress gradually and route severe disproportionate muscle pain
and swelling, profound weakness, or dark/cola-colored urine, as well as chest
pain, syncope, suspected fracture, or other red flags, to a medical professional
rather than programming through them.

## Handling Incomplete Information

Station-build requests often arrive without a current number. Always return a
clearly-labeled **provisional** program from what exists, naming each gap. If the
current capacity is missing, open the program with a **baseline proficiency test**
rather than inventing a starting load or time, and key the first progression to
that result. Never assert a race load, rep count, or distance from memory — work
in relative terms (RPE, % of tested capacity, race-effort) and label any standard
that would need the season's rules registry to confirm. Ask only for the fields
that materially change the program — the station, a current capacity reference,
and weeks to race usually do; an exact 1RM usually does not. If inputs conflict
(e.g. a stated time implies a capacity the description contradicts), surface it
rather than silently choosing.

## Related Skills and Routing

- **Fault diagnosis from a description/observation** → `hyrox-technique-and-fault-analyzer`.
  Overlap rule: *why is this movement breaking down* is fault analysis; *how do I
  build this station over N weeks* is this skill. Run the analyzer first when a
  fault is suspected, then program the correction here.
- **Sled push / sled pull deep coaching** → `hyrox-sled-performance-specialist`
  (mechanics, starting, footwork, pulling rhythm, grip, gym-vs-race resistance).
  This skill defers sled mechanics there and only sequences sled work into a block.
- **Missing equipment / swaps** → `hyrox-equipment-substitution-engine`.
- **Running off the station** → `hyrox-compromised-running-coach`;
  **the aerobic engine** → `hyrox-running-development-plan`.
- **Rank limiters across all stations first** → `hyrox-athlete-assessment`;
  **fit the station block into a full plan** → `hyrox-training-plan-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
