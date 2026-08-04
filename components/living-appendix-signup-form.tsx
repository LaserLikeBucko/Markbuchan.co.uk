"use client"

import { useState, type FormEvent } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnddyz"

export function LivingAppendixSignupForm() {
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
      <div className="max-w-md mx-auto">
        <p className="text-lg font-semibold text-[#ffff00]">
          You&rsquo;re on the list
        </p>
        <p className="mt-2 text-sm text-white opacity-65">
          Thanks — I&rsquo;ll let you know as soon as the community opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      <input type="hidden" name="source" value="living-appendix-community" />
      <input
        type="text"
        name="name"
        placeholder="Your first name"
        required
        className="h-12 rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffff00]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="h-12 rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffff00]"
      />
      <button
        type="submit"
        disabled={submitting}
        className="h-12 rounded-md bg-[#ffff00] text-[#111110] font-semibold hover:bg-[#ff3131] hover:text-white transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Keep me informed →"}
      </button>
      {error && (
        <p className="text-xs text-[#ff3131] mt-1">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="text-xs text-white opacity-30 mt-2">No spam. Unsubscribe any time.</p>
    </form>
  )
}
