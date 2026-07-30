import type { Metadata } from "next"
import { HoldingPage } from "@/components/holding-page"

export const metadata: Metadata = {
  title: "Transformation Advisory — Mark Buchan MSc",
  description:
    "Helping leaders understand and overcome transformation challenges.",
  openGraph: {
    title: "Transformation Advisory — Mark Buchan MSc",
    description:
      "Helping leaders understand and overcome transformation challenges.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

export default function TransformationAdvisoryPage() {
  return (
    <HoldingPage
      eyebrow="Work With Me"
      title="Transformation Advisory"
      body="Helping leaders understand and overcome transformation challenges — diagnosing what's really getting in the way, and identifying the right interventions."
      backHref="/work-with-me"
      backLabel="Back to Work With Me"
    />
  )
}
