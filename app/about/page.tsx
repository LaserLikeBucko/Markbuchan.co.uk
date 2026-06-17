import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export const metadata = {
  title: "About Mark Buchan MSc — Human Alignment Consultant & Author",
  description: "Mark Buchan has spent more than twenty years working inside organisations where the gap between declared and operating values was costing more than anyone had named.",
  openGraph: {
    title: "About Mark Buchan MSc — Human Alignment Consultant & Author",
    description: "Mark Buchan has spent more than twenty years working inside organisations where the gap between declared and operating values was costing more than anyone had named.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-5xl px-6 grid gap-14 md:grid-cols-[0.85fr_1.15fr] items-center">

            {/* PHOTO */}
            <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.2)] ring-2 ring-black/10">
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

            {/* INTRO */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111110] opacity-60 font-medium mb-4">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111110] mb-6">
                Mark Buchan MSc
              </h1>
              <p className="text-xl leading-relaxed text-[#111110] opacity-75 mb-4">
                Author of The Hidden Gap.
              </p>
              <p className="text-lg flex-col leading-relaxed text-[#111110] opacity-70 mb-4">
                Mark works at the intersection of organisational culture, behavioural dynamics, leadership psychology, and complex systems thinking.
              </p>
              <p className="text-lg leading-relaxed text-[#111110] opacity-70 mb-4">
                 Through years spent inside transformation programmes, leadership environments, and coaching conversations, he observed the same recurring pattern across industries: the growing gap between what institutions say they value and what they actually reward.
              </p>
              <p className="text-lg leading-relaxed text-[#111110] opacity-70 mb-4">
                 The Hidden Gap is the name Mark gives to this pattern. He provides a framework for understanding it – and for those ready, a way to begin changing it.
              </p>


              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/theagileleader/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#111110] px-6 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* THE WORK */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The work
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              The work behind The Hidden Gap
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Over many years of working with leaders, teams and organisations, the same pattern kept appearing: people talk about values as if they are clear, shared and lived — while behaviour tells a more complicated story.
              </p>
              <p>
                That tension became the foundation for what I now call <strong className="text-[#111110]">The Hidden Gap</strong> — and for the wider challenge I describe as the <strong className="text-[#111110]">Human Alignment Problem</strong>.
              </p>
              <p>
                My work is about helping people make that gap visible, understand what keeps it in place, and respond to it with greater honesty, intention and alignment.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                This is not about changing people. It is about changing what drives behaviour.
              </p>
              <p>
                It sits at the intersection of values, behaviour, conflict, communication, collaboration and change. It is the work I have been doing for more than twenty years — and the book I needed to write.
              </p>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#ffff00] leading-relaxed">
              "Behaviour is not the problem to be fixed.<br />
              It is the evidence of the values currently at work."
            </p>
            <p className="mt-4 text-sm text-white opacity-40">— The Hidden Gap</p>
          </div>
        </section>

        {/* WHAT THIS WORK IS FOR */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              The Purpose of the Hidden Gap
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#111110] opacity-80">
              <p>
                Sometimes the gap shows up as conflict. Sometimes as stalled change, mixed messages, cynicism or energy drain. Sometimes it shows up in a quieter way — as the nagging sense that something is not adding up but nobody can quite name it.
              </p>
              <p>
                The aim is not to fix behaviour at the surface, but to understand what is driving it underneath. This enables leaders to create the conditions for alignment to become possible. That is <strong>why</strong> we do the work.
              </p>
              <p>
                Whether it happens in a one-to-one coaching conversation, a leadership team workshop, a two-week organisational diagnostic, or through a book that gives someone language for what they have been sensing for some time. 
              </p>
              <p>
                That is <strong>how</strong> we do the work.
              </p>
            </div>
          </div>
        </section>

        {/* THREE WAYS IN */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold text-[#111110] mb-12 text-center">
              Three ways to go further
            </h2>
            <div className="grid gap-6 md:grid-cols-3">

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">Read the book</h3>
                  <p className="text-[#333330] leading-relaxed">
                    Explore the core ideas behind <em>The Hidden Gap</em> and join the list for the first chapter and launch updates.
                  </p>
                </div>
                <a
                  href="/book"
                  className="mt-8 inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors justify-center"
                >
                  Explore the book
                </a>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">Work with me</h3>
                  <p className="text-[#333330] leading-relaxed">
                    The Human Alignment Diagnostic, coaching, workshops and facilitated conversations for leaders ready for the honest conversation.
                  </p>
                </div>
                <a
                  href="/work-with-me"
                  className="mt-8 inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors justify-center"
                >
                  Consider working with me
                </a>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#111110] mb-4">Free diagnostic</h3>
                  <p className="text-[#333330] leading-relaxed">
                    Take the free four-minute Hidden Gap Diagnostic. Locate where your values actually sit using the Values Integrity Model.
                  </p>
                </div>
                <a
                  href="/the-hidden-gap-diagnostic"
                  className="mt-8 inline-flex items-center text-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors justify-center"
                >
                  Take the free diagnostic
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
