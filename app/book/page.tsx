"use client"

import Image from "next/image"
import { useState, type FormEvent } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "The Hidden Gap Book | Why Values Drive Behaviour at Work",
  description:
    "A practical guide for leaders to understand why team conflict happens and how values drive behaviour. Fix the root cause, not the symptoms.",
  openGraph: {
    title: "The Hidden Gap Book | Why Values Drive Behaviour at Work",
    description: "A practical guide for leaders to understand why team conflict happens and how values drive behaviour. Fix the root cause, not the symptoms.",
    url: "https://markbuchan.co.uk",
    siteName: "The Human Alignment Co.",
    images: [
      {
        url: "https://mark.buchan.co.uk/images/og-image-book.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  };

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
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[#F6F1E8]" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "180px 180px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 grid gap-14 md:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="mx-auto w-full max-w-[340px] md:max-w-[380px]">
              <div className="overflow-hidden rounded-lg bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
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

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-600 font-medium">
                Forthcoming book
              </p>

              <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-stone-900">
                The Hidden Gap
              </h1>

              <p className="mt-3 text-xl md:text-2xl text-stone-700">
                Solving the Human Alignment Problem
              </p>

              <p className="mt-3 text-base md:text-lg text-stone-600">
                How operating values drive behaviour, conflict and culture
              </p>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Most organisations do not have a dysfunctional behaviour problem.
                They have a human alignment problem.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-700">
                <em>The Hidden Gap</em> explores the distance between what people
                and organisations say matters… and what actually drives behaviour
                when pressure rises.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-700">
                It is a book about values, conflict, culture and the hidden
                forces that shape how people communicate, collaborate and change.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-700">
                Available May 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-stone-900">
                What the book helps you see
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-700">
                Not just what people say they value, but what is actually
                operating underneath behaviour, decisions and culture.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-stone-900">
                  The gap
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  The difference between declared values and operating values —
                  between what is said and what is reinforced.
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-stone-900">
                  The cost
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  How misalignment shows up as conflict, cynicism, stalled change,
                  energy drain and hidden patterns that keep repeating.
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-[#F6F1E8] p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-stone-900">
                  The response
                </h3>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  A clearer way of understanding what is really going on — and a
                  more intentional way of working with it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-stone-900">
                Get the first chapter
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-700">
                If this speaks to something you have seen or felt in organisations,
                join the list and I’ll send you the first chapter.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-xl">
              {submitted ? (
                <div className="rounded-lg border border-black/10 bg-white px-6 py-5 text-center">
                  <p className="font-medium text-foreground">
                    You’re on the list.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I’ll send the first chapter as soon as it is ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 flex-1 border-black/10 bg-white text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    type="submit"
                    className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 px-6 text-base font-medium"
                  >
                    Get the first chapter
                  </Button>
                </form>
              )}

              {!submitted && (
                <p className="mt-3 text-sm text-muted-foreground text-center">
                  Free chapter. No spam. Unsubscribe anytime.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-900">
                Want to experience the ideas live?
              </h3>
              <p className="mt-4 text-stone-700 leading-relaxed">
                The 90-minute workshop is the fastest way to explore the core
                ideas behind the book with others.
              </p>
              <a
                href="/workshop"
                className="mt-6 inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                View the workshop
              </a>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-900">
                Prefer practical tools?
              </h3>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Explore the resources, digital tools and companion material that
                are growing around the work.
              </p>
              <a
                href="/resources"
                className="mt-6 inline-flex items-center rounded-md bg-stone-900 px-5 py-3 text-white hover:bg-stone-800"
              >
                Explore resources
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}