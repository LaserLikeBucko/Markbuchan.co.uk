import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkshopLeadForm } from "../components/workshop-lead-form"

export const metadata = {
  title: "Organisations Are Lying to Themselves: The Hidden Gap Workshop | Mark Buchan MSc",
  description: "A 90-minute workshop exposing the gap between declared 'values theatre' and the underground values actually driving decisions — and how leaders can begin bringing integrity back into the system.",
  openGraph: {
    title: "Organisations Are Lying to Themselves: The Hidden Gap Workshop | Mark Buchan MSc",
    description: "A 90-minute workshop exposing the gap between declared 'values theatre' and the underground values actually driving decisions — and how leaders can begin bringing integrity back into the system.",
    images: [{ url: "/images/og/og-image-book.jpg", width: 1920, height: 1080 }],
  },
}

export default function OrganisationsAreLyingPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="bg-[#1b4b80] text-white border-b border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                Workshop with Mark Buchan
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Most organisations are lying to themselves
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-stone-300">
                Not deliberately. But it happens every day in the gap between
                what is said and what is actually done.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                That gap is where trust erodes, conflict grows and change
                efforts quietly die.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center rounded-md bg-[#EDE8DE] px-6 py-3 text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#EDE8DE]"
                >
                  Register interest
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center rounded-md border border-stone-600 px-6 py-3 text-white hover:bg-[#1C1B18]"
                >
                  About Mark
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-stone-700 bg-stone-800 shadow-sm">
                <Image
                  src="/images/workshop-image.jpg"
                  alt="Mark Buchan workshop"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover opacity-95"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#1C1B18]">
              The uncomfortable truth
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
              <p>
                Many organisations proudly declare values such as openness,
                honesty, respect and collaboration.
              </p>
              <p>
                Yet in practice, people learn very quickly what is really
                rewarded, what gets punished and what must not be said out loud.
              </p>
              <p>
                Over time, the spoken values become theatre. The real values go
                underground. Behaviour follows the underground ones.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1C1B18]">
                Values theatre
              </h3>
              <p className="mt-3 text-[#333330] leading-relaxed">
                The polished version of the culture that sounds right but fails
                to guide behaviour.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1C1B18]">
                Underground values
              </h3>
              <p className="mt-3 text-[#333330] leading-relaxed">
                The unspoken rules people follow because they know they are the
                ones that really matter.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1C1B18]">
                Repeating patterns
              </h3>
              <p className="mt-3 text-[#333330] leading-relaxed">
                The games, tensions and defensive routines that keep the system
                exactly where it is.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-red-50 border-y border-red-100">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold text-[#1C1B18]">
              What this workshop exposes
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                "The gap between declared values and lived reality",
                "The hidden patterns that keep the gap in place",
                "Why behaviour change programmes often fail",
                "How leaders can begin to bring integrity back into the system",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white border border-red-100 p-6 shadow-sm"
                >
                  <p className="text-lg leading-relaxed text-[#1C1B18]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[#1C1B18]">
                Inside the workshop
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  Through the <strong>Values Integrity Model</strong>,
                  participants learn to identify theatre values, underground
                  values and the real drivers of behaviour inside their
                  organisation.
                </p>
                <p>
                  A key exercise, <em>If Organisations Couldn’t Lie</em>,
                  creates a breakthrough moment by inviting people to describe
                  their organisation honestly rather than aspirationally.
                </p>
                <p>
                  The workshop also draws on organisational games, defensive
                  routines and competing value tensions to explain why the gap
                  persists even when intentions are good.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(28,27,24,0.15)] bg-[#1b4b80] p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Why it matters
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                Most leaders try to fix behaviour directly. But behaviour is
                downstream. Until the underlying values are surfaced and aligned,
                the same tensions keep repeating.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-white border-y border-[rgba(28,27,24,0.15)]"
        >
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div className="overflow-hidden rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white shadow-sm">
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
              <h2 className="mt-3 text-3xl font-semibold text-[#1C1B18]">
                Mark Buchan
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  Mark Buchan is a leadership psychologist, coach and workshop
                  facilitator whose work explores why values misalignment sits
                  underneath so much organisational tension, defensiveness and
                  stalled change.
                </p>
                <p>
                  He helps leaders see beyond surface behaviour and understand
                  the hidden values patterns shaping culture in practice.
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
              <h2 className="mt-3 text-3xl font-semibold text-[#1C1B18]">
                A book is coming that goes deeper into these ideas
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  This workshop draws on the thinking behind Mark’s forthcoming
                  book on values, behaviour, organisational tension and why
                  change efforts so often fail when the real drivers remain
                  hidden.
                </p>
                <p>
                  Title and subtitle are still under wraps for now.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[rgba(28,27,24,0.15)] bg-white shadow-sm">
              <Image
                src="/images/book-cover.jpg"
                alt="Forthcoming book teaser"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="register" className="bg-[#1b4b80]">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white">
                Register your interest
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-300">
                I am currently opening conversations around a small number of
                early workshops. If this resonates, register your interest
                below.
              </p>
            </div>

            <WorkshopLeadForm
              source="organisations-are-lying"
              buttonText="Find out what's really going on"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}