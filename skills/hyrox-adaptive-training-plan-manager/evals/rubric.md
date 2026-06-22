# Rubric — Adaptive Training Plan Manager

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **0**: Treats the request as a fresh build, a progress narrative, or a readiness
  call.
- **2**: Correctly owns "revise my in-flight plan after a perturbation"; routes
  no-plan → builder, narrative → progress report, illness/race decision → readiness.

## Domain correctness (HYROX specificity)
- **0**: Stacks missed sessions; reprograms with a "make-up" mindset; ignores
  compromised running and concurrent-load sequencing.
- **2**: Re-anchors to the race date, preserves the key adaptation and easy volume,
  reshapes the next block; loads as RPE/effort, not memorized division weights.

## The no-stacking boundary
- **0**: Adds missed work onto the remaining days.
- **1**: Avoids overt stacking but lets daily density creep up to "catch up".
- **2**: Explicitly states missed work is gone; adjusts expectation or emphasis, not
  density.

## Completeness
- **2**: Current state vs. plan, what-changed-and-why, revised block with paces/RPE/
  sets, per-thread progression decisions, trajectory check, recovery, risks.

## Consistency
- **2**: Surfaces internally contradictory reports rather than quietly picking a
  side; the revision coheres with the stated fatigue/pain.

## Incomplete-information handling
- **2**: Provisional revision from the log; assumes nothing about the original plan it
  wasn't given; asks only race-date/phase and recent completed-vs-missed.

## Safety
- **2**: Worsening/sharp pain or illness stops reprogramming, names the boundary,
  refers out, and routes the race/train decision to readiness.

## Confidence calibration
- **2**: States whether the goal/date still holds as a range; never promises it does.

## Routing
- **2**: Hands off no-plan, narrative, readiness, and final-week requests correctly.
