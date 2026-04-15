import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Search,
  Sparkles,
  Scale,
  Gauge,
  ShieldAlert,
  Workflow,
} from "lucide-react"

const work = [
  {
    icon: Search,
    title: "Declared vs Operating Values",
    description:
      "Every organisation has two value systems — the ones written on the wall, and the ones that actually decide what happens.",
  },
  {
    icon: ShieldAlert,
    title: "Values Laundering",
    description:
      "Many organisations adopt values that sound admirable but never constrain behaviour when pressure rises.",
  },
  {
    icon: Scale,
    title: "Values Collisions",
    description:
      "Most conflict is not between good and bad values — but between two legitimate ones. The real question is which value wins.",
  },
  {
    icon: Workflow,
    title: "The ECHO Framework",
    description:
      "A practical map for understanding how values turn into behaviour inside people, teams, and organisations.",
  },
  {
    icon: Gauge,
    title: "The Values Integrity Model",
    description:
      "A simple diagnostic for understanding the gap between declared values and the values that actually drive behaviour.",
  },
  {
    icon: Sparkles,
    title: "When Values Become Real",
    description:
      "A value only becomes real when something must be sacrificed to honour it. Until then, it is simply an aspiration.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          The ECHO Map
        </p>
        <Separator className="mb-6 max-w-16 bg-accent/40" />

        <h2 className="mb-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
        Values don’t live on posters.  
        They echo through behaviour.
        </h2>

        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Most leaders try to fix behaviour first.
        That’s why change so often turns into conflict, defensiveness, and stalled progress.

        The work behind this book looks deeper —
        at the values actually running the system.
        </p>

        <p className="mb-14 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          It’s not linear. You loop it. You revisit it. And each pass reduces noise and increases coherence.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item) => (
            <Card
              key={item.title}
              className="border-border/60 bg-card shadow-none transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-accent/10">
                  <item.icon className="size-5 text-accent" />
                </div>
                <CardTitle className="font-serif text-lg text-card-foreground">
                  {item.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}