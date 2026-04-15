'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import type { Drink } from '@/types'

interface DrinkCardProps {
  drink: Drink
  /** 'grid' = vertical card for grid section, 'horizontal' = tall card for scroll section */
  variant?: 'grid' | 'horizontal'
}

// Gradient placeholders by category — used until real photos are added
const CATEGORY_GRADIENTS: Record<Drink['category'], string> = {
  espresso: 'from-roast to-espresso',
  filter:   'from-oat to-caramel/30',
  cold:     'from-charcoal to-roast/80',
  seasonal: 'from-caramel/40 to-roast/60',
}

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

export function DrinkCard({ drink, variant = 'grid' }: DrinkCardProps) {
  const isHorizontal = variant === 'horizontal'

  return (
    <motion.article
      className={`
        flex flex-col bg-steam overflow-hidden group cursor-default
        ${isHorizontal
          ? 'w-full md:w-[360px] flex-shrink-0 h-[500px] md:h-[560px]'
          : 'w-full'
        }
      `}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
      aria-label={drink.name}
    >
      {/* Image area */}
      <div
        className={`
          relative overflow-hidden bg-gradient-to-br ${CATEGORY_GRADIENTS[drink.category]}
          ${isHorizontal ? 'h-[320px] md:h-[380px]' : 'aspect-square'}
        `}
      >
        <Image
          src={drink.image}
          alt={`${drink.name} — ${drink.description}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={isHorizontal ? '360px' : '(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px'}
          onError={() => {/* fallback gradient shows through */}}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category label */}
        <span className="font-body text-mist text-xs tracking-[0.2em] uppercase mb-2">
          {drink.category}
        </span>

        {/* Name */}
        <h3 className="font-accent text-espresso text-xl md:text-2xl leading-tight mb-2">
          {drink.name}
        </h3>

        {/* Description */}
        <p className="font-body text-mist text-sm leading-relaxed flex-1 mb-4">
          {drink.description}
        </p>

        {/* Flavour notes */}
        {drink.flavourNotes && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {drink.flavourNotes.map((note) => (
              <span
                key={note}
                className="font-body text-xs text-mist border border-mist/30 px-2 py-0.5"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <p className="font-body text-espresso font-medium text-base">
          £{drink.price.toFixed(2)}
        </p>
      </div>
    </motion.article>
  )
}
