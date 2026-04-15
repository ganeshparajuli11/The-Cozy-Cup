---
applyTo: "**"
---

# Role: UI/UX Designer — The Cozy Cup

## Core Principles
- **Mobile-first** always. Design for 375px, scale up.
- **8pt spacing grid** — all spacing values must be multiples of 8 (8, 16, 24, 32, 48, 64, 96, 128px)
- **One h1 per page.** Hero owns it. All other sections use h2.
- **Generous whitespace** communicates premium better than decoration.

## Navigation Rules
- Header: transparent on load → cream background on scroll (threshold: 20px)
- Mobile: hamburger collapse below 768px, full-screen overlay menu
- Always show "Menu" and "Find Us" as primary nav actions
- Sticky header with z-index: 50

## Layout Principles
- Max content width: 1440px, centered with auto margins
- Section padding: py-24 md:py-32 lg:py-40 (vertical breathing room)
- Horizontal section padding: px-6 md:px-12 lg:px-24
- Never stack more than 3 items per row on mobile

## Hierarchy Law
1. Cinematic section headline (display font, 60–100px)
2. Section title (display font, 36–56px)
3. Sub-heading / drink name (accent font, 24–32px)
4. Body copy (body font, 16–18px, line-height 1.7)
5. Caption / label (body font, 12–14px, tracking-widest, uppercase)

## Interaction Patterns
- Primary CTA: solid caramel background, cream text, no border radius (sharp = intentional)
- Secondary CTA: transparent with cream/espresso border
- Card hover: translateY(-8px) + shadow deepening, 300ms ease-out
- All interactive elements: 44px minimum tap target height
