import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Values Misalignment Support for HR Leaders | Mark Buchan MSc",
  description: "Give HR the language and evidence to help leadership finally see culture as the business problem it actually is. The Human Alignment Diagnostic for HR teams.",
openGraph: {
  title: "Values Misalignment Support for HR Leaders | Mark Buchan MSc",
  description: "Give HR the language and evidence to make leadership finally see culture as the business problem it actually is.",
  images: [{ url: "/images/og/og-hr-values-alignment.png", width: 1920, height: 1080 }],
},
}

export default function ForHRLeadersPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              For HR Leaders
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#111110] text-balance">
              You already have the data.<br />Now get the language.
            </h1>
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-[#111110] opacity-75 max-w-2xl mx-auto">
              HR has been naming the culture problem for years. The Human Alignment Diagnostic gives you the framework to help leadership finally see it as the business problem it actually is.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] transition-colors"
            >
              Start the Conversation →
            </a>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* THE FRUSTRATION */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The frustration HR knows well
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] text-balance mb-8">
              Only 18% of employees feel their organisation's stated values match the reality of its culture.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                You already know this. You see it in the engagement scores, the exit interviews, the quiet resignation that doesn't show up in any metric until someone has already left.
              </p>
              <p>
                Leadership says collaboration. The reward system says individual heroics. Leadership says psychological safety. The culture says don't make us uncomfortable.
              </p>
              <p>
                You've raised it. You've presented the data. You've commissioned the surveys. And yet the same patterns keep returning — because the intervention keeps targeting the symptoms rather than the source.
              </p>
              <p className="text-[#111110] font-semibold text-xl border-l-4 border-[#ff3131] pl-6">
                The source is a gap between the values the organisation declares and the values that are actually running the show. And it won't close until leadership can see it precisely enough to act on it.
              </p>
            </div>
          </div>
        </section>

        {/* THE STATS */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              The cost of misalignment
            </p>
            <h2 className="text-3xl font-bold text-[#ffff00] mb-16">
              This is not a soft problem. It has hard consequences.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-3 border-l-4 border-[#ff3131] pl-6">
                <p className="text-4xl font-bold text-[#ffff00]">18%</p>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  of employees feel their organisation's stated values are strongly aligned with the reality of its culture. The other 82% are navigating the gap every day.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-l-4 border-[#ff3131] pl-6">
                <p className="text-4xl font-bold text-[#ffff00]">↑ Turnover</p>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  Employees who experience a gap between declared values and lived culture are significantly more likely to disengage and leave — often without naming the real reason.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-l-4 border-[#ff3131] pl-6">
                <p className="text-4xl font-bold text-[#ffff00]">↓ Performance</p>
                <p className="text-sm leading-relaxed text-white opacity-60">
                  Misalignment creates a hidden tax — energy spent navigating politics, managing around unclear values, having the same conversations repeatedly. It compounds silently until it doesn't.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO FOR HR */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              What this gives HR
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#111110] mb-10">
              The evidence base and the language to make the business case leadership will finally act on.
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] flex items-center justify-center text-sm font-bold text-[#111110]">1</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#111110]">Precise diagnosis, not vague survey data</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Values Integrity Model locates exactly where the gap sits — which values are declared but not lived, which are operating underground without accountability, which conflicts are driving the behaviour nobody can explain. Not a heatmap. A precise address.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] flex items-center justify-center text-sm font-bold text-[#111110]">2</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#111110]">A Situation Appraisal in business language</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The diagnostic produces a report that translates the culture problem into cost — in measurable terms leadership understands. Not engagement scores. Business impact. The conversation HR has been trying to have, in the language the boardroom responds to.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] flex items-center justify-center text-sm font-bold text-[#111110]">3</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#111110]">Leadership owns the solution</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The diagnostic closes with a co-design session — leadership builds the response with us rather than receiving it from us. Which means HR isn't pushing a solution uphill. Leadership is pulling it forward. That is the only way culture change actually happens.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffff00] border-2 border-[#111110] flex items-center justify-center text-sm font-bold text-[#111110]">4</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#111110]">HR's credibility as a strategic partner</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When HR brings an external diagnostician with a rigorous methodology and a clear business case, the conversation shifts. You stop being the department that raises soft issues. You become the function that identified a structural problem before it became a crisis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SYMPTOMS SECTION */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Does this sound familiar?
            </p>
            <h2 className="text-3xl font-bold text-[#111110] mb-12">
              The symptoms HR is managing every week.
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Leadership models behaviour that contradicts the values on the wall",
                "High performers leave without giving the real reason",
                "Engagement initiatives launch with energy and quietly disappear",
                "The same dysfunctional patterns persist despite repeated interventions",
                "New hires leave once the real culture becomes apparent",
                "Collaboration is the stated value — silos are the operating reality",
                "Bad news travels slowly upward, good news travels fast",
                "People know what to say in performance reviews",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white rounded-lg p-4 border border-[rgba(17,17,16,0.1)]">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#ff3131] flex items-center justify-center text-white text-xs">✓</span>
                  <p className="text-sm leading-relaxed text-[#111110] opacity-80">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg font-semibold text-[#111110]">
              These are not behaviour problems. They are values problems. And they have a precise address.
            </p>
          </div>
        </section>

        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        {/* HOW IT WORKS - BRIEF */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              The process
            </p>
            <Separator className="mb-12 max-w-16 bg-accent/40" />
            <h2 className="text-3xl font-bold text-[#111110] mb-10">
              Two weeks. One honest picture. A co-designed way forward.
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-[#111110]">Week one</span> — we gain access to the whole organisation. Senior leadership, middle management, frontline teams. Semi-structured qualitative interviews using the Values Integrity Model surface what is actually driving behaviour — not the official version.
              </p>
              <p>
                <span className="font-semibold text-[#111110]">Week two</span> — we produce a Situation Appraisal. A clear, honest account of what is happening, why, and what it is costing — framed in business terms against the organisation's budget and strategic priorities.
              </p>
              <p>
                <span className="font-semibold text-[#111110]">The co-design session</span> — leadership builds the response with us. Not receives it. The solution is theirs. Which is the only reason it will stick.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT MARK */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffff00] opacity-60">
              Who you are working with
            </p>
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">Mark Buchan MSc</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-white opacity-70">
              <p>
                Mark has spent more than twenty years working inside organisations where the gap between declared and operating values was quietly doing its damage. As a consultant, coach, and facilitator he has worked at every level — from frontline teams to executive leadership — surfacing what is actually driving behaviour and creating the conditions for honest, lasting change.
              </p>
              <p>
                He is the author of <em>The Hidden Gap: Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture</em> — the most complete account of the Values Integrity Model, ECHO framework, and the practical tools for closing the gap between declared values and operating reality.
              </p>
              <p className="text-[#ffff00] opacity-100 font-semibold">
                He is not a soft skills trainer. He is an organisational diagnostician — and he will tell your leadership what HR has been trying to tell them for years.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <hr className="w-full h-px bg-white" style={{boxShadow: '0 0 6px 1px rgba(255,255,255,0.8), 0 0 16px 4px rgba(255,49,49,0.5), 0 0 32px 8px rgba(255,49,49,0.2)'}} />

        <section id="contact" className="bg-[#ffff00] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111110] mb-6">
              Ready to make the business case?
            </h2>
            <p className="text-lg leading-relaxed text-[#111110] opacity-70 mb-4 max-w-xl mx-auto">
              Start with a free 30-minute conversation. Bring the problem as you see it. We will tell you honestly whether the Human Alignment Diagnostic is the right intervention — and if it isn't, we will say so.
            </p>
            <p className="text-lg leading-relaxed text-[#111110] opacity-70 mb-10 max-w-xl mx-auto">
              No pitch. No proposal. Just an honest conversation.
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#111110] px-8 py-4 text-[#ffff00] text-lg font-semibold hover:bg-[#ff3131] hover:text-white transition-colors"
            >
              Book Your Diagnostic Conversation →
            </a>
            <p className="text-sm leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              You will be taken to Calendly to book your session 
            </p>
            <p className="mt-6 text-sm text-[#111110] opacity-40">
              Or email iam@markbuchan.co.uk directly.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}