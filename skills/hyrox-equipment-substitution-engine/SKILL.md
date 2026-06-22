---
name: Equipment Substitution Engine
description: Use when a HYROX athlete or coach needs to train a station without the matching equipment and wants substitutions that preserve the closest feasible station-specific demand — joint action, force orientation, contraction type, energy-system load, grip demand, and compromised-running transfer — and provides the target station, available equipment, and the constraint. Returns each swap with what it PRESERVES and what it FAILS to reproduce, because gym kit rarely matches race resistance (especially sled friction). Not station conditioning programming (route to hyrox-station-progression-builder) and not sled-specific deep coaching (route to hyrox-sled-performance-specialist) rather than doing them here; never equates a gym substitute with race resistance.
category: stations
risk_level: low
requires_current_rules: false
---

# Equipment Substitution Engine

Produce equipment substitutions for the 8 HYROX stations when the athlete lacks the
matching kit, choosing the swap that preserves the **closest feasible
station-specific demand** ([station-taxonomy](../../references/station-taxonomy.md),
[sled-training](../../references/sled-training.md),
[compromised-running](../../references/compromised-running.md)). Every substitution is
evaluated on six demand axes: **joint action, force orientation, contraction type,
energy-system load, grip demand, and compromised-running transfer.**

> **A substitute is an approximation, never an equivalence — stated for every swap.**
> Gym kit rarely reproduces race resistance, and **sled friction is the worst case**:
> turf, flooring, sled model, friction/wear, calibration, and distance change the
> effective resistance, so no gym implement at any load is "the same as" the race
> sled. This skill **always states what a swap PRESERVES and what it FAILS to
> reproduce**, and **refuses to equate any gym substitute with race resistance**. Race
> loads and rep counts are season- and division-dependent and are never asserted from
> memory.

## Workflow

1. **Establish the target, the kit, and the constraint.** Get the **target station**,
   the **available equipment**, and the **constraint** (no sled, home gym, travel, an
   injury limiting a movement, etc.). The constraint shapes which axes can be preserved.
2. **Name the station's demand on the six axes.** From the taxonomy, state the target
   station's joint action, force orientation (horizontal vs vertical), contraction type
   (concentric/eccentric/isometric emphasis), energy-system load, grip demand, and how
   it compromises the following run. This is the spec the swap is judged against.
3. **Select the closest feasible substitute(s).** Choose the available-equipment option
   that preserves the most important axes for that station (e.g. for sled push:
   horizontal leg drive and energy-system load; for farmers carry: grip + postural
   isometric endurance; for wall balls: the squat-to-throw cycle and energy cost).
4. **State PRESERVES vs FAILS for each swap — always both.** Explicitly list which axes
   the substitute reproduces and which it does not. Never present a swap as
   equivalent. For anything sled-related, state plainly that **friction/turf/model
   variance means no swap reproduces race resistance**, and widen any comparison.
5. **Prescribe the substitute concretely.** Give sets, reps, distance/time, RPE, rest,
   and a progression criterion in **relative, effort-based** terms — never tied to an
   assumed race weight. Note that loads must be re-calibrated by feel.
6. **Flag the residual gap and how to close it.** Say what the athlete still cannot
   train with this kit (e.g. true sled friction, exact race resistance), and what to do
   when the real implement is available (hand off to the station/sled skill for the
   real coaching).
7. **Tie the swap back to the race, not the gym.** Where the station compromises the
   following run, pair the substitute with a run segment so the swap still trains the
   compromised-running transfer it would otherwise lose.

## Required Inputs

- **Target station** — which of the 8 stations is being substituted; the demand axes
  and the most-important-to-preserve axis differ by station.
- **Available equipment** — what the athlete actually has (and where: home, travel,
  commercial gym). Determines which substitutes are feasible.
- **The constraint** — why a swap is needed (no sled, no erg, travel, an injury limiting
  a movement). Shapes which axes can be preserved and which must be sacrificed.

## Optional Inputs

- The athlete's relevant capacity on the available kit (to set the dose).
- Weeks to race and how often they'll be without the real equipment (temporary travel
  swap vs a months-long home-gym plan changes the ambition).
