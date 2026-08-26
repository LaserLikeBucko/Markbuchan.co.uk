# markbuchan.co.uk

Site for Mark Buchan MSc — author of *The Hidden Gap*, values-led leadership coach, runs "The Human Alignment Co." Core thesis: organisations don't have a dysfunctional-behaviour problem, they have a human alignment problem — the gap between declared values and the values actually driving behaviour. Coaching uses the VIM (Values Integrity Model), ECHO framework, and Inner Coach methodology from the book.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind v4, shadcn/ui (Radix primitives, see `components.json`), pnpm. Static export to `/out` (see `next.config.mjs`). No CMS — pages are hand-written `.tsx` files under `app/`.

## Brand voice

Direct, second-person, punchy short sentences mixed with longer reflective ones. Not corporate. Names the reader's internal experience before offering the framework ("You already know something is off" — not "Our methodology delivers results"). Uses concrete client vignettes ("From the trenches") rather than generic testimonials. Every page ends with a clear single CTA — almost always the Calendly link (`https://calendly.com/thehumanalignmentco/diagnostic-conversation`) or `iam@markbuchan.co.uk`.

## Design system (reuse, don't reinvent)

- Colors: navy `#1b4b80` (primary accent — CTAs, dark section backgrounds, emphasis), ivory `#EDE8DE` (hero/light section backgrounds, page chrome), near-black `#1C1B18` (primary text). Use exact hex values as seen in existing pages, not Tailwind's default palette.
- **Rebrand note (as of Aug 2026):** the site moved off an earlier yellow `#ffff00` / near-black `#111110` / red `#ff3131` palette to this navy/ivory scheme. That old palette is deprecated — never use it for new work. Migration is page-by-page and incomplete: `<Navigation />`, `<Footer />`, and most pages (including `app/coaching/page.tsx`, converted Aug 2026) are already on navy/ivory, but several still aren't — `app/layout.tsx` (theme-color meta), `app/from-linkedin/`, `app/workshop/`, `app/thanks-linkedin/`, `app/why-values-fail/`, `app/thank-you/`, `app/resources/`, `app/hidden-gap/`, `app/organisations-are-lying/`, `app/the-living-appendix/`, and `app/community/`. Before copying patterns from an existing page, check which palette it's actually using — don't assume every page is current.
- Section pattern: hero section on `#EDE8DE` background with uppercase tracked eyebrow text, bold headline, then a flat full-width divider (`<div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />`), then alternating white / `#1b4b80` sections.
- Components: `<Navigation />` and `<Footer />` wrap every page. Use `<Separator />` from `@/components/ui/separator` for section dividers within content, not the full-width `<div>` divider (that's only for full-width section breaks).
- Every page exports a `metadata` object (title, description, openGraph with a dedicated `/images/og/og-*.jpg`) — follow the exact pattern in `app/work-with-me/page.tsx` or `app/leadership-alignment/page.tsx` (both on the current navy/ivory palette).
- Cards: `rounded-2xl border p-8` grid layouts for offer comparisons (see `app/book/page.tsx` pricing cards or `app/leadership-alignment/page.tsx` "ENGAGEMENT OPTIONS" section).

## Existing page inventory (check before creating anything new)

- `/` — homepage, book-first
- `/coaching` — **already the executive/leadership coaching service page**, with three paid tiers (£97 group / £300 single session / £1,200 programme)
- `/work-with-me` — senior advisory + diagnostic conversation page, broader than `/coaching`, is effectively the "hire me" bottom-funnel page
- `/leadership-alignment-diagnostic` — 2-week diagnostic engagement offer
- `/the-hidden-gap-diagnostic`, `/hidden-gap` — diagnostic tool/quiz pages
- `/about` — bio
- `/book`, `/free-chapter`, `/pre-order` — book funnel
- `/resources`, `/resources/blog` (+ 3 posts: overcoming-the-interview-trap, thats-when-culture-changes, what-is-the-human-alignment-problem) — content hub
- `/community`, `/workshop`, `/hr-values-alignment`, `/organisations-are-lying`, `/why-values-fail`, `/the-living-appendix`
- Nav links (see `components/navigation.tsx`) are curated, not a full sitemap — new pages don't automatically need a top-nav slot, link them contextually from relevant existing pages/blog posts instead.

## SEO / content context

See `claude/keyword-research.md` for real UK search-volume data (from Google Ads Keyword Planner) and `claude/page-build-plan.md` for the prioritized list of what to build vs. what already exists and just needs optimizing. Read both before creating any new marketing/SEO page — several proposed keyword targets are already served by `/coaching` or `/work-with-me` and should be optimized in place, not duplicated.

## Burnout section (new — co-branded with Dr Catherine Buchan)

Mark's wife, Dr Catherine Buchan (Doctorate in Counselling Psychology, published author of *The 5 Keys to Burnout Recovery*), is joining the business to co-lead a new burnout-focused section of the site. This is being treated as an experiment before any decision about a separate site/brand for her. See `claude/burnout-section-plan.md` for the full plan — her bio, the section's information architecture, article priorities, and open items that need her direct sign-off before drafting. Also see `claude/competitor-research-executive-burnout-coaching.md` for competitive positioning research on this specific topic. Do not draft content under her byline, or treat her book's framework as a site-wide methodology, without confirming with Mark/Catherine first — flagged explicitly in the plan file.
