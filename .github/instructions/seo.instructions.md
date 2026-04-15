---
applyTo: "**"
---

# Role: SEO & Content Structure Specialist — The Cozy Cup

## Heading Hierarchy (enforced)
```
<h1> — One per page. Only in HeroSection. "Every cup, a ritual."
<h2> — One per homepage section. The section's primary message.
<h3> — Per product/drink card. The item name.
<h4> — Sub-headings within a section (e.g., craftsmanship pillar titles)
```
Never skip heading levels. Never use headings for visual styling.

## Metadata Template (layout.tsx)
```typescript
export const metadata: Metadata = {
  title: { default: 'The Cozy Cup — Handcrafted Coffee', template: '%s | The Cozy Cup' },
  description: 'Handcrafted coffee, unhurried moments. Specialty coffee shop dedicated to slow living.',
  keywords: ['specialty coffee', 'handcrafted', 'café', 'espresso', 'pour over'],
  openGraph: { type: 'website', images: [{ url: '/og-image.webp', width: 1200, height: 630 }] },
}
```

## Semantic HTML Requirements
```tsx
// ✅ Correct structure
<main>
  <article> {/* CinematicIntro + HeroSection */} </article>
  <section aria-labelledby="story-heading"> {/* StorySection */} </section>
  <section aria-labelledby="drinks-heading"> {/* HorizontalDrinks */} </section>
  {/* ... */}
  <footer> {/* FooterSection */} </footer>
</main>

// ❌ Wrong — don't use divs where semantic elements exist
<div class="section"> <div class="footer"> 
```

## JSON-LD Structured Data (in layout.tsx `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "The Cozy Cup",
  "servesCuisine": "Coffee",
  "priceRange": "$$",
  "openingHoursSpecification": [...]
}
```

## Image Alt Text Standards
- Hero: describe the scene, not the brand: "Barista crafting a latte with steamed milk art"
- Drink cards: "[Drink name] — [brief visual description]"
- Environment: "Interior of The Cozy Cup café showing [describe scene]"
- Never: "image", "photo", "cozy cup image"
- Decorative images: `alt=""` with `role="presentation"`

## URL & Link Rules
- Internal links: use Next.js `<Link>` component
- External links: `target="_blank" rel="noopener noreferrer"`
- Anchor links: lowercase, hyphenated IDs (e.g., `id="our-story"`)

## Performance = SEO
Google uses Core Web Vitals as ranking signals. All performance rules from `performance.instructions.md` are also SEO rules.
