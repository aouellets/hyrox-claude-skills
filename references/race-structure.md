# Race Structure

The reference description of the fixed race format used throughout this pack. It
describes the format nominatively for coaching purposes; it embeds no proprietary
rulebook. Division weights, distances, and standards change by season and are
**never hardcoded** — see `source-version-registry.json` and
`hyrox-division-and-rules-advisor`.

## The fixed sequence

The race is a fixed sequence of **8 × ~1 km runs**, each followed by **1 of 8
functional stations**, performed in the same order every time. Between each run
and station the athlete passes through the **roxzone** (the transition area).

| # | Run | Station (standard order) |
|---|-----|--------------------------|
| 1 | Run 1 (~1 km) | SkiErg (~1000 m) |
| 2 | Run 2 (~1 km) | Sled Push (~50 m) |
| 3 | Run 3 (~1 km) | Sled Pull (~50 m) |
| 4 | Run 4 (~1 km) | Burpee Broad Jumps (~80 m) |
| 5 | Run 5 (~1 km) | Rowing (~1000 m) |
| 6 | Run 6 (~1 km) | Farmers Carry (~200 m) |
| 7 | Run 7 (~1 km) | Sandbag Lunges (~100 m) |
| 8 | Run 8 (~1 km) | Wall Balls (reps vary by division) |

The eight station ids used in code (`lib/goal-time-model.ts`) are:
`ski-erg`, `sled-push`, `sled-pull`, `burpee-broad-jumps`, `row`,
`farmers-carry`, `sandbag-lunges`, `wall-balls`.

## Why this is not "running with some stations"

- **Compromised running dominates.** Every run after the first is performed on
  legs and lungs degraded by the preceding station. The sled stations in
  particular flood the legs; the run immediately after is where most athletes
  lose the most time relative to their fresh pace. Training and pacing must be
  built around *running while fatigued*, not fresh 1 km repeats. See
  `compromised-running.md`.
- **The roxzone is real time.** Approaching, setting up, racking/unracking,
  chalking, and exiting each station costs measurable seconds that compound
  across 8 stations. Transitions are trainable. See `transition-strategy.md`.
- **Order creates sequence effects.** Heavy posterior-chain work (sleds) precedes
  a run; grip-intensive work (farmers carry) precedes lunges; wall balls come
  last when the legs are most cooked. A plan that trains stations in isolation
  misses these interactions.
- **Even-effort, not even-pace.** Because of the fade, a flat target pace on
  paper usually means a positive split in practice. Pacing is planned around
  even *effort* with an expectation of run-time drift (`pacing-model.md`).

## Divisions (names only; loads/standards are versioned, not stored here)

Singles (Open), Pro, Doubles, Pro Doubles, Mixed Doubles, Relay, Adaptive, and
age-group categories exist. **Loads, rep counts, distances, and standards differ
by division and by season.** This repo never asserts a specific weight or rep
count from memory; the rules-dependent skills require a season/event date and use
only matching, user-supplied or licensed rule text.

## Doubles and relay (format shape only)

- **Doubles / Mixed Doubles**: two athletes complete the race together; running
  is covered together and station work is divided between partners under the
  current season's rules for what may be split. See `doubles-strategy.md`.
- **Relay**: a team divides the race into segments; each member runs and works
  assigned portions, with handoffs. Sequence and back-to-back fatigue drive the
  assignment. See `relay-strategy.md`.

## What the model needs

To project or analyze a race, the math in `lib/` needs: a fresh run pace, a
per-run compromised-decay estimate, eight station times, and roxzone transition
time. Where any of these is unknown, the consuming skill substitutes a clearly
labeled assumption and widens its confidence band rather than inventing a number.
