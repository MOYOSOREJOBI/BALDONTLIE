# Repo Overview

This file is the exact current-state reference for the BALDONTLIE repo.

Use this file for:

- what currently exists
- where files currently live
- what each current repo area does
- which files are active source-of-truth files right now

Do not use this file for:

- roadmap planning
- historical narrative
- old decisions
- future recommendations

If the repo changes, this file should be rewritten so it reflects the repo exactly as it is now.

---

## Current Repo Snapshot

Current top-level working areas:

- `source-code/`
  The implementation source of truth for the actual product app.
- `frontend-demo/`
  A standalone frontend-only mirror for demos and UI review.
- `DOCUMENTATION_AND_RESEARCH/`
  The active documentation and research set.
- `scripts/`
  Small root helper scripts for repo cleanup and demo sync.

Current top-level files:

- `.editorconfig`
  Shared formatting defaults for common file types.
- `.gitignore`
  Repo ignore rules, including generated output and local noise.
- `README.md`
  Root repo entry point that points to the real docs and working areas.
- `REPO_OVERVIEW.md`
  Thin root pointer that sends readers to this file.
- `package.json`
  Root helper scripts for bootstrap, check, build, demo sync, and cleanup.

Current generated or non-authoritative areas:

- `.git/`
  Git metadata.
- `source-code/node_modules/`
  Installed dependencies for the main app.
- `frontend-demo/node_modules/`
  Installed dependencies for the demo app.
- `source-code/dist/`
  Built output for the main app.
- `frontend-demo/dist/`
  Built output for the demo app.
- `source-code/.cache/`
- `source-code/.local/`
- `source-code/.upm/`
- `source-code/.agents/`
  Local tool and environment directories that are not the product source of truth.

Current file-count snapshot used for this overview:

- `DOCUMENTATION_AND_RESEARCH/`: `91` files
- `source-code/` excluding generated/runtime directories: `159` files
- `frontend-demo/` excluding generated/runtime directories: `130` files

---

## Root Workflow Files

### `package.json`

Current root scripts:

- `npm run bootstrap`
  Installs dependencies in `source-code/` and `frontend-demo/`.
- `npm run dev`
  Runs the main app from `source-code/`.
- `npm run dev:demo`
  Runs the standalone demo from `frontend-demo/`.
- `npm run check`
  Runs TypeScript checks in both the main app and the demo.
- `npm run check:app`
  Runs TypeScript check in `source-code/`.
- `npm run check:demo`
  Runs TypeScript check in `frontend-demo/`.
- `npm run build`
  Builds both the main app and the demo.
- `npm run build:app`
  Builds the main app only.
- `npm run build:demo`
  Builds the demo only.
- `npm run sync:demo`
  Copies the frontend app source and public assets from `source-code/client/` into `frontend-demo/`.
- `npm run clean:os`
  Removes `.DS_Store` files from the repo.

### `scripts/sync-frontend-demo.mjs`

Current behavior:

- deletes `frontend-demo/src`
- deletes `frontend-demo/public`
- copies `source-code/client/src` into `frontend-demo/src`
- copies `source-code/client/public` into `frontend-demo/public`
- copies `source-code/client/index.html` into `frontend-demo/index.html`
- skips `.DS_Store` files during the copy

This means `frontend-demo/` is currently maintained as a mirror of the frontend app, not as an independent product surface.

### `scripts/remove-ds-store.mjs`

Current behavior:

- recursively walks the repo
- skips `.git`
- removes `.DS_Store` files

---

## Documentation And Research

The current active documentation directory is `DOCUMENTATION_AND_RESEARCH/`.

Current documentation authority split:

- `BALDONTLIE_PRODUCTION_PLAN.md`
  Canonical strategy and locked decision record.
- `BALDONTLIE_PRODUCTION_CHECKLIST.md`
  Execution companion and operational checklist.
- `WORKING_CONVENTIONS.md`
  Day-to-day repo rules.
- `PROGRESS.md`
  Append-only history log of work done.
- `REPO_OVERVIEW.md`
  Exact current-state repo reference.
- `DEV_START_HERE.md`
  First-session handoff for AI-assisted development.
- `PRODUCTION_RELEASE_RUNBOOK.md`
  Release/operator workflow.
- `ROUTE_INVENTORY.md`
  Current route list and route-state notes.
- `FRONTEND_VISUAL_REFERENCE.md`
  Screenshot-backed visual reference of the current frontend.
- `TASK_EXECUTION_TEMPLATE.md`
  Reusable template for structured task execution.

