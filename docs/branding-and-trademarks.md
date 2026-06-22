# Branding and Trademarks

This repository is **independent**. It is **not official, endorsed, sponsored,
approved, or certified by HYROX World GmbH or its affiliates.** "HYROX" is a
trademark of HYROX World GmbH. This document is the policy that the skills, the
tooling, and the published catalog entries follow. It restates and operationalizes
§9 of [skill-authoring-standards.md](skill-authoring-standards.md). See also the
root `DISCLAIMER.md` for the user-facing notice.

---

## The rules

1. **Write the mark as `HYROX`.** Use the trademark only to *name the race format*
   it refers to.
2. **No affiliation, endorsement, certification, partnership, or sponsorship
   claims** — not in skill bodies, examples, descriptions, the manifest, the seed,
   or anywhere else. The skills are never described as "HYROX-approved",
   "official", "certified", or "verified".
3. **Nominative use only.** Referring to HYROX to describe the race format (its 8
   runs and 8 stations, its divisions, its stations by name) is fine, because that
   is the only practical way to talk about training for it. Anything beyond
   naming-to-describe is not.
4. **Neutral display name when unauthorized.** Because no brand authorization is
   documented, the pack ships under the neutral display name **"Fitness Racing
   Performance Pack"** rather than a HYROX-branded name. The internal pack id stays
   `hyrox-performance`; the *displayed* name is the neutral one.

---

## The `brand-authorization.json` gate

`assets/brand/brand-authorization.json` is the machine-checkable gate. It currently
reads `authorized: false` with every authorization field empty, which is what forces
the neutral display name and the unverified status throughout the pipeline:

- The manifest carries `brand_authorized: false` and both the real and neutral
  display names.
- `scripts/build-seed.ts` emits `verified = false`, a neutral `author`, and the
  neutral pack name into Supabase.

**`npm run validate` (specifically `validate:sources`) refuses to let the pack be
labeled official or verified unless this record is set `authorized: true` with
*complete* authorization metadata** — `authorization_type`, `authorized_by`, and
`authorization_date` all populated. If `authorized` is `false`, no authorization
fields may be filled in; the validator treats that as an internal contradiction and
fails.

Two consequences worth stating explicitly:

- **No logo files are required**, and **adding logo image files does not change the
  gate.** The notice in `brand-authorization.json` instructs that HYROX logo images
  should not be added; even if they were, validation must continue to refuse
  official labeling without complete authorization metadata. Branding status is
  governed by the authorization record, never by the presence of an asset.
- To actually grant authorization (only if it has genuinely been obtained in
  writing), set `authorized: true` and fill all three metadata fields, then re-run
  `npm run validate` and `npm run build`. Until then, the neutral name and
  unverified status are correct and must not be worked around.

---

## Why this is also a safety and eval concern

Misrepresenting affiliation is treated as a failure mode, not just a style note. The
eval suite must cover the **"present pack as endorsed"** and **"scrape HYROX
content"** adversarial themes (see
[evaluation-methodology.md](evaluation-methodology.md)): a correct skill refuses to
claim endorsement and refuses to scrape or embed proprietary HYROX content. The
no-scrape / no-proprietary-manual rule for season-dependent rules is covered in
[updating-rules-and-standards.md](updating-rules-and-standards.md).

---

## Related

- `DISCLAIMER.md` (repo root) — the user-facing non-affiliation notice.
- [skill-authoring-standards.md](skill-authoring-standards.md) §9 — the authoring
  contract for the trademark.
- [updating-rules-and-standards.md](updating-rules-and-standards.md) — no scraping;
  rules come only from user-supplied or licensed sources.
- [../references/source-version-registry.json](../references/source-version-registry.json)
  — ships empty of proprietary rulebook content by default.
