import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Blog — Articles on Human Alignment & Leadership | Mark Buchan MSc",
  description: "Articles on human alignment, values, leadership and organisational culture. Based on twenty years of working inside organisations where the gap between declared values and operating reality was costing more than anyone had named.",
  openGraph: {
    title: "Blog — Articles on Human Alignment & Leadership | Mark Buchan MSc",
    description: "Articles on human alignment, values, leadership and organisational culture.",
    images: [{ url: "/images/og/og-blog.png", width: 1920, height: 1080 }],
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <a
              href="/resources"
              className="inline-flex items-center text-sm font-medium text-[#1C1B18]/60 hover:text-[#1C1B18] transition-colors mb-8"
            >
              ← Back to Resources
            </a>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Articles
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Insights from Transformation Work
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-2xl">
              Insights on transformation, leadership and the human factors that determine whether change succeeds.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* ARTICLES LIST */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              All articles
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />

            <div className="flex flex-col gap-8">

              {/* WHAT IS THE HUMAN ALIGNMENT PROBLEM - LIVE */}
              <a
                href="/resources/blog/what-is-the-human-alignment-problem"
                className="flex flex-col md:flex-row gap-0 rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white overflow-hidden hover:border-[#1b4b80] transition-colors group"
              >
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/og/og-what-is-the-human-alignment-problem.jpg"
                    alt="What is the Human Alignment Problem"
                    width={1000}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Human Alignment</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">5 min read</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">May 2026</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                    What is the Human Alignment Problem?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.
                  </p>
                  <span className="text-sm font-semibold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                    Read article →
                  </span>
                </div>
              </a>

              {/* THATS WHEN CULTURE CHANGES - LIVE */}
              <a
                href="/resources/blog/thats-when-culture-changes"
                className="flex flex-col md:flex-row gap-0 rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white overflow-hidden hover:border-[#1b4b80] transition-colors group"
              >
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/og/og-home.jpg"
                    alt="That's When Culture Changes"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Culture</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">4 min read</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">June 2026</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                    That's When Culture Changes
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    A story about leadership, values and the question that changed everything — and what actually happens in the moment culture shifts.
                  </p>
                  <span className="text-sm font-semibold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                    Read article →
                  </span>
                </div>
              </a>

              {/* TRANSFORMATION FATIGUE - COMING SOON */}
              <div className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-dashed border-[rgba(28,27,24,0.2)] bg-white overflow-hidden opacity-60">
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[rgba(28,27,24,0.06)] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#1C1B18] text-base tracking-wide uppercase px-6 text-center opacity-40">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1C1B18]">
                    Transformation Fatigue Is Not a People Problem
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    Why change initiatives keep stalling — and why the answer is rarely more communication, more workshops, or more management attention. On the values gap that sits beneath every failed transformation.
                  </p>
                  <span className="text-sm font-semibold text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>

              {/* PSYCHOLOGICAL SAFETY - COMING SOON */}
              <div className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-dashed border-[rgba(28,27,24,0.2)] bg-white overflow-hidden opacity-60">
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[rgba(28,27,24,0.06)] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#1C1B18] text-base tracking-wide uppercase px-6 text-center opacity-40">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Culture</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1C1B18]">
                    You Can't Declare Psychological Safety Into Existence
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    Why "this is a safe space" is often the least safe thing a leader can say — and what actually creates the conditions where honesty becomes possible.
                  </p>
                  <span className="text-sm font-semibold text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section className="bg-[#EDE8DE] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-4">
              Get new articles when they land
            </h2>
            <p className="text-lg text-[#1C1B18]/70 mb-10 max-w-xl mx-auto">
              No newsletter. No weekly digest. Just the occasional piece of genuinely useful thinking — when there is something worth saying.
            </p>
            <form
              action="https://formspree.io/f/xwvnddyz"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input type="hidden" name="source" value="blog-index" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 h-12 rounded-md border border-[rgba(28,27,24,0.2)] bg-white px-4 text-[#1C1B18] placeholder:text-[#1C1B18]/40 focus:outline-none focus:border-[#1b4b80]"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-md bg-[#1b4b80] text-[#EDE8DE] font-bold hover:bg-[#163C66] transition-colors whitespace-nowrap"
              >
                Keep me posted
              </button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
