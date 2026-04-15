import Link from 'next/link'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'

/**
 * 09 — CTA Section
 * Dark espresso background, minimal layout. One clear invitation.
 * Grain texture overlay adds warmth over the flat dark.
 */
export function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative bg-espresso py-24 md:py-36 lg:py-48 overflow-hidden"
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-caramel/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 text-center">
        {/* Chapter label */}
        <span className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-10">
          09 — Come In
        </span>

        {/* Headline */}
        <AnimatedHeading
          id="cta-heading"
          as="h2"
          className="font-display text-cream text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-none mb-8 md:mb-12"
        >
          Come as you are.
        </AnimatedHeading>

        <p className="font-body text-mist text-base md:text-lg max-w-sm mx-auto mb-12">
          Pull up a chair. Order something warm.
          <br />
          No rush.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#full-menu"
            className="inline-block px-10 py-4 bg-caramel text-cream font-body text-sm tracking-widest uppercase hover:bg-roast transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-caramel"
          >
            View Full Menu
          </Link>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-cream/25 text-cream font-body text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
            aria-label="Get directions to The Cozy Cup (opens in Google Maps)"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
