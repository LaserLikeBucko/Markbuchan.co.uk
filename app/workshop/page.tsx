import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Leadership & Team Alignment Workshop UK | The Hidden Gap",
  description:
    "A 90-minute workshop helping leaders uncover the real cause of team conflict and misalignment. Practical, direct, and immediately applicable.",
  openGraph: {
    title: "Leadership & Team Alignment Workshop UK | The Hidden Gap",
    description: "A 90-minute workshop helping leaders uncover the real cause of team conflict and misalignment. Practical, direct, and immediately applicable.",
    url: "https://markbuchan.co.uk",
    siteName: "The Human Alignment Co.",
    images: [
      {
        url: "https://mark.buchan.co.uk/images/og/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  };

export default function WorkshopPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">
        <section className="bg-white border-b border-[rgba(17,17,16,0.15)]">
          <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#111110]">
              The Hidden Gap Workshop
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-[#333330]max-w-3xl mx-auto">
              A 90-minute session exploring the Human Alignment Problem —
              the gap between what we say matters and what actually drives
              behaviour in teams and organisations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-[#111110]">
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
            className="mt-8 inline-flex items-center rounded-md bg-[#111110] px-6 py-3 text-white hover:bg-[#ff3131]"
          >
            Register interest
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}