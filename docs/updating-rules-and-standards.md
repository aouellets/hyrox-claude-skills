# Updating Rules and Standards

HYROX division weights, distances, standards, and seasonal rules change between
seasons. This repo keeps them current **without ever hardcoding them into skill
bodies**. Rules live only in a versioned registry, and the rules-dependent skills
read the entry that matches the athlete's event — warning loudly when the matching
version is missing or stale.

This operationalizes §8 of
[skill-authoring-standards.md](skill-authoring-standards.md). The no-scrape /
non-affiliation policy it depends on is in
[branding-and-trademarks.md](branding-and-trademarks.md).

---

## The three rules-dependent skills

Only three skills depend on versioned rules. They are the only skills with
`requires_current_rules: true` in their frontmatter, and `npm run validate:skills`
checks that each one actually references a season/version requirement in its body:

- `hyrox-division-and-rules-advisor`
- `hyrox-doubles-strategy-builder`
- `hyrox-relay-strategy-builder`

Every other skill is rules-agnostic (it programs training or analyzes performance)
and declares `requires_current_rules: false`.

---

## The source-version registry model

The single home for rules content is
[../references/source-version-registry.json](../references/source-version-registry.json).
It **ships with an EMPTY `sources` array** — **no HYROX rulebooks are scraped or
embedded**. Entries are added only from user-supplied or properly
licensed/authorized sources (see the no-scrape rule below).

Each entry carries this metadata:

| Field | Meaning |
| --- | --- |
| `source_id` | Stable unique id for this rules source/version, e.g. `user-2026-season-singles`. |
| `organization` | The body that issued the rules (the event organizer, or `user-supplied`). |
| `document_title` | Title of the rulebook / standards document. |
| `season` | Season or edition the rules apply to, e.g. `2026` or `2025/26`. |
| `effective_date` | `YYYY-MM-DD` the rules took effect. |
| `retrieved_date` | `YYYY-MM-DD` the content was supplied to / recorded in this repo. |
| `authorization_status` | One of: `user_supplied`, `public_reference`, `licensed`, `unverified`, `none`. |
| `official_source_reference` | Where to verify the canonical rule (URL or citation) — **not** scraped content. |
| `supersedes` | `source_id` of the prior version this replaces, or `null`. |
| `notes` | Free-text caveats, scope, and known gaps. |

`npm run validate:sources` enforces this: every entry must have the required fields,
`effective_date` / `retrieved_date` must be ISO dates, `authorization_status` must
be from the allowed set, and `supersedes` (when present) must point at a known
`source_id`.

---

## How a rules-dependent skill uses the registry

A rules-dependent skill follows this discipline (it never silently uses an old
rulebook):

1. **Require an event or season.** It asks for the athlete's event date/season
   before applying any weight, distance, or standard.
2. **Select the matching version.** It uses *only* the registry entry whose `season`
   / `effective_date` matches the athlete's event.
3. **Warn when stale or absent.** If the matching version is missing, or the closest
   entry is for a different/older season, it says so explicitly and does **not**
   pretend an old rulebook still applies.
4. **Request current rule text when missing.** If the registry has nothing for the
   event, the skill asks the user for the current rule text and otherwise continues
   with a clearly-labeled **conditional** analysis ("assuming the standard X holds…")
   rather than inventing numbers.

---

## Rule-confidence labels

When a rules-dependent skill states a rule, it labels how sure it is, so the athlete
knows what is authoritative versus inferred:

- **Official rule** — taken directly from a registry entry that matches the event.
- **Interpretation** — a reasonable reading of an official rule, flagged as such.
- **Common practice** — what athletes/coaches typically do; not an official rule.
- **Unverified assumption** — a placeholder used to continue an analysis when the
  rule text is unavailable; explicitly provisional and to be confirmed.

These labels are also an eval dimension: the **"outdated rulebook"** adversarial
theme in [evaluation-methodology.md](evaluation-methodology.md) checks that a skill
warns and requires the matching season rather than applying a stale rule.

---

## The no-scrape / no-proprietary-manual rule

- **Do not scrape HYROX web content**, and **do not embed proprietary rulebooks or
  manuals** into this repo. The registry stores *metadata and references*, not
  copied rule text from proprietary sources.
- `official_source_reference` points to *where to verify* a rule (a URL or
  citation) — it is not a place to paste scraped content.
- This is enforced socially and by policy, and ties into the trademark/non-affiliation
  stance in [branding-and-trademarks.md](branding-and-trademarks.md). The
  **"scrape HYROX content"** adversarial eval theme exists to keep skills refusing
  such requests.

---

## Workflow: add a new rules source

When you have a **user-supplied or properly licensed/authorized** rules source:

1. Open [../references/source-version-registry.json](../references/source-version-registry.json).
2. Append an entry to `sources` with all the metadata fields above. Pick a stable,
   descriptive `source_id` (e.g. `user-2026-season-singles`).
3. Set `authorization_status` honestly (`user_supplied`, `public_reference`,
   `licensed`, `unverified`, or `none`) and put a verifiable
   `official_source_reference`. Do **not** paste scraped/proprietary text.
4. If this version replaces an earlier one, set `supersedes` to that entry's
   `source_id`.
5. Run validation:

   ```bash
   npm run validate:sources
   ```

   (or the full `npm run validate` / `npm run check`). Fix any reported field, date,
   or `supersedes` error.

The rules-dependent skills will then select the new version automatically for events
in its season, and continue to warn for events it does not cover.

---

## Related

- [skill-authoring-standards.md](skill-authoring-standards.md) §8 — the authoring
  contract for versioned rules.
- [branding-and-trademarks.md](branding-and-trademarks.md) — no scraping, nominative
  use, non-affiliation.
- [evaluation-methodology.md](evaluation-methodology.md) — the outdated-rulebook and
  scrape-content adversarial themes.
- [../references/race-structure.md](../references/race-structure.md) — the
  race-format reference the rules sit alongside.
