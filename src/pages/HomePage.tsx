import { Link } from 'react-router-dom'
import { topics } from '../data'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div>
      <header className={styles.hero}>
        <h1>Practice DSA by difficulty</h1>
        <p>
          Pick Easy, Medium, or Hard. Topics, hints, and solutions stay hidden
          on each problem until you open them.
        </p>
      </header>

      <ul className={styles.grid}>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topic/${topic.id}`} className={styles.topic}>
              <h2>{topic.name}</h2>
              <p>{topic.description}</p>
              <span className={styles.meta}>
                {topic.questions.length} question
                {topic.questions.length === 1 ? '' : 's'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
