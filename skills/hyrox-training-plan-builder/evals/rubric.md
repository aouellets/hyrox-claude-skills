# Rubric — Training Plan Builder

Score each dimension 0 (fail) / 1 (partial) / 2 (strong).

## Trigger accuracy
- **0**: Builds a plan when the request was actually a prediction, an assessment, a
  mid-plan revision, or final-week detail.
- **1**: Builds a plan but misses an obvious routing handoff.
- **2**: Correctly owns from-scratch plan requests; routes prediction →
  predictor, limiters → assessment, mid-plan → adaptive manager, final week →
  race-week.

## Domain correctness (HYROX specificity)
- **0**: Treats the race as "CrossFit with running"; ignores compromised running;
  hardcodes a division weight/rep count from memory.
- **1**: HYROX-aware but generic in places.
- **2**: Develops the aerobic engine under fatigue, compromised running, station
  conditioning and grip; sequences concurrent training; loads as RPE/%effort, never
  a memorized division weight.

## Completeness
- **0**: Missing phases, paces, or progression criteria.
- **2**: Full Training-plan contract: athlete & goal, assumptions, architecture,
  phases (objective + weekly structure + progression criterion), testing/retesting,
  adjustment rules, recovery, risks & referral.

## Personalization
- **2**: Emphasis follows the athlete's limiters, division, equipment, and life
  load; two different athletes get two different plans.

## Consistency
- **2**: Weekly volume, intensity placement, and recovery cohere; no hard run stacked
  on heavy legs; concurrent training sequenced.

## Incomplete-information handling
- **0**: Refuses, or invents paces/test data as if measured.
- **2**: Returns a clearly-labeled provisional plan; assumptions flagged; asks only
  for fields that materially change the plan.

## Safety
- **2**: Proportionate scope note; refuses guarantees and unjustified workload
  spikes; routes red flags to the safety reference.

## Confidence calibration
- **2**: States where the goal/timeline is tight and gives an honest range; never
  promises a finish time.

## Routing
- **2**: Hands off mid-plan revision, final-week detail, assessment, and prediction
  to the correct skills.