Current research/supporting files:

- `PERPLEXITY_RESEARCH.md`
- `CHATGPT_DEEP_RESEARCH.md`
- `CHAT_EXTENDED_RESEARCH.md`
- `AI_RESEARCH.md`
- `GEMINI_RESEARCH.md`
- `ULTIMATE_FOOTBALL_PROJECT_PLAN.md`
- `FOOTBALL_RESEARCH_PROMPT.md`

Current non-markdown item in this directory:

- `USE THIS WRITING STYLE.docx`
  A writing-style reference asset that currently remains in the docs folder.

Current visual asset directory:

- `assets/screenshots/`
  Stores screenshots used by the documentation set, including append-only historical screenshot folders for major frontend passes.

---

## Main Product App: `source-code/`

`source-code/` is the implementation source of truth.

### Current root files in `source-code/`

- `package.json`
  Main app package config and scripts.
- `package-lock.json`
  Lockfile for the main app.
- `tsconfig.json`
  TypeScript config.
- `vite.config.ts`
  Vite config for the app frontend build.
- `vite-plugin-meta-images.ts`
  Custom Vite helper related to meta images.
- `postcss.config.js`
  PostCSS config.
- `drizzle.config.ts`
  Drizzle config.
- `.env.example`
  Example env file for the app.
- `components.json`
  shadcn/ui style component config.

### Current build/runtime directories in `source-code/`

- `client/`
  Frontend application.
- `server/`
  Express runtime and API scaffold.
- `shared/`
  Shared schema/types layer.
- `script/`
  Build script directory.
- `attached_assets/`
  Local asset bucket referenced by the app.

### `source-code/package.json`

Current scripts:

- `npm run dev:client`
  Runs Vite directly on port `5000`.
- `npm run dev`
  Runs the Express/Vite development server through `server/index.ts`.
- `npm run build`
  Runs `tsx script/build.ts`.
- `npm run start`
  Starts the built server from `dist/index.cjs`.
- `npm run check`
  Runs TypeScript typecheck.
- `npm run db:push`
  Runs Drizzle schema push.

### `source-code/script/build.ts`

Current responsibility:

- builds the client with Vite
- bundles the server with esbuild

---

## Frontend App: `source-code/client/`

The frontend is a React + Vite app.

### Current frontend entry files

- `client/index.html`
  HTML entry for the frontend.
- `client/public/favicon.png`
  Frontend favicon.
- `client/public/opengraph.jpg`
  Sharing image asset.
- `client/src/main.tsx`
  React mount entry.
- `client/src/App.tsx`
  Current route registry for the app.
- `client/src/index.css`
  Global styles, themes, design system tokens, and shared page-layout helpers.

### Current route map in `client/src/App.tsx`

Current registered routes:

- `/`
- `/dashboard`
- `/players`
- `/players/:id`
- `/compare/players`
- `/compare/teams`
- `/team-fit`
- `/transfers`
- `/news`
- `/fan-sentiment`
- `/predictions`
- `/my-player`
- `/rankings`
- `/tables`
- `/odds`
- `/social`
- `/games`
- `/games/market-xi`
- `/games/prediction-arena`
- `/games/fantasy-drafts`
- `/games/challenges`
- `/technical-overlay`
- `/live-sim`
- `/scout-workspace`
- `/storyline`
- `/match-rooms`
- `/games/director-mode`
- catch-all not-found route

Current route-loading behavior:

- routes are lazy-loaded with `React.lazy`
- the app uses a `Suspense` fallback loading shell

### Current frontend directory structure

- `client/src/assets/`
  Local frontend assets.
- `client/src/assets/images/`
  Product illustration and image files such as `world-map.png`, `match-action.png`, and `transfer-graphic.png`.
- `client/src/components/`
  Reusable frontend components.
- `client/src/components/chat/`
  Contains `AIChatBot.tsx`.
- `client/src/components/layout/`
  Contains `Shell.tsx`, the current application frame.
- `client/src/components/shared/`
  Shared component area, now including the reusable `media-story-card.tsx` module and the `system-readiness-card.tsx` backend-handoff panel used on the dashboard.
- `client/src/components/ui/`
  Design-system-style primitives and wrappers.
- `client/src/data/`
  Current mock data layer.
- `client/src/features/`
  Feature-structured areas; currently the `games` area is the main example.
- `client/src/hooks/`
  Shared frontend hooks.
- `client/src/lib/`
  Shared utilities and query setup.
