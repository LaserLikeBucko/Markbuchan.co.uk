"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ContactFormFields() {
  const searchParams = useSearchParams()
  const subject = searchParams.get("subject") ?? ""

  return (
    <form
      action="https://formspree.io/f/mbdnerkw"
      method="POST"
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

      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
      >
        Send Message
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
