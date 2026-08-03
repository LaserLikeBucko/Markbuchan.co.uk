export function FamiliarChecklist({
  items,
  showBullets = true,
  heading = "Does this sound familiar?",
  variant = "blue",
}: {
  items: string[]
  showBullets?: boolean
  heading?: string
  variant?: "blue" | "ivory"
}) {
  const isIvory = variant === "ivory"

  return (
    <section className={isIvory ? "bg-[#EDE8DE] py-24" : "bg-[#1b4b80] py-24"}>
      <div className="mx-auto max-w-4xl px-6">
        <p
          className={
            isIvory
              ? "mb-12 text-center text-2xl md:text-3xl font-bold text-[#1C1B18]"
              : "mb-12 text-center text-2xl md:text-3xl font-bold text-[#EDE8DE]"
          }
        >
          {heading}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className={
                isIvory
                  ? "flex gap-3 items-start rounded-xl border border-[rgba(28,27,24,0.1)] bg-white p-5"
                  : "flex gap-3 items-start rounded-xl border border-[rgba(27,75,128,0.15)] bg-[#EDE8DE] p-5"
              }
            >
              {showBullets && (
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#1b4b80]" aria-hidden="true" />
              )}
              <p className={isIvory ? "text-lg text-[#1b4b80] leading-relaxed" : "text-lg text-[#1b4b80] leading-relaxed"}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
