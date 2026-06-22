# Example 02 — Incomplete data (provisional)

**Request:**

> "Did my first HYROX, finished 1:32. Felt awful on the back half. What went
> wrong?"

Only a finish time is given — no run splits, no station times, no plan. The
analyzer returns a **provisional** read and asks for the breakdown rather than
inventing splits.

## Result snapshot (provisional)

First race, finished 1:32, no division/goal stated, **no segment data**. The
planned-vs-actual model needs the 8 run splits and 8 station times; without them
`comparePlannedVsActual` cannot run and any per-segment number would be
fabricated. **Read confidence: low.**

## What can be concluded now

- "Felt awful on the back half" is consistent with the common HYROX **positive
  split** (the fade), but I cannot confirm the direction without the run splits —
  it could equally be a single blown station (e.g. wall balls) rather than a
  pacing fade. I will not assert which.
- A 1:32 first-timer finish is a normal, respectable result; nothing here points
  to anything "wrong" in the sense of a fault.

## What I cannot determine without data

- Whether you went out too hard (need Runs 1–3 vs 6–8).
- Which station(s) cost the most (need the 8 station times).
- Roxzone time leak (need transitions).

## To get a real analysis, send

1. Your **8 run splits** (or even just Run 1 and Run 8).
2. Your **8 station times**.
3. Division/category and what you were aiming for.

With those I will run the planned-vs-actual comparison, classify the split
direction, and rank your addressable losses with confidence. I will not guess
them.

Routing: if you have no splits and want to *build* baselines for next time →
`hyrox-benchmark-and-testing-builder`; to plan the next block →
`hyrox-adaptive-training-plan-manager`.
