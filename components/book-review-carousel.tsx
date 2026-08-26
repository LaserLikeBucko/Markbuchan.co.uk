"use client"

import { useState, useEffect } from "react"

export interface BookReview {
  quote: string
  name: string
  title: string
}

export function ReviewCarousel({ reviews }: { reviews: BookReview[] }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const r = reviews[current]

  return (
    <div className="relative">
      <div className="rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-10 shadow-sm flex flex-col gap-6 min-h-[220px]">
        <p className="text-[#1C1B18] leading-relaxed text-xl flex-1">"{r.quote}"</p>
        <div>
          <p className="font-bold text-[#1C1B18]">{r.name}</p>
          <p className="text-sm text-[#1C1B18] opacity-60">{r.title}</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border-2 border-[#1b4b80] transition-all ${
              i === current ? "bg-[#1C1B18]" : "bg-transparent"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
