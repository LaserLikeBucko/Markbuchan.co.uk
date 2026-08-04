"use client"

import { Suspense, useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdnerkw"

function ContactFormFields() {
  const searchParams = useSearchParams()
  const subject = searchParams.get("subject") ?? ""

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)

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
      <div className="mt-10 rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-10 text-center">
        <h3 className="text-xl font-semibold text-[#1C1B18]">
          Thanks — your message is on its way
        </h3>
        <p className="mt-3 text-base leading-relaxed text-[#1C1B18]/75">
          I&rsquo;ll read what you&rsquo;ve shared and get back to you to
          discuss the most appropriate next step.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-[#1C1B18]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="organisation"
          className="text-sm font-medium text-[#1C1B18]"
        >
          Organisation
        </label>
        <input
          type="text"
          id="organisation"
          name="organisation"
          className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-[#1C1B18]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="challenge"
          className="text-sm font-medium text-[#1C1B18]"
        >
          Brief description of your challenge or suggestion
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={5}
          required
          defaultValue={subject}
          className="mt-2 w-full rounded-md border border-[rgba(28,27,24,0.2)] px-4 py-3 text-base text-[#1C1B18] focus:border-[#1b4b80] focus:outline-none"
        />
      </div>

      {error && (
        <p className="text-sm text-[#ff3131]">
          Something went wrong sending your message. Please try again or
          email{" "}
          <a href="mailto:iam@markbuchan.co.uk" className="underline">
            iam@markbuchan.co.uk
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}

export function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormFields />
    </Suspense>
  )
}
