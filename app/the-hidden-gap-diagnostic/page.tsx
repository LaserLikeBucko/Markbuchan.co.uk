import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "The Hidden Gap Diagnostic — Free Values Tool | Mark Buchan MSc",
  description: "Locate where your values actually sit — not where you think or believe they are. Free four-minute diagnostic based on the Values Integrity Model.",
openGraph: {
  title: "The Hidden Gap Diagnostic — Free Values Tool | Mark Buchan MSc",
  description: "Locate where your values actually sit — not where you wish they did. Free four-minute diagnostic.",
  images: [{ url: "/images/og/og-the-hidden-gap-diagnostic.jpg", width: 1920, height: 1080 }],
},
}

export default function DiagnosticPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Free diagnostic tool
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              The Hidden Gap Diagnostic
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-xl mx-auto mb-4">
              Locate where your values actually sit — not where you think or believe they are.
            </p>
            <p className="text-base text-[#1C1B18]/55 mb-10">
              Takes about four minutes. No login required.
            </p>
            <a
              href="#start"
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Start the Diagnostic →
            </a>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* WHAT YOU GET */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🗺️</span>
                <h3 className="font-bold text-[#1C1B18]">The VIM as your map</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Values Integrity Model locates each of your values precisely — Core, Theatre, Aspirational, Underground, or Void.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🧭</span>
                <h3 className="font-bold text-[#1C1B18]">A personalised profile</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based on your answers, you receive a Hidden Gap profile — where the gap sits and what it is costing you.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🚶</span>
                <h3 className="font-bold text-[#1C1B18]">A recommended journey</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The diagnostic identifies the most relevant values journey available to you right now — and what the first step looks like.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#1b4b80] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#EDE8DE] leading-relaxed">
              "The gap does not close because people try harder.<br />
              It closes because they see more clearly."
            </p>
            <p className="mt-4 text-sm text-white/40">
              — The Hidden Gap, Mark Buchan MSc
            </p>
          </div>
        </section>

        {/* CTA TO TOOL */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section id="start" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#1C1B18] mb-4">
              Ready to locate your gap?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              The diagnostic opens in this window. Takes about four minutes. Your personalised profile appears at the end.
            </p>
            <a
              href="/diagnostic-tool.html"
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Start the Diagnostic →
            </a>
          </div>
        </section>

        {/* BOOK CTA */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section className="bg-[#EDE8DE] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-4">
              Go deeper with the book
            </h2>
            <p className="text-lg text-[#1C1B18]/70 mb-8 max-w-xl mx-auto">
              The diagnostic is the beginning. The Hidden Gap gives you the complete framework — the VIM, ECHO, the Inner Coach, and the Choice Triangle — with the practical tools to close the gap for good.
            </p>
            <a
              href="/book"
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Learn More About The Book →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
