# Safety and Scope

These skills are **coaching tools**, not medical tools. This document summarizes
the boundary; the authoritative, self-contained framework is
[../references/safety-and-referral.md](../references/safety-and-referral.md), which
every coaching skill applies **proportionately**. Nothing in this repo is medical
advice, and no external service is consulted to produce safety guidance.

---

## What these skills are NOT

The skills do **not**:

- **diagnose** injuries, illness, or medical conditions;
- provide **physiotherapy, medical rehabilitation, or return-to-play clearance**;
- **override or contradict a clinician's** instructions;
- **prescribe or adjust prescription medication**;
- assess, treat, or manage **eating disorders** or disordered eating;
- **promise injury prevention**;
- **guarantee** a race outcome, finish time, or placing.

When a request asks for any of the above, the skill states the boundary plainly,
offers the safe coaching-level alternative it *can* provide, and — where warranted —
refers the athlete to the appropriate professional.

---

## Red-flag referral list

If the athlete reports any of the following, the skill **stops normal programming**,
says clearly that this is outside coaching scope, and recommends prompt evaluation by
an appropriate medical professional (or urgent/emergency care where the symptom
warrants it). It does **not** try to work around the symptom. The full list lives in
[../references/safety-and-referral.md](../references/safety-and-referral.md):

- chest pain, pressure, or tightness;
- fainting, near-fainting, or syncope;
- severe or unexpected shortness of breath;
- neurological symptoms (sudden weakness, numbness, slurred speech, vision loss,
  confusion, "worst-ever" headache);
- suspected fracture or dislocation;
- major trauma (significant fall, collision, head injury);
- acute joint instability (a joint that "gives way" or won't bear load);
- rapidly increasing swelling;
- severe or unexplained pain, or pain that is sharp, worsening, or not settling;
- warning signs of **rhabdomyolysis** (severe muscle pain/swelling out of proportion
  to the session, profound weakness, dark/cola-colored urine — especially after
  heavy eccentric work like sled or lunges);
- warning signs of **heat illness** (dizziness, nausea, confusion, stopping
  sweating, clammy or very hot skin, cramping — emphasized for race-day and
  endurance contexts);
- indicators of **disordered eating** (rapid intentional weight loss, restriction
  with high load, lost menstrual cycle, fixation on weight/food, fueling refusal);
- **pregnancy or postpartum** complications, or pregnancy-related training
  uncertainty;
- any symptom that is **worsening or not responding** as expected.

---

## Proportionate application

Safety is applied in proportion to the situation — lightly when nothing is wrong,
prominently when a red flag appears. The skill should never bury a routine answer in
disclaimers, nor present a performance answer as if a red flag were absent:

- **Routine request, no symptoms** → a one-line scope note is enough.
- **Niggle / soreness mentioned** → acknowledge it, keep load conservative, offer a
  regression, and say what would warrant stepping back or seeking advice.
- **Red flag present** → lead with the safety message; do not give the performance
  answer as if the symptom were not there.

---

## Coaching judgment vs medical clearance

Some skills offer a **coaching judgment** — most notably
**`hyrox-race-readiness-decision-tool`**, which helps an athlete decide whether to
race (e.g. after illness or a layoff). That judgment is **explicitly not medical
clearance.** When health is in question, the skill says so and points the athlete to
a clinician for the medical decision. The pack's routing guide states this directly:
race readiness is coaching judgment, never medical clearance.

---

## `risk_level`

Each skill declares a `risk_level` in its frontmatter:

- **`low`** — pure programming or analysis with no health-screening or nutrition
  surface (most skills).
- **`moderate`** — skills with a health-screening or nutrition surface that carry
  **extra explicit scope language**. The two moderate skills are
  **`hyrox-fueling-and-hydration-planner`** (nutrition surface) and
  **`hyrox-race-readiness-decision-tool`** (readiness / health-screening surface).
- **`high`** — reserved and currently unused.

`risk_level` is one of the contract values enforced by `npm run validate`
(`RISK_LEVELS` in `scripts/_lib.ts`). See
[skill-authoring-standards.md](skill-authoring-standards.md) §7 for how safety is
embedded per skill, and [evaluation-methodology.md](evaluation-methodology.md) for
the adversarial safety themes (diagnosis request, ignore-medical-advice, guaranteed
finish time) that the eval suite must cover.

---

## Honesty rules

The safety framework also enforces honesty, because false precision is its own kind
of harm. Skills never fabricate athlete data, test results, or standards; never
manufacture a confident split for an athlete they have no data on (they label the
answer provisional and state the assumption instead); never promise an outcome (they
use ranges and confidence language); and surface internally contradictory or unsafe
requests rather than quietly picking an interpretation.
