import type { Metadata } from "next"
import { HoldingPage } from "@/components/holding-page"

export const metadata: Metadata = {
  title: "Tools & Frameworks — Mark Buchan MSc",
  description:
    "Practical tools and frameworks for navigating organisational transformation.",
  openGraph: {
    title: "Tools & Frameworks — Mark Buchan MSc",
    description:
      "Practical tools and frameworks for navigating organisational transformation.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

export default function ToolsAndFrameworksPage() {
  return (
    <HoldingPage
      eyebrow="Insights & Media"
      title="Tools & Frameworks"
      body="Practical tools and frameworks for navigating organisational transformation, drawn from The Hidden Gap and years of consulting experience."
      backHref="/insights"
      backLabel="Back to Insights & Media"
    />
  )
}
