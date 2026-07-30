"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Work with Me",
    href: "/work-with-me",
    children: [
      { label: "Transformation Advisory", href: "/transformation-advisory" },
      { label: "Leadership Alignment", href: "/leadership-alignment" },
      { label: "Embedding Change", href: "/embedding-change" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Insights & Media",
    href: "/insights",
    children: [
      { label: "Articles", href: "/resources/blog" },
      { label: "Speaking & Media", href: "/speaking-media" },
      { label: "Books", href: "/book" },
      { label: "Tools & Frameworks", href: "/tools-and-frameworks" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EDE8DE] backdrop-blur-md border-b border-[rgba(27,75,128,0.5)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-xl font-semibold text-[#1C1B18] tracking-tight"
        >
          Mark Buchan MSc.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm font-bold text-[rgba(28,27,24,0.65)] transition-colors hover:text-[#1C1B18]"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                )}
              </a>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-[rgba(28,27,24,0.1)] bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#1C1B18] transition-colors hover:bg-[#EDE8DE]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="hidden bg-[#1b4b80] font-bold text-[#EDE8DE] hover:bg-[#163C66] md:inline-flex"
          size="sm"
        >
          <a href="/work-with-me/#diagnostic-conversation">Book a Diagnostic Call</a>
        </Button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1C1B18] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="block border-t border-[rgba(27,75,128,0.5)] px-6 pb-6 text-base font-bold text-[#1C1B18]">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-bold text-[#1C1B18]"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="mt-2 flex flex-col gap-2 border-l border-[rgba(27,75,128,0.3)] pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm font-medium text-[rgba(28,27,24,0.7)]"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full bg-[#1b4b80] font-bold text-[#EDE8DE] hover:bg-[#163C66]"
              >
                <a href="/work-with-me/#diagnostic-conversation" onClick={() => setMobileOpen(false)}>
                  Book a Diagnostic Call
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
