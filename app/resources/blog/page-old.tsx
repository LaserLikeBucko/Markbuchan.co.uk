import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Blog — Articles on Human Alignment & Leadership | Mark Buchan MSc",
  description: "Articles on human alignment, values, leadership and organisational culture. Based on twenty years of working inside organisations where the gap between declared values and operating reality was costing more than anyone had named.",
  openGraph: {
    title: "Blog — Articles on Human Alignment & Leadership | Mark Buchan MSc",
    description: "Articles on human alignment, values, leadership and organisational culture.",
    images: [{ url: "/images/og/og-overcoming-the-interview-trap.png", width: 1920, height: 1080 }],
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-4xl px-6">
            <a
              href="/resources"
              className="inline-flex items-center text-sm font-medium text-[#111110] opacity-60 hover:opacity-100 transition-opacity mb-8"
            >
              ← Back to Resources
            </a>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Articles
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              From the Work
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl">
              Thinking on human alignment, values, leadership and the gap between what organisations declare and what actually drives behaviour.
            </p>
          </div>
        </section>

        {/* ARTICLES LIST */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              All articles
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />

            <div className="flex flex-col gap-8">

              {/* INTERVIEW TRAP - LIVE */}
              <a
                href="/resources/blog/overcoming-the-interview-trap"
                className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-[#111110] bg-white overflow-hidden hover:border-[#ff3131] transition-colors group"
              >
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[#111110] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#ffff00] text-base tracking-wide uppercase px-6 text-center">
                    The Interview Trap
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">5 min read</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">May 2026</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                    Overcoming the Interview Trap
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    The interview trap — why exploratory chats become consulting therapy, and what I do instead. On diagnostic conversations, working sessions, and why the first meeting sets the tone for everything that follows.
                  </p>
                  <span className="text-sm font-semibold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                    Read article →
                  </span>
                </div>
              </a>

              {/* WHAT IS THE HUMAN ALIGNMENT PROBLEM - LIVE */}
              <a
                href="/resources/blog/what-is-the-human-alignment-problem"
                className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-[#111110] bg-white overflow-hidden hover:border-[#ff3131] transition-colors group"
              >
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[#111110] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#ffff00] text-base tracking-wide uppercase px-6 text-center">
                    What is the Human Alignment Problem?
                  </span>
                </div>
                
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">5 min read</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs text-muted-foreground">May 2026</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                    What is the Human Alignment Problem?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.
                  </p>
                  <span className="text-sm font-semibold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                    Read article →
                  </span>
                </div>
              </a>

              {/* GAMES ORGANISATIONS PLAY - COMING SOON */}
              <div className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] bg-white overflow-hidden opacity-60">
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[rgba(17,17,16,0.06)] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#111110] text-base tracking-wide uppercase px-6 text-center opacity-40">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Organisation</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111110]">
                    Games Organisations Play
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    Ten of the most common organisational scripts — mapped across declared value, intended behaviour, and actual behaviour. The full diagnostic table from The Hidden Gap with commentary on what each pattern costs and how to interrupt it.
                  </p>
                  <span className="text-sm font-semibold text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>

              {/* TRANSFORMATION FATIGUE - COMING SOON */}
              <div className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] bg-white overflow-hidden opacity-60">
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[rgba(17,17,16,0.06)] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#111110] text-base tracking-wide uppercase px-6 text-center opacity-40">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111110]">
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
              <div className="flex flex-col md:flex-row gap-0 rounded-2xl border-2 border-dashed border-[rgba(17,17,16,0.2)] bg-white overflow-hidden opacity-60">
                <div className="w-full md:w-64 md:min-w-[16rem] h-48 md:h-auto bg-[rgba(17,17,16,0.06)] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#111110] text-base tracking-wide uppercase px-6 text-center opacity-40">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Culture</p>
                    <span className="text-xs text-muted-foreground opacity-50">·</span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</p>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111110]">
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
        <section className="bg-[#ffff00] py-20 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#111110] mb-4">
              Get new articles when they land
            </h2>
            <p className="text-lg text-[#111110] opacity-70 mb-10 max-w-xl mx-auto">
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
                className="flex-1 h-12 rounded-md border-2 border-[#111110] bg-white px-4 text-[#111110] placeholder:text-[#111110]/40 focus:outline-none focus:border-[#ff3131]"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-md bg-[#111110] text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors whitespace-nowrap"
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
