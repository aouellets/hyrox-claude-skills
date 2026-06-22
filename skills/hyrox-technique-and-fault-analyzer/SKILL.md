---
name: Technique And Fault Analyzer
description: Use when a HYROX athlete or coach describes what is happening on a station (ski-erg, sled push, sled pull, burpee broad jumps, row, farmers carry, sandbag lunges, wall balls) and asks what is going wrong — analyzing the observation to rank likely faults by time cost, energy cost, no-rep risk, safety, and correction ease, separating observed facts from hypotheses, and stating what cannot be determined from the description. Returns a movement-assessment with a prioritized faults table. Not conditioning or programming (route to hyrox-station-progression-builder), and it will not diagnose a definite fault from insufficient evidence rather than over-diagnosing — it asks the few discriminating questions instead.
category: stations
risk_level: low
requires_current_rules: false
---

# Technique And Fault Analyzer

Turn an athlete's **description or observation** of a HYROX station into a
disciplined fault analysis: what is most likely going wrong, ranked by how much it
actually costs, with a hard line between **what was observed** and **what is a
hypothesis**. This skill reads the athlete's words against the station's known
limiters ([station-taxonomy](../../references/station-taxonomy.md),
[sled-training](../../references/sled-training.md),
[compromised-running](../../references/compromised-running.md)) and produces a
**movement-assessment** output: observations / what cannot be determined /
prioritized faults table (by time cost) / cues / drills / retest.

The discipline that makes this skill trustworthy is **not over-diagnosing**. A
one-line description ("my wall balls are slow") rarely contains enough to name a
single definite cause. When the evidence is thin, the skill says what *cannot* be
determined from it, gives a ranked list of *candidate* faults with the
observable sign that would confirm each, and asks the **few discriminating
questions** that separate them — rather than asserting a confident diagnosis it
cannot support. It never claims to have seen video it was not given. Once a fault
is confirmed, building the correction over weeks is a different job
([hyrox-station-progression-builder]).

## Workflow

1. **Separate fact from inference.** Restate only what the athlete actually
   reported as **observations**. Everything you infer goes in a clearly separate
   bucket. Do not promote a hypothesis to a fact.
2. **State what cannot be determined.** Name what the description simply does not
   reveal (e.g. depth, posture under fatigue, bar path, whether it's pacing vs
   mechanics) and that you have not seen the movement.
3. **Map to the station's limiters.** Pull the station's known limiters from the
   taxonomy and generate **candidate faults** consistent with the observation —
   each with the *observable sign* that would confirm or rule it out.
4. **Rank the candidates.** Order them in a faults table by **time cost** (primary
   sort), and also note **energy cost**, **no-rep / standards risk**, **safety**,
   and **correction ease**. The highest-time-cost, easiest-to-correct fault is
   usually the first thing to fix.
5. **Decide: diagnose or discriminate.** If the evidence supports a confident read,
   give it with the confidence stated. If it does not, refuse to over-diagnose:
   present the ranked candidates and the **few discriminating questions** (or a
   self-check the athlete can run) that would resolve them.
6. **Give cues and drills for the top candidates.** Provide a coachable cue and a
   simple drill per top-ranked fault — framed as "if this is the issue, this fixes
   it", not as confirmed.
7. **Set a retest.** Define how the athlete confirms the fix (a measurable
   re-observation), and hand off to the progression builder to *program* it.

## Required Inputs

- **Which station** — one of the eight. The limiter set is station-specific.
- **The observation/description** — what the athlete actually sees or feels
  happening (what breaks down, when, what it looks/feels like). This is the
  evidence; the skill analyzes it rather than inventing one.

## Optional Inputs

- **Discriminating detail** that resolves candidates: when it happens (fresh vs
  fatigued, which lap), what specifically feels wrong (legs vs grip vs breathing),
  whether reps are being no-repped, video timestamps or photos if the athlete has
  them.
