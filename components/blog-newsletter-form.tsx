"use client"

import { useState, type FormEvent } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnddyz"

export function BlogNewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <p className="max-w-md mx-auto text-base font-semibold text-[#1C1B18]">
        Thanks — you&rsquo;re on the list.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input type="hidden" name="source" value="blog-index" />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="flex-1 h-12 rounded-md border border-[rgba(28,27,24,0.2)] bg-white px-4 text-[#1C1B18] placeholder:text-[#1C1B18]/40 focus:outline-none focus:border-[#1b4b80]"
      />
      <button
        type="submit"
        disabled={submitting}
        className="h-12 px-6 rounded-md bg-[#1b4b80] text-[#EDE8DE] font-bold hover:bg-[#163C66] transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Keep me posted"}
      </button>
      {error && (
        <p className="text-sm text-[#ff3131] sm:basis-full">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
