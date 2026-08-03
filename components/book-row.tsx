"use client"

import { useState } from "react"
import Image from "next/image"
import { BookOpen } from "lucide-react"

interface BookRowProps {
  title: string
  subtitle?: string
  image?: string
  alt?: string
  body: string[]
  previewCount: number
  href: string
  ctaLabel?: string
}

export function BookRow({ title, subtitle, image, alt, body, previewCount, href, ctaLabel = "View the book page" }: BookRowProps) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = body.length > previewCount
  const visible = expanded ? body : body.slice(0, previewCount)

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-2xl border border-[rgba(28,27,24,0.1)] bg-white p-8">
      <div className="w-32 sm:w-40 md:w-48 flex-shrink-0">
        {image ? (
          <div className="overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/10">
            <Image
              src={image}
              alt={alt ?? title}
              width={600}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-[3/4] items-center justify-center rounded-lg border border-[rgba(28,27,24,0.1)] bg-[#EDE8DE]">
            <BookOpen className="h-10 w-10 text-[#1b4b80]" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1B18]">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-base text-[#1C1B18]/60">{subtitle}</p>
          )}
        </div>

        {visible.length > 0 && (
          <div className="flex flex-col gap-4 text-[#1C1B18]/75 leading-relaxed">
            {visible.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-center text-sm font-semibold text-[#1b4b80] hover:text-[#163C66] transition-colors sm:self-start"
          >
            {expanded ? "Show less ↑" : "Explore the book →"}
          </button>
        )}

        <div className="mt-2 flex justify-center sm:justify-start">
          <a
            href={href}
            className="inline-flex items-center rounded-md bg-[#1b4b80] px-5 py-3 text-sm font-semibold text-[#EDE8DE] hover:bg-[#163C66] transition-colors"
          >
            {ctaLabel} →
          </a>
        </div>
      </div>
    </div>
  )
}
