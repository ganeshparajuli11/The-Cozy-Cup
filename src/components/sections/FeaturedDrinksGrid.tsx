'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { DrinkCard } from '@/components/ui/DrinkCard'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'
import { drinks } from '@/data/drinks'
import type { Drink } from '@/types'

type Category = 'all' | Drink['category']

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Espresso', value: 'espresso' },
  { label: 'Filter', value: 'filter' },
  { label: 'Cold', value: 'cold' },
  { label: 'Seasonal', value: 'seasonal' },
]

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

/**
 * 07 — Featured Drinks Grid
 * Full drink listing with category filter tabs.
 * Framer Motion layout animation smooth-transitions cards when filter changes.
 */
export function FeaturedDrinksGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = activeCategory === 'all'
    ? drinks
    : drinks.filter((d) => d.category === activeCategory)

  return (
    <section
      id="full-menu"
      aria-labelledby="grid-heading"
      className="bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Chapter label */}
        <span className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-12">
          07 — Featured Drinks
        </span>

        {/* Heading */}
        <AnimatedHeading
          id="grid-heading"
          as="h2"
          className="font-display text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-12 max-w-xl"
        >
          Something for every mood.
        </AnimatedHeading>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter drinks by category"
          className="flex flex-wrap gap-2 mb-12 md:mb-16"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value
            return (
              <button
                key={cat.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.value)}
                className={`
                  relative font-body text-sm tracking-widest uppercase px-5 py-2.5
                  transition-colors duration-250 focus-visible:outline-caramel
                  ${isActive
                    ? 'text-cream'
                    : 'text-mist hover:text-espresso border border-oat hover:border-espresso'
                  }
                `}
              >
                {/* Active bg pill */}
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 bg-espresso"
                    transition={{ duration: 0.35, ease: EASE_STEAM }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((drink, i) => (
              <motion.div
                key={drink.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: EASE_STEAM,
                }}
              >
                <DrinkCard drink={drink} variant="grid" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
