"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
  { label: "Buy the Book", href: "/book" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111110] backdrop-blur-md border-b border-[rgba(255,255,0,0.15)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-xl font-semibold text-[#ffff00] tracking-tight"
        >
          Mark Buchan
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[rgba(255,255,0,0.7)] transition-colors hover:text-[#ffff00]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex"
          size="sm"
        >
          <a href="/free-chapter">Get First Chapter</a>
        </Button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="block text-base font-medium text-[#ffff00]">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-[#ffff00]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="/book" onClick={() => setMobileOpen(false)}>
                  Get First Chapter
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}