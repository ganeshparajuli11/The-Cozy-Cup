'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

interface AnimatedHeadingProps {
  id?: string
  children: string
  as?: HeadingTag
  className?: string
  /** Stagger delay between words in seconds. Default 0.06. */
  stagger?: number
  /** Initial delay before first word animates. Default 0. */
  delay?: number
}

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

/**
 * Renders a heading with a word-by-word staggered reveal animation.
 * Animation triggers once when the element enters the viewport.
 */
export function AnimatedHeading({
  id,
  children,
  as: Tag = 'h2',
  className = '',
  stagger = 0.06,
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const words = children.split(' ')

  return (
    <Tag ref={ref} id={id} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: EASE_STEAM,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
