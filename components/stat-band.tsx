interface Stat {
  value: string
  label: string
}

export function StatBand({
  stats,
  eyebrow,
  variant = "blue",
}: {
  stats: Stat[]
  eyebrow?: string
  variant?: "blue" | "ivory"
}) {
  const isIvory = variant === "ivory"

  return (
    <section className={isIvory ? "bg-[#EDE8DE] py-20" : "bg-[#1b4b80] py-20"}>
      <div className="mx-auto max-w-5xl px-6">
        {eyebrow && (
          <p
            className={
              isIvory
                ? "mb-10 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#1b4b80]"
                : "mb-10 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#EDE8DE]/70"
            }
          >
            {eyebrow}
          </p>
        )}
        <div className="grid gap-10 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className={
                  isIvory
                    ? "mb-3 text-4xl font-bold text-[#1C1B18] md:text-5xl"
                    : "mb-3 text-4xl font-bold text-[#EDE8DE] md:text-5xl"
                }
              >
                {stat.value}
              </p>
              <p
                className={
                  isIvory
                    ? "mx-auto max-w-xs text-sm leading-relaxed text-[#1C1B18]/70"
                    : "mx-auto max-w-xs text-sm leading-relaxed text-white/70"
                }
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
