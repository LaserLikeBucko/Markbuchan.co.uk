import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const DIAGNOSTIC_CALL_URL =
  "https://calendly.com/thehumanalignmentco/diagnostic-conversation"

interface HoldingPageProps {
  eyebrow: string
  title: string
  body: string
  backHref: string
  backLabel: string
}

export function HoldingPage({
  eyebrow,
  title,
  body,
  backHref,
  backLabel,
}: HoldingPageProps) {
  return (
    <>
      <Navigation />

      <main className="bg-[#EDE8DE]">
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#1C1B18]">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1C1B18]/75">
              {body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1C1B18]/60">
              This page is being built out — full details coming soon.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={DIAGNOSTIC_CALL_URL}
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#1b4b80] px-8 text-base font-bold text-[#EDE8DE] transition-colors hover:bg-[#163C66]"
              >
                Book a Diagnostic Call
              </a>
              <a
                href={backHref}
                className="inline-flex h-12 items-center justify-center rounded-md border border-[rgba(28,27,24,0.2)] px-8 text-base font-medium text-[#1C1B18] transition-colors hover:bg-[#1C1B18] hover:text-[#EDE8DE]"
              >
                {backLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
