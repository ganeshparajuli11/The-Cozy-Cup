import { CinematicIntro } from '@/components/sections/CinematicIntro'
import { HeroSection } from '@/components/sections/HeroSection'
import { StorySection } from '@/components/sections/StorySection'
import { HorizontalDrinks } from '@/components/sections/HorizontalDrinks'
import { CraftsmanshipSection } from '@/components/sections/CraftsmanshipSection'
import { CafeEnvironmentSection } from '@/components/sections/CafeEnvironmentSection'
import { FeaturedDrinksGrid } from '@/components/sections/FeaturedDrinksGrid'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      {/* Cinematic intro — client-only, shown once per session */}
      <CinematicIntro />

      <main id="main-content">
        {/* 01 — Hero */}
        <HeroSection />

        {/* 02 — Our Story */}
        <StorySection />

        {/* 03 — Horizontal Drinks scroll (GSAP pin on desktop) */}
        <HorizontalDrinks />

        {/* 04 — Craftsmanship */}
        <CraftsmanshipSection />

        {/* 05 — Café Environment */}
        <CafeEnvironmentSection />

        {/* 06 — Featured Drinks Grid */}
        <FeaturedDrinksGrid />

        {/* 07 — Testimonials */}
        <TestimonialsSection />

        {/* 08 — CTA */}
        <CTASection />
      </main>

      {/* Footer (also contains #visit anchor) */}
      <Footer />
    </>
  )
}
