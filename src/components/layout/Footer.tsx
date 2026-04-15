'use client'

import Link from 'next/link'

const SITE_LINKS = [
  { label: 'Menu', href: '#drinks' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'The Space', href: '#the-space' },
  { label: 'Find Us', href: '#visit' },
  { label: 'Contact', href: 'mailto:hello@thecozycup.com' },
]

const HOURS = [
  { days: 'Monday – Friday', time: '7:00 – 19:00' },
  { days: 'Saturday', time: '8:00 – 18:00' },
  { days: 'Sunday', time: '9:00 – 17:00' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10" id="visit">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl text-cream mb-4">The Cozy Cup</p>
            <p className="font-body text-mist text-sm leading-relaxed max-w-xs">
              Handcrafted coffee. Unhurried moments.
              A place to slow down.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/thecozycup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Cozy Cup on Instagram"
                className="font-body text-xs text-mist tracking-widest uppercase hover:text-caramel transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-body text-xs text-mist tracking-[0.2em] uppercase mb-6">Navigate</p>
            <ul className="space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-caramel transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-body text-xs text-mist tracking-[0.2em] uppercase mb-6">Hours</p>
            <ul className="space-y-3">
              {HOURS.map(({ days, time }) => (
                <li key={days}>
                  <p className="font-body text-sm text-cream/70">{days}</p>
                  <p className="font-body text-sm text-cream">{time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-body text-xs text-mist tracking-[0.2em] uppercase mb-6">Stay in Touch</p>
            <p className="font-body text-sm text-cream/70 mb-4 leading-relaxed">
              Seasonal menus, new coffees, and quiet updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                /* No backend yet — log for now */
                console.info('[The Cozy Cup] Newsletter signup:', data.get('email'))
                e.currentTarget.reset()
              }}
              className="flex flex-col gap-3"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="bg-transparent border border-cream/20 text-cream placeholder:text-mist/60 font-body text-sm px-4 py-3 focus:outline-none focus:border-caramel transition-colors"
              />
              <button
                type="submit"
                className="bg-caramel text-cream font-body text-sm tracking-widest uppercase px-6 py-3 hover:bg-roast transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8">
          <p className="font-body text-xs text-mist/50">
            © {year} The Cozy Cup. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-xs text-mist/50 hover:text-mist transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="font-body text-xs text-mist/50 hover:text-mist transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
