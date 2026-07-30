import type { Metadata } from "next"
import { HoldingPage } from "@/components/holding-page"

export const metadata: Metadata = {
  title: "Embedding Change — Mark Buchan MSc",
  description:
    "Helping organisations ensure new ways of working are adopted, sustained and become part of everyday practice.",
  openGraph: {
    title: "Embedding Change — Mark Buchan MSc",
    description:
      "Helping organisations ensure new ways of working are adopted, sustained and become part of everyday practice.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

export default function EmbeddingChangePage() {
  return (
    <HoldingPage
      eyebrow="Work With Me"
      title="Embedding Change"
      body="Helping organisations ensure new ways of working are adopted, sustained and become part of everyday practice."
      backHref="/work-with-me"
      backLabel="Back to Work With Me"
    />
  )
}
