# Example 01 — Complete data: 16-week singles plan to a goal time

## Request

> I'm doing HYROX Open (men's singles) in 16 weeks. I want to go from my last
> result of 1:18 to sub-1:10. I can train 5 days/week, ~75 min/session. Full gym
> access: treadmill, sled, two ergs (ski + row), wall-ball target, sandbag,
> dumbbells/kettlebells. Current easy run ~5:30/km, threshold ~4:45/km, ~35 km/week
> running. Strength is solid; my weak stations are sled push and wall balls, and my
> runs fall apart after the sleds.

## Response (excerpt)

**Athlete & goal.** Men's Open singles, recreational-competitive, race in 16 weeks.
Goal 1:10:00 from a 1:18 PR — an ~8 min improvement, ~10%. Realistic in 16 weeks
given consistent running history; aggressive but not a false promise. 5 days/week,
75 min. Full equipment. Limiters (athlete-reported): sled push, wall balls, and
compromised running off the sleds — those drive the emphasis.

**Assumptions.** Easy 5:30/km and threshold 4:45/km taken as current and retested
in week 1. Goal ~1 km race pace ≈ 4:35–4:45/km (compromised), refined after the
week-1 brick test. Sled loads prescribed as RPE/effort, not a weight — gym sled
friction ≠ race sled.

**Architecture (16 wk, ~7-day taper baked into the last week).**

| Phase | Weeks | Objective |
|-------|-------|-----------|
| General prep | 1–4 | Rebuild base volume, movement competence, week-1 testing |
| Capacity | 5–9 | Threshold + station conditioning (sled, wall-ball density), grip |
| Race-specific | 10–13 | Goal-pace bricks, station-to-run transitions off sleds |
| Simulations + peak | 14–15 | One partial sim (wk 14), one ~75% sim (wk 15), then sharpen |
| Taper | 16 | Volume down ~40–50%, intensity kept → handoff to race-week skill |

**Weekly skeleton (capacity phase shown).**

- Mon — Easy run 40–45 min @ 5:30/km + strides ×4.
- Tue — Threshold: 5 × 5 min @ 4:45/km, 60 s jog; then 8 min easy.
- Wed — Strength/station: sled push 6 × 15 m heavy-but-unbroken (RPE 8) + ski-erg
  6 × 250 m; core. (Heavy legs — Thu stays easy.)
- Thu — Easy run 35 min + wall-ball density: 5 × 20 reps, 30 s rest, smooth depth.
- Sat — Brick: (1 km @ 4:50 → sled push 15 m → 200 m run hard) × 4. *This is the
  compromised-running work — restore cadence in the first 100 m off the sled.*
- Fri/Sun — rest / optional 30 min easy spin or mobility.

**Progression criteria.** Threshold: advance 5 × 5 → 6 × 5 → 3 × 8 min only after a
session is hit at target pace with RPE in range. Sled: add 15 m volume before adding
effort. Wall balls: hold depth/rhythm, then reduce rest. Easy volume rises ≤10%/week
with a down week at week 5 and week 9 (−30%).

**Testing & retesting.** Week 1: easy/threshold pace check, sled-push feel, wall-ball
max unbroken, a 2-round mini-brick to estimate compromised decay. Retest at weeks 9
and 13. (Battery detail → `hyrox-benchmark-and-testing-builder`.)

**Adjustment rules.** Miss a session → drop it, do not stack it onto the next day.
Poor sleep / high life load → run easy, cut the quality session to its first half.
Niggle in the sled-loaded knee → regress load, keep distance, reassess in 3 sessions.

**Recovery.** Easy days stay genuinely easy (5:30/km, conversational). Down weeks at
5 and 9. Sleep is the priority lever. Taper placed in week 16 — race-week protocol
(last sled, travel, activation) is owned by `hyrox-race-week-and-taper-planner`.

**Risks & referral.** ~10% improvement is reachable but assumes ~90% session
completion; if running volume can't hold, the goal slips toward 1:12–1:13 — that's
the honest range. Overuse watch on sled/lunge eccentric volume. One-line scope note:
this is coaching, not medical advice; sharp or worsening pain routes to
[safety-and-referral](../../../references/safety-and-referral.md).
