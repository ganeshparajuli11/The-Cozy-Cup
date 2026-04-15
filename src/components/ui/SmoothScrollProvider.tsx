'use client'

import { createContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

export const LenisContext = createContext<Lenis | null>(null)

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

/**
 * Initialises Lenis smooth scroll and connects it to the GSAP ticker
 * so GSAP ScrollTrigger reads the smoothed scroll position.
 * Wrap the root layout with this provider.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const rafCallbackRef = useRef<((time: number) => void) | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    // Keep function reference so we can remove it on cleanup
    const rafCallback = (time: number) => {
      lenisInstance.raf(time * 1000)
    }
    rafCallbackRef.current = rafCallback

    // Connect Lenis to GSAP ticker — drives animations from the same loop
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Tell ScrollTrigger to refresh when Lenis scrolls
    lenisInstance.on('scroll', () => ScrollTrigger.update())

    return () => {
      lenisInstance.destroy()
      if (rafCallbackRef.current) {
        gsap.ticker.remove(rafCallbackRef.current)
      }
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
