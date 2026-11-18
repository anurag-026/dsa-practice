import { useCallback, useState } from 'react'
import { topics, getQuestion } from '../data'
import { Sidebar, type Selection } from '../components/Sidebar'
import { ProblemView } from '../components/ProblemView'
import { useRegionZoom } from '../hooks/useRegionZoom'
import styles from './WorkspacePage.module.css'

export function WorkspacePage() {
  const [selection, setSelection] = useState<Selection>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {
    ref: contentZoomRef,
    zoom: contentZoom,
    style: contentZoomStyle,
    reset: resetContentZoom,
  } = useRegionZoom<HTMLDivElement>('dsa-zoom-question', 1)

  const handleSelect = useCallback((topicId: string, questionId: string) => {
    setSelection((prev) => {
      if (prev?.topicId === topicId && prev?.questionId === questionId) {
        return null
      }
      return { topicId, questionId }
    })
    setSidebarOpen(false)
  }, [])

  const question = selection
    ? getQuestion(selection.topicId, selection.questionId)
    : undefined

  return (
    <div className={styles.workspace}>
      <Sidebar
        topics={topics}
        selection={selection}
        onSelect={handleSelect}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div
        ref={contentZoomRef}
        className={styles.content}
        style={contentZoomStyle}
        title="Ctrl + scroll to zoom this panel"
      >
        <div className={styles.toolbar}>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setSidebarOpen(true)}
          >
            Problems
          </button>
          {contentZoom !== 1 && (
            <button
              type="button"
              className={styles.zoomReset}
              onClick={resetContentZoom}
              title="Reset question zoom"
            >
              {Math.round(contentZoom * 100)}%
            </button>
          )}
        </div>

        {contentZoom !== 1 && (
          <div className={styles.zoomBadgeDesktop}>
            <button
              type="button"
              className={styles.zoomReset}
              onClick={resetContentZoom}
              title="Reset question zoom"
            >
              Zoom {Math.round(contentZoom * 100)}%
            </button>
          </div>
        )}

        {question ? (
          <ProblemView question={question} />
        ) : (
          <div className={styles.empty}>
            <h1>Pick a problem</h1>
            <p>
              Choose a question from the sidebar. Click the same question again
              to hide it. Hover a panel and use Ctrl + scroll to zoom only that
              panel.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
