import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          The Author
        </p>
        <Separator className="mb-12 max-w-16 bg-accent/40" />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Portrait */}
          <div className="relative w-full max-w-sm shrink-0 overflow-hidden rounded-lg aspect-[3/4] lg:max-w-md">            
          <Image
              src="/images/mb.jpg"
              alt="Mark Buchan — author, coach, and visionary leader"
              width={480}
              height={600}
              className="h-full w-full object-cover object-[20%_center]"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
              About the Author
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
Mark Buchan works with leaders and organisations navigating the messy realities of communication, collaboration, and change. Over decades of consulting, coaching, and observing how teams actually operate under pressure, one pattern kept appearing.
</p>

<p className="text-lg leading-relaxed text-muted-foreground">
Most organisational problems are treated as behaviour problems. In reality, behaviour is usually the surface signal of something deeper — the values currently running the system.
</p>

<p className="text-lg leading-relaxed text-muted-foreground">
His latest book <em>The Hidden Gap</em> explores the mechanics of values in human systems: why people clash, why teams fracture, and why so many well-intentioned change initiatives quietly stall.
</p>
<p className="text-lg leading-relaxed text-muted-foreground">
Because behaviour is rarely the real problem; It’s the evidence that something is off.
</p>
          </div>
        </div>
      </div>
    </section>
  )
}
