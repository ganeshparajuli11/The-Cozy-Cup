'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

interface ParallaxLayerProps {
  children: React.ReactNode
  /** Parallax intensity. 0.1 = subtle depth, 0.5 = strong. Default 0.3 */
  speed?: number
  className?: string
}

/**
 * Wraps children in a parallax container driven by GSAP ScrollTrigger.
 * The inner content moves at a different speed than the scroll — creating depth.
 * Automatically disabled on mobile (< 768px) for performance.
 */
export function ParallaxLayer({ children, speed = 0.3, className = '' }: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!innerRef.current || window.innerWidth < 768) return

    gsap.to(innerRef.current, {
      yPercent: -(speed * 25),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      } as ScrollTrigger.Vars,
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
