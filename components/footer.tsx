import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Resources", href: "/resources" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/about" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theagileleader" },
  { label: "Twitter / X", href: "https://x.com/thehiddengap" },
  { label: "Instagram", href: "#" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1C1B18] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* CTA */}
        <div className="flex flex-col items-start gap-6 border-b border-[rgba(58,74,70,0.5)] pb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-[#EDE8DE]">
              Not sure where to start?
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[rgba(237,232,222,0.6)]">
              A free 20-minute conversation is usually enough to see whether there&apos;s something worth working on together.
            </p>
          </div>
          <Button
            asChild
            className="shrink-0 bg-[#3A4A46] text-[#EDE8DE] hover:bg-[#2E3B37]"
            size="lg"
          >
            <a href="/work-with-me/#diagnostic-conversation">Book a Free Diagnostic Conversation</a>
          </Button>
        </div>

        <div className="flex flex-col gap-10 pt-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
          <p className="text-sm text-[rgba(237,232,222,0.6)] leading-relaxed">
            Mark Buchan
            <br />
            Author of <span className="italic">The Hidden Gap</span>
            <br />
            Solving the Human Alignment Problem Behind Conflict, Behaviour and Culture.
            <br />
            How operating values drive behaviour, conflict and culture.
          </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(237,232,222,0.4)]">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[rgba(237,232,222,0.6)] transition-colors hover:text-[#EDE8DE]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(237,232,222,0.4)]">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(237,232,222,0.6)] transition-colors hover:text-[#EDE8DE]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-[rgba(237,232,222,0.1)]" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-[rgba(237,232,222,0.4)]">
            &copy; {currentYear} Mark Buchan. All rights reserved.
          </p>
          <p className="text-xs text-[rgba(237,232,222,0.3)]">
            Built with purpose and alignment.
          </p>
        </div>
      </div>
    </footer>
  )
}
