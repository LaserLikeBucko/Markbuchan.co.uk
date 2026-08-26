import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "What Is the Values Integrity Model (VIM)? | Mark Buchan MSc",
  description: "The Values Integrity Model (VIM) asks whether a value has been declared and whether it's actually operating, then places it in one of five positions: Core, Underground, Theatre, Aspirational or Void.",
  openGraph: {
    title: "What Is the Values Integrity Model (VIM)? | Mark Buchan MSc",
    description: "The Values Integrity Model (VIM) asks whether a value has been declared and whether it's actually operating, then places it in one of five positions: Core, Underground, Theatre, Aspirational or Void.",
    images: [{ url: "/images/og/og-values-integrity-model.jpg", width: 1200, height: 630 }],
  },
}

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Values Integrity Model (VIM)",
  "alternateName": "VIM",
  "description": "A framework that asks whether an organisational value has been declared and whether it is actually operating, placing it in one of five positions: Core, Underground, Theatre, Aspirational or Void.",
  "inDefinedTermSet": "https://markbuchan.co.uk/values-integrity-model",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Values Integrity Model (VIM)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Values Integrity Model (VIM) asks whether a value has been declared and whether it's actually operating, then places it in one of five positions, Core, Underground, Theatre, Aspirational or Void, depending on the answer.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the VIM used for when looking at organisational values?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIM is used to work out which values are genuinely running the decisions inside an organisation, and which ones are only declared but not operating.",
      },
    },
  ],
}

