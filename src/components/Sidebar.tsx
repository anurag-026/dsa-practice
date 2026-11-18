import { useState } from 'react'
import type { Topic } from '../types/question'
import { useRegionZoom } from '../hooks/useRegionZoom'
import styles from './Sidebar.module.css'

export type Selection = {
  topicId: string
  questionId: string
} | null

type Props = {
  topics: Topic[]
  selection: Selection
  onSelect: (topicId: string, questionId: string) => void
  open: boolean
  onClose: () => void
}

export function Sidebar({ topics, selection, onSelect, open, onClose }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(topics.map((t) => [t.id, true])),
  )
  const { ref: zoomRef, zoom, style: zoomStyle, reset } =
    useRegionZoom<HTMLElement>('dsa-zoom-sidebar', 1)

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <>
      {open && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close sidebar"
          onClick={onClose}
        />
      )}
      <aside
        ref={zoomRef}
        className={`${styles.sidebar} ${open ? styles.open : ''}`}
        style={zoomStyle}
        title="Ctrl + scroll to zoom this panel"
      >
        <div className={styles.sidebarHead}>
          <h2>Problems</h2>
          <div className={styles.headActions}>
            {zoom !== 1 && (
              <button
                type="button"
                className={styles.zoomReset}
                onClick={reset}
                title="Reset sidebar zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
            )}
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
        </div>

        <nav className={styles.nav}>
          {topics.map((topic) => {
            const isOpen = expanded[topic.id] !== false
            return (
              <div key={topic.id} className={styles.section}>
                <button
                  type="button"
                  className={styles.sectionBtn}
                  onClick={() => toggleSection(topic.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.chevron}>{isOpen ? '▾' : '▸'}</span>
                  <span className={styles.sectionName}>{topic.name}</span>
                  <span className={styles.count}>{topic.questions.length}</span>
                </button>

                {isOpen && (
                  <ul className={styles.list}>
                    {topic.questions.map((q, i) => {
                      const active =
                        selection?.topicId === topic.id &&
                        selection?.questionId === q.id
                      return (
                        <li key={q.id}>
                          <button
                            type="button"
                            className={`${styles.item} ${active ? styles.active : ''}`}
                            onClick={() => onSelect(topic.id, q.id)}
                          >
                            <span className={styles.num}>{i + 1}</span>
                            <span className={styles.title}>{q.title}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
