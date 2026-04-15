import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BookSection } from "@/components/book-section"
import { ValuesSection } from "@/components/values-section"
import { CoachingSection } from "@/components/coaching-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ValuesSection />
        <AboutSection />
        <BookSection />
        <CoachingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}