import type { Question, Topic } from '../types/question'
import { easyTopic } from './topics/easy'
import { mediumTopic } from './topics/medium'
import { hardTopic } from './topics/hard'
import { screenshotQuestions, titleAliases } from './screenshot-batch'

function titlesMatch(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase()
}

function screenshotMatchesExisting(shot: Question, existing: Question): boolean {
  if (titlesMatch(shot.title, existing.title)) return true
  const aliases = titleAliases[shot.title] ?? [shot.title]
  return aliases.some((alias) => titlesMatch(alias, existing.title))
}

/**
 * Overlay screenshot content onto matching questions (by title/alias).
 * Unmatched screenshots are appended to the matching difficulty section.
 * Matched questions are moved into the screenshot's difficulty if needed.
 */
function mergeScreenshots(base: Topic[]): Topic[] {
  const sections: Topic[] = base.map((t) => ({
    ...t,
    questions: [...t.questions],
  }))

  const findSection = (id: string) => sections.find((s) => s.id === id)!

  for (const shot of screenshotQuestions) {
    let removed: Question | undefined

    for (const section of sections) {
      const idx = section.questions.findIndex((q) =>
        screenshotMatchesExisting(shot, q),
      )
      if (idx >= 0) {
        removed = section.questions.splice(idx, 1)[0]
        break
      }
    }

    const target = findSection(shot.difficulty)
    const merged: Question = removed
      ? {
          ...shot,
          id: removed.id,
        }
      : shot

    const dup = target.questions.findIndex(
      (q) => titlesMatch(q.title, merged.title) || q.id === merged.id,
    )
    if (dup >= 0) target.questions[dup] = merged
    else target.questions.push(merged)
  }

  return sections
}

/**
 * Register every section here. To add a new section:
 * 1. Create src/data/topics/<id>.ts exporting a Topic
 * 2. Import and append it to `baseTopics` below
 */
const baseTopics: Topic[] = [easyTopic, mediumTopic, hardTopic]

export const topics: Topic[] = mergeScreenshots(baseTopics)

export function getTopic(topicId: string): Topic | undefined {
  return topics.find((t) => t.id === topicId)
}

export function getQuestion(
  topicId: string,
  questionId: string,
): Question | undefined {
  return getTopic(topicId)?.questions.find((q) => q.id === questionId)
}
