# Dev Start Here

This is the first file to use when starting implementation work in AI tools or Codex inside VS Code.

It does not replace the production plan or production checklist.
It tells you what to read first, what is locked, what to run, and what to do first so work starts cleanly.

---

## 1. Read These In Order

1. `README.md`
2. `REPO_OVERVIEW.md`
3. `BALDONTLIE_PRODUCTION_PLAN.md`
4. `BALDONTLIE_PRODUCTION_CHECKLIST.md`
5. `WORKING_CONVENTIONS.md`
6. `MOYOSOREJOBI_STYLE.md`
7. `PROGRESS.md`
8. `PRODUCTION_RELEASE_RUNBOOK.md`

If there is any conflict:

- `BALDONTLIE_PRODUCTION_PLAN.md` is the canonical strategy and decision record
- `BALDONTLIE_PRODUCTION_CHECKLIST.md` is the executable extraction
- `REPO_OVERVIEW.md` is the exact current-state repo reference only
- `WORKING_CONVENTIONS.md` is the day-to-day operating rules file
- `MOYOSOREJOBI_STYLE.md` is the writing, comment, and commit style rule
- `PROGRESS.md` is the append-only live execution log and must be updated continuously
- `PRODUCTION_RELEASE_RUNBOOK.md` is the release/operator flow
- research files are supporting context only, not live authority

---

## 2. Confirmed Project Truths

These are the current truths this repo is operating under:

- the real product code lives in `source-code/`
- the frontend is React + Vite + TypeScript
- the app is wrapped by an Express server
- much of the product is still mock-data-driven
- `Market XI` is the cleanest frontend feature
- `Market XI` must remain clearly simulation-only
- the first deploy is web first, then iOS packaging after web stability
- the first-launch stack is Cloudflare Pages + Cloud Run + Supabase + GitHub Actions + Sentry
- the project should be run from the VS Code terminal first whenever possible
- `frontend-demo/` is a presentation mirror, not the implementation source of truth

---

## 3. Locked Decisions

Do not casually change these:

- keep the current `source-code/` repo structure for the first launch
- no monorepo migration before launch
- no Redis before a measured need exists
- no ClickHouse before analytics volume justifies it
- no React Native / Expo rewrite before launch
- no fake AI presented as real
- no fake-live data presented as live
- no betting framing
- no broad feature expansion before the truthful core loop is real

If one of these needs to change, update `BALDONTLIE_PRODUCTION_PLAN.md` first.

---

## 4. First Terminal Commands

From the repo root:

```bash
npm run bootstrap
npm run check
npm run build
npm run dev
```

Direct subproject workflow still works when needed:

```bash
cd source-code
npm run check
npm run build
npm run dev
```

Current local default URL:

```text
http://127.0.0.1:5000
```

If port `5000` is occupied on this machine, run the app with a safe local override such as:

```bash
PORT=5004 npm run dev
```

If the app does not boot, fix local baseline issues before doing deeper feature work.

---

## 5. Environment File

Current environment template:

- `source-code/.env.example`

Important:

- `DATABASE_URL` is only required for DB-backed work such as Drizzle pushes and real persistence wiring
- most current frontend-only work should not need secrets
- do not invent extra env vars unless code actually uses them
- when adding a new env var, update `.env.example` in the same change

---

## 6. First Work Order

Use this exact order unless there is a critical bug blocking basic startup.

### Step 1
Confirm the local baseline:

- install works
- typecheck works
- build works
- dev server works

### Step 2
Refine the route inventory:

- read `ROUTE_INVENTORY.md`
- verify it against `client/src/App.tsx`
- inspect `client/src/pages`
- refine every route as `launch`, `beta`, `hide`, or `later`

### Step 3
Freeze the truthful launch slice:

- home/dashboard
- search
- player profile
- team profile
- one competition table
- one match center
- saved/followed entities
- `Market XI` only as clearly labeled simulation

### Step 4
Hide or de-emphasize anything not ready:

- fake AI assistant
- unfinished social/community
- unfinished scout workspace
- unfinished prediction surfaces
- hardcoded demo routes that look real

### Step 5
Harden the repo basics:

- `.env.example`
- lint
- formatting
- CI
- deployment docs

### Step 6
Only then move into:

- OpenAPI contract
- real API routes
- Supabase-backed persistence
- provider ingestion
- staging
- production deploy

---

## 7. Working Rules While Coding

- prefer small, reviewable slices
- keep route-level changes honest
- if a route is uncertain, mark it `hide`, not `launch`
- add timestamps and source labels where real external data appears
- do not let simulated logic look like verified intelligence
- update docs when a locked or adjustable decision changes
- update `PROGRESS.md` after every meaningful change batch
- capture screenshot updates for meaningful frontend visual changes
- make code changes in `source-code/` first and sync `frontend-demo/` intentionally
- keep runtime lean and avoid speculative infrastructure
- keep inline comments brief
- keep comments at `1-15` words max
- keep commit messages at `1-15` words max
- use MOYOSOREJOBI style for comments, summaries, and commit messages

---

## 8. What Can Leave The Terminal

Use terminal first for:

- install
- typecheck
- build
- lint
- tests
- file search
- refactors
- route audit
- OpenAPI work
- local Supabase
- Cloud Run deploy
- CI workflows

Leave terminal only when needed for:

- Xcode signing
- iPhone real-device verification
- TestFlight/App Store Connect
- one-time cloud console setup if CLI is blocked

When you leave the terminal, document why and return to terminal workflow immediately after.

---

## 9. End-Of-Session Standard

At the end of each meaningful session, record:

- what changed
- what commands were run
- what passed
- what is still blocked
- what the next step is

Always update:

- `PROGRESS.md`

If the task changes the frontend visually in a meaningful way, also update:

- `FRONTEND_VISUAL_REFERENCE.md` when the screenshot adds documentation value

If strategy changed, update:

- `BALDONTLIE_PRODUCTION_PLAN.md`
- `BALDONTLIE_PRODUCTION_CHECKLIST.md`

If only current-state reality changed, update:

- `REPO_OVERVIEW.md`

---

## 10. Ready-To-Start Verdict

The documentation set is now good enough to start implementation work cleanly.

What is ready:

- canonical plan
- canonical checklist
- exact current-state repo reference
- live progress log
- release runbook
- startup handoff
- working conventions
- environment template

What is not magically done yet:

- lint pipeline
- CI
- route inventory
- OpenAPI contract
- real backend routes
- staging and production setup

That is expected.
Those are implementation tasks, not missing documentation blockers.
