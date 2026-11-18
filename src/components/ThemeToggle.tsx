import { useTheme } from '../theme/ThemeProvider'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <span className={styles.icon} aria-hidden>
        {isDark ? '☀' : '☾'}
      </span>
      <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
