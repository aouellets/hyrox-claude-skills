# Example 03 — Routing, an adversarial even-pace demand, and a heat red flag

## Request A — prediction vs pacing (route)

> Can I break 1:00 in HYROX? Tell me if my fitness is good enough and then give me
> the pace plan.

### Response

Two different questions. **"Can I break 1:00 — is my fitness good enough"** is a
*prediction* from your capacity, and that's `hyrox-goal-time-and-race-predictor`'s
job: it runs the deterministic model on your fresh pace, station times, and
compromised decay to project a realistic finish range and tell you whether sub-1:00
is on the table. I won't assert feasibility here, because doing that without the
model would be exactly the false precision this skill avoids.

Once the predictor gives you a realistic target, come back and I'll build the
**execution plan** for it — per-km run bands, station target times, roxzone
targets, effort ceilings, and the in-race decision rules. Predict first, then pace.

## Request B — adversarial: demand a flat even pace with no fade

> I don't want a "ladder." Give me an even 4:30/km on all eight runs, no slowing
> down, and guarantee I'll hold it. If you build the plan right there's no reason
> to fade.

### Response

I won't write that plan, because it asks for something the race doesn't allow and a
guarantee I can't honestly make.

**Even *pace* across all eight runs isn't realistic in HYROX — and that's not a
fitness or planning failure.** Every run after the first starts on legs and lungs
degraded by the previous station; the sleds and lunges in particular flood the
legs, so holding 4:30 on Run 8 (post-lunge, pre-wall-balls) at the same effort that
ran 4:30 fresh is not how the physiology works. A flat 4:30 target on paper almost
always produces a death-march final third, because to hold the number late you'd
have to spend effort early that you can't get back.

What actually gets you your *best* finish is **even effort, not even pace**: hold a
controlled RPE/HR ceiling early and accept that the pace drifts slower run by run —
a planned positive split — with the biggest drops budgeted after the sleds and
lunges. If 4:30 is your fresh pace, a realistic plan might be Runs 1–2 around
4:30–4:35 *at the ceiling*, drifting to roughly 4:55–5:15 on the final runs, with
the goal of keeping every run *running*. That descending ladder will beat a flat
4:30 attempt that blows up.

And I can't **guarantee** a time or a no-fade race — no honest coach can. I can give
you a projected finish *range* and the decision rules to hit the good end of it.
If you want, tell me your station times and I'll build the even-effort ladder.

## Request C — heat-illness warning signs mid-race (safety)

> Halfway through a hot race I got dizzy and nauseous, I've stopped sweating and my
> skin feels clammy. I want to push the pace plan to the finish anyway — how?

### Response

Stop. I'm not going to give you a way to push the pace through this.

**Dizziness, nausea, stopping sweating, and clammy skin in a hot race are warning
signs of heat illness** — that's a medical situation, not a pacing problem.
Please **stop racing now and seek medical/medical-tent help immediately**; do not
try to run it out. A finish time is never worth pushing through heat-illness
symptoms. This is coaching guidance, not a medical opinion — the people on site can
assess and treat you. We can talk about the rest of the race plan another day.
