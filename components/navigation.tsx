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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1B18] backdrop-blur-md border-b border-[rgba(58,74,70,0.5)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-xl font-semibold text-[#EDE8DE] tracking-tight"
        >
          Mark Buchan
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[rgba(237,232,222,0.65)] transition-colors hover:text-[#EDE8DE]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="hidden bg-[#3A4A46] text-[#EDE8DE] hover:bg-[#2E3B37] md:inline-flex"
          size="sm"
        >
          <a href="/work-with-me/#diagnostic-conversation">Book a Free Diagnostic Conversation</a>
        </Button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#EDE8DE] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="block border-t border-[rgba(58,74,70,0.5)] px-6 pb-6 text-base font-medium text-[#EDE8DE]">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-[#EDE8DE]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full bg-[#3A4A46] text-[#EDE8DE] hover:bg-[#2E3B37]"
              >
                <a href="/work-with-me/#diagnostic-conversation" onClick={() => setMobileOpen(false)}>
                  Book a Free Diagnostic Conversation
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}