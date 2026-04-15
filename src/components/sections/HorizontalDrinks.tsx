'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'
import { DrinkCard } from '@/components/ui/DrinkCard'
import { drinks } from '@/data/drinks'

const FEATURED = drinks.filter((d) => d.featured)

/**
 * 04 — Horizontal Drinks Scroll
 *
 * Desktop: GSAP ScrollTrigger pins the section and drives horizontal scroll
 * as the user scrolls vertically — cinematic chapter feel.
 *
 * Mobile (< 768px): standard overflow-x scroll with CSS snap points.
 * GSAP is NOT initialised on mobile to preserve performance.
 */
export function HorizontalDrinks() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!trackRef.current || window.innerWidth < 768) return

    const track = trackRef.current
    const totalScroll = track.scrollWidth - window.innerWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScroll + window.innerWidth * 0.3}`,
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        onUpdate: (self: ScrollTrigger) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`
          }
        },
      } as ScrollTrigger.Vars,
    })

    tl.to(track, { x: -totalScroll, ease: 'none' })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="drinks"
      aria-labelledby="drinks-heading"
      className="relative bg-oat overflow-hidden"
    >
      {/* Section label */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-24 z-10 pointer-events-none">
        <span className="font-body text-mist text-xs tracking-[0.3em] uppercase">
          04 — The Menu
        </span>
      </div>

      {/* ---- DESKTOP: horizontal scroll track ---- */}
      <div
        aria-hidden="true"
        className="hidden md:flex h-[100vh] items-center"
      >
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 will-change-transform"
          style={{ paddingLeft: '10vw', paddingRight: '10vw', width: 'max-content' }}
        >
          {/* Intro text card */}
          <div className="flex-shrink-0 w-[38vw] max-w-[520px] flex flex-col justify-center pr-12">
            <h2
              id="drinks-heading"
              className="font-display text-espresso text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
            >
              Drinks made
              <br />
              with intention.
            </h2>
            <p className="font-body text-mist text-base leading-relaxed max-w-sm">
              Scroll to discover our menu — from the first crack of a single-origin
              espresso to the last sip of a seasonal blend.
            </p>
            <div className="mt-8 flex items-center gap-3 text-mist">
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 4h20M17 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
            </div>
          </div>

          {FEATURED.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} variant="horizontal" />
          ))}
        </div>
      </div>

      {/* ---- MOBILE: vertical card list with horizontal scroll ---- */}
      <div
        className="md:hidden py-24 px-6"
        aria-labelledby="drinks-heading-mobile"
      >
        <div className="mb-12">
          <span className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-4">
            04 — The Menu
          </span>
          <h2
            id="drinks-heading-mobile"
            className="font-display text-espresso text-4xl leading-tight"
          >
            Drinks made
            <br />
            with intention.
          </h2>
        </div>

        {/* Horizontal scroll snap on mobile */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6">
          {FEATURED.map((drink) => (
            <div key={drink.id} className="snap-start flex-shrink-0 w-[80vw] max-w-[300px]">
              <DrinkCard drink={drink} variant="horizontal" />
            </div>
          ))}
        </div>
      </div>

      {/* ---- Progress bar (desktop only) ---- */}
      <div
        className="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-oat/40"
        aria-hidden="true"
      >
        <div
          ref={progressRef}
          className="h-full bg-caramel transition-none"
          style={{ width: '0%' }}
        />
      </div>
    </section>
  )
}
