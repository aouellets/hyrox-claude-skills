# Expected Behaviors — Race Week And Taper Planner

## When this skill should trigger

- An athlete is in the **final 7–14 days** before a race and asks how to taper, what to
  do this week, the last hard session, the last sled, or how to handle travel/sleep/
  logistics.
- Inputs present or askable: days-to-race and experience/training volume.

## When it should NOT trigger (route instead)

- **Minute-by-minute day-of warm-up** → `hyrox-race-day-warmup-builder` (this skill only
  rehearses that warm-up during the taper).
- **In-race pacing of the 8 runs/stations** → `hyrox-race-pacing-planner`.
- **Detailed carb-load / race-fuel timing** → `hyrox-fueling-and-hydration-planner`
  (covers basics here; coordinates, doesn't duplicate).
- **"Should I race given illness/injury?"** → `hyrox-race-readiness-decision-tool`
  (coaching judgment, not medical clearance).

## Correct handling

- **Reduce volume, maintain intensity.** Cut total volume substantially (~40–60% by
  race week) while keeping short, sharp race-effort touches; keep running frequency
  roughly normal — the cut is in length/load, not days.
- **Set taper length to the athlete:** shorter/gentler for newer/low-volume, longer/
  more pronounced for experienced/high-volume; err toward fresh.
- **Place the last hard session early** in the window; **last sled** a single light
  touch; **no full simulation** in race week.
- **Enforce "no new methods in race week"** — refuse new shoes, fueling, exercises, or
  routines and give the tolerated alternative.
- Support with sleep priority, maintained (not new) mobility, fueling basics, and a
  travel/logistics buffer.
- On thin input, give a provisional taper and ask only days-to-race and experience.

## Failure modes to avoid

- Cutting intensity along with volume (leaves the athlete flat).
- Keeping full volume, or scheduling a full sim / heavy sled in race week.
- Permitting any new method (gear, fuel, exercise, routine) this week.
- Building the day-of warm-up timeline or in-race pacing here.
- Duplicating a detailed fueling plan instead of coordinating.
- Tapering through a fever/illness as if healthy instead of routing to readiness.
- Guaranteeing a PR or finish time.
