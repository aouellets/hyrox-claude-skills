# Example 01 — Complete data: full race result + station times

## Request

> Just did my first HYROX Singles (Open). Finished 1:18:42. My fresh 1 km is
> about 4:30. Splits: runs averaged 5:35 but the last three were 6:05, 6:20,
> 6:30. Station times — SkiErg 4:35, Sled Push 3:50, Sled Pull 4:10, Burpee
> Broad Jumps 5:30, Row 4:25, Farmers Carry 2:40, Sandbag Lunges 5:10, Wall
> Balls 6:40. Roxzone felt slow, maybe 45s each. I'm a runner, goal is sub-1:10
> next time. Where am I losing time?

## Response (abridged)

**Snapshot.** Singles/Open, first race 1:18:42, goal sub-1:10 (an 8:42 cut).
Strong objective dataset (race splits + fresh pace + all 8 stations + roxzone
estimate). **Confidence: high.**

**Time-loss profile** (target = realistic for a sub-1:10 runner-type, not elite):

| Area | Current | Realistic target | Est. time lost | Confidence |
|---|---|---|---|---|
| Fresh run pace | 4:30/km | 4:25/km | ~0:40 total | high |
| Compromised running (runs 6–8) | 6:05 / 6:20 / 6:30 | ~5:20 each | **~3:25** | high |
| Wall Balls | 6:40 | ~5:15 | **~1:25** | high |
| Sandbag Lunges | 5:10 | ~4:30 | ~0:40 | med |
| Sled Pull | 4:10 | ~3:40 | ~0:30 | med |
| Burpee Broad Jumps | 5:30 | ~5:00 | ~0:30 | med |
| Roxzone (×8) | ~6:00 total | ~3:20 total | **~2:40** | med |
| SkiErg / Row / Sled Push / Farmers | solid | — | minimal | high |

The math is consistent: your fresh engine is fine; the race is being lost on
**legs under fatigue, a slow wall-ball station, and roxzone time** — classic
runner profile that hasn't trained the race demand yet.

**Ranked limiters (time returned ÷ training cost):**

| Rank | Limiter | Tag | Lever |
|---|---|---|---|
| 1 | Roxzone discipline | quick win | rehearse approach/exit; ~2:40 with no fitness change |
| 2 | Wall-ball cadence/efficiency | quick win | break strategy + squat-to-target economy → ~1:25 |
| 3 | Compromised running | slow build | station-to-run transitions, not full sims → ~3:25 |
| 4 | Sandbag lunges / sled pull | medium | unbroken-lunge tolerance, pull technique |

**Top 3 priorities + retests:**
1. **Compromised running** — retest: 4×(500 m run @ 5:20 off 1:30 hard SkiErg),
   target cadence recovered <30 s. Retest in 4 weeks.
2. **Wall balls** — retest: 100 wall balls for time, target <5:30 broken 20-20-20-
   20-20. Retest in 3 weeks.
3. **Roxzone** — retest: filmed mock transition, target <25 s approach+exit.
   Retest in 2 weeks.

**Data gaps / next step.** No grip/strength markers given, so lunges and pull are
ranked on race evidence only — confirm with a farmers-hold and a lunge-to-failure
test (route to `hyrox-benchmark-and-testing-builder`). To turn these priorities
into a block, route to `hyrox-training-plan-builder`. For a sub-1:10 feasibility
number, route to `hyrox-goal-time-and-race-predictor`.
