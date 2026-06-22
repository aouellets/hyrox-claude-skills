---
name: Pack Router
description: Use when a HYROX athlete or coach sends a broad, vague, or multi-part request ("I have a race in 12 weeks, where do I start", "fix everything", "assess me and build a plan and tell me my splits") and the right owner is not one obvious skill; it identifies the intent(s), routes each to the narrowest applicable HYROX skill, and sequences them. It does not itself produce the plan, assessment, prediction, or analysis — it delegates — and it routes any medical or red-flag question to readiness/safety rather than coaching.
category: orchestration
risk_level: low
requires_current_rules: false
---

# Pack Router

Take any broad or multi-part HYROX request and resolve it into a **routing
decision**: which intents it contains, which skill owns each, in what order, and
what each downstream skill will need. HYROX is a fixed sequence of 8 × ~1 km runs
interleaved with 8 functional stations through the roxzone (see
[race-structure](../../references/race-structure.md)); requests routinely span
several domains at once (assess + predict + plan + pace), and the value of this
skill is choosing the **narrowest** owner for each piece and sequencing them so
each step has the inputs the next one needs. Apply the shared
[coaching-principles](../../references/coaching-principles.md): route to
assessment before planning, and never answer a medical question as coaching.

This skill routes and sequences. It does **not** produce the plan, the
prediction, the assessment, or the analysis itself — those belong to the skills
it names.

## Workflow

