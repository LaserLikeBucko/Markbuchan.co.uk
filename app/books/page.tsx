import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { BookRow } from "@/components/book-row"

export const metadata: Metadata = {
  title: "Books & Publications — Mark Buchan MSc",
  description:
    "Books and publications by Mark Buchan on organisational transformation, leadership alignment and the human side of change.",
  openGraph: {
    title: "Books & Publications — Mark Buchan MSc",
    description:
      "Books and publications by Mark Buchan on organisational transformation, leadership alignment and the human side of change.",
    images: [{ url: "/images/og/og-image-book.jpg", width: 1920, height: 1080 }],
  },
}

const BOOKS = [
  {
    title: "The Hidden Gap",
    subtitle: "Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture",
    image: "/images/book-cover.jpg",
    alt: "The Hidden Gap book cover",
    body: [
      "You have seen it.",
      "The team that agrees in the meeting and disagrees in the corridor. The change initiative that launches with energy and never delivers. The talented person labelled “difficult” for naming what everyone else steps around. The culture that looks right on paper and feels wrong in practice.",
      "Most organisations try to fix it.",
      "Better communication. Clearer processes. Another workshop. Another reorganisation.",
      "And yet the same patterns return.",
      "Because the issue is rarely effort, intelligence, or intent.",
      "It is the gap between what organisations say they value — and what actually drives behaviour in practice.",
      "This is the hidden gap.",
      "In The Hidden Gap, Mark Buchan introduces the Values Integrity Model (VIM) — a practical framework for identifying the visible and invisible value systems operating inside teams, organisations, and complex human systems.",
      "Drawing on more than two decades of experience across pharmaceuticals, banking and insurance, telecoms, engineering, technology, and the public sector, Buchan shows how unofficial incentives, unspoken rules, and organisational theatre often shape behaviour far more powerfully than the values written on the wall.",
      "Through real-world “From the Trenches” stories and practical tools grounded in psychology and systems thinking, this book moves beyond culture slogans and leadership clichés to expose the hidden dynamics behind cynicism, mistrust, disengagement, and failed transformation.",
      "This is not a book about writing better values statements.",
      "It is a book about understanding what actually drives human behaviour — and what it takes to align what organisations say with what they do.",
      "Across transformation programmes, leadership environments, and coaching conversations, Buchan observed the same recurring pattern: the growing distance between declared values and rewarded behaviour. He calls this The Hidden Gap.",
      "This book gives it a name — and a way to work with it.",
    ],
    previewCount: 2,
    href: "/book",
  },
  {
    title: "Leaders, it's not how you finish… it's how you start!",
    subtitle: "",
    image: "/images/leaders-its-not-how-you-finish.jpg",
    alt: "Leaders, it's not how you finish… it's how you start! book cover",
    body: [
      "Is your organisation running an Agile Transformation right now? If so, it is most likely costing millions and will not deliver a fraction of the benefits promised by the consultants. In short, it is probably on the road to failure … and the author knows why!",
      "A seasoned ‘Agile trouble-shooter’, with over 20 years’ experience in delivering transformative change and helping turn around failing transformations, Mark Buchan identifies the five mistakes that are common in EVERY failing transformation and these all occur in the early Pre-Transformation Phase.",
      "These mistakes lead to what the author terms ‘Pseudo-Agile Transformation’, the appearance of change where nothing really changes. He sets about explaining what needs to be done instead to create ‘Genuine Agile Transformation’.",
      "Rather than waiting for the change initiative to start failing, leaders need to set it up correctly from the start, and this book shows you how.",
      "Instead of following prescriptions and recipes, and the conventional approach to Agile Transformations provided by large consulting houses, the author suggests following a radical, new strategy that is genuinely tailored to the individual organisation.",
      "The result? A more engaged, enthused, creative collection of Agile teams delivering change, outsmarting and outpacing the competition, resulting in more customer satisfaction, more profit and less waste.",
      "Drawing on human psychology and change management models spanning over 50 years, the author’s model provides an elegant and simple solution that is easy to apply and puts the leaders in the driving seat of their Agile Transformation.",
      "So, leaders, the secret is not how you finish but how you start, that leads to your Agile Transformation being a success!",
    ],
    previewCount: 2,
    href: "/leaders-its-not-how-you-finish",
  },
  {
    title: "The Nine Principles of Agile Leadership",
    subtitle: "Co-developed by Mark Buchan MSc with the Agile Business Consortium's leadership working group.",
    image: "/images/nine-principles-of-agile-leadership.jpg",
    alt: "The Nine Principles of Agile Leadership cover",
    body: [],
    previewCount: 0,
    href: "/the-nine-principles-of-agile-leadership",
    ctaLabel: "View Publication",
  },
]

export default function BooksPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Books & Publications
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              Insights and perspectives on organisational transformation
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18]/75 max-w-2xl">
              Books and publications exploring organisational transformation, leadership, values and the human dynamics that influence how change is understood, adopted and sustained.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* BOOKS LIST */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b4b80]">
              Selected Publications
            </p>
            <Separator className="mb-12 max-w-16 bg-[#1b4b80]/40" />

            <div className="flex flex-col gap-8">
              {BOOKS.map((book) => (
                <BookRow key={book.href} {...book} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
