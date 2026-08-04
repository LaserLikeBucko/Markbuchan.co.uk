import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { FamiliarChecklist } from "@/components/familiar-checklist"

export const metadata: Metadata = {
  title: "Embedding & Sustaining Organisational Change — Mark Buchan MSc",
  description:
    "Helping organisations make new ways of working stick — beyond the launch, into adoption, reinforcement and lasting change.",
  openGraph: {
    title: "Embedding & Sustaining Organisational Change — Mark Buchan MSc",
    description:
      "Helping organisations make new ways of working stick — beyond the launch, into adoption, reinforcement and lasting change.",
    images: [{ url: "/images/og/og-work-with-me.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL = "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const FAMILIAR_ITEMS = [
  "The transformation launched successfully. Old behaviours returned soon after.",
  "People received the training. Decision-making remained unchanged.",
  "Culture was measured at the beginning. The conditions shaping behaviour were never revisited.",
  "Leaders advocate the new approach. Structures, incentives and decision-making still reinforce the old one.",
  "The pilot delivered results. Scaling the change proved much harder.",
  "The new process is understood. Under pressure, people return to familiar habits.",
]

const SUSTAIN_PILLARS = [
  {
    title: "Adoption",
    desc: "Change must move beyond awareness into everyday practice.",
  },
  {
    title: "Reinforcement",
    desc: "New behaviours need to be supported by the systems, decisions and expectations around them.",
  },
  {
    title: "Sustainability",
    desc: "Transformation succeeds when it continues after the programme team has moved on.",
  },
]

const SUPPORT_AREAS = [
  {
    title: "Leadership Coaching",
    desc: "Helping leaders understand how their behaviours, decisions and actions influence whether change is adopted and sustained.",
  },
  {
    title: "Team Facilitation",
    desc: "Helping teams strengthen collaboration, communication and the practical ways of working needed to support transformation.",
  },
  {
    title: "Learning Groups",
    desc: "Creating structured spaces where people can reflect, experiment and build confidence in new approaches.",
  },
  {
    title: "Embedding New Ways of Working",
    desc: "Supporting organisations to translate new approaches into everyday habits, practices and behaviours.",
  },
]

export default function EmbeddingChangePage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Embedding Change
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Creating the Conditions for Sustainable Change
            </h1>
            <p className="text-2xl font-semibold leading-relaxed text-[#1C1B18]/90 max-w-2xl mx-auto mb-4">
              Launching change is only the beginning. Sustaining it is where transformation succeeds.
            </p>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-2xl mx-auto mb-10">
              Helping organisations embed new ways of working so transformation becomes part of everyday practice, not just another initiative.
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

        {/* THE PROBLEM */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              The problem
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] text-balance mb-8">
              Why Change Doesn't Stick
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/80">
              <p>
                After more than two decades helping organisations navigate complex change, one pattern has remained remarkably consistent: introducing change is rarely the hardest part. Sustaining it is.
              </p>
              <p>
                Many transformations begin with genuine commitment and early momentum. New ways of working are introduced, leaders see early progress and teams begin to embrace new behaviours. Yet as organisations adapt to changing priorities and everyday pressures, it's common for old habits and familiar ways of working to re-emerge.
              </p>
              <p>
                This pattern is reflected in transformation research, which consistently shows that sustaining change—and realising its intended benefits—is one of the greatest challenges organisations face.
              </p>
              <p>
                Lasting transformation depends on more than a successful launch. It depends on creating the conditions that allow change to endure.
              </p>
            </div>
          </div>
        </section>

        {/* PATTERNS WE SEE REPEATEDLY */}
        <FamiliarChecklist items={FAMILIAR_ITEMS} showBullets={false} heading="The Challenges I See Most Often" />

        {/* THE REALITY OF SUSTAINING CHANGE */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              The reality
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] text-balance mb-8 max-w-3xl">
              The Reality of Sustaining Change
            </h2>
            <p className="text-lg leading-relaxed text-[#1C1B18]/80 max-w-3xl mb-16">
              Research and experience point to a consistent pattern: successful transformation depends on more than implementation. It depends on whether the organisation can sustain new behaviours over time.
            </p>
            <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-[rgba(27,75,128,0.25)]">
              {SUSTAIN_PILLARS.map((p) => (
                <div key={p.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
                  <h3 className="text-xl font-bold text-[#1C1B18] mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I HELP ORGANISATIONS SUSTAIN CHANGE */}
        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              How I help
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] text-balance mb-8">
              How I Help Organisations Sustain Change
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/80 mb-6">
              <p>
                Sustaining transformation requires more than introducing new processes or delivering training. It requires helping people and teams build the behaviours, capabilities and ways of working that allow change to become part of everyday practice.
              </p>
              <p>
                The approach is designed around your organisation's context and may include:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {SUPPORT_AREAS.map((a) => (
                <div key={a.title} className="rounded-2xl border-2 border-[#1b4b80] bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1b4b80] mb-3">{a.title}</h3>
                  <p className="text-[#333330] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TAILORED SUPPORT / FINAL CTA */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE8DE] mb-6">
              Support designed around your organisation
            </h2>
            <p className="text-lg leading-relaxed text-white/70 mb-4 max-w-xl mx-auto">
              Every organisation is different, so there is no standard programme.
            </p>
            <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-xl mx-auto">
              Support may range from targeted team interventions and facilitated learning through to organisation-wide coaching, workshops and advisory support. Together, we'll identify the approach that best fits your context, objectives and stage of transformation.
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
