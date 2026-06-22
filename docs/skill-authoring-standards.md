# Skill Authoring Standards (Skill Me standard, specialized for HYROX)

This document is the **contract**. Every skill in `skills/` must satisfy it, and
the tooling in `scripts/` enforces it (`npm run validate`). If you add or edit a
skill, read this first. Authoring agents: treat every MUST below as a hard
requirement — the build fails otherwise.

---

## 1. Folder layout (per skill)

```
skills/<skill-id>/
├── SKILL.md            # required
├── examples/           # required, >= 3 markdown files
│   ├── 01-*.md
│   ├── 02-*.md
│   └── 03-*.md
└── evals/              # required
    ├── cases.json          # >= 10 cases, >= 1 adversarial
    ├── rubric.md
    └── expected-behaviors.md
```

- `<skill-id>` is the catalog **slug/id**: lowercase-hyphenated, namespaced
  `hyrox-...`, unique. It is also the folder name. Do not put the id in
  frontmatter — it is derived from the folder.

## 2. Frontmatter (MUST)

```yaml
---
name: Display Title In Title Case
description: <front-loaded trigger condition, third person, >=140 chars>
category: <one of: orchestration | planning | assessment | running | stations | race-execution | division-rules | partners | post-race | readiness>
risk_level: <low | moderate | high>
requires_current_rules: <true | false>
---
```

- `name` — Title Case display title, unique across the pack.
- `description` — **the primary triggering surface** in `browse_skills` /
  `get_active_skills`. It MUST: state WHEN Claude should load the skill; name the
  user language that signals it; name the inputs it expects; state what it
  EXCLUDES; and, where an adjacent skill is the better owner, name that skill.
  - MUST be third person ("Use when the athlete...", not "I help you...").
  - MUST be `>= 140` characters and trigger-precise.
  - MUST NOT use filler: "helps with", "assists with", "anything related to",
    "all things", "general purpose", "various tasks", "and more", "etc.".
  - MUST NOT open with "Helps"/"Assists".
  - MUST mention HYROX (the race format) for domain specificity.
  - SHOULD contain a boundary word ("not", "excludes", "instead", "rather than").
- `category` — the **domain** category (distinct from the catalog DB enum, which
  the seed maps to `personal`). One of the ten values above.
- `risk_level` — `low` for pure programming/analysis; `moderate` for skills with
  health-screening or nutrition surface (e.g. fueling, readiness); `high` is
  reserved and currently unused.
- `requires_current_rules` — `true` only for the three rules-dependent skills
  (division/rules advisor, doubles, relay). When `true`, the body MUST reference
  a season / rulebook / version requirement (the validator checks this).

## 3. SKILL.md body (MUST contain these H2 sections, these exact headings)

The body opens with a single `# Display Title` H1, then imperative prose, then
**all** of these H2 sections (order recommended as listed):

1. `## Workflow` — numbered, imperative steps the skill follows.
2. `## Required Inputs` — what the skill cannot proceed without.
3. `## Optional Inputs` — what sharpens the output if available.
4. `## Non-Goals` — explicit out-of-scope items (what this skill will NOT do).
5. `## Default Output` — the structured default output contract (sections,
   tables, fields). Be concrete.
6. `## Safety and Scope` — apply the shared framework proportionately; link the
   safety reference. From `SKILL.md` the path is `../../references/safety-and-referral.md`;
   from an `examples/*.md` file it is `../../../references/safety-and-referral.md`
   (one extra level). The link checker resolves paths relative to each file.
7. `## Handling Incomplete Information` — how the skill proceeds when data is
   missing: always return a clearly-labeled **provisional** answer, ask only for
   the fields that materially change the output, never fabricate athlete data or
   false precision.
8. `## Related Skills and Routing` — when to hand off, and to which skill;
   resolve overlaps explicitly (see the routing map in `PACK.md`).

Keep `SKILL.md` concise. Push stable domain material into `references/` and link
to it rather than restating it.

## 4. Worked examples (MUST, >= 3)

Each `examples/NN-*.md` shows a realistic request and the skill's response,
demonstrating: a complete-data case, an incomplete-data (provisional) case, and a
routing or safety case. Use concrete numbers (paces, splits, RPE, loads, dates).
Never invent precision the inputs don't support — show the assumption instead.

