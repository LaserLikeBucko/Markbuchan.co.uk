import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Values-Led Leadership Coaching| Mark Buchan MSc",
  description: "One-to-one and group coaching for leaders who sense something is off but can't quite name it yet. Values-led coaching using the Hidden Gap methodology.",
  openGraph: {
    title: "Values-Led Leadership Caoching| Mark Buchan MSc",
    description: "One-to-one and group coaching for leaders who sense something is off but can't quite name it yet.",
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
              Values-Led Leadership
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance mb-6">
              Have you been following the wrong map?
            </h1>
            <p className="text-xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto mb-10">
              You have experience. You have responsibility. You've achieved results before. But if the assumptions guiding your decisions no longer match the reality you're navigating, working harder won't solve the problem. The challenge may not be the territory. It may be the map.
            </p>
            <a
              href="#coaching-options"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              See how we can work together →
            </a>
          </div>
        </section>

        {/* YOU ALREADY KNOW */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ff3131]">
              Who this is for
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-8">
              You already know something is off.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Maybe it's the meeting that ends in agreement and changes nothing. The feedback you keep receiving and keep filing away. The decision that felt slightly wrong as you made it — but you made it anyway. The version of yourself that shows up in the boardroom versus the version you'd prefer.
              </p>
              <p>
                That feeling is the hidden gap making itself known. The distance between the values you hold and the values that are actually driving your behaviour day to day. It shows up as a niggle. A drain. A sense that something is slightly out of alignment — and maybe has been for a while.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                The hidden gap doesn't close because you try harder. It closes because you see more clearly.
              </p>
              <p>
                That's the work. Using the VIM (Values Integrity Model) and Inner Coach methodology from <em>The Hidden Gap</em> — we surface what is running underground, bring it into the light, and give you a practical way to work with it.
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
                  "We all agreed in the meeting. So why hasn't anything changed?"
                </p>
                <p className="text-white/60 leading-relaxed">
                  The energy is going somewhere it shouldn't need to go. The system is running on something that hasn't been named yet — and until it is, the meetings will keep ending the same way.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <p className="text-[#ffff00] text-lg font-semibold leading-relaxed mb-4">
                  "I know what we're supposed to say. I'm just tired of saying it."
                </p>
                <p className="text-white/60 leading-relaxed">
                  There's a version of leadership you perform and a version you'd rather live. The gap between those two things is costing more than you're letting on — to yourself or anyone else.
                </p>
              </div>
              <div className="border border-[#ffff00]/20 rounded-2xl p-8">
                <p className="text-[#ffff00] text-lg font-semibold leading-relaxed mb-4">
                  "Have the people at the top been on this course yet?"
                </p>
                <p className="text-white/60 leading-relaxed">
                  You can see the incongruence in the system clearly. What you haven't yet found is honest ground to stand on inside it — a way of staying true without paying an unnecessary price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE OUTCOMES */}
        <section className="py-24 border-b-4 border-dashed border-[#111110]">
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
                <h3 className="text-xl font-bold text-[#111110] mb-3">Clarity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What has been running underground gets named. Mapped. Held to the light. The values that have been making decisions on your behalf — without ever being consciously chosen — become visible and workable.
                </p>
              </div>
              <div className="border-t-4 border-[#ffff00] pt-8">
                <div className="text-4xl font-bold text-[#111110] mb-4">02</div>
                <h3 className="text-xl font-bold text-[#111110] mb-3">Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The internal conflict between competing values stops being a drain and becomes a conscious choice. Energy that was leaking into guarded exchanges, impression management and unresolved tension comes back.
                </p>
              </div>
              <div className="border-t-4 border-[#ffff00] pt-8">
                <div className="text-4xl font-bold text-[#111110] mb-4">03</div>
                <h3 className="text-xl font-bold text-[#111110] mb-3">Momentum</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Decisions get faster. Relationships get cleaner. The gap between the leader you want to be and the leader showing up in the room narrows — not because you performed better, but because you saw more clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COACHING OPTIONS */}
        <section id="coaching-options" className="bg-[#ffff00] py-24 border-b-4 border-dashed border-[#111110]">
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
                    Small-group coaching for leaders exploring similar territory. Using The Hidden Gap Workbook as a guide, this sessions provide ad-hoc support for leaders navigating their own journey. Sessions delivered once monthly places restricted to ensure highest quality support.
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
                    A focused 60-minute session on whatever is live for you right now. A decision you're sitting with. A conflict you can't name. A pattern you keep repeating. We find your hidden gap and you leave with something you can act on.
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
                    Six sessions of structured leadership alignment coaching to uncover what is running underground and make lasting changes. Delivered at your pace to your goals. My most popular programme including the Inner Coach methodology.
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
              From the trenches <em>(copyright The Hidden Gap)</em>
            </p>
            <Separator className="mb-12 max-w-16 bg-[#ff3131]/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              The solution was in her hands all along.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Alisa arrived at coaching convinced her team was the problem. They were resistant. Mediocre. Not cutting it. She'd given the situation everything a committed leader gives — clearer direction, better processes, firmer conversations.
              </p>
              <p>
                Over the course of our sessions, something became visible that she hadn't been able to see from inside it. The feedback she'd been receiving — and filing away as unfair — was pointing directly at something real. The mirror she'd been using to build her self-image as a leader was showing her a version of the room that wasn't quite accurate.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                What followed was relief. Because if the problem had been her team, the solution was out of her hands. Once she could see it clearly — the solution was entirely within her power.
              </p>
              <p>
                She didn't become a different leader. She became more fully herself — which turned out to be exactly enough.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT THE APPROACH */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg leading-relaxed text-white/60 mb-6 max-w-xl mx-auto">
              All coaching utilises the the VIM and ECHO frameworks and Inner Coach methodology from <em className="text-white/80">The Hidden Gap: Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture</em> — available now.
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
