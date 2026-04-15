'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'
import { motion } from 'motion/react'
import { SteamEffect } from '@/components/ui/SteamEffect'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    number: '01',
    title: 'Sourced',
    body: 'We visit the farms. We know the growers. Every bean has a story and a name behind it.',
    stat: '12',
    statLabel: 'origin countries',
  },
  {
    number: '02',
    title: 'Roasted',
    body: 'Small batches. Carefully profiled. Roasted within 72 hours of your order arriving.',
    stat: '48h',
    statLabel: 'to your cup',
  },
  {
    number: '03',
    title: 'Served',
    body: 'Every extraction is measured, timed, and tasted. Consistency is a form of respect.',
    stat: '3+',
    statLabel: 'years perfecting',
  },
]

/**
 * 05 — Craftsmanship Section
 * Dark background — visual contrast break from cream.
 * Three-pillar grid with steam effect and count-up stats.
 */
export function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-15% 0px' })

  return (
    <section
      ref={sectionRef}
      id="craftsmanship"
      aria-labelledby="craft-heading"
      className="bg-charcoal py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Steam effect above headline */}
      <div className="flex justify-center mb-4">
        <SteamEffect count={3} />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Chapter label */}
        <motion.span
          className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_STEAM }}
        >
          05 — Craftsmanship
        </motion.span>

        {/* Section heading */}
        <AnimatedHeading
          id="craft-heading"
          as="h2"
          className="font-display text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-16 md:mb-24 max-w-2xl"
          delay={0.1}
        >
          Slow by design.
        </AnimatedHeading>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.15,
                ease: EASE_STEAM,
              }}
              className="border-t border-cream/10 pt-8"
            >
              {/* Number */}
              <span
                className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-6"
                aria-hidden="true"
              >
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-cream text-3xl md:text-4xl mb-4">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="font-body text-mist text-sm leading-relaxed mb-8">
                {pillar.body}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-caramel text-4xl md:text-5xl">
                  {pillar.stat}
                </span>
                <span className="font-body text-mist text-xs tracking-widest uppercase">
                  {pillar.statLabel}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Subtle background texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