- Injury/movement limitations (so the swap also respects what the athlete can't do).
- The current season/division (so any race load/rep count is flagged as
  registry-dependent, never asserted).
- Whether a run can be attached (to preserve compromised-running transfer).

## Non-Goals

- **Not station conditioning programming.** Building the full progression, periodized
  volume, or a station block once the equipment exists → route to
  `hyrox-station-progression-builder`. This skill answers "what do I do *instead*",
  not "build my station block".
- **Not sled-specific deep coaching.** Push/pull mechanics, rope management,
  repeatability with a real sled → `hyrox-sled-performance-specialist` (this skill
  provides the no-sled swap and its limits, then hands off).
- **Not an asserted race resistance, load, or rep count.** It will **not** equate a
  gym substitute with race resistance, and **never** asserts a season/division load or
  rep count from memory → `hyrox-division-and-rules-advisor`.
- **Not fault diagnosis** → `hyrox-technique-and-fault-analyzer`; **not whole-race
  pacing** → `hyrox-race-pacing-planner`.
- **Not medical or rehab**, and **never** a guarantee.

## Default Output

1. **Target, kit & constraint** — the station, what's available, the constraint, and
   the upfront statement that a substitute approximates and never equals race demand.
2. **Station demand spec** — the six axes for the target station (joint action, force
   orientation, contraction type, energy-system load, grip demand, compromised-run
   transfer), with the most-important-to-preserve axis named.
3. **Substitution(s) with PRESERVES / FAILS** — for each swap, an explicit two-column
   read: what it reproduces and what it does not. Sled swaps carry the friction/turf
   caveat and a widened comparison.
4. **Prescription** — sets, reps, distance/time, RPE, rest, progression criterion, in
   relative effort terms; loads never tied to an assumed race weight; re-calibrate by
   feel.
5. **Residual gap & close-out** — what still can't be trained on this kit, and the
   hand-off to the real station/sled skill when the equipment exists.
6. **Race tie-in** — the attached run segment (where relevant) to keep the
   compromised-running transfer.
7. **Safety & assumptions** — proportionate scope note; every assumed value labeled.

## Safety and Scope

This is a coaching tool for substituting equipment. It does not diagnose, treat
injuries, provide rehab, override a clinician, or promise injury prevention or an
outcome. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately: a
routine swap needs a one-line scope note. When the *constraint itself is an injury*,
stay within coaching — offer a swap that respects the limitation and route any
diagnosis or rehab to the appropriate professional, never working around a red-flag
symptom. Heavy eccentric substitutes (loaded carries, lunges, improvised sled drags)
carry the usual overuse and (rarely) rhabdomyolysis risk when unaccustomed — progress
gradually and route disproportionate pain, swelling, or dark urine to a professional.

## Handling Incomplete Information

Substitution requests often arrive without the full kit list or the constraint. Always
return a clearly-labeled **provisional** swap and name each gap. **If the available
equipment is missing, ask what they have** before committing to a swap — the feasible
substitute depends entirely on it. If capacity is missing, prescribe in relative effort
terms and note a baseline is needed for exact doses. **Never assert a race resistance,
load, or rep count from memory**, and **never equate a gym substitute with race
resistance** — for sleds especially, state that friction/turf/model variance makes any
equivalence false and widen the comparison. Ask only for the fields that change the
swap (station, equipment, constraint). If inputs conflict (e.g. "make my gym sled at
80 kg identical to the race"), surface it and refuse the equivalence rather than
quietly obliging.

## Related Skills and Routing

- **Building the station block once equipment exists** →
  `hyrox-station-progression-builder` (this skill is the *instead-of*, that one is the
  *build*).
- **Real-sled push/pull coaching** → `hyrox-sled-performance-specialist` (this skill
  provides the no-sled swap and its limits, then hands off).
- **The season/division load, rep count, or standards** →
  `hyrox-division-and-rules-advisor` (this skill never asserts race resistance/load).
- **The erg swap, then real erg coaching** → `hyrox-erg-strategy-coach`; **the wall
  ball swap, then completion planning** → `hyrox-wall-ball-completion-planner`.
- **"Why is this movement breaking down"** → `hyrox-technique-and-fault-analyzer`;
  **whole-race pacing** → `hyrox-race-pacing-planner`.
- **Preserving the compromised-run transfer** pairs with
  `hyrox-compromised-running-coach`.
- For broad or multi-part requests, start at `hyrox-pack-router`.
