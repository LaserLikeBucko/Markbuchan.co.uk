import type { Metadata } from "next"
import { FileText, Mic, BookOpen, Wrench } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Insights & Media — Mark Buchan MSc",
  description:
    "Articles, speaking, books and tools on organisational transformation, leadership alignment and the human side of change.",
  openGraph: {
    title: "Insights & Media — Mark Buchan MSc",
    description:
      "Articles, speaking, books and tools on organisational transformation, leadership alignment and the human side of change.",
    images: [{ url: "/images/og/og-home.jpg", width: 1920, height: 1080 }],
  },
}

const items = [
  {
    icon: FileText,
    label: "Articles",
    body: "Perspectives on transformation, organisational change and the human factors that shape lasting change.",
    cta: "Read the Articles",
    href: "/resources/blog",
  },
  {
    icon: Mic,
    label: "Speaking & Media",
    body: "Keynotes and talks on organisational transformation, leadership and change fatigue for conferences, leadership teams and member events.",
    cta: "Explore Speaking & Media",
    href: "/speaking-media",
  },
  {
    icon: BookOpen,
    label: "Books & Publications",
    body: (
      <>
        Author of <span className="italic">The Hidden Gap</span> and{" "}
        <span className="italic">Leaders, It&rsquo;s Not How You Finish&hellip; It&rsquo;s How You Start!</span>{" "}
        with further publications on transformation and change.
      </>
    ),
    cta: "Explore Books & Publications",
    href: "/books",
  },
  {
    icon: Wrench,
    label: "Tools & Frameworks",
    body: "Practical tools and frameworks for navigating organisational transformation, developed through years of consulting experience.",
    cta: "Explore Tools & Frameworks",
    href: "/tools-and-frameworks",
  },
]

export default function InsightsPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        {/* HERO */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Insights & Media
            </p>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              Thought leadership on transformation, organisational change and the conditions that enable lasting impact.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Articles, talks, books and practical tools exploring how organisations navigate complex change and build lasting capability.
            </p>
          </div>
        </section>

        {/* ITEMS */}
        <section className="pb-24">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex h-full flex-col rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4b80]/10">
                  <item.icon
                    className="h-6 w-6 text-[#1b4b80]"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 flex-1">
                  <h2 className="text-2xl font-semibold text-[#1C1B18]">
                    {item.label}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#1C1B18]/75">
                    {item.body}
                  </p>
                </div>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center rounded-md bg-[#1b4b80] px-4 py-2.5 text-base font-bold text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
                >
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
