import { NavigationHeader } from "@/components/navigation-header"
import { TechnologyNav } from "@/components/technology-nav"
import { HeroSection } from "@/components/hero-section"
import { LearningPathsSection } from "@/components/learning-paths-section"
import { FeaturesSection } from "@/components/features-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      <ParticleBackground />

      <NavigationHeader />
      <TechnologyNav />
      <HeroSection />
      <LearningPathsSection />
      <FeaturesSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
