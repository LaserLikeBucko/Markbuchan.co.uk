import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Tools & Frameworks
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#1C1B18]">
              Practical tools and frameworks for navigating complex organisational change
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Developed through <span className="italic">The Hidden Gap</span> and more than 20 years of consulting experience, these tools provide practical ways to explore the human factors that shape transformation.
            </p>
          </div>
        </section>

        {/* TOOLS */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-3xl font-bold text-[#EDE8DE] mb-12 text-center">
              Tools
            </h2>

            <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#EDE8DE] p-8 bg-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80]">
                Featured Tool
              </p>
              <h3 className="text-xl font-bold text-[#1C1B18]">The Hidden Gap Diagnostic</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                The Hidden Gap Diagnostic uses the Values Integrity Model to reveal where values sit and how they influence behaviour, decision-making and organisational culture. It provides leaders with insight into the alignment between stated values and lived behaviours, helping identify opportunities to strengthen trust, alignment and transformation outcomes.
              </p>
              <a
                href="/the-hidden-gap-diagnostic"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#1b4b80] px-5 py-3 text-white text-sm font-semibold hover:bg-[#1C1B18] transition-colors"
              >
                Take the Diagnostic →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
