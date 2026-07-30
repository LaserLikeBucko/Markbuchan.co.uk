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
    body: "Writing on transformation, leadership and the human side of organisational change.",
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
    label: "Books",
    body: "The Hidden Gap and Leaders, it's not how you finish… it's how you start! — Mark's two books on transformation and leadership.",
    cta: "Explore the Books",
    href: "/book",
  },
  {
    icon: Wrench,
    label: "Tools & Frameworks",
    body: "Practical tools and frameworks for navigating organisational transformation, drawn from years of consulting experience.",
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
              Thinking on transformation, leadership and change.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              Articles, talks, books and practical tools for leaders
              navigating complex organisational change.
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
                  <h2 className="text-xl font-semibold text-[#1C1B18]">
                    {item.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#1C1B18]/75">
                    {item.body}
                  </p>
                </div>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center rounded-md bg-[#1b4b80] px-4 py-2.5 text-sm font-medium text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
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
