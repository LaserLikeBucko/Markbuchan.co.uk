import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { PretxSteps } from "@/components/pretx-steps"

export const metadata: Metadata = {
  title: "Leaders, it's not how you finish… it's how you start! — Mark Buchan MSc",
  description:
    "Twenty years of systems engineering and psychological coaching, distilled into why Agile transformations really fail, and how to start one right.",
  openGraph: {
    title: "Leaders, it's not how you finish… it's how you start! — Mark Buchan MSc",
    description:
      "Twenty years of systems engineering and psychological coaching, distilled into why Agile transformations really fail, and how to start one right.",
    images: [{ url: "/images/og/og-image-book.jpg", width: 1920, height: 1080 }],
  },
}

const GENUINE_TRANSFORMATION = [
  {
    title: "Top-down, not bottom-up",
    desc: "Culture change starts with the leadership team, not the delivery teams.",
  },
  {
    title: "Mindset over process",
    desc: "The goal is being agile, not performing it.",
  },
  {
    title: "Sponsorship through ownership",
    desc: "This can't be delegated to middle management or outsourced to consultants and still stick.",
  },
]

const PRE_TX_STEPS = [
  {
    title: "Leadership Alignment Session",
    desc: "A grounding in what's actually involved, so the decision to proceed is informed.",
  },
  {
    title: "Organisational Readiness Assessment",
    desc: "An honest read of current culture, appetite, and blockers.",
  },
  {
    title: "Leadership Immersion",
    desc: "Leaders experience the new way of working themselves, first.",
  },
  {
    title: "Co-Diagnosis",
    desc: "Identifying the real problem, not the assumed one.",
  },
  {
    title: "Co-Design",
    desc: "A jointly built, feasible roadmap for your specific organisation.",
  },
]

export default function LeadersBookPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <a
              href="/books"
              className="inline-flex items-center text-sm font-medium text-[#1C1B18]/60 hover:text-[#1C1B18] transition-colors mb-8"
            >
              ← Back to Books & Publications
            </a>

            <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] items-center">
              {/* BOOK COVER */}
              <div className="mx-auto w-full max-w-[300px] md:max-w-[340px]">
                <div className="overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-2 ring-black/10">
                  <Image
                    src="/images/leaders-its-not-how-you-finish.jpg"
                    alt="Leaders, it's not how you finish… it's how you start! book cover"
                    width={810}
                    height={1050}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* BOOK INFO */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#1b4b80] font-bold mb-4">
                  Publications
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1C1B18] mb-6">
                  Leaders, It's Not How You Finish
                </h1>
                <p className="text-lg leading-relaxed text-[#1C1B18]/75 mb-8">
                  Twenty years of systems engineering — including safety-critical jet fighter systems — and psychological coaching, distilled into why Agile transformations really fail, and how to start one right.
                </p>
                <a
                  href="#buy"
                  className="inline-flex items-center justify-center rounded-md bg-[#1b4b80] px-6 py-4 text-white text-lg font-semibold hover:bg-[#1C1B18] hover:text-[#EDE8DE] transition-colors"
                >
                  Buy the book →
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* WHY THIS BOOK, WHY NOW */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              Why this book, why now
            </p>
            <Separator className="mb-8 max-w-16 bg-[#1b4b80]/40 mx-auto" />
            <p className="text-lg leading-relaxed text-[#1C1B18]/80">
              Written in the summer of 2018, published in 2019. It's framed around genuine Agile transformation — but the underlying failure pattern it describes (leadership and culture collapsing under process change) is the same one the wider transformation research confirms applies far beyond Agile. The mechanics are specific to Agile; the argument isn't.
            </p>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="bg-[#1b4b80] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#EDE8DE]/70">
              The problem
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-[#EDE8DE] mb-6">
              Most transformations don't fail because teams won't adopt a new process. They fail because leadership tries to install a process without changing how it leads.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Only 16% of digital transformations improve performance and sustain it. Leadership buy-in and unclear vision — not budget, not capability — are executives' top-ranked causes of failure. This book was written before that research existed. It reaches the same conclusion from the inside of real transformations.
            </p>
          </div>
        </section>

        {/* PSEUDO-AGILE VS GENUINE TRANSFORMATION */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
                Pseudo-Agile vs. genuine transformation
              </p>
              <Separator className="mb-8 max-w-16 bg-[#1b4b80]/40 mx-auto" />
              <p className="text-lg leading-relaxed text-[#1C1B18]/80">
                Pseudo-Agile installs a new process manual and calls it done. Genuine transformation requires a different starting point:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {GENUINE_TRANSFORMATION.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[#1C1B18] mb-4">{item.title}</h3>
                  <p className="text-[#333330] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* PRE-TX MODEL */}
        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
                What's inside
              </p>
              <h2 className="text-3xl font-bold text-[#1C1B18] mb-4">
                The Pre-TX Model
              </h2>
              <p className="text-lg leading-relaxed text-[#1C1B18]/80">
                A 90-day, five-step approach to starting a transformation right, before a single process changes.
              </p>
            </div>

            <PretxSteps steps={PRE_TX_STEPS} />
          </div>
        </section>

        {/* WHY LISTEN TO ME */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              Why listen to me
            </p>
            <Separator className="mb-8 max-w-16 bg-[#1b4b80]/40 mx-auto" />
            <p className="text-lg leading-relaxed text-[#1C1B18]/80">
              Twenty years working across systems engineering on safety-critical platforms and psychological coaching with leaders. This book sits at the intersection of both — the discipline of engineering rigour applied to the human side of change. It won't hand you a one-size-fits-all methodology. It will help you become the trusted advisor your own organisation needs before it starts.
            </p>
          </div>
        </section>

        {/* BUY CTA */}
        <section id="buy" className="bg-[#1b4b80] py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EDE8DE] mb-8">
              Ready to start your transformation right, not just fast?
            </h2>
            <a
              href="mailto:iam@markbuchan.co.uk?subject=Leaders%2C%20It%27s%20Not%20How%20You%20Finish"
              className="inline-flex items-center justify-center rounded-md bg-[#EDE8DE] px-6 py-4 text-[#1C1B18] text-lg font-semibold hover:bg-[#1C1B18] hover:text-[#EDE8DE] transition-colors"
            >
              Buy the book →
            </a>
            <p className="mt-4 text-sm text-white/60">
              Online payment coming soon — email for now and I'll sort you out directly.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
