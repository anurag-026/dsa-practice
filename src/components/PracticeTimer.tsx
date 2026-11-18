import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './PracticeTimer.module.css'

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  if (h > 0) return `${h}:${mm}:${ss}`
  return `${mm}:${ss}`
}

export function PracticeTimer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!running) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [running])

  const start = useCallback(() => setRunning(true), [])
  const pause = useCallback(() => setRunning(false), [])
  const restart = useCallback(() => {
    setRunning(false)
    setSeconds(0)
  }, [])

  return (
    <div className={styles.timer} aria-label="Practice timer">
      <span className={styles.display} aria-live="polite">
        {formatTime(seconds)}
      </span>
      <div className={styles.actions}>
        {!running ? (
          <button type="button" className={styles.btn} onClick={start}>
            Start
          </button>
        ) : (
          <button type="button" className={styles.btn} onClick={pause}>
            Pause
          </button>
        )}
        <button
          type="button"
          className={`${styles.btn} ${styles.ghost}`}
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  )
}
