# DSA Practice Site — Setup Plan

## Goal
A lightweight, frontend-only React app for practicing DSA questions. Questions are data-driven so new problems can be added without touching UI code. Each question has a **hidden hints** section (collapsed by default).

## Stack
| Choice | Why |
|--------|-----|
| Vite + React + TypeScript | Fast, minimal, scalable SPA |
| React Router | Topic / question routes |
| Plain CSS (CSS modules or global) | No heavy UI lib — keep bundle small |
| JSON / TS data files | Drop-in questions later without refactor |

No backend, no auth, no database for v1.

## Information Architecture
```
/                     → Home: list of topics/sections
/topic/:topicId       → Topic page: list of questions
/topic/:topicId/:qId  → Question detail + hidden hints
```

## Data Model (scalable)
```ts
type Hint = { id: string; text: string };
type Question = {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  tags?: string[];
  problem: string;       // markdown or plain text
  examples?: string[];
  constraints?: string[];
  hints: Hint[];         // revealed one-by-one or as accordion
};
type Topic = {
  id: string;
  name: string;
  description: string;
  questions: Question[];
};
```

Questions live under `src/data/` (e.g. `topics/arrays.ts`). A central `index.ts` registers all topics. When the question source arrives, we only add/edit data files.

## UI Features (v1 setup)
1. Home with topic cards
2. Topic page with question list (title + difficulty)
3. Question page: statement, examples, constraints
4. **Hints**: collapsed/hidden by default; user expands to reveal (optional progressive reveal)
5. Clean, readable typography; responsive layout
6. Placeholder sample topic so the UI is demoable before real questions land

## Folder Structure
```
src/
  components/     # HintPanel, QuestionCard, Layout, DifficultyBadge
  pages/          # Home, Topic, Question
  data/           # topics + questions (scalable drop zone)
  types/          # shared types
  styles/         # global CSS
  App.tsx
  main.tsx
```

## Implementation Steps
1. [x] Scaffold Vite React-TS project in repo root
2. [x] Add React Router + base layout / styles
3. [x] Define types + sample placeholder data
4. [x] Build Home → Topic → Question pages
5. [x] Build HintPanel (hidden until toggled; progressive reveal)
6. [x] Wire routes; verify build
7. [x] Document how to add questions (README) — wait for real question source before filling data

## Out of Scope (for later)
- Code editor / judge
- Solutions section
- Progress sync / accounts
- Search/filter beyond basic topic browse
- Markdown rendering polish (can add `react-markdown` when content needs it)

## Success Criteria
- `npm run dev` starts a working app
- Sample topic + question + hidden hints work end-to-end
- Adding a new topic is “drop a data file + register in index”
- Bundle stays lean (no unnecessary dependencies)
