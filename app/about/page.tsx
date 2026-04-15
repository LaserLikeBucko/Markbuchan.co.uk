import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">
        <section className="bg-[#F6F1E8] border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-stone-900">
              About Mark Buchan
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-stone-700 max-w-3xl mx-auto">
              I help leaders, teams and organisations work with what I call the
              Human Alignment Problem — the gap between what we say matters and
              what actually drives behaviour.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-center">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/images/mb.jpg"
              alt="Mark Buchan"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-stone-900">
              The work behind The Hidden Gap
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-700">
              <p>
                Over many years of working with leaders, teams and organisations,
                I kept seeing the same pattern: people often talk about values as
                if they are clear, shared and lived, while behaviour tells a more
                complicated story.
              </p>

              <p>
                That tension became the foundation for what I now call{" "}
                <strong>The Hidden Gap</strong> — and for the wider challenge I
                describe as the <strong>Human Alignment Problem</strong>.
              </p>

              <p>
                My work is about helping people make that gap visible, understand
                what keeps it in place, and respond to it with greater honesty,
                intention and alignment.
              </p>

              <p>
                It sits at the intersection of values, behaviour, conflict,
                communication, collaboration and change. 
              </p>

              <p>
                This is not about changing people; it’s about changing what drives behaviour.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/theagileleader/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-stone-300 px-5 py-3 text-stone-800 hover:bg-stone-100"
              >
                Connect with me on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-stone-900">
              What this work is for
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Sometimes the gap shows up as conflict. Sometimes as stalled change,
              mixed messages, cynicism or energy drain. Sometimes it shows up in
              a quieter way — as the nagging sense that something is not adding up.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              The aim is not to fix behaviour at the surface, but to understand
              what is driving it underneath and create the conditions for
              alignment to become possible.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Read the book
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Explore the core ideas behind <em>The Hidden Gap</em> and join
                  the list for the first chapter and launch updates.
                </p>
              </div>

              <a
                href="/book"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Go to the book
              </a>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Work with me
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Coaching, workshops, speaking and facilitated conversations for
                  people who want to work with the gap in real time.
                </p>
              </div>

              <a
                href="/work-with-me"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Explore working together
              </a>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
              <div className="min-h-[140px]">
                <h3 className="text-2xl font-semibold text-stone-900">
                  Explore resources
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  Browse the growing collection of tools, reflections and companion
                  material being built around the work.
                </p>
              </div>

              <a
                href="/resources"
                className="mt-auto inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Go to resources
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}