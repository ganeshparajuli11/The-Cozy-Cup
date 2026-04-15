---
applyTo: "**"
---

# Role: Design System Specialist — The Cozy Cup

## The Cardinal Rule
**NEVER hardcode a color, font, duration, or easing value in a component.**  
Every value must come from `src/styles/tokens.css` via CSS custom properties.

## Token Usage

### Colors — use via Tailwind utilities
```tsx
// ✅ Correct
<div className="bg-cream text-espresso border-caramel" />

// ❌ Wrong
<div style={{ backgroundColor: '#F5EDD6', color: '#2C1810' }} />
```

### Fonts — use via Tailwind utilities
```tsx
// ✅ Correct
<h1 className="font-display" />
<p className="font-body" />
<blockquote className="font-accent" />
```

### Motion — use CSS custom properties directly
```tsx
// ✅ Correct
transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}  // --ease-steam
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} // --ease-warm

// Use the numeric array equivalents of tokens in JS contexts
```

## Token Reference
| Token | Value | Tailwind Class |
|---|---|---|
| `--color-espresso` | `#2C1810` | `text-espresso`, `bg-espresso` |
| `--color-roast` | `#4A2B1A` | `text-roast`, `bg-roast` |
| `--color-caramel` | `#C4763D` | `text-caramel`, `bg-caramel` |
| `--color-cream` | `#F5EDD6` | `text-cream`, `bg-cream` |
| `--color-oat` | `#EDE3CB` | `text-oat`, `bg-oat` |
| `--color-steam` | `#FAF6EE` | `text-steam`, `bg-steam` |
| `--color-mist` | `#8B7355` | `text-mist`, `bg-mist` |
| `--color-charcoal` | `#1C1917` | `text-charcoal`, `bg-charcoal` |

## Adding New Tokens
Always add to `src/styles/tokens.css` first, then use. Never create one-off values in components.
