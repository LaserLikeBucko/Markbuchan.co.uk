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
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1C1B18] opacity-60">
              Resources
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Tools, Articles & Insights
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18] opacity-75 max-w-2xl mx-auto">
              Free resources built around the work behind The Hidden Gap — for leaders, coaches, and anyone working with the gap between declared values and operating reality.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* TOOLS SECTION */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1b4b80]">
              Free tools
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-16">
              Start here
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {/* VIM DIAGNOSTIC */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#1b4b80] p-8 bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80]">Interactive tool</p>
                <h3 className="text-xl font-bold text-[#1C1B18]">The Hidden Gap Diagnostic</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Four minutes. Locates where your values actually sit using the Values Integrity Model. Generates a personalised Hidden Gap profile with a recommended values journey.
                </p>
                <a
                  href="/the-hidden-gap-diagnostic"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#1b4b80] px-5 py-3 text-white text-sm font-semibold hover:bg-[#1C1B18] transition-colors"
                >
                  Take the Diagnostic →
                </a>
              </div>

              {/* ENERGY LEAK AUDIT - COMING SOON */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[rgba(28,27,24,0.2)] p-8 bg-white opacity-70">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming soon</p>
                <h3 className="text-xl font-bold text-[#1C1B18]">The Energy Leak Audit</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  How much of your energy is being spent managing what shouldn't need managing? A simple diagnostic for individuals and teams — three sections, 21 questions, immediate results.
                </p>
                <div className="mt-auto inline-flex items-center justify-center rounded-md bg-[rgba(28,27,24,0.08)] px-5 py-3 text-[#1C1B18] text-sm font-semibold opacity-50 cursor-not-allowed">
                  Coming Soon
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1C1B18] opacity-60">
              Articles
            </p>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-bold text-[#1C1B18]">
                From the work
              </h2>
              <a
                href="/resources/blog"
                className="text-sm font-semibold text-[#1C1B18] hover:text-[#1b4b80] transition-colors"
              >
                View all articles →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* IWHAT IS THE HUMAN ALIGNMENT PROBLEM */}
              <a
                href="/resources/blog/what-is-the-human-alignment-problem"
                className="flex flex-col gap-4 rounded-2xl border-2 border-[#1C1B18] bg-white p-8 hover:border-[#1b4b80] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                <h3 className="text-xl font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  What is the Human Alignment Problem?
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.
                </p>
                <span className="text-sm font-semibold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  Read article →
                </span>
              </a>

              {/* THATS WHEN CULTURE CHANGES */}
              <a
                href="/resources/blog/thats-when-culture-changes"
                className="flex flex-col gap-4 rounded-2xl border-2 border-[#1C1B18] bg-white p-8 hover:border-[#1b4b80] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Culture</p>
                <h3 className="text-xl font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  That's When Culture Changes
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  A story about leadership, values and the question that changed everything — and what actually happens in the moment culture shifts.
                </p>
                <span className="text-sm font-semibold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  Read article →
                </span>
              </a>

            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* BOOK CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-4">
              Go deeper with the book
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The Hidden Gap — the complete framework behind all of these tools and articles. Available now.
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
