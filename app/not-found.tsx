import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Page Not Found — Mark Buchan MSc",
  description: "The page you're looking for doesn't exist or has moved.",
}

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        <section className="pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-base md:text-lg font-bold tracking-[0.05em] text-[#1b4b80]">
              404
            </p>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-[#1C1B18] text-balance">
              This page doesn&rsquo;t exist
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              The link you followed may be broken, or the page may have
              moved. Let&rsquo;s get you back on track.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
              >
                Back to Homepage
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[rgba(28,27,24,0.2)] bg-white px-8 text-base font-bold text-[#1C1B18] transition-colors hover:bg-[#EDE8DE]"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1C1B18]/60">
                You might be looking for
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href="/work-with-me"
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#1b4b80] hover:text-[#EDE8DE] hover:border-[#1b4b80]"
                >
                  Work with Me
                </a>
                <a
                  href="/about"
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#1b4b80] hover:text-[#EDE8DE] hover:border-[#1b4b80]"
                >
                  About
                </a>
                <a
                  href="/resources/blog"
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#1b4b80] hover:text-[#EDE8DE] hover:border-[#1b4b80]"
                >
                  Articles
                </a>
                <a
                  href="/book"
                  className="rounded-full border border-[rgba(28,27,24,0.15)] bg-white px-5 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#1b4b80] hover:text-[#EDE8DE] hover:border-[#1b4b80]"
                >
                  The Hidden Gap
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
