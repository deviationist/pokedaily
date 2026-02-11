# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript check + Vite production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

PokéDaily is a React 19 + TypeScript + Vite app — a gamified Pokédex where users discover random Pokémon, search by name, and maintain a collection (persisted to localStorage). Data comes from PokéAPI v2.

### Routing

TanStack Router with file-based routing in `src/routes/`. The route tree (`src/routeTree.gen.ts`) is auto-generated — don't edit it manually. Routes:
- `/` — Daily discovery (random Pokémon)
- `/search` — Search by name
- `/collection` — Caught Pokémon

The root route (`__root.tsx`) receives a `QueryClient` via router context and removes the HTML splash screen on mount.

### Data Fetching

TanStack React Query with a `queryOptions` pattern in `src/queries/pokemon.ts`. Queries are cached indefinitely (staleTime/gcTime: Infinity, no auto-refetch). Route loaders pre-fetch data before rendering.

### State Management

- **Server state:** TanStack React Query
- **App state:** Zustand store (`src/store/appStore.ts`) with `persist` middleware for automatic localStorage sync. Holds caught Pokémon list and actions. Use selective subscriptions: `useAppStore(state => state.caughtList)`
- **Initial load animation:** React Context (`src/contexts/`)

### Component Organization

- `src/components/Layout/` — App shell (MainLayout, Navigation, Logo, background, error state)
- `src/components/Pages/` — Page-level components (DailyDiscovery, PokemonSearch, CaughtPokemon)
- `src/components/ui/` — Reusable UI (PokemonCard with large/small variants, `cn()` utility)
- `src/hooks/` — Custom hooks
- `src/types/` — TypeScript interfaces (Pokemon types mirror PokéAPI response subset)

### Styling & Animation

Tailwind CSS v4 (utility-first, no custom CSS classes in components) + Motion (Framer Motion successor) for transitions. Class merging uses `cn()` from `src/components/ui/utils.ts` (clsx + tailwind-merge).

## Conventions

- Path alias: `@/*` → `src/*` (always use `@/` imports, not relative paths)
- 2-space indentation (enforced by `.editorconfig`)
- Strict TypeScript (`noUnusedLocals`, `noUnusedParameters`)
- Functional components only, logic extracted into custom `useX` hooks
- Props interfaces named `{ComponentName}Props`
