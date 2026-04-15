'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { label: 'Menu', href: '#drinks' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'The Space', href: '#the-space' },
  { label: 'Find Us', href: '#visit' },
]

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-oat shadow-sm py-4'
            : 'bg-transparent py-6'
          }
        `}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-lg tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-espresso' : 'text-cream'
            }`}
            aria-label="The Cozy Cup — Home"
          >
            The Cozy Cup
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-body text-sm tracking-widest uppercase transition-colors duration-300
                  hover:text-caramel
                  ${scrolled ? 'text-espresso' : 'text-cream/80'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`
              md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5
              transition-colors duration-300
              ${scrolled ? 'text-espresso' : 'text-cream'}
            `}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              className="block w-6 h-px bg-current"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-px bg-current"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: EASE_STEAM }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: EASE_STEAM }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-cream text-4xl hover:text-caramel transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.p
              className="absolute bottom-12 left-8 font-body text-mist text-sm tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The Cozy Cup © {new Date().getFullYear()}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
