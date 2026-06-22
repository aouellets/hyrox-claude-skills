# Example 02 — Vague request, incomplete data (provisional routing)

**Request:**

> "Help me with HYROX."

That is too vague to identify an intent, so the router returns a **provisional**
routing plus the few questions that most change it — it does not invent the
athlete's goal or data.

## Provisional routing decision

**Identified intent(s)** — undetermined. The request names the event but no task.

**Questions that change the routing (pick the two or three that apply):**

1. Have you raced HYROX before, and do you have splits/station times? (If yes →
   start at `hyrox-post-race-performance-analyzer` or `hyrox-athlete-assessment`.)
2. What is the goal — first finish, or a target time? And how many weeks until
   the race? (Drives `hyrox-training-plan-builder` vs not.)
3. Is there a specific problem (a station, falling apart on the runs, pacing) or
   a health concern? (A health concern routes to
   `hyrox-race-readiness-decision-tool`/safety, not coaching.)

**Most likely starting point (provisional):**

If you have any past-race or test data → `hyrox-athlete-assessment` to rank your
limiters first. If you have a date and want structure but no data yet →
`hyrox-benchmark-and-testing-builder` to gather baselines, then assessment, then
`hyrox-training-plan-builder`.

**Start here**

Answer the goal + weeks-to-race + "do you have any data" questions, and I will
route precisely. I will not guess your paces or build a plan on assumed numbers.
