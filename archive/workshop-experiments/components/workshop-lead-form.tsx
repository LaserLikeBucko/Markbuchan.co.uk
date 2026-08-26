"use client"

import { useState, type FormEvent } from "react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoqpqej"

interface WorkshopLeadFormProps {
  source: string
  buttonText: string
}

export function WorkshopLeadForm({ source, buttonText }: WorkshopLeadFormProps) {
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
      <div className="mt-10 max-w-2xl rounded-md border border-stone-700 bg-stone-800 p-6">
        <p className="text-lg font-semibold text-white">
          You&rsquo;re on the list
        </p>
        <p className="mt-2 text-sm text-stone-400">
          Thanks — I&rsquo;ll be in touch with updates.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 max-w-2xl">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
        required
      />

      <input type="hidden" name="source" value={source} />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
        required
      />

      <textarea
        name="message"
        placeholder="Organisation / brief note"
        className="min-h-[140px] rounded-md border border-stone-700 bg-stone-800 p-3 text-white placeholder:text-stone-400"
      />

      {error && (
        <p className="text-sm text-red-400">
          Something went wrong sending that. Please try again or email{" "}
          <a href="mailto:iam@markbuchan.co.uk" className="underline">
            iam@markbuchan.co.uk
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex w-fit items-center rounded-md bg-amber-300 px-6 py-3 text-[#111110] hover:bg-amber-200 disabled:opacity-60"
      >
        {submitting ? "Sending…" : buttonText}
      </button>

      <p className="text-sm text-stone-400 mt-2">
        No spam. Just updates on the first workshop release.
      </p>
    </form>
  )
}
