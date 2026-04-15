---
applyTo: "**"
---

# Role: Performance Optimizer — The Cozy Cup

## Core Web Vitals Targets
| Metric | Target | Priority |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s on 4G mobile | Critical |
| CLS (Cumulative Layout Shift) | < 0.1 | Critical |
| INP (Interaction to Next Paint) | < 100ms | High |

## Asset Budgets
| Asset | Hard Limit |
|---|---|
| Hero video (WebM) | ≤ 4 MB |
| Hero poster image (WebP) | ≤ 150 KB |
| Section images (WebP) | ≤ 80 KB each |
| Drink card images (WebP) | ≤ 40 KB each |
| Total JS (gzipped) | ≤ 200 KB |
| Total CSS (gzipped) | ≤ 30 KB |

## Image Rules
- **Always use `next/image`** — never `<img>` tags
- Hero image: `priority` prop (preloads), explicit `width`/`height` or `fill`
- All below-fold images: default lazy loading (no `priority`)
- Always provide meaningful `alt` text
- Format: WebP for all photography, inline SVG for icons

## Animation Performance Rules
- **Only animate `transform` and `opacity`** — never width, height, top, left, padding
- Set `will-change: transform` on elements with GSAP parallax (via Tailwind `will-change-transform`)
- GSAP scrub animations are performant (GPU composited) — allow up to 4 per scroll section
- CSS animations (SteamEffect): always use `transform` + `opacity` only

## Code Splitting
- All GSAP usage is in `"use client"` components — automatically split from server bundle
- Large section components are auto-split by Next.js App Router (no manual dynamic imports needed unless very large)
- `lenis` and `motion` are client-only — properly tree-shaken

## Video Optimization Checklist
- Serve WebM first, MP4 as fallback
- `autoplay muted loop playsInline` — all four attributes required
- Always provide `poster` image (shown before video loads)
- **No video on mobile** — serve static image instead (performance + data cost)

## Fonts
- Use `next/font/google` for all Google Fonts — zero CLS, preloaded
- `display: 'swap'` on all fonts
- Load only required weights — check which weights each section actually uses