1. **Parse intents.** Decompose the request into discrete intents. A single
   message often holds several ("review my race **and** rebuild my block **and**
   tell me if I should even race next week").
2. **Screen for safety first.** If any intent is medical, pain-led, or a
   red-flag symptom (see [safety-and-referral](../../references/safety-and-referral.md)),
   pull it out before routing anything else: it goes to
   `hyrox-race-readiness-decision-tool` and/or a referral, never to a coaching
   skill dressed up as an answer.
3. **Map each intent to its narrowest owner** using the routing map below. Prefer
   the most specific skill (e.g. wall-ball end-game → wall-ball planner, not the
   generic plan builder).
4. **Resolve canonical overlaps** (running plan vs compromised running; prediction
   vs pacing; technique vs conditioning; readiness vs medical clearance) using
   the rules in "Resolving overlaps" below.
5. **Sequence the skills.** Order them so each produces what the next consumes
   (assessment → prediction → plan → simulation → pacing → taper → post-race).
6. **State what each step needs.** For every routed skill, name the inputs it
   will ask for so the athlete can gather them once.
7. **Hand off.** Output the routing decision; do not start doing the downstream
   work yourself.

## Required Inputs

- The athlete's request, in enough detail to identify at least one intent. If the
  request is a single unambiguous intent, say so and route directly to that one
  skill rather than ceremonially "orchestrating".

## Optional Inputs

- Division/category, goal, weeks to race, and what data the athlete already has
  (splits, station times, test results) — these let the router tell each
  downstream skill exactly what to expect and tighten the sequence.
- Any stated constraints (time, equipment, partner, recent illness) that change
  which skills are relevant.

## Non-Goals

- **Not the plan, prediction, assessment, or analysis.** It never writes phases,
  splits, limiter rankings, or race reviews — it routes to the skill that does.
- **Not a coaching answer to a medical question.** Pain, illness, and red-flag
  symptoms route to readiness/safety, never to a training skill.
- **Not a rules authority.** Division/load/rep questions route to
  `hyrox-division-and-rules-advisor`; the router does not assert weights or rules.

## Default Output

A compact routing decision:

1. **Identified intent(s)** — the discrete asks found in the request.
2. **Routing table** — for each intent: `intent → chosen skill id → why this one
   (over the adjacent skill) → what it will need`.
3. **Sequence** — the ordered list of skill ids to run, with the reason for the
   order (what each step feeds the next).
4. **Safety / scope flags** — any intent pulled out to readiness/safety, and any
   intent that is out of pack scope.
5. **Start here** — the single first skill to invoke now, and the one input to
   gather first.

### The routing map (domain → skill id)

| Domain / signal in the request | Route to |
|---|---|
| Assess me / where am I losing time / limiters | `hyrox-athlete-assessment` |
| Design tests to gather missing data / benchmarks | `hyrox-benchmark-and-testing-builder` |
| Goal-time prediction / what splits to break X | `hyrox-goal-time-and-race-predictor` |
| Progress over time / am I improving | `hyrox-athlete-progress-report` |
| Build me a plan / N weeks to race | `hyrox-training-plan-builder` |
| My block needs updating / I missed sessions / re-block | `hyrox-adaptive-training-plan-manager` |
| Standalone running fitness / faster fresh running | `hyrox-running-development-plan` |
| Falling apart after stations / run off heavy legs | `hyrox-compromised-running-coach` |
| Build station capacity / station conditioning | `hyrox-station-progression-builder` |
| Station technique / faults / movement quality | `hyrox-technique-and-fault-analyzer` |
| Sled push/pull development | `hyrox-sled-performance-specialist` |
| SkiErg / Row strategy & pacing | `hyrox-erg-strategy-coach` |
| Wall-ball completion / end-game | `hyrox-wall-ball-completion-planner` |
| No equipment / substitute a station in training | `hyrox-equipment-substitution-engine` |
| Single race-specific workout / WOD | `hyrox-race-specific-workout-generator` |
| Full or partial race simulation design | `hyrox-simulation-builder` |
| In-race pacing / even-effort execution plan | `hyrox-race-pacing-planner` |
| Roxzone / transition time | `hyrox-roxzone-and-transition-strategist` |
| Race-day warm-up | `hyrox-race-day-warmup-builder` |
| Fueling & hydration | `hyrox-fueling-and-hydration-planner` |
| Taper / race week | `hyrox-race-week-and-taper-planner` |
| Division / loads / rep counts / rules | `hyrox-division-and-rules-advisor` |
| Doubles / mixed-doubles strategy | `hyrox-doubles-strategy-builder` |
| Relay strategy & handoffs | `hyrox-relay-strategy-builder` |
| Review my finished race | `hyrox-post-race-performance-analyzer` |
| Should I race? illness / pain / fatigue / readiness | `hyrox-race-readiness-decision-tool` |

## Safety and Scope

This is a routing tool, but it carries first-line safety responsibility: it must
recognize a medical or red-flag request and route it correctly rather than
forwarding it to a coaching skill. Apply
[safety-and-referral](../../references/safety-and-referral.md): chest pain,
syncope, severe shortness of breath, neurological symptoms, suspected fracture,
major trauma, joint instability, rhabdomyolysis or heat-illness warning signs,
disordered-eating indicators, and pregnancy/postpartum concerns are **not**
coaching questions. Route them to `hyrox-race-readiness-decision-tool` and/or a
referral, and say plainly that the router is not giving medical advice. The
router never claims this pack is official, certified, or endorsed.

## Handling Incomplete Information

If the request is too vague to identify any intent ("help me with HYROX"), return
a clearly-labeled **provisional** routing that asks the two or three questions
that most change the routing (goal, weeks to race, what data exists), and offer
the most likely starting point (usually `hyrox-athlete-assessment`). Never invent
the athlete's data or pre-empt the downstream skill's output to look helpful. If
an intent falls outside the pack, say so rather than forcing a poor match.

## Related Skills and Routing

### Resolving overlaps (the canonical tie-breaks)

- **Running plan vs compromised running.** Building general running fitness →
  `hyrox-running-development-plan`. The specific problem of running *off heavy
  legs* immediately after a station → `hyrox-compromised-running-coach`.
- **Prediction vs pacing.** "What finish time / what splits to *target*" →
  `hyrox-goal-time-and-race-predictor`. "How to *execute* the runs and stations
  as even effort on the day" → `hyrox-race-pacing-planner`. Predict first, then
  pace.
- **Technique vs conditioning.** A movement *fault* (how the rep looks, where
  time leaks technically) → `hyrox-technique-and-fault-analyzer`. A *capacity*
  gap (not strong/fit enough on the station) → `hyrox-station-progression-builder`.
- **Readiness vs medical clearance.** "Given my training/fatigue/importance,
  should I race?" is coaching judgment → `hyrox-race-readiness-decision-tool`.
  A health decision (is this pain safe?) is **medical clearance** — that skill
  refers out; the router does not answer it as coaching.
- **Assessment vs plan.** Always assess/limiter-rank before building a plan;
  route `hyrox-athlete-assessment` ahead of `hyrox-training-plan-builder`.

For a single clear intent, skip the router and go straight to that skill.
