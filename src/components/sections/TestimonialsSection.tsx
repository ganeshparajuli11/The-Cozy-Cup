import { AnimatedHeading } from '@/components/ui/AnimatedHeading'
import { testimonials } from '@/data/testimonials'

/**
 * 08 — Testimonials Section
 * Three testimonial cards on a cream background.
 * Clean, editorial layout — the text carries weight here.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-oat py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
        {/* Chapter label */}
        <span className="font-body text-mist text-xs tracking-[0.3em] uppercase block mb-12">
          08 — What People Say
        </span>

        {/* Heading */}
        <AnimatedHeading
          id="testimonials-heading"
          as="h2"
          className="font-display text-espresso text-4xl md:text-5xl leading-tight mb-16 md:mb-20 max-w-md"
        >
          Felt, not just tasted.
        </AnimatedHeading>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col justify-between"
              aria-label={`Testimonial from ${t.author}`}
            >
              {/* Opening quote mark */}
              <span
                className="font-display text-caramel text-6xl leading-none mb-4 block select-none"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="flex-1">
                <p className="font-accent italic text-espresso text-lg md:text-xl leading-snug mb-8">
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="border-t border-oat pt-6">
                <p className="font-body text-espresso text-sm font-medium">{t.author}</p>
                <p className="font-body text-mist text-xs tracking-widest uppercase mt-1">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
