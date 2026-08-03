import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { NumberedList } from "@/components/numbered-list"
import { FamiliarChecklist } from "@/components/familiar-checklist"

export const metadata: Metadata = {
  title: "Transformation Advisory — Mark Buchan MSc",
  description:
    "An independent, diagnostic approach to complex transformation — helping leaders understand what's getting in the way and identify the interventions that create lasting change.",
  openGraph: {
    title: "Transformation Advisory — Mark Buchan MSc",
    description:
      "An independent, diagnostic approach to complex transformation — helping leaders understand what's getting in the way and identify the interventions that create lasting change.",
    images: [{ url: "/images/og/og-work-with-me.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL = "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const RESEARCH_POINTS = [
  {
    title: "Leadership alignment",
    desc: "Consistently identified as a critical factor in transformation success.",
  },
  {
    title: "Clear vision and direction",
    desc: "Helps organisations understand why change is needed and how to move forward.",
  },
  {
    title: "Organisational readiness",
    desc: "Determines whether new ways of working can be adopted and sustained.",
  },
]

const DIAGNOSTIC_POINTS = [
  {
    title: "Leadership alignment & sponsorship",
    desc: "Are leaders genuinely aligned on the purpose, priorities and approach, and providing the visible sponsorship needed for change to succeed — or are different assumptions creating hidden barriers?",
  },
  {
    title: "Sustainability",
    desc: "Will the change be sustained beyond initial delivery, with the capabilities and support needed to make it part of everyday practice?",
  },
  {
    title: "Capability & culture",
    desc: "Are the capabilities, behaviours and ways of working in place to support successful transformation?",
  },
  {
    title: "Change management",
    desc: "Is there a structured approach to supporting adoption, engagement and behavioural change?",
  },
  {
    title: "Change-load assessment",
    desc: "Can the organisation absorb another significant change, or is transformation fatigue creating hidden risks?",
  },
]

const FAMILIAR_ITEMS = [
  "Strong start. Momentum lost within months.",
  "Leadership teams are not fully aligned on what success means.",
  "Pilots succeed. Scaling proves harder.",
  "Previous change efforts have not delivered the intended outcomes.",
  "Alignment at the top does not always translate into action throughout the organisation.",
  "A clear roadmap exists, but accountability and ownership are unclear.",
  "Repeated transformation efforts are creating fatigue and uncertainty.",
  "The business case secured approval, but the wider organisation lacks clarity on the change.",
]

const APPROACH_STEPS = [
  {
    title: "Diagnostic",
    desc: "I speak with leaders and key stakeholders across the organisation to understand the current reality, challenges and perspectives. Findings are mapped against the five diagnostic areas.",
  },
  {
    title: "Situation Appraisal",
    desc: "A clear assessment of the key challenges, their impact, and the options available — considered against your strategy, priorities and constraints.",
  },
  {
    title: "Co-design session",
    desc: "Working with the leadership team, we define the priorities, interventions and actions needed to move transformation forward. The goal is not just a recommendation, but clarity and commitment around what happens next.",
  },
]

export default function TransformationAdvisoryPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Transformation Advisory
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Transformation is complex. Create the conditions for success.
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-2xl mx-auto mb-6">
              Transformation is complex. Success depends on more than strategy or technology alone. I help leaders understand what's getting in the way and identify the interventions that create lasting transformation.
            </p>
            <p className="text-lg font-semibold text-[#1C1B18] max-w-2xl mx-auto mb-10">
              Ready to bring clarity to your transformation challenges?
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

        {/* THE REAL CHALLENGE */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              The Real Challenge
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] text-balance mb-8">
              The visible challenges in transformation are rarely the root cause.
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/80">
              <p>
                When transformation starts to struggle, the symptoms often appear in familiar ways: what looks like resistance, slow adoption, competing priorities or a lack of momentum.
              </p>
              <p>
                But these are often signals of deeper issues — unclear direction, limited leadership alignment, or a lack of shared understanding about what needs to change and why.
              </p>
              <p>
                Research consistently shows that leadership alignment and clarity of vision are among the strongest factors influencing transformation outcomes. When leaders are not aligned on the purpose, priorities and approach, the impact is felt throughout the organisation.
              </p>
              <p>
                By understanding what is really getting in the way, leaders can focus their efforts where they will make the greatest difference.
              </p>
            </div>
          </div>
        </section>

        {/* A DIAGNOSTIC APPROACH */}
        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] mb-8">
              A diagnostic approach to complex transformation
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/80">
              <p>
                Transformation Advisory provides leaders with an independent view of what is helping or hindering transformation progress.
              </p>
              <p>
                Drawing on experience across organisational development, culture change, technology and transformation, I help identify the underlying challenges, clarify priorities and determine the interventions needed to move forward.
              </p>
              <p>
                This is not a generic assessment or a set of recommendations left for others to implement. It is a focused advisory process that combines external insight with leadership involvement to create clarity, alignment and a practical path forward.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT THE RESEARCH TELLS US */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-6 text-center text-2xl md:text-3xl font-bold text-[#EDE8DE]">
              What the research tells us
            </p>
            <p className="mb-12 text-center text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              Successful transformation depends less on the ambition of the change and more on the conditions created around it.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {RESEARCH_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[rgba(27,75,128,0.15)] bg-[#EDE8DE] p-6"
                >
                  <h3 className="text-lg font-bold text-[#1b4b80] mb-2">{point.title}</h3>
                  <p className="text-[#1C1B18]/70 leading-relaxed text-base">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE TRANSFORMATION DIAGNOSTIC */}
        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-6 text-center">
              The Transformation Diagnostic
            </h2>
            <p className="text-lg leading-relaxed text-[#1C1B18]/80 text-center max-w-2xl mx-auto mb-12">
              I assess five critical areas that influence whether transformation gains momentum or struggles to deliver the intended outcomes.
            </p>
            <NumberedList items={DIAGNOSTIC_POINTS} />
          </div>
        </section>

        {/* THE TRANSFORMATION ADVISORY APPROACH */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-[#EDE8DE] mb-12 text-center">
              The Transformation Advisory Approach
            </h2>
            <NumberedList items={APPROACH_STEPS} />
            <p className="mt-8 text-center text-base text-white/60 italic">
              For smaller organisations, the diagnostic can be adapted and completed within a shorter timeframe.
            </p>
          </div>
        </section>

        {/* TRANSFORMATION CHALLENGES LEADERS COMMONLY FACE */}
        <FamiliarChecklist
          items={FAMILIAR_ITEMS}
          showBullets={false}
          heading="Transformation challenges leaders commonly face"
          variant="ivory"
        />

        {/* EXPERIENCE BEHIND THE APPROACH */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1C1B18] mb-8">
              Experience behind the approach
            </h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/80">
              <p>
                Transformation Advisory is built on more than theory. It draws on 20+ years of experience helping organisations navigate technology change, transformation and leadership challenges.
              </p>
              <p>
                My approach combines practical experience across technology, leadership and coaching with research and insights from global transformation studies — bringing together evidence-based thinking with the realities leaders face when change becomes complex.
              </p>
              <p>
                The diagnostic is also informed by established transformation research from sources including McKinsey, BCG, Prosci, KPMG, Gartner and Accenture, alongside patterns observed through practical experience working with organisations through change.
              </p>
              <p>
                The result is an objective view of what is helping or hindering transformation progress, and where focused intervention can create the greatest impact.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="cta" className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE8DE] mb-6">
              Start with an initial conversation
            </h2>
            <p className="text-lg leading-relaxed text-white/70 mb-4 max-w-xl mx-auto">
              Bring the transformation challenge as you see it. We'll explore what's getting in the way, whether the diagnostic is the right approach, and what next steps would be most valuable.
            </p>
            <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-xl mx-auto">
              If this isn't the right fit, we'll say so.
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
