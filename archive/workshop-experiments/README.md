# Workshop experiments (retired 26 Aug 2026)

This folder holds the source for three early workshop landing pages that
used to live at `/hidden-gap`, `/why-values-fail`, and
`/organisations-are-lying`.

## What these were

Three A/B-test variants of the same 90-minute "Hidden Gap" workshop
landing page, each pitching a slightly different angle (a VIM case study,
the "If Organisations Couldn't Lie" exercise, and a "values theatre /
underground values" framing respectively). None was ever linked from the
live site's navigation, footer, or any other page — they were only
reachable by direct URL — and none was advertised externally.

## Why they were retired

- All three shared substantially the same structure and, in the case of
  `/hidden-gap` and `/why-values-fail` especially, near-duplicate body
  copy — only a couple of paragraphs and list items differed between
  them.
- No clear "winner" ever emerged from the experiment worth keeping and
  building on.
- The site's focus has moved past this particular workshop concept
  entirely.

Rather than pick one to keep or leave three duplicate, unlinked pages
live indefinitely, all three were cut cleanly. They're served a real
HTTP 410 Gone at the Apache level (see `public/.htaccess` in the site
root) rather than a redirect, since there's no live destination that
represents what any of these three specifically offered.

## What's in here

```
hidden-gap/page.tsx                — VIM case study variant
why-values-fail/page.tsx           — "If Organisations Couldn't Lie" variant
organisations-are-lying/page.tsx   — "values theatre" variant
components/workshop-lead-form.tsx  — shared lead-capture form, used only
                                      by these three pages (not used
                                      anywhere else in the live site)
```

Each page still imports `Navigation`, `Footer`, `next/image` and
`next/link` from the live site's `@/components/...` aliases — those
components are still in active use elsewhere and were left in place, not
copied here. Only `workshop-lead-form.tsx` was archived alongside the
pages, since it had no other consumer.

## Known issue, left as-is

`why-values-fail/page.tsx` passes `source="hidden-gap-workshop"` to its
`WorkshopLeadForm` — the same source string as the actual hidden-gap
page, so any submissions from this page were being misattributed. This
was live before retirement; it's noted here rather than fixed, since the
page is no longer live and fixing it only matters if this code is ever
reactivated.

## If this ever gets reused

This is kept as a possible starting point, not a ready-to-restore
snapshot. Before reactivating any of these:

- Copy the relevant `page.tsx` back into `app/<route>/page.tsx`.
- Copy `workshop-lead-form.tsx` back into `components/` (or reuse
  whatever lead-capture pattern is current by then), and fix the
  `source` prop for whichever page(s) you bring back.
- Remove the matching `RedirectMatch gone` line from `public/.htaccess`.
- Add the route back to `app/sitemap.ts`.
- Rewrite the content — it was never a "winner," so don't just relaunch
  it unchanged.
