import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Keeps scroll position sensible across route changes: a hash navigates to the
 * matching section, a plain route change returns to the top. Honours
 * prefers-reduced-motion by skipping the smooth behaviour.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduced ? 'auto' : 'smooth'

    if (hash) {
      // Wait a frame so the target section has mounted.
      const id = requestAnimationFrame(() => {
        const target = document.querySelector(hash)
        if (target) target.scrollIntoView({ behavior, block: 'start' })
      })
      return () => cancelAnimationFrame(id)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
