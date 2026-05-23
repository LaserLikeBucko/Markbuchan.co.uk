import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function LivingAppendixPage() {
  return (
    <>
      {/* No Navigation — this page is book-reader only */}

      <main className="bg-white min-h-screen">

        {/* HEADER */}
        <section className="bg-[#111110] pt-20 pb-16 border-b-4 border-dashed border-[#ffff00]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              The Hidden Gap
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#ffff00] mb-6">
              The Living Appendix
            </h1>
            <p className="text-lg leading-relaxed text-white opacity-65 max-w-xl mx-auto">
              The tools, exercises, and resources referenced throughout the book — gathered here and updated as the work grows.
            </p>
            <p className="mt-4 text-sm text-white opacity-35">
              This page is for readers of The Hidden Gap. Welcome.
            </p>
          </div>
        </section>


        {/* DISCOUNT CODE */}
        <section className="bg-[#ffff00] py-12 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60 mb-4">
              Reader offer
            </p>
            <h2 className="text-2xl font-bold text-[#111110] mb-4">
              25% off the workbook — just for you
            </h2>
            <p className="text-lg text-[#111110] opacity-70 mb-6">
              When the companion workbook launches, use this code at checkout for 25% off.
            </p>
            <div className="inline-block bg-[#111110] text-[#ffff00] font-mono text-2xl font-bold tracking-widest px-8 py-4 rounded-lg border-4 border-[#111110]">
              HIDDENGAP25
            </div>
            <p className="mt-4 text-sm text-[#111110] opacity-50">
              Keep this code safe. It's yours as a reader of the book.
            </p>
          </div>
        </section>

        {/* TOOLS & DOWNLOADS */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Tools and exercises
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-4">
              The exercises from the book — ready to use
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
              Each tool below can be used independently or alongside the relevant chapter. Download, print, or work through them digitally.
            </p>

            <div className="grid gap-8 md:grid-cols-2">

              {/* Tool 1 - Values Self Exploration */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] p-8 bg-white">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] text-[#111110] font-bold text-sm">1</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Part 2 — Chapter 9</p>
                </div>
                <h3 className="text-xl font-bold text-[#111110]">Values Self-Exploration Exercise</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  The exercise referenced in Chapter 9. A structured process for surfacing the values already operating in your life — not choosing admirable words from a list, but discovering what is actually governing your decisions. Takes 30–45 minutes across one or two sittings.
                </p>
                <a
                  href="/downloads/values-self-exploration.pdf"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] text-sm font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Download PDF →
                </a>
              </div>

              {/* Tool 2 - Working Agreement */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] p-8 bg-white">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] text-[#111110] font-bold text-sm">2</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Part 3 — Chapter 15</p>
                </div>
                <h3 className="text-xl font-bold text-[#111110]">Creating a Working Agreement</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  The working agreement template referenced in Chapter 15. A practical guide for creating the shared norms that make values conversations possible — before the first post-it goes on the wall. Includes the key additions for a values session.
                </p>
                <a
                  href="/downloads/working-agreement.pdf"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] text-sm font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Download PDF →
                </a>
              </div>

              {/* Tool 3 - VIM Diagnostic */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#ff3131] p-8 bg-white">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff3131] border-2 border-[#ff3131] text-white font-bold text-sm">3</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interactive Tool</p>
                </div>
                <h3 className="text-xl font-bold text-[#111110]">The Hidden Gap Diagnostic</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  The interactive Values Integrity Model diagnostic. Takes about four minutes. Locates where your values actually sit — not where you wish they did — and generates a personalised Hidden Gap profile with a recommended values journey.
                </p>
                <a
                  href="/the-hidden-gap-diagnostic"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#ff3131] px-5 py-3 text-white text-sm font-semibold hover:bg-[#111110] transition-colors"
                >
                  Take the Diagnostic →
                </a>
              </div>

              {/* Tool 4 - Coming Soon */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] p-8 bg-white opacity-70">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[rgba(17,17,16,0.2)] text-[#111110] font-bold text-sm">4</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                </div>
                <h3 className="text-xl font-bold text-[#111110]">Games Organisations Play</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  The full diagnostic table from Chapter 19 — ten of the most common organisational scripts mapped across declared value, intended behaviour, and actual behaviour. Coming soon as a standalone article and diagnostic tool.
                </p>
                <div className="mt-auto inline-flex items-center justify-center rounded-md bg-[rgba(17,17,16,0.08)] px-5 py-3 text-[#111110] text-sm font-semibold opacity-50 cursor-not-allowed">
                  Coming Soon
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              The community
            </p>
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              Recognition without community is fragile.
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-4 max-w-xl mx-auto">
              The gap has a way of reopening when we return to systems that are still running on underground values. What sustains the journey is not willpower alone — it is the presence of other people doing the same honest work.
            </p>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              A community for readers of The Hidden Gap is coming. If you would like to be among the first to know when it launches — and to be considered as a founding member — leave your details below.
            </p>

            {/* Email capture */}
            <form
              action="https://formspree.io/f/xwvnddyz"
              method="POST"
              className="flex flex-col gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="source" value="living-appendix-community" />
              <input
                type="text"
                name="name"
                placeholder="Your first name"
                required
                className="h-12 rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffff00]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="h-12 rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffff00]"
              />
              <button
                type="submit"
                className="h-12 rounded-md bg-[#ffff00] text-[#111110] font-semibold hover:bg-[#ff3131] hover:text-white transition-colors"
              >
                Keep me informed →
              </button>
              <p className="text-xs text-white opacity-30 mt-2">No spam. Unsubscribe any time.</p>
            </form>
          </div>
        </section>

        {/* FOOTER SIMPLE */}
        <section className="bg-[#ffff00] py-8 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm text-[#111110] opacity-60">
              © 2026 Mark Buchan MSc · <a href="https://markbuchan.co.uk" className="underline hover:opacity-100">markbuchan.co.uk</a>
            </p>
            <p className="text-xs text-[#111110] opacity-40 mt-1">
              This page is for readers of The Hidden Gap and is not listed in site navigation.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
