# Page Build Plan

Reconciled against the site's existing pages (see inventory in `/CLAUDE.md`) and the real UK search data in `claude/keyword-research.md`. Several keyword targets are already served by existing pages — those need optimization, not a new duplicate page. Follow existing design system and metadata conventions for every new page (see `/CLAUDE.md`).

## Flagship net-new build: burnout section (superseded — see dedicated plan)

**Update:** this is no longer a single page. Catherine (Dr Catherine Buchan — Doctorate in Counselling Psychology, published author of *The 5 Keys to Burnout Recovery*) is joining the business to co-lead this area, so it has grown into a full co-branded section rather than one standalone page.

**See `claude/burnout-section-plan.md` for the current plan** — hub page, landing pages (including `executive-burnout-coaching`, which is still the highest-priority individual landing page and still uses the values-alignment differentiation described below), and a prioritized article list drawing on both the competitor research and new Gallup 2025–2026 workplace research. Treat that file, not this section, as the source of truth for anything burnout-related going forward.

Original differentiation rationale (still valid): burnout as a symptom of the gap between declared values and what's actually driving behaviour under sustained pressure, not just "too much work" — this is consistent with existing voice and differentiates from every competitor page reviewed (see `claude/competitor-research-executive-burnout-coaching.md`).

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
| Executive coaching near me (local) | **drafted** — see `claude/drafts/landing-executive-coaching-near-me-draft.md` | executive coaching near me | Confirmed 9 Jul 2026: in-person sessions available in Yorkshire, Manchester and the Midlands |

## Content cluster (blog posts under `/resources/blog`)

Follow the exact template of the three existing posts (see `app/resources/blog/what-is-the-human-alignment-problem/page.tsx`): yellow hero with back-link, eyebrow category + read time, byline, prose article body, no sidebar. Each should internally link to `/coaching` or the new `/executive-burnout-coaching` page.

Priority order:

1. ~~What Is Burnout Recovery (Really)?~~ — superseded, this content now lives in `claude/burnout-section-plan.md` (hub page + workplace-burnout landing page cover this ground)
2. **Executive Coaching for Women in Leadership** — `/resources/blog/executive-coaching-for-women-in-leadership` — **drafted**, see `claude/drafts/article-executive-coaching-women-leadership-draft.md`
3. **Executive Coaching for First-Time Managers** — `/resources/blog/executive-coaching-for-first-time-managers` — **drafted**, see `claude/drafts/article-executive-coaching-first-time-managers-draft.md`
4. **A Burnout Recovery Plan That Doesn't Require Quitting Your Job** — `/resources/blog/burnout-recovery-plan` — natural lead-magnet tie-in (downloadable checklist/template); holds until Catherine's burnout-section input lands, since this is closer to her territory than Mark's
5. ~~Workplace Burnout Recovery: What Leaders Get Wrong~~ — superseded, covered by the `workplace-burnout` landing page in `claude/burnout-section-plan.md`
6. Lower priority, build only if relevant to actual client mix: executive coaching for startup founders, executive coaching for new managers, remote work burnout recovery, burnout recovery for entrepreneurs

## Not recommended right now

- Burnout recovery retreat / burnout therapy pages — only build if these are actual offers; don't create pages for services not being delivered
- Niche audience pages for nurses/teachers/moms — no confirmed search data and no evidence they match Mark's actual client base; skip unless there's a specific reason to target them
- Top executive coaching firms / best executive coaching programs — comparison content, lower priority, revisit later
