'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

/**
 * Full-screen cinematic intro — shown only on first visit (sessionStorage flag).
 * Letter-spacing expands → holds → fades out → unmounts.
 */
export function CinematicIntro() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem('cozy-cup-intro')
    if (seen) {
      setMounted(false)
      return
    }
    setVisible(true)

    const timer = setTimeout(() => setVisible(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  const skip = () => {
    setVisible(false)
    sessionStorage.setItem('cozy-cup-intro', '1')
  }

  if (!mounted) return null

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem('cozy-cup-intro', '1')
        setMounted(false)
      }}
    >
      {visible && (
        <motion.div
          role="region"
          aria-label="Cinematic intro"
          className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: EASE_STEAM }}
        >
          {/* Brand name reveal */}
          <motion.h1
            className="font-display text-cream text-3xl sm:text-5xl md:text-7xl uppercase select-none"
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.15em' }}
            transition={{ duration: 1.6, ease: EASE_STEAM }}
          >
            The Cozy Cup
          </motion.h1>

          {/* Thin underline accent */}
          <motion.div
            className="absolute bottom-1/2 translate-y-10 w-px h-12 bg-caramel"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: EASE_STEAM }}
            aria-hidden="true"
          />

          {/* Skip */}
          <button
            onClick={skip}
            className="absolute bottom-10 right-10 font-body text-xs tracking-[0.2em] uppercase text-mist hover:text-cream transition-colors focus-visible:outline-caramel"
            aria-label="Skip intro"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
