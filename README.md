# DSA Practice

Lightweight, frontend-only React app for practicing DSA questions by difficulty. Each question has **hidden topics**, **hints**, and a **solution** panel (collapsed by default).

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## How to add questions

1. Create a file under `src/data/topics/` (e.g. `graphs.ts`) that exports a `Topic`.
2. Register it in `src/data/index.ts` by importing and appending to the `topics` array.

Shape (see `src/types/question.ts`):

```ts
{
  id: 'graphs',
  name: 'Graphs',
  description: '...',
  questions: [
    {
      id: 'clone-graph',
      title: 'Clone Graph',
      difficulty: 'medium', // easy | medium | hard
      tags: ['bfs', 'dfs'],
      problem: '...',
      examples: ['...'],
      constraints: ['...'],
      hints: [
        { id: 'h1', text: '...' },
        { id: 'h2', text: '...' },
      ],
    },
  ],
}
```

No UI changes needed — routes and lists update from the data registry.

## UI

Single workspace page: sidebar lists Easy / Medium / Hard problems. Click a title to open it; click again to hide. Header timer supports Start / Pause / Restart.

## Plan

See [PLAN.md](./PLAN.md) for architecture and scope.
