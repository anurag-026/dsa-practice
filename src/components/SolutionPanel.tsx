import { useState } from 'react'
import styles from './SolutionPanel.module.css'

export function SolutionPanel({ solution }: { solution?: string }) {
  const [open, setOpen] = useState(false)

  if (!solution) return null

  return (
    <section className={styles.row}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.chevron}>{open ? '▾' : '▸'}</span>
        Solution
      </button>

      {open && <div className={styles.body}>{solution}</div>}
    </section>
  )
}
