import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Mark Buchan — The Hidden Gap",
  description:
    "A practical framework for clarifying what truly matters and leading with purpose — at work and in life. Explore why people clash, teams fracture, and change stalls (and what to do about it).",
  keywords: [
    "Mark Buchan",
    "The Hidden Gap",
    "values",
    "organisational culture",
    "leadership",
    "change",
    "team conflict",
    "coaching",
    "ECHO framework",
  ],
  authors: [{ name: "Mark Buchan" }],
  openGraph: {
    title: "Mark Buchan — The Hidden Gap",
    description:
      "A practical framework for clarifying what truly matters — why people clash, teams fracture, and change stalls (and what to do about it).",
    type: "website",
    url: "https://markbuchan.co.uk",
  },
}

export const viewport: Viewport = {
  themeColor: "#F8F5F0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
