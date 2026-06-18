"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PreOrderPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnddyz"

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, source: "pre-order-notify" }),
    })
    if (res.ok) { setSubmitted(true); setEmail("") }
  }

  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] items-center">

              {/* BOOK COVER */}
              <div className="mx-auto w-full max-w-[260px] md:max-w-[300px]">
                <div className="overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-2 ring-black/10">
                  <Image
                    src="/images/book-cover.jpg"
                    alt="The Hidden Gap book cover"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* HEADLINE */}
              <div>
                <div className="inline-block bg-[#ff3131] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🎂 Launching June 19th 2026
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111110] mb-4">
                  The Hidden Gap
                </h1>
                <p className="text-xl text-[#111110] opacity-75 mb-2">
                  Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture
                </p>
                <p className="text-base text-[#111110] opacity-55 mb-8">
                  How operating values drive behaviour, conflict and culture
                </p>
                <p className="text-lg leading-relaxed text-[#111110] opacity-80 mb-8">
                  You have seen it. The team that agrees in the meeting and disagrees in the corridor. The change initiative that quietly disappears. The culture that looks right on paper and feels wrong in practice.
                </p>
                <p className="text-lg font-semibold text-[#111110]">
                  The problem is the hidden gap. This book names it — and shows you how to close it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* THREE OPTIONS */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#111110] mb-4">
                Choose how you want to read it
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Buy direct from me and receive exclusive bonuses.  
                Or grab it on Amazon. Either way - Thank You!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {/* KINDLE - AMAZON */}
              <div className="flex flex-col gap-4 rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amazon Kindle</p>
                <h3 className="text-2xl font-bold text-[#111110]">Digital</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#111110]">$13.99</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#111110] font-bold mt-0.5">✓</span>
                    Instant delivery on June 19th
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#111110] font-bold mt-0.5">✓</span>
                    Read on any device with the Kindle app
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#111110] font-bold mt-0.5">✓</span>
                    Amazon purchase protection
                  </li>
                </ul>
                <a
                  href="https://www.amazon.com/dp/B0H2QGH9GM?ref=sp_email"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Buy on Amazon →
                </a>
              </div>

              {/* DIRECT - RECOMMENDED */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff3131] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Recommended
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Buy Direct</p>
                <h3 className="text-2xl font-bold text-[#111110]">Digital + Bonuses</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#111110]">£13.99</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#ff3131] font-bold mt-0.5">✓</span>
                    The complete eBook
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#ff3131] font-bold mt-0.5">✓</span>
                    First chapter of the workbook — free
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#ff3131] font-bold mt-0.5">✓</span>
                    Access to the Living Appendix
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#ff3131] font-bold mt-0.5">✓</span>
                    You support the work directly
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/6oU00ia9Q7Cke7I4a71VK00"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#ff3131] px-5 py-3 text-white font-semibold hover:bg-[#111110] transition-colors"
                >
                  Buy Direct — £13.99 →
                </a>
              </div>

              {/* BUNDLE */}
              <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[#111110] bg-[#ffff00] p-8 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111110] text-[#ffff00] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Best Value
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#111110] opacity-60">Launch Bundle</p>
                <h3 className="text-2xl font-bold text-[#111110]">Book + Workbook</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#111110]">£29.99</span>
                  <span className="text-sm text-[#111110] opacity-50 line-through">£38.98</span>
                </div>
                <ul className="flex flex-col gap-2 text-sm text-[#111110] opacity-80 flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="font-bold mt-0.5">✓</span>
                    The complete eBook
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold mt-0.5">✓</span>
                    The complete workbook
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold mt-0.5">✓</span>
                    First chapter of workbook now
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold mt-0.5">✓</span>
                    Access to the Living Appendix
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold mt-0.5">✓</span>
                    Save over £8 — limited time
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/eVq7sK2Ho4q81kW4a71VK01"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Get the Bundle — £29.99 →
                </a>
              </div>

            </div>

            {/* PAPERBACK NOTE */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                📚 Paperback edition available from <strong>July 3rd</strong> on Amazon. <a href="YOUR_AMAZON_PAPERBACK_LINK" className="underline hover:text-[#ff3131]">Pre-order here →</a>
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET - DIRECT BUYERS */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-[#ffff00] mb-4 text-center">
              Why buy direct?
            </h2>
            <p className="text-lg text-white opacity-65 text-center mb-16 max-w-xl mx-auto">
              When you buy direct you support the work, get exclusive bonuses, and join the community of people doing this work.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <span className="text-3xl">📖</span>
                <h3 className="font-bold text-[#ffff00]">First workbook chapter free</h3>
                <p className="text-sm text-white opacity-60 leading-relaxed">
                  Get the first chapter of The Hidden Gap Workbook immediately — a taste of the companion tool that takes the book's work into practice.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-3xl">🔑</span>
                <h3 className="font-bold text-[#ffff00]">Access to the Living Appendix</h3>
                <p className="text-sm text-white opacity-60 leading-relaxed">
                  The hidden page for readers — exercises, tools, downloads and resources that grow as the work grows. Not listed anywhere on the site.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-3xl">🤝</span>
                <h3 className="font-bold text-[#ffff00]">You support the work directly</h3>
                <p className="text-sm text-white opacity-60 leading-relaxed">
                  Buying direct means more of your money goes to the work and less to the platform. It also means we stay connected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT THE BOOK */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold text-[#111110] mb-8 text-center">
              What the book is about
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Most organisations don't have a behaviour problem. They have a human alignment problem — a gap between the values they publicly declare and the values that actually drive behaviour beneath the surface.
              </p>
              <p>
                <em>The Hidden Gap</em> introduces the Values Integrity Model — a framework for identifying the visible and invisible value systems operating inside teams, organisations, and human systems at scale.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                And it goes further. At a time when the world is racing toward artificial intelligence, The Hidden Gap asks: how can humanity hope to align intelligent machines when human systems themselves remain fundamentally misaligned?
              </p>
              <p>
                Drawing on more than two decades of experience across pharmaceuticals, banking, insurance, telecoms, engineering, technology, and the public sector — this is the book that names the pattern and provides the framework for changing it.
              </p>
            </div>
          </div>
        </section>

        {/* NOT READY TO BUY */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#ffff00] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-[#111110] mb-4">
              Not ready to buy yet?
            </h2>
            <p className="text-lg text-[#111110] opacity-70 mb-8 max-w-xl mx-auto">
              Get the first chapter free — and I'll let you know the moment the book goes live on June 19th.
            </p>
            {submitted ? (
              <div className="rounded-lg border-2 border-[#111110] bg-white px-6 py-5 max-w-md mx-auto">
                <p className="font-semibold text-[#111110]">You're on the list.</p>
                <p className="mt-1 text-sm text-muted-foreground">First chapter on its way — and I'll be in touch on June 19th.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 rounded-md border-2 border-[#111110] bg-white px-4 text-[#111110] placeholder:text-[#111110]/40 focus:outline-none focus:border-[#ff3131]"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-md bg-[#111110] text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors whitespace-nowrap"
                >
                  Get first chapter →
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-[#111110] opacity-40">No spam. Unsubscribe any time.</p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
