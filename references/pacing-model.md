# Pacing Model

How to execute the eight runs and eight stations as one continuous effort. The
governing idea is **even effort, not even pace**: because the legs and lungs
degrade across the race, a flat target pace on paper produces a positive split in
practice, and trying to hold a fixed pace late forces a blow-up
(see [race-structure](race-structure.md) and
[compromised-running](compromised-running.md)).

The deterministic split math lives in **`lib/goal-time-model.ts`**, which
projects per-run and per-station times from a fresh pace, a compromised-decay
estimate, eight station times, and roxzone transition time. The planned-vs-actual
decay analysis lives in **`lib/split-analysis.ts`**. This reference is the
coaching model those files implement; it does not restate their formulas.

## Even effort vs even pace

- **Even pace** holds the same per-km time on every run. It looks clean on paper
  but ignores the fade and almost always ends in a death-march final third.
- **Even effort** holds the same *RPE/HR* across the race and accepts that the
  resulting pace drifts slower run by run. This is the model to plan around.
- The result of even effort is an expected **positive split**: later runs are
  slower than earlier ones, with the largest drops after the highest-cost
  stations (sleds, sandbag lunges).

## Run-time drift across the eight runs

Plan the runs as a descending sequence, not a flat line:

- Runs 1–2 are the freshest; the temptation is to bank time. Resist it — pace
  these *at* target, not under it, so the early ergs and sleds do not get done at
  an effort that wrecks the back half.
- The middle runs drift slower as station fatigue accumulates.
- The final runs (post-lunge, pre/post wall balls) are the slowest; protect
  enough reserve to keep them running rather than walking.

Set a per-km target band for each run rather than one number, and a per-station
target time, derived from the athlete's data via `lib/goal-time-model.ts`. Where
the data is missing, substitute a labeled assumption and widen the band rather
than inventing precision ([coaching-principles](coaching-principles.md), §9).

## Effort references

- **RPE** is the always-available currency: roughly a sustainable "comfortably
  hard" ceiling (~RPE 7–8) on the runs early, climbing as the race goes on while
  the *pace* falls. Stations are paced to a repeatable effort, not to failure.
- **HR**, when the athlete trains and races with it, can anchor the early-race
  effort ceiling — but HR lags and drifts (cardiac drift, heat), so it informs
  rather than dictates, especially late.
- **Transition targets.** The roxzone is real, measurable time; give each
  transition a target range and treat it as trainable
  ([transition-strategy](transition-strategy.md)).

## How station fatigue costs the next run

Each station leaves a "tax" on the run that follows — largest after the sleds and
the sandbag lunges, smaller after the ergs and farmers carry. The pacing plan
budgets for this: the post-sled run is *planned* slow for the first 100–200 m and
the athlete is coached not to fight it ([compromised-running](compromised-running.md)).
This per-station decay is exactly what `lib/goal-time-model.ts` parameterizes and
what `lib/split-analysis.ts` checks planned against actual.

## In-race decision rules

Give the athlete a few simple, pre-agreed rules so decisions are not made on a
cooked brain mid-race:

- **Effort ceiling.** Never exceed the agreed early-race RPE/HR ceiling on Runs
  1–3, even if it feels easy — the cost is deferred, not avoided.
- **Early-split contingency.** If the early runs are coming in *faster* than plan
  at the planned effort, hold effort and bank nothing extra; if they are *slower*
  than plan at the planned effort, do not chase the original time — re-anchor to
  even effort and accept the new projection.
- **Station discipline.** Stations are paced to leave the legs able to run; a hot
  station that forces a walk afterward is a net loss.
- **Wall-ball end-game.** Break the final station into planned sets before failure
  rather than going until forced to stop.

## Cross-references

- The fade as a trainable skill: [compromised-running](compromised-running.md)
- Station-by-station cost: [station-taxonomy](station-taxonomy.md)
- Roxzone time: [transition-strategy](transition-strategy.md)
- Rehearsing pacing: [simulation-design](simulation-design.md)
- Format and divisions: [race-structure](race-structure.md)
