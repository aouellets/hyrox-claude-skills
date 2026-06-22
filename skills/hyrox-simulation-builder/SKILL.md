---
name: Simulation Builder
description: Use when a HYROX athlete or coach requests a race-rehearsal session — a station-only block, run-station bricks, a half or segmented simulation, a full simulation, or a doubles/relay sim — and wants the objective, timing, intensity, equipment substitutions, data to collect, recovery cost, and advancement criteria. It builds the right-sized exposure and states the reasons NOT to run a full simulation; it does not write the periodized plan (route to hyrox-training-plan-builder), single-adaptation sessions (route to hyrox-race-specific-workout-generator), or in-race pacing (route to hyrox-race-pacing-planner) rather than full simulations every week.
category: race-execution
risk_level: low
requires_current_rules: false
---

# Simulation Builder

Design the **right-sized rehearsal** of the fixed 8 × ~1 km run / 8-station HYROX
race (see [race-structure](../../references/race-structure.md)) so the athlete
gets specific exposure without burning down the easy volume and quality running
that build the engine. Simulations are the most specific — and most costly —
sessions in a plan, so a full race rehearsal is a sparse, deliberate benchmark,
**not** a weekly staple (see
[simulation-design](../../references/simulation-design.md) and
[compromised-running](../../references/compromised-running.md)). This skill picks
the smallest format that meets the goal and, for each one, specifies objective,
timing, intensity, equipment substitutions, data to collect, recovery cost, and
the advancement criterion — and names when a full sim is the wrong choice. Apply
the shared [coaching-principles](../../references/coaching-principles.md) and,
proportionately, [safety-and-referral](../../references/safety-and-referral.md).

## Simulation formats (pick the smallest that meets the goal)

- **Station-only** — build/test station capacity and technique in isolation; low
  to moderate recovery cost. Not a race rehearsal (omits compromised running).
- **Run-station bricks** — the workhorse: a station immediately followed by a run
  segment, training the transition and compromised running; moderate cost.
- **Half / segmented** — a meaningful chunk (e.g. 4 run-station pairs) to test
  pacing and accumulated fatigue without full-race cost; moderate-to-high cost.
- **Full simulation** — a true benchmark of fitness, pacing, and execution that
  calibrates the pacing model; high cost, treat like a race; sparse only.
- **Doubles / relay sim** — rehearse the planned work split, swaps, handoffs, and
  communication; what may be divided is season/rule dependent (do not assume).

## Workflow

1. **Establish the goal of the rehearsal.** What is being tested or trained — a
   single station limiter, the transition skill, pacing over a chunk, or a full
   benchmark? This decides the format; do not default to a full sim.
2. **Screen for safety.** Check fatigue, niggles, and the
   [safety-and-referral](../../references/safety-and-referral.md) red flags. An
   under-recovered athlete needs easy running, not a costly rehearsal.
3. **Select the smallest sufficient format** from the list above. Justify why a
   smaller format is or is not enough, and state the reasons NOT to run a full
   simulation when one is requested but unwarranted.
4. **Specify the session** with all seven elements: objective, timing/placement
   in the week and block, intensity (race effort vs sub-threshold, RPE targets),
   equipment substitutions (labeled), data to collect, recovery cost, and the
   advancement criterion that earns the next step up.
5. **Plan the recovery window** around the session proportional to its cost; a
   full sim is treated like a race with easy days on either side.
6. **Route the downstream work** — the plan, single-adaptation sessions, and
   in-race pacing live in their own skills.

### When NOT to run a full simulation (state these when refusing one)

- It is the single most fatiguing session and is costly to recover from; built
  too often it crowds out easy volume and quality running — the opposite of
  specificity done well.
- It is unwarranted in race week, deep in a taper, or when the athlete is
  under-recovered, niggling, or coming back from illness/layoff.
- Most specificity comes from bricks and segments; reserve full sims for sparse,
  earned benchmark points with a recovery window planned around them.

## Required Inputs

- The **goal of the rehearsal** (what to test or train) or enough about the
  athlete's current limiter to infer it.
- **Where in the week/block** the session sits and the athlete's recent training
  load, so the recovery cost is placed responsibly.
- Available **equipment and run surface** (so substitutions are labeled honestly).

## Optional Inputs

- Recent splits / last simulation result, fresh and compromised run paces, station
  times, target finish, division and format (singles/doubles/relay), HR
  availability, and any niggles or recovery constraints.

## Non-Goals

- **Not a periodized plan.** It builds individual rehearsal sessions, not the full
  multi-week architecture → `hyrox-training-plan-builder`.
- **Not single-adaptation workouts.** A session targeting one quality (threshold,
  grip, race pace) without race rehearsal → `hyrox-race-specific-workout-generator`.
- **Not an in-race pacing plan.** Per-run target bands and execution rules for the
  actual race → `hyrox-race-pacing-planner`.
- **Not a weekly full-sim prescription.** It will decline to schedule frequent
  full simulations and explain the recovery cost instead.

## Default Output

1. **Rehearsal goal & format chosen** — and why this is the smallest sufficient
   format (with the reasons NOT to run a full sim where relevant).
2. **Session structure** — the run/station/brick layout, distances, set/break
   structure, and labeled equipment substitutions.
3. **Intensity** — race effort vs sub-threshold, RPE (and HR ceiling if used) per
   segment; stations paced to a repeatable effort, not to failure.
4. **Data to collect** — run paces (fresh and compromised, per km), station times,
   transition times, RPE/HR where available, grip/technique failures, notes.
5. **Recovery cost & placement** — how taxing it is and what days surround it.
6. **Advancement criterion** — the measurable result that earns the next step.
7. **Assumptions & routing** — labeled assumptions and the next skill to consult.

## Safety and Scope

This is a **low-risk** programming skill. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
one-line scope note when nothing is flagged, conservative loads and a regression
when a niggle is mentioned, and a stop-and-refer if a red-flag symptom appears
(disproportionate pain or swelling during a sim, rhabdomyolysis warning signs
after heavy sled/lunge work, heat-illness signs in hot conditions). It does not
diagnose, promise injury prevention, equate gym sled friction with race
resistance, or present itself as official or endorsed.

## Handling Incomplete Information

When the goal or the athlete's data is thin, return a **clearly-labeled
provisional** session: pick the most likely-useful smaller format, state the
assumptions (e.g. assumed gym sled, assumed ~5:30/km fresh pace), and ask only for
the few inputs that materially change it (the limiter being targeted, equipment,
where it sits in the week). Never fabricate split data or invent a finish time,
and never default to a full simulation to "cover everything" — that is the costly
wrong answer when data is missing.

## Related Skills and Routing

- **Build the multi-week plan these sessions sit inside** →
  `hyrox-training-plan-builder`.
- **Target one adaptation without race rehearsal** →
  `hyrox-race-specific-workout-generator`.
- **Plan in-race pacing and execution** → `hyrox-race-pacing-planner`.
- **Train the transition-to-run skill specifically** →
  `hyrox-compromised-running-coach`.
- **Analyze the splits a full sim produced** →
  `hyrox-post-race-performance-analyzer`.
- **Doubles/relay work-split rules for a sim** →
  `hyrox-doubles-strategy-builder` or `hyrox-relay-strategy-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
