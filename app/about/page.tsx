import Image from "next/image"
import {
  Globe,
  Building2,
  Cpu,
  Users,
  Compass,
  Sparkles,
  GraduationCap,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Mark Buchan MSc — Transformation Advisory & Leadership",
  description:
    "Helping leaders make complex transformation succeed by bringing together technology, leadership and people. 20+ years supporting organisations through complex change.",
  openGraph: {
    title: "About Mark Buchan MSc — Transformation Advisory & Leadership",
    description:
      "Helping leaders make complex transformation succeed by bringing together technology, leadership and people.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

const credentials = [
  {
    stat: "20+",
    title: "Years supporting complex transformation",
    body: "Helping organisations navigate technology change, organisational transformation and new ways of working.",
  },
  {
    icon: Building2,
    title: "Cross-sector experience",
    intro: "Experience across:",
    list: [
      "Banking & Financial Services",
      "Telecoms",
      "Software & IT",
      "Engineering",
      "Healthcare",
      "Aerospace & Defence",
      "Public Sector",
    ],
  },
  {
    icon: Globe,
    title: "International leadership and coaching experience",
    body: "Training and coaching managers and leaders across Japan, Hong Kong, the United States, Germany and Luxembourg, with extensive experience supporting global teams and partnerships.",
  },
  {
    icon: Cpu,
    title: "Technology + people expertise",
    body: "Combining a background in software development, digital transformation and Agile delivery with executive coaching, leadership development and organisational change.",
  },
  {
    icon: Users,
    title: "Executive coaching and leadership development",
    intro: "Coaching leaders and teams to:",
    list: [
      "Communicate more effectively",
      "Navigate difficult conversations",
      "Improve collaboration",
      "Build stronger relationships",
      "Increase performance and morale",
    ],
  },
  {
    icon: Compass,
    title: "Transformation advisory",
    intro: "Supporting senior leaders through:",
    list: [
      "Resistance to change",
      "Change fatigue",
      "Transformation challenges",
      "Embedding new ways of working",
    ],
  },
  {
    icon: Sparkles,
    title: "AI and innovation experience",
    body: "Co-founder of a SaaS venture developing an AI product for small businesses, providing first-hand experience of technology innovation, experimentation and the challenges of bringing new solutions to market.",
  },
  {
    icon: GraduationCap,
    title: "Qualifications",
    list: [
      "MSc in Executive Coaching, Ashridge Business School",
      "Master Practitioner, NLP",
      "BEng in Electronic Engineering",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div className="text-center md:order-1 md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
                About
              </p>
              <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
                About Mark
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-bold leading-snug text-[#1C1B18]">
                Helping leaders make complex transformation succeed by
                bringing together technology, leadership and people.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
                For more than 20 years, I&rsquo;ve worked with organisations
                navigating complex change. Today, I work with leaders to
                overcome the barriers that prevent transformation from
                succeeding and help their organisations create lasting
                change.
              </p>
            </div>

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
          </div>
        </section>

        {/* CAREER */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              A career spanning technology, leadership and change
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-[#1C1B18]/75">
              <p>
                My career has taken me from technology delivery to executive
                coaching and organisational transformation. Along the way, I
                have worked with teams, leaders and organisations facing the
                challenges of adopting new ways of working, delivering
                change and building the capabilities needed for the future.
              </p>
              <p>
                I bridge the gap between technology and people because I
                have spent my career working on both sides. I understand
                the systems, processes and technologies that enable
                transformation—but also the leadership, communication and
                behavioural shifts required to make change succeed.
              </p>
              <p>
                My early career in software development, business analysis
                and Agile delivery gave me a practical understanding of how
                organisations design and implement change. Over time, my
                focus expanded to the human side of transformation:
                coaching leaders and teams to improve collaboration,
                communication and performance.
              </p>
              <p>
                More recently, I co-founded a SaaS venture focused on
                developing an AI product for small businesses. Although
                that venture did not continue, the experience gave me
                first-hand insight into the realities of innovation,
                technology adoption and leading through uncertainty in a
                rapidly changing environment.
              </p>
              <p className="text-[#1C1B18] font-medium">
                Today, I bring together my experience across technology,
                leadership and coaching to help leaders navigate complex
                transformation challenges and create change that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & CREDENTIALS */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Experience & Credentials
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {credentials.map((item) => (
                <div
                  key={item.title}
                  className="flex overflow-hidden rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white shadow-sm"
                >
                  {item.stat ? (
                    <div className="flex w-20 shrink-0 items-start justify-center bg-[#1b4b80]/5 pt-6">
                      <span className="text-2xl font-black leading-none text-[#1b4b80]">
                        {item.stat}
                      </span>
                    </div>
                  ) : (
                    <div className="flex w-20 shrink-0 items-start justify-center bg-[#1b4b80]/5 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4b80]/10">
                        {item.icon && (
                          <item.icon
                            className="h-6 w-6 text-[#1b4b80]"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-semibold text-[#1C1B18]">
                      {item.title}
                    </h3>
                    {item.body && (
                      <p className="mt-3 text-base leading-relaxed text-[#1C1B18]/75">
                        {item.body}
                      </p>
                    )}
                    {item.list && (
                      <>
                        {item.intro && (
                          <p className="mt-3 text-base font-medium text-[#1C1B18]/75">
                            {item.intro}
                          </p>
                        )}
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {item.list.map((li) => (
                            <li
                              key={li}
                              className="text-base leading-relaxed text-[#1C1B18]/75"
                            >
                              {li}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHARING IDEAS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              Sharing ideas on transformation
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-[#1C1B18]/75">
              <p>
                Alongside my consulting work, I write and speak about
                organisational transformation, leadership and the
                challenges that determine whether change succeeds.
              </p>
              <p>
                I am the author of two books on organisational
                transformation, including <span className="italic">The Hidden Gap</span>,
                and share insights from my experience working with leaders,
                teams and organisations navigating complex change.
              </p>
            </div>
            <a
              href="/insights"
              className="mt-8 inline-flex items-center rounded-md bg-[#1b4b80] px-5 py-3 text-sm font-bold text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
            >
              Explore Insights & Media →
            </a>
          </div>
        </section>

        {/* WORK TOGETHER */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1B18]">
              How we can work together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Every organisation faces different transformation challenges.
              Whether you are navigating digital transformation, leading
              organisational change or embedding new ways of working, I
              tailor my support to your organisation, your people and your
              goals.
            </p>
            <a
              href="/work-with-me"
              className="mt-8 inline-flex items-center rounded-md bg-[#1b4b80] px-5 py-3 text-sm font-bold text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
            >
              Explore how I help →
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#EDE8DE]">
              Ready to discuss your transformation challenge?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EDE8DE]/70">
              A focused conversation to explore your transformation challenges and discuss whether my experience and approach are the right fit for your organisation.
            </p>
            <a
              href={DIAGNOSTIC_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#EDE8DE] px-8 text-lg font-bold text-[#1C1B18] transition-colors hover:bg-[#163C66] hover:text-[#EDE8DE]"
            >
              Discuss Your Transformation
            </a>
            <p className="mt-6 text-base text-[#EDE8DE]/50">
              Prefer email? Contact me directly at iam@markbuchan.co.uk
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
