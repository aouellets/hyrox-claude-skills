# Simulation Design

How to rehearse the race without burning the athlete down. Simulations are the
most specific — and most costly — sessions in a HYROX plan. A full race
simulation is expensive to recover from and crowds out the easy volume and
quality running that build the engine, so it is used sparingly as a benchmark,
not as a weekly staple ([coaching-principles](coaching-principles.md), §3, and
[compromised-running](compromised-running.md)). Most specificity comes from the
smaller formats below.

For every simulation type, decide its **objective**, **when to use** and **when
NOT to**, **intensity**, allowable **equipment substitution**, the **data to
collect**, the **recovery** it costs, and the **advancement criterion** before
running it.

## Station-only

- **Objective.** Build or test station capacity and technique in isolation.
- **When.** Early in a block, or to address a specific station limiter.
- **When NOT.** As a stand-in for race rehearsal — it omits the compromised
  running that defines the event.
- **Intensity / data.** Repeatable race-effort sets; record reps, splits,
  loads, RPE, grip failures.
- **Recovery.** Low to moderate. **Advance** when capacity/technique criteria are
  met, then attach a run.

## Run–station bricks

- **Objective.** Train the transition and compromised running — the core
  specific tool ([compromised-running](compromised-running.md)).
- **When.** Throughout the plan; the workhorse specific session.
- **When NOT.** When the athlete is under-recovered and needs easy running.
- **Intensity / data.** Race-effort station + race-pace run; record run pace
  after each station and how fast turnover returns.
- **Recovery.** Moderate. **Advance** by adding bricks or lengthening run
  segments once the target compromised pace is held.

## Half / segmented

- **Objective.** Rehearse a meaningful chunk of the race (e.g. 4 run-station
  pairs) or specific segments without full-race cost.
- **When.** Mid-block, to test pacing and accumulated fatigue.
- **When NOT.** Too close together — still costly.
- **Intensity / data.** Race effort; full split, station, and transition data
  ([transition-strategy](transition-strategy.md)).
- **Recovery.** Moderate to high. **Advance** toward a full sim once pacing holds.

## Full simulation

- **Objective.** A true benchmark of fitness, pacing, and execution; calibrates
  the [pacing-model](pacing-model.md) and `lib/goal-time-model.ts`.
- **When.** Sparingly — a small number of times across a build, well clear of the
  taper, and not in race week.
- **When NOT.** Routinely. It is the single most fatiguing session and is easy to
  overuse; it must be earned with a recovery window planned around it.
- **Intensity / data.** Race effort/conditions; full splits, station times,
  transitions, RPE/HR, and subjective notes feed `lib/split-analysis.ts`.
- **Recovery.** High — treat like a race. **Advance** only the *plan* from what it
  reveals, not the frequency of full sims.

## Doubles and relay formats

- **Doubles sim.** Two athletes rehearsing the planned work split, swaps, and
  communication ([doubles-strategy](doubles-strategy.md)).
- **Relay sim.** A team rehearsing segment assignments, handoffs, and recovery
  windows ([relay-strategy](relay-strategy.md)).
- For both, what may be divided and how handoffs work is **season/rule
  dependent** — rehearse the current season's structure from the rules registry,
  not assumed rules.

## Equipment substitution

When the athlete lacks a station's exact equipment, substitute the closest
demand (e.g. a comparable carry for farmers carry, a treadmill for outdoor runs)
and **label the substitution** so the data is interpreted with that caveat — a
substituted sled on different flooring is not the race resistance
([sled-training](sled-training.md)).

## Data to collect (every simulation)

Run paces (per km, fresh and compromised), station times, transition times, RPE
and HR where available, grip/technique failures, and subjective notes. This is
exactly what `lib/split-analysis.ts` consumes to compare planned vs actual decay.
Disproportionate pain or symptoms during a sim route to
[safety-and-referral](safety-and-referral.md).

## Cross-references

- Compromised running: [compromised-running](compromised-running.md)
- Pacing and the split math: [pacing-model](pacing-model.md)
- Transitions: [transition-strategy](transition-strategy.md)
- Peaking and race-week sims: [tapering](tapering.md)
