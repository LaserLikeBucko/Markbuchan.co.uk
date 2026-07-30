# Website optimization audit — authority positioning

Source material: Greg Faxon's "8-Step Website Optimization Checklist" (uploaded PDF) and his article "The 10 Best Coaching Websites" (gregfaxon.com/blog/coaching-websites), checked against the current markbuchan.co.uk build.

## The frame Faxon uses

Every winning coaching site on his list scores on three things: clarity (who you help and what problem you solve, inside five seconds), credibility (proof it's earned, not claimed), and a single call to action. The checklist breaks that into eight steps — traffic, usability, clarity, credibility, branding, copywriting, email opt-in CTA, consult CTA — and the four designers he interviewed name the same failure pattern from different angles: unclear copy, no site strategy, too many competing CTAs, not enough reason to come back.

## Where the current site already matches this

The homepage hero does the clarity job properly — "I help organisations see what's really driving behaviour beneath the surface" is a real hook, not the "unleash your potential" vagueness Faxon calls out. It segments by audience (leaders, teams, organisations) the way Faxon praises Amy Porterfield for doing, so visitors self-select instead of getting one generic pitch. There's one dominant CTA — the diagnostic conversation — repeated in the nav, hero, and audience cards, which is exactly the "one main way to work with me" discipline Jennie Lakenan describes as the fix for option-paralysis. And the page inventory already gives you the funnel shape Faxon's "5 pages every coaching site needs" implies: home, work-with-me (the bottom-funnel page), coaching (offer detail), about, resources/blog.

## Where the gap is, against "authority" specifically

**Credibility is the weak link.** Faxon's checklist treats credibility as three separate proof types — case studies with a real before/after narrative arc, endorsements (logos, quotes, credentials), and your own story as living proof. The site has "from the trenches" vignettes on a handful of pages (coaching, hidden-gap, the interview-trap blog post, the burnout page) but nothing that reads as a dedicated results/credibility hub the way Delivering Value — his pick for best executive coaching site — uses client headshots and a running count of people coached. The 01-identity credentials (architect of the 9 Principles of Leadership Agility, MSc dissertation on executive coaching ROI, one of the first Agile coaches in the UK) are strong and specific, but per 04-context and 05-rules, you undersell them by habit — they need a place on the site that isn't buried in prose on the about page. A dedicated results/case-studies page, or at minimum a consistent module reused across coaching, work-with-me, and leadership-alignment-diagnostic, would close this.

**Branding consistency has drifted.** CLAUDE.md documents the design system as near-black `#111110`, yellow `#ffff00`, red `#ff3131`. The current homepage (`app/page.tsx`, marked `HomeV2Page`) runs on a different palette entirely — `#EDE8DE` cream, `#1b4b80` navy, `#1C1B18` near-black — and the nav uses the same navy/cream system. Either the homepage is a newer direction that CLAUDE.md hasn't caught up to, or it's an unintentional fork. Faxon's "consistent branding" step (3-4 colours, 1-2 fonts, one vibe) matters more as you push an authority position — a visitor bouncing between a navy homepage and a yellow/red inner page reads as unfinished, not distinctive. Worth deciding which palette is canonical and updating either the code or CLAUDE.md to match, before building anything new on top of it.

**No visible email capture / lead magnet.** Faxon calls this the CTA people skip: most visitors aren't ready to book a call, but they'll trade an email for something useful. The free chapter and the Hidden Gap diagnostic are exactly the lead-magnet shape he describes (a quiz, in Patrice Washington's example), and they already exist as pages — but there's no newsletter opt-in visible in the footer or scattered through content pages the way he recommends. Given LinkedIn outreach is the current #1 priority per 04-context, an owned list is the thing that stops that traffic being algorithm-dependent later.

**Content-as-authority is thin relative to the ambition.** Faxon's "traffic" and "copywriting" steps both come back to the same thing: coaches who rank as authorities publish specific, usable content, not general advice. Resources/blog currently has three posts. Content Factory is already flagged in 04-context as the active #1 priority for exactly this reason — this audit doesn't change that priority, it just confirms the outside perspective agrees with the internal one.

**Consult booking mechanics.** Faxon prefers schedule-first (Calendly, which the site already uses) over application-first for most coaches, but recommends capping availability to within 10 days so the calendar doesn't signal low demand. Worth a quick check of the actual Calendly settings — this is a five-minute fix if it's not already configured that way.

## Net read

The bones Faxon says matter most — one clear niche, one CTA, audience segmentation — are already right, and better than a lot of the sites he's showcasing. The gap for "authority" specifically is credibility infrastructure (a real case-study/results hub using the strong credentials already in 01-identity), brand consistency between the new homepage and the documented design system, and a lead-capture layer that doesn't yet exist. None of this contradicts the current roadmap in 04-context — it sharpens where the next website-technical-health pass should focus once Content Factory posting consistency is handled.

## Suggested next moves, in priority order

1. Resolve the palette question — confirm whether `#EDE8DE`/`#1b4b80` or `#111110`/`#ffff00`/`#ff3131` is canonical, and update CLAUDE.md or the code to match. Everything else compounds on top of a consistent brand.
2. Build a dedicated credibility module (case studies, credentials, endorsements) and reuse it across `/coaching`, `/work-with-me`, and `/leadership-alignment-diagnostic` rather than leaving proof scattered.
3. Add a newsletter opt-in to the footer and 1-2 content pages, wired to whatever email tool gets connected per 07-connectors' "order matters" sequencing.
4. Confirm Calendly's booking window is capped (Faxon's ~10-day rule) — quick check, not a build.
5. Feed this into the Digital Tools / website-updates holding brief in 04-context when it comes up for the full interview treatment, rather than actioning it ad hoc.
