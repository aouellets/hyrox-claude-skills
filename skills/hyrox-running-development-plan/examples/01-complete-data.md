# Example 01 — Complete data: full running block from recent times

## Request

> I want a running-only block for HYROX. 14 weeks out, Singles, goal sub-1:05.
> Recent times: 5 km 21:30, 10 km 45:00, and a fresh HYROX 1 km holds ~4:25. I
> can run 4 days a week, ~45–60 min each, treadmill or road. I lift twice a week
> (one heavy lower with sleds on Saturday). No injuries. Build the running.

## Response (abridged)

**Athlete & goal.** Singles, 14 weeks out, sub-1:05. From your times, working
paces (derived from *your* data, not a standard):

| Quality | Pace | Basis |
|---|---|---|
| Easy / aerobic base | 5:35–6:00/km, RPE 3–4 | ~75–85s slower than threshold |
| Threshold | ~4:35/km (≈10 km effort), RPE 7–8 | from 10 km 45:00 |
| Race-pace ~1 km | 4:25/km | your fresh HYROX 1 km |
| Speed reserve | 3:55–4:05/km in short reps | ~30 s/km under race pace |

**Confidence: high** — three congruent data points.

**Architecture.** 4 runs/week = 2 easy + 2 quality. Quality runs go Tue/Thu so
they sit away from Saturday's heavy sled day. Phase emphasis shifts toward the
race demand:

- **Wks 1–5 Base + economy:** build easy volume, introduce strides.
- **Wks 6–10 Threshold + race-pace:** the engine block; repeat-1 km appears.
- **Wks 11–13 Durability + bricks:** repeat-1 km converts to run-station bricks.
- **Wk 14:** hand off to taper (`hyrox-race-week-and-taper-planner`).

**Quality prescriptions (with progression criteria):**

- **Threshold cruise intervals.** Wk start: 4 × 5 min @ 4:35/km, 60 s jog. Advance
  to 5 × 5 → 6 × 5 → 3 × 8 → 2 × 15 min continuous **only when** the prior session
  held 4:35 at RPE ≤8 with rest as written. Pace constant, duration up, rest down.
- **Repeat-1 km (race-pace).** 4 × 1 km @ 4:25, 90 s jog → 5 × → 6 × → reduce rest
  to 60 s → convert to bricks (1 km + a station). Hold pace; advance volume, then
  density, then specificity.
- **Speed reserve / economy.** 6–8 × 20 s strides @ 3:55–4:05 after an easy run,
  full recovery; light hill sprints alternate weeks.
- **Long easy run.** Start 70 min; extend ~10%/wk, down week wk 4/8/12; back off if
  easy pace drifts >10 s/km at the same HR.

**Impact-exposure budget (weekly, illustrative wk 6):**

| Load | Amount | Note |
|---|---|---|
| Run volume | ~32 km | ≤10% up on prior week |
| Sled distance | ~150 m | Saturday only |
| Eccentric (lunge) | moderate | not the day before threshold |

Down week wk 8 drops run volume ~30%. No week jumps mileage >10% — the classic
overuse trigger.

**Testing & retests.** Anchor now: 1 km time trial (confirm 4:25) + a 3 km
threshold check. Retest threshold wk 6 and wk 11; retest repeat-1 km hold wk 10.

**Adjustment rules.** Miss a quality session → don't double up; resume the ladder
where you left it. Easy pace drifting up at fixed HR → insert the down week early.

**Routing.** This is the running engine only. For station/strength integration as
one block, route to `hyrox-training-plan-builder`; to rehearse the post-station
fade, `hyrox-compromised-running-coach`; for in-race per-run targets,
`hyrox-race-pacing-planner`.
