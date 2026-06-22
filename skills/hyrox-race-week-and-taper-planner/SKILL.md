---
name: Race Week And Taper Planner
description: Use when a HYROX athlete is in the final 7-14 days before a race and asks how to taper, what to do this week, the last hard session, the last sled, or how to handle travel, sleep, and logistics. Returns a day-by-day taper that reduces volume while maintaining intensity, places the last hard and last sled sessions, and covers mobility, sleep, travel, and activation. Its rule is no new methods in race week. It does not build the day-of warm-up timeline (route to hyrox-race-day-warmup-builder), set in-race pacing (route to hyrox-race-pacing-planner), or write a detailed fueling plan rather than coordinate one (route to hyrox-fueling-and-hydration-planner).
category: planning
risk_level: low
requires_current_rules: false
---

# Race Week And Taper Planner

Bring a HYROX athlete to the start line **fresh without going stale**. The taper's
job is to shed accumulated fatigue while preserving the fitness and sharpness built
over the block — the guiding mechanism is **reduce volume, maintain intensity** (see
[tapering](../../references/tapering.md)). The single most important rule is **no new
methods in race week**: no new exercises, shoes, fueling, or mobility routines this
close to the race — only known, well-tolerated work at reduced volume. Because the
race is the fixed 8 × ~1 km runs and 8 stations through the roxzone
([race-structure](../../references/race-structure.md)), the taper keeps running
*frequency* high while cutting session length, gives the sled one last light touch,
and rehearses the controllable logistics so they don't become fatigue.

## Workflow

1. **Set the taper length to the athlete.** Newer/lower-volume athletes carry less
   fatigue and need a shorter, gentler taper (~7 days); high-volume/experienced
   athletes generally benefit from a longer, more pronounced one (toward 10–14 days).
   When in doubt, err slightly toward fresh.
2. **Place the last hard session.** Put the final genuinely hard/long session toward
   the *start* of the taper window so the athlete fully recovers from it — not in the
   last few days.
3. **Cut volume, keep intensity.** Reduce total volume substantially (commonly
   ~40–60% by race week) while keeping short, sharp race-effort touches so the athlete
   stays sharp rather than flat. Keep running frequency roughly normal; the reduction
   comes from length and load, not from disappearing.
4. **Place the last sled exposure.** Give the sled one final *light, sharp* touch
   early in the taper for feel, then leave it alone — heavy sled or lunge work in the
   last days leaves the legs flat.
5. **Confirm no full simulation in race week.** Any full sim belongs well before the
   taper; race-week rehearsal is short and sharp, never a full race.
6. **Support the taper.** Maintain (don't add to) mobility/activation; prioritize
   sleep across the whole week; keep normal hydration and fueling habits; plan travel,
   time-zone shifts, and logistics with a buffer.
7. **Enforce "no new methods."** Flag and refuse any new shoe, exercise, fueling
   product, or routine the athlete proposes for race week, and give the
   already-tolerated alternative.
8. **Hand off the edges.** The day-of warm-up timeline, in-race pacing, and detailed
   fueling are owned by adjacent skills — coordinate, don't duplicate.

## Required Inputs

- **Days until the race** (to size and place the taper, 7–14 day window).
- **Athlete experience / training volume** (sets taper length and depth).

## Optional Inputs

- **The recent training block** (last hard session date, last sled exposure, current
  weekly volume) to place cuts precisely.
- **Travel plans** (distance, time zones, arrival day) and **sleep patterns**.
- **The race-day logistics known so far** (start time, venue, kit, shoes already
  broken in).
- **How this athlete responds to tapers historically** (goes flat vs. needs more rest).
- **Any niggle or fatigue** carried into the week.

## Non-Goals

- **Not the day-of warm-up timeline.** The minute-by-minute activation sequence on
  race morning is `hyrox-race-day-warmup-builder` (this skill rehearses *that* warm-up
  during the taper but does not build its timeline).
- **Not in-race pacing.** How to pace the 8 runs and stations on the day is
  `hyrox-race-pacing-planner`.
- **Not a detailed fueling plan.** Race-week nutrition basics are covered here, but
  the carb-loading/race-fuel detail is `hyrox-fueling-and-hydration-planner` —
  coordinate, do not duplicate.
- **Not a new training block.** Race week is not the time to build fitness.

## Default Output

1. **Taper summary** — chosen length and depth, with the rationale tied to the
   athlete's level/volume.
2. **Day-by-day plan** — each of the final 7–14 days: session (or rest), with volume
   cut as %down and intensity touches kept at race effort.
3. **Key placements** — last hard session, last sled exposure, last (pre-taper) full
   sim, explicitly dated/placed.
4. **Support checklist** — mobility (maintain only), sleep priority, hydration/fueling
   basics, travel/logistics buffer, equipment (shoes broken in).
5. **"No new methods" guardrail** — an explicit list of what NOT to introduce this
   week, with the tolerated alternative for anything the athlete proposed.
6. **Activation note** — a pointer to rehearse the day-of warm-up during the taper
   (timeline owned by the warm-up skill).
7. **Handoffs** — warm-up timeline, in-race pacing, detailed fueling.
8. **Risks & referral** — fatigue/niggle watch and the safety boundary.

## Safety and Scope

Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately. A routine taper needs a one-line scope note. If the athlete carries a
niggle into race week, keep it conservative and say what would warrant not racing. If a
red flag appears (chest pain, syncope, suspected fracture, illness with systemic
symptoms, heat-illness signs, disordered-eating or extreme weight-cut indicators,
pregnancy/postpartum uncertainty), stop the performance answer, name the boundary, and
refer out — and route the race/no-race call to `hyrox-race-readiness-decision-tool`
(coaching judgment, not medical clearance). Race week is explicitly **not** the time
for a new diet, supplement, or weight cut; disordered-eating signals route to the
safety reference. Never promise a finish or that the taper prevents injury.

## Handling Incomplete Information

Always return a clearly-labeled **provisional** taper from what exists. If only the
days-to-race are known, assume a default depth for an unstated experience level, state
the assumption, and adjust once told. Ask only for the fields that materially change
the taper — **days to race** and **experience/volume** almost always do; exact recent
mileage rarely changes the shape. Never fabricate the athlete's recent block or invent
a last-hard-session date; place cuts on stated dates or label them assumed. If the
athlete proposes something that violates "no new methods," surface it plainly rather
than quietly working it in.

## Related Skills and Routing

- **The minute-by-minute day-of warm-up** → `hyrox-race-day-warmup-builder`.
- **How to pace each run and station on the day** → `hyrox-race-pacing-planner`.
- **Detailed carb-load / race fueling** → `hyrox-fueling-and-hydration-planner`
  (this skill covers basics and hands off the detail).
- **Should I race at all (illness/injury)?** → `hyrox-race-readiness-decision-tool`.
- **The taper window itself was placed by** the original plan
  (`hyrox-training-plan-builder`); **a mid-block disruption before the taper** →
  `hyrox-adaptive-training-plan-manager`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
