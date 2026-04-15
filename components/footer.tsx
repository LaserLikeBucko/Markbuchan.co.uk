import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#book" },
  { label: "Values", href: "#values" },
  { label: "Coaching", href: "#coaching" },
  { label: "Contact", href: "#newsletter" },
]

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Mark Buchan
            <br />
            Author of <span className="italic">The Hidden Gap</span>
            <br />
            A practical framework for clarifying what truly matters —
            <br />
            and leading with purpose, at work and in life.
          </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-primary-foreground/40">
            &copy; {currentYear} Mark Buchan. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
