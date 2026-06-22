---
name: Race Specific Workout Generator
description: Use when a HYROX athlete or coach requests a single session targeting one defined adaptation — aerobic capacity, threshold, race pace, strength, station strength, muscular endurance, grip, compromised running, transitions, technical efficiency, or race execution — and wants a concrete structure with intensity, rest, loads, and progression criteria. Every session must name its target adaptation and why; it will not produce random run-and-station circuits, and it is not a full periodized plan (route to hyrox-training-plan-builder) or a race simulation (route to hyrox-simulation-builder) rather than an undefined "hard workout".
category: race-execution
risk_level: low
requires_current_rules: false
---

# Race Specific Workout Generator

Generate a **single training session that targets one defined adaptation** for the
fixed 8 × ~1 km run / 8-station HYROX race (see
[race-structure](../../references/race-structure.md)). The non-negotiable rule:
**every session names its target adaptation and why it transfers to the race** —
no random run-and-station circuits with no purpose. A workout that doesn't know
what it's developing is junk volume dressed up as specificity (see
[coaching-principles](../../references/coaching-principles.md), §1, §6). This skill
defines the adaptation first, then builds the structure, intensity, rest, loads,
and progression criterion to match. Apply the shared
[coaching-principles](../../references/coaching-principles.md) and, proportionately,
[safety-and-referral](../../references/safety-and-referral.md).

## The target adaptations (every session names exactly one primary)

- **Aerobic capacity** — easy/steady volume building the engine.
- **Threshold** — sustainable hard running power (the biggest finish-time lever).
- **Race pace** — running at goal race effort, fresh and compromised.
- **Strength** — maximal/near-maximal force for the heavy stations.
- **Station strength** — force expressed in the station movement (sled, lunge).
- **Muscular endurance** — repeatable sub-threshold work capacity on stations.
- **Grip** — sustained grip under fatigue (farmers carry, sled pull, wall balls).
- **Compromised running** — running well immediately off a station
  ([compromised-running](../../references/compromised-running.md)).
- **Transitions** — fast, calm roxzone work (setup, racking, exit).
- **Technical efficiency** — better movement economy at a station.
- **Race execution** — rehearsing pacing/decision discipline (a focused brick,
  not a full sim — that's `hyrox-simulation-builder`).

## Workflow

1. **Establish the target adaptation.** If the request names one, use it. If it
   doesn't (e.g. "just give me a hard HYROX workout"), **require it first**: ask
   what the session should develop, offer the menu above, and explain why an
   undefined session can't be programmed well — it would be the random circuit
   this skill refuses to write.
2. **Justify the choice** against the athlete's limiter or stated goal — why this
   adaptation, why now.
3. **Screen for safety** — fatigue, niggles, and the
   [safety-and-referral](../../references/safety-and-referral.md) red flags;
   keep load conservative and offer a regression if a niggle is mentioned.
4. **Build the structure to the adaptation.** Intensity (RPE, pace band, HR ceiling
   where used), work/rest, sets, loads, set/break structure, and durations all
   serve the one target — not a grab-bag of everything.
5. **Set a progression criterion and a regression.** When does this advance, and
   what's the easier version if the athlete is under-recovered?
6. **State assumptions and route** the multi-week context and full rehearsals out.

## Required Inputs

- A **target adaptation** (or enough about the athlete's goal/limiter to define
  one with them). Without it, the skill asks for it rather than guessing.
- The athlete's **current capacity** for that quality (a pace, load, or recent
  benchmark) or a labeled assumption to stand in for it.

## Optional Inputs

- Recent splits, fresh and compromised run paces, station times, available
  equipment and run surface, HR availability, days/week and session length,
  division/format, and any niggles or recovery constraints.

## Non-Goals

- **Not a periodized plan.** One session, not the multi-week architecture →
  `hyrox-training-plan-builder`.
- **Not a race simulation.** Station-only blocks, half/full sims, and doubles/relay
  rehearsals → `hyrox-simulation-builder`.
- **Not random circuits.** It will not output a run-and-station workout with no
  named target adaptation; it requires the adaptation first.
- **Not in-race pacing.** Per-run target bands for the actual race →
  `hyrox-race-pacing-planner`.

## Default Output

1. **Target adaptation & why** — the one quality this session develops and how it
   transfers to the race / addresses the athlete's limiter.
2. **Session structure** — warm-up note, the main set (sets, reps, distances,
   loads, set/break structure), and cool-down.
3. **Intensity & rest** — RPE and/or pace band (and HR ceiling if used), and the
   work-to-rest scheme; stations paced to a repeatable effort, not to failure.
4. **Progression criterion & regression** — the measurable trigger to advance, and
   the easier version for an under-recovered day.
5. **Data to note** — what to record so progress is visible.
6. **Assumptions & routing** — labeled assumptions and the next skill if relevant.

## Safety and Scope

This is a **low-risk** programming skill. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
a one-line scope note when nothing is flagged, conservative loads with a
regression when a niggle is mentioned, and a stop-and-refer if a red-flag symptom
appears (sharp/worsening pain, rhabdomyolysis warning signs after heavy
sled/lunge/eccentric work, heat-illness signs in hot conditions). It does not
diagnose, promise injury prevention, equate gym sled friction with race
resistance, or present itself as official or endorsed.

## Handling Incomplete Information

If the **target adaptation is missing**, the right move is to ask for it, not to
fabricate one — a session without a defined adaptation is the random circuit this
skill exists to refuse. If the adaptation is clear but the athlete's *capacity*
data is thin, return a **clearly-labeled provisional** session on stated
assumptions (e.g. assumed threshold pace ~4:30/km, assumed gym sled), and ask only
for the input that materially sharpens it. Never invent split data or a finish
time, and never manufacture false precision in the prescription.

## Related Skills and Routing

- **Build the multi-week plan these sessions live inside** →
  `hyrox-training-plan-builder`.
- **Rehearse the race (station-only / bricks / half / full / doubles)** →
  `hyrox-simulation-builder`.
- **Develop compromised running as an ongoing focus** →
  `hyrox-compromised-running-coach`.
- **Build standalone running fitness** → `hyrox-running-development-plan`.
- **Progress a specific station's conditioning** →
  `hyrox-station-progression-builder`; **fix its technique** →
  `hyrox-technique-and-fault-analyzer`.
- **Plan in-race pacing** → `hyrox-race-pacing-planner`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
