import Image from 'next/image'
import { ParallaxLayer } from '@/components/ui/ParallaxLayer'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'

/**
 * 06 — Café Environment Section
 * Asymmetric mosaic of three images at different parallax depths.
 * Overlaid pull quote and large display heading spanning the imagery.
 */
export function CafeEnvironmentSection() {
  const environmentMainUrl =
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1600&q=80'
  const environmentDetailUrl =
    'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80'
  const environmentPeopleUrl =
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80'

  return (
    <section
      id="the-space"
      aria-labelledby="space-heading"
      className="bg-steam py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Chapter label */}
        <span className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-12">
          06 — The Space
        </span>

        {/* Mosaic grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-16 md:mb-24">
          {/* Large primary image — left */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 relative h-[50vw] md:h-[55vh] lg:h-[65vh] min-h-[280px]">
            <ParallaxLayer speed={0.2} className="absolute inset-0">
              <div className="relative w-full h-full bg-gradient-to-br from-oat to-roast/20">
                <Image
                  src={environmentMainUrl}
                  alt="Warm interior of The Cozy Cup with wooden tables and soft morning light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 65vw"
                />
              </div>
            </ParallaxLayer>
          </div>

          {/* Two stacked images — right */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-row md:flex-col gap-4 md:gap-6">
            <div className="relative flex-1 min-h-[160px] md:min-h-0 md:h-[28vh] lg:h-[32vh]">
              <ParallaxLayer speed={0.35} className="absolute inset-0">
                <div className="relative w-full h-full bg-gradient-to-br from-caramel/30 to-espresso/30">
                  <Image
                    src={environmentDetailUrl}
                    alt="Close-up of a ceramic cup with latte art on a wooden counter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 35vw"
                  />
                </div>
              </ParallaxLayer>
            </div>

            <div className="relative flex-1 min-h-[160px] md:min-h-0 md:h-[27vh] lg:h-[31vh]">
              <ParallaxLayer speed={0.45} className="absolute inset-0">
                <div className="relative w-full h-full bg-gradient-to-br from-roast/40 to-charcoal/40">
                  <Image
                    src={environmentPeopleUrl}
                    alt="Guests enjoying coffee at The Cozy Cup in a relaxed atmosphere"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 35vw"
                  />
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </div>

        {/* Pull quote + heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
          <AnimatedHeading
            id="space-heading"
            as="h2"
            className="font-display text-espresso text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none"
          >
            A place to slow down.
          </AnimatedHeading>

          <div className="md:pb-2">
            <blockquote className="border-l-2 border-caramel pl-6">
              <p className="font-accent italic text-espresso text-xl md:text-2xl leading-snug mb-4">
                "The light, the smell, the quiet hum of the espresso machine. Come in. Stay."
              </p>
              <footer>
                <cite className="font-body text-mist text-xs tracking-widest uppercase not-italic">
                  — Lena, our head barista
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
