"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function Underline({ children }: { children: ReactNode }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [])

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={spanRef} className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 -bottom-1 h-[0.3em] w-full -rotate-1"
      >
        <path
          ref={pathRef}
          d="M2 8 C 30 3, 70 10, 118 5"
          fill="none"
          stroke="#F2C230"
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray: pathLength || 1,
            strokeDashoffset: visible ? 0 : pathLength || 1,
            transition: pathLength
              ? "stroke-dashoffset 0.8s cubic-bezier(0.65, 0, 0.35, 1)"
              : "none",
          }}
        />
      </svg>
    </span>
  )
}
