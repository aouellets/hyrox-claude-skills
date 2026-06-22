---
name: Sled Performance Specialist
description: Use when a HYROX athlete or coach wants focused coaching for the sled push and sled pull — strength base, starting mechanics, body angle and posture, hand position, footwork, acceleration versus sustained drive, turns, pulling posture, rope management, hand-over-hand rhythm, grip endurance, and repeatability across the race — and provides current sled performance, training surface, and equipment. Returns sled-specific technique and conditioning that accounts for turf, flooring, sled model, friction, calibration, and training distance. Not general conditioning for non-sled stations (route to hyrox-station-progression-builder) and not equipment substitution when no sled is available (route to hyrox-equipment-substitution-engine) rather than improvising a swap here; never equates gym sled load with race resistance.
category: stations
risk_level: low
requires_current_rules: false
---

# Sled Performance Specialist

Deliver focused coaching for the **two sled stations — sled push and sled pull** —
the stations that most flood the legs and do the most damage to the run that
follows ([sled-training](../../references/sled-training.md),
[compromised-running](../../references/compromised-running.md)). This covers
strength base, starting mechanics, body angle/posture, hand position, footwork,
acceleration vs sustained drive, and turns on the **push**; pulling posture, rope
management, hand-over-hand rhythm, and grip endurance on the **pull**; and
**repeatability** — delivering a strong but sustainable effort inside a 60–90+
minute race and still being able to run.

> **Gym sled load is NOT race resistance — stated up front and applied
> throughout.** The plate count on a gym sled tells you almost nothing about what
> the athlete will feel on race day. **Turf type, flooring, the sled model,
> friction and wear, calibration, and the training distance all change the
> effective resistance.** A sled that feels light on one surface is brutal on
> another at the same plate count. This skill **never equates gym load with race
> resistance without that qualification**, and **never asserts a race sled weight
> from memory** — race loads are season- and division-dependent and come from the
> rules registry. When projecting, sled resistance is treated as a *labeled
> assumption* and the confidence band is widened.

## Workflow

1. **Establish the sled context.** Get the athlete's current sled performance
   (push/pull time, the load and surface they train on) and, critically, **the
   training surface, flooring, and sled model**. State explicitly that this gym
   context does not translate directly to race resistance.
2. **Identify push vs pull limiters.** Decide whether the limiter is strength,
   mechanics (posture/footwork/start), pacing (surge-and-stall), grip endurance
   (pull), rope management (pull), or repeatability — that sets the emphasis.
