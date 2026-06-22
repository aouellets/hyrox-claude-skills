---
name: Compromised Running Coach
description: Use when a HYROX athlete or coach asks to fix the run immediately after a station — running off heavy legs (especially post-sled), the slow first 100-200 m out of the roxzone, lost cadence, panicked breathing, or fade across the eight runs — and provides which stations cause the worst fade and recent compromised-run experience. Returns station-to-run interval work with progressive fatigue exposure. Not general aerobic development (route to hyrox-running-development-plan), not in-race pacing targets (route to hyrox-race-pacing-planner), not full simulations (route to hyrox-simulation-builder).
category: running
risk_level: low
requires_current_rules: false
---

# Compromised Running Coach

Develop the distinct, trainable skill of **running well immediately after a
station**. In HYROX every run after the first begins on legs and lungs degraded by
the preceding station, and the run *out of the roxzone* is where most athletes
lose the most time relative to their fresh pace (see
[race-structure](../../references/race-structure.md) and
[compromised-running](../../references/compromised-running.md)). This is not a
byproduct of being a good runner — it is its own quality: pace control in the
first 100–200 m, cadence restoration, breathing recovery, and postural recovery
off heavy work, rehearsed with station-to-run bricks under progressive fatigue.
This skill trains that transition; it does **not** build the aerobic engine
(that is `hyrox-running-development-plan`) and it does **not** turn every session
into a full race simulation, which is too costly to recover from
([coaching-principles](../../references/coaching-principles.md), §3). See routing
below for the explicit overlap rule.

## Workflow

1. **Identify the worst fades.** Establish which stations wreck the following run
   most for *this* athlete — sled push, sled pull, and sandbag lunges are the
   usual leg offenders; ergs and burpees leave the worst breathing debt. Prioritize
   bricks around the athlete's actual leak points, not a generic list.
2. **Anchor the targets.** Use the athlete's fresh run pace and their observed
   compromised pace to set a realistic *compromised* target for the first 200 m
   and a settle target by ~200–300 m. Derive from their data; where it is missing,
   label the assumption and widen the band.
3. **Teach the transition sequence.** Coach the deliberate first-200 m drill:
   pace control first (run a touch under target off heavy legs), cadence
   restoration (short, light, quick steps), breathing recovery (an imposed
   exhale-focused pattern), postural recovery (ribs down, eyes up, run tall).
4. **Prescribe station-to-run bricks.** Build the primary sessions: a station
   effort immediately followed by a run segment, varying the preceding station so
   the athlete rehearses recovering from each demand. Give load/effort, run
   distance, the target compromised pace, rest, RPE, and reps.
5. **Bias toward the costliest transitions.** Sled-to-run and lunge-to-run earn the
   most reps because they cost the most; a sled effort + a controlled 400–600 m
   run is one of the highest-value specific sessions.
6. **Progress fatigue exposure on a criterion.** Start with one or two bricks;
   grow the count and the run-segment size over weeks — advance only when the
   athlete holds the target compromised pace and recovers turnover within the
   planned distance. Do not make every session a full simulation.
7. **Set retests.** Attach a measurable retest and date (e.g. cadence-recovery
   time and held pace off a fixed sled effort) so the skill is tracked.

## Required Inputs

- **Which stations cause the worst run fade** — the athlete's actual leak points
  (or a recent race/training observation of where pace collapses). Without this,
  the bricks are generic; the skill asks for it before specializing.
- **Recent compromised-run experience** — any data on running off stations: a
  compromised split, a sled-to-run effort, or at least a description of what
  happens in the first 100–200 m. Used to set the compromised target and the
  starting fatigue dose.

## Optional Inputs

- Fresh run pace and the observed compromised pace (the most useful pair).
- The eight station times/loads and the roxzone transition estimate.
- Cadence (fresh vs. post-station), HR/RPE behavior leaving a station.
- Weeks to race and how the athlete's running and station schedule currently sits.
- Recent injury/niggle history (calibrates the conservative dose).
- Equipment access (sled, sandbag, treadmill/track) — determines which bricks are
  buildable and where substitutions are needed
  (route to `hyrox-equipment-substitution-engine` if a key implement is missing).

## Non-Goals

