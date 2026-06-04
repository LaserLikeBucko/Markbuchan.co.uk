import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Coaching — Values-Led Leadership | Mark Buchan MSc",
  description: "One-to-one and group coaching for leaders working with values conflicts, decision-making under pressure, and the gap between who they want to be and how they are showing up.",
  openGraph: {
    title: "Coaching — Values-Led Leadership | Mark Buchan MSc",
    description: "One-to-one and group coaching for leaders working with values conflicts, decision-making under pressure, and the gap between who they want to be and how they are showing up.",
    images: [{ url: "/images/og/og-work-with-me.png", width: 1920, height: 1080 }],
  },
}

export default function CoachingPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Coaching
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              Most coaching works on behaviour.<br />This works on what's driving it.
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto mb-10">
              Every client arrives with a different gap. The work is forensic — we find what is actually running you, name it, and give you a practical path to closing it.
            </p>
            <a
              href="#coaching-options"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              See how we can work together →
            </a>
          </div>
        </section>

        {/* THE HONEST BIT */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              How this works
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-8">
              No predetermined outcomes. No generic frameworks applied from the outside in.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The leaders I work with are not broken. They are not lacking knowledge, effort, or good intent. What they are usually carrying — without always being able to name it — is a conflict between the values they hold and the values that are actually driving their behaviour day to day.
              </p>
              <p>
                That conflict is invisible until it isn't. It shows up as the decision that felt slightly off as you made it. The conversation that ended the way it always ends. The feedback you keep receiving and keep filing away.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                The gap doesn't close because you try harder. It closes because you see more clearly.
              </p>
              <p>
                That's the work. Using the ECHO framework and Inner Coach methodology from <em>The Hidden Gap</em> — we surface what is running underground, bring it into the light, and give you a practical way to work with it.
              </p>
              <p>
                Delivered online via WhatsApp. No Zoom fatigue. No scheduling faff. Just a real conversation when you need it.
              </p>
            </div>
          </div>
        </section>

        {/* THREE OUTCOMES */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60 text-center">
              What clients walk away with
            </p>
            <h2 className="text-3xl font-bold text-[#ffff00] mb-16 text-center">
              Different for everyone. These three things almost always.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#ffff00] mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">Clarity</h3>
                <p className="text-white/60 leading-relaxed">
                  They finally see what's actually running them. Named, mapped, held to the light. The underground values that have been making decisions on their behalf — without ever being chosen.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#ffff00] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">Resolution</h3>
                <p className="text-white/60 leading-relaxed">
                  The internal conflict between competing values stops being a drain and becomes a conscious choice. Energy that was leaking into impression management, avoidance, and office politics comes back.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#ffff00] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">Momentum</h3>
                <p className="text-white/60 leading-relaxed">
                  Decisions get faster. Relationships get cleaner. The gap between the leader they want to be and the leader showing up in the room narrows — not because they performed better, but because they saw more clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COACHING OPTIONS */}
        <section id="coaching-options" className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              How we can work together
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-16">
              Three ways in. One direction.
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              {/* ONE-OFF */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#111110] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Single session</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    One-off Session
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    A focused 60-minute session on whatever is live for you right now. A decision you're sitting with. A conflict you can't name. A pattern you keep repeating. We find the gap and you leave with something you can act on.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£300</p>
                  <p className="text-sm text-muted-foreground mt-2">60 mins · Online via WhatsApp</p>
                </div>
                <a
                  href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Book now →
                </a>
              </div>

              {/* PROGRAMME */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#ff3131] bg-white p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-[#ff3131] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Recommended
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-3">Full programme</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Coaching Programme
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    Six sessions over six weeks. Each one builds on the last. By the end you will have mapped your values, named what has been running underground, and made at least one choice you have been avoiding. The work that actually shifts something.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£1,200</p>
                  <p className="text-sm text-muted-foreground mt-2">6 × 60 mins · Online via WhatsApp</p>
                  <p className="text-sm text-[#ff3131] font-medium mt-2">Save £600 vs individual sessions</p>
                </div>
                <a
                  href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ff3131] px-5 py-3 text-white font-semibold hover:bg-[#111110] transition-colors"
                >
                  Book now →
                </a>
              </div>

              {/* GROUP */}
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Best value</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Group Session
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    A 90-minute facilitated session with a small group of leaders working on similar territory. You get the depth of real coaching and the added dimension of honest peer reflection. Dates announced regularly — numbers are kept small deliberately.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£97</p>
                  <p className="text-sm text-muted-foreground mt-2">90 mins · Per seat · Online via WhatsApp</p>
                </div>
                <a
                  href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-white font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Register interest →
                </a>
              </div>

            </div>

            {/* TEAM COACHING */}
            <div className="mt-10 rounded-2xl border-2 border-dashed border-[#111110] bg-transparent p-8 text-center">
              <h3 className="text-xl font-bold text-[#111110] mb-2">Working with your whole team?</h3>
              <p className="text-[#333330] mb-6 max-w-xl mx-auto">
                Team coaching is available as a standalone engagement or as part of the Human Alignment Diagnostic. Pricing on enquiry.
              </p>
              <a
                href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                className="inline-flex items-center rounded-md bg-[#111110] px-6 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
              >
                Let's talk →
              </a>
            </div>

          </div>
        </section>

        {/* FROM THE TRENCHES — ALISA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              From the trenches
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              She'd tried everything. Nothing was working.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Alisa arrived at coaching convinced her team was the problem. They were resistant. Mediocre. Not cutting it. She'd tried everything a good leader tries — clearer direction, better processes, harder conversations. Nothing shifted.
              </p>
              <p>
                What she hadn't tried was looking at the mirror she was using to build her self-image as a leader.
              </p>
              <p>
                Over the course of our sessions, something became visible that she hadn't been able to see from inside it. The feedback she'd been receiving — and filing away as unfair — was pointing directly at something real. Not everything the feedback said. But enough.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                What followed was relief. Because if the problem had been her team, the solution was out of her hands. But if it was the mirror — that was entirely within her power to change.
              </p>
              <p>
                She didn't become a different leader. She became more fully herself — which turned out to be enough.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT THE APPROACH */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg leading-relaxed text-white/60 mb-6 max-w-xl mx-auto">
              All coaching uses the ECHO framework and Inner Coach methodology from <em className="text-white/80">The Hidden Gap: Solving the Human Alignment Problem</em> — available now.
            </p>
            <a
              href="/book"
              className="inline-flex items-center text-[#ffff00] font-semibold hover:text-white transition-colors"
            >
              Find out more about the book →
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111110] mb-6">
              Not sure where to start?
            </h2>
            <p className="text-lg leading-relaxed text-[#111110] opacity-75 mb-10 max-w-xl mx-auto">
              Book a Diagnostic Conversation. Thirty minutes. No pitch. We'll figure out together whether coaching is the right next step — and if it isn't, I'll tell you that too.
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Book a Diagnostic Conversation →
            </a>
            <p className="mt-6 text-sm text-[#111110] opacity-40">
              Or email iam@markbuchan.co.uk directly.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
