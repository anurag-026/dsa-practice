import type { Question } from '../types/question'
import { DifficultyBadge } from './DifficultyBadge'
import { HintPanel } from './HintPanel'
import { TopicsPanel } from './TopicsPanel'
import { SolutionPanel } from './SolutionPanel'
import styles from './ProblemView.module.css'

export function ProblemView({ question }: { question: Question }) {
  return (
    <article className={styles.article} key={question.id}>
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
