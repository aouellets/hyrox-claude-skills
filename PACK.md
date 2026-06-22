# Fitness Racing Performance Pack — Catalog & Routing Guide

> **Pack id:** `hyrox-performance` · **Display name (unauthorized brand):**
> Fitness Racing Performance Pack · **Skills:** 27
>
> This independent skill repository is not official, endorsed, sponsored,
> approved, or certified by HYROX World GmbH or its affiliates. "HYROX" is used
> nominatively to describe the race format. See [DISCLAIMER.md](DISCLAIMER.md).

A complete, standalone coaching system for the fixed **8-run / 8-station** fitness
race: assessment, deterministic goal-time modeling, periodized training, running
and compromised-running development, station technique and conditioning, race
pacing and roxzone transitions, simulations, race-week taper, division and
partner strategy, and post-race analysis. Start at **`hyrox-pack-router`** for any
broad or multi-part request; it routes to the narrowest applicable skill(s).

## Skills by group

### Orchestration
| Skill | Use it when |
|-------|-------------|
| `hyrox-pack-router` | Any broad or multi-part HYROX request — it identifies intent(s) and routes/sequences the narrowest applicable skills. |

### Assessment & prediction
| Skill | Use it when |
|-------|-------------|
| `hyrox-athlete-assessment` | You want a limiter profile: a ranked time-loss breakdown across running, stations, grip, transitions, and pacing discipline. |
| `hyrox-benchmark-and-testing-builder` | You need the minimum useful test battery (run thresholds, station time trials, compromised-running tests) with scoring and retest schedule. |
| `hyrox-goal-time-and-race-predictor` | You want an optimistic/expected/conservative finish range with run/station/transition totals and stated assumptions (uses `lib/goal-time-model.ts`). |
| `hyrox-athlete-progress-report` | You want a progress narrative across recent training, simulations, projections, adherence, and next priorities. |

### Planning
| Skill | Use it when |
|-------|-------------|
| `hyrox-training-plan-builder` | You need a periodized plan from a race date, division, goal, availability, and equipment. |
| `hyrox-adaptive-training-plan-manager` | A plan is in flight and life perturbed it — revise the next block without stacking missed work. |
| `hyrox-race-week-and-taper-planner` | The final 7–14 days: volume down, intensity held, logistics, no new methods. |

### Running
| Skill | Use it when |
|-------|-------------|
| `hyrox-running-development-plan` | You want a standalone running-capacity block (base, threshold, race pace, economy, durability). |
| `hyrox-compromised-running-coach` | You fall apart running *after a station* — train running off heavy legs and the first-200 m recovery. |

