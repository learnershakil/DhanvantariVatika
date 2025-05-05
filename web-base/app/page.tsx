import HomeHero from "@/components/home/Hero"
import FeaturesHome from "@/components/home/Features"
import AboutHome from "@/components/home/About"
import TestimonialsHome from "@/components/home/Testimonials"
import CTAHome from "@/components/home/CTA"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HomeHero />

      {/* Features Section */}
      <FeaturesHome />

      {/* About Section */}
      <AboutHome />

      {/* Testimonials Section */}
      <TestimonialsHome />

      {/* CTA Section */}
      <CTAHome />
    </div>
  )
}

