# Example 01 — Complete data: full battery for a gym-based athlete

## Request

> I have full gym access (SkiErg, rower, sled, sandbags, wall ball target,
> dumbbells/kettlebells). About 5 hours a week. 12 weeks to my first HYROX
> Singles. I want to baseline myself so my coach can build a plan. What tests
> should I run and how?

## Response (abridged)

**Purpose & constraints.** Baseline to feed assessment + plan design. Full gym,
~5 h/week, 12 weeks out, novice. Battery sized to baseline once, retest at
weeks 6 and 11.

**Test battery (minimum useful):**

| Test | Measures | Protocol | Score | Why |
|---|---|---|---|---|
| 5 km run TT | aerobic engine / run threshold | flat, even, hard | time + avg pace/km | sets fresh run pace baseline |
| SkiErg 1000 m | upper-body erg power | from rest, hard | time | station 1 baseline |
| Row 1000 m | erg power / pacing | from rest, hard | time | station 5 baseline |
| Sled push 50 m @ race load | posterior-chain power | record surface + load | time + surface note | sled is highly friction-dependent |
| Sled pull 50 m @ race load | pull mechanics/durability | record surface + load | time | station 3 baseline |
| 100 wall balls for time | muscular endurance | to target height, log breaks | time + break pattern | last-station fatigue marker |
| Farmers hold + 200 m carry | grip endurance | max hold then carry | hold s + carry time | grip → lunge sequence |
| Compromised-run test | running off legs | 4×(1:30 hard sled push → 400 m run) | per-400 m pace + cadence-recovery s | the HYROX-specific marker |

**Standardized protocol notes (excerpt).**
- **Sleds:** record the *surface and exact load* every time — gym sled friction is
  not race friction, so only same-surface results are comparable. Do not infer
  race resistance from these.
- **Warm-up:** identical 10-min build before each session; log it.
- **Recording:** same shoes, same time of day where possible, same rest (3 min)
  between tests in a session.

**Sequencing (over 3 sessions):**
- Day 1: 5 km TT (alone — needs fresh legs).
- Day 2: SkiErg 1000 m → 3 min → Row 1000 m → 5 min → 100 wall balls.
- Day 3: sled push → sled pull → farmers → compromised-run test (sled-fatigue
  tests grouped last; never before the 5 km).

**Baseline sheet fields:** date, test, result, load/height/surface, RPE,
conditions, notes.

**Retest cadence:** week 6 (compromised-run + wall balls + one sled), week 11
(full battery as a pre-race check). Retest sooner if a result plateaus 3 weeks.

**Training-implication map (excerpt):** compromised-run pace within 8% of fresh →
hold running, push stations; >15% slower → compromised running becomes a priority
block. Wall balls >7:00 with early breaks → muscular-endurance focus.

**Handoff.** Bring these numbers to `hyrox-athlete-assessment` for the ranked
time-loss profile, then `hyrox-training-plan-builder` for the block.
