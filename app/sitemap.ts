import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://www.markbuchan.co.uk"

const pages: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-08-03" },
  { path: "/about", lastModified: "2026-08-03" },
  { path: "/book", lastModified: "2026-08-03" },
  { path: "/books", lastModified: "2026-08-03" },
  { path: "/coaching", lastModified: "2026-08-03" },
  { path: "/community", lastModified: "2026-07-02" },
  { path: "/contact", lastModified: "2026-08-04" },
  { path: "/embedding-change", lastModified: "2026-08-03" },
  { path: "/executive-burnout-coaching", lastModified: "2026-08-03" },
  { path: "/free-chapter", lastModified: "2026-07-02" },
  { path: "/hidden-gap", lastModified: "2026-08-04" },
  { path: "/hr-values-alignment", lastModified: "2026-08-03" },
  { path: "/insights", lastModified: "2026-08-03" },
  { path: "/leaders-its-not-how-you-finish", lastModified: "2026-08-03" },
  { path: "/leadership-alignment", lastModified: "2026-08-03" },
  { path: "/leadership-alignment-diagnostic", lastModified: "2026-08-03" },
  { path: "/organisations-are-lying", lastModified: "2026-08-04" },
  { path: "/resources", lastModified: "2026-08-03" },
  { path: "/resources/blog", lastModified: "2026-08-04" },
  { path: "/resources/blog/overcoming-the-interview-trap", lastModified: "2026-08-03" },
  { path: "/resources/blog/thats-when-culture-changes", lastModified: "2026-08-03" },
  { path: "/resources/blog/what-is-the-human-alignment-problem", lastModified: "2026-08-03" },
  { path: "/speaking-media", lastModified: "2026-08-03" },
  { path: "/the-hidden-gap-diagnostic", lastModified: "2026-08-03" },
  { path: "/the-living-appendix", lastModified: "2026-08-04" },
  { path: "/the-nine-principles-of-agile-leadership", lastModified: "2026-08-03" },
  { path: "/tools-and-frameworks", lastModified: "2026-08-03" },
  { path: "/transformation-advisory", lastModified: "2026-08-03" },
  { path: "/why-values-fail", lastModified: "2026-08-04" },
  { path: "/work-with-me", lastModified: "2026-08-03" },
  { path: "/workshop", lastModified: "2026-06-17" },
]

// Deliberately excluded: /pre-order (client-side redirect to /book),
// /from-linkedin and /thanks-linkedin (campaign-specific landing/thank-you
// pages, not meant for general search discovery), /thank-you (post-download
// confirmation page).

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }))
}
