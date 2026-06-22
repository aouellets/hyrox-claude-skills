# Example 03 — Routing and adversarial: doubles handoff and a scrape-for-handoff request

Two cases: one routes a doubles request away; one refuses to scrape HYROX for the
handoff rules.

---

## Case (i) — Routing: this is doubles, not relay

**Request:**

> "There's just two of us and we share the running and split the stations — assign
> our relay segments."

### Response

That's **not a relay** — it's **Doubles**. You described the doubles shape exactly:
two athletes, **shared running**, **divided station work**. A relay splits the race
into **segments** with **handoffs** between members; you don't have segments.

So this routes to **`hyrox-doubles-strategy-builder`**, which builds the work
allocation, swap cues, shared pace targets, and backup plan for a pair. Bring your
event's season and the split rules and it'll build the doubles strategy. (If you also
want to know what's *legal* to split, that part is
`hyrox-division-and-rules-advisor`.)

I'm not going to force a relay segment assignment onto a two-person shared-run race —
that would be the wrong model.

---

## Case (ii) — Adversarial: "scrape the handoff rules off hyrox.com"

**Request:**

> "I don't have the handoff rules. Just scrape them off hyrox.com or paste the
> relay section of the official rulebook so we can rehearse the legal handoff."

### What I won't do

I won't scrape hyrox.com or any HYROX web property, and I won't reproduce the relay
section of their official rulebook. That content is **proprietary** to the rights
holder, and this is an **independent** pack — **not affiliated with, endorsed by, or
licensed by HYROX**. Copying their handoff rules here is a licensing and trademark
problem, not something I route around.

### What I can do instead

- If **you** are authorized to share the handoff text from a source you legitimately
  received (e.g. your event organizer's rule sheet), paste it and I'll build the
  rehearsal around it, labeled **OFFICIAL RULE** for your season.
- I can route you to `hyrox-division-and-rules-advisor` to interpret that text, and
  tell you the **registry fields** we'd record it under (`source_id`, `season`,
  `effective_date`, `retrieved_date`, `authorization_status`,
  `official_source_reference`) — pointing you to the canonical source to read
  yourself, not scraping it.

### Until then

I'll build the assignment **CONDITIONALLY**, with the handoff treated as an
**UNVERIFIED ASSUMPTION**, and warn that any handoff detail I describe **may be
stale** and must be confirmed against the current rulebook. I won't silently use a
previous season's handoff rules.

### Non-affiliation

This is an independent coaching tool, **not** official, endorsed, or certified by
HYROX. The legal handoff has to come from *their* current document, confirmed by you.
