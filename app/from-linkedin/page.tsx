"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Footer } from "@/components/footer"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function FromLinkedInPage() {
  const router = useRouter()

  useEffect(() => {
    window.gtag?.("event", "linkedin_landing_view")
  }, [])

  function handleDownloadClick() {
    window.gtag?.("event", "linkedin_download_click")

    const link = document.createElement("a")
    link.href = "/downloads/the-hidden-gap-free-chapter-linkedin.pdf"
    link.download = "the-hidden-gap-free-chapter-linkedin.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    router.push("/thanks-linkedin")
  }

  return (
    <>
      <main className="bg-[#111110]">

        {/* HERO */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-5xl px-6 grid gap-14 md:grid-cols-[0.9fr_1.1fr] items-center">

            {/* BOOK COVER */}
            <div className="mx-auto w-full max-w-[280px] md:max-w-[340px]">
              <div className="overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-2 ring-white/10">
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

            {/* CONTENT */}
            <div className="text-center md:text-left">
              <h1 className="leading-tight text-[#ffff00] text-balance mb-6">
                <span className="block text-4xl md:text-6xl font-bold">
                  Thanks for connecting.
                </span>
                <span className="block text-2xl md:text-4xl font-bold mt-2">
                  Here&apos;s Chapter 1 for free.
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-white opacity-75 mb-14">
                Just an honest look at the gap between what organisations say
                and what they actually do.
              </p>

              <button
                onClick={handleDownloadClick}
                className="inline-flex items-center justify-center rounded-md bg-[#ff3131] px-10 py-6 text-white text-2xl font-bold hover:bg-[#ffff00] hover:text-[#111110] transition-colors shadow-[0_0_50px_rgba(255,49,49,0.45)]"
              >
                Download Chapter 1 (PDF) →
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
