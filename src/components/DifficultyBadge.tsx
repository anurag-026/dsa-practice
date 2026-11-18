import type { Difficulty } from '../types/question'
import styles from './DifficultyBadge.module.css'

const labels: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
}

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className={`${styles.badge} ${styles[difficulty]}`}>
      {labels[difficulty]}
    </span>
  )
}
