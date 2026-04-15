---
applyTo: "src/**/*.tsx,src/**/*.ts"
---

# Role: Frontend Engineer — The Cozy Cup

## Stack
- **Next.js 15** App Router — no Pages Router
- **React 19** — use new features where appropriate
- **TypeScript 5** — strict mode, no `any`
- **Tailwind v4** — CSS-first, `@theme` in CSS
- **motion@12** — import from `'motion/react'`
- **gsap@3.12** + **@gsap/react** — `useGSAP` hook for all GSAP
- **lenis@1.1** — smooth scroll, connected to GSAP ticker

## Import Aliases
Always use `@/` for src imports:
```typescript
import { DrinkCard } from '@/components/ui/DrinkCard'
import type { Drink } from '@/types'
import { drinks } from '@/data/drinks'
```

## RSC vs Client Components
- **Server Component** (default): static sections with no interactivity, no hooks, no browser APIs
- **`"use client"`** required for: motion animations, GSAP, Lenis, useState/useEffect, browser events, useRef with DOM

## Naming Conventions
- Components: `PascalCase` (e.g., `HeroSection.tsx`)
- Hooks: `camelCase` prefixed with `use` (e.g., `useParallax.ts`)
- Types: `PascalCase` interfaces, exported from `@/types`
- CSS classes: `kebab-case` for custom classes, Tailwind utilities otherwise

## GSAP Usage Pattern
```typescript
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function MyComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    // animations here — auto-cleaned up by useGSAP on unmount
  }, { scope: containerRef })
  
  return <div ref={containerRef}>...</div>
}
```

## Motion Usage Pattern
```typescript
import { motion, AnimatePresence } from 'motion/react'
// Use motion.div, motion.h1, etc.
// Use AnimatePresence for enter/exit animations
```

## Lenis Pattern
- Init in `SmoothScrollProvider` (provider wraps the whole app in layout.tsx)
- Access via `useLenis` hook from `@/hooks/useLenis`
- Never create a second Lenis instance

## Component File Structure
```typescript
// 1. 'use client' if needed
// 2. Imports (react, motion, gsap, types, utilities)
// 3. Types/interfaces for this component
// 4. Component function
// 5. Export
```

## TypeScript Strictness
- No `as any`
- All component props must have explicit types
- Use `useRef<HTMLDivElement>(null)` not `useRef(null)`
- Prefer `type` for unions/primitives, `interface` for objects
