import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Nine Principles of Agile Leadership — Mark Buchan MSc",
  description:
    "The Nine Principles of Agile Leadership, co-developed by Mark Buchan MSc with the Agile Business Consortium's leadership working group.",
  openGraph: {
    title: "The Nine Principles of Agile Leadership — Mark Buchan MSc",
    description:
      "The Nine Principles of Agile Leadership, co-developed by Mark Buchan MSc with the Agile Business Consortium's leadership working group.",
    images: [{ url: "/images/og/og-image-book.jpg", width: 1920, height: 1080 }],
  },
}

const PRINCIPLES = [
  {
    title: "Actions speak louder than words",
    desc: "Agile leaders lead by example, working on themselves before asking anything of others.",
  },
  {
    title: "Improved quality of thinking leads to improved outcomes",
    desc: "Better decisions come from multiple perspectives and input from people closest to the problem, not from data alone.",
  },
  {
    title: "Organisations improve through effective feedback",
    desc: "Agile leaders actively seek feedback, close the loop on it, and model giving it well.",
  },
  {
    title: "People require meaning and purpose to make work fulfilling",
    desc: "Leaders build and share a common purpose that genuinely connects with their people.",
  },
  {
    title: "Emotion is a foundation to enhanced creativity and innovation",
    desc: "Bringing emotion into work, not suppressing it, is what unlocks creativity and potential.",
  },
  {
    title: "Leadership lives everywhere in the organisation",
    desc: "Agile leaders grow leadership capability throughout the organisation, not just at the top.",
  },
  {
    title: "Leaders devolve appropriate power and authority",
    desc: "Empowerment isn't all-or-nothing; agile leaders calibrate it to context.",
  },
  {
    title: "Collaborative communities achieve more than individuals",
    desc: "Trust-based teams, given autonomy within clear boundaries, outperform individuals working alone.",
  },
  {
    title: "Great ideas can come from anywhere in the organisation",
    desc: "Agile leaders listen for good ideas regardless of who they come from or where they sit.",
  },
]

const SOURCE_URL = "https://www.agilebusiness.org/the-nine-principles-of-agile-leadership/"

export default function NinePrinciplesPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <a
              href="/books"
              className="inline-flex items-center text-sm font-medium text-[#1C1B18]/60 hover:text-[#1C1B18] transition-colors mb-8"
            >
              ← Back to Books & Publications
            </a>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1C1B18] mb-4">
              The Nine Principles of Agile Leadership
            </h1>
            <p className="text-lg text-[#1C1B18]/75 mb-2">
              Co-developed by Mark Buchan MSc with the Agile Business Consortium's leadership working group.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#1b4b80] hover:text-[#163C66] transition-colors"
            >
              Full principles at agilebusiness.org →
            </a>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* PRINCIPLES */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-6">
              {PRINCIPLES.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-6 items-start bg-white rounded-2xl border border-[rgba(28,27,24,0.1)] p-6 shadow-sm"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1b4b80] text-[#EDE8DE] font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-bold text-[#1C1B18] mb-2">{item.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#1C1B18] px-6 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1b4b80] transition-colors"
              >
                Read the full principles at Agile Business Consortium →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
