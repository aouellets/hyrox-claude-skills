# Station Taxonomy

A demand profile for each of the 8 HYROX stations: the energy system and
movement demand, the common limiters, what "good" looks like, and how the
station interacts with the run before and after it. The standard station order is
in [race-structure](race-structure.md). **Loads, distances, and rep counts are
season- and division-dependent and are never hardcoded here** — they come from
the rules/version registry, not from memory.

The interactions matter as much as the stations: the order creates sequence
effects (grip-heavy work before lunges, sleds before a run, wall balls last on
cooked legs) that isolated station training misses.

## 1. SkiErg (~1000 m)

- **Demand.** Aerobic/glycolytic; full-body pulling driven by lats, triceps,
  trunk, and a hip-hinge "crunch"; modest grip.
- **Limiters.** Pacing it too hard early; relying on arms instead of the hinge;
  inefficient stroke length.
- **Good looks like.** Strong hinge-driven pull, consistent splits, leaving with
  breathing controllable. See [erg-strategy](erg-strategy.md).
- **Run interaction.** First station of the race; sets the tone. Overcooking it
  taxes the upper body and breathing for Run 2.

## 2. Sled Push (~50 m)

- **Demand.** Alactic/glycolytic max-effort leg drive; horizontal force; quads,
  glutes, calves; low grip but high systemic cost.
- **Limiters.** Standing too tall; stop-start instead of continuous drive; gassing
  the legs in one surge.
- **Good looks like.** Low body angle, continuous controlled drive, planned
  micro-breaks at turns. See [sled-training](sled-training.md).
- **Run interaction.** One of the two worst leg-flooders; the following run needs
  deliberate pace control and cadence restoration ([compromised-running](compromised-running.md)).

## 3. Sled Pull (~50 m)

- **Demand.** Glycolytic; horizontal pulling; posterior chain, lats, **grip**;
  rope management and rhythm.
- **Limiters.** Grip fatigue; inefficient hand-over-hand rhythm; poor anchored
  position; rope tangling.
- **Good looks like.** Braced low position, smooth continuous hand-over-hand,
  grip that lasts the distance. See [sled-training](sled-training.md).
- **Run interaction.** Loads legs and grip; the following run is again a
  high-fade run.

## 4. Burpee Broad Jumps (~80 m)

- **Demand.** Glycolytic, high systemic cost; full-body; repeated transitions to
  and from the floor plus a horizontal jump.
- **Limiters.** Pacing (going anaerobic early); inefficient floor mechanics;
  short jumps wasting reps; breathing spiking.
- **Good looks like.** A sustainable rhythm, efficient up-down, jump distance
  that minimizes total reps, breathing kept controllable.
- **Run interaction.** Comes after Run 4; leaves the athlete in oxygen debt, so
  the following run needs breathing recovery before pace.

## 5. Rowing (~1000 m)

- **Demand.** Aerobic/glycolytic; leg-drive-led full-body pull; trunk and grip.
- **Limiters.** Over-pulling with arms; rushing the recovery; pacing too hard;
  drag/damper set wrong for the athlete.
- **Good looks like.** Legs-then-back-then-arms sequencing, controlled rate,
  even splits, leaving with something in reserve. See [erg-strategy](erg-strategy.md).
- **Run interaction.** Mid-race; legs are taxed by the drive, so the next run
  fades.

## 6. Farmers Carry (~200 m)

- **Demand.** Loaded carry; **grip** and trunk dominant; postural endurance;
  some leg load.
- **Limiters.** Grip failure forcing drops; poor posture; walking too cautiously
  (lost time) or too fast (early grip blow-up).
- **Good looks like.** Tall braced posture, brisk continuous pace, grip planned
  to last the distance ideally without a drop.
- **Run interaction.** Precedes lunges; grip and trunk fatigue carry into the
  sandbag work that follows.

## 7. Sandbag Lunges (~100 m)

- **Demand.** Loaded unilateral leg work; heavy eccentric quad/glute load;
  balance and trunk; the bag taxes the upper back.
- **Limiters.** Quad fatigue; balance/knee-tracking under load; the eccentric
  cost accumulating into late-race leg death.
- **Good looks like.** Consistent stride length, controlled descent, knee
  tracking, steady cadence without stalling.
- **Run interaction.** Heavily floods the legs near the end of the race; the
  run after is one of the hardest of the day. Heavy unaccustomed eccentric load
  is also the classic rhabdomyolysis context — see [safety-and-referral](safety-and-referral.md).

## 8. Wall Balls (reps vary by division)

- **Demand.** Repeated loaded squat-to-throw; quads, shoulders, full-body
  coordination; high rep count.
- **Limiters.** Squat depth/target standards (no-reps cost time); pacing into
  failure; legs already cooked from the whole race; shoulder fatigue.
- **Good looks like.** Consistent depth and target, planned rep sets with brief
  breaks rather than going to failure, an efficient catch-into-squat rhythm.
- **Run interaction.** The final station, performed on the most fatigued legs of
  the day; no run follows, so the strategy is to finish without a failure spiral.

## Using this taxonomy

Map the athlete's intake ([athlete-intake](athlete-intake.md)) station
proficiencies onto these limiters to find where the time-loss profile sits, then
prioritize. The energy-system and sequence notes feed the
[pacing-model](pacing-model.md) (which stations cost the following run most) and
[simulation-design](simulation-design.md) (which bricks to rehearse).
