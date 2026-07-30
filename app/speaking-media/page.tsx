import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Speaking & Media — Mark Buchan MSc",
  description:
    "Mark Buchan speaks on organisational transformation, leadership and the people side of complex change, drawing on his consulting experience and two books.",
  openGraph: {
    title: "Speaking & Media — Mark Buchan MSc",
    description:
      "Mark Buchan speaks on organisational transformation, leadership and the people side of complex change, drawing on his consulting experience and two books.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const speakingTopics = [
  "Why change programmes fail—and how to improve the odds of success",
  "It’s Not Resistance! Rethinking Why Change Programmes Really Fail",
  "What Separates Transformations That Stick From Those That Don’t",
  "Leading Through the Age of Change Fatigue",
  "Beating the Odds: What Leaders Who Actually Succeed at Transformation Do Differently",
  "Why Agile isn’t dead and why Agile leadership is even more relevant today",
  "The 60% Problem: Why Culture, Not Technology, Decides If Change Survives",
]

const recentSpeaking = [
  {
    event: "The Agile Business Conference 2016",
    title: "How to empower an organisation without losing control",
  },
  {
    event: "Unicom Agile Event 2016",
    title:
      "More Power to the People: Roadblocks and Solutions to the Empowered Organisation",
  },
  {
    event: "The Agile Tour, London 2019",
    title: "Your Agile Transformation Sucks … probably!",
  },
  {
    event: "Bite-Sized Agility Series: The Agile Business Consortium Podcast",
    title: "Agile Leadership",
  },
]

const audiences = [
  "Professional bodies",
  "Leadership teams",
  "HR professionals",
  "Executive audiences",
  "Public sector organisations",
  "Conferences and member events",
]

export default function SpeakingMediaPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Speaking & Media
            </p>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              Speaking on transformation, leadership and change.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Mark speaks on organisational transformation, leadership and
              the people side (psychology) of complex change. Drawing on
              many years of consulting experience and the insights from his
              two books, his talks combine practical experience with clear,
              evidence-informed thinking for leaders navigating complex
              organisational change.
            </p>
          </div>
        </section>

        {/* SPEAKING TOPICS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Speaking topics
            </h2>
            <ul className="mt-10 flex flex-col gap-5">
              {speakingTopics.map((topic) => (
                <li
                  key={topic}
                  className="border-b border-[rgba(28,27,24,0.1)] pb-5 text-lg leading-relaxed text-[#1C1B18]/85 last:border-b-0"
                >
                  {topic}
                </li>
              ))}
              <li className="border-b border-[rgba(28,27,24,0.1)] pb-5 text-lg leading-relaxed text-[#1C1B18]/85 last:border-b-0">
                Lessons from <span className="italic">The Hidden Gap</span>.
                Solving the Human Alignment Problem behind Conflict,
                Behaviour and Culture.
              </li>
            </ul>
          </div>
        </section>

        {/* RECENT SPEAKING */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Recent & Selected Speaking
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {recentSpeaking.map((talk) => (
                <div key={talk.title}>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#1b4b80]">
                    {talk.event}
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-[#1C1B18]">
                    {talk.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-base leading-relaxed text-[#1C1B18]/60">
              Mark has also spoken at many private networking events and
              Agile Business Consortium Member days.
            </p>
          </div>
        </section>

        {/* BOOKS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Books
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
              Mark&rsquo;s speaking draws on the ideas explored in his two
              books.
            </p>
            <ul className="mt-8 flex flex-col gap-4 text-lg leading-relaxed text-[#1C1B18]/85">
              <li>
                <span className="italic">The Hidden Gap</span>. Solving the
                Human Alignment Problem behind Conflict, Behaviour and
                Culture.
              </li>
              <li>
                <span className="italic">
                  Leaders, it&rsquo;s not how you finish&hellip; it&rsquo;s
                  how you start!
                </span>
                : A radical, new strategy for leading successful Agile
                Transformations revealed.
              </li>
            </ul>
            <a
              href="/book"
              className="mt-8 inline-flex items-center rounded-md bg-[#1b4b80] px-5 py-3 text-sm font-medium text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
            >
              Explore the Books →
            </a>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Audience
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
              Mark speaks for:
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-lg border border-[rgba(28,27,24,0.1)] bg-white px-5 py-4 text-base font-medium text-[#1C1B18]"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INVITATION */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#EDE8DE]">
              Looking for a speaker on organisational transformation,
              leadership or organisational change?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EDE8DE]/70">
              I&rsquo;d be delighted to discuss your event.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DIAGNOSTIC_CALL_URL}
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#EDE8DE] px-8 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-[#163C66] hover:text-[#EDE8DE]"
              >
                Book a Conversation
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#EDE8DE]/40 px-8 text-base font-medium text-[#EDE8DE] transition-colors hover:bg-[#EDE8DE] hover:text-[#1C1B18]"
              >
                Contact Mark
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
