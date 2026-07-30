import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSteps } from "@/components/animated-steps"

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
    title: "Book a convenient time",
    body: "Choose a time that works for you using the diagnostic call link.",
  },
  {
    number: "2",
    title: "Have a focused conversation",
    body: "We'll have a focused 30-minute conversation about your situation.",
  },
  {
    number: "3",
    title: "Find out if it's a fit",
    body: "If I believe I can help, I'll explain what working together could look like. If not, I'll tell you.",
  },
]

const areas = ["Transformation Advisory", "Leadership Alignment", "Embedding Change"]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              Let&rsquo;s start a conversation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Whether you&rsquo;re navigating a complex transformation,
              looking to align your leadership team or exploring how to
              embed lasting change, or anything change or people related,
              I&rsquo;d be happy to discuss your situation.
            </p>
          </div>
        </section>

        {/* DIAGNOSTIC CALL */}
        <section className="pb-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1C1B18]">
                Book a Diagnostic Call
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
                A focused 30-minute conversation to discuss your
                transformation challenges and potential next steps.
              </p>
              <a
                href={DIAGNOSTIC_CALL_URL}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-lg font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
              >
                Book a Diagnostic Call
              </a>
            </div>

            <div className="mt-10">
              <p className="text-base font-semibold text-[#1C1B18]">
                Prefer to get in touch directly?
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
                  LinkedIn profile
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
              Areas I help with
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-10 text-lg leading-relaxed text-[#1C1B18]/75">
              Every organisation&rsquo;s transformation is different. If
              you&rsquo;d like to explore yours, I&rsquo;d welcome the
              conversation.
            </p>
          </div>
        </section>

        {/* SEND A MESSAGE */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Send a Message
            </h2>
            <p className="mt-4 text-center text-base leading-relaxed text-[#1C1B18]/75">
              Not ready to schedule a call? Send a brief message instead.
            </p>

            {/* TODO: replace with Mark's Formspree endpoint, e.g. https://formspree.io/f/XXXXXXX */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="mt-10 flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#1C1B18]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="text-sm font-medium text-[#1C1B18]"
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#1C1B18]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="challenge"
                  className="text-sm font-medium text-[#1C1B18]"
                >
                  Brief description of your challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
