import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "What Is The Human Alignment Problem? | Mark Buchan MSc",
  description: "Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.",
  openGraph: {
    title: "What Is The Human Alignment Problem? | Mark Buchan MSc",
    description: "Why human systems drift into misalignment, why organisational theatre emerges, and why you cannot automate your way out of a values problem.",
    images: [{ url: "/images/og/og-what-is-the-human-alignment-problem.png", width: 1920, height: 1080 }],
  },
}

export default function HumanAlignmentProblemPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <a
              href="/resources/blog"
              className="inline-flex items-center text-sm font-medium text-[#111110] opacity-60 hover:opacity-100 transition-opacity mb-8"
            >
              ← Back to Articles
            </a>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Human Alignment · 5 min read
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111110] text-balance mb-6">
              What Is The Human Alignment Problem?
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75">
              We are racing to align machines with human values. We haven't aligned the humans yet!
            </p>
            <p className="mt-4 text-sm text-[#111110] opacity-50">
              Mark Buchan MSc · May 2026
            </p>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="py-24">
          <div className="mx-auto max-w-3xl px-6">

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              There are two questions that I've been asked a few times recently.
            </p>

            <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
              The first question: What is the human alignment problem?
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Leaders, change agents, coaches, managers, consultants and facilitators have spent decades trying to fix organisational dysfunction at the surface level.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              They focus on improving communication, creating clearer processes, running yet another team building workshop, or implementing one more reorganisation.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              But the root cause sits much deeper.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Most organisations declare values that they don't consistently live by. The gap between what gets said and what actually drives behaviour — in decisions, in culture, and in how people treat each other under pressure — is where most of the damage occurs.
            </p>

            <div className="border-l-4 border-[#ff3131] pl-6 my-10">
              <p className="text-xl font-semibold text-[#111110] leading-relaxed">
                I call this "The Hidden Gap". It is hidden because we are surprisingly good at not seeing what we don't want to see.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              In over twenty years of working inside and with organisations, I've sat in rooms where everyone privately knew the truth — and nobody said it out loud. That silence is where the hidden gap lives.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              But this is not only an organisational problem.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              It scales from the individual, to the team, to the organisation, and ultimately to society itself.
            </p>

            <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
              The second question: Why does the human alignment problem matter?
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              It matters because right now we are racing toward AGI (Artificial General Intelligence), while our human systems remain fundamentally misaligned.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              This is why Part 5 of my book is called <em>"Aligned to What?"</em>
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Humanity cannot agree on which values matter most, which should take precedence, or how they should operate under pressure.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              So how can we expect to align AI with human values when there is no alignment between humans on what those values are?
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We have been sold two competing myths: that AI will save us, or that it will kill us.
            </p>

            <div className="border-l-4 border-[#ff3131] pl-6 my-10">
              <p className="text-xl font-semibold text-[#111110] leading-relaxed">
                IT won't. We will determine the outcome. AI will not magically solve our deepest human contradictions. But neither will it create them.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              In short, you cannot automate your way out of a values problem. There are no shortcuts. There are no free lunches.
            </p>

            <p className="text-lg font-semibold text-[#111110] mb-2">The work cannot be outsourced:</p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-2 pl-6">Not to a consultant.</p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-2 pl-6">Not to a framework.</p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 pl-6">Not to a machine.</p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              We collectively need to do the work ourselves.
            </p>

            <div className="bg-[#ffff00] rounded-2xl border-2 border-[#111110] p-8 my-10">
              <h3 className="text-xl font-bold text-[#111110] mb-4">The Hidden Gap</h3>
              <p className="text-lg leading-relaxed text-[#111110] opacity-80 mb-4">
                My book — <em>The Hidden Gap: Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture</em> — is published on June 19th.
              </p>
              <p className="text-[#111110] opacity-80 mb-2">In it, I explore:</p>
              <ul className="flex flex-col gap-2 mb-6">
                <li className="flex gap-2 items-start text-[#111110] opacity-80">
                  <span className="font-bold mt-1">·</span>
                  why human systems drift into misalignment
                </li>
                <li className="flex gap-2 items-start text-[#111110] opacity-80">
                  <span className="font-bold mt-1">·</span>
                  why organisational theatre emerges
                </li>
                <li className="flex gap-2 items-start text-[#111110] opacity-80">
                  <span className="font-bold mt-1">·</span>
                  what it might take to close the gap between declared values and lived reality
                </li>
              </ul>
              <a
                href="/pre-order"
                className="inline-flex items-center justify-center rounded-md bg-[#111110] px-6 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
              >
                Pre-Order Now →
              </a>
            </div>

          </div>
        </article>

        {/* CTA */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              Book a Diagnostic Conversation
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              A focused 30-minute conversation to locate where the gap is sitting in your organisation — and whether a structured intervention is the right response.
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Book Yours →
            </a>
            <p className="text-sm leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              You will be taken to Calendly to book your session 
            </p>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="text-xl font-bold text-[#111110] mb-8">Related</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <a
                href="/resources/blog/overcoming-the-interview-trap"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(17,17,16,0.15)] p-6 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Article</p>
                <h4 className="font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  Why I Don't Do Interviews Anymore →
                </h4>
                <p className="text-sm text-muted-foreground">The interview trap and what I do instead.</p>
              </a>
              <a
                href="/diagnostic"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(17,17,16,0.15)] p-6 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Free tool</p>
                <h4 className="font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">
                  The Hidden Gap Diagnostic →
                </h4>
                <p className="text-sm text-muted-foreground">Four minutes. Locate where your values actually sit.</p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