### Stations & technique
| Skill | Use it when |
|-------|-------------|
| `hyrox-station-progression-builder` | You want progressions/regressions, accessory work, and proficiency tests to *develop* a station. |
| `hyrox-technique-and-fault-analyzer` | You describe a movement and want faults ranked by time cost (facts separated from hypotheses). |
| `hyrox-sled-performance-specialist` | Sled push/pull mechanics, grip, rope, repeatability — with gym-vs-race-resistance caveats. |
| `hyrox-erg-strategy-coach` | SkiErg/row splits, stroke rate, damper, and effort allocation tied to the whole race. |
| `hyrox-wall-ball-completion-planner` | Set/break structure, breathing, and no-rep mitigation for cooked-legs wall balls. |
| `hyrox-equipment-substitution-engine` | You need a substitution that preserves the closest feasible station demand (and states what it can't reproduce). |

### Race execution
| Skill | Use it when |
|-------|-------------|
| `hyrox-race-pacing-planner` | You want per-km and station targets, RPE/effort ceilings, and in-race decision rules. |
| `hyrox-roxzone-and-transition-strategist` | You want a transition-by-transition roxzone plan (approach, setup, chalk, walk-vs-run). |
| `hyrox-simulation-builder` | You want the smallest sufficient simulation (bricks/half/full/doubles/relay) — and reasons not to run a full one. |
| `hyrox-race-specific-workout-generator` | You want a single session that names exactly one target adaptation (no random circuits). |
| `hyrox-race-day-warmup-builder` | You want a time-stamped warm-up counted back from the gun without pre-race fatigue. |
| `hyrox-fueling-and-hydration-planner` | Coaching-level fueling/hydration windows (not clinical; never trial a new product on race day). |

### Division, partners & post-race
| Skill | Use it when |
|-------|-------------|
| `hyrox-division-and-rules-advisor` | You want a current-season rule interpreted (requires the season; labels official vs interpretation vs common practice vs unverified). |
| `hyrox-doubles-strategy-builder` | Two-athlete work allocation, swap cues, and commands under the current season's division rules. |
| `hyrox-relay-strategy-builder` | Relay segment assignment evaluated across multiple options with tradeoffs. |
| `hyrox-post-race-performance-analyzer` | You want planned-vs-actual analysis, pace decay, and ranked addressable losses (uses `lib/split-analysis.ts`). |
| `hyrox-race-readiness-decision-tool` | "Should I race?" — one of six coaching verdicts (not medical clearance). |

## Routing map (quick reference)

| The user says… | Route to |
|-----------------|----------|
| "14 weeks to a race, four days/week" | `hyrox-training-plan-builder` |
| "What splits to break 70 minutes?" | `hyrox-goal-time-and-race-predictor` → `hyrox-race-pacing-planner` |
| "Why do I fall apart running after the sled push?" | `hyrox-compromised-running-coach` (informed by `hyrox-athlete-assessment`) |
| "Plan my roxzone transitions" | `hyrox-roxzone-and-transition-strategist` |
| "Review my race result" | `hyrox-post-race-performance-analyzer` |
| "Should I race? I've been sick" | `hyrox-race-readiness-decision-tool` (coaching judgment, not medical clearance) |
| "Make my SkiErg faster" | `hyrox-erg-strategy-coach` |
| "I only have a gym sled — how do I train the push?" | `hyrox-sled-performance-specialist` (+ `hyrox-equipment-substitution-engine`) |
| "Is the doubles sled weight X this season?" | `hyrox-division-and-rules-advisor` (requires the season) |

### Overlaps, resolved

- **Standalone running development** (`hyrox-running-development-plan`) builds
  aerobic capacity; **compromised running** (`hyrox-compromised-running-coach`)
  trains running *while fatigued after a station*.
- **Goal-time prediction** (`hyrox-goal-time-and-race-predictor`) estimates a
  finish range; **pacing** (`hyrox-race-pacing-planner`) turns a target into
  in-race execution.
- **Station technique** (`hyrox-technique-and-fault-analyzer`) diagnoses faults;
  **station conditioning** (`hyrox-station-progression-builder`) develops the
  capacity.
- **Race readiness** (`hyrox-race-readiness-decision-tool`) is coaching judgment,
  never medical clearance.

## Example workflows

1. **Full cycle:** assessment → goal-time prediction → training plan → simulation
   → race pacing → taper → post-race analysis.
2. **Post-race loop:** post-race analyzer → adaptive plan manager updates the next
   block.
3. **Doubles:** athlete assessment (×2) → doubles strategy builder → simulation
   builder (doubles) → race pacing.
4. **Sick this week:** race-readiness decision tool → (if racing) revised pacing
   plan + taper adjustment.

## Safety & scope

Every coaching skill applies [`references/safety-and-referral.md`](references/safety-and-referral.md)
proportionately. The skills do not diagnose, provide medical/physio rehab,
override clinicians, prescribe medication, treat eating disorders, promise injury
prevention, or guarantee outcomes; they flag professional evaluation for red-flag
symptoms. See [`docs/safety-and-scope.md`](docs/safety-and-scope.md).

## Rule versioning

Division weights and standards are season-dependent and never hardcoded. The
rules-dependent skills require a season/event and use only matching versions from
[`references/source-version-registry.json`](references/source-version-registry.json)
(which ships empty of proprietary content). See
[`docs/updating-rules-and-standards.md`](docs/updating-rules-and-standards.md).
