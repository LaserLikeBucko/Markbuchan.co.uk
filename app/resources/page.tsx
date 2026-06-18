import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Resources — Tools, Articles & Insights | Mark Buchan MSc",
  description: "Free tools, diagnostic exercises, and articles on human alignment, values, leadership and organisational culture. Based on the work behind The Hidden Gap.",
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Resources
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              Tools, Articles & Insights
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto">
              Free resources built around the work behind The Hidden Gap — for leaders, coaches, and anyone working with the gap between declared values and operating reality.
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* TOOLS SECTION */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Free tools
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-16">
              Start here
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {/* VIM DIAGNOSTIC */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#ff3131] p-8 bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#ff3131]">Interactive tool</p>
                <h3 className="text-xl font-bold text-[#111110]">The Hidden Gap Diagnostic</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Four minutes. Locates where your values actually sit using the Values Integrity Model. Generates a personalised Hidden Gap profile with a recommended values journey.
                </p>
                <a
                  href="/the-hidden-gap-diagnostic"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#ff3131] px-5 py-3 text-white text-sm font-semibold hover:bg-[#111110] transition-colors"
                >
                  Take the Diagnostic →
                </a>
              </div>

              {/* ENERGY LEAK AUDIT - COMING SOON */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] p-8 bg-white opacity-70">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming soon</p>
                <h3 className="text-xl font-bold text-[#111110]">The Energy Leak Audit</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  How much of your energy is being spent managing what shouldn't need managing? A simple diagnostic for individuals and teams — three sections, 21 questions, immediate results.
                </p>
                <div className="mt-auto inline-flex items-center justify-center rounded-md bg-[rgba(17,17,16,0.08)] px-5 py-3 text-[#111110] text-sm font-semibold opacity-50 cursor-not-allowed">
                  Coming Soon
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Articles
            </p>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-bold text-[#111110]">
                From the work
              </h2>
              <a
                href="/resources/blog"
                className="text-sm font-semibold text-[#111110] hover:text-[#ff3131] transition-colors"
              >
                View all articles →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* INTERVIEW TRAP */}
              <a
                href="/resources/blog/overcoming-the-interview-trap"
                className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                <h3 className="text-xl font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  This Is Why I Don't Do Interviews Anymore
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  The interview trap — why exploratory chats become consulting therapy, and what I do instead. On diagnostic conversations, working sessions, and why the first meeting sets the tone for everything that follows.
                </p>
                <span className="text-sm font-semibold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  Read article →
                </span>
              </a>

              {/* IWHAT IS THE HUMAN ALIGNMENT PROBLEM */}
              <a
                href="/resources/blog/what-is-the-human-alignment-problem"
                className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                <h3 className="text-xl font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  What is the Human Alignment Problem?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.
                </p>
                <span className="text-sm font-semibold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  Read article →
                </span>
              </a>

              {/* GAMES ORGANISATIONS PLAY - COMING SOON */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] bg-white p-8 opacity-70">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Organisation</p>
                <h3 className="text-xl font-bold text-[#111110]">
                  Games Organisations Play
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Ten of the most common organisational scripts — mapped across declared value, intended behaviour, and actual behaviour. The full diagnostic table from The Hidden Gap.
                </p>
                <span className="text-sm font-semibold text-muted-foreground">
                  Coming soon
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* COMMUNITY SECTION */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              Community
            </p>
            <Separator className="mx-auto mb-8 max-w-16 bg-[#ffff00]/40" />
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              From Our Trenches
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-4 max-w-xl mx-auto">
              Most organisations have two sets of values. The ones on the wall. 
              And the ones that actually run the show.
            </p>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              From Our Trenches is the space for people who already know what's 
              wrong — but can't say it out loud at work. A community for honest 
              conversation about the gap between the two.
            </p>
            <a
              href="https://thehumanalignmentco.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Join the Community →
            </a>
            <p className="mt-6 text-sm text-white opacity-30">
              Free to join. No spam. Unsubscribe any time.
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* BOOK CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#111110] mb-4">
              Go deeper with the book
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The Hidden Gap — the complete framework behind all of these tools and articles. Available June 19th 2026.
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
