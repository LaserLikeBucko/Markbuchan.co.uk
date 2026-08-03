import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Target, Compass, Users, Lightbulb, TrendingUp, Zap, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Speaking & Media — Mark Buchan MSc",
  description:
    "Mark Buchan speaks on organisational transformation, leadership and the human side of change, drawing on his consulting experience and two books.",
  openGraph: {
    title: "Speaking & Media — Mark Buchan MSc",
    description:
      "Mark Buchan speaks on organisational transformation, leadership and the human side of change, drawing on his consulting experience and two books.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const speakingTopics: { icon: typeof Target; text: ReactNode }[] = [
  {
    icon: Target,
    text: "What Separates Transformations That Stick From Those That Don't",
  },
  {
    icon: Compass,
    text: "Leading Through the Age of Change Fatigue",
  },
  {
    icon: Users,
    text: "The 60% Problem: Why Culture, Not Technology, Decides If Change Survives",
  },
  {
    icon: Lightbulb,
    text: "It Isn't Resistance: Rethinking Why Change Programmes Really Fail",
  },
  {
    icon: TrendingUp,
    text: "Beating the Odds: What Successful Transformation Leaders Do Differently",
  },
  {
    icon: Zap,
    text: "Why Agile Leadership Matters More Than Ever",
  },
  {
    icon: BookOpen,
    text: (
      <>
        Lessons from <span className="italic">The Hidden Gap</span>: Solving
        the Human Challenges Behind Culture, Behaviour and Change
      </>
    ),
  },
]

const selectedSpeaking = [
  {
    title: "Your Agile Transformation Sucks... Probably!",
    event: "The Agile Tour, London (2019)",
  },
  {
    title: "Agile Leadership",
    event: "The Agile Business Consortium Podcast",
  },
  {
    title: "How to Empower an Organisation Without Losing Control",
    event: "The Agile Business Conference (2016)",
  },
  {
    title:
      "More Power to the People: Roadblocks and Solutions to the Empowered Organisation",
    event: "Unicom Agile Event (2016)",
  },
]

const audienceGroups = [
  {
    title: "Leadership Teams & Executive Audiences",
    items: ["Leadership teams navigating transformation", "Executive audiences"],
  },
  {
    title: "Professional Communities",
    items: ["HR and People professionals", "Professional bodies and industry associations"],
  },
  {
    title: "Organisations & Events",
    items: ["Public sector organisations", "Conferences, member events and leadership forums"],
  },
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
              Speaking on organisational transformation, leadership and the
              human side of change.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              I speak on organisational transformation, leadership and the
              behavioural and psychological challenges of complex
              transformation. Drawing on experience spanning technology
              delivery, executive coaching and transformation advisory—as
              well as the insights from my two books—my talks combine
              practical experience with clear, evidence-informed thinking
              for leaders navigating complex organisational change.
            </p>
          </div>
        </section>

        {/* SPEAKING AUDIENCES */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Speaking audiences
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-3 md:divide-x md:divide-[rgba(28,27,24,0.15)]">
              {audienceGroups.map((group) => (
                <div key={group.title} className="text-center md:px-8">
                  <p className="text-2xl font-semibold text-[#1b4b80]">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <p
                        key={item}
                        className="text-lg leading-relaxed text-[#1C1B18]/75"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOPICS INCLUDE */}
        <section className="bg-[#EDE8DE] py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Topics include
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75 max-w-2xl">
              The topics below are a selection of the themes I speak on. If
              you&rsquo;re looking for something more specific, I&rsquo;d be
              happy to discuss a presentation designed around your audience
              and objectives.
            </p>
            <a
              href="/contact?subject=I%27d%20like%20to%20discuss%20a%20speaking%20opportunity"
              className="mt-3 inline-flex items-center text-lg font-semibold text-[#1b4b80] hover:text-[#163C66]"
            >
              Discuss a speaking opportunity →
            </a>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {speakingTopics.map((topic, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-[rgba(28,27,24,0.08)] bg-[#1b4b80] p-8 transition-shadow hover:shadow-md"
                >
                  <span className="text-lg leading-relaxed text-white">
                    {topic.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SELECTED SPEAKING */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Selected speaking engagements
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#1C1B18]/80">
              I&rsquo;ve also spoken at private leadership events,
              professional networks and Agile Business Consortium Member
              Days, tailoring talks and discussions to the needs of each
              audience.
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {selectedSpeaking.map((talk) => (
                <div key={talk.title}>
                  <p className="text-lg md:text-xl font-bold leading-relaxed text-[#1C1B18]">
                    {talk.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#1b4b80]">
                    {talk.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKS AND INSIGHTS */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Books & Insights on Transformation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
              My writing explores organisational transformation, culture
              change and the human factors that determine whether change
              succeeds. Drawing on more than 20 years of consulting
              experience, my books share practical insights for leaders and
              organisations navigating complex change.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div>
                <p className="text-xl font-semibold italic text-[#1C1B18]">
                  The Hidden Gap
                </p>
                <p className="mt-1 text-lg leading-relaxed text-[#1C1B18]/75">
                  Solving the Human Alignment Problem Behind Conflict,
                  Behaviour and Culture
                </p>
              </div>
              <div className="h-px w-16 bg-[rgba(28,27,24,0.15)]" />
              <div>
                <p className="text-xl font-semibold italic text-[#1C1B18]">
                  Leaders, It&rsquo;s Not How You Finish&hellip; It&rsquo;s
                  How You Start!
                </p>
                <p className="mt-1 text-lg leading-relaxed text-[#1C1B18]/75">
                  A Radical New Strategy for Leading Successful Agile
                  Transformations Revealed
                </p>
              </div>
            </div>
            <a
              href="/books"
              className="mt-8 inline-flex items-center rounded-md bg-[#1b4b80] px-5 py-3 text-base font-bold text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
            >
              Explore the Books →
            </a>
          </div>
        </section>

        {/* INVITATION */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#EDE8DE]">
              Interested in a speaking or media opportunity?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EDE8DE]/70">
              If you&rsquo;re looking for an engaging speaker on
              organisational transformation, leadership and the human side
              of change, I&rsquo;d welcome the opportunity to discuss your
              event, podcast or webinar and explore a session designed
              around your audience and objectives.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#EDE8DE] px-8 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-[#163C66] hover:text-[#EDE8DE]"
            >
              Invite Mark to Speak
            </a>
            <p className="mt-6 text-base text-[#EDE8DE]/80">
              Questions about media, interviews or collaborations?{" "}
              <a
                href="/contact?subject=I%27d%20like%20to%20ask%20about%20media%2C%20interviews%20or%20collaborations"
                className="font-semibold text-[#EDE8DE] hover:underline"
              >
                Contact Mark →
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
