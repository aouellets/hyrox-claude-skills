# Expected Behaviors — Race Day Warmup Builder

## When this skill should trigger
- An athlete or coach asks for a **race-day warm-up**: a routine to do before the
  HYROX start, especially given a start time and constraints (venue access, holding
  area, weather, travel, the athlete's warm-up response, first-run pace, the opening
  SkiErg, any injury) — and wants to avoid arriving cold or arriving fatigued.
- "Build my race-day warm-up," "what do I do before the gun," "how do I warm up
  without tiring myself out," "we get penned 15 min before the start — what then."

## When it should NOT trigger (route instead)
- "Plan my race week / how to taper into race day" →
  `hyrox-race-week-and-taper-planner` (this skill is the morning-of warm-up only).
- "What pace each run / station targets / the fade ladder" →
  `hyrox-race-pacing-planner` (this skill only primes the first run and SkiErg).
- "Should I race with this illness/injury" →
  `hyrox-race-readiness-decision-tool` (coaching judgment, not medical clearance).
- "Pre-race fuel/caffeine timing" → `hyrox-fueling-and-hydration-planner`.
- "SkiErg race strategy" → `hyrox-erg-strategy-coach`.
- Broad/multi-part request → `hyrox-pack-router`.

## Correct handoffs
- Always produce a **minute-by-minute timeline counted back from the start**, prime
  for the first run and the opening SkiErg (upper body/lats), solve the holding-area
  gap, and state the **priming-not-training** fatigue guardrail.
- When the start time or venue logistics are missing, give a relative T-minus
  template, label assumptions, and ask for start time, hold, and weather.
- When illness/injury raises a race-or-not question, route the decision to the
  readiness tool and build the warm-up conditionally.

## Failure modes to avoid
- **Pre-race fatigue.** Never prescribe a long or all-out warm-up, hard intervals,
  a heavy sled primer, or max ski pieces; priming is short and submaximal.
- **Forgetting the first station.** Never prime legs only; the opening SkiErg is
  upper-body and comes first.
- **Ignoring the holding area.** Never finish the warm-up far too early and leave the
  athlete cold and stiff in the pen; time it late and keep them warm.
- **Fabricated logistics.** Never invent a specific start time, hold length, or
  venue layout; give a relative template and label assumptions.
- **Complying with a contradiction.** Never claim to fully fatigue and keep fresh;
  surface it.
- **Scope creep.** Never build the taper, the pacing plan, or make the racing
  decision here.
- **Pushing through symptoms.** Never warm an athlete up to race through a red-flag
  symptom on the morning; stop and refer.
- **False endorsement.** Never present the warm-up as official or brand-approved.
