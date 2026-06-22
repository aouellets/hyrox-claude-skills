# Example 02 — Incomplete data: provisional read from a thin log

## Request

> I want an assessment but I've never raced HYROX. I run 5 km in ~24:00 and I go
> to a functional gym 3x/week. What are my limiters?

## Response (abridged)

This is a **provisional** assessment — clearly labeled because there is almost no
race-specific data. I will not invent station times or a finish you have not
produced.

**What I can read (low confidence):**
- A 24:00 5 km implies a fresh ~1 km capacity around 4:30–4:45/km. That is a
  workable engine for a first finish, but it tells me nothing about how it holds
  up *compromised* — which is where HYROX is won or lost.
- "Functional gym 3x/week" is not specific enough to judge SkiErg, sled, or
  wall-ball capacity. I am holding all eight stations as **unknown**, not
  assuming them.

**Provisional limiter hypothesis (to be confirmed by testing, not asserted):**

| Likely limiter | Why suspected | Confidence |
|---|---|---|
| Compromised running | untrained for most pure runners | medium |
| Sled push/pull durability | rarely trained at race resistance | low |
| Wall-ball muscular endurance | high rep count fatigues novices | low |
| Pacing discipline | no race-effort reference yet | medium |

**The honest next step is data, not a plan.** I can't rank limiters by time cost
without baselines. Route to `hyrox-benchmark-and-testing-builder` to run a
minimum battery: a compromised-run test, a SkiErg 1000 m and Row 1000 m time
trial, a sled push/pull at expected race load, and a 100-wall-ball test. Bring
those back here and I'll produce a ranked time-loss profile with real numbers.

**Only field that materially changes this read right now:** whether you can
already do the wall-ball squat depth/target unbroken — tell me and I'll tighten
the wall-ball row. Everything else needs the test battery.
