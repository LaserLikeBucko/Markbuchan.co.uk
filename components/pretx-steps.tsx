"use client"

import { useEffect, useRef, useState } from "react"

interface Step {
  title: string
  desc: string
}

export function PretxSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-6">
      <style>{`
        @keyframes pretxStepGlow {
          0%, 24%, 100% {
            box-shadow: 0 0 0 0 rgba(27, 75, 128, 0);
            transform: scale(1);
          }
          6%, 16% {
            box-shadow: 0 0 0 4px rgba(27, 75, 128, 0.18), 0 0 26px 8px rgba(27, 75, 128, 0.65);
            transform: scale(1.12);
          }
        }
        .pretx-step-glow {
          animation: pretxStepGlow 4s ease-in-out 2;
          animation-play-state: paused;
        }
        .pretx-step-glow.is-animating {
          animation-play-state: running;
        }
      `}</style>

      {steps.map((step, i) => (
        <div
          key={step.title}
          className="flex gap-6 items-start bg-white rounded-2xl border border-[rgba(28,27,24,0.1)] p-6 shadow-sm"
        >
          <span
            className={`pretx-step-glow${animate ? " is-animating" : ""} flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1b4b80] text-[#EDE8DE] font-bold text-sm`}
            style={{ animationDelay: `${i * 0.55}s` }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="font-bold text-[#1C1B18] mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
