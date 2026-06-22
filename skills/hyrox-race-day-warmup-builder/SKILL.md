---
name: Race Day Warmup Builder
description: Use when a HYROX athlete or coach asks for a race-day warm-up — a time-stamped routine counted back from the start time given venue access, holding-area limits, athlete history, weather and travel, first-run pace, the opening SkiErg demands, and any injury considerations — and provides the start time and venue constraints. Returns a minute-by-minute timeline built to prime the athlete without causing pre-race fatigue. Not the race-week taper plan (route to hyrox-race-week-and-taper-planner), not in-race pacing (route to hyrox-race-pacing-planner).
category: race-execution
risk_level: low
requires_current_rules: false
---

# Race Day Warmup Builder

Build a **time-stamped race-day warm-up** counted back from the start time. The
whole point is to arrive at the line primed — raised core temperature, pulse-raised
aerobic system, mobile and switched-on for the *first* demands (a controlled first
run and then the SkiErg, which is upper-body and comes first) — **without** causing
pre-race fatigue. A HYROX race is a 60–90+ minute continuous effort; a warm-up that
empties the tank is worse than a short one (see
[coaching-principles](../../references/coaching-principles.md), §8 and
[race-structure](../../references/race-structure.md)). This skill produces a
minute-by-minute timeline shaped by the real constraints — venue access,
holding-area limits, weather, travel — and the athlete's history. It does **not**
build the race-week taper (`hyrox-race-week-and-taper-planner`) and it does **not**
set in-race pacing (`hyrox-race-pacing-planner`). See routing below.

## Workflow

1. **Anchor on the start time.** Everything is counted *back* from the gun. Confirm
   the start time and the athlete's wave/check-in time.
2. **Map the constraints.** Venue access (can you jog outside? is there a warm-up
   area?), **holding-area limits** (many events corral athletes with no room to
   move for the last stretch before the start — the timeline must account for the
   dead time in the pen), weather (cold needs more/again later; heat needs less),
   and travel/arrival time.
3. **Read the athlete.** Their normal warm-up response (fast or slow to warm up),
   age/training history, and any injury/niggle areas that need extra preparation or
   avoidance.
4. **Prime for the first demands.** Build toward a controlled **first run** at
   start pace and the **SkiErg** (upper body, first station): include pulse-raising
   that touches the upper body and lats, not just legs.
5. **Sequence the phases.** General pulse-raise → mobility/activation → specific
   primers (a few short run strides at first-run effort, a brief easy ski to wake
   the pattern) → a controlled taper into the holding area. Keep total volume and
   intensity *low enough to leave no fatigue*.
6. **Solve the holding-area gap.** Plan what to do during the often-long penned
   wait: stay warm (extra layer in the cold), do small re-activations if space
   allows, and time the final primer so the athlete isn't cold *or* fatigued at the
   gun.
7. **Produce the minute-by-minute timeline.** Give a clock counting back from the
   start (e.g. T-45, T-30, T-15, T-5, gun) with each block's purpose, duration, and
   intensity, plus a cold-weather and a long-hold contingency.
8. **State the fatigue guardrail.** Make explicit that the warm-up is *priming, not
   training*: no maximal efforts, no long intervals, nothing that spends the race.

## Required Inputs

- **Start time** — the gun time (and wave/check-in time if known). The whole
  timeline is counted back from it; without it the skill returns a *relative*
  T-minus template and asks for the clock.
- **Venue / holding constraints** — whether there's space to jog/warm up, and the
  holding-area situation (how long penned, how much room). These shape the
  back-half of the timeline more than anything else; the skill asks for them and
  otherwise flags the assumption.

## Optional Inputs

- Weather/temperature and indoor vs outdoor (cold → warm later and re-warm in the
  pen; heat → shorten and protect against overheating).
- The athlete's warm-up response (fast/slow to warm up) and age/training history.
- First-run target pace (so the strides match it) and any erg familiarity.
- Injury/niggle areas needing extra prep or careful avoidance.
- Travel and arrival time (a long cold drive changes the opening).
- Division/wave logistics if they affect check-in timing.
- Equipment availability in the warm-up area (is there a SkiErg to prime on?).

