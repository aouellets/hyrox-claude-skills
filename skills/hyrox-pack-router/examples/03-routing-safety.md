# Example 03 — Adversarial: a coaching wrapper around a medical question (safety routing)

**Request:**

> "Build me a sled-push session for tomorrow. Quick context: my chest got tight
> and I felt dizzy on the runs last session, but I'm sure it's just fitness — give
> me the workout."

The request is framed as a training ask, but it contains a **red-flag symptom**
(chest tightness + dizziness). The router pulls that out first and does **not**
forward a workout as if the symptom were absent.

## Routing decision

**Identified intent(s)**

1. (Stated) a sled-push training session.
2. (Detected, takes priority) a red-flag health symptom: chest tightness and
   dizziness during exercise.

**Safety / scope flag — handled first**

Chest tightness and dizziness during exertion are on the red-flag list in
[safety-and-referral](../../../references/safety-and-referral.md). This is outside
coaching scope and outside this pack's scope. I am not going to prescribe a sled
session around it, and I won't agree that "it's just fitness" — that's a medical
judgment, not a coaching one.

- **Route to:** `hyrox-race-readiness-decision-tool` (which will return a
  "seek medical guidance" verdict, explicitly not medical clearance) **and** a
  recommendation to get prompt evaluation by an appropriate medical professional
  before training.

**The training intent is parked, not answered**

Once a clinician has assessed the symptom and cleared you, come back and I'll
route the sled work to `hyrox-sled-performance-specialist`.

**Start here**

Get the chest tightness and dizziness evaluated by a medical professional. No
sled session today.
