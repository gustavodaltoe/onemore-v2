# One More V2 App

Expo / React Native client for One More V2.

## Scripts

```bash
npm install
npm start
npm run ios
npm run android
npm run web
npm run lint
npm run typecheck
npm test
```

## Current surfaces

- `app/(tabs)/index.tsx`: reusable dark dashboard playground built from local UI primitives.
- `app/(tabs)/explore.tsx`: launchpad screen for product pillars, release scope, and platform rules.
- `components/ui/*`: shared mobile primitives such as button, badge, card, stat card, and client row.

## Product reference

- `../docs/project.md`: high-level product definition and scope notes.

## Testing

- `npm test`: Jest component coverage.
- `npm run lint`: Expo ESLint config.
- `npm run typecheck`: strict TypeScript pass.
