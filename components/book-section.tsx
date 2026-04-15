"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { BookOpen, ArrowRight } from "lucide-react"
import { useState } from "react"

export function BookSection() {
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
        page: "book", // change to "newsletter" in the other component
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
    <section id="book" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          The Book
        </p>
        <Separator className="mb-12 max-w-16 bg-accent/40" />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Book cover */}
          <div className="relative w-full max-w-xs shrink-0 lg:max-w-sm">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/book-cover.jpg"
                alt="The Hidden Gap — book cover by Mark Buchan"
                width={400}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Book info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-accent">
              <BookOpen className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
              The Hidden Gap
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Most organisations talk about values. Very few know how to clarify them,
              prioritise them, or use them to guide behaviour when pressure hits. When
              values remain vague, conflict increases, decisions stall, and teams
              start arguing about personalities instead of principles.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              The Hidden Gap introduces the ECHO framework, a practical way to
              surface the values already shaping behaviour, clarify what they mean,
              establish their hierarchy, and test them against real-world decisions.
              The result is simple but powerful: less confusion, fewer hidden
              conflicts, and leadership that actually holds under pressure.
            </p>

            {/* Waitlist form */}
            <div className="mt-4">
              {submitted ? (
                <div className="rounded-lg border border-accent/30 bg-accent/10 p-6">
                  <p className="font-medium text-foreground">
                    You{"'"}re on the list.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We{"'"}ll be in touch when the book is ready to ship.
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-3 text-sm font-medium text-foreground">
                    Read the first chapter - available April 2026
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:flex-row"
                  >
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 flex-1 border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                    <Button
                      type="submit"
                      className="h-11 bg-accent text-accent-foreground hover:bg-accent/90 px-6"
                    >
                      Get First Chapter
                      
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
