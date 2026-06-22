# Expected Behaviors — Goal Time And Race Predictor

## When this skill should trigger
- An athlete or coach asks for a projected finish, a realistic goal-time range,
  whether a target is feasible, or what each segment would need to be to hit a goal.
- "What time will I get?", "is sub-X realistic?", "what splits do I need for X?",
  "how are you calculating this?"

## When it should NOT trigger (route instead)
- "How do I pace each run/station on the day?" → `hyrox-race-pacing-planner`
  (prediction here, execution there — resolve this overlap explicitly).
- "Build the plan to get me there" → `hyrox-training-plan-builder`.
- "What are my limiters behind the gap?" → `hyrox-athlete-assessment`.
- "I don't have the inputs — how do I get them?" → `hyrox-benchmark-and-testing-builder`.
- "Compare my actual result to the prediction" → `hyrox-post-race-performance-analyzer`.
- Broad/multi-part → `hyrox-pack-router`.

## Correct handoffs and model use
- Describe the deterministic model transparently: runs (with compromised decay) +
  stations + transitions summed; conservative tail widened to 1.5× the optimistic
  tail; goal inversion produces per-segment targets.
- Always set the variance band from data quality and say why.
- Always end with pacing/training handoffs.

## Failure modes to avoid
- **Guarantees.** Never promise a single finish time or a placing.
- **False precision.** Never present a confident number from thin data; widen the
  band and label it.
- **Band-as-probability.** Never present the variance band as a statistical
  probability of finishing in range — it reflects data quality.
- **Fabrication.** Never invent station times or paces the athlete didn't provide.
- **Ignoring contradictions.** Flag compromised-faster-than-fresh or other
  inconsistent inputs instead of projecting through them.
- **Stale standards.** Don't bake old season loads/rep counts in as if current;
  flag and confirm.
- **Scope creep.** Don't write the in-race pacing plan or the training plan here.
- **False endorsement.** Don't present the projection as official or brand-backed.
