import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function WorkWithMePage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#F6F1E8] border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-stone-900">
              Work With Me
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-stone-700 max-w-2xl mx-auto">
              If you’re seeing the gap between what is said and what actually happens,
              there are a number of ways we can work together to make it visible and begin to shift it.
            </p>
          </div>
        </section>

        {/* THREE OPTIONS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">

            {/* COACHING */}
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Coaching
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  One-to-one or small group coaching for leaders and individuals
                  working with values, conflict, decision-making and change in real time.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Register interest
              </a>
            </div>

            {/* WORKSHOPS */}
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Workshops
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Facilitated sessions exploring the Human Alignment Problem,
                  helping teams and organisations surface and work with the gap together.
                </p>
              </div>

              <a
                href="/workshop"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                View workshop
              </a>
            </div>

            {/* SPEAKING */}
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Speaking & Facilitation
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Talks and facilitated conversations for leadership teams,
                  events and organisations exploring values, behaviour and culture.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Register interest
              </a>
            </div>

          </div>
        </section>

        {/* POSITIONING BLOCK */}
        <section className="border-y border-stone-200 bg-stone-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-stone-900">
              Where this work tends to land
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Most of the work begins when something is not quite adding up.
              When behaviour does not match what is being said. When decisions
              feel inconsistent. When energy is being spent managing tension
              that no one has named.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              The aim is not to fix behaviour directly, but to understand
              what is driving it — and create the conditions for alignment
              to become possible.
            </p>
          </div>
        </section>

        {/* CONTACT / INTEREST */}
        <section id="contact" className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-stone-900">
              Start a conversation
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              If this resonates, the best next step is a simple conversation.
              No pressure — just a chance to explore whether this work would be useful.
            </p>

            <a
              href="mailto:iam@markbuchan.co.uk"
              className="mt-8 inline-flex items-center rounded-md bg-stone-900 px-6 py-3 text-white hover:bg-stone-800"
            >
              Get in touch
            </a>

            <p className="mt-4 text-sm text-stone-500">
              Or reply to any email you’ve received.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}