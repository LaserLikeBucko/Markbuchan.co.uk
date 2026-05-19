import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function DiagnosticPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Free diagnostic tool
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              The Hidden Gap Diagnostic
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-xl mx-auto mb-4">
              Locate where your values actually sit — not where you wish they did.
            </p>
            <p className="text-base text-[#111110] opacity-55 mb-10">
              Takes about four minutes. No login required.
            </p>
            <a
              href="#start"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Start the Diagnostic →
            </a>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🗺️</span>
                <h3 className="font-bold text-[#111110]">The VIM as your map</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Values Integrity Model locates each of your values precisely — Core, Theatre, Aspirational, Underground, or Void.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🧭</span>
                <h3 className="font-bold text-[#111110]">A personalised profile</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based on your answers, you receive a Hidden Gap profile — where the gap sits and what it is costing you.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-3xl">🚶</span>
                <h3 className="font-bold text-[#111110]">A recommended journey</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The diagnostic identifies the most relevant values journey available to you right now — and what the first step looks like.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#ffff00] leading-relaxed">
              "The gap does not close because people try harder.<br />
              It closes because they see more clearly."
            </p>
            <p className="mt-4 text-sm text-white opacity-40">
              — The Hidden Gap, Mark Buchan MSc
            </p>
          </div>
        </section>

        {/* CTA TO TOOL */}
        <section id="start" className="py-24 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#111110] mb-4">
              Ready to locate your gap?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              The diagnostic opens in this window. Takes about four minutes. Your personalised profile appears at the end.
            </p>
            <a
              href="/diagnostic-tool.html"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Start the Diagnostic →
            </a>
          </div>
        </section>

        {/* BOOK CTA */}
        <section className="bg-[#ffff00] py-20 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#111110] mb-4">
              Go deeper with the book
            </h2>
            <p className="text-lg text-[#111110] opacity-70 mb-8 max-w-xl mx-auto">
              The diagnostic is the beginning. The Hidden Gap gives you the complete framework — the VIM, ECHO, the Inner Coach, and the Choice Triangle — with the practical tools to close the gap for good.
            </p>
            <div className="inline-block bg-[#111110] text-[#ffff00] font-mono text-xl font-bold tracking-widest px-6 py-3 rounded-lg mb-6">
              HIDDENGAP25
            </div>
            <p className="text-sm text-[#111110] opacity-50 mb-8">
              Use this code for 25% off at launch.
            </p>
            <a
              href="/book"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
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
