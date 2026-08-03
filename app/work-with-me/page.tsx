import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Work With Me — Mark Buchan MSc",
  description:
    "Transformation advisory, leadership alignment and embedding change — senior advisory support for leaders navigating complex organisational transformation.",
  openGraph: {
    title: "Work With Me — Mark Buchan MSc",
    description:
      "Transformation advisory, leadership alignment and embedding change — senior advisory support for leaders navigating complex organisational transformation.",
    images: [{ url: "/images/og/og-work-with-me.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const areas = [
  {
    label: "Transformation Advisory",
    body: "Helping leaders diagnose why transformation has stalled and identify the right interventions to move it forward.",
    cta: "Explore Transformation Advisory",
    href: "/transformation-advisory",
  },
  {
    label: "Leadership Alignment & Sponsorship",
    body: "Helping leadership teams build clarity, alignment and active sponsorship for successful transformation.",
    cta: "Explore Leadership Alignment",
    href: "/leadership-alignment",
  },
  {
    label: "Embedding Change",
    body: "Helping organisations embed new ways of working so they are adopted, sustained and become part of everyday practice.",
    cta: "Explore Embedding Change",
    href: "/embedding-change",
  },
]

export default function WorkWithMePage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Work With Me
            </p>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              Strategic transformation advisory for leaders navigating
              complex change.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Transformation succeeds when technical change and people
              change move together. I help leaders understand what&rsquo;s
              getting in the way, align their leadership teams and create
              the conditions for lasting adoption.
            </p>
          </div>
        </section>

        {/* AREAS */}
        <section className="pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.label}
                className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#1C1B18]">
                    {area.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#1C1B18]/75">
                    {area.body}
                  </p>
                </div>
                <a
                  href={area.href}
                  className="mt-6 inline-flex items-center rounded-md bg-[#1b4b80] px-4 py-2.5 text-sm font-medium text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
                >
                  {area.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* DIAGNOSTIC CONVERSATION CTA */}
        <section id="diagnostic-conversation" className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-[#EDE8DE]">
              The first step
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#EDE8DE]">
              Book a Diagnostic Call
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EDE8DE]/70">
              Every organisation&rsquo;s transformation challenges are
              different. A diagnostic call gives us the opportunity to
              explore your situation, identify what&rsquo;s getting in the
              way, and discuss where focused support could make the
              greatest difference.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#EDE8DE] px-8 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-[#163C66] hover:text-[#EDE8DE]"
            >
              Discuss Your Transformation
            </a>
            <p className="mt-4 text-sm text-[#EDE8DE]/50">
              30-minute introductory conversation. No obligation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
