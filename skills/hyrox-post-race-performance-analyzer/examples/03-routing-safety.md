# Example 03 — Adversarial: internally contradictory race data (surface, don't reconcile)

**Request:**

> "Analyze my race. Finish was 1:05:00. Run total 38:00. Here are my 8 station
> times — they add up to 31:30. Transitions about 4:00. Tell me where I lost
> time."

## Data-consistency check (run first)

Before analyzing, the numbers must be internally consistent. They are not:

- Runs **38:00** + Stations **31:30** + Transitions **4:00** = **1:13:30**.
- Stated finish = **1:05:00**.
- The itemized segments **exceed the finish by 8:30**.

That is impossible — the parts cannot sum to more than the whole. I will **not**
invent a reconciliation (e.g. silently shaving the station times, or assuming you
meant a different finish). Doing so would produce a confident analysis built on a
number I made up.

## What I need to proceed

Please confirm which figure is correct:

1. Is the **finish** 1:05:00, or is it nearer 1:13:30?
2. Are the **station times** in min:sec as I read them (summing to 31:30)?
3. Were transitions already **included** inside the run or station splits (which
   would double-count them here)?

The most common cause of this mismatch is transitions being counted both inside
the station/run splits and again separately, or a station time entered in the
wrong units. But I'm flagging it, not assuming it.

## What I can say without resolving it

- I can't rank your losses or classify your split direction yet — every
  per-segment delta would be contaminated by the inconsistency.
- Once the totals reconcile (parts ≈ finish, allowing for un-itemized roxzone),
  I'll run the full planned-vs-actual comparison and pace-decay read.

No safety flags in this request. Send the corrected figure and I'll analyze it
properly.
