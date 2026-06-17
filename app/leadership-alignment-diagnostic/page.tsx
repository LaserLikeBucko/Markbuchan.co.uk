import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Leadership Alignment Diagnostic | Mark Buchan MSc",
  description: "A two-week senior engagement that locates your organisation's hidden gap with precision. Find out what is actually driving behaviour — and co-design the solution. More humanity. Less PowerPoint.",
openGraph: {
  title: "Leadership Alignment Diagnostic | Mark Buchan MSc",
  description: "A two-week senior engagement that locates your organisation's hidden gap with precision. More humanity. Less PowerPoint.",
  images: [{ url: "/images/og/og-leadership-diagnostic.jpg", width: 1920, height: 1080 }],
},
}

export default function DiagnosticEngagementPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              The Human Alignment Co.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance">
              The Human Alignment Diagnostic
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto">
              More humanity. Less PowerPoint.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Book a Diagnostic Conversation →
            </a>
          </div>
        </section>

        {/* OPENING PROBLEM */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The real problem
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] text-balance mb-8">
              Is your organisation performing below its potential — and nobody can quite explain why?
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The presenting problem is rarely the real problem.
              </p>
              <p>
                Poor collaboration. Stalled change. Cultural friction. 
                Communication that goes in circles. Teams pulling in 
                different directions. Change initiatives that launch 
                with energy and quietly disappear. Your best people 
                leaving without fully explaining why.
              </p>
              <p>
                These are not communication problems. They are not 
                personality problems. They are not even leadership 
                problems — at least not in the way most consultants 
                frame them.
              </p>
              <p>
                These are symptoms. Beneath every one of them, in more 
                than twenty years of working inside organisations at 
                every level, the root cause has been the same:
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                A gap between the values the organisation declares and the values that are actually running the show.
              </p>
              <p>
                That gap doesn't show up in the annual report. It doesn't appear on the org chart. But your people feel it every day — in the meetings that go nowhere, the decisions that quietly contradict what was agreed, the talent that leaves without fully explaining why.
              </p>
              <p>
                It is costing you more than you realise.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              What this is
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] text-balance mb-8">
              Not a training programme. Not a culture survey. Not a deck of recommendations left for you to implement alone.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#111110] opacity-80">
              <p>
                The Human Alignment Diagnostic is a two-week senior engagement that locates your organisation's hidden gap with precision — and gives you a clear, co-designed path to closing it.
              </p>
              <p>
                It is a rigorous diagnostic followed by a co-designed solution that your organisation builds with us, not receives from us.
              </p>
              <p className="font-semibold text-[#111110] opacity-100">
                That distinction matters. Solutions imposed from outside rarely stick. Solutions co-created from the inside do.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              How it works
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-16">
              Two weeks. Two phases. One honest picture.
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Week 1 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111110] text-[#ffff00] font-bold text-sm">1</span>
                  <h3 className="text-xl font-bold text-[#111110]">Week One — The Diagnostic</h3>
                </div>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    We gain access to your organisation at every level. Senior leadership. Middle management. Frontline teams. Using a semi-structured qualitative interview process grounded in linguistics and storytelling, we surface what is actually driving behaviour — not the official version, but the operating reality.
                  </p>
                  <p>
                    We use the Values Integrity Model to locate precisely where the gap sits: between declared values and operating ones, between what leadership models and what the system rewards.
                  </p>
                  <p>
                    The conversations are honest. People tell us things they haven't said to anyone inside the organisation — because the questions are designed to make honesty feel safe.
                  </p>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff3131] text-white font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold text-[#111110]">Week Two — The Situation Appraisal</h3>
                </div>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    We synthesise everything into a Situation Appraisal: a clear, honest account of what is actually happening, why, and what it is costing the organisation in measurable terms.
                  </p>
                  <p>
                    The report presents options — not a single prescribed solution — framed against your budget and your strategic priorities. Every recommendation is anchored in the business case, not the theory.
                  </p>
                  <p>
                    Then we do something most consultants don't. We invite you into a co-design session — where your leadership team builds the solution with us. Because the people who build the solution own it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              What makes this different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#ffff00] mb-16">
              Most consultants diagnose and prescribe.<br />We diagnose and co-create.
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[#ffff00]">We speak to everyone</h3>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  Not just leadership. We speak to everyone — and trust what we hear. The most important intelligence in your organisation is usually sitting three levels below the boardroom.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[#ffff00]">We present options, not answers</h3>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  We present options in a conversation and build the solution together. You own it because you built it — which is the only reason change ever sticks.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[#ffff00]">We come with a framework</h3>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  The Values Integrity Model — developed over twenty years and documented in The Hidden Gap — gives us a diagnostic precision most consultants don't have. We don't just describe the problem. We locate it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Who this is for
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-10">
              CEOs, MDs, and executive teams who are ready for the honest conversation.
            </h2>

            <div className="flex flex-col gap-4">
              {[
                "Have tried the usual interventions — the workshops, the away days, the culture programmes — and found the same problems returning six months later.",
                "Suspect the real issue is something nobody has been willing to name directly.",
                "Want a partner who will tell them the truth — including the uncomfortable parts — rather than validate what they already believe.",
                "Are ready to do the work rather than buy the answer.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ffff00] border-2 border-[#111110] flex items-center justify-center text-xs font-bold text-[#111110]">✓</span>
                  <p className="text-lg leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT MARK */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Who you are working with
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-6">Mark Buchan MSc</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#111110] opacity-80">
              <p>
                Mark has spent more than twenty years working inside organisations where the gap between declared and operating values was costing more than anyone had named. As a consultant, coach, and facilitator he has worked with leadership teams across industries — surfacing what is actually driving behaviour and creating the conditions for honest, lasting change.
              </p>
              <p>
                His Masters in Executive Coaching examined the real value organisations derive from coaching — giving academic grounding to what he was already seeing in practice.
              </p>
              <p>
                He is the author of <em>The Hidden Gap: Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture</em> — the most complete account of the Values Integrity Model and how to use it in practice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffff00] mb-6">
              Start With A Conversation
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-60 mb-4 max-w-xl mx-auto">
              The Human Alignment Diagnostic begins with a free 30-minute discovery call. No pitch. No proposal. Just an honest conversation about what is happening in your organisation and whether this is the right intervention for it.
            </p>
            <p className="text-lg leading-relaxed text-white opacity-60 mb-10 max-w-xl mx-auto">
              If it isn't — we will tell you that too.
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
