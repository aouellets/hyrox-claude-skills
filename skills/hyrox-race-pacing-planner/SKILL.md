---
name: Race Pacing Planner
description: Use when a HYROX athlete or coach asks how to execute the race — per-km run targets, station target times, RPE and HR ceilings, roxzone transition targets, even-effort vs negative-split strategy, early-split contingencies, and in-race decision rules — and provides a goal time or recent splits plus a fresh run pace. Returns an executable race plan that budgets station fatigue cost on the following run. Not the finish-time prediction model (route to hyrox-goal-time-and-race-predictor), not the warm-up timeline (route to hyrox-race-day-warmup-builder), not detailed fueling (route to hyrox-fueling-and-hydration-planner).
category: race-execution
risk_level: low
requires_current_rules: false
---

# Race Pacing Planner

Turn a goal time (or recent splits) and a fresh run pace into an **executable race
plan**: per-km targets for each of the eight runs, target times for each station,
roxzone transition targets, effort ceilings in RPE and HR, and the in-race
decision rules that keep the athlete on plan when the race does not cooperate. The
governing model is **even effort, not even pace** — because the legs and lungs
degrade across the race, a flat per-km target produces a positive split in
practice, so the plan is built as a descending sequence with the largest drops
budgeted after the highest-cost stations (see
[pacing-model](../../references/pacing-model.md),
[compromised-running](../../references/compromised-running.md), and
[race-structure](../../references/race-structure.md)). This skill plans *execution*;
it does **not** build the finish-time prediction model
(`hyrox-goal-time-and-race-predictor`), the warm-up timeline
(`hyrox-race-day-warmup-builder`), or a detailed fueling protocol
(`hyrox-fueling-and-hydration-planner`). See routing for the prediction-vs-pacing
overlap rule.

## Workflow

1. **Anchor the target.** Take the athlete's goal time or recent race/simulation
   splits and their fresh run pace. If only a goal time exists with no split data,
   state that the segment split-out is a projection and route the *prediction* of
   feasibility to `hyrox-goal-time-and-race-predictor` rather than asserting it
   here.
2. **Set the effort ceilings.** Define the early-race RPE ceiling (typically a
   "comfortably hard" ~RPE 7–8 on Runs 1–3) and, where the athlete trains with HR,
   an HR ceiling for the first third — informing, not dictating, because HR lags
   and drifts.
3. **Build the run ladder.** Lay the eight runs out as a *descending* per-km band,
   not a flat line: Runs 1–2 at target (not under it), middle runs drifting slower
   as fatigue accumulates, final runs (post-lunge, pre/post wall balls) the
   slowest. Give each run a target *band*, not a single number.
4. **Budget station fatigue cost.** For each station, set a target time and then
   *carry its tax onto the next run* — plan the post-sled and post-lunge runs slow
   for the first 100–200 m, and coach the athlete not to fight the deadness.
5. **Set station target times.** Give each of the eight stations a repeatable-effort
   target (paced to leave the legs able to run, not to failure), with a wall-ball
   end-game broken into planned sets before failure.
6. **Set transition targets.** Give each roxzone a target range as an *assumption*
   to be measured, and decide walk-vs-run per transition (recover more after sleds
   and lunges).
7. **Write the in-race decision rules.** Effort ceiling on Runs 1–3; early-split
   contingency (if early runs are faster than plan *at the planned effort*, bank
   nothing and hold effort; if slower, re-anchor to even effort and accept the new
   projection rather than chasing the original time); station discipline; wall-ball
   end-game.
8. **Name the failure points and adjustments.** Call out where the plan most
   likely breaks (over-cooking Runs 1–2, a hot sled, a wall-ball blow-up) and the
   pre-agreed adjustment for each.

## Required Inputs

- **Goal time or recent splits** — a target finish time, or recent race/simulation
  per-run and per-station splits. Without one of these the plan cannot be anchored;
  the skill asks for it and otherwise returns a clearly-labeled provisional plan
  built on stated assumptions.
- **Fresh run pace** — a current fresh 1 km (or recent 5 km) pace, the reference the
  compromised run bands are derived from. Without it the run ladder is generic.

## Optional Inputs

- The eight station times/loads and a roxzone transition estimate (sharpens every
  segment target; otherwise each is an assumption with a widened band).
- A compromised-decay estimate or recent compromised splits (sets how steep the
  fade ladder is).
- HR data and the athlete's HR behavior leaving stations (anchors the early ceiling).
- Division and season (affects wall-ball reps and loads — never assumed from
  memory; if load-dependent detail is needed, note it and route to
  `hyrox-division-and-rules-advisor`).
- Weeks to race, recent simulation results, course/venue notes (roxzone size),
  expected heat.
- Injury/niggle history (calibrates how conservative the late-race plan is).

## Non-Goals

