export type Difficulty = 'easy' | 'medium' | 'hard'

export type Hint = {
  id: string
  text: string
}

export type Question = {
  id: string
  title: string
  difficulty: Difficulty
  tags?: string[]
  problem: string
  examples?: string[]
  constraints?: string[]
  hints: Hint[]
  /** Full answer walkthrough — shown in a hidden panel like hints. */
  solution?: string
}

export type Topic = {
  id: string
  name: string
  description: string
  questions: Question[]
}
