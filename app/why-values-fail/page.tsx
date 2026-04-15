import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HiddenGapWorkshopPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-600">
                90-Minute Workshop with Mark Buchan
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-stone-900">
                The Hidden Gap:
                <br />
                Solving the Human Alignment Problem
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-stone-700">
                The gap between what we say matters… and what actually drives behaviour.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Organisations do not have a behaviour problem. They have a human alignment problem.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center rounded-md bg-stone-900 px-6 py-3 text-white hover:bg-stone-800"
                >
                  Register interest
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center rounded-md border border-stone-300 px-6 py-3 text-stone-800 hover:bg-stone-100"
                >
                  About Mark
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <Image
                  src="/images/workshop-image.jpg"
                  alt="Mark Buchan workshop"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-stone-900">
              What goes wrong
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
              <p>
                Values are defined, published and repeated. Yet behaviour often tells a different story.
              </p>
              <p>
                Leaders say one thing. Teams experience another. Conflict grows. Trust weakens. Change stalls.
              </p>
              <p>
                The issue is rarely intent. It is alignment.
              </p>
              <p>
                The real problem is the gap between declared values and the values that are actually operating day to day.
              </p>
              <p>
                Over time, that gap becomes the system.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">
                Declared values
              </h3>
              <p className="mt-3 text-stone-700 leading-relaxed">
                The words on the wall, the website and the leadership slide deck.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">
                Operating values
              </h3>
              <p className="mt-3 text-stone-700 leading-relaxed">
                The values people learn through what gets rewarded, tolerated and reinforced.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">
                The hidden gap
              </h3>
              <p className="mt-3 text-stone-700 leading-relaxed">
                The space where tension, mistrust and stalled change quietly take hold.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-y border-amber-100">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold text-stone-900">
              What you will start to see differently
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                "Why behaviour does not match stated values",
                "How declared and operating values drift apart",
                "The hidden games, tensions and incentives that keep the gap alive",
                "What leaders can do to begin realignment",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white border border-amber-100 p-6 shadow-sm"
                >
                  <p className="text-lg leading-relaxed text-stone-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-stone-900">
                Inside the workshop
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  You will be introduced to the <strong>Values Integrity Model</strong>,
                  a practical way of mapping the difference between what
                  organisations say they value and what they actually reward,
                  tolerate and reinforce.
                </p>
                <p>
                  One of the core exercises, <em>If Organisations Couldn’t Lie</em>,
                  helps participants surface the real operating values of their
                  organisation quickly and honestly.
                </p>
                <p>
                  The workshop also explores the hidden patterns that sustain
                  misalignment, including organisational games, defensive
                  routines and unresolved value tensions.
                </p>
                <p>
                  You will also be introduced to a practical way of working in
                  the moment when the gap appears, using the <strong>Inner Coach</strong>
                  and the <strong>Choice Triangle</strong>. The aim is not just to see the
                  gap more clearly, but to respond to it with more intention.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-900 p-8 text-stone-50 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-300">
                Signature ideas
              </p>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed">
                <li>Values Integrity Model</li>
                <li>If Organisations Couldn’t Lie</li>
                <li>Games Organisations Play</li>
                <li>Inner Coach (The Pause)</li>
                <li>Choice Triangle</li>
                <li>Espoused values vs values in use</li>
                <li>Value tensions inside real organisations</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-stone-100 border-y border-stone-200"
        >
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/images/mb.jpg"
                alt="Mark Buchan"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-600">
                About Mark
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900">
                Mark Buchan
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  Mark Buchan is a leadership psychologist, coach and workshop
                  facilitator focused on what he calls the <strong>human alignment problem</strong>:
                  the gap between what individuals, teams and organisations say matters
                  and what actually gets lived in practice.
                </p>
                <p>
                  His work helps leaders and teams understand why behaviour,
                  conflict and stalled change so often trace back to unclear,
                  conflicting or misaligned operating values.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-600">
                Forthcoming book
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900">
                The thinking behind the workshop is becoming a book
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  This workshop draws on the ideas behind Mark’s forthcoming book
                  on values, behaviour, conflict and culture.
                </p>
                <p>
                  <strong>The Hidden Gap: Solving the Human Alignment Problem</strong>
                  <br />
                  <em>How operating values drive behaviour, conflict and culture</em>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/images/book-cover.jpg"
                alt="The Hidden Gap book cover"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="register" className="bg-stone-900">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white">
                Register your interest
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-300">
                If you are seeing this gap in your organisation — or feeling it in
                your own day-to-day work — this session will give you a new way
                of understanding it and working with it.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xkoqpqej"
              method="POST"
              className="mt-10 grid gap-4 max-w-2xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
                required
              />

              <input type="hidden" name="source" value="hidden-gap-workshop" />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
                required
              />

              <textarea
                name="message"
                placeholder="Organisation / brief note"
                className="min-h-[140px] rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
              />

              <button className="mt-2 inline-flex w-fit items-center rounded-md bg-amber-300 px-6 py-3 text-stone-900 hover:bg-amber-200">
                Join the first workshop cohort
              </button>

              <p className="text-sm text-stone-400 mt-2">
                No spam. Just updates on the first workshop release.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
