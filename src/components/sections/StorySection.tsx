import Image from 'next/image'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'
import { ParallaxLayer } from '@/components/ui/ParallaxLayer'

/**
 * 02 — Our Story
 * Two-column layout: editorial text on the left, parallax portrait on the right.
 * Chapter-based structure inspired by oddritualgolf.com.
 */
export function StorySection() {
  const storyImageUrl =
    'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=1400&q=80'

  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Chapter label */}
        <div className="mb-12 md:mb-16">
          <span className="font-body text-mist text-xs tracking-[0.3em] uppercase">
            02 — Our Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Text column */}
          <div>
            {/* Large chapter number */}
            <span
              className="font-display text-oat text-[8rem] md:text-[12rem] leading-none select-none block mb-0 -mt-8 md:-mt-16"
              aria-hidden="true"
            >
              01
            </span>

            <AnimatedHeading
              id="story-heading"
              as="h2"
              className="font-display text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 -mt-4 md:-mt-8"
            >
              Made with care. Shared with intention.
            </AnimatedHeading>

            <div className="space-y-5 max-w-lg">
              <p className="font-body text-mist text-base leading-relaxed">
                We started The Cozy Cup with one simple belief: that a great cup of coffee
                can change the texture of your day. Not just the taste — the way time moves,
                the way you feel settled, present, here.
              </p>
              <p className="font-body text-mist text-base leading-relaxed">
                Every drink we serve is made by hand. Every bean is sourced from farms we know
                by name. Every bag is sealed by someone who takes this seriously.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-caramel pl-6 py-2 my-8">
                <p className="font-accent italic text-espresso text-xl md:text-2xl leading-snug">
                  "A place to slow down,<br />
                  pour something warm,<br />
                  and stay a while."
                </p>
              </blockquote>

              <p className="font-body text-mist text-base leading-relaxed">
                This is not about efficiency. It's about experience. Pull up a chair.
              </p>
            </div>
          </div>

          {/* Image column with parallax */}
          <div className="relative h-[500px] md:h-[640px] lg:h-[700px] mt-6 lg:mt-16">
            <ParallaxLayer speed={0.3} className="absolute inset-0">
              <div className="relative w-full h-full bg-gradient-to-br from-oat to-caramel/20">
                <Image
                  src={storyImageUrl}
                  alt="Barista carefully pouring a single origin pour over at The Cozy Cup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ParallaxLayer>

            {/* Floating caption */}
            <div className="absolute bottom-6 left-6 bg-cream/90 backdrop-blur-sm px-5 py-3 z-10">
              <p className="font-body text-espresso text-xs tracking-widest uppercase">
                Sourced · Roasted · Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
