import type { ReactNode } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

function Underline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 -bottom-1 h-[0.3em] w-full -rotate-1"
      >
        <path
          d="M2 8 C 30 3, 70 10, 118 5"
          fill="none"
          stroke="#F2C230"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export default function HomeV2Page() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            {/* PHOTO */}
            <div className="mx-auto w-full max-w-[260px] md:max-w-none">
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

            {/* COPY */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#3A4A46]">
                Facilitator · Coach · Consultant
              </p>

              <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
                I&apos;m Mark Buchan. I help organisations see what&apos;s
                really driving behaviour beneath the{" "}
                <Underline>surface</Underline>.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
                I run the diagnostic conversations, coaching, workshops and
                advisory work that close the gap between the values an
                organisation declares and the values actually shaping its
                decisions — for leaders and teams who already sense something
                is off and want a precise, evidenced way to name it and act.
              </p>

              <div className="mt-8">
                <a
                  href="/work-with-me/#diagnostic-conversation"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#1C1B18] px-8 text-base font-medium text-[#EDE8DE] transition-colors hover:bg-[#3A4A46]"
                >
                  Book a Free Diagnostic Conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(58,74,70,0.25)]" />

        {/* HEADLINE / REFRAME */}
        <section className="pb-20 pt-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mx-auto text-2xl md:text-4xl font-semibold leading-snug text-[#1C1B18]">
              I help organisations solve their human alignment problem.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1C1B18]/75">
              Most organisations don&apos;t have a dysfunctional-behaviour
              problem. They have a gap between the values they declare and
              the values that actually drive behaviour — a gap that&apos;s
              rarely named, let alone worked with directly.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1C1B18]/75">
              It shows up as conflict, stalled change, quiet disengagement,
              culture that doesn&apos;t match the deck. Left alone, it doesn&apos;t
              resolve itself. Named and worked with, it&apos;s one of the
              highest-leverage problems in an organisation.
            </p>
          </div>
        </section>

        {/* THREE WAYS TO GO DEEPER */}
        <section className="bg-[#3A4A46] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-[#EDE8DE]">
                Work with me
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#EDE8DE]/75">
                Start with a free diagnostic conversation, explore the
                resources that are growing around the work, or read the book
                that started it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-[#EDE8DE] p-8 shadow-sm">
                <div className="min-h-[140px]">
                  <h3 className="text-2xl font-semibold text-[#1C1B18]">
                    Work With Me
                  </h3>
                  <p className="mt-4 text-[#1C1B18]/75 leading-relaxed">
                    Coaching, workshops, speaking and senior advisory work for
                    leaders and organisations ready to work with the gap in
                    real time.
                  </p>
                </div>
                <a
                  href="/work-with-me/#diagnostic-conversation"
                  className="mt-auto inline-flex items-center rounded-md bg-[#1C1B18] px-5 py-3 text-[#EDE8DE] hover:bg-[#141311]"
                >
                  Book a Free Diagnostic Conversation
                </a>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-[#EDE8DE] p-8 shadow-sm">
                <div className="min-h-[140px]">
                  <h3 className="text-2xl font-semibold text-[#1C1B18]">
                    Resources
                  </h3>
                  <p className="mt-4 text-[#1C1B18]/75 leading-relaxed">
                    Digital tools, worksheets, reflections and practical
                    resources to help people see and work with the gap.
                  </p>
                </div>
                <a
                  href="/resources"
                  className="mt-auto inline-flex items-center rounded-md bg-[#1C1B18] px-5 py-3 text-[#EDE8DE] hover:bg-[#141311]"
                >
                  Explore resources
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK — SUPPORTING EVIDENCE */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#3A4A46] font-medium">
                Available now
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#1C1B18]">
                The Hidden Gap
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#1C1B18]/75">
                A book exploring how operating values drive behaviour,
                conflict and culture — and why so much of what we try to fix
                at the surface is actually being shaped somewhere deeper.
              </p>
              <a
                href="/book"
                className="mt-6 inline-flex items-center rounded-md border border-[rgba(28,27,24,0.2)] px-5 py-3 text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#EDE8DE]"
              >
                Learn more about the book
              </a>
            </div>

            <div className="mx-auto w-full max-w-[180px] overflow-hidden rounded-lg border border-[rgba(28,27,24,0.1)] bg-white shadow-sm">
              <Image
                src="/images/book-cover.jpg"
                alt="The Hidden Gap book cover"
                width={680}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl px-6 text-center">
            <p className="text-lg leading-relaxed text-[#1C1B18] italic">
              "Organisational issues hiding in plain sight — a hugely
              insightful read that would benefit many organisations and
              leaders."
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1C1B18]">
              Mick Power
            </p>
            <p className="text-sm text-[#1C1B18] opacity-50">
              Programme & Transformation Leader
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
