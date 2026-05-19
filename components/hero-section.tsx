"use client"

import Image from "next/image"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
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
        page: "hero", // change to "newsletter" in the other component
      }),
    })
  
    if (res.ok) {
      setSubmitted(true)
      setEmail("")
    } else {
      // Optional: you can show a small error message if you want
      // For Increment 1, we can keep it silent.
    }
  }
  

  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      {/* Ivory band (fixed, does NOT move with book) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-white" />

      {/* Grain only on the ivory band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 pb-12 text-center">
        {/* Headline stays fully in ivory */}
        <h1 className="mx-auto max-w-3xl font-serif text-xl font-bold leading-snug text-foreground text-balance md:text-2xl lg:text-3xl">
<span className="block">
  Organisations don’t have a dysfunctional behaviour problem.
</span>
<span className="block mt-2">
  They have a human alignment problem.
</span>
<span className="block mt-3">
 The Hidden Gap reveals the difference between what we say matters… and what actually drives behaviour.
</span>
        </h1>

        {/* Book overlaps ivory + white */}
        <div className="mx-auto mt-10 w-full max-w-[360px]">
          <div className="relative -mb-10 mt-20">
            <div className="relative overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
              <Image
                src="/images/book-cover.jpg"
                alt="The Hidden Gap — book cover by Mark Buchan"
                width={680}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Date below book (larger) */}
          <p className="mt-16 text-center text-base font-medium text-muted-foreground md:text-lg">
            Available June 19th, 2026
          </p>

          {/* Email + CTA below date */}
          <div className="mt-6">
          {submitted ? (
  <div className="rounded-lg border border-black/10 bg-white px-5 py-4 text-left">
    <p className="font-medium text-foreground">You’re on the list.</p>
    <p className="mt-1 text-sm text-muted-foreground">
      I’ll email you the first chapter shortly.
    </p>
  </div>
) : (
  <>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3"
    >
      <input type="hidden" name="source" value="first_chapter_request" />
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 w-full sm:w-[360px] border-black/10 bg-white text-foreground placeholder:text-muted-foreground"
      />
      <Button
        type="submit"
        className="h-12 w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-6 text-base font-medium"
      >
        Get the first chapter
      </Button>
    </form>

    <p className="mt-3 text-sm text-muted-foreground text-center">
      Free chapter. No spam. Unsubscribe anytime.
    </p>
  </>
)}
          </div>
        </div>
      </div>
    </section>
  )
}