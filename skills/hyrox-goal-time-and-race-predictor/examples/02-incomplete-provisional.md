# Example 02 — Incomplete data: feasibility check with thin inputs

## Request

> Can I go sub-1:10 at HYROX? I run my 1 km in about 4:20 fresh. I've never tested
> my stations but I train them. Don't have transition numbers.

## Response (abridged)

I can give you a **provisional feasibility read**, clearly labeled, but I have to
widen the band a lot because only one input (fresh run pace) is measured — the
eight stations and transitions are assumed. I will not fabricate station times and
present them as yours.

**Variance rationale.** One measured input, seven assumed → **varianceFraction =
0.09** (±9% optimistic, +13.5% conservative). That width *is* the honest answer to
how little hard data we have.

**Goal inversion** (`allocateSplitsForGoal`, goal = 1:10:00). With a template
weighted toward a runner who's untested on stations, sub-1:10 implies roughly:
- Run total ≈ 36:00 (≈ 4:30/km average *including* decay — so you'd need to hold
  near your fresh pace under fatigue, which is demanding).
- Station total ≈ 30:00 across the eight (≈ 3:45 average per station).
- Transitions ≈ 4:00 total (≈ 30 s each).

**Verdict: borderline, unconfirmed.** Your fresh run pace makes sub-1:10
*plausible*, but it hinges entirely on station times you haven't tested. If your
stations land near those targets, it's in reach; if SkiErg/sleds/wall balls run
slow (common for run-dominant athletes), the conservative tail pushes past 1:18.

**What would tighten this materially:** the two erg time trials, sled push/pull at
race load, and a wall-ball test — those move the answer most. A precise transition
number barely changes it. Route to `hyrox-benchmark-and-testing-builder` to get
them, then come back and I'll narrow the band.

**Not a promise.** This is a transparency band on weak data, not a probability of
going sub-1:10.
