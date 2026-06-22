# Expected behaviors — Sled Performance Specialist

## When this skill should trigger
- The athlete/coach wants **focused coaching for the sled push and/or sled pull**:
  strength base, starting mechanics, body angle/posture, hand position, footwork,
  acceleration vs sustained drive, turns; pulling posture, rope management,
  hand-over-hand rhythm, grip endurance; and repeatability/sled-to-run.
- Signals: "coach my sled push/pull", "my sled stalls / grip fails / rope tangles",
  "the run after my sled is a disaster", "how do I pace the sled".

## When it should NOT trigger (route instead)
- **Non-sled stations** (ski-erg, row, burpees, carries, lunges, wall balls) →
  `hyrox-station-progression-builder`.
- **No sled available / swaps** → `hyrox-equipment-substitution-engine` (return
  here once a real sled exists).
- **Vague "what's wrong with my technique"** from thin evidence →
  `hyrox-technique-and-fault-analyzer` first.
- **The actual race sled load/standards** → `hyrox-division-and-rules-advisor`
  (this skill never asserts a race weight).
- **The run after the sled / first 200 m** → `hyrox-compromised-running-coach`;
  **whole-race pacing / simulations** → `hyrox-race-pacing-planner` /
  `hyrox-simulation-builder`.

## The non-negotiable: gym sled load ≠ race resistance
- **Always** state this and the factors that change effective resistance: turf,
  flooring, sled model, friction/wear, calibration, training distance.
- **Never assert a specific race sled weight from memory** — it is season- and
  division-dependent; route that to the rules advisor.
- Prescribe in **effort and the athlete's own surface**; treat any race-resistance
  comparison as a labeled assumption with a widened band; tell the athlete to
  re-calibrate by feel on a different surface.
- If the **training surface is missing**, ask for it before giving any load.

## Correct handoffs
- Names the target skill and *why*; sequences sled work but defers ownership of
  other stations, swaps, rules, and the run itself.

## Failure modes to avoid
- **Asserting a race sled weight** or **equating gym plates with race resistance**.
- Treating the sled as a max-strength lift instead of a **repeatable** effort; the
  payoff session is sled-to-run, not a heavy single.
- **Giving a load without the training surface.**
- **Programming through a red flag** (worsening localized swelling/warmth,
  rhabdomyolysis signs after heavy sled work, chest pain, syncope) instead of
  referring.
- **Silently programming a contradictory load** the athlete can barely move.
- Inventing a surface or a current number instead of asking / testing.
