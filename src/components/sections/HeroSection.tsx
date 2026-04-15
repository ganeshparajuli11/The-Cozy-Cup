'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

const EASE_STEAM = [0.16, 1, 0.3, 1] as const

const HEADLINE_WORDS = ['Every', 'cup,', 'a', 'ritual.']
const HERO_POSTER_URL =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80'
const HERO_VIDEO_URL =
  'https://videos.pexels.com/video-files/5084155/5084155-hd_1920_1080_25fps.mp4'

/**
 * 01 — Hero Section
 * Full-viewport. Desktop: cinematic video background with GSAP parallax.
 * Mobile: static poster image (no video penalty on data/battery).
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    if (!videoRef.current || window.innerWidth < 768) return

    gsap.to(videoRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      } as ScrollTrigger.Vars,
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero"
      className="relative h-dvh overflow-hidden bg-charcoal"
    >
      {/* ---- Desktop: cinematic video ---- */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_URL}
          aria-hidden="true"
        >
          {/* Replace these with real footage when available */}
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* ---- Mobile: static poster ---- */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={HERO_POSTER_URL}
          alt="Barista crafting a latte at The Cozy Cup"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ---- Fallback gradient (shows when video/image not yet available) ---- */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-roast/80 to-espresso"
        aria-hidden="true"
      />

      {/* ---- Overlay ---- */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/75"
        aria-hidden="true"
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 md:pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto w-full">
        {/* Section indicator */}
        <motion.span
          className="font-body text-cream/50 text-xs tracking-[0.3em] uppercase mb-6 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          01 — Welcome
        </motion.span>

        {/* Main headline — word-by-word reveal */}
        <h1
          className="font-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6 md:mb-8"
          aria-label="Every cup, a ritual."
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word + i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
              <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.1,
                  ease: EASE_STEAM,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub-line */}
        <motion.p
          className="font-body text-cream/70 text-base md:text-lg max-w-sm mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE_STEAM }}
        >
          Handcrafted coffee. Unhurried moments.
          <br />A place to just... be.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: EASE_STEAM }}
        >
          <Link
            href="#drinks"
            className="inline-block px-8 py-4 bg-caramel text-cream font-body text-sm tracking-widest uppercase hover:bg-roast transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-caramel"
          >
            Explore Our Menu
          </Link>
          <Link
            href="#visit"
            className="inline-block px-8 py-4 border border-cream/40 text-cream font-body text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
          >
            Find Us
          </Link>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="font-body text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-cream/30"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
