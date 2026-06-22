---
name: Adaptive Training Plan Manager
description: Use when a HYROX athlete is partway through an existing plan and reports completed work, missed sessions, fatigue, a niggle, or a schedule or performance change, and asks how to adjust the next block. Returns an updated next period that preserves the trajectory to the same race date and goal, with revised sessions, progression decisions, and what to drop. It never stacks missed work into the remaining days. It does not build the original plan (route to hyrox-training-plan-builder), write a progress narrative (route to hyrox-athlete-progress-report), or decide race readiness rather than revise training.
category: planning
risk_level: low
requires_current_rules: false
---

# Adaptive Training Plan Manager

Keep an in-flight HYROX plan on its trajectory when real life perturbs it. The
athlete already has a plan and a race date; this skill reviews what actually
happened — completed sessions, misses, fatigue, pain, a schedule or performance
change — and revises the **next** period so the plan still arrives at the same race
date and goal in good shape (see
[coaching-principles](../../references/coaching-principles.md)). The single most
important rule: **do not stack missed work into the remaining days.** Missed volume
is gone; the question is what the *next* block should now be, not how to cram the
backlog. Adjustments protect easy/aerobic volume, respect recovery, and avoid the
spike that a "make-up" mindset creates.

## Workflow

1. **Reconstruct the current state.** From the existing plan and the recent training
   log, establish where the athlete is vs. where the plan expected them: sessions
   completed, sessions missed, fatigue/soreness, any pain, and any schedule or
   performance change.
2. **Diagnose the perturbation type.** Is this a short interruption (a missed week),
   accumulating fatigue (consistent under-recovery), a fitness jump or shortfall vs.
   plan, or a structural change (fewer days available now)? Each calls for a
   different revision.
3. **Preserve the trajectory, not the calendar.** Re-anchor to the race date. Decide
   what the next block must still achieve, then trim or reshape it to fit — drop the
   least-important work first, keep the phase's key adaptation and the protected easy
   volume.
4. **Explicitly refuse to stack.** State that missed sessions are not added on top of
   coming ones. Where the athlete is behind, adjust the *goal expectation or the
   block emphasis*, never the daily density.
5. **Make progression decisions.** For each thread (running, threshold, stations),
   decide advance / hold / regress based on what the log shows was actually tolerated,
   not the original calendar.
6. **Reshape the next period concretely.** Output the revised sessions with paces,
   RPE, sets, rest, and a clear "what changed and why" against the original.
7. **Flag readiness and safety boundaries.** If the perturbation is illness, pain, or
   a red flag, name the boundary and route readiness/safety rather than silently
   reprogramming through it.

## Required Inputs

- **The existing plan** (or enough of it to know the current phase, the race date,
  the goal, and the intended next block).
- **A recent training log** — what was actually completed and missed over the last
  ~1–3 weeks, with any fatigue, soreness, or pain noted.

## Optional Inputs

- **The reason for the change** (illness, work travel, a tweak, a life event).
- **Recent test or session data** showing fitness ahead of or behind plan.
- **A new constraint** (fewer training days, a new injury limit, a venue change).
- **The athlete's subjective readiness** (sleep, motivation, stress).

## Non-Goals

- **Not building the original plan.** If there is no existing plan, that is
  `hyrox-training-plan-builder`.
- **Not a progress narrative.** Summarizing trends and telling the athlete's story
  over time is `hyrox-athlete-progress-report`; this skill *acts* on the next block.
- **Not race readiness.** "Should I race / train given this illness or pain?" is
  `hyrox-race-readiness-decision-tool` (coaching judgment, not medical clearance).
- **Never stacks missed work** into the remaining days — this is the defining
  boundary, not an optional preference.

## Default Output

Use the Training-plan contract, scoped to the revision:

1. **Current state vs. plan** — where the athlete is, what was completed/missed, and
   any fatigue/pain.
2. **What changed and why** — the perturbation type and the revision principle
   applied (preserve trajectory; do not stack).
3. **Revised next block** — the reshaped sessions (paces, RPE, sets, rest), with each
   change marked against the original plan.
4. **Progression decisions** — advance / hold / regress per thread, justified from the
   log.
5. **Trajectory check** — whether the race date and goal still hold, hold with a
   revised expectation, or need a conversation; stated as a range, never a promise.
6. **Recovery & adjustment rules** — easy-day discipline, the next down week, and what
   to do if the disruption continues.
7. **Risks & referral** — overuse watch and the safety boundary.

## Safety and Scope

Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately. A missed week with no symptoms needs only a one-line scope note. A
niggle means conservative load and a stated regression. If the log shows pain that is
sharp, worsening, or not settling, or a red flag (chest pain, syncope, suspected
fracture, rhabdomyolysis or heat-illness signs, disordered-eating indicators,
pregnancy/postpartum uncertainty), stop reprogramming around it, name the boundary,
and refer out — and route the race/train decision to
`hyrox-race-readiness-decision-tool`, which is coaching judgment, not medical
clearance. Never promise the goal is still safely reachable; use ranges.

## Handling Incomplete Information

Always return a clearly-labeled **provisional** revision from what the log shows. If
the existing plan or the log is thin, ask only for the two things that materially
change the revision: the **race date / current phase** and **what was actually
completed vs. missed recently**. Do not reconstruct a plan you were never given —
say what you assumed about the original structure. Never fabricate the athlete's
completed sessions or invent fatigue data, and never present an assumed tolerance as
a measured one. If the athlete's report is internally contradictory (e.g. "I'm
exhausted, add two more hard sessions"), surface the contradiction rather than
quietly picking one side.

## Related Skills and Routing

- **No existing plan yet** → `hyrox-training-plan-builder`.
- **Tell the story of my progress / trends** → `hyrox-athlete-progress-report`.
- **Should I race or train given illness/pain?** →
  `hyrox-race-readiness-decision-tool`.
- **The change is specifically the final week** → `hyrox-race-week-and-taper-planner`.
- **A fitness retest is needed to decide** → `hyrox-benchmark-and-testing-builder`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
