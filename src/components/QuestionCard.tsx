import { Link } from 'react-router-dom'
import type { Question } from '../types/question'
import { DifficultyBadge } from './DifficultyBadge'
import styles from './QuestionCard.module.css'

type Props = {
  topicId: string
  question: Question
}

export function QuestionCard({ topicId, question }: Props) {
  return (
    <Link to={`/topic/${topicId}/${question.id}`} className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.title}>{question.title}</h3>
        <DifficultyBadge difficulty={question.difficulty} />
      </div>
    </Link>
  )
}