export default function ValuesIntegrityModelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              Framework
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              What Is the Values Integrity Model (VIM)?
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18] opacity-75">
              The framework asks whether a value has been declared and whether it&apos;s actually operating, then places it in one of five positions: Core, Underground, Theatre, Aspirational or Void.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* BODY */}
        <article className="py-24">
          <div className="mx-auto max-w-3xl px-6">

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Ask ten leaders in the same organisation whether their culture lives its values, and you&apos;ll get ten honest answers that don&apos;t agree with each other. That used to confuse me. Now it&apos;s the whole point.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Values aren&apos;t one thing happening to everyone at once. They sit in different positions for different people, often in the same room, often about the same decision. The Values Integrity Model (VIM) is how I map which position is actually in play. I built it after enough workshops where a values statement went up on a wall, everyone nodded, and the nodding told me precisely nothing about what was running the place.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              VIM is the framework underneath The Hidden Gap, and underneath most of what I write here. Values Theatre, Underground Values, the whole vocabulary. So it&apos;s worth fifteen minutes to explain properly, once, so I can just point back to this page from now on.
            </p>

            {/* IN ONE SENTENCE — callout */}
            <div className="rounded-2xl border-2 border-[#F2C230] bg-[#EDE8DE] p-8 my-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
                In one sentence
              </p>
              <p className="text-xl font-semibold text-[#1C1B18] leading-relaxed">
                the Values Integrity Model (VIM) asks whether a value has been declared and whether it&apos;s actually operating, then places it in one of five positions, Core, Underground, Theatre, Aspirational or Void, depending on the answer. I use it to work out which values are genuinely running the decisions inside an organisation, and which ones are just on the wall.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              Two questions, not one
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              VIM asks two questions about any value. Not one.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              First: is it declared? Has someone actually said it, written it down, put it on a wall or in a strategy deck?
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Second: is it operating? Is it actually driving decisions right now, especially the inconvenient ones?
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              Most values conversations only ever ask the first question. That&apos;s most of the problem right there. A value can be declared and dead. A value can be operating hard and never once get mentioned. Put both questions on two axes, declared and operating, and you don&apos;t get a tidy line running from good culture to bad culture. You get five distinct positions.
            </p>

            <figure className="my-12">
              <Image
                src="/images/vim/vim-model.png"
                alt="The Values Integrity Model: Underground, Core, Void, Theatre and Aspirational, mapped across the Declared and Operating axes"
                width={1829}
                height={1698}
                className="w-full max-w-xl mx-auto h-auto rounded-2xl border border-[rgba(28,27,24,0.1)]"
              />
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                The Values Integrity Model: Underground, Core, Void, Theatre and Aspirational, mapped across the Declared and Operating axes
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              The five positions
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-[#1C1B18]">Core.</strong> Declared and operating. This is the value someone actually lives by, especially when it costs them something. They said it, the decision got hard, and they did it anyway. Not many values earn this position, and that&apos;s fine. A value doesn&apos;t need company here. It needs to be true.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-[#1C1B18]">Underground.</strong> Undeclared and operating. Nobody named this value, and it&apos;s quietly running the whole show. It&apos;s the real reason the decision got made, and it shows up nowhere in the minutes. Underground values aren&apos;t automatically the villain. Speed, caution, loyalty to the founder: plenty of undeclared values are perfectly sensible. What makes them dangerous is that nobody can hold them to account, because officially they don&apos;t exist.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-[#1C1B18]">Theatre.</strong> Declared, not operating, and nobody&apos;s saying so out loud. This is the value on the wall that the decisions quietly contradict. You say collaboration, then promote whoever shouts loudest in the meeting. Everyone in the building can feel the gap. Nobody&apos;s allowed to name it. This is the position that does the most damage, because from a distance it looks exactly like integrity.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-[#1C1B18]">Aspirational.</strong> Declared, not operating, and everyone knows it. From the outside this looks identical to Theatre. The difference is honesty. An aspirational value is one you&apos;ve named and haven&apos;t earned yet, and you say so. &ldquo;We want to be the kind of place where junior people challenge senior people. We&apos;re not there yet.&rdquo; That sentence is worth more than most mission statements, because it&apos;s true.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              <strong className="text-[#1C1B18]">Void.</strong> Undeclared and not operating. Nobody&apos;s pretending, and nobody&apos;s hiding anything either. It&apos;s just not there. This is the most common position for most values in most organisations, most of the time. It&apos;s also the least interesting, which is exactly why it gets ignored in favour of arguing about the other four.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              One away day, five positions
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Picture a leadership team at a mid-sized firm, two years ago, at an away day. Five values go up on the wall. By the time the coffee&apos;s cold, all five are sitting in different positions, and nobody in the room has noticed.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              &ldquo;We move at speed&rdquo; is Theatre. It&apos;s been on every deck since the away day, and the managing director still can&apos;t remember the last project she killed early, whatever the data said.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Underneath it, undeclared, is the real reason things do move fast in that building: the managing director hates losing face in front of clients. That&apos;s Underground. It works, it drives real decisions every week, and it will never appear in a values statement, because saying it out loud would be a career-limiting move.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              One director on that team genuinely does kill projects the moment the numbers turn, no exceptions, no matter who&apos;s attached to them. For her, &ldquo;we move at speed&rdquo; is Core.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              A newer director says something braver than anyone else in the room: &ldquo;we&apos;re not fast yet, and I don&apos;t think we&apos;re honest about that.&rdquo; That&apos;s Aspirational, and it&apos;s the healthiest sentence spoken all day.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              And &ldquo;sustainability&rdquo;, declared at that same away day two years ago, hasn&apos;t been mentioned since. Nobody&apos;s defending it. Nobody&apos;s killing it either. It&apos;s sitting in Void, gathering dust on a slide nobody opens.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              Same team, same wall, same morning. Five different positions. That&apos;s what VIM is built to see.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              Why this matters more than it looks like it should
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              None of these five positions are fixed. A value can move between them, quarter to quarter, decision to decision. That&apos;s the point of naming them. Not to sort your organisation into a box, but to give you a precise question to ask instead of the useless one everyone defaults to.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Stop asking &ldquo;do we live our values?&rdquo; Nobody can answer that honestly, because it isn&apos;t really a question. Ask instead: which position is this value actually in right now, and who benefits from it staying there?
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              The gap does not close because people try harder. It closes because they see more clearly.
            </p>

            <div className="h-px w-full bg-[rgba(27,75,128,0.25)] mb-12" />

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              If you want to see VIM working on a real leadership team,{" "}
              <Link href="/resources/blog/organisational-values-and-strategy-execution" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                The Illusion of Agreement
              </Link>
              {" "}walks through what happens when a team believes it&apos;s aligned and isn&apos;t.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              If you want to find out which of these five positions your own organisation is actually standing in,{" "}
              <Link href="/the-hidden-gap-diagnostic" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                The Hidden Gap Diagnostic
              </Link>
              {" "}is built to find out.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              VIM is the framework at the centre of my book,{" "}
              <Link href="/book" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                <em>The Hidden Gap: Solving the Human Alignment Problem</em>
              </Link>
              . Published June 19th 2026 by The Human Alignment Company.
            </p>

          </div>
        </article>

      </main>

      <Footer />
    </>
  )
}
