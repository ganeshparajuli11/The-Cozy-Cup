// GSAP plugin registry — import this in every client component that uses GSAP.
// Safe to call registerPlugin multiple times — GSAP deduplicates.

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
