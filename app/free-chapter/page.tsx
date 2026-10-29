import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Free Chapter — The Hidden Gap | Mark Buchan MSc",
  description: "Read the first chapter of The Hidden Gap by Mark Buchan MSc. Free download. Discover the gap between what organisations say they value and what actually drives behaviour.",
openGraph: {
    title: "Free Chapter — The Hidden Gap | Mark Buchan MSc",
    description: "Read the first chapter of The Hidden Gap by Mark Buchan MSc. Free download. Discover the gap between what organisations say they value and what actually drives behaviour.",
    images: [{ url: "/images/og/og-free-chapter.jpg", width: 1200, height: 630 }],
  },}

export default function FreeChapterPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#1b4b80] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#EDE8DE] opacity-60">
              Free Chapter
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#EDE8DE] text-balance mb-6">
              Read the first chapter free.
            </h1>
            <p className="text-xl leading-relaxed text-white opacity-75 max-w-2xl mx-auto">
              The Hidden Gap opens with a story about a leadership team whose
              internal culture told a very different story from their stated values.
              When the author named it, his contract with the organisation ended.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* DOWNLOAD SECTION */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1b4b80]">
              Chapter One
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-[#1b4b80]/40" />
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-6">
              When Values Compete
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 max-w-xl mx-auto">
              Most leadership advice assumes the problem lies in execution.
              More discipline. Better communication. Clearer strategy.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-xl mx-auto">
              The Hidden Gap asks a different question. What if the values
              you think are running the show — aren't?
            </p>
            <a
              href="/downloads/the-hidden-gap-free-chapter.pdf"
              download
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Download Chapter One — Free →
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              PDF — no email required.
            </p>
          </div>
        </section>

        {/* ABOUT THE BOOK */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section className="bg-[#EDE8DE] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1C1B18] opacity-60">
              About the book
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-[#1C1B18]/40" />
            <h2 className="text-3xl font-bold text-[#1C1B18] mb-6">
              The Hidden Gap
            </h2>
            <p className="text-lg leading-relaxed text-[#1C1B18] opacity-75 mb-6 max-w-xl mx-auto">
              Every organisation has two sets of values. The ones on the wall.
              And the ones that actually drive behaviour when the pressure is on.
            </p>
            <p className="text-lg leading-relaxed text-[#1C1B18] opacity-75 mb-10 max-w-xl mx-auto">
              The distance between them is the Hidden Gap. It costs more than
              most leaders realise — in energy, in trust, in the people who
              leave without saying why.
            </p>
            <a
              href="/book"
              className="inline-flex items-center rounded-md bg-[#1b4b80] px-8 py-4 text-[#EDE8DE] text-lg font-semibold hover:bg-[#1C1B18] transition-colors"
            >
              Buy The Book →
            </a>
            <p className="mt-4 text-sm text-[#1C1B18] opacity-50">
              Available now.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* BOOK */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#EDE8DE] mb-6">
              Enjoyed the chapter?
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              The rest of the book goes deeper — the patterns, the frameworks,
              and what to do about the gap between declared values and
              operating reality.
            </p>
            <Link
              href="/books"
              className="inline-flex items-center rounded-md bg-[#EDE8DE] px-8 py-4 text-[#1C1B18] text-lg font-semibold hover:bg-[#1C1B18] hover:text-[#EDE8DE] transition-colors"
            >
              Get The Hidden Gap →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
