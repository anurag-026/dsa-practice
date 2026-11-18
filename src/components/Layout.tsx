import { Outlet } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { PracticeTimer } from './PracticeTimer'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>DSA Practice</div>
        <div className={styles.nav}>
          <PracticeTimer />
          <ThemeToggle />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
