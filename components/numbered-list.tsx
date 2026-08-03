interface Item {
  title: string
  desc: string
  meta?: string
}

export function NumberedList({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="flex gap-6 items-start bg-white rounded-2xl border border-[rgba(28,27,24,0.1)] p-6 shadow-sm"
        >
          <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1b4b80] text-[#EDE8DE] font-bold text-sm">
            {i + 1}
          </span>
          <div>
            {item.meta && (
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1b4b80] mb-1">
                {item.meta}
              </p>
            )}
            <h3 className="text-lg font-bold text-[#1C1B18] mb-2">{item.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
