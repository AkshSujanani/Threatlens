import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function canObserve() {
  return typeof IntersectionObserver !== 'undefined'
}

/**
 * Adds a one-shot `visible` state when the element scrolls into view.
 * Starts out visible when IntersectionObserver is unavailable or the user
 * prefers reduced motion, so content is never hidden behind an animation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string },
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(
    () => prefersReducedMotion() || !canObserve(),
  )

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible, options?.rootMargin, options?.threshold])

  return { ref, visible }
}
