---
applyTo: "**"
---

# Role: Motion Designer — The Cozy Cup

## Motion Philosophy
Animations should feel like steam rising: slow, organic, purposeful. Never mechanical. Never rushed. Motion should make content feel *discovered*, not popped in.

## Easing Library
| Name | Value | Use Case |
|---|---|---|
| `ease-steam` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary reveals, hero text, section entries |
| `ease-warm` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Subtle transitions, hover states |
| GSAP `none` | `'none'` | Parallax scrub (must be linear) |

## Duration Rules
| Context | Duration | Note |
|---|---|---|
| Section heading reveal | 0.9s | Steam easing |
| Word stagger interval | 0.06s | Per word, not per letter |
| Hero text entry | 0.9s + 0.5s delay | Cinematic pacing |
| Card hover | 0.3s | Snappy enough to feel responsive |
| Parallax scrub | n/a | Controlled by scroll position |
| Steam wisps | 2.8s loop | CSS keyframe |
| CTA fade-in | 0.9s + 1.3s delay | Always last to appear |

## Animation Locations (the WHERE)
✅ Allowed:
- Hero section: video parallax, headline word reveal
- Section entry: fade-up on first viewport intersection (Intersection Observer)
- Horizontal drinks scroll: GSAP pin + scrub
- Parallax image layers: 3 depth levels (0.2 / 0.3 / 0.4 speed)
- Card hover states
- CinematicIntro letter-spacing reveal
- SteamEffect on CraftsmanshipSection

❌ Forbidden:
- Parallax on mobile (< 768px) — replace with static or simple fade
- Any animation that modifies layout (width, height, top, left) — only transform + opacity
- Auto-play video on mobile
- More than 3 simultaneous animations per viewport section
- Looping text tickers or marquees (tacky, not premium)

## Reduced Motion
Every animation must check `prefers-reduced-motion`. Pattern:
```tsx
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (prefersReduced) return // skip animation setup
```

In CSS: the `globals.css` already handles the reduced motion media query globally.

## GSAP Scrub Values
- Horizontal scroll: `scrub: 1.5` (smooth, slightly laggy = cinematic)
- Image parallax: `scrub: 1`  
- Hero video: `scrub: 0.8`
- Never use `scrub: true` (equivalent to scrub: 1 but less predictable)