- **Not finish-time prediction.** It does not run the deterministic model that
  decides whether a goal time is feasible or projects a finish from capacity → that
  is `hyrox-goal-time-and-race-predictor`. This skill takes a target/splits as
  input and plans how to *execute* it. (See the overlap rule in routing.)
- **Not the warm-up.** It does not build the pre-race timeline → route to
  `hyrox-race-day-warmup-builder`.
- **Not detailed fueling.** It points to fueling but does not write the carb/fluid
  protocol → route to `hyrox-fueling-and-hydration-planner`.
- **Not partner work allocation.** Doubles/relay splits and handoffs →
  `hyrox-doubles-strategy-builder` / `hyrox-relay-strategy-builder`.
- **Not training the fade.** Building compromised-running capacity is
  `hyrox-compromised-running-coach`; this skill only plans race day.
- **Not medical or rehab.** Pain or red-flag symptoms route to the safety
  framework below; it never diagnoses or programs around them.

## Default Output

A **race plan** in this contract:

1. **Goal & assumptions** — the goal time or splits used, the fresh pace, and every
   inferred value labeled with its effect on confidence.
2. **Projected finish range** — a *range*, not a point, with the confidence band
   widened where inputs are thin; never a guaranteed time.
3. **Segment targets table** — all eight runs (per-km target band) and all eight
   stations (target time), laid out as a descending ladder, with the post-station
   tax marked on the following run.
4. **Transition plan** — per-roxzone target range (labeled assumption), walk-vs-run
   decision per transition, chalk/strap/hydration notes.
5. **Fueling & hydration pointer** — a brief pointer to
   `hyrox-fueling-and-hydration-planner`, not a full protocol.
6. **Warm-up pointer** — a brief pointer to `hyrox-race-day-warmup-builder`.
7. **Failure points** — the most likely break points and the early-warning signs.
8. **Adjustment rules** — the in-race decision rules: effort ceilings, early-split
   contingencies, station discipline, wall-ball end-game.

## Safety and Scope

This is a coaching tool that plans race execution. It does not diagnose, treat
injuries, provide rehab, override a clinician, or guarantee a finish time or
placing. Apply [safety-and-referral](../../references/safety-and-referral.md)
proportionately: a routine pacing request needs only a one-line scope note; a
mentioned niggle gets a more conservative late-race plan and a stated regression.
Because pacing is a race-day, endurance, often-hot context, **heat-illness warning
signs** (dizziness, nausea, confusion, stopping sweating, clammy or very hot skin,
disproportionate fatigue in the heat) are explicitly in scope to flag: if the
athlete reports them, the plan stops and leads with a recommendation to stop racing
and seek medical help — pacing is never a reason to push through them. Chest pain,
syncope, severe shortness of breath, neurological symptoms, or other red flags
likewise stop the plan and lead with a referral to an appropriate medical
professional.

## Handling Incomplete Information

Pacing requests frequently arrive with a goal time but no station times, or splits
but no fresh pace. Always return a clearly-labeled **provisional** plan from what
exists, naming each gap. Where a station time or transition target must be assumed,
label it as an assumption, widen the band, and show the math in prose so the
athlete can audit it — never invent a confident split for an athlete you have no
data on. Ask only for the fields that materially change the plan: a fresh pace and
any recent splits usually do; exact HR usually does not. If the request asks
whether a goal time is *achievable* (a prediction), say that is the predictor's job
and route there rather than implying a guarantee here. If inputs conflict (e.g. a
goal time far faster than recent splits support), surface the tension rather than
silently picking one.

## Related Skills and Routing

- **Finish-time prediction / feasibility** → `hyrox-goal-time-and-race-predictor`.
  Overlap rule: if the question is *"can I / will I do this time, what finish does
  my capacity project"* — a forward prediction from fitness — it belongs there; if
  the question is *"given this target, how do I run each segment, what are my
  per-km and station targets and my in-race rules"* — execution of a target — it
  belongs here. The natural chain is predict first, then pace: the predictor sets
  a realistic target and segment estimates, this skill turns them into an
  executable plan with effort ceilings and decision rules.
- **Pre-race warm-up timeline** → `hyrox-race-day-warmup-builder`.
- **Detailed fueling/hydration protocol** → `hyrox-fueling-and-hydration-planner`.
- **Training the fade / compromised running** → `hyrox-compromised-running-coach`
  (that builds the capacity; this plans the race).
- **Roxzone transition technique in depth** → `hyrox-roxzone-and-transition-strategist`
  (this skill sets transition *targets* within the race plan; that skill drills the
  transition *execution* and route awareness).
- **Division/wall-ball reps and loads** → `hyrox-division-and-rules-advisor`
  (never assumed from memory).
- For broad or multi-part requests, start at `hyrox-pack-router`.
