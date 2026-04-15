"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "The Work", href: "#values" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#book" },
  { label: "Coaching", href: "#coaching" },
  { label: "Get First Chapter", href: "#newsletter" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-serif text-xl font-bold text-foreground tracking-tight"
        >
          Mark Buchan
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
          <a href="#newsletter">Get First Chapter</a>
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
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-foreground"
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
                <a href="#newsletter" onClick={() => setMobileOpen(false)}>
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