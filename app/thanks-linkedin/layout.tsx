export const metadata = {
  title: "Thanks — The Hidden Gap | Mark Buchan MSc",
  description: "Your copy of Chapter 1 is downloading. Here's where to go next.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thanks — The Hidden Gap | Mark Buchan MSc",
    description: "Your copy of Chapter 1 is downloading. Here's where to go next.",
    images: [{ url: "/images/og/og-free-chapter.jpg", width: 1200, height: 630 }],
  },
}

export default function ThanksLinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
