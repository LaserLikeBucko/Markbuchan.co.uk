import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Executive Burnout Coaching | Mark Buchan MSc",
  description: "Executive burnout coaching for leaders who are exhausted despite doing everything right. A burnout recovery coach using the Hidden Gap methodology — not another wellness fix.",
  openGraph: {
    title: "Executive Burnout Coaching | Mark Buchan MSc",
    description: "Executive burnout coaching for leaders who are exhausted despite doing everything right. A burnout recovery coach using the Hidden Gap methodology.",
    images: [{ url: "/images/og/og-executive-burnout-coaching.jpg", width: 1920, height: 1080 }],
  },
}

export default function ExecutiveBurnoutCoachingPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Executive Burnout Coaching
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              Burnout isn't a workload problem. It's a hidden gap problem.
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto mb-10">
              You've cut back. Delegated. Booked the holiday. Tried the breathing app. And you're still running on empty — because the exhaustion was never really about the hours. It's what happens when you spend years leading in a way that no longer matches what you actually value. Rest doesn't close that gap. Seeing it does.
            </p>
            <a
              href="#coaching-options"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              See how we can work together →
            </a>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* YOU ALREADY KNOW */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              Who this is for
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-8">
              You're not lazy, and you're not broken. You're misaligned.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Somewhere along the way, leading well started to mean performing well — being the calm one, the reliable one, the one who never drops the ball. You got good at it. Good enough that nobody noticed what it was costing you. Including, for a long time, you.
              </p>
              <p>
                Burnout is usually described as too much work for too long. But plenty of leaders carry heavy loads for years without burning out, and plenty of others hit the wall running teams half the size. The difference isn't stamina. It's alignment — whether the work you're doing and the way you're doing it still reflects what actually matters to you, or whether you've been quietly overriding that for so long the override has become the job.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                The hidden gap doesn't close with a holiday. It closes when you see what you've been running on instead of your own values — and choose differently.
              </p>
              <p>
                That's the work. Using the VIM (Values Integrity Model), ECHO framework and Inner Coach methodology from <em>The Hidden Gap</em> — we find what's actually driving the exhaustion, not just the symptoms of it, and build a way of leading that you can sustain.
              </p>
            </div>
          </div>
        </section>

        {/* THREE TYPES — NO LABELS, JUST RECOGNITION */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60 text-center">
              Does any of this sound familiar?
            </p>
            <h2 className="text-3xl font-bold text-[#ffff00] mb-16 text-center">
              The leaders I work with often say one of these things...
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <p className="text-[#ffff00] text-lg font-semibold leading-relaxed mb-4">
                  "I took the leave. I still came back exhausted."
                </p>
                <p className="text-white/60 leading-relaxed">
                  Rest helps the body. It doesn't touch the gap between what you value and what's actually running the show. Without that, the tank refills and drains at the same rate.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <p className="text-[#ffff00] text-lg font-semibold leading-relaxed mb-4">
                  "Everyone tells me I'm doing great. It doesn't feel like it from in here."
                </p>
                <p className="text-white/60 leading-relaxed">
                  Outward performance and inward experience have quietly separated. Keeping up the gap between them is exhausting in a way that has nothing to do with your workload.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <p className="text-[#ffff00] text-lg font-semibold leading-relaxed mb-4">
                  "If I stop pushing, I don't know who I am."
                </p>
                <p className="text-white/60 leading-relaxed">
                  The role has taken over the identity. That's not commitment — it's a values gap so wide you've stopped noticing where you end and the job begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE OUTCOMES */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              What shifts
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-16">
              Different for everyone. These three things almost always.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="border-t-4 border-[#ffff00] pt-8">
                <div className="text-4xl font-bold text-[#111110] mb-4">01</div>
                <h3 className="text-xl font-bold text-[#111110] mb-3">The real source, named</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You stop treating burnout as a stamina problem and start seeing exactly where your leadership has drifted from what you actually value — the specific gap doing the damage, not a vague sense of "too much."
                </p>
              </div>
              <div className="border-t-4 border-[#ffff00] pt-8">
                <div className="text-4xl font-bold text-[#111110] mb-4">02</div>
                <h3 className="text-xl font-bold text-[#111110] mb-3">Energy that stops leaking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The effort spent maintaining a performance that doesn't match how you actually think and feel gets redirected. Not more hours in the day — less of the day spent fighting yourself.
                </p>
              </div>
              <div className="border-t-4 border-[#ffff00] pt-8">
                <div className="text-4xl font-bold text-[#111110] mb-4">03</div>
                <h3 className="text-xl font-bold text-[#111110] mb-3">A pace you can actually sustain</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not a slower version of the same unsustainable pattern — a way of leading that holds up under real pressure, because it's built on what you actually value instead of what you think you're supposed to project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COACHING OPTIONS */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section id="coaching-options" className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              How we can work together
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-16">
              Three ways in. One direction.
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              {/* GROUP */}
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Best value</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Walk With Others
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    Small-group coaching for leaders navigating burnout and recovery in similar territory. Using The Hidden Gap Workbook as a guide, these sessions provide ad-hoc support as you rebuild a sustainable way of leading. Delivered once monthly, places restricted to ensure highest quality support.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£97</p>
                  <p className="text-sm text-muted-foreground mt-2">90 mins/Session  </p>
                </div>
                <a
                  href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-white font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Register interest →
                </a>
              </div>

              {/* ONE-OFF */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#111110] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Single session</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Find Your Bearings
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    A focused 60-minute session on where the exhaustion is actually coming from. We find your hidden gap — the specific place your leadership has drifted from what you value — and you leave with something you can act on immediately.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£300</p>
                  <p className="text-sm text-muted-foreground mt-2">Book via Calendly</p>
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
                    Best value for longer term support
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-3">Full programme</p>
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">
                    Navigate Forward
                  </h3>
                  <p className="text-[#333330] leading-relaxed mb-6">
                    Six sessions of structured recovery and alignment coaching to uncover what's running underground and rebuild a sustainable way of leading. Delivered at your pace to your goals. My most popular programme, including the Inner Coach methodology.
                  </p>
                  <p className="text-4xl font-bold text-[#111110]">£1,200</p>
                  <p className="text-sm text-muted-foreground mt-2">6 × 60 mins · Click below to book exploratory chat</p>
                  <p className="text-sm text-[#ff3131] font-medium mt-2">Save £600 vs individual sessions</p>
                </div>
                <a
                  href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ff3131] px-5 py-3 text-white font-semibold hover:bg-[#111110] transition-colors"
                >
                  Book Exploratory Chat →
                </a>
              </div>

            </div>

            {/* TEAM COACHING */}
            <div className="mt-10 rounded-2xl border-2 border-dashed border-[#111110] bg-transparent p-8 text-center">
              <h3 className="text-xl font-bold text-[#111110] mb-2">Whole team running on empty?</h3>
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

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* FROM THE TRENCHES */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              From the trenches <em>(copyright The Hidden Gap)</em>
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              He didn't need less to do. He needed a different reason for doing it.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Daniel came to coaching after his second attempt at a "reset" — a shorter working week, a promise to protect his evenings, a wellness app his HR team had rolled out company-wide. None of it held. Within a month he was back to answering emails at 11pm, telling himself this quarter was just unusually hard.
              </p>
              <p>
                What surfaced in our sessions wasn't a workload problem. Daniel valued being seen as dependable above almost everything else — a value formed long before he became an executive. Every boundary he tried to set collided with that value and lost. The exhaustion wasn't from the hours. It was from spending years in a silent argument with himself, and always giving in.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                Once he could see the argument clearly, he stopped needing to win it every day. Dependability became a choice he made on purpose, not a debt he was permanently repaying.
              </p>
              <p>
                He didn't work fewer hours in the weeks that followed. He worked differently — and for the first time in years, the tank stopped running dry.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT THE APPROACH */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg leading-relaxed text-white/60 mb-6 max-w-xl mx-auto">
              All coaching utilises the VIM and ECHO frameworks and Inner Coach methodology from <em className="text-white/80">The Hidden Gap: Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture</em> — available now.
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
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111110] mb-6">
              Ready to find out where your gap is sitting?
            </h2>
            <p className="text-lg leading-relaxed text-[#111110] opacity-75 mb-10 max-w-xl mx-auto">
              Book a Diagnostic Conversation. Thirty minutes. We'll figure out together whether coaching is the right next step — and if it isn't, I'll tell you that too.
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
