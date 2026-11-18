import { useState } from 'react'
import type { Hint } from '../types/question'
import styles from './HintPanel.module.css'

export function HintPanel({ hints }: { hints: Hint[] }) {
  const [sectionOpen, setSectionOpen] = useState(false)
  const [revealed, setRevealed] = useState(0)

  if (hints.length === 0) return null

  return (
    <section className={styles.row}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setSectionOpen((o) => !o)}
        aria-expanded={sectionOpen}
      >
        <span className={styles.chevron}>{sectionOpen ? '▾' : '▸'}</span>
        Hints
      </button>

      {sectionOpen && (
        <div className={styles.body}>
          <ol className={styles.list}>
            {hints.slice(0, revealed).map((hint, i) => (
              <li key={hint.id} className={styles.item}>
                <span className={styles.index}>{i + 1}.</span>
                <p>{hint.text}</p>
              </li>
            ))}
          </ol>

          {revealed < hints.length ? (
            <button
              type="button"
              className={styles.reveal}
              onClick={() => setRevealed((n) => n + 1)}
            >
              Reveal hint {revealed + 1}/{hints.length}
            </button>
          ) : (
            <p className={styles.done}>All hints shown.</p>
          )}
        </div>
      )}
    </section>
  )
}
