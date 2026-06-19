"use client"

import { useEffect, useMemo, useState } from "react"

const COLORS = ["#ffff00", "#ff3131", "#111110", "#d4af37", "#ff6b6b", "#fff700"]
const PIECE_COUNT = 120

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function LaunchConfetti() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const now = new Date()
    const isLaunchDay =
      now.getFullYear() === 2026 && now.getMonth() === 5 && now.getDate() === 19
    if (isLaunchDay) setShow(true)
  }, [])

  const pieces = useMemo(() => {
    if (!show) return []
    return Array.from({ length: PIECE_COUNT }, (_, i) => {
      const isTape = i < PIECE_COUNT * 0.3
      return {
        id: i,
        left: `${rand(0, 100)}%`,
        delay: `${rand(0, 4)}s`,
        duration: `${rand(3, 7)}s`,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        width: isTape ? `${rand(8, 20)}px` : `${rand(6, 12)}px`,
        height: isTape ? `${rand(3, 6)}px` : `${rand(6, 12)}px`,
        borderRadius: isTape ? "1px" : Math.random() > 0.5 ? "50%" : "2px",
        spin: rand(180, 900),
      }
    })
  }, [show])

  if (!show) return null

  return (
    <>
      <style>{`
        @keyframes confetti-drop {
          0%   { transform: translateY(-30px) rotate(0deg); opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(105vh) rotate(var(--spin, 720deg)); opacity: 0; }
        }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
        {pieces.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              top: 0,
              left: p.left,
              width: p.width,
              height: p.height,
              backgroundColor: p.color,
              borderRadius: p.borderRadius,
              "--spin": `${p.spin}deg`,
              animation: `confetti-drop ${p.duration} ${p.delay} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  )
}
