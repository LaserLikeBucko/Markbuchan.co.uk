"use client"

import { useEffect, useRef, useState } from "react"

interface Step {
  number: string
  title: string
  body: string
}

export function AnimatedSteps({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let interval: ReturnType<typeof setInterval> | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let tick = 0
          setActiveIndex(0)
          interval = setInterval(() => {
            tick += 1
            if (tick >= steps.length) {
              setActiveIndex(null)
              if (interval) clearInterval(interval)
              return
            }
            setActiveIndex(tick)
          }, 1800)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      if (interval) clearInterval(interval)
    }
  }, [steps.length])

  return (
    <div ref={containerRef} className="mt-16 flex flex-col gap-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-6">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1b4b80] text-lg font-semibold text-[#EDE8DE] ${
              activeIndex === index ? "step-highlight" : ""
            }`}
          >
            {step.number}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1C1B18]">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#1C1B18]/75">
              {step.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
