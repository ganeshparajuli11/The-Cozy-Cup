// ================================================================
// SHARED TYPES — The Cozy Cup
// ================================================================

export interface Drink {
  id: string
  name: string
  category: 'espresso' | 'filter' | 'cold' | 'seasonal'
  description: string
  price: number
  /** src path relative to /public — e.g. '/images/drinks/latte.webp' */
  image: string
  flavourNotes?: string[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  detail: string
}

export interface NavLink {
  label: string
  href: string
  external?: boolean
}
