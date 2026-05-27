import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Work With Me — Human Alignment Diagnostic | Mark Buchan MSc",
  description: "Senior advisory engagements for leaders and organisations navigating the gap between declared values and operating reality. Diagnostic conversations, workshops, and coaching.",
openGraph: {
  title: "Work With Me — Human Alignment Diagnostic | Mark Buchan MSc",
  description: "Senior advisory engagements for leaders and organisations navigating the gap between declared values and operating reality.",
  images: [{ url: "/images/og/og-work-with-me.png", width: 1920, height: 1080 }],
},
}

export default function WorkWithMePage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Work With Me
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              More humanity.<br />Less PowerPoint.
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto mb-10">
              Senior advisory work for leaders and organisations where the gap between what is declared and what is actually operating has become too costly to ignore.
            </p>
            <a
              href="#diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Book a Diagnostic Conversation →
            </a>
          </div>
        </section>

        {/* THE INTERVIEW TRAP */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              How I work
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-8">
              I stopped doing interviews two years ago.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Not because I became too grand for them. Because I finally named what was actually happening in them — and what I named was the interview trap.
              </p>
              <p>
                A potential client asks me for an exploratory chat. I arrive genuinely interested. They describe their problem — teams pulling in different directions, change initiatives stalling, communication breaking down. I listen intently. I ask good questions. I start to see the pattern. And then — because I am a professional who cares about the work and wants to demonstrate my aptitude for the work I begin to share what I am are seeing.
              </p>
              <p>
                An hour later they thank me warmly and say they will be in touch.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                That is consulting therapy. The leader gets an idea for a fix. The engagement never materialises. And the real problem — whatever was actually driving the dysfunction remains unnamed and ultimately unsolved.
              </p>
              <p>
                So I changed the frame. Every conversation I have now is designed for one thing: locating the root cause and deciding together whether a structured intervention is the right response.
              </p>
            </div>
            <a
              href="/resources/blog/interview-trap"
              className="mt-8 inline-flex items-center text-[#ff3131] font-semibold hover:text-[#111110] transition-colors"
            >
              Read the full article: Why I Don't Do Interviews Anymore →
            </a>
          </div>
        </section>

        {/* THREE OFFERS */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              How we can work together
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-16">
              Three ways in. One direction.
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              {/* DIAGNOSTIC */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#111110] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-3">Flagship offer</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    The Human Alignment Diagnostic
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    A two-week senior engagement. We gain access to your whole organisation, surface what is actually driving behaviour, and deliver a Situation Appraisal with options. Then we co-design the solution together.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For CEOs, MDs, and executive teams ready for the honest conversation.
                  </p>
                </div>
                <a
                  href="/leadership-alignment-diagnostic"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Learn more →
                </a>
              </div>

              {/* COACHING */}
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Individual work</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Coaching
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    One-to-one coaching for leaders working with values conflicts, decision-making under pressure, and the gap between who they want to be and how they are showing up.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Uses the ECHO framework and Inner Coach methodology from The Hidden Gap.
                  </p>
                </div>
                <a
                  href="#diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-white font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Start a conversation →
                </a>
              </div>

              {/* WORKSHOPS */}
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Team work</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Workshops & Facilitation
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    Facilitated sessions for leadership teams and organisations exploring values, behaviour and culture. From 90-minute introductions to full-day team alignment sessions.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Available as standalone sessions or as part of the Human Alignment Diagnostic.
                  </p>
                </div>
                <a
                  href="#diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-white font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Start a conversation →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* FOR HR */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              For HR leaders
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-6">
              Give HR the language leadership will finally act on.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              HR has been naming the culture problem for years. The Human Alignment Diagnostic gives you the framework, the evidence, and the business case to make leadership see it as the operational problem it actually is.
            </p>
            <a
              href="/hr-values-alignment"
              className="inline-flex items-center rounded-md bg-[#111110] px-6 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Read more for HR leaders →
            </a>
          </div>
        </section>

        {/* DIAGNOSTIC CONVERSATION CTA */}
        <section id="diagnostic-conversation" className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              The first step
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffff00] mb-6">
              Book a Diagnostic Conversation
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-4 max-w-xl mx-auto">
              Not an interview. Not an exploratory chat. A focused 30-minute conversation designed to locate where the gap is sitting in your organisation — and whether a structured intervention is the right response.
            </p>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              No pitch. No proposal. If this isn't the right intervention for you — I will tell you that too.
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Book Your Diagnostic Conversation →
            </a>
            <p className="text-sm leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              You will be taken to Calendly to book your session 
            </p>
            <p className="mt-6 text-sm text-white opacity-30">
              Or email iam@markbuchan.co.uk directly.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
