import { Link, useParams } from 'react-router-dom'
import { getQuestion, getTopic } from '../data'
import { DifficultyBadge } from '../components/DifficultyBadge'
import { HintPanel } from '../components/HintPanel'
import { TopicsPanel } from '../components/TopicsPanel'
import { SolutionPanel } from '../components/SolutionPanel'
import styles from './QuestionPage.module.css'

export function QuestionPage() {
  const { topicId = '', questionId = '' } = useParams()
  const topic = getTopic(topicId)
  const question = getQuestion(topicId, questionId)

  if (!topic || !question) {
    return (
      <div className={styles.missing}>
        <h1>Question not found</h1>
        <Link to="/">Back to sections</Link>
      </div>
    )
  }

  return (
    <article>
      <nav className={styles.crumb}>
        <Link to="/">Sections</Link>
        <span>/</span>
        <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
        <span>/</span>
        <span>{question.title}</span>
      </nav>

      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1>{question.title}</h1>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
      </header>

      <section className={styles.block}>
        <h2>Problem</h2>
        <p className={styles.prose}>{question.problem}</p>
      </section>

      {question.examples && question.examples.length > 0 && (
        <section className={styles.block}>
          <h2>Examples</h2>
          {question.examples.map((ex, i) => (
            <pre key={i} className={styles.example}>
              {ex}
            </pre>
          ))}
        </section>
      )}

      {question.constraints && question.constraints.length > 0 && (
        <section className={styles.block}>
          <h2>Constraints</h2>
          <ul className={styles.constraints}>
            {question.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      <TopicsPanel topics={question.tags ?? []} />
      <HintPanel hints={question.hints} />
      <SolutionPanel solution={question.solution} />
    </article>
  )
}
