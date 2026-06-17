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
        <section className="bg-[#111110] pt-32 pb-20 border-b-4 border-dashed border-[#ffff00]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              Free Chapter
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#ffff00] text-balance mb-6">
              Read the first chapter free.
            </h1>
            <p className="text-xl leading-relaxed text-white opacity-75 max-w-2xl mx-auto">
              The Hidden Gap opens with a story about a leadership team whose 
              internal culture told a very different story from their stated values. 
              When the author named it, his contract with the organisation ended.
            </p>
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Chapter One
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-6">
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
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] hover:text-white transition-colors"
            >
              Download Chapter One — Free →
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              PDF — no email required.
            </p>
          </div>
        </section>

        {/* ABOUT THE BOOK */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              About the book
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-[#111110]/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-6">
              The Hidden Gap
            </h2>
            <p className="text-lg leading-relaxed text-[#111110] opacity-75 mb-6 max-w-xl mx-auto">
              Every organisation has two sets of values. The ones on the wall. 
              And the ones that actually drive behaviour when the pressure is on.
            </p>
            <p className="text-lg leading-relaxed text-[#111110] opacity-75 mb-10 max-w-xl mx-auto">
              The distance between them is the Hidden Gap. It costs more than 
              most leaders realise — in energy, in trust, in the people who 
              leave without saying why.
            </p>
            <a
              href="/pre-order"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] hover:text-white transition-colors"
            >
              Pre-Order The Book →
            </a>
            <p className="mt-4 text-sm text-[#111110] opacity-50">
              Publishes 19th June 2026 — use code LINKEDIN25 for 25% off.
            </p>
          </div>
        </section>

        {/* SUBSTACK */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              Enjoyed the chapter?
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              Join the conversation on Substack. Real stories, honest 
              observations, and a community for people navigating the gap 
              between declared values and operating reality.
            </p>
            <a
              href="https://thehumanalignmentco.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Join From Our Trenches →
            </a>
            <p className="mt-6 text-sm text-white opacity-30">
              Free to join. No spam. Unsubscribe any time.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}