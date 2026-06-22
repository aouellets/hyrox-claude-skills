# Expected Behaviors — Benchmark And Testing Builder

## When this skill should trigger
- An athlete or coach asks what to test, how to baseline or benchmark, how to set
  up standardized time trials, or how to gather the data an assessment needs.
- "What tests should I run?", "how do I baseline my stations?", "how do I test my
  compromised running?", "when should I retest before my race?"

## When it should NOT trigger (route instead)
- "What's my biggest weakness / rank my limiters" → `hyrox-athlete-assessment`
  (this skill builds tests; that skill interprets the numbers).
- "Build my training plan" → `hyrox-training-plan-builder`.
- "Predict my finish time" → `hyrox-goal-time-and-race-predictor`.
- "Build me a full race simulation" → `hyrox-simulation-builder` (this skill
  includes at most one short simulation segment as a *test*).
- Broad/multi-part → `hyrox-pack-router`.

## Correct handoffs
- Always end by routing results to `hyrox-athlete-assessment` for interpretation.
- Keep the battery minimum-useful and purpose-tied; cut redundant tests.
- Standardize every test (setup, scoring, hold-constant conditions, sled
  surface/load) so retests are comparable.

## Failure modes to avoid
- **Over-testing.** Don't prescribe an exhaustive maximal battery an athlete can't
  recover from; propose the minimum useful subset.
- **Unsafe testing.** Don't stack maximal unaccustomed eccentric/sled volume
  (rhabdo risk); don't prescribe tests that load a red-flag symptom; refer out.
- **Fake equivalence.** Don't substitute a rower for SkiErg or a DB carry for a
  sled as if they were equivalent; flag untestable stations; label proxies.
- **Fabrication.** Don't report a baseline number from an untested protocol.
- **Sled-friction conflation.** Don't treat gym sled friction/load as race
  resistance; always record surface and load.
- **Scope creep.** Don't interpret limiters or write the plan here.
- **False endorsement.** Don't present the battery as official, brand-published,
  or certified; it is independent and unaffiliated.
