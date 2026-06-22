# Contributing

Thanks for helping improve the HYROX skill repository. This is a standalone
open-source project: a `git clone` of this repo alone has everything needed to
install, validate, evaluate, and seed the catalog. Contributions are welcome for
new skills, better coaching content, sharper trigger descriptions, more eval
cases, and tooling.

By contributing you agree your work is licensed under the repository's MIT
`LICENSE`, and that you will not add any content that claims affiliation with or
endorsement by HYROX World GmbH (see `docs/branding-and-trademarks.md`).

## Prerequisites

- Node.js ≥ 20
- `npm install`

## The one command that gates a PR

```bash
npm run check
```

This runs, in order: `typecheck` → `validate` (frontmatter, structure, internal
links, trigger lint, source versions) → `test` (lib unit tests) → `build`
(inventory + seed) → `evals` (offline eval-suite harness). Your PR must pass it.

## Authoring or editing a skill

Read **`docs/skill-authoring-standards.md`** first — it is the enforced contract.
In short, every skill folder `skills/<id>/` needs:

- `SKILL.md` with frontmatter (`name`, `description`, `category`, `risk_level`,
  `requires_current_rules`) and a body containing all eight required H2 sections
  (`## Workflow`, `## Required Inputs`, `## Optional Inputs`, `## Non-Goals`,
  `## Default Output`, `## Safety and Scope`, `## Handling Incomplete
  Information`, `## Related Skills and Routing`).
- `examples/` with ≥ 3 worked examples (complete-data, incomplete/provisional,
  routing-or-safety).
- `evals/cases.json` (≥ 10 nine-key cases, ≥ 1 adversarial), `evals/rubric.md`,
  `evals/expected-behaviors.md`.

The `description` is the **primary triggering surface** in the catalog. Make it
trigger-precise: state WHEN to load the skill, the user language that signals it,
the inputs it expects, what it excludes, and the adjacent skill to route to. The
linter rejects vague filler and descriptions under 140 characters.

### Workflow to add a skill

1. Create `skills/<lowercase-hyphenated-id>/` (namespaced `hyrox-...`).
2. Write `SKILL.md`, `examples/`, and `evals/` per the standards.
3. Add the new id to `manifest.json` `skill_ids` (in routing order).
4. `npm run build` to regenerate `skill-inventory.json` and `seed/seed.sql`
   (both are generated — never edit them by hand).
5. `npm run check` until green. Update `CHANGELOG.md`.

## Coaching content standards

- Be specific and measurable (paces, splits, RPE, loads, rest, set/break
  structure, progression criteria, retest dates). Avoid false precision.
- Apply the safety framework (`references/safety-and-referral.md`)
  proportionately. Never promise injury prevention or guarantee outcomes.
- Never hardcode season-dependent division weights/standards. Rules-dependent
  skills must use `references/source-version-registry.json` and follow
  `docs/updating-rules-and-standards.md`.
- Do not scrape HYROX web content or embed proprietary manuals.
- Treat HYROX as its own event, not "CrossFit with more running".

## Updating the math (`lib/`)

`lib/` functions must keep type hints, validate inputs with useful errors, make
no network calls, and collect no athlete data. Add or update unit tests in
`tests/` for any behavior change; bug fixes get a failing test first.

## Commit / PR hygiene

- One concern per PR; separate refactors from content/behavior changes.
- Reference the affected skill id(s) in the PR description.
- Confirm `npm run check` passes and note any new assumptions or limitations.