- **Not general aerobic development.** It does not build base, threshold,
  race-pace, or economy as standalone running capacity → route to
  `hyrox-running-development-plan`.
- **Not in-race pacing.** It does not set the per-run targets, the fade curve, or
  the roxzone plan for race day → route to `hyrox-race-pacing-planner`.
- **Not full race simulations.** It deliberately avoids turning every session into
  a whole-race rehearsal → route to `hyrox-simulation-builder` for sparse,
  benchmark simulations.
- **Not station technique or conditioning.** It does not drill out a sled fault or
  build station capacity → `hyrox-technique-and-fault-analyzer` /
  `hyrox-station-progression-builder`.
- **Not medical or rehab.** Pain or red-flag symptoms route to the safety
  framework below; it never diagnoses or programs around them.

## Default Output

1. **Athlete & focus** — the worst-fade stations, fresh vs. compromised pace on
   hand, weeks to race, and confidence in the read.
2. **Assumptions** — every inferred value labeled, with its effect on confidence.
3. **Transition sequence** — the first-200 m drill (pace control → cadence →
   breathing → posture) as a coachable, repeatable cue set.
4. **Compromised pace targets** — first-200 m target and the ~200–300 m settle
   target per priority station, as bands, derived from the athlete's data.
5. **Brick prescriptions** — the station-to-run sessions: which station, the
   effort/load, the run distance and target compromised pace, rest, RPE, reps —
   biased toward sled-to-run and lunge-to-run.
6. **Progressive fatigue ladder** — how brick count and run-segment size advance,
   each with its progression criterion; the explicit "not every session is a sim"
   guardrail.
7. **Retests** — the measurable retest(s) and dates.
8. **Integration & adjustment** — how these bricks sit alongside easy volume and
   quality running, plus the referral note.

## Safety and Scope

This is a coaching tool that trains running off heavy legs. It does not diagnose,
treat injuries, provide rehab, override a clinician, or promise injury prevention.
Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately: ordinary post-station leg "deadness" and breathing debt are the
trained target and need only a one-line scope note; a mentioned niggle gets an
acknowledgement, a lighter dose, and a regression. But if post-station leg
deadness presents as **sharp, localized, or persistent pain** rather than ordinary
fatigue — or after heavy eccentric sled/lunge work the athlete reports severe
muscle pain and swelling out of proportion, profound weakness, or dark urine
(rhabdomyolysis warning signs), or chest pain, syncope, or the other red flags —
the skill stops normal programming and leads with a referral to an appropriate
medical professional. Heavy eccentric loading (sleds, lunges) is the relevant
trigger to watch.

## Handling Incomplete Information

Compromised-running requests often arrive with only a description of the problem.
Always return a clearly-labeled **provisional** session set from what exists,
naming each gap. If the athlete has not said which stations fade worst, ask that
first and default the bricks to the highest-cost transitions (sled-to-run,
lunge-to-run) with a clear note that the priority shifts once they confirm. Set
compromised pace targets only from the athlete's data; where a pace must be
assumed, label it, widen the band, and make the first brick a measured baseline
rather than inventing a precise number. Ask only for the fields that materially
change the work — the worst-fade stations and a compromised-pace reference usually
do; exact cadence usually does not. Never fabricate splits or paces. If inputs
conflict (e.g. a compromised split faster than the fresh pace), surface it rather
than silently choosing.

## Related Skills and Routing

- **Build the aerobic engine** → `hyrox-running-development-plan`. Overlap rule:
  if the request is about *capacity* — base, threshold, race-pace, economy,
  durability, weekly running structure — it belongs there; if it is about
  *recovering turnover, breathing, posture, and pace in the first 100–200 m off
  heavy legs right after a station*, it belongs here. A complete block needs both,
  sequenced: the engine on easy/quality days, bricks layered in under managed
  fatigue.
- **In-race per-run targets and the fade curve** → `hyrox-race-pacing-planner`
  (this skill trains the transition; that skill sets the race-day plan).
- **Full race simulations** → `hyrox-simulation-builder` (sparse benchmarks, not
  every session).
- **Station technique / conditioning** → `hyrox-technique-and-fault-analyzer` /
  `hyrox-station-progression-builder`;
  **sled specifics** → `hyrox-sled-performance-specialist`.
- **Rank limiters first** → `hyrox-athlete-assessment`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