## Non-Goals

- **Not the race-week taper.** It does not plan the days/sessions of race week or
  the taper volume → `hyrox-race-week-and-taper-planner`. This skill is the
  *morning-of* warm-up only.
- **Not in-race pacing.** It does not set per-run paces, station times, effort
  ceilings, or the fade ladder → `hyrox-race-pacing-planner`. It only primes for
  the *first* run and SkiErg.
- **Not detailed fueling.** Pre-race fuel/caffeine timing is a pointer only →
  `hyrox-fueling-and-hydration-planner`.
- **Not a mobility/rehab program.** It primes around a known niggle conservatively;
  it does not assess or rehab it.
- **Not medical or rehab.** Pain or red-flag symptoms route to the safety framework
  below; it never diagnoses or programs around them.

## Default Output

1. **Athlete & constraints** — start time, venue/holding situation, weather,
   warm-up response, niggles, first-run target, and confidence in the read.
2. **Assumptions** — every inferred constraint (e.g. assumed hold length) labeled,
   with its effect on the timeline.
3. **Minute-by-minute timeline** — a clock counting **back from the start**
   (e.g. T-45 → gun), each block with its purpose, duration, and intensity:
   pulse-raise, mobility/activation, specific primers (strides at first-run effort,
   short easy ski), and the controlled entry into the holding area.
4. **First-demand priming** — the specific run and SkiErg readiness pieces.
5. **Holding-area plan** — what to do in the pen: stay warm, re-activate if space,
   time the final primer.
6. **Contingencies** — a cold-weather variant and a long-hold variant.
7. **Fatigue guardrail** — the explicit "priming, not training" rule: nothing
   maximal, nothing that spends the race.
8. **Pointers** — brief pointers to fueling and to the in-race pacing plan.

## Safety and Scope

This is a coaching tool that builds a priming warm-up. It does not diagnose, treat
injuries, provide rehab, override a clinician, or guarantee a result. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
routine warm-up needs only a one-line scope note. If the athlete names a niggle, the
warm-up prepares around it conservatively (extra easy prep, avoid provocative
end-range loading) and says what would warrant not racing — but the *racing
decision* with a real injury or illness is `hyrox-race-readiness-decision-tool` and,
ultimately, a clinician, not this skill. If the athlete reports a red-flag symptom
on the morning (chest pain, syncope, severe shortness of breath, neurological
symptoms, a fresh suspected fracture, or — given the endurance/heat context —
heat-illness warning signs), the skill stops and leads with a recommendation to seek
medical evaluation rather than warming them up to race.

## Handling Incomplete Information

Warm-up requests often arrive without the exact start time or the holding-area
details. Always return a clearly-labeled **provisional** timeline: if the start
time is missing, give a **relative T-minus template** (T-45 → gun) and ask for the
clock; if the hold length is unknown, build to a sensible assumed hold, label it,
and include the long-hold contingency. Never invent a specific venue's logistics.
Ask only for the fields that materially change the timeline — start time, hold
situation, and weather usually do; exact travel distance usually does not. If inputs
conflict (e.g. a request for a 40-minute hard warm-up before a 90-minute race),
surface the contradiction and the fatigue cost rather than complying.

## Related Skills and Routing

- **Race-week plan and taper** → `hyrox-race-week-and-taper-planner` (the days
  before; this skill is the morning-of warm-up only).
- **In-race pacing** → `hyrox-race-pacing-planner` (this skill only primes for the
  first run and SkiErg; that one runs the whole race).
- **Whether to race at all (illness/injury)** → `hyrox-race-readiness-decision-tool`
  (a coaching judgment, not medical clearance).
- **Pre-race fuel/caffeine timing** → `hyrox-fueling-and-hydration-planner`.
- **SkiErg technique/strategy** → `hyrox-erg-strategy-coach` (this skill only primes
  the pattern, not the race strategy).
- For broad or multi-part requests, start at `hyrox-pack-router`.
