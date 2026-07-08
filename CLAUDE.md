# markbuchan.co.uk

Site for Mark Buchan MSc — author of *The Hidden Gap*, values-led leadership coach, runs "The Human Alignment Co." Core thesis: organisations don't have a dysfunctional-behaviour problem, they have a human alignment problem — the gap between declared values and the values actually driving behaviour. Coaching uses the VIM (Values Integrity Model), ECHO framework, and Inner Coach methodology from the book.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind v4, shadcn/ui (Radix primitives, see `components.json`), pnpm. Static export to `/out` (see `next.config.mjs`). No CMS — pages are hand-written `.tsx` files under `app/`.

## Brand voice

Direct, second-person, punchy short sentences mixed with longer reflective ones. Not corporate. Names the reader's internal experience before offering the framework ("You already know something is off" — not "Our methodology delivers results"). Uses concrete client vignettes ("From the trenches") rather than generic testimonials. Every page ends with a clear single CTA — almost always the Calendly link (`https://calendly.com/thehumanalignmentco/diagnostic-conversation`) or `iam@markbuchan.co.uk`.

## Design system (reuse, don't reinvent)

- Colors: near-black `#111110` (primary text/bg), yellow `#ffff00` (hero sections, accents), red `#ff3131` (CTAs, emphasis, hover states). Use exact hex values as seen in existing pages, not Tailwind's default palette.
- Section pattern: hero section on `#ffff00` background with uppercase tracked eyebrow text, bold headline, then a glowing `<hr>` divider (see any existing page for the exact box-shadow values), then alternating white / `#111110` sections.
- Components: `<Navigation />` and `<Footer />` wrap every page. Use `<Separator />` from `@/components/ui/separator` for section dividers within content, not `<hr>` (the glowing `<hr>` is only for full-width section breaks).
- Every page exports a `metadata` object (title, description, openGraph with a dedicated `/images/og/og-*.jpg`) — follow the exact pattern in `app/coaching/page.tsx` or `app/work-with-me/page.tsx`.
- Cards: `rounded-2xl border p-8` grid layouts for offer comparisons (see `app/coaching/page.tsx` "COACHING OPTIONS" section).

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
