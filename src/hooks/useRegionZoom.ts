import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react'

const MIN = 0.7
const MAX = 1.8
const STEP = 0.05

function clamp(value: number) {
  return Math.min(MAX, Math.max(MIN, value))
}

function readStored(key: string, fallback: number) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const n = Number.parseFloat(raw)
    return Number.isFinite(n) ? clamp(n) : fallback
  } catch {
    return fallback
  }
}

/**
 * Ctrl/Cmd + scroll while the pointer is over the element zooms only that region.
 */
export function useRegionZoom<T extends HTMLElement = HTMLElement>(
  storageKey: string,
  initial = 1,
): {
  ref: RefObject<T | null>
  zoom: number
  style: CSSProperties
  reset: () => void
} {
  const ref = useRef<T | null>(null)
  const [zoom, setZoom] = useState(() => readStored(storageKey, initial))

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(zoom))
    } catch {
      /* ignore */
    }
  }, [storageKey, zoom])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey && !event.metaKey) return
      event.preventDefault()
      event.stopPropagation()

      const direction = event.deltaY > 0 ? -1 : 1
      setZoom((current) =>
        clamp(Number((current + direction * STEP).toFixed(2))),
      )
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const reset = () => setZoom(1)

  return {
    ref,
    zoom,
    style: {
      zoom,
      // Firefox fallback (zoom unsupported)
      ['--region-zoom' as string]: String(zoom),
    } as CSSProperties,
    reset,
  }
}
