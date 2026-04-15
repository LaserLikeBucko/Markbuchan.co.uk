"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjbkego"

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
        page: "newsletter", // change to "newsletter" in the other component
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
    <section id="newsletter" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full bg-accent/10">
          <Mail className="size-5 text-accent" />
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Stay Connected
        </p>
        <Separator className="mx-auto mb-8 max-w-16 bg-accent/40" />

        <h2 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
          Get the First Chapter and Future Insights
        </h2>

        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
Occasionally I share ideas, observations, and tools on leadership,
values, and how people navigate work and life. If that sounds useful,
you’re welcome to stay connected.
</p>

        {submitted ? (
          <div className="mx-auto max-w-md rounded-lg border border-accent/30 bg-accent/10 p-6">
            <p className="font-medium text-foreground">Welcome aboard.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              You{"'"}ll receive the first chapter and future insights as the work develops.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
             <input type="hidden" name="source" value="newsletter_request" />
             <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 flex-1 border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 px-6"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
