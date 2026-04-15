import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function WorkshopPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">
        <section className="bg-[#F6F1E8] border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-stone-900">
              The Hidden Gap Workshop
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-stone-700 max-w-3xl mx-auto">
              A 90-minute session exploring the Human Alignment Problem —
              the gap between what we say matters and what actually drives
              behaviour in teams and organisations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-stone-900">
            Coming soon
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            This workshop brings the ideas behind <em>The Hidden Gap</em> to life
            in a practical, interactive format.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            It is designed to help people see the gap more clearly, understand
            what sustains it, and begin to work with it more intentionally.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-stone-700">
            Dates and formats will be released soon.
          </p>

          <a
            href="mailto:iam@markbuchan.co.uk"
            className="mt-8 inline-flex items-center rounded-md bg-stone-900 px-6 py-3 text-white hover:bg-stone-800"
          >
            Register interest
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}