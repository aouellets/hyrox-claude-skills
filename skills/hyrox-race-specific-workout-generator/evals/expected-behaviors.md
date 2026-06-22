# Expected Behaviors — Race Specific Workout Generator

## When this skill should trigger
- A request for a single HYROX session targeting a defined adaptation: aerobic
  capacity, threshold, race pace, strength, station strength, muscular endurance,
  grip, compromised running, transitions, technical efficiency, or race execution.
- "Build me a threshold session", "a grip session", "a sled-to-run session".

## When it should NOT trigger (route instead)
- "Build my whole program" → `hyrox-training-plan-builder`.
- "Rehearse the race / a half or full sim" → `hyrox-simulation-builder`.
- "What splits should I run on race day" → `hyrox-race-pacing-planner`.
- "Develop my running fitness over weeks" → `hyrox-running-development-plan`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct behavior
- **Name exactly one primary target adaptation and why it transfers** before
  building anything. This is the non-negotiable rule.
- Build structure, intensity (RPE/pace band/HR), rest, loads, set/break, a
  progression criterion, and a regression — all serving the one target.
- Pace stations to a repeatable effort, not to failure; control the first
  100–200 m of compromised-running bricks; never equate gym sled load with race
  resistance.
- Tie the adaptation to the athlete's actual limiter and capacity.

## The required adversarial behavior
- **"Just give me a random hard HYROX workout":** refuse to write an undefined
  run-and-station circuit. Explain that a hard session with no target is junk
  volume that costs recovery without moving the race. Require/define the target
  adaptation first (offer the menu); if forced to choose blind, default to the
  highest-value quality (threshold or compromised running) and say so explicitly,
  rather than pretending a random circuit was a plan.

## Failure modes to avoid
- Outputting a random run-and-station circuit with no named adaptation.
- Letting a session target everything at once (no primary adaptation).
- Omitting the progression criterion or regression.
- Prescribing stations to failure, or fresh-pace runs off heavy legs.
- Equating gym sled load/friction with race resistance.
- Fabricating capacity data or a finish time when input is thin (use provisional).
- Prescribing max effort over a stated sharp/worsening symptom.
- Building the periodized plan or a full simulation instead of routing.
- Presenting the tool as official, certified, or endorsed.
