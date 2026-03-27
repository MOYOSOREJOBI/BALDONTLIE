# BALDONTLIE

Premium football intelligence frontend with scouting, player discovery, transfers, predictions, social features, and a dedicated Games section led by `Market XI`.

## Repo Layout

The working application lives in `source-code/`.

Important paths:

- `source-code/client/` - React + Vite frontend
- `source-code/server/` - Express server for dev and production serving
- `source-code/shared/` - shared schema and cross-cutting code
- `REPO_OVERVIEW.md` - detailed audit and structure document

## Current Status

This repository is frontend-heavy and mock-data-driven right now.

What is in place:

- premium dark football UI
- multi-page product shell
- dashboard, players, transfers, predictions, rankings, and other football product screens
- new `Games` section
- fully designed `Market XI` frontend simulation

What is not in place yet:

- real backend APIs
- persistent database-backed product behavior
- full auth flow
- tests and linting

## Local Development

From `source-code/`:

```bash
npm install
npm run dev
```

The app has recently been running locally at:

```text
http://127.0.0.1:5050
```

## Scripts

From `source-code/package.json`:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run check`
- `npm run db:push`

## Documentation

For a more detailed explanation of the repo structure, strengths, weaknesses, and current state, see:

- `REPO_OVERVIEW.md`
