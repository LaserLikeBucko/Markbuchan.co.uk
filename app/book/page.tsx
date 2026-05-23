"use client"

import Image from "next/image"
import { useState, type FormEvent } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function BookPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnddyz"

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        source: "website",
        page: "book",
      }),
    })

    if (res.ok) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-6xl px-6 grid gap-14 md:grid-cols-[0.9fr_1.1fr] items-center">

            {/* BOOK COVER */}
            <div className="mx-auto w-full max-w-[300px] md:max-w-[340px]">
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

            {/* BOOK INFO */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#111110] opacity-60 font-medium mb-4">
                Forthcoming book
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111110] mb-3">
                The Hidden Gap
              </h1>
              <p className="text-xl md:text-2xl text-[#111110] opacity-75 mb-2">
                Solving the Human Alignment Problem
              </p>
              <p className="text-base text-[#111110] opacity-60 mb-8">
                How operating values drive behaviour, conflict and culture
              </p>

              <div className="flex flex-col gap-4 text-lg leading-relaxed text-[#111110] opacity-80 mb-8">
                <p>
                  Most organisations do not have a dysfunctional behaviour problem. They have a human alignment problem.
                </p>
                <p>
                  <em>The Hidden Gap</em> explores the distance between what people and organisations say matters — and what actually drives behaviour when pressure rises.
                </p>
                <p className="font-semibold text-[#111110] opacity-100">
                  Available June 19th, 2026.
                </p>

                <a
                href="/pre-order"
                className="inline-flex items-center justify-center rounded-md bg-[#111110] px-6 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#111110] transition-colors"
                >
                  Available for Pre-Order Now
                </a>
              </div>


              {/* EMAIL CAPTURE */}
              <div className="mt-6">
                {submitted ? (
                  <div className="rounded-lg border-2 border-[#111110] bg-white px-6 py-5">
                    <p className="font-semibold text-[#111110]">You're on the list.</p>
                    <p className="mt-1 text-sm text-[#111110] opacity-60">
                      I'll send the first chapter as soon as it is ready.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 flex-1 border-2 border-[#111110] bg-white text-[#111110] placeholder:text-[#111110]/40 focus:border-[#ff3131]"
                      />
                      <Button
                        type="submit"
                        className="h-12 bg-[#111110] text-[#ffff00] hover:bg-[#ff3131] px-6 text-base font-semibold"
                      >
                        Get the first chapter
                      </Button>
                    </form>
                    <p className="mt-3 text-sm text-[#111110] opacity-50">
                      Free chapter. No spam. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT THE BOOK HELPS YOU SEE */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                What the book covers
              </p>
              <Separator className="mb-8 max-w-16 bg-accent/40 mx-auto" />
              <h2 className="text-3xl font-bold text-[#111110]">
                What the book helps you see
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Not just what people say they value — but what is actually operating underneath behaviour, decisions and culture.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111110] mb-4">The gap</h3>
                <p className="text-[#333330] leading-relaxed">
                  The difference between declared values and operating values — between what is said and what is actually reinforced when pressure rises.
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111110] mb-4">The cost</h3>
                <p className="text-[#333330] leading-relaxed">
                  How misalignment shows up as conflict, cynicism, stalled change, energy drain and hidden patterns that keep repeating regardless of intervention.
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111110] mb-4">The response</h3>
                <p className="text-[#333330] leading-relaxed">
                  A clearer way of understanding what is really going on — and a more intentional, practical way of working with it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#111110] py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#ffff00] leading-relaxed">
              "The gap does not close because people try harder.<br />
              It closes because they see more clearly."
            </p>
            <p className="mt-4 text-sm text-white opacity-40">— The Hidden Gap</p>
          </div>
        </section>

        {/* FIVE PARTS */}
        <section className="bg-[#ffff00] py-24 border-t-4 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-[#111110] mb-16 text-center">
              Five parts. One through line.
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { part: "Part 1", title: "What's Really Running the Show", desc: "Why values collide, what keeps the hidden gap alive, and the energy cost of misalignment." },
                { part: "Part 2", title: "Taking Responsibility for What Runs You", desc: "How to surface, clarify, and work honestly with the values already operating in your life." },
                { part: "Part 3", title: "When Values Become Shared", desc: "What happens when values work moves from the individual into teams and organisations." },
                { part: "Part 4", title: "Working with the Gap in Real Time", desc: "The Inner Coach, the Choice Triangle, and how to spot and respond to the gap as it appears." },
                { part: "Part 5", title: "Aligned to What? The System We Are Building", desc: "The human alignment problem at civilisational scale — and what each of us can do about it." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-white rounded-2xl border-2 border-[#111110] p-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#111110] text-[#ffff00] font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.part}</p>
                    <h3 className="font-bold text-[#111110] mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold text-[#111110] mb-12 text-center">
              Go further
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111110] mb-4">
                  Take the free diagnostic
                </h3>
                <p className="text-[#333330] leading-relaxed flex-1">
                  Four minutes. Locate where your values actually sit using the Values Integrity Model from the book.
                </p>
                <a
                  href="/the-hidden-gap-diagnostic"
                  className="mt-6 inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Take the diagnostic →
                </a>
              </div>
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#111110] mb-4">
                  Work with me directly
                </h3>
                <p className="text-[#333330] leading-relaxed flex-1">
                  The Human Alignment Diagnostic — a two-week senior engagement that locates your organisation's hidden gap with precision.
                </p>
                <a
                  href="/leadership-alignment-diagnostic"
                  className="mt-6 inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-[#ffff00] font-semibold hover:bg-[#ff3131] transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
