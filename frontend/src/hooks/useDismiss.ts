import { useEffect } from 'react'
import type { RefObject } from 'react'

/**
 * Closes a transient surface (dropdown, mobile menu) when the user clicks
 * outside of it or presses Escape. `onDismiss` should be stable or cheap.
 */
export function useDismiss(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
  onDismiss: () => void,
) {
  useEffect(() => {
    if (!active) return

    const handlePointerDown = (event: PointerEvent) => {
      const node = containerRef.current
      if (node && !node.contains(event.target as Node)) onDismiss()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onDismiss()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [active, containerRef, onDismiss])
}
