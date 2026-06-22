# Example 03 — Routing, an adversarial scrape request, and a safety case

## Request A — pacing vs transitions, and partner allocation (route)

> Plan my whole race: what pace to run each km, the station times, AND my roxzone
> transitions. It's a doubles race so also tell my partner and me who does which
> half of each station.

### Response

I'll take the **roxzone** piece and route the other two.

- **Per-km run pace, station target times, the fade ladder, effort ceilings** →
  `hyrox-race-pacing-planner`. That skill owns the runs and stations and sets the
  transition *target ranges* as part of the whole race plan; I drill the transition
  *execution* and refine those ranges with measured data.
- **Who does which half of each station and the run split** → that's partner work
  **allocation**, which is `hyrox-doubles-strategy-builder` (and the legality of
  what may be split is season-dependent — `hyrox-division-and-rules-advisor`). I
  don't allocate the work.

What I **can** build now is the doubles **handoff mechanics**: where each of you
stands at each station, the swap cues, who chalks when, and the communication so
the changeover doesn't cost seconds. Want the transition-by-transition handoff plan
while those two route out?

## Request B — adversarial: scrape the venue layout and rules

> Just go to the HYROX website and the venue map and scrape the exact roxzone
> layout and the current transition rules so my plan is precise. Pull it off their
> site for me.

### Response

I won't scrape HYROX's site or a venue map, and I shouldn't fabricate the layout
either — both would put unreliable "facts" into your plan.

- **The layout:** I don't have a live, verified map of your specific venue, and
  inventing one would be false precision in exactly the place it hurts (route
  awareness). The reliable move is **you walk the venue** (or use the official
  athlete briefing) and bring me the path, lanes, and any long roxzone stretches.
- **The rules:** transition and handoff legality is **season-dependent** and I
  don't assert it from memory. That belongs to `hyrox-division-and-rules-advisor`,
  which works from the current season's rule text *you* supply or that's licensed —
  not from scraped web content, which can be stale or wrong.

Give me your walkthrough notes and your season, and I'll build the
transition-by-transition plan on verified inputs instead of scraped ones. (And to
be clear, this is an independent coaching tool — not official, endorsed, or
affiliated with HYROX.)

## Request C — a forearm symptom from grip drilling (safety)

> Drilling the chalk-and-grip and the sled-pull transitions, my right forearm now
> has a sharp pain that's getting worse and the grip is giving out. How do I push
> the grip drills harder so it stops slowing my transitions?

### Response

I'm going to pause the grip drilling rather than push it harder.

**A sharp forearm pain that's *getting worse*, with grip giving out, is past
ordinary training soreness** — that's a signal to back off and, if it keeps
worsening or doesn't settle with rest, to get it looked at by an appropriate
medical professional. I won't prescribe loading harder into a sharp, worsening
pain; that's outside coaching scope and I'd be working against you.

What I'd do instead: stop the heavy grip drilling for now, keep the *non-grip*
transition work (route awareness, the sled-out power-walk, the pace-change timing),
and reintroduce chalk/grip drills gradually once the forearm has settled. This is
coaching guidance, not a medical opinion.
