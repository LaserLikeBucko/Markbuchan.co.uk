import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-white border-b border-[rgba(17,17,16,0.15)]">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#111110]">
              Resources
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-[#333330]max-w-2xl mx-auto">
              Practical tools, worksheets and companion material designed to help
              people see the gap more clearly and work with it more intentionally.
            </p>
          </div>
        </section>

        {/* RESOURCE CARDS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">

            {/* DIGITAL TOOLS */}
            <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
              <div className="min-h-[150px]">
                <h3 className="text-2xl font-semibold text-[#111110]">
                  Digital Tools
                </h3>
                <p className="mt-4 text-[#333330]leading-relaxed">
                  Short practical tools to help individuals, leaders and teams
                  identify values gaps, surface tensions and think more clearly
                  about what is really driving behaviour.
                </p>
              </div>

              <p className="mt-auto pt-6 text-sm font-medium uppercase tracking-[0.12em] text-[#777770]">
                Coming soon
              </p>
            </div>

            {/* WORKBOOK */}
            <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
              <div className="min-h-[150px]">
                <h3 className="text-2xl font-semibold text-[#111110]">
                  Workbook
                </h3>
                <p className="mt-4 text-[#333330]leading-relaxed">
                  A growing collection of reflections, prompts and exercises to
                  help readers apply the ideas behind <em>The Hidden Gap</em> in
                  their own contexts.
                </p>
              </div>

              <p className="mt-auto pt-6 text-sm font-medium uppercase tracking-[0.12em] text-[#777770]">
                In development
              </p>
            </div>

            {/* LIVING APPENDIX */}
            <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
              <div className="min-h-[150px]">
                <h3 className="text-2xl font-semibold text-[#111110]">
                  Living Appendix
                </h3>
                <p className="mt-4 text-[#333330]leading-relaxed">
                  An evolving companion to <em>The Hidden Gap</em>, capturing new
                  insights, refinements and extensions to the work as it develops.
                </p>
              </div>

              <p className="mt-auto pt-6 text-sm font-medium uppercase tracking-[0.12em] text-[#777770]">
                Available to readers and customers · Coming soon
              </p>
            </div>

          </div>
        </section>

        {/* POSITIONING BLOCK */}
        <section className="border-y border-[rgba(17,17,16,0.15)] bg-whitepy-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-[#111110]">
              Built to support the work between conversations
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Not everything needs a live workshop or coaching conversation.
              Some things are better explored quietly, reflected on honestly,
              and worked through in your own time.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              These resources are designed to help you continue the work beyond
              the book, beyond the workshop, and beyond the moment of insight.
            </p>
          </div>
        </section>

        {/* CTA BACK TO BOOK */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-[#111110]">
              Start with the book
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              The best entry point into the work is <em>The Hidden Gap</em>.
              From there, the tools and companion material will make far more sense.
            </p>

            <a
              href="/book"
              className="mt-8 inline-flex items-center rounded-md bg-[#111110] px-6 py-3 text-white hover:bg-[#ff3131]"
            >
              Go to the book
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}