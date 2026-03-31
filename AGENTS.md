# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

Monorepo with a React Native/Expo frontend (`/app`) and a NestJS backend (`/server`).

## Commands

### Frontend (`/app`) — uses npm

| Task | Command |
|------|---------|
| Start dev server | `npm start` (or `expo start`) |
| iOS | `npm run ios` |
| Android | `npm run android` |
| Web | `npm run web` |
| Lint | `npm run lint` |

### Backend (`/server`) — uses pnpm

| Task | Command |
|------|---------|
| Dev server (watch) | `pnpm start:dev` |
| Build | `pnpm build` |
| Start prod | `pnpm start:prod` |
| Lint (auto-fix) | `pnpm lint` |
| Format | `pnpm format` |
| All tests | `pnpm test` |
| Single test | `pnpm test -- <path-or-pattern>` |
| Watch tests | `pnpm test:watch` |
| Coverage | `pnpm test:cov` |
| E2E tests | `pnpm test:e2e` |

## Architecture

### Frontend (`/app`)

- **Expo Router** with file-based routing in `/app/app/`
- Tab navigation: `(tabs)/index.tsx` (Home), `(tabs)/explore.tsx` (Explore)
- Layouts: `_layout.tsx` at root and tab level
- Path alias: `@/*` → `./` (configured in tsconfig)
- React Compiler and New Architecture enabled
- Light/dark theme system via `constants/theme.ts` and `useThemeColor` hook
- Reusable components in `/app/components/`, UI primitives in `/app/components/ui/`

### Backend (`/server`)

- **NestJS** modular architecture: Modules → Controllers → Services
- Entry point: `src/main.ts` (port from `PORT` env var, default 3000)
- Single `AppModule` currently — add feature modules as the app grows
- Jest for unit and e2e testing (`test/` directory, `jest-e2e.json` config)
- Prettier: single quotes, trailing commas (`.prettierrc`)
