import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "The Illusion of Agreement: Why \"Aligned\" Teams Still Fail | Mark Buchan MSc",
  description: "Teams that vote yes in the boardroom still drift apart in execution. Why organisational values and strategy execution fall apart, and the leadership playbook that fixes it.",
  openGraph: {
    title: "The Illusion of Agreement: Why \"Aligned\" Teams Still Fail | Mark Buchan MSc",
    description: "Teams that vote yes in the boardroom still drift apart in execution. Why organisational values and strategy execution fall apart, and the leadership playbook that fixes it.",
    images: [{ url: "/images/og/og-organisational-values-and-strategy-execution.jpg", width: 1200, height: 630 }],
  },
}

export default function IllusionOfAgreementPage() {
  return (
    <>
      <Navigation />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#EDE8DE] pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <a
              href="/resources/blog"
              className="inline-flex items-center text-sm font-medium text-[#1C1B18] opacity-60 hover:opacity-100 transition-opacity mb-8"
            >
              ← Back to Articles
            </a>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1C1B18] opacity-60">
              Leadership · 7 min read
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1C1B18] text-balance mb-6">
              The Illusion of Agreement: Why &ldquo;Aligned&rdquo; Teams Still Fail (and How to Fix It)
            </h1>
            <p className="text-xl leading-relaxed text-[#1C1B18] opacity-75">
              Teams that vote yes in the boardroom still drift apart in execution. Why organisational values and strategy execution fall apart, and the leadership playbook that fixes it.
            </p>
            <p className="mt-4 text-sm text-[#1C1B18] opacity-50">
              Mark Buchan MSc · August 2026
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        {/* ARTICLE BODY */}
        <article className="py-24">
          <div className="mx-auto max-w-3xl px-6">

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Every leader has experienced the <strong className="text-[#1C1B18]">&ldquo;boardroom nod.&rdquo;</strong>
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              You project a bold new strategic initiative on the screen, for instance, &ldquo;becoming customer-centric&rdquo;. One by one, every executive around the table agrees. You leave the room feeling a surge of confidence, believing your team is fully aligned. Yet weeks later, execution stalls and behaviour drifts: the CFO is still aggressively cutting costs, the COO is prioritising rigid operational consistency, and the marketing director is chasing wild, bespoke innovations. The unified strategy lies in pieces, leaving you to wonder: <em>How did we fall apart so quickly when everyone said yes?</em>
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The answer is that what looked like alignment was actually <strong className="text-[#1C1B18]">organisational theatre</strong>. In the high-stakes environment of leadership, we constantly mistake superficial <em>agreement</em> (Decision Alignment) for deep, operational <em>alignment</em>. We treat the unanimous approval of a slide deck as a victory, completely blind to the silent, competing undeclared values driving individual behaviours under the hood.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              To bridge this &ldquo;hidden gap,&rdquo; we must understand the social psychology of false agreement, unpack the three distinct levels of alignment, and rewrite the leadership playbook to test for truth rather than comfort.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              I. The Psychological Theatre of False Agreement
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Why do highly intelligent executive teams consistently fall into the trap of false agreement? While traditional business literature often lumps collective dysfunction under the generic banner of &ldquo;groupthink,&rdquo; social psychology and values-based diagnostics reveal that false agreement is driven by three distinct mechanisms. In my book, The Hidden Gap, I explore how systemic forces like the Abilene Paradox lock teams into compliance. Here, we must go one story deeper into the social cognitive biases that trigger that silence in the first place, specifically, the False Consensus Effect and Asch Conformity.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              While the psychology explains the <em>behaviours</em> we see, analysing a team&apos;s underlying <strong className="text-[#1C1B18]">operating values</strong> explains what individuals are actually <em>protecting</em> when they choose these behaviours.
            </p>

            <figure className="my-12">
              <Image
                src="/images/blog/organisational-values-and-strategy-execution/cascade.png"
                alt="The Cascade of False Agreement: False Consensus Effect leads to Asch Conformity leads to Abilene Paradox"
                width={1685}
                height={703}
                className="w-full h-auto rounded-2xl border border-[rgba(28,27,24,0.1)]"
              />
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                The Cascade of False Agreement: False Consensus Effect leads to Asch Conformity leads to Abilene Paradox
              </figcaption>
            </figure>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              1. The False Consensus Effect
            </h3>
            <ul className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground mb-10 list-disc pl-6">
              <li><strong className="text-[#1C1B18]">The Internal Voice:</strong> <em>&ldquo;Everyone probably thinks like I do.&rdquo;</em></li>
              <li><strong className="text-[#1C1B18]">The Mechanism:</strong> This is an individual cognitive bias driven by projection rather than social pressure. Leaders naturally overestimate how many of their peers share their specific beliefs, values, or behaviours. For example, a leader might confidently assert, <em>&ldquo;Most managers would fire an employee who did that,&rdquo;</em> assuming their personal worldview is the universal standard, when in reality, perhaps only 20% would agree.</li>
              <li><strong className="text-[#1C1B18]">The Winning Undeclared Value:</strong> We project our views onto others because it psychologically validates our own identity. In the internal competition of values, the undeclared value of <strong className="text-[#1C1B18]">Certainty</strong> silently defeats the declared organisational value of <strong className="text-[#1C1B18]">Curiosity</strong>.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              2. Solomon Asch&apos;s Conformity (The Line Experiment)
            </h3>
            <ul className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground mb-10 list-disc pl-6">
              <li><strong className="text-[#1C1B18]">The Internal Voice:</strong> <em>&ldquo;I don&apos;t want to stand out.&rdquo;</em></li>
              <li><strong className="text-[#1C1B18]">The Mechanism:</strong> In Solomon Asch&apos;s classic experiments, participants conformed to a group&apos;s obviously incorrect answer about line lengths simply to avoid looking stupid or standing out. Here, <strong className="text-[#1C1B18]">the individual privately knows the group is wrong</strong>, but publicly complies anyway. It is pure compliance, not belief, the very definition of corporate theatre.</li>
              <li><strong className="text-[#1C1B18]">The Winning Undeclared Value:</strong> Executives choose compliance because, in a low-safety or highly hierarchical culture, the undeclared value of <strong className="text-[#1C1B18]">Belonging</strong> defeats the declared organisational value of <strong className="text-[#1C1B18]">Honesty</strong>.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              3. The Abilene Paradox
            </h3>
            <ul className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground mb-10 list-disc pl-6">
              <li><strong className="text-[#1C1B18]">The Internal Voice:</strong> <em>&ldquo;Nobody else wants what I want, so I&apos;ll just go along with it.&rdquo;</em></li>
              <li><strong className="text-[#1C1B18]">The Mechanism:</strong> This is the most subtle and damaging trap: a state of <strong className="text-[#1C1B18]">pluralistic ignorance</strong> where a team collectively agrees to a decision that <em>literally not a single person privately wants</em>. For example, an entire board might sign off on a £3 million digital transformation project because the CFO thinks the CEO wants it, while the CEO privately opposes it but believes the board is pushing for it. The company drives full-speed towards a destination nobody desired.</li>
              <li><strong className="text-[#1C1B18]">The Winning Undeclared Value:</strong> The engine of this paradox is the protection of peace. The undeclared value of <strong className="text-[#1C1B18]">Harmony</strong> defeats the declared organisational value of <strong className="text-[#1C1B18]">Challenge</strong>.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              The Cascade of Organisational Decay
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              In many organisations, these three traps operate as a sequential progression of decay:
            </p>
            <ol className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground mb-12 list-decimal pl-6">
              <li>It begins with <strong className="text-[#1C1B18]">False Consensus</strong>, where a few dominant voices assume their worldview is the default.</li>
              <li>This triggers <strong className="text-[#1C1B18]">Asch Conformity</strong>, as doubting team members look around, misinterpret the apparent unanimity, and stay silent to avoid standing out.</li>
              <li>The silence is misread as enthusiastic support, locking the team into the <strong className="text-[#1C1B18]">Abilene Paradox</strong>, committing to a path that absolutely nobody actually supports.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              II. Beyond the HBR View: The Three Stories of Alignment
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Most conversations about organisational values stop at the level of the slide deck. The words on the wall, not the behaviour in the room.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Contemporary management frameworks (such as Harvard Business Review&apos;s &ldquo;The False Alignment Trap&rdquo;) do an excellent job of describing the <em>symptoms</em> of false alignment. HBR notes that teams fail when they mistake superficial agreement for alignment on <strong className="text-[#1C1B18]">why</strong> they are changing, <strong className="text-[#1C1B18]">what</strong> success looks like, and <strong className="text-[#1C1B18]">how</strong> they will execute. This superficiality leads to classic operational symptoms:
            </p>
            <ul className="flex flex-col gap-3 text-lg leading-relaxed text-muted-foreground mb-6 list-disc pl-6">
              <li><strong className="text-[#1C1B18]">Paralysis:</strong> Endless discussions and debates with zero concrete decisions.</li>
              <li><strong className="text-[#1C1B18]">Hyperactivity:</strong> A flurry of uncoordinated actions that yield little actual progress.</li>
              <li><strong className="text-[#1C1B18]">Tunnel Vision:</strong> Rapid, efficient execution, but in the completely wrong direction.</li>
            </ul>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              However, while HBR successfully diagnoses the symptoms, it treats false alignment, and the strategy execution failures that follow it, primarily as a <em>procedural</em> issue. It assumes that better, more disciplined conversations and formal sign-offs will solve the problem.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              While describing these symptoms is valuable, solving them requires diagnostic precision. This is where the core of my book&apos;s framework, <strong className="text-[#1C1B18]">The Hidden Gap</strong>, provides a deeper, explanatory layer: a three-storey hierarchy of alignment. You cannot resolve a strategic conflict until you know which storey of the house your leaders are actually arguing in.
            </p>

            <figure className="my-12">
              <Image
                src="/images/blog/organisational-values-and-strategy-execution/three-levels.png"
                alt="The Three Storeys of Alignment: Decision Alignment, Meaning Alignment, and Values Alignment as the foundation"
                width={1488}
                height={1275}
                className="w-full max-w-xl mx-auto h-auto rounded-2xl border border-[rgba(28,27,24,0.1)]"
              />
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                The Three Storeys of Alignment: Decision Alignment, Meaning Alignment, and Values Alignment as the foundation
              </figcaption>
            </figure>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Upper Level: Decision Alignment (&ldquo;We all voted yes.&rdquo;)
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              The surface layer is <strong className="text-[#1C1B18]">Decision Alignment</strong>. This is the classic boardroom vote or project sign-off. It is necessary but purely procedural.
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Mid-Level: Meaning Alignment (&ldquo;We mean the same thing.&rdquo;)
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-2">
              One story down is <strong className="text-[#1C1B18]">Meaning Alignment</strong>. It means sharing a precise, operational definition of terms.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              <strong className="text-[#1C1B18]">The Failure Mode:</strong> <strong className="text-[#1C1B18]">Decision alignment without meaning alignment leads to inconsistent implementation</strong>. If a team agrees to &ldquo;prioritise the customer&rdquo; without defining what that means in practice, every department will execute their own conflicting interpretations of that goal.
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Base Level: Values Alignment (&ldquo;Our operating values are compatible.&rdquo;)
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              At the foundation is <strong className="text-[#1C1B18]">Values Alignment</strong>. It means that the fundamental, unconscious reasons driving our support for a decision are compatible. This is the base level. Everything above it is caused from here.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Consider the &ldquo;customer-centric&rdquo; initiative again. The executive team achieves Upper Level Decision Alignment, and they might even agree on a dictionary definition (Mid-Level Meaning Alignment). But look at their hidden values:
            </p>
            <ul className="flex flex-col gap-2 text-lg leading-relaxed text-muted-foreground mb-6 list-disc pl-6">
              <li><strong className="text-[#1C1B18]">CEO:</strong> Driven by <em>Growth</em></li>
              <li><strong className="text-[#1C1B18]">CFO:</strong> Driven by <em>Predictability</em> or <em>Risk Reduction</em></li>
              <li><strong className="text-[#1C1B18]">COO:</strong> Driven by <em>Efficiency</em> or <em>Consistency</em></li>
              <li><strong className="text-[#1C1B18]">HR Director:</strong> Driven by <em>Inclusion</em> or <em>Belonging</em></li>
              <li><strong className="text-[#1C1B18]">Marketing Director:</strong> Driven by <em>Innovation</em></li>
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They all sincerely support the sentence, but nobody agrees on the values driving it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-[#1C1B18]">The Failure Mode:</strong> <strong className="text-[#1C1B18]">Meaning alignment without values alignment leads to recurring conflict as soon as trade-offs appear</strong>. The moment the team must choose between an expensive, highly customised customer solution (Growth/Innovation) or a standardised, low-cost operational process (Efficiency/Predictability), the superficial alignment shatters.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              The magic of <strong className="text-[#1C1B18]">Values Alignment</strong> is that it does not require instant agreement on every choice; rather, it makes disagreement highly <strong className="text-[#1C1B18]">productive</strong> because leaders understand <em>why</em> they differ at the root.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              III. Rewriting the Leadership Playbook: From Theatre to Truth
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              To transform alignment from a theatrical ritual into a powerful operational diagnostic, leaders must integrate disciplined decision protocols with values-based discovery. Here is a four-step playbook to cross the hidden gap:
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Step 1: Treat Quick Agreement as a Warning Sign
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              If your leadership team signs off on a major strategic shift in under thirty minutes, do not celebrate. Treat quick agreement as a red flag for Asch conformity or an Abilene Paradox. Force the team to slow down and actively debate meaning and trade-offs rather than rushing to a decision.
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Step 2: Use Private, Safe Spaces
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              While public transparency is valuable, high-stakes alignment is best built in private. Encourage one-to-one, private conversations before formal board meetings. In these low-pressure, psychologically safe spaces, leaders can explore ideas, reveal uncertainty, negotiate trade-offs, and save face without the pressure of performing for a group.
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Step 3: Ask &ldquo;The Compromise Question&rdquo;
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              When asking an executive team to sign off on a strategic path, banish the generic question: <em>&ldquo;Do we all agree?&rdquo;</em>. Instead, ask:
            </p>
            <div className="border-l-4 border-[#1b4b80] pl-6 my-10">
              <p className="text-xl font-semibold text-[#1C1B18] leading-relaxed">
                &ldquo;Which of your undeclared values did you have to compromise to support this decision?&rdquo;
              </p>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              This simple question is a powerful diagnostic. It forces leaders to map their real-time choices directly onto the{" "}
              <Link href="/values-integrity-model" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                Values Integrity Model (VIM)
              </Link>
              , instantly revealing whether a declared strategy is operating as a core driver or merely running as expensive boardroom theatre. If you can map where these compromises sit before you leave the room, you can predict exactly where strategic drift will occur.
            </p>

            <h3 className="text-xl font-bold text-[#1C1B18] mt-10 mb-4">
              Step 4: Align Incentives, Not Just Slide Decks
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              Unified messaging is a corporate fantasy if operating values and incentives remain in conflict. <strong className="text-[#1C1B18]">People do not follow PowerPoint; they follow incentives and their operating values</strong>. If the CFO&apos;s bonus is tied to cost reduction, the COO&apos;s to predictability, and the CEO&apos;s to growth, the organisation will receive three conflicting operational messages within weeks of the &ldquo;aligned&rdquo; presentation. Leaders must align the structural reward systems with the values required for the strategy, or the strategy will fail.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              Conclusion: Stop Rehearsing, Start Executing
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              True organisational alignment is not about achieving absolute harmony or eliminating dissent. It is about bringing the &ldquo;hidden gap&rdquo; of operating values out of the shadows and into productive debate.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-12">
              The next time you gather your leadership team to roll out a strategy, stop running the script of agreement. Stop asking if they agree. Ask them what they are compromising to say yes. That is the difference between performing alignment theatre and building a team that actually executes.
            </p>

            <h2 className="text-2xl font-bold text-[#1C1B18] mt-12 mb-6">
              References
            </h2>
            <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground mb-6 list-disc pl-6">
              <li>
                Harvard Business Review,{" "}
                <a href="https://hbr.org/2026/07/the-false-alignment-trap" target="_blank" rel="noopener noreferrer" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                  &ldquo;The False Alignment Trap&rdquo;
                </a>
                , July–August 2026.
              </li>
              <li>
                Jerry B. Harvey,{" "}
                <a href="https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Dynamics/Harvey_Abilene_Paradox.pdf" target="_blank" rel="noopener noreferrer" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                  &ldquo;The Abilene Paradox: The Management of Agreement&rdquo;
                </a>
                , Organisational Dynamics, 1974.
              </li>
              <li>
                Saul McLeod,{" "}
                <a href="https://www.simplypsychology.org/asch-conformity.html" target="_blank" rel="noopener noreferrer" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                  &ldquo;Asch Conformity Line Experiment&rdquo;
                </a>
                , Simply Psychology.
              </li>
              <li>
                Mark Buchan MSc,{" "}
                <a href="https://markbuchan.co.uk/book" target="_blank" rel="noopener noreferrer" className="text-[#1b4b80] font-semibold underline decoration-[rgba(27,75,128,0.35)] hover:decoration-[#1b4b80] hover:text-[#1C1B18] transition-colors">
                  <em>The Hidden Gap: Solving the Human Alignment Problem</em>
                </a>
                , 2026.
              </li>
            </ul>

          </div>
        </article>

        {/* CTA */}
        <section className="bg-[#1b4b80] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-[#EDE8DE] mb-6">
              Book a Diagnostic Conversation
            </h2>
            <p className="text-lg leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              A focused 30-minute conversation to locate where the gap is sitting in your organisation — and whether a structured intervention is the right response.
            </p>
            <a
              href="https://calendly.com/thehumanalignmentco/diagnostic-conversation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#EDE8DE] px-8 py-4 text-[#1C1B18] text-lg font-semibold hover:bg-[#1C1B18] hover:text-[#EDE8DE] transition-colors"
            >
              Book Yours →
            </a>
            <p className="text-sm leading-relaxed text-white opacity-65 mb-10 max-w-xl mx-auto">
              You will be taken to Calendly to book your session
            </p>
          </div>
        </section>

        {/* RELATED */}
        <div className="h-px w-full bg-[rgba(27,75,128,0.25)]" />

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="text-xl font-bold text-[#1C1B18] mb-8">Related</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/values-integrity-model"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(28,27,24,0.15)] p-6 hover:border-[#1b4b80] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Framework</p>
                <h4 className="font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  What Is the Values Integrity Model (VIM)? →
                </h4>
                <p className="text-sm text-muted-foreground">The framework behind this article, explained properly.</p>
              </Link>
              <a
                href="/the-hidden-gap-diagnostic"
                className="flex flex-col gap-2 rounded-xl border border-[rgba(28,27,24,0.15)] p-6 hover:border-[#1b4b80] transition-colors group"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Free tool</p>
                <h4 className="font-bold text-[#1C1B18] group-hover:text-[#1b4b80] transition-colors">
                  The Hidden Gap Diagnostic →
                </h4>
                <p className="text-sm text-muted-foreground">Four minutes. Locate where your values actually sit.</p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
