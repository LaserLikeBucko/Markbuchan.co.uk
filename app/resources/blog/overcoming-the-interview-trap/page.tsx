import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Overcoming The Interview Trap - Why I Don't Do Interviews Anymore | Mark Buchan MSc",
  description: "Why exploratory chats become consulting therapy — and what I do instead. On diagnostic conversations, the interview trap, and how the first meeting sets the tone for everything that follows.",
openGraph: {
  title: "Why I Don't Do Interviews Anymore | Mark Buchan MSc",
  description: "The interview trap — why exploratory chats become consulting therapy, and what I do instead.",
  images: [{ url: "/images/og/og-interview-trap.jpg", width: 1920, height: 1080 }],
},
}

export default function InterviewTrapPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* ARTICLE HERO */}
        <section className="bg-[#ffff00] pt-32 pb-20 border-b-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <a
              href="/resources"
              className="inline-flex items-center text-sm font-medium text-[#111110] opacity-60 hover:opacity-100 transition-opacity mb-8"
            >
              ← Back to Resources
            </a>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#111110] opacity-60">
              Leadership · 5 min read
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111110] text-balance">
              Overcoming The Interview Trap - Why I Don't Do Interviews Anymore ...
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#111110] opacity-75">
              ... and what I do instead.
            </p>
            <p className="mt-4 text-sm text-[#111110] opacity-50">
              Mark Buchan MSc · May 2026
            </p>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl leading-relaxed text-[#111110] font-medium mb-8">
                I stopped doing selection interviews about two years ago, when I finally realised what was actually happening in them. This is what I now call the “Interview Trap”.

              </p>

              <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
                What is the Interview Trap?
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Interview Trap is a selection process where a potential client invites a consultant into an exploratory conversation, but in practice uses that conversation to access thinking, insight, and advice before any formal engagement exists.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
               It would often look like this. 
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                A potential client would ask me for an exploratory chat. This was reasonable enough. I would arrive genuinely interested in their situation. They would describe their problem — such as teams pulling in different directions, change initiatives stalling, communication breaking down in ways nobody can quite explain. I would listen attentively. I would ask some good questions. I would ask some better ones. I would start to understand the problem in their organisation. And then — because I'm a professional who cares about the client — I would offer them my insights.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                An hour later they would thank me warmly and say they would be in touch...
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Sometimes they would contact me. Often though they wouldn’t. After a few rounds of unanswered calls, the engagement never materialised. I would look to see what I could have improved, I would learn some lessons and start the next conversation.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The leader would have received some of my thinking, often drawn from years of experience. I would receive a polite email suggesting a follow-up that rarely materialised.  
              </p>

              <div className="border-l-4 border-[#ff3131] pl-6 my-10">
                <p className="text-xl font-semibold text-[#111110] leading-relaxed">
                  And the real issue — whatever prompted the conversation in the first place — would remain unchanged, even if it had been named. That is what free consulting looks like!
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
                The deeper problem
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The interview trap misaligned the relationship before it had even begun. An interview implies an applicant and an employer — someone trying to win a role rather than someone being engaged to solve a problem.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                In reality, the conversation that needed to happen is not "do I like this person?" It was "what is actually causing this dysfunction — and is this the right person to help us address it?"
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Those are completely different conversations. And they require a completely different frame.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                There was also what I now recognise as the Black Ball Problem. After four rounds of interviews across the whole leadership team — each one a polite exploration, each one an opportunity to give away more free thinking — one person would exercise a veto and the potential engagement would disappear. Weeks in the Interview Trap, and the only output would be a slightly better understanding of their problems — which they now had too — for free.
              </p>
              <div className="border-l-8 border-[#ffff00] pl-12 my-10 italic opacity-80 bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
                  From the Trenches: The Black Ball Problem
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A leader I had successfully delivered a major transformation for previously asked me to pitch for a new engagement. After positive early conversations with the CTO, I met with his full leadership team. The discussion was open and lively, with differing views across the department heads. When the CTO asked for my perspective, I shared it directly. There was clear disagreement from one senior stakeholder, which I invited into the open. We had a frank discussion.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Later, I learned that concerns had been raised with the CEO about both my diagnosis and proposed collaborative approach. The engagement was ultimately vetoed. One person’s dissent was enough.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Compare that with a previous engagement for a different leader in a different organisation. That leader trusted her own judgment, made a fast decision over lunch, shook hands, and we delivered strong results together. No committee. No veto. Just clarity and momentum.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  The difference was not my capability. It was the decision-making culture.
                </p>
               </div>

              <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
                How I Work Differently Now
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I now propose one of two things when a leader asks for my help.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The first is a <strong className="text-[#111110]">Working Session.</strong>
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Rather than talking about the problem, we spend sixty minutes actually working on it. The leader sees how I navigate complexity in real time. I see how the organisation actually thinks and communicates. Both of us learn something useful — and both of us are invested form the start.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The second is a <strong className="text-[#111110]">Diagnostic Conversation</strong>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                This is a focused exchange designed to locate where leadership or operational friction is limiting performance. Not a vague exploration of symptoms, but a structured conversation that begins to identify the root cause — the gap between what the organisation declares it values and what is actually driving behaviour.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                That conversation has a purpose. It has a direction. And it treats the leader's time — and mine — as something to be respected.
              </p>

              <h2 className="text-2xl font-bold text-[#111110] mt-12 mb-6">
                Why this matters for leaders
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Leaders in high-pressure organisations don’t need another exploratory conversation. They need reduced friction, sharper decisions, and a leadership team that actually pulls in the same direction.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The very first conversation should set the tone for the entire engagement: structured, honest, and outcome-focused. Not an audition. Not free consulting. Not an Interview Trap. A real engagement.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                If your organisation is stuck in transformation fatigue, leadership misalignment, or that nagging feeling that something is fundamentally off — stop scheduling more meetings.
              </p>

              <p className="text-xl text-center font-semibold text-[#111110] mt-8 mb-6">
                It is a diagnostic conversation.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                It’s the difference between hoping things improve and actively making them improve. One protects your time and delivers immediate clarity. The other wastes it.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Choose accordingly.
              </p>

            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-[#111110] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#ffff00] mb-6">
              Book a Diagnostic Conversation
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              A focused 30-minute conversation to locate where the gap is sitting in your organisation. Together we will explore what the most appropriate response would be to close that gap. 
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              className="inline-flex items-center rounded-md bg-[#ff3131] px-8 py-4 text-white text-lg font-semibold hover:bg-[#ffff00] hover:text-[#111110] transition-colors"
            >
              Book Yours Now
            </a>
            <p className="text-sm leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              You will be taken to Calendly to book your session 
            </p>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 border-t-4 border-dashed border-[#111110]">
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="text-xl font-bold text-[#111110] mb-8">Related</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <a
                href="/leadership-alignment-diagnostic"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(17,17,16,0.15)] p-6 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</p>
                <h4 className="font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">The Human Alignment Diagnostic →</h4>
                <p className="text-sm text-muted-foreground">The two-week senior engagement that locates your organisation's hidden gap with precision.</p>
              </a>
              <a
                href="/diagnostic"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(17,17,16,0.15)] p-6 hover:border-[#ff3131] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Free tool</p>
                <h4 className="font-bold text-[#111110] group-hover:text-[#ff3131] transition-colors">The Hidden Gap Diagnostic →</h4>
                <p className="text-sm text-muted-foreground">Four minutes. Locate where your values actually sit using the Values Integrity Model.</p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
