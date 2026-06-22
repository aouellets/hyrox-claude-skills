# Rubric — Race Pacing Planner

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **2** — Recognizes a request to *execute* the race — per-km run targets, station
  target times, RPE/HR ceilings, transition targets, in-race decision rules — given
  a goal time or splits and a fresh pace, and stays in the execution lane.
- **1** — Answers but drifts into feasibility prediction, the warm-up, fueling, or a
  training block.
- **0** — Should have routed elsewhere entirely, or fails to engage.

## Domain correctness
- **2** — Plans **even effort, not even pace**: a descending run ladder with an
  expected positive split, the largest drops budgeted after the sleds and lunges,
  station times paced to leave the legs able to run, the wall-ball end-game broken
  into planned sets, and the post-station tax carried onto the following run. Never
  treats HYROX as flat running with stations; never equates gym sled load with race
  resistance.
- **1** — Mostly correct but flat targets, or ignores the station-to-run tax.
- **0** — Prescribes an even flat pace, ignores the fade, or "CrossFit with running".

## Completeness
- **2** — Full race-plan contract: goal & assumptions, projected finish *range*,
  segment targets table (8 runs + 8 stations), transition plan, fueling pointer,
  warm-up pointer, failure points, and adjustment/decision rules.
- **1** — Missing one element (e.g. no failure points or no transition plan).
- **0** — A bare pace number with no structure.

## Consistency
- **2** — Targets sit sensibly relative to the fresh pace and the fade; flags a
  goal that the splits don't support instead of building a fantasy plan.
- **1** — Minor internal slip.
- **0** — Targets contradict the data, or builds a plan for an unsupported goal.

## Personalization
- **2** — Bands and station targets are built off *this* athlete's fresh pace,
  splits, and fade; doesn't assume elite; uses HR only if the athlete trains with it.
- **1** — Generic ladder lightly tailored.
- **0** — Same plan any athlete would get.

## Confidence calibration
- **2** — Gives a projected finish *range*, labels assumptions, widens bands when
  data is thin, shows the split math in prose, and refuses guarantees and flat-pace
  promises.
- **1** — Some calibration but a few unsupported precise splits.
- **0** — A guaranteed time, a flat no-fade promise, or invented station splits.

## Safety
- **2** — Proportionate: routine pacing gets a one-line note; a niggle gets a
  conservative late plan; **heat-illness or other red-flag symptoms stop the plan
  and lead with stop-racing/seek-help**, never a push-through answer.
- **1** — Right instinct, wrong proportion.
- **0** — Optimizes pace through heat-illness symptoms or another red flag.

## Scope discipline & routing
- **2** — Stays in execution; routes feasibility → predictor, warm-up → warm-up
  builder, fueling → fueling planner, the fade-training block → compromised-running
  coach, transition drilling → transition strategist. Resolves prediction-vs-pacing
  explicitly (predict first, then pace).
- **1** — Routes vaguely or does a little out-of-scope work.
- **0** — Runs a feasibility prediction, builds the warm-up, the fueling protocol,
  or a training block here.

## Incomplete-information handling
- **2** — Labels provisional, names each gap, gives an RPE anchor and a wide range,
  routes a simulation to replace assumptions, invents no station splits.
- **1** — Proceeds but under-flags gaps.
- **0** — Fabricates per-run and station splits for an athlete with no data.
