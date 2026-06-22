# hyrox-claude-skills

**A standalone, open-source Claude Agent Skills repository for HYROX performance
coaching.** It is the source of truth for the HYROX skill content that the
[Skill Me](https://skillshelf-ten.vercel.app) catalog ingests into Supabase and
serves over MCP (`browse_skills`, `install_skill`, `install_pack`,
`get_active_skills`).

It contains **27 coaching skills** for the fixed **8-run / 8-station** fitness
race — assessment, deterministic goal-time modeling, periodized training, running
and compromised-running development, station technique and conditioning, race
pacing and roxzone transitions, simulations, race-week taper, division and
partner strategy, and post-race analysis — plus the pack manifest, the catalog
seed, deterministic split math, validation/eval tooling, and per-skill examples
and evals.

> **Not affiliated with HYROX.** This independent repository is not official,
> endorsed, sponsored, approved, or certified by HYROX World GmbH or its
> affiliates. "HYROX" is used nominatively to describe the race. Absent
> documented brand authorization, the pack ships under the neutral display name
> **"Fitness Racing Performance Pack."** See [DISCLAIMER.md](DISCLAIMER.md).
>
> **Not medical advice.** The skills are coaching-level educational content, not
> medical, physiotherapy, or nutrition-therapy advice. They do not diagnose or
> treat, promise injury prevention, or guarantee any race outcome. See
> [docs/safety-and-scope.md](docs/safety-and-scope.md).

## Install (end users, via the Skill Me MCP catalog)

Connect the Skill Me MCP server, then:

- **Install the whole pack:** `install_pack` with pack id **`hyrox-performance`**.
- **Install one skill:** `install_skill` with a skill id, e.g.
  `hyrox-training-plan-builder`.
- **Discover:** `browse_skills` (keyword) / `browse_packs`.
- Installed skills are loaded for a session via `get_active_skills`.

Start with **`hyrox-pack-router`**: it routes any broad request to the narrowest
applicable skill(s). See [PACK.md](PACK.md) for the full catalog and routing map,
and [docs/installation.md](docs/installation.md) for details.

## Use (maintainers / contributors)

```bash
git clone <this-repo> && cd hyrox-claude-skills
npm install
npm run check     # typecheck + validate + test + build + evals
```

`npm run check` must pass before any PR. Individual steps:

| Command | What it does |
|---------|--------------|
| `npm run validate` | Frontmatter, structure, internal links, trigger-precision lint, duplicate detection, source-version + brand-authorization checks. Fails loudly. |
| `npm test` | Unit tests for the deterministic math in `lib/` (22 tests). |
| `npm run build` | Regenerates `skill-inventory.json` and `seed/seed.sql` from frontmatter. |
| `npm run evals` | Offline static eval-suite harness: validates the 306 eval cases, routing-id integrity, and pack-wide adversarial-theme coverage (it does **not** call a model). |
| `npm run typecheck` | `tsc --noEmit`. |

## Repository layout

```text
hyrox-claude-skills/
├── README.md  LICENSE  CONTRIBUTING.md  CHANGELOG.md  SECURITY.md
├── DISCLAIMER.md            # non-affiliation + safety notice
├── PACK.md                  # human-readable catalog + routing guide
├── manifest.json            # pack manifest (id: hyrox-performance, 27 skill ids)
├── skill-inventory.json     # GENERATED canonical seed source
├── docs/                    # architecture, installation, authoring standards, evals, safety, branding, rules
├── references/              # 16 domain references + source-version-registry.json
├── skills/                  # 27 skill folders: SKILL.md + examples/ + evals/
├── lib/                     # goal-time-model.ts, split-analysis.ts (deterministic, no network, no telemetry)
├── seed/seed.sql            # GENERATED idempotent Supabase upsert
├── scripts/                 # validation + build + eval tooling (Node/TS)
└── tests/                   # unit tests for lib/ math
```

## How it fits together

```
SKILL.md frontmatter ─▶ build-inventory.ts ─▶ skill-inventory.json
                                                     │
                                                     ▼
                                            build-seed.ts ─▶ seed/seed.sql
                                                                  │
                                                  apply to Supabase (skills / packs / pack_skills)
                                                                  │
                                                     Skill Me MCP ─▶ browse / install / get_active
```

The math in `lib/` is deterministic and private: no network calls, no clock
reads, and no athlete data is persisted or transmitted. `goal-time-model.ts`
projects a finish from run pace (with compromised-running decay), station times,
and roxzone transitions; `split-analysis.ts` compares planned vs actual splits
and classifies pace decay. The `hyrox-goal-time-and-race-predictor` and
`hyrox-post-race-performance-analyzer` skills describe these models in prose so an
athlete can audit the numbers. See [docs/architecture.md](docs/architecture.md).

## Seeding the catalog

`seed/seed.sql` is an idempotent `insert … on conflict (slug) do update` for the
`skills`, `packs`, and `pack_skills` tables, generated by `build-seed.ts`.

> **Schema dependency (confirm before running).** The columns were confirmed
> against the live skillshelf Supabase schema on 2026-06-21: the `id` PK is a
> server-generated `uuid`, so the upsert conflict target is the **unique
> `slug`**; `category` is a fixed enum, so fitness content maps to `personal`
> with the HYROX domain category in `subcategory`. Re-confirm before targeting
> any other project, and replace the `OWNER` placeholder in the repo URL. See the
> header of `seed/seed.sql` and [docs/installation.md](docs/installation.md).

## Versioned rules (no hardcoding)

Division weights, rep counts, and seasonal standards change by season and are
**never hardcoded**. The three rules-dependent skills require a season/event,
use only matching versions from
[`references/source-version-registry.json`](references/source-version-registry.json)
(which ships empty of proprietary content — no HYROX manuals are scraped or
embedded), warn when a rule may be stale, and label official rule vs
interpretation vs common practice vs unverified assumption. See
[docs/updating-rules-and-standards.md](docs/updating-rules-and-standards.md).

## Authoring a skill

Read [docs/skill-authoring-standards.md](docs/skill-authoring-standards.md) — the
enforced contract — and [CONTRIBUTING.md](CONTRIBUTING.md). Every skill defines a
trigger-precise description, required + optional inputs, explicit non-goals, a
structured default output, ≥3 examples, ≥10 eval cases plus an adversarial case, a
Related Skills and Routing section, safety/scope rules, and
incomplete-information handling.

## Limitations

- The skills give **coaching-level** guidance, not medical/physio/nutrition
  therapy, and never guarantee an outcome or promise injury prevention.
- Predictions are ranges with stated assumptions, not precise forecasts; quality
  depends on the data the athlete provides.
- Division standards are only as current as the rules text the user supplies; the
  registry is intentionally empty by default.
- `npm run evals` validates the eval **suite** offline; scoring actual model
  responses requires a downstream model-running harness.

## License

[MIT](LICENSE). The license covers the code and content only, not the HYROX mark.
