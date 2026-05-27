import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://markbuchan.co.uk'),
  title: "Mark Buchan MSc — Human Alignment Consultant & Author",
  description: "Helping leaders close the gap between the values their organisation declares and the values actually running the show. Author of The Hidden Gap.",
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
  verification: {
  google: "qrhAgHg0cDomVuNx-lg_oaarp6g3hKlMg4YwEJoYYA0",
},
  openGraph: {
  title: "Mark Buchan MSc — Human Alignment Consultant & Author",
  description: "Helping leaders close the gap between declared values and operating reality. Author of The Hidden Gap.",
  type: "website",
  url: "https://markbuchan.co.uk",
  images: [{ url: "/images/og/og-home.png", width: 1920, height: 1080 }],
},
}

export const viewport: Viewport = {
  themeColor: "#ffff00",
  width: "device-width",
  initialScale: 1,
}
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q5HFCQMSCL`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5HFCQMSCL');
          `}
        </Script>
      </body>
    </html>
  );
}

