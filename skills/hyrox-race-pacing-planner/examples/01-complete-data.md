# Example 01 — Complete data: 1:05 goal with recent simulation splits

## Request

> Singles Open, goal 1:05:00. Last full simulation 4 weeks ago came in at 1:08:30.
> Fresh 1 km is 4:35; in the sim my runs drifted from ~4:55 early to ~5:35 on the
> last two. Station times from the sim: SkiErg 4:20, Sled Push 2:40, Sled Pull
> 3:10, Burpee BJ 4:30, Row 4:05, Farmers 1:55, Lunges 4:40, Wall Balls 6:30.
> Roxzones felt slow. Build me a race plan to actually break 1:05.

## Response (abridged)

**Goal & assumptions.** Singles Open, goal 1:05:00. Anchored on your 1:08:30 sim
(4 weeks old) and fresh 4:35/km. To find 3:30, the cheapest seconds are in the
roxzones and in not over-cooking Runs 1–2, not in running the late runs harder.
**Confidence: medium-high** — you gave splits and a fresh pace; the sim is 4 weeks
old so current fitness may be slightly better. I have not run a feasibility
prediction — if you want a yes/no on 1:05, that is
`hyrox-goal-time-and-race-predictor`; this is the execution plan. The model behind
these splits is described in
[pacing-model](../../../references/pacing-model.md).

**Projected finish range:** ~1:04:30–1:06:15 if you hold the plan, centred near
1:05 — a *range*, not a promise.

**Segment targets (descending ladder, even effort not even pace):**

| Seg | Target | Note |
|---|---|---|
| Run 1 | 4:50–4:55/km | At target, NOT under — bank nothing |
| SkiErg | 4:15 | repeatable effort, legs intact |
| Run 2 | 4:55–5:00 | still fresh; hold the ceiling |
| Sled Push | 2:35 | **tax: first 150 m of Run 3 will feel leaden — plan it** |
| Run 3 | 5:05–5:20 | post-sled; slow first 150 m by design |
| Sled Pull | 3:05 | **tax onto Run 4** |
| Run 4 | 5:10–5:25 | post-sled again |
| Burpee BJ | 4:20 | breathing debt → control Run 5 cadence |
| Run 5 | 5:10–5:20 | |
| Row | 4:00 | |
| Run 6 | 5:15–5:25 | |
| Farmers | 1:50 | grip; small tax |
| Run 7 | 5:20–5:30 | |
| Lunges | 4:35 | **biggest leg tax of the day → Run 8** |
| Run 8 | 5:25–5:40 | slowest run by plan; keep it running |
| Wall Balls | 6:15 | broken **sets of 10–12** before failure, not to failure |

**Effort ceilings.** Runs 1–3 ≤ RPE 7–8 ("comfortably hard," can speak 3–4 words).
If you train with HR, cap the first third near your usual threshold-minus HR and
treat it as informing, not dictating — it will drift up late regardless.

**Transition plan (targets are assumptions to measure):**

| Roxzone | Target | Walk/run |
|---|---|---|
| Each erg/row entry | ~8–12 s | jog in, smooth onto the machine |
| Post-sled out | up to ~15 s | brief power-walk to reset legs |
| Post-lunge out | up to ~15 s | power-walk, restore posture |
| Grip stations | +chalk, decisive | jog, chalk planned not leisurely |

16 transitions; trimming ~3–5 s each is ~50–80 s — a large chunk of your 3:30.
Drill these with `hyrox-roxzone-and-transition-strategist`; the roxzone time model
is in [transition-strategy](../../../references/transition-strategy.md).

**Fueling & hydration pointer.** Plan a brief deliberate sip strategy and any
carb timing with `hyrox-fueling-and-hydration-planner` — do not trial anything new
today.

**Warm-up pointer.** Build the pre-race timeline with
hyrox-race-day-warmup-builder; the SkiErg comes first, so prime the upper body.

**Failure points & adjustment rules.**
- **Over-cooking Runs 1–2** (most common). Sign: 4:40s instead of 4:50s. Rule:
  hold the ceiling, do not bank — the cost is deferred, not avoided.
- **Hot sled.** Sign: Run 3 first 200 m at a walk. Rule: that is planned; do not
  panic-sprint to "make it up."
- **Wall-ball blow-up.** Rule: pre-commit to sets of 10–12 from rep 1; never go to
  failure and stand holding the ball.
- **Early-split contingency.** Faster than plan at the planned effort → hold
  effort, accept a small buffer, do not spend it. Slower at the planned effort →
  re-anchor to even effort, accept ~1:06, do not chase 1:05 into a blow-up.
