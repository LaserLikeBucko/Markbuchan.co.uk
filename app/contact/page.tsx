import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSteps } from "@/components/animated-steps"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact — Mark Buchan MSc",
  description:
    "Book a diagnostic call or send a message to discuss your transformation challenge with Mark Buchan.",
  openGraph: {
    title: "Contact — Mark Buchan MSc",
    description:
      "Book a diagnostic call or send a message to discuss your transformation challenge with Mark Buchan.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const nextSteps = [
  {
    number: "1",
    title: "Choose a suitable time",
    body: "Select a time that works for you and confirm your conversation.",
  },
  {
    number: "2",
    title: "Explore your transformation context",
    body: "We'll discuss your current challenges, priorities and what you want to achieve.",
  },
  {
    number: "3",
    title: "Identify the right next step",
    body: "If I believe I can support your situation, we'll discuss what working together could look like. If not, I'll say so.",
  },
]

const areas = [
  { label: "Transformation Advisory", href: "/transformation-advisory" },
  { label: "Leadership Alignment", href: "/leadership-alignment" },
  { label: "Embedding Change", href: "/embedding-change" },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              Start a conversation about your transformation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Whether you&rsquo;re navigating a complex transformation,
              looking to align your leadership team and strengthen
              sponsorship, or exploring how to embed lasting change,
              I&rsquo;d welcome a conversation to understand your context,
              challenges and objectives and explore where support could
              create the greatest impact.
            </p>
          </div>
        </section>

        {/* DIAGNOSTIC CALL */}
        <section className="pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1C1B18]">
                Initial Diagnostic Conversation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
                A focused 30-minute conversation to explore your
                transformation priorities and identify the most valuable
                next steps.
              </p>
              <a
                href={DIAGNOSTIC_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-lg font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
              >
                Discuss Your Transformation
              </a>
            </div>

            <div className="mt-10">
              <p className="text-base font-semibold text-[#1C1B18]">
                Prefer to contact me directly?
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#1C1B18]/75">
                Email:{" "}
                <a
                  href="mailto:iam@markbuchan.co.uk"
                  className="font-medium text-[#1b4b80] hover:underline"
                >
                  iam@markbuchan.co.uk
                </a>
              </p>
              <p className="mt-1 text-base leading-relaxed text-[#1C1B18]/75">
                <a
                  href="https://www.linkedin.com/in/theagileleader"
                  className="font-medium text-[#1b4b80] hover:underline"
                >
                  Connect on LinkedIn →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              What happens next?
            </h2>
            <AnimatedSteps steps={nextSteps} />
          </div>
        </section>

        {/* AREAS I HELP WITH */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              How I can support your transformation
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <a
                  key={area.href}
                  href={area.href}
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#1b4b80] hover:text-[#EDE8DE] hover:border-[#1b4b80]"
                >
                  {area.label}
                </a>
              ))}
            </div>
            <p className="mt-10 text-lg leading-relaxed text-[#1C1B18]/75">
              Every organisation&rsquo;s transformation is different.
              I&rsquo;d welcome the opportunity to understand yours and
              explore where support could create the greatest value.
            </p>
          </div>
        </section>

        {/* SEND A MESSAGE */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Share your situation
            </h2>
            <p className="mt-4 text-center text-base leading-relaxed text-[#1C1B18]/75">
              If you would prefer to start with a brief written enquiry,
              share some context about your situation and I&rsquo;ll get
              back to you to discuss the most appropriate next step.
            </p>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
