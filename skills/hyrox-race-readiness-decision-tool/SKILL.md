---
name: Race Readiness Decision Tool
description: Use when a HYROX athlete asks whether they should race given recent training, simulations, pain, fatigue, illness, sleep, travel, adherence, form, and how much the race matters, and wants a clear go/no-go style verdict; it returns exactly one of six verdicts (race as planned, race with revised expectations, reduce final training, modify participation, seek medical guidance, or withhold pending missing information). This is coaching judgment, not medical clearance, and it is not the taper plan itself (route to hyrox-race-week-and-taper-planner); red-flag symptoms route to medical guidance, never to "race as planned".
category: readiness
risk_level: moderate
requires_current_rules: false
---

# Race Readiness Decision Tool

Help an athlete decide **whether and how** to race, given where they actually
are in the final stretch. HYROX is a ~60–90+ minute continuous effort of
8 × ~1 km runs and 8 stations on compromised legs (see
[race-structure](../../references/race-structure.md)); racing it under-recovered,
sick, or injured carries real cost, so the decision is made deliberately, not by
default. This tool returns a single, clearly-stated **verdict** plus the
reasoning, the assumptions, and what would change it. It is **coaching judgment,
not medical clearance** — when health is in question it says so and points to a
clinician. Apply the shared
[coaching-principles](../../references/coaching-principles.md) and, prominently,
[safety-and-referral](../../references/safety-and-referral.md).

## The six verdicts (return EXACTLY ONE)

- **(a) Race as planned** — readiness signals are sound; proceed with the
  existing plan. *Never selectable when a red-flag symptom is present.*
- **(b) Race with revised expectations** — safe to race, but recent disruption
  (light illness recovered, poor block, travel) means the goal/pacing should be
  re-anchored down. Pair with a routing note to re-plan pacing.
- **(c) Reduce final training** — racing is fine; the risk is over-cooking the
  taper. Cut volume/intensity in the remaining days.
- **(d) Modify participation** — race in a reduced form: a less demanding
  division/category, a doubles/relay share instead of singles, treat it as a
  training effort, or a clear DNF-criteria plan. For sub-threshold concerns that
  don't reach a medical referral but make full racing unwise.
- **(e) Seek medical guidance** — a red-flag symptom, an unresolved injury, an
  acute illness, or any health question that is not a coaching call. Outside
  coaching scope; refer to an appropriate professional. **This is mandatory when
  any red flag is present.**
- **(f) Withhold a conclusion** — the inputs are too thin or contradictory to
  decide responsibly; name what's missing and what each answer would change.

## Workflow

1. **Screen for red flags first.** Check the request against
   [safety-and-referral](../../references/safety-and-referral.md). If any red-flag
   symptom is present (chest pain/pressure, syncope, severe shortness of breath,
   neurological signs, suspected fracture, major trauma, joint instability,
   rapidly increasing swelling, severe/unexplained or worsening pain,
   rhabdomyolysis or heat-illness warning signs, disordered-eating indicators,
   pregnancy/postpartum complications), the verdict is **(e)** — regardless of how
   much the athlete wants to race. Stop here for that case.
2. **Gather the readiness signals** — recent training load and adherence, last
   simulation/benchmark, current pain or niggles, fatigue/freshness, illness,
   sleep, travel, life stress, current form vs goal, and how important this race
   is to the athlete.
3. **Weigh health vs performance.** Health concerns dominate; performance
   concerns (a poor block, missed sessions) shape the *expectations*, not whether
   it's safe.
4. **Select exactly one verdict** from the six, using the decision logic below.
5. **State reasoning, assumptions, and confidence**, and what single change would
   move the verdict (e.g. "if the niggle is pain-free by Thursday → (a)").
6. **Route the downstream work.** This tool decides; the taper plan, revised
   pacing, or doubles share lives in the relevant skill.

### Decision logic (summary)

- Any **red flag** → **(e)**, always. Never **(a)**.
- Health unclear but not a red flag (e.g. tail of a head cold, a niggle that's
  sore but not sharp/worsening) → **(d)** or **(e)** depending on severity; never
  minimize it into **(a)**.
- Health fine, **performance** disrupted (poor block, travel, missed sessions) →
  **(b)** revised expectations and/or **(c)** reduce final training.
- Health fine, well-prepared → **(a)**.
- Inputs too thin/contradictory to judge → **(f)**.

## Required Inputs

- The **race timeline** (how many days out) and the athlete's **question**
  (should I race / how should I race).
- At least a minimal health-and-readiness picture: any pain/illness/symptoms,
  current fatigue, and recent training status. With none of this, the verdict is
  **(f)** and the tool asks for the few signals that decide it.

## Optional Inputs

- Last simulation/benchmark result, weekly adherence over the final block, sleep
  and travel, division/goal, race importance (A-race vs tune-up), and whether the
  athlete trains with HR.

## Non-Goals

- **Not medical clearance.** It offers coaching judgment only. It does not
  diagnose, decide if pain/illness is safe, or clear an athlete to compete — that
  is a clinician's call.
- **Not the taper plan.** Designing the race-week and taper itself →
  `hyrox-race-week-and-taper-planner`.
- **Not a pacing plan.** Re-anchoring splits after a "(b)" verdict →
  `hyrox-goal-time-and-race-predictor` then `hyrox-race-pacing-planner`.
- **Not a diagnosis** of any injury or illness.

## Default Output

1. **Verdict** — exactly one of (a)–(f), stated up front and unambiguously.
2. **Why** — the readiness signals that drove it, health weighed above
   performance.
3. **Coaching-judgment, not medical-clearance** disclaimer — present on every
   output; emphasized when health is in question.
4. **Assumptions & confidence** — what was assumed, and how confident the verdict
   is given the data.
5. **What would change it** — the single signal whose change flips the verdict.
6. **Next step / routing** — the skill that owns the follow-on work (taper,
   revised pacing, doubles share), or, for **(e)**, the referral.

## Safety and Scope

This is a **moderate-risk** skill: it sits directly on the health/performance
boundary, so safety is applied prominently, not lightly. Apply
[safety-and-referral](../../references/safety-and-referral.md) in full. A
red-flag symptom forces verdict **(e)** and a referral to an appropriate medical
professional, and the tool will **not** be argued into **(a)** — not by the
athlete insisting, not by a third party telling them to "push through". Coaching
judgment is explicitly distinguished from medical clearance on every output. The
tool never diagnoses, never promises a safe outcome, and never guarantees a
finish. It does not present itself as official or endorsed.

## Handling Incomplete Information

When the readiness picture is too thin or internally contradictory to decide,
return verdict **(f)** — a clearly-labeled withhold — naming exactly which
signals are missing and what each plausible answer would change the verdict to.
Never fabricate a readiness signal, never assume the athlete is fine to hit
**(a)** by default, and never minimize a stated symptom to reach a more
convenient verdict. If a health symptom is present but its severity is unclear,
err toward **(d)** or **(e)** and recommend evaluation rather than guessing it's
benign.

## Related Skills and Routing

- **Design the taper / race week** → `hyrox-race-week-and-taper-planner`.
- **Re-anchor the goal and splits after a "(b)" verdict** →
  `hyrox-goal-time-and-race-predictor`, then `hyrox-race-pacing-planner`.
- **Switch to a partnered format under "(d)"** →
  `hyrox-doubles-strategy-builder` or `hyrox-relay-strategy-builder`.
- **Adjust the training block around a disruption** →
  `hyrox-adaptive-training-plan-manager`.
- **A medical question** is not a coaching question — verdict **(e)** refers to a
  clinician.
- For broad or multi-part requests, start at `hyrox-pack-router`.
