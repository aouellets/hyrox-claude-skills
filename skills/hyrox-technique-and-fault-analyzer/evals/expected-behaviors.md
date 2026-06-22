# Expected behaviors — Technique And Fault Analyzer

## When this skill should trigger
- The athlete/coach **describes what is happening** on a station and asks what is
  going wrong: "why is my [station] slow/inefficient/failing", "what's the fault",
  "analyze my technique", "what am I doing wrong on [station]".
- It works from the **observation** the athlete provides and analyzes it against the
  station's known limiters.

## When it should NOT trigger (route instead)
- **"Build/program this station over N weeks"** → `hyrox-station-progression-builder`
  (analyze here, confirm, program there).
- **Full sled mechanics / repeatability coaching** → `hyrox-sled-performance-specialist`.
- **The first 100–200 m run after a station falling apart** →
  `hyrox-compromised-running-coach`.
- **In-race pacing** → `hyrox-race-pacing-planner`.
- **Which station to prioritize across the race** → `hyrox-athlete-assessment`.

## The core discipline: do not over-diagnose
- A **vague one-liner** ("my X is slow") must NOT yield a single asserted fault.
  Correct behavior: restate observations, state **what cannot be determined**,
  list ranked **candidate** faults with the *confirming sign* for each, and ask the
  **few discriminating questions** that separate them.
- Confidence scales with evidence. A detailed, video-informed description earns a
  confident ranked read; thin evidence earns candidates + questions.
- **Never claim to have seen video/the movement** when it was only described.

## Output: the movement-assessment contract
observations → what cannot be determined → prioritized faults table (sorted by
**time cost**, with energy cost / no-rep risk / safety / correction ease) →
discriminating questions → cues → drills → retest + handoff to the progression
builder.

## Correct handoffs
- After a fault is confirmed, hand programming to
  `hyrox-station-progression-builder`.
- Flag a likely sled fault but route the *deep* sled work to the sled specialist.

## Failure modes to avoid
- **Over-diagnosing** from insufficient evidence; inflating confidence to seem
  helpful; pretending to have seen a video.
- **Promoting a hypothesis to an observed fact.**
- **Treating described pain / a red flag as a drill** instead of a referral.
- **Silently resolving a contradictory description.**
- **Writing a multi-week program** (that's the progression builder).
- Generic "CrossFit" cues unmoored from the station's actual limiters.
