/** 
 * SteamEffect — pure CSS animated steam wisps.
 * Uses .steam-wisp class defined in globals.css.
 * Automatically hidden via CSS when prefers-reduced-motion is set.
 */
interface SteamEffectProps {
  className?: string
  /** Number of wisps. Default 3. */
  count?: number
}

export function SteamEffect({ className = '', count = 3 }: SteamEffectProps) {
  return (
    <div
      className={`flex items-end justify-center gap-3 ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="steam-wisp"
          style={{ animationDelay: `${i * 0.85}s` }}
        />
      ))}
    </div>
  )
}
