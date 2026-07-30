import type { Metadata } from "next"
import { HoldingPage } from "@/components/holding-page"

export const metadata: Metadata = {
  title: "Leadership Alignment — Mark Buchan MSc",
  description:
    "Helping leadership teams create clarity, confidence and shared direction through complex change.",
  openGraph: {
    title: "Leadership Alignment — Mark Buchan MSc",
    description:
      "Helping leadership teams create clarity, confidence and shared direction through complex change.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

export default function LeadershipAlignmentPage() {
  return (
    <HoldingPage
      eyebrow="Work With Me"
      title="Leadership Alignment"
      body="Helping leadership teams create clarity, confidence and shared direction through complex change."
      backHref="/work-with-me"
      backLabel="Back to Work With Me"
    />
  )
}
