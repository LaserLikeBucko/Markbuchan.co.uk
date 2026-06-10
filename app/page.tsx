"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomeV2Page() {
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
        source: "homepage",
        page: "home",
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
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[#ffff00] border-b-4 border-dashed border-[#111110]" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "180px 180px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <div className="mx-auto mt-10 w-full max-w-[340px]">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                <Image
                  src="/images/book-cover.jpg"
                  alt="The Hidden Gap book cover by Mark Buchan"
                  width={680}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <p className="mt-6 text-base font-medium text-[#111110]">
                🎂 Launching June 19th 2026
              </p>

              <div className="mt-6">
                {submitted ? (
                  <div className="rounded-lg border border-black/10 bg-white px-6 py-5 text-center">
                    <p className="font-medium text-foreground">
                      You’re on the list.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      I’ll send the first chapter as soon as it’s ready.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 border-black/10 bg-white text-foreground placeholder:text-muted-foreground"
                      />
                      
                      <Button
                        type="submit"
                        className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-medium"
                      >
                        Get the first chapter
                      </Button>
                    </form>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Free chapter. No spam. Unsubscribe anytime.
                    </p>

                    
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t-4 border-dashed border-[#111110] m-0" />

        {/* SOCIAL PROOF QUOTE */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-[#111110] italic">
              "Organisational issues hiding in plain sight — a hugely insightful read that would benefit many organisations and leaders."
            </p>
            <p className="mt-4 text-sm font-semibold text-[#111110]">Mick Power</p>
            <p className="text-sm text-[#111110] opacity-50">Programme & Transformation Leader</p>
          </div>
        </section>

        <hr className="border-0 border-t-2 border-dashed border-[#111110]/20 m-0" />

        <section className="pb-20 pt-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="mx-auto max-w-2xl text-2xl md:text-4xl font-semibold leading-snug text-[#111110]">
              Organisations don't have a dysfunctional behaviour problem.
              <br />
              They have a human alignment problem.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
              The Hidden Gap is the distance between what we say matters… and
              what actually drives behaviour.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
              That gap shapes conflict, trust, collaboration and change — often
              long before anyone has language for what is really happening.
            </p>
          </div>
        </section>

        <section className="border-t-4 border-dashed border-[#111110] bg-[#ffff00] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-[#111110]">
                Three ways to go deeper
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Start with the book, work with me directly, or explore the
                resources that are growing around the work.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="min-h-[140px]">
                  <h3 className="text-2xl font-semibold text-[#111110]">Book</h3>
                  <p className="mt-4 text-[#333330] leading-relaxed">
                     Pre-order now and get exclusive bonuses at launch. Available June 19th on Kindle.
                  </p>
                </div>
                <a
                  href="/book"
                  className="mt-auto inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-white hover:bg-[#ff3131]"
                >
                  Explore the book
                </a>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="min-h-[140px]">
                  <h3 className="text-2xl font-semibold text-[#111110]">
                    Work With Me
                  </h3>
                  <p className="mt-4 text-[#333330] leading-relaxed">
                    Workshops, coaching, speaking and facilitated conversations
                    for people working with the gap in real time.
                  </p>
                </div>
                <a
                  href="/work-with-me"
                  className="mt-auto inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-white hover:bg-[#ff3131]"
                >
                  View live offers
                </a>
              </div>

              <div className="flex h-full flex-col rounded-2xl border border-[rgba(17,17,16,0.15)] bg-white p-8 shadow-sm">
                <div className="min-h-[140px]">
                  <h3 className="text-2xl font-semibold text-[#111110]">
                    Resources
                  </h3>
                  <p className="mt-4 text-[#333330] leading-relaxed">
                    Digital tools, worksheets, reflections and practical resources
                    to help people see and work with the gap.
                  </p>
                </div>
                <a
                  href="/resources"
                  className="mt-auto inline-flex items-center rounded-md bg-[#111110] px-5 py-3 text-white hover:bg-[#ff3131]"
                >
                  Explore resources
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#555550] font-medium">
                Forthcoming book
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#111110]">
                The Hidden Gap
              </h2>
              <p className="mt-2 text-xl text-stone-700">
                Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                A forthcoming book exploring how operating values drive
                behaviour, conflict and culture — and why so much of what we try
                to fix at the surface is actually being shaped somewhere deeper.
              </p>
              <a
                href="/book"
                className="mt-8 inline-flex items-center rounded-md border border-[rgba(17,17,16,0.2)] px-5 py-3 text-[#111110] hover:bg-white"
              >
                Learn more about the book
              </a>
            </div>

            <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-[rgba(17,17,16,0.15)] bg-white shadow-sm">
              <Image
                src="/images/book-cover.jpg"
                alt="The Hidden Gap book cover"
                width={900}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}