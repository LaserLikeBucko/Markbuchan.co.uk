# Page Build Plan

Reconciled against the site's existing pages (see inventory in `/CLAUDE.md`) and the real UK search data in `claude/keyword-research.md`. Several keyword targets are already served by existing pages — those need optimization, not a new duplicate page. Follow existing design system and metadata conventions for every new page (see `/CLAUDE.md`).

## Flagship net-new build: executive burnout coaching

**This is the priority.** `executive burnout coaching` has real UK search volume, low competition, and — unlike almost everything else on this list — no existing page on the site touches it at all. It also sits exactly at the intersection of Mark's existing positioning (values-led leadership coaching) and a real, under-served niche.

- **New page:** `/executive-burnout-coaching` (or fold into `/coaching` as a named track if that fits the offer structure better — decide based on whether this is a distinct service or a lens on the existing coaching tiers)
- Frame it through the Hidden Gap lens already established: burnout as a symptom of the gap between declared values and what's actually driving behaviour under sustained pressure, not just "too much work." That's consistent with existing voice and differentiates from generic burnout-coaching content.
- Follow the exact structure of `app/coaching/page.tsx`: yellow hero, "who this is for" recognition section, 3-card outcomes, pricing tiers (reuse or adapt existing tiers), client vignette, final CTA to the Diagnostic Conversation.
- Metadata: title/description targeting "executive burnout coaching" and "burnout recovery coach", OG image `/images/og/og-executive-burnout-coaching.jpg` (needs creating).

## Optimize in place (do not duplicate)

These keyword targets are already covered by existing pages. Update metadata, headings, and body copy to naturally include the target terms rather than building new pages.

| Existing page | Target keywords to weave in | Why |
|---|---|---|
| `/coaching` | executive coaching, leadership coaching, executive leadership coaching, online executive coaching | Already the core coaching service/pricing page — just needs the copy and `<title>`/meta description to actually contain these confirmed-volume terms |
| `/work-with-me` | hire an executive coach, executive coaching services | Already the senior-advisory/"hire me" page — check current metadata contains this language |
| `/leadership-alignment-diagnostic` | executive presence coaching (highest bid-value term tested) | Consider whether "executive presence" language fits this diagnostic offer, or whether it needs its own section/page |

## New supporting pages (real volume, worth a dedicated page)

| Page | Slug | Target keyword | Notes |
|---|---|---|---|
| Coaching cost/pricing FAQ | `/coaching/pricing` or a section on `/coaching` | executive coaching cost, executive coaching pricing | High buyer intent — people searching cost are close to deciding. Existing `/coaching` already shows prices; may just need an FAQ section addressing "cost" language directly |
| Executive coaching near me (local) | only build if in-person sessions are offered | executive coaching near me | Skip if coaching is remote-only |

## Content cluster (blog posts under `/resources/blog`)

Follow the exact template of the three existing posts (see `app/resources/blog/what-is-the-human-alignment-problem/page.tsx`): yellow hero with back-link, eyebrow category + read time, byline, prose article body, no sidebar. Each should internally link to `/coaching` or the new `/executive-burnout-coaching` page.

Priority order:

1. **What Is Burnout Recovery (Really)?** — `/resources/blog/what-is-burnout-recovery` — anchors the burnout cluster despite no direct KWP data on the core term; link to the new flagship page
2. **Executive Coaching for Women in Leadership** — `/resources/blog/executive-coaching-women-in-leadership`
3. **Executive Coaching for First-Time Managers** — `/resources/blog/executive-coaching-first-time-managers`
4. **A Burnout Recovery Plan That Doesn't Require Quitting Your Job** — `/resources/blog/burnout-recovery-plan` — natural lead-magnet tie-in (downloadable checklist/template)
5. **Workplace Burnout Recovery: What Leaders Get Wrong** — `/resources/blog/workplace-burnout-recovery` — B2B angle, ties into the diagnostic/organisational offers
6. Lower priority, build only if relevant to actual client mix: executive coaching for startup founders, executive coaching for new managers, remote work burnout recovery, burnout recovery for entrepreneurs

## Not recommended right now

- Burnout recovery retreat / burnout therapy pages — only build if these are actual offers; don't create pages for services not being delivered
- Niche audience pages for nurses/teachers/moms — no confirmed search data and no evidence they match Mark's actual client base; skip unless there's a specific reason to target them
- Top executive coaching firms / best executive coaching programs — comparison content, lower priority, revisit later
