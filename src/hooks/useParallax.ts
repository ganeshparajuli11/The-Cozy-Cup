'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

/**
 * Attaches a GSAP ScrollTrigger parallax effect to the returned ref.
 * The element moves slower than the scroll (depth illusion).
 *
 * @param speed  0.1 = very subtle, 0.5 = noticeable. Default 0.3.
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null)

  useGSAP(() => {
    if (!ref.current) return

    // Disable on mobile — parallax is GPU-expensive on low-end devices
    if (window.innerWidth < 768) return

    gsap.to(ref.current, {
      yPercent: -(speed * 25),
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      } as ScrollTrigger.Vars,
    })
  })

  return ref
}
