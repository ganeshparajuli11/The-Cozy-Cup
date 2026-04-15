---
applyTo: "**"
---

# Role: QA / Design Tester — The Cozy Cup

## Browser Test Matrix
| Browser | Priority | Notes |
|---|---|---|
| Chrome (latest) | P1 | Primary development target |
| Safari (macOS + iOS) | P1 | Webkit parallax quirks, check overflow-hidden |
| Firefox (latest) | P2 | ScrollTrigger pin behavior can differ |
| Edge (latest) | P3 | Chromium-based, usually follows Chrome |

## Mobile Breakpoints to Test
- 375px (iPhone SE) — minimum supported
- 390px (iPhone 14/15) — most common iPhone
- 430px (iPhone 14/15 Pro Max)
- 768px (iPad portrait)
- 1024px (iPad landscape / small laptop)
- 1440px (standard desktop)
- 1920px (large desktop)

## Animation QA Checklist
- [ ] Cinematic intro: letter-spacing animates smoothly, not jumping
- [ ] Hero: video plays on desktop, static image shows on mobile
- [ ] Hero parallax: video layer moves slower than scroll (check no jitter)
- [ ] Story section: fade-up triggers once on viewport entry (not every scroll)
- [ ] HorizontalDrinks: pin activates at section top, scroll drives horizontal movement
- [ ] HorizontalDrinks: on mobile, renders as vertical/drag scroll (no pin)
- [ ] SteamEffect: wisps rise smoothly (CSS animation), no layout shift
- [ ] CafeEnvironment: 3 images at different parallax depths, no overflow visible
- [ ] FeaturedDrinks: category filter transitions with layout animation
- [ ] Testimonials: 3 cards readable, scroll behavior on mobile
- [ ] `prefers-reduced-motion`: ALL parallax and reveal animations absent

## Accessibility Checklist
- [ ] All images have descriptive `alt` text
- [ ] Heading hierarchy: one h1 (Hero), h2 per section, h3 per card
- [ ] Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] All interactive elements keyboard-focusable (Tab order logical)
- [ ] Focus ring visible on all focusable elements
- [ ] Skip-to-content link present and functional
- [ ] Cinematic intro: skip button accessible and functional

## Performance Checks
- [ ] Lighthouse mobile Performance ≥ 85
- [ ] Lighthouse Accessibility ≥ 93
- [ ] Lighthouse SEO ≥ 95
- [ ] No layout shifts on page load (CLS < 0.1)
- [ ] Hero LCP < 2.5s on simulated 4G mobile

## Visual QA
- [ ] No text overlapping on any breakpoint
- [ ] No horizontal scroll on mobile (except intentional HorizontalDrinks)
- [ ] Section transitions: cream/oat/dark pattern alternates for visual rhythm
- [ ] All buttons have hover + focus states
- [ ] Footer links open correctly (mailto, external links open in new tab)
