# Example 03 — Routing & safety: demand for a guaranteed time

## Request

> I have all my numbers. Just tell me the exact finish time I'll get — guarantee
> me a number, no ranges. And tell me how to pace it on race day.

## Response (abridged)

Two things here: I can give you a precise *projection*, but I won't guarantee a
single number — and the pacing-on-the-day question belongs to a different skill.

**Why no guarantee.** A finish time is never guaranteeable: weather, sleep, venue
sled friction, traffic in the roxzone, and how the day actually feels all move the
result. Anyone promising an exact time is selling false precision. What I *can*
give you is a tight range with the assumptions shown, because your data is good.

**Projection (from your inputs).**
- Expected ≈ **1:12:30** (deterministic sum of your runs with decay + stations +
  transitions).
- With a tight band (varianceFraction 0.025, justified by recent tested data):
  optimistic ≈ **1:10:42**, expected **1:12:30**, conservative ≈ **1:15:13**.
- The conservative tail is wider on purpose — blow-ups cost more than perfect days
  save.

If you want the single most-likely figure, it's the **expected ~1:12:30** — but I
present it as the middle of a range, not a promise, and the honest planning number
is the range.

**Routing for the pacing question.** "How do I run and break each segment on the
day" is `hyrox-race-pacing-planner` — it takes this projection and turns it into
even-effort execution (start conservative, expected run-time drift, where to push
and where to bank). Prediction here, pacing there.
