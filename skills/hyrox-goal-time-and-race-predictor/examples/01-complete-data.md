# Example 01 — Complete data: projection from a recent race

## Request

> I raced 6 weeks ago. Fresh 1 km ~4:30, and in the race my runs decayed about
> 3% per run. Station times: SkiErg 4:30, Sled Push 3:40, Sled Pull 4:00, Burpee
> Broad Jumps 5:15, Row 4:20, Farmers Carry 2:35, Sandbag Lunges 4:50, Wall Balls
> 5:45. Roxzone ~40s each. What finish should I expect at my next race in similar
> conditions?

## Response (abridged)

**Goal & inputs.** Predict next finish, similar venue. Inputs are mostly
*measured* from a race 6 weeks ago (fresh pace, ~3% decay, all 8 stations,
transition estimate). High data quality → tight band.

**Variance rationale.** Recent race + tested stations + similar conditions →
**varianceFraction = 0.025** (±2.5% optimistic, +3.75% conservative). I'm not
widening further because the inputs are real and recent.

**Model computation** (`computeRaceTime` → `projectFinishRange`):
- Run splits with 3% decay from a 4:30 base: 4:30, 4:38, 4:46, 4:54, 5:02, 5:11,
  5:19, 5:27 → **run total ≈ 39:47**.
- Station total = 4:30+3:40+4:00+5:15+4:20+2:35+4:50+5:45 = **34:55**.
- Transitions = 8 × 0:40 = **5:20**.
- **Expected total ≈ 1:20:02.**

**Finish projection:**
| | Time |
|---|---|
| Optimistic (−2.5%) | ~1:18:02 |
| **Expected** | **~1:20:02** |
| Conservative (+3.75%) | ~1:23:02 |

The conservative tail is deliberately wider than the optimistic one — race-day
blow-ups cost more than perfect days save.

**Segment totals.** Running 39:47 (50%), stations 34:55 (44%), transitions 5:20
(7%). Running and the slower runs late dominate the time.

**Assumptions & gaps.** The 3% decay is from one race — if your last race ran hot
or you went out too fast, real decay could differ; that's inside the band. To
tighten further before the next race, re-confirm the compromised-decay with a
test (route to `hyrox-benchmark-and-testing-builder`).

**Reminder.** This range reflects *data quality*, not a probability you'll finish
inside it — it is not a guarantee. **Handoff:** to plan how to run/break each
segment on the day, route to `hyrox-race-pacing-planner`.
