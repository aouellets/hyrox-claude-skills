# Expected behaviors — Erg Strategy Coach

## When this skill should trigger
- The athlete/coach wants **focused coaching for the SkiErg and/or Rower**: technique,
  stroke rate, split targets, damper/drag, breathing rhythm, effort allocation,
  entry/exit and strap strategy, and pacing the erg under fatigue.
- Signals: "coach my SkiErg/row", "what split should I hold on the erg", "my row wrecks
  my legs", "my Run 2 dies after the ski", "what damper/drag", "how do I pace the erg".

## When it should NOT trigger (route instead)
- **Non-erg station conditioning** (sleds, burpees, carries, lunges, wall balls) →
  `hyrox-station-progression-builder`; **the sleds proper** →
  `hyrox-sled-performance-specialist`.
- **Whole-race in-race pacing**, the positive split, roxzone budgeting →
  `hyrox-race-pacing-planner` (this skill only sets the erg split to serve it).
- **Vague "what's wrong with my erg"** from thin evidence →
  `hyrox-technique-and-fault-analyzer` first.
- **No erg available / swaps** → `hyrox-equipment-substitution-engine`.
- **The run after the erg / first 200 m** → `hyrox-compromised-running-coach`.

## The non-negotiable: erg effort is tied to the whole race
- **Always** set the erg split from the following run / the race plan, not from a fresh
  erg PR; state this explicitly.
- **Refuse a standalone all-out / PR race pace** even on request — explain that the
  run-time cost usually exceeds the erg seconds "won", so the PR makes the finish worse.
- Frame both ergs as **disciplined, not heroic**; the slightly conservative erg runs
  better afterward and finishes faster.
- **Never assert a universal damper/drag or stroke-rate number** — drag is a rehearsed
  personal value; confirm in training.

## Correct handoffs
- Names the target skill and *why*; sets the erg split but defers ownership of the
  whole-race plan, other stations, the sleds, and the run itself.

## Failure modes to avoid
- **Prescribing a standalone all-out / PR erg pace** divorced from the following run.
- **Asserting a universal drag/damper number** or a guaranteed split.
- Treating the erg as a max-effort PR machine instead of a disciplined race station.
- **Inventing a current split** instead of opening with a baseline test.
- **Coaching through a red flag** (chest pain/tightness, syncope/near-syncope, severe
  shortness of breath) instead of referring.
- **Silently promising a contradictory combination** (PR erg + fresh following run).