- `client/src/locales/`
  i18n setup, currently split into `config.ts`, `helpers.ts`, `resources.ts`, and `i18n.ts`. `resources.ts` contains 25 locale blocks (en, ar, fr, pt-BR, es, ja, yo, hi, zh-CN, ig, sw, ko, de, ru, pl, it, nl, tr, am, ha, zu, la, he, jam, id) with ~865 flat-string keys each.
- `client/src/pages/`
  Route-level pages.

### Current layout shell

`client/src/components/layout/Shell.tsx` currently provides:

- application frame
- sidebar navigation
- collapsible desktop sidebar behavior
- top navigation
- centered max-width header rhythm
- cleaner two-row header structure
- stronger mobile header/page-context behavior
- calmer utility-control density
- language selection
- theme selection
- mode selection
- route status badges driven by shared metadata
- a slimmer primary shell that only exposes `launch`, `beta`, and `demo` routes

Current shell navigation groups:

- `Core`
- `Analysis`
- `Simulation`
- `Labs`

Current shell truth note:

- `client/src/components/chat/AIChatBot.tsx` still exists in the repo
- the floating AI widget is not currently presented in the main app shell
- the shell route list is now driven by `shared/product-status.ts`

### Current reusable UI component layer

The repo currently includes a broad reusable UI set in `client/src/components/ui/`, including:

- accordions
- alerts and alert dialogs
- avatars
- badges
- breadcrumbs
- button primitives
- cards
- carousels
- charts
- dialogs
- drawers
- dropdowns
- empty states
- forms and fields
- hover cards
- inputs
- menus
- pagination
- popovers
- progress
- resizable panels
- scroll areas
- selects
- sheets
- sidebar primitives
- skeletons
- sliders
- switches
- tables
- tabs
- textareas
- toasts
- toggles
- tooltips

### Current data/support files

- `client/src/data/mock.ts`
  Central mock-data source used by multiple prototype surfaces.
- `client/src/lib/queryClient.ts`
  React Query setup and shared fetch helpers.
- `client/src/lib/utils.ts`
  Shared utility helpers.
- `client/src/hooks/use-mobile.tsx`
  Mobile breakpoint helper.
- `client/src/hooks/use-toast.ts`
  Toast hook.
- `client/src/locales/i18n.ts`
  i18n configuration.

### Current page files in `client/src/pages/`

Current route files:

- `compare/players.tsx`
  Player comparison page.
- `compare/teams.tsx`
  Team comparison page.
- `dashboard.tsx`
  Main dashboard page, now rebuilt as a fuller multi-zone football intelligence surface.
- `fan-sentiment.tsx`
  Sentiment demo page.
- `games/challenges.tsx`
  Challenges route wrapper.
- `games/fantasy-drafts.tsx`
  Fantasy Drafts route wrapper.
- `games/index.tsx`
  Games hub route wrapper.
- `games/market-xi.tsx`
  Market XI route wrapper.
- `games/prediction-arena.tsx`
  Prediction Arena route wrapper.
- `index.tsx`
  Landing page.
- `live-sim.tsx`
  Match flow simulation page.
- `match-rooms.tsx`
  Match rooms demo page, now fuller and more ecosystem-driven.
- `my-player.tsx`
  My shortlist / personal space page.
- `news.tsx`
  News/following feed page, now rebuilt as a denser editorial football feed with a right rail and image-backed story modules.
- `not-found.tsx`
  Fallback route page.
- `odds.tsx`
  Market signals lab page.
- `players/[id].tsx`
  Player profile page.
- `players/index.tsx`
  Player explorer page.
- `predictions.tsx`
  Scenario outlooks page.
- `rankings.tsx`
  Rankings page, now rebuilt as a fuller ranking desk with summary cards, a main board, risers, and context modules.
- `scout-workspace.tsx`
  Scout workspace demo page.
- `social.tsx`
  Community demo page, now rebuilt as a fuller football community/workspace concept.
- `storyline.tsx`
  Match storyline page.
- `director-mode.tsx`
  Director Mode squad-planning workspace (beta). Squad map, transfer targets, and budget model.
- `tables.tsx`
  League tables page, now rebuilt as a fuller competition hub with standings, fixture windows, pulse cards, and stat leader boards.
- `team-fit.tsx`
  Team fit page.
- `technical-overlay.tsx`
  Technical overlay page.
- `transfers.tsx`
  Transfers lab page, now rebuilt as a fuller desk-style transfer intelligence surface with stronger visual planning modules.

