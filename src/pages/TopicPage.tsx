import { Link, useParams } from 'react-router-dom'
import { getTopic } from '../data'
import { QuestionCard } from '../components/QuestionCard'
import styles from './TopicPage.module.css'

export function TopicPage() {
  const { topicId = '' } = useParams()
  const topic = getTopic(topicId)

  if (!topic) {
    return (
      <div className={styles.missing}>
        <h1>Section not found</h1>
        <Link to="/">Back to sections</Link>
      </div>
    )
  }

  return (
    <div>
      <nav className={styles.crumb}>
        <Link to="/">Sections</Link>
        <span>/</span>
        <span>{topic.name}</span>
      </nav>

      <header className={styles.header}>
        <h1>{topic.name}</h1>
        <p>{topic.description}</p>
      </header>

      <ul className={styles.list}>
        {topic.questions.map((q) => (
          <li key={q.id}>
            <QuestionCard topicId={topic.id} question={q} />
          </li>
        ))}
      </ul>
    </div>
  )
}