- The athlete's relevant numbers (station time, pace, load) for context.
- Recent race/training notes describing the same station.
- Equipment/surface details (especially for sleds — surface changes the feel).
- Injury/niggle history (raises the safety weighting of certain faults).

## Non-Goals

- **Not conditioning or programming.** It does not build the station over weeks,
  prescribe sets/loads, or write a block → route to
  `hyrox-station-progression-builder` once a fault is confirmed.
- **Not a diagnosis from insufficient evidence.** It will **not** name a single
  definite fault from a vague one-liner; it states what cannot be determined and
  asks discriminating questions. It never pretends to have seen video it lacks.
- **Not sled deep coaching.** It can flag a likely sled fault from a description,
  but the full sled mechanics/repeatability coaching is
  `hyrox-sled-performance-specialist`.
- **Not in-race pacing or compromised-running training** →
  `hyrox-race-pacing-planner` / `hyrox-compromised-running-coach`.
- **Not medical or rehab.** Pain or red flags route to the safety framework; it
  never diagnoses an injury.

## Default Output

The **movement-assessment** contract:

1. **Observations** — only what the athlete reported, restated plainly; an
   explicit note that the movement was not directly seen (no video).
2. **What cannot be determined** — the specific things the description does not
   reveal, so the athlete knows the limits of this read.
3. **Prioritized faults table (by time cost)** —

   | Candidate fault | Confirming sign | Time cost | Energy cost | No-rep/standards risk | Safety | Correction ease |
   |-----------------|-----------------|-----------|-------------|-----------------------|--------|-----------------|

   Sorted by time cost; the entry the athlete should address first is called out.
4. **Discriminating questions / self-checks** — the few questions or quick tests
   that would confirm which candidate is real (always present when evidence is
   thin; this is how the skill avoids over-diagnosing).
5. **Cues** — a coachable cue per top candidate, framed conditionally.
6. **Drills** — a simple drill per top candidate to correct it.
7. **Retest** — how to confirm the fix, and the handoff to
   `hyrox-station-progression-builder` to program it.

## Safety and Scope

This is an analysis tool that reads a description; it does not diagnose injuries or
medical conditions. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
pure technique description needs only a one-line scope note. But if the
"observation" is **pain** — sharp, localized, worsening — or a red flag (a joint
"giving way", suspected fracture, severe disproportionate soreness with swelling
or dark urine after eccentric work, chest pain, syncope), the skill stops the
fault analysis, says this is outside coaching scope, and recommends evaluation by a
medical professional. A movement "fault" and an injury are different things; when
the description is of pain, it is treated as the latter.

## Handling Incomplete Information

This skill is *defined* by how it handles thin evidence: it **never manufactures a
confident diagnosis from too little**. When the description is vague, it returns a
clearly-labeled provisional analysis — observations, what cannot be determined, a
ranked candidate list with confirming signs, and the discriminating questions —
and explicitly declines to pick one fault as definite. It asks only for the detail
that actually separates the candidates (e.g. "does it happen fresh or only late?",
"is it grip or legs that fails?"), not a full intake. It never claims to have seen
the movement, never invents athlete numbers, and never inflates confidence to seem
helpful. If the description is internally contradictory, it surfaces that.

## Related Skills and Routing

- **Program the confirmed fix over weeks** → `hyrox-station-progression-builder`.
  Overlap rule: *what is going wrong and why* is this skill; *how do I build the
  station over N weeks* is the progression builder. The natural flow is analyze
  here → confirm → program there.
- **Full sled mechanics / repeatability coaching** →
  `hyrox-sled-performance-specialist` (this skill only flags a likely sled fault).
- **Running off the station / first-200 m problems** →
  `hyrox-compromised-running-coach`.
- **In-race pacing decisions** → `hyrox-race-pacing-planner`.
- **Rank limiters across the whole race** → `hyrox-athlete-assessment`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
