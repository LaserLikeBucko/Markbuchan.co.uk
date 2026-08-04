import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Leadership Team Alignment & Sponsorship Coaching — Mark Buchan MSc",
  description:
    "Helping leadership teams create clarity, confidence and shared direction through complex change.",
  openGraph: {
    title: "Leadership Team Alignment & Sponsorship Coaching — Mark Buchan MSc",
    description:
      "Helping leadership teams create clarity, confidence and shared direction through complex change.",
    images: [{ url: "/images/og/og-work-with-me.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL = "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const RECOGNITIONS = [
  {
    quote: "We all agreed in the meeting. So why hasn't anything changed?",
    body: "Agreement in the room does not always translate into alignment in practice. Different assumptions, priorities and interpretations can remain hidden until they begin to affect decisions and delivery.",
  },
  {
    quote: "I'm the executive sponsor. Nobody told me what that actually means.",
    body: "Sponsorship is often assigned as a role, but rarely explored as a leadership responsibility. The gap between holding the title and demonstrating the behaviours needed to sponsor change is where momentum can be lost.",
  },
  {
    quote: "Everyone below me says they're aligned. I'm not sure we are.",
    body: "Leaders can often sense when something is not quite aligned, even when conversations suggest otherwise. The challenge is identifying where those differences sit and what needs to change to create genuine shared direction.",
  },
]

const OUTCOMES = [
  {
    title: "Shared Direction",
    desc: "Success is clearly defined, and the reason for change is understood across the leadership team — not left to individual interpretation.",
  },
  {
    title: "Genuine Alignment",
    desc: "Competing priorities, differing perspectives and unspoken concerns are surfaced and resolved at leadership level — rather than allowed to slow progress.",
  },
  {
    title: "Visible Sponsorship",
    desc: "Leaders move from supporting change in principle to actively demonstrating the behaviours, decisions and commitment that sustain momentum.",
  },
]

export default function LeadershipAlignmentPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Leadership Alignment & Sponsorship
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Transformation succeeds when leaders align, commit and actively sponsor change.
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-2xl mx-auto mb-10">
              I help leadership teams align around a shared vision, strengthen sponsorship and lead transformation with clarity, consistency and confidence.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Discuss Your Transformation →
            </a>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* WHO THIS IS FOR */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              Who this is for
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] mb-8">
              When Leadership Alignment Matters
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#1C1B18]/80">
              <p>
                After more than 20 years working with organisations through technology-enabled transformation, I've seen the same pattern time and again.
              </p>
              <p>
                Leadership teams often appear aligned. Conversations end with agreement. Decisions are made. The transformation moves forward.
              </p>
              <p>
                Yet beneath the surface, different assumptions remain. Priorities are interpreted differently. Sponsorship becomes inconsistent. Over time, those hidden gaps begin to slow progress, dilute confidence and make change harder to sustain.
              </p>
              <p>
                This isn't just my experience. Research has consistently shown that effective executive sponsorship is one of the strongest predictors of successful organisational change. Organisations with highly effective sponsors are significantly more likely to achieve their transformation objectives than those where sponsorship is weak or inconsistent.
              </p>
              <p>
                The challenge is rarely a lack of commitment. More often, it's that leaders are working from different perspectives without realising it.
              </p>
              <p className="text-[#1C1B18] font-semibold text-xl border-l-4 border-[#1b4b80] pl-6">
                I help leadership teams surface those hidden gaps, build genuine alignment and provide the visible sponsorship that gives transformation the best chance of succeeding.
              </p>
            </div>
          </div>
        </section>

        {/* THREE RECOGNITIONS */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-16 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#EDE8DE]/70">
              The Leadership Dynamics That Shape Transformation
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {RECOGNITIONS.map((r) => (
                <div key={r.quote} className="rounded-2xl border border-[rgba(27,75,128,0.15)] bg-[#EDE8DE] p-8">
                  <p className="text-[#1b4b80] text-lg font-semibold leading-relaxed mb-4">
                    "{r.quote}"
                  </p>
                  <p className="text-[#1C1B18]/70 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE OUTCOMES */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              What shifts
            </p>
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-16">
              The Shift: From Assumption to Alignment
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-[rgba(27,75,128,0.25)]">
              {OUTCOMES.map((o, i) => (
                <div key={o.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-bold text-[#1C1B18] mb-3">{o.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENT OPTIONS */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section id="engagement-options" className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              How we can work together
            </p>
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-6">
              Tailored Support for Leadership Teams and Sponsors
            </h2>
            <p className="text-lg leading-relaxed text-[#1C1B18]/75 max-w-3xl mb-16">
              Different transformation challenges require different levels of support. Whether you are looking for targeted intervention, ongoing development or leadership-team alignment, we can shape an approach around your context and goals.
            </p>

            <div className="grid gap-6 md:grid-cols-3">

              {/* LEADERSHIP ALIGNMENT */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#1b4b80] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80] mb-3">Leadership Team Advisory</p>
                  <h3 className="text-2xl font-bold text-[#1C1B18] mb-4">
                    Leadership Alignment
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    Six sessions building shared direction and active sponsorship across a leadership team, at their pace, to their goals.
                  </p>
                </div>
                <a
                  href={DIAGNOSTIC_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#1b4b80] px-5 py-3 text-white font-semibold hover:bg-[#1C1B18] transition-colors"
                >
                  Discuss Your Transformation →
                </a>
              </div>

              {/* SPONSOR RESET */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#1b4b80] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80] mb-3">Focused Advisory Session</p>
                  <h3 className="text-2xl font-bold text-[#1C1B18] mb-4">
                    Sponsor Reset
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    A focused 60-minute session on one live sponsorship problem. Leave with something you can act on this week.
                  </p>
                </div>
                <a
                  href={DIAGNOSTIC_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#1b4b80] px-5 py-3 text-white font-semibold hover:bg-[#1C1B18] transition-colors"
                >
                  Discuss Your Transformation →
                </a>
              </div>

              {/* SPONSOR CIRCLE */}
              <div className="flex h-full flex-col rounded-2xl border-2 border-[#1b4b80] bg-white p-8">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80] mb-3">Executive Sponsor Development</p>
                  <h3 className="text-2xl font-bold text-[#1C1B18] mb-4">
                    Sponsor Circle
                  </h3>
                  <p className="text-[#333330] leading-relaxed">
                    Small-group coaching for leaders sponsoring live change, using shared frameworks and peer challenge. Monthly, places restricted.
                  </p>
                </div>
                <a
                  href={DIAGNOSTIC_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#1b4b80] px-5 py-3 text-white font-semibold hover:bg-[#1C1B18] transition-colors"
                >
                  Register Interest →
                </a>
              </div>

            </div>

            {/* WHOLE TEAM SUPPORT */}
            <div className="mt-10 rounded-2xl border-2 border-[#1b4b80] bg-white p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80] mb-3">Bespoke Team Engagement</p>
              <h3 className="text-2xl font-bold text-[#1C1B18] mb-4">Whole Team Support</h3>
              <p className="text-[#333330] mb-6 max-w-xl mx-auto">
                Team engagement is available standalone or as part of Transformation Advisory. Pricing on enquiry.
              </p>
              <a
                href={DIAGNOSTIC_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#1b4b80] px-6 py-3 text-white font-semibold hover:bg-[#1C1B18] transition-colors"
              >
                Discuss Your Transformation →
              </a>
            </div>

          </div>
        </section>

        {/* CASE STUDY — placeholder, needs a real, permissioned story */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              Case Study
            </p>
            <Separator className="mb-8 max-w-16 bg-[#1b4b80]/40" />
            <div className="rounded-2xl border-2 border-dashed border-[rgba(28,27,24,0.2)] bg-[rgba(28,27,24,0.03)] p-10 text-center">
              <p className="font-bold text-[#1C1B18] text-base uppercase tracking-wide opacity-50 mb-3">
                Case study coming soon
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                A real client account is on its way — leadership team believed one thing was the problem, the diagnostic revealed a sponsorship or alignment gap, and what shifted once it was named.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE8DE] mb-6">
              Ready to strengthen leadership alignment and sponsorship for transformation?
            </h2>
            <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-xl mx-auto">
              An initial 30-minute conversation to understand your transformation context, explore leadership alignment and sponsorship, and determine whether my experience and approach are the right fit for your organisation.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#EDE8DE] px-8 py-4 text-[#1C1B18] text-lg font-semibold hover:bg-[#1C1B18] hover:text-[#EDE8DE] transition-colors"
            >
              Discuss Your Transformation →
            </a>
            <p className="mt-6 text-base text-white/50">
              Prefer email? Contact me directly at iam@markbuchan.co.uk
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
