import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work with Me", href: "/work-with-me" },
  { label: "About", href: "/about" },
  { label: "Insights & Media", href: "/insights" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theagileleader" },
  { label: "Twitter / X", href: "https://x.com/thehiddengap" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#EDE8DE] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 pt-4 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
          <p className="text-sm text-[rgba(27,75,128,0.65)] leading-relaxed">
            <span className="font-semibold">Mark Buchan MSc.</span>
            <br />
            Transformation Advisory for Leaders Facing Complex Change
            <br />
            Author of <span className="italic">The Hidden Gap</span> and{" "}
            <span className="italic">
              Leaders, it&rsquo;s not how you finish&hellip; it&rsquo;s how
              you start!
            </span>
          </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(27,75,128,0.45)]">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(27,75,128,0.65)] transition-colors hover:text-[#1b4b80]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(27,75,128,0.45)]">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(27,75,128,0.65)] transition-colors hover:text-[#1b4b80]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-[rgba(27,75,128,0.15)]" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-[rgba(27,75,128,0.45)]">
            &copy; {currentYear} Mark Buchan. All rights reserved.
          </p>
          <p className="text-xs text-[rgba(27,75,128,0.35)]">
            Built with purpose and alignment.
          </p>
        </div>
      </div>
    </footer>
  )
}
