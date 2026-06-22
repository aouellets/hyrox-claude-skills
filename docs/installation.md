# Installation

There are two audiences for this repo:

- **End users** who just want the HYROX coaching skills inside Claude — install
  through the **Skill Me** MCP catalog. You do not clone anything.
- **Maintainers / contributors** who want to change the skills or re-seed the
  catalog — clone the repo and run the tooling.

---

## A. End users — install via the Skill Me catalog (MCP)

The skills are served by the Skill Me MCP server at
`https://skillshelf-ten.vercel.app/api/mcp`. Once that server is connected to your
Claude client, four tools cover the whole lifecycle:

- **`browse_skills`** — keyword search to discover skills (e.g. search `hyrox`,
  `sled`, `pacing`, `taper`). Use this to find the right skill before installing.
- **`install_pack`** — install the whole pack in one step. The pack id is
  **`hyrox-performance`** (it shows under the neutral display name
  **"Fitness Racing Performance Pack"** because the repo is not brand-authorized —
  see [branding-and-trademarks.md](branding-and-trademarks.md)). This installs all
  27 skills together, which is the recommended path since they cross-route to each
  other through `hyrox-pack-router`.
- **`install_skill`** — install a single skill by its slug if you only want one,
  e.g. `hyrox-goal-time-and-race-predictor` or `hyrox-race-readiness-decision-tool`.
- **`get_active_skills`** — loads your installed skills into the session so they
  actually apply. Call this at the start of a conversation; without it, installed
  skills sit dormant.

**Typical flow:**

1. `install_pack` with `hyrox-performance` (or `install_skill` for individual
   skills).
2. At the start of a working session, `get_active_skills` to load them.
3. Describe your task in natural language ("I have 12 weeks to my first HYROX, here
   are my recent run paces…"). The pack router and the skills' trigger descriptions
   handle the routing from there.

No clone, no database, no Node required for this path.

---

## B. Maintainers / contributors — clone and run the tooling

### Prerequisites

- **Node >= 20** (declared in `package.json` `engines`).
- A POSIX shell. All tooling is TypeScript run through `tsx`; there is no build
  step for the scripts themselves.

### Install and verify

```bash
git clone <repo-url> hyrox-claude-skills
cd hyrox-claude-skills
npm install          # installs tsx + typescript (devDependencies only)
npm run check        # the full gate: typecheck + validate + test + build + evals
```

`npm run check` is the single command that proves the repo is healthy. It runs, in
order:

| Step | Command | What it does |
| --- | --- | --- |
| typecheck | `npm run typecheck` | `tsc --noEmit` over `lib/` and `scripts/` |
| validate | `npm run validate` | frontmatter + skills + links + triggers + sources |
| test | `npm run test` | `lib/` unit tests (`tests/*.test.ts`) |
| build | `npm run build` | regenerates `skill-inventory.json` then `seed/seed.sql` |
| evals | `npm run evals` | offline static eval harness (see below) |

You can also run any stage on its own, e.g. `npm run validate:triggers` or
`npm run build:seed`. See [evaluation-methodology.md](evaluation-methodology.md)
for what `npm run evals` checks — it is an **offline static harness and does not
call a model**.

### Regenerate the artifacts after editing skills

`skill-inventory.json` and `seed/seed.sql` are **generated** — never hand-edit
them. After changing any `SKILL.md`:

```bash
npm run build        # build:inventory -> build:seed
```

`build:inventory` reads only frontmatter and writes `skill-inventory.json`;
`build:seed` consumes that inventory plus `manifest.json` and writes
`seed/seed.sql`. See [architecture.md](architecture.md) for the full data flow.

### Apply the seed to Supabase

`seed/seed.sql` is an **idempotent** upsert (wrapped in `begin; … commit;`) of the
pack and its 27 skills into `public.skills`, `public.packs`, and
`public.pack_skills`. Apply it either way:

**Option 1 — `psql`:**

```bash
psql "$SUPABASE_DB_URL" -f seed/seed.sql
```

**Option 2 — Supabase SQL editor:** paste the contents of `seed/seed.sql` into the
project's SQL editor and run it.

Because the seed is idempotent (it upserts on the UNIQUE `slug`), re-running it is
safe and is how you publish content updates.

### Two things to get right before you run it

1. **Schema-confirmation caveat.** The seed targets the live skillshelf schema
   **confirmed on 2026-06-21** via the Supabase MCP `list_tables`:
   - the conflict target is the UNIQUE **`slug`** (`id` is a server-generated
     uuid);
   - `category` is a fixed enum, so every skill maps to **`personal`** with the
     HYROX domain category in **`subcategory`**.

   **Re-confirm the schema before running this against any other project, or if the
   schema may have drifted.** See [updating-rules-and-standards.md](updating-rules-and-standards.md)
   and [architecture.md](architecture.md).

2. **The `REPO_URL` / `OWNER` placeholder.** The generated `source_url` values use
   `https://github.com/OWNER/hyrox-claude-skills/...`. `OWNER` is a placeholder —
   replace it with the real GitHub org/repo (in `scripts/build-seed.ts`, the
   `REPO_URL` constant) and re-run `npm run build` **before** publishing, so the
   catalog links point at the real repository.

---

## Related docs

- [architecture.md](architecture.md) — repo layout and the full data flow.
- [evaluation-methodology.md](evaluation-methodology.md) — how evals work and how
  to add a case.
- [skill-authoring-standards.md](skill-authoring-standards.md) — the authoring
  contract enforced by `npm run validate`.
- [branding-and-trademarks.md](branding-and-trademarks.md) — naming and
  non-affiliation rules.
