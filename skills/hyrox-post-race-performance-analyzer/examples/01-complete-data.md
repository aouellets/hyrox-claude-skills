# Example 01 — Complete data (planned vs actual)

**Request:**

> "HYROX Singles Open, finished 1:18:30, goal was 1:15. Here's planned vs actual.
> No pain. Felt strong early, died after the lunges."

| Segment | Planned | Actual |
|---|---|---|
| Run 1 | 4:35 | 4:25 |
| Run 2 | 4:40 | 4:35 |
| Run 3 | 4:45 | 4:50 |
| Run 4 | 4:50 | 5:05 |
| Run 5 | 4:55 | 5:15 |
| Run 6 | 5:00 | 5:25 |
| Run 7 | 5:05 | 5:50 |
| Run 8 | 5:10 | 6:05 |
| SkiErg | 4:10 | 4:08 |
| Sled Push | 3:00 | 3:20 |
| Sled Pull | 3:30 | 3:35 |
| Burpee BJ | 4:30 | 4:40 |
| Row | 4:15 | 4:18 |
| Farmers Carry | 2:30 | 2:35 |
| Sandbag Lunges | 4:20 | 5:10 |
| Wall Balls | 6:30 | 7:20 |

## Result snapshot

Singles Open, finished 1:18:30 vs a 1:15 goal (+3:30). Data complete (runs +
stations + planned targets; transitions not itemized). **Read confidence: high.**

## Largest addressable losses (ranked)

`summarizeTopLoss`: **Largest addressable loss: Run 8 (+0:55 vs plan, 17.7%
over).** Top losses by `deltaSec`:

1. Run 8 +55s · 2. Wall Balls +50s · 3. Sandbag Lunges +50s · 4. Run 7 +45s ·
5. Sled Push +20s. **Gains:** Run 1 −10s, Run 2 −5s (you banked time early — see
below).

## Pace-decay read

Direction **positive** (the fade): least-squares slope ≈ +13 s per run,
`slopeFractionPerRun` ≈ +5% per run — well above the model's ~1.5% even-band
(a documented modelling choice, not a measured constant). Spread fastest→slowest
run = 1:40 (Run 1 4:25 → Run 8 6:05). The fade **accelerates after the sandbag
lunges**: Runs 7–8 carry the largest run losses.

## Root-cause hypotheses (LABELED — not observed facts)

- **H1 — Early over-pacing drove the back-half fade.** *Confidence: medium-high.*
  Runs 1–2 came in 10s/5s **under** plan, then Runs 4–8 blew out. Banking time
  early at a too-high effort is the classic cause of a 5% decay. Evidence for:
  the gain→loss shape. Against: lunges/wall-balls also overran, which is partly
  station capacity, not just pacing.
- **H2 — Sandbag-lunge capacity/technique.** *Confidence: medium.* +50s on the
  lunges plus the steep Run-7 loss right after suggests the station itself cooked
  the legs more than planned. Could be capacity or a bracing/stride fault.
- **H3 — Wall-ball end-game.** *Confidence: medium.* +50s on the last station on
  already-cooked legs; likely unplanned large sets to failure rather than
  pre-set breaks.

## Next-cycle priorities (time returned ÷ cost)

1. **Even-effort pacing discipline** (quick win): cap Runs 1–3 at target, not
   under. Largest expected return for least cost.
2. **Sandbag-lunge durability** (slow build): the station and the run after it.
3. **Wall-ball set strategy** (quick win): planned breaks before failure.

## Recommended tests

- Compromised-run test (lunge → 1k) within 2 weeks to confirm H2 vs H1.
- Wall-ball broken-set time trial (e.g. 10×10) to set the race break plan.

## Example intervention block (illustrative, not the plan)

> Lunge-to-run transition: 4 × [50 m sandbag lunge @ race load → 600 m run @
> Run-7 target pace], 3 min easy between. Hold even effort; the goal is restoring
> cadence in the first 150 m, not racing the run.

Routing: to turn these priorities into the next block →
`hyrox-adaptive-training-plan-manager`. To re-set the target splits →
`hyrox-goal-time-and-race-predictor`.