3. **Coach the push mechanics.** Starting mechanics (build tension, drive the first
   steps hard to beat inertia, then settle), body angle/posture (low, long line
   hands-to-heels, arms as struts), hand position (height to athlete's lean),
   footwork (short, choppy, powerful, continuous), acceleration vs sustained drive
   (hard out of starts/turns, controlled continuous between), and turns as planned
   micro-breaks.
4. **Coach the pull mechanics.** Braced anchored low position (legs and back, not
   just arms), rope management as a rehearsed skill, smooth continuous
   hand-over-hand rhythm over big jerky pulls, and grip endurance to last the
   distance.
5. **Build strength as background, repeatability as the target.** Prescribe a
   strength block (heavier, lower volume — squat/leg press/short heavy sled for the
   push; rows/carries/holds for the pull) as *necessary background*, then the
   **specific repeatability work**: multiple race-effort sled efforts, ideally with
   the run attached (sled-to-run bricks), so the athlete rehearses pacing the sled
   to leave something for the run.
6. **Prescribe in relative, surface-aware terms.** Give loads as ranges, RPE,
   distances, rest, and reps — and tie load to *effort and the training surface*,
   never to an assumed race weight. Note that the same prescription must be
   re-calibrated by feel on a different surface.
7. **Set proficiency tests, benchmarks, and retests.** Define a measurable sled
   test (e.g. repeated efforts at a target time off a fixed surface), a
   race-relevant benchmark (sled effort + controlled run), and a **retest date**.

## Required Inputs

- **Which sled (push, pull, or both)** — the limiter sets differ.
- **Current sled performance** — a push/pull time, the training load, or at least a
  description of where it breaks down (stall, grip failure, slow run after). Used
  to set the starting point; if absent, the skill prescribes a baseline test.
- **Training surface / flooring / sled model** — because this changes the effective
  resistance, the skill asks for it and refuses to translate gym load to race
  resistance without it.

## Optional Inputs

- The athlete's relevant strength numbers (squat, leg press, rows) for the strength
  block.
- Grip endurance markers (dead-hang time, farmers-carry distance before a drop) —
  most relevant to the pull.
- Weeks to race and the broader training schedule (for periodization and
  concurrent-training management).
- Observed compromised-run pace off the sled (drives the sled-to-run bricks).
- The current season/division — so any race load is flagged as needing the rules
  registry, never asserted.
- Injury/niggle history (calibrates eccentric/loading progression and regressions).

## Non-Goals

- **Not general conditioning for non-sled stations.** Ski-erg, row, burpees,
  carries, lunges, wall balls → route to `hyrox-station-progression-builder`.
- **Not equipment substitution.** If the athlete has **no sled**, this skill does
  not improvise a swap → route to `hyrox-equipment-substitution-engine`; it then
  coaches the sled work proper once an implement is available.
- **Not fault diagnosis from a bare description** → `hyrox-technique-and-fault-analyzer`
  first when the issue is "why is this breaking down" with thin evidence.
- **Not in-race pacing across the whole race or full simulations** →
  `hyrox-race-pacing-planner` / `hyrox-simulation-builder` (this skill prescribes
  sled-to-run bricks, not the whole race plan).
- **Not the standalone running engine** → `hyrox-running-development-plan`;
  **the compromised run itself** → `hyrox-compromised-running-coach`.
- **Not medical or rehab**, and **never** an asserted race sled weight or a
  guarantee.

## Default Output

1. **Sled context & resistance caveat** — push/pull, current performance, training
   surface/flooring/sled model, and an explicit statement that gym load ≠ race
   resistance with the factors that change it.
2. **Limiter read & assumptions** — strength vs mechanics vs grip vs pacing vs
   repeatability; every assumed value labeled; widened band on anything
   surface-dependent.
3. **Push coaching** — starting mechanics, posture/body angle, hand position,
   footwork, acceleration vs sustained drive, turns (as applicable).
4. **Pull coaching** — pulling posture, rope management, hand-over-hand rhythm,
   grip endurance (as applicable).
5. **Strength block** — the background strength work (loads-as-ranges, RPE, sets,
   rest), framed as background not the target.
6. **Repeatability & sled-to-run prescription** — race-effort sled efforts with the
   run attached: load tied to effort/surface, distance, target compromised run
   pace, rest, RPE, reps; progression criterion and regression on each.
7. **Proficiency test, race benchmark & retest** — the measurable test, the
   sled-plus-run benchmark, and the retest date; race load flagged as
   registry-dependent.
8. **Integration & adjustment** — how the sled work sits in the week, the
   surface-recalibration note, and the referral note.

## Safety and Scope

This is a coaching tool for the sleds. It does not diagnose, treat injuries,
provide rehab, override a clinician, or promise injury prevention. Apply
[safety-and-referral](../../references/safety-and-referral.md) proportionately:
routine sled work needs a one-line scope note; a niggle gets a conservative dose
and a regression. Heavy sled work is high-effort and, when unaccustomed, carries
overuse and (rarely) **rhabdomyolysis** risk from disproportionate exertional/
eccentric load — progress load and volume **gradually** and route severe
disproportionate muscle pain/swelling, profound weakness, or dark/cola-colored
urine, plus chest pain, syncope, or other red flags, to a medical professional
rather than training through them.

## Handling Incomplete Information

Sled requests often arrive without the training surface or a current number. Always
return a clearly-labeled **provisional** plan and name each gap. **If the training
surface/sled model is missing, ask for it** before giving any load guidance, and
state that without it gym load cannot be related to race resistance at all. If the
current sled performance is missing, open with a **baseline test** rather than
inventing a time or load. Never assert a race sled weight from memory — it is
season- and division-dependent; keep prescriptions in relative, effort- and
surface-based terms and label any projected resistance as an assumption with a
widened band. Ask only for the fields that change the work (which sled, a current
reference, the surface). If inputs conflict, surface it.

## Related Skills and Routing

- **Non-sled station conditioning** → `hyrox-station-progression-builder` (this
  skill owns only the two sleds; that skill owns the other six and sequences sled
  work into a broader block).
- **No sled available / swaps** → `hyrox-equipment-substitution-engine` (then
  return here once an implement exists).
- **"Why is my sled breaking down" from thin evidence** →
  `hyrox-technique-and-fault-analyzer` first.
- **The run after the sled / first 200 m** → `hyrox-compromised-running-coach`;
  **the aerobic engine** → `hyrox-running-development-plan`.
- **Race-day sled pacing within the whole race** → `hyrox-race-pacing-planner`;
  **sparse full simulations** → `hyrox-simulation-builder`.
- **Current season's sled load/standards** → `hyrox-division-and-rules-advisor`
  (this skill never asserts a race weight itself).
- For broad or multi-part requests, start at `hyrox-pack-router`.