### Current feature-structured area

The main feature-structured area currently in the repo is `client/src/features/games/`.

Current files there:

- `components/game-destination-card.tsx`
- `components/games-coming-soon-page.tsx`
  Shared structured preview surface used by the Games coming-soon routes, now with richer example modules and image-backed concept cards.
- `components/games-hub-page.tsx`
- `market-xi/components/buy-sell-modal.tsx`
- `market-xi/components/leaderboard-card.tsx`
- `market-xi/components/learn-module-card.tsx`
- `market-xi/components/market-filters.tsx`
- `market-xi/components/market-hero.tsx`
- `market-xi/components/market-overview-card.tsx`
- `market-xi/components/market-signal-card.tsx`
- `market-xi/components/market-tabs.tsx`
- `market-xi/components/player-asset-card.tsx`
- `market-xi/components/player-sparkline.tsx`
- `market-xi/components/portfolio-summary-card.tsx`
- `market-xi/components/price-explanation-modal.tsx`
- `market-xi/data/mock-market-xi.ts`
- `market-xi/hooks/use-market-xi.ts`
- `market-xi/pages/market-xi-page.tsx`
- `market-xi/types/market.ts`
- `market-xi/utils/market-calculations.ts`

Current feature-state note:

- `Market XI` is the most structured frontend feature area in the repo
- it is currently simulation-only and mock-data-backed

---

## Server Layer: `source-code/server/`

Current server files:

- `server/index.ts`
  Express server entry.
- `server/routes.ts`
  Route registration area, now including `/api/health`, `/api/system/readiness`, and `/api/system/routes`.
- `server/static.ts`
  Static serving for built frontend assets.
- `server/storage.ts`
  In-memory user-storage scaffold.
- `server/vite.ts`
  Vite integration for local development.

Current server-state summary:

- the server exists as a wrapper and scaffold
- it now exposes truthful system-level health/readiness metadata endpoints
- it is still not currently a full football application backend

---

## Shared Layer: `source-code/shared/`

Current shared files:

- `shared/schema.ts`
  Shared schema layer, currently small and centered on the basic user model
- `shared/product-status.ts`
  Shared route/status contract used by the shell and the backend readiness endpoint

---

## Frontend Demo Mirror: `frontend-demo/`

`frontend-demo/` is a standalone frontend-only demo copy.

Current root files:

- `package.json`
  Demo package config and scripts.
- `package-lock.json`
  Demo lockfile.
- `tsconfig.json`
  Demo TypeScript config.
- `vite.config.ts`
  Demo Vite config.
- `index.html`
  Demo HTML entry.
- `README.md`
  Demo usage note.

Current assets and source:

- `public/`
  Demo favicon and social-sharing asset.
- `src/`
  Synced frontend source mirror.

Current demo scripts:

- `npm run dev`
  Starts the demo on port `5001`.
- `npm run build`
  Builds the demo.
- `npm run preview`
  Previews the built demo.
- `npm run check`
  Runs demo TypeScript check.

Current demo-state summary:

- the demo mirrors frontend code from `source-code/client/`
- it is useful for quick demos and visual review
- it is not the implementation source of truth

---

## Current Runtime And Verification Truth

Current default script ports:

- `source-code` direct Vite client script: `5000`
- `frontend-demo` dev script: `5001`
- `frontend-demo` preview script: `4173`

Current local-machine note:

- recent local sessions on this machine have used override ports such as `5003` and `5004` for the main app when `5000` was already occupied by another process

Current workflow truth:

- frontend implementation changes should be made in `source-code/` first
- `frontend-demo/` should only be updated by deliberate sync
- `PROGRESS.md` should hold the historical record of work done
- this file should describe only the repo as it exists right now

---

## Current State Summary

Right now this repo is:

- a React + Vite football frontend in `source-code/client/`
- wrapped by a lightweight Express layer in `source-code/server/`
- supported by a small shared schema layer in `source-code/shared/`
- accompanied by a standalone synced demo in `frontend-demo/`
- documented by a large Markdown-first documentation set in `DOCUMENTATION_AND_RESEARCH/`

The current strongest implementation areas are:

- the frontend shell and design system
- the broad route surface for the football product prototype
- the feature-structured `Games` area, especially `Market XI`
- the supporting documentation stack

The current weakest implementation areas are visible in the file layout too:

- the backend remains scaffold-level
- the shared schema layer is still small
- many route pages are still page-local and mock-heavy rather than backed by a real data layer
