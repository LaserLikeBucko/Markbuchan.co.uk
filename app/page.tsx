import type { Metadata } from "next"
import Image from "next/image"
import { Cpu, RefreshCw, Building2, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Underline } from "@/components/animated-underline"
import { AnimatedSteps } from "@/components/animated-steps"

export const metadata: Metadata = {
  title: "Mark Buchan MSc — Transformation Advisory for Leaders",
  description:
    "Helping leaders navigate complex organisational transformation and bring their people with them. Leadership alignment, transformation advisory and change adoption.",
  openGraph: {
    title: "Mark Buchan MSc — Transformation Advisory for Leaders",
    description:
      "Helping leaders navigate complex organisational transformation and bring their people with them.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const supportAreas = [
  { label: "Digital and technology-enabled change", icon: Cpu },
  { label: "Organisational transformation", icon: Building2 },
  { label: "Change adoption & team alignment", icon: Users },
  { label: "New ways of working", icon: RefreshCw },
]

const challenges = [
  {
    label: "Leadership Alignment & Sponsorship",
    body: "Your transformation strategy is clear. But are your leaders truly aligned on the priorities, decisions and actions needed to make it succeed?",
    cta: "Explore Leadership Alignment",
  },
  {
    label: "Change Fatigue",
    body: "Your organisation has been through wave after wave of change. People are tired, sceptical and struggling to engage with the next transformation.",
    cta: "Explore Transformation Advisory",
  },
  {
    label: "Capability Gaps",
    body: "Your transformation requires new capabilities, behaviours and skills. Without the right foundations in place, organisations struggle to turn strategic ambition into sustainable results.",
    cta: "Explore Embedding Change",
  },
]

const services = [
  {
    label: "Transformation Advisory",
    strap: "Helping leaders understand and overcome transformation challenges",
    body: "When transformation is not delivering the expected results, I help leaders understand what is getting in the way and identify the right interventions.",
    cta: "Explore Transformation Support",
  },
  {
    label: "Leadership Alignment",
    strap: "Helping leadership teams create alignment for change",
    body: "Helping leadership teams create clarity, confidence and shared direction through complex change.",
    cta: "Explore Leadership Support",
  },
  {
    label: "Embedding Change",
    strap: "Helping organisations embed change and new ways of working",
    body: "Helping organisations ensure new ways of working are adopted, sustained and become part of everyday practice.",
    cta: "Explore Embedding Change",
  },
]

const trustPoints = [
  {
    headline: "20+ years",
    body: ["Helping senior leaders deliver complex organisational transformation and navigate critical moments of change."],
  },
  {
    headline: "International & cross-sector",
    body: ["Supporting transformation across Fintech, Aerospace, Telecoms and Technology, working with organisations facing significant change challenges."],
  },
  {
    headline: "Author & speaker",
    body: [
      "Author of two books on organisational transformation, including The Hidden Gap.",
      "Trusted speaker on leadership, organisational change and transformation.",
    ],
    cta: { label: "Explore the books", href: "/book" },
  },
]

const steps = [
  {
    number: "1",
    title: "Diagnostic Call",
    body: "A focused conversation to understand your current transformation challenge, what is getting in the way, and what success needs to look like. We'll explore whether my experience and approach are the right fit for your situation.",
  },
  {
    number: "2",
    title: "Transformation Diagnostic",
    body: "I work with you to understand the wider picture — leadership alignment, ways of working, team dynamics and the barriers preventing progress. You gain clarity on what needs to change and where to focus attention.",
  },
  {
    number: "3",
    title: "Targeted Change Intervention",
    body: "Working alongside leaders to design and deliver the right change interventions — helping people adopt new ways of working and ensuring transformation creates lasting impact.",
  },
]

const testimonials = [
  {
    quote:
      "Mark is an excellent listener, extremely adaptable in approach and above all an experienced coach and I would highly recommend him to help drive change within an organisation... Mark was able to educate through practical examples, workshops and stories of experience... In order for an organisation to change, its people must want to change. Mark delivered a robust approach towards this change, finding new and engaging ways to work with people of differing levels of experience, seniority and understanding.",
    name: "Steven Shaw",
    title: "Technical Director, Realise (at the time of engagement)",
  },
  {
    quote:
      "Mark worked as part of the RADTAC team at BT designing and implementing their systems delivery lifecycle, at the time this was the largest project in Europe. Mark was a key member of the team who consistently produced excellent results within tight timescales and a very complex political environment. I highly recommend Mark for any position he applies for, RADTAC have no hesitation in working with Mark in the future.",
    name: "Peter Measey",
    title: "Founder, RADTAC (at the time of engagement)",
  },
  {
    quote:
      "Mark was part of an agile transformation team that delivered additional support and coaching to the Senior Delivery Managers at AXA Direct & Partnerships in 2013. As one of the senior managers, I benefited from 1:1 coaching with Mark. We built a trusted and professional relationship to create the opportunities for me to develop my agile skillset. Mark is a true professional and had a personal and intelligent approach to coaching individuals; is confident, confidential and demonstrated a challenging and empathic approach without 'letting me off the hook'... I would recommend Mark in any coaching engagement to assist in exploring individuals in their quest for personal growth.",
    name: "John Botting",
    title: "IT Delivery Partner, AXA (at the time of engagement)",
  },
  {
    quote:
      "Mark is a well rounded individual that I would class as extremely knowledgable in the Agile space. He managed to give very sound guidance, knowledge and direction to a programme going through huge change. His facilitation skills are excellent and the way he interacts, teaches and mentors people is exceptional. Mark can operate at all levels and talks in language that is understandable and adapted to the audience. I would have no hesitation hiring or recommending Mark in the future. A real asset to any company on the Agile journey.",
    name: "Mick Power",
    title: "Programme Manager, BUPA (at the time of engagement)",
  },
]

export default function HomeV2Page() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="mx-auto w-full max-w-[260px] md:order-2 md:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(28,27,24,0.18)] ring-1 ring-[rgba(28,27,24,0.08)]">
                <Image
                  src="/images/mb.jpg"
                  alt="Mark Buchan MSc"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:order-1 md:text-left">
              <p className="text-base md:text-lg font-bold tracking-[0.05em] text-[#1b4b80]">
                Transformation Advisory for Leaders Facing Complex Change
              </p>

              <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
                Helping leaders navigate transformation and bring their{" "}
                <Underline>people</Underline> with them.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
                Complex change requires more than a strategy. I work with
                leaders to diagnose challenges, align teams and create the
                conditions for transformation to be adopted and sustained.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#1C1B18]/75">
                20+ years supporting organisations through complex
                transformation. Helping leadership teams move from
                uncertainty and resistance to alignment and action.
              </p>

              <div className="mt-8">
                <a
                  href={DIAGNOSTIC_CALL_URL}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#1C1B18]"
                >
                  Book a Diagnostic Call
                </a>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#1C1B18]/80 mx-auto md:mx-0">
                A focused 30-minute conversation to discuss your
                transformation challenges and potential next steps.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* SUPPORTING LEADERSHIP TEAMS THROUGH */}
        <section className="bg-[#1b4b80] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl md:text-5xl font-semibold text-[#EDE8DE] text-balance md:whitespace-nowrap">
              Supporting leadership teams through:
            </h2>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-4">
              {supportAreas.map((area) => (
                <div
                  key={area.label}
                  className="flex h-full flex-col items-center rounded-2xl border border-[rgba(28,27,24,0.1)] bg-[#EDE8DE] p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4b80]/10">
                    <area.icon
                      className="h-6 w-6 text-[#1b4b80]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-relaxed text-[#1C1B18]">
                    {area.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-4xl text-center">
              <p className="text-base leading-relaxed text-[#EDE8DE] italic">
                &ldquo;Mark is an excellent listener, extremely adaptable in
                approach and above all an experienced coach. I would highly
                recommend him to help drive change within an organisation.
                Mark was able to educate through practical examples,
                workshops and stories of experience, finding new and
                engaging ways to work with people of differing levels of
                experience, seniority and understanding.&rdquo;
              </p>
              <p className="mt-4 text-lg font-bold text-[#EDE8DE]">
                Steven Shaw
              </p>
              <p className="text-base font-semibold text-[#EDE8DE]">
                Technical Director, Realise (at the time of engagement)
              </p>
            </div>
          </div>
        </section>

        {/* PEOPLE PROBLEM / CHALLENGES */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mx-auto text-2xl md:text-4xl font-semibold leading-snug text-[#1C1B18]">
              The strategy may be sound. The technology may be ready. But
              transformation succeeds or fails through{" "}
              <Underline>people</Underline>.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1C1B18]/75">
              Research shows that time and again the same issues emerge when
              organisations start new change initiatives: leaders unable to
              align around a clear vision for the transformation, leading to
              poor sponsorship; a lack of skills and capability in the
              organisation around how to manage change and make it stick;
              and too many change initiatives ongoing at once, leading
              employees and managers to push back on change.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.label}
                className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1C1B18]">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1C1B18]/75">
                    {item.body}
                  </p>
                </div>
                <a
                  href="/work-with-me"
                  className="mt-6 inline-flex items-center rounded-md bg-[#1b4b80] px-4 py-2.5 text-sm font-medium text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
                >
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* WHY TRANSFORMATION NEEDS MORE THAN A STRATEGY */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1b4b80]">
              Why it matters
            </p>
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold leading-snug text-[#1C1B18]">
              Why transformation needs more than a strategy
            </h2>

            <div className="mx-auto mt-8 flex flex-col gap-5 text-lg leading-relaxed text-[#1C1B18]/75">
              <p>
                Transformation is rarely difficult because leaders lack
                ambition or organisations lack capability. It is difficult
                because changing the way people work requires alignment,
                understanding and commitment at every level.
              </p>
              <p>
                Technology, processes and strategies can create the
                opportunity for change, but people determine whether that
                change succeeds.
              </p>
              <p>
                Leaders need more than a transformation plan. They need the
                insight to understand what is getting in the way, the
                confidence to make difficult decisions, and the ability to
                bring their people with them.
              </p>
              <p className="text-[#1C1B18] font-medium">
                That is where I help: creating clarity, alignment and
                momentum so transformation can move from intention to
                lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* HOW I HELP */}
        <section className="bg-[#1b4b80] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-[#EDE8DE]">
                How I help leaders navigate transformation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#EDE8DE]/75">
                No two transformations are the same, but the barriers that
                stall them often are. I work with leaders across three
                connected areas — diagnosing what&apos;s really getting in
                the way, aligning leadership around a shared direction, and
                embedding the new ways of working that make change last.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-[#EDE8DE] p-6 shadow-sm"
                >
                  <div className="min-h-[190px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80]">
                      {service.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#1C1B18]">
                      {service.strap}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1C1B18]/75">
                      {service.body}
                    </p>
                  </div>
                  <a
                    href="/work-with-me"
                    className="mt-auto inline-flex items-center rounded-md bg-[#1C1B18] px-4 py-2.5 text-sm font-medium text-[#EDE8DE] hover:bg-[#141311]"
                  >
                    {service.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUSTED BY LEADERS */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Trusted by Leaders
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:divide-x md:divide-[rgba(28,27,24,0.15)]">
              {trustPoints.map((point) => (
                <div key={point.headline} className="text-center md:px-8">
                  <p className="text-2xl font-semibold text-[#1b4b80]">
                    {point.headline}
                  </p>
                  <div className="mt-3 flex flex-col gap-3">
                    {point.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-[#1C1B18]/75"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {point.cta && (
                    <a
                      href={point.cta.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-[#1b4b80] hover:text-[#163C66]"
                    >
                      → {point.cta.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1b4b80]">
                How it works
              </p>
              <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-[#1C1B18]">
                From transformation challenge to sustainable change
              </h2>
            </div>

            <AnimatedSteps steps={steps} />
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* TESTIMONIALS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              What leaders say about working with me
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-8 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-[#1C1B18]/80 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[#1C1B18]">
                      {t.name}
                    </p>
                    <p className="text-sm text-[#1C1B18] opacity-50">
                      {t.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-[#EDE8DE]">
              The first step
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#EDE8DE]">
              Book a Diagnostic Call
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EDE8DE]/70">
              A focused 30-minute conversation to understand your
              transformation challenge, discuss the context you&rsquo;re
              working in, and determine whether my experience and approach
              could help. This is not a generic discovery call or a sales
              pitch. It is an opportunity to explore the challenge
              you&rsquo;re facing and decide whether a further conversation
              would be valuable. If I&rsquo;m not the right person to help,
              I&rsquo;ll say so.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#EDE8DE] px-8 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-[#163C66] hover:text-[#EDE8DE]"
            >
              Book a Diagnostic Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
