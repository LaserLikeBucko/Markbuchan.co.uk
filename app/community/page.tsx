import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Community — From Our Trenches | Mark Buchan MSc",
  description: "A community for leaders and professionals navigating the gap between what organisations say they value and what actually drives behaviour. Join From Our Trenches on Substack.",
}

export default function CommunityPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#111110] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              Community
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#ffff00] text-balance mb-6">
              From Our Trenches
            </h1>
            <p className="text-xl leading-relaxed text-white opacity-75 max-w-2xl mx-auto">
              For the people who already know what's wrong — but can't say it out loud at work.
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* WHAT IT IS */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              What this is
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-8">
              Most organisations have two sets of values.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The ones on the wall. And the ones that actually run the show.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Most people in those organisations know exactly which set is really 
              driving behaviour. They see it every day. They feel it. But the cost 
              of saying it out loud — in a meeting, on LinkedIn, to a manager — 
              is too high.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From Our Trenches exists for those people. A space to say the thing 
              you can't say at work. Alongside others who get it.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60 text-center">
              Who it's for
            </p>
            <Separator className="mx-auto mb-12 max-w-16 bg-[#111110]/40" />
            <div className="grid gap-8 md:grid-cols-3">

              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8">
                <h3 className="text-xl font-bold text-[#111110]">
                  The leader who senses something is wrong
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You can't quite name it. The strategy looks right. The team 
                  seems capable. But something keeps not working. You've tried 
                  harder. You've tried differently. The gap keeps reopening.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8">
                <h3 className="text-xl font-bold text-[#111110]">
                  The person who knows exactly what's wrong
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You see it clearly. The underground values running the show. 
                  The theatre on the wall. The gap between them. You just can't 
                  say it out loud without it costing you something real.
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border-2 border-[#111110] bg-white p-8">
                <h3 className="text-xl font-bold text-[#111110]">
                  The coach or practitioner doing this work
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You work with leaders navigating exactly this territory. 
                  You're looking for a community of people doing the same 
                  honest work — and tools worth putting in front of clients.
                </p>
              </div>

            </div>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* JOIN */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              Join us
            </p>
            <Separator className="mx-auto mb-8 max-w-16 bg-[#ffff00]/40" />
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              The conversation is already happening.
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-4 max-w-xl mx-auto">
              From Our Trenches lives on Substack. Free to join. 
              No spam. Just honest conversation about the gap between 
              declared values and operating reality.
            </p>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              Say the thing you can't say at work. You might be surprised 
              how many people are already thinking the same thing.
            </p>
            <a
              href="https://thehumanalignmentco.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Join From Our Trenches →
            </a>
            <p className="mt-6 text-sm text-white opacity-30">
              Free to join. No spam. Unsubscribe any time.
            </p>
          </div>
        </section>

        {/* BOOK CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#111110] mb-4">
              Want to go deeper?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The Hidden Gap names the problem, maps the territory, and gives 
              you the tools to close the distance. Available 19th June 2026.
            </p>
            <a
              href="/pre-order"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] hover:text-white transition-colors"
            >
              Pre-Order The Book →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}