## 5. Evals (MUST)

`evals/cases.json` is a JSON array of `>= 10` cases. Each case:

```json
{
  "id": "trigger-01",
  "prompt": "<the user's message>",
  "context": { "...": "any prior state / athlete data, or null" },
  "expected_skill": "hyrox-...",
  "must_include": ["...substrings/behaviors the answer must contain..."],
  "must_not_include": ["...things that would be wrong/unsafe..."],
  "safety_expectations": "<what the safety framework should/shouldn't do here>",
  "quality_dimensions": ["trigger-accuracy", "completeness", "..."],
  "notes": "<why this case exists>"
}
```

- All nine keys are required on every case.
- `expected_skill` MUST be a real skill id in this repo.
- `>= 1` case MUST be **adversarial**: give it an `id` containing `adv` (e.g.
  `adv-diagnosis-01`) or a `notes` value containing "adversarial".
- Cover the quality dimensions: trigger accuracy, domain correctness,
  completeness, consistency, personalization, usefulness, safety, scope
  discipline, incomplete-information handling, stale-rule handling (where
  relevant), confidence calibration, and routing.

Across the **pack**, the eval suite must include these adversarial themes
(at least once somewhere): diagnosis request, ignore-medical-advice,
guaranteed finish time, outdated rulebook, request to scrape HYROX content,
present pack as endorsed, internally contradictory athlete data, and trialing a
new fueling product on race day. `npm run evals` checks pack-wide coverage.

`evals/rubric.md` — scoring rubric (what a 0/1/2 answer looks like per
dimension). `evals/expected-behaviors.md` — prose description of correct
triggering, correct handoffs, and the failure modes to avoid.

## 6. Output quality bar (applies to every skill)

Specific, measurable, internally consistent, appropriate to the athlete and the
race timeline, realistic in the time available, explicit about missing data and
assumptions, free of fabricated standards and unsupported certainty. Give
concrete prescriptions (paces, split targets, RPE, rest, loads, set/break
structure, progression criteria, retest dates).

Avoid: false precision in predictions; treating every athlete as competitive;
excessive full-race simulations; equating gym sled load with race resistance;
diagnosing faults from insufficient evidence; random run-and-station circuits
with no defined adaptation; and treating HYROX as "CrossFit with more running".

### Reference output contracts

- **Race plan**: goal & assumptions / projected finish range / segment targets
  table / transition plan / fueling & hydration / warm-up / failure points /
  adjustment rules.
- **Training plan**: athlete & goal / assumptions / architecture / phases (with
  objectives, weekly structure, progression criteria) / testing & retesting /
  adjustment rules / recovery / risks & referral.
- **Movement assessment**: observations / what cannot be determined / prioritized
  faults table (by time cost) / cues / drills / retest.

## 7. Safety embedding (MUST)

Every coaching skill applies `references/safety-and-referral.md` proportionately.
It does not diagnose, provide medical/physio rehab, override clinicians,
prescribe medication, treat eating disorders, promise injury prevention, or
guarantee outcomes. It flags professional evaluation for the red-flag list in the
safety reference. `risk_level: moderate` skills (fueling, readiness) carry extra
explicit scope language.

## 8. Versioned rules (MUST, for rules-dependent skills only)

`hyrox-division-and-rules-advisor`, `hyrox-doubles-strategy-builder`, and
`hyrox-relay-strategy-builder` MUST: require an event/season; use only the
matching version in `references/source-version-registry.json`; warn when stale;
never silently use an old rulebook; distinguish official rule vs interpretation
vs common practice vs unverified assumption; request current rule text when
missing; otherwise continue with a clearly-labeled conditional analysis. They
MUST NOT scrape HYROX web content or embed proprietary manuals.

## 9. Trademark / non-affiliation (MUST)

Write the mark as `HYROX`. Never claim affiliation, certification, partnership,
or endorsement. Nominative references to the race are fine. See
`docs/branding-and-trademarks.md` and `DISCLAIMER.md`.

## 10. Determinism & privacy of `lib/`

`lib/goal-time-model.ts` and `lib/split-analysis.ts` provide the math. They make
no network calls, read no clock, and collect/persist no athlete data. Skills that
quote split math should describe the model in prose so an athlete can audit it.
