"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const SECONDARY_LINKS = [
  {
    title: "Take the 4-min diagnostic",
    description: "See where your own hidden gap shows up, in under 4 minutes.",
    href: "https://www.markbuchan.co.uk/the-hidden-gap-diagnostic/",
  },
  {
    title: "Join From Our Trenches",
    description: "Fortnightly, honest, no-fluff thinking on values and culture.",
    href: "https://www.markbuchan.co.uk/community/",
  },
  {
    title: "Book a diagnostic conversation",
    description: "Free, 30 minutes, usually surfaces something useful.",
    href: "https://www.markbuchan.co.uk/work-with-me/#diagnostic-conversation",
  },
]

export default function ThanksLinkedInPage() {
  useEffect(() => {
    window.gtag?.("event", "linkedin_thanks_view")
  }, [])

  function handleSecondaryClick(title: string) {
    window.gtag?.("event", "linkedin_secondary_click", { link: title })
  }

  function handleBookMentionClick() {
    window.gtag?.("event", "linkedin_book_mention_click")
  }

  return (
    <>
      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#111110] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#ffff00] text-balance mb-6">
              It&apos;s downloading now;
              <br />
              check your downloads folder.
            </h1>
            <p className="text-xl leading-relaxed text-white opacity-75 max-w-2xl mx-auto">
              Once you have read the chapter, here&apos;s where you can go deeper:
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* SECONDARY LINKS */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {SECONDARY_LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => handleSecondaryClick(link.title)}
                  className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm hover:border-[#111110] transition-colors"
                >
                  <h3 className="text-xl font-bold text-[#111110] mb-3">
                    {link.title}
                  </h3>
                  <p className="text-[#333330] leading-relaxed flex-1">
                    {link.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-[#ff3131]">
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* SOFT BOOK MENTION */}
        <section className="bg-[#ffff00] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-lg text-[#111110] leading-relaxed">
              If Chapter 1 resonates, the full book is live on Amazon and at{" "}
              <a
                href="/book"
                onClick={handleBookMentionClick}
                className="underline font-semibold hover:text-[#ff3131]"
              >
                markbuchan.co.uk/book
              </a>{" "}
              — use <span className="font-semibold">LINKEDIN25</span> for 25% off.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
