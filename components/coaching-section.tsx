import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Clarify the values actually shaping your decisions",
  "Resolve hidden tensions between competing priorities",
  "Apply the ECHO framework to real leadership challenges",
  "Improve decision-making under pressure",
  "Create alignment between intention, behaviour, and outcomes",
]

export function CoachingSection() {
  return (
    <section id="coaching" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left content */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Premium Coaching
            </p>
            <Separator className="max-w-16 bg-accent/40" />

            <h2 className="font-serif text-4xl font-bold leading-tight text-primary-foreground text-balance md:text-5xl">
              1:1 Coaching for Leaders Navigating Real-World Decisions
            </h2>

            <p className="text-lg leading-relaxed text-primary-foreground/70">
              Mark works with leaders who are facing complex decisions, organisational friction,
              or moments where competing values make the path forward unclear. Coaching sessions
              focus on surfacing what is actually driving behaviour and applying the ECHO
              framework to bring clarity, alignment, and momentum.
            </p>
          </div>

          {/* Right benefits */}
          <div className="flex flex-1 flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="size-3 text-accent" />
                  </div>
                  <span className="text-base leading-relaxed text-primary-foreground/80">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-4 w-fit bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
            >
              <a href="#newsletter">
                Apply for Coaching
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
