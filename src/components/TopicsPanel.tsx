import { useState } from 'react'
import styles from './TopicsPanel.module.css'

export function TopicsPanel({ topics }: { topics: string[] }) {
  const [open, setOpen] = useState(false)

  if (topics.length === 0) return null

  return (
    <section className={styles.row}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.chevron}>{open ? '▾' : '▸'}</span>
        Topics
      </button>

      {open && (
        <ul className={styles.list}>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
