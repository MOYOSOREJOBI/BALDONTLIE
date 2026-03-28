# BALDONTLIE

BALDONTLIE is a football intelligence product prototype built around a React + Vite frontend with an Express server wrapper in `source-code/`.

## Start Here

Primary working path:

- `DOCUMENTATION_AND_RESEARCH/README.md`

First-session handoff:

- `DOCUMENTATION_AND_RESEARCH/DEV_START_HERE.md`

Working conventions:

- `DOCUMENTATION_AND_RESEARCH/WORKING_CONVENTIONS.md`

Writing and commit style:

- `DOCUMENTATION_AND_RESEARCH/research/MOYOSOREJOBI_STYLE.md`

Live execution log:

- `DOCUMENTATION_AND_RESEARCH/PROGRESS.md`

Exact current-state repo reference:

- `DOCUMENTATION_AND_RESEARCH/REPO_OVERVIEW.md`

## Working Areas

Main product app:

- `source-code/`

Standalone frontend demo:

- `frontend-demo/`

Documentation and research:

- `DOCUMENTATION_AND_RESEARCH/`

## Canonical Docs

The aligned production planning docs are:

- `DOCUMENTATION_AND_RESEARCH/BALDONTLIE_PRODUCTION_PLAN.md`
- `DOCUMENTATION_AND_RESEARCH/BALDONTLIE_PRODUCTION_CHECKLIST.md`
- `DOCUMENTATION_AND_RESEARCH/WORKING_CONVENTIONS.md`
- `DOCUMENTATION_AND_RESEARCH/PROGRESS.md`
- `DOCUMENTATION_AND_RESEARCH/PRODUCTION_RELEASE_RUNBOOK.md`

Repo overview:

- `DOCUMENTATION_AND_RESEARCH/REPO_OVERVIEW.md`

Task template:

- `DOCUMENTATION_AND_RESEARCH/TASK_EXECUTION_TEMPLATE.md`

Visual reference:

- `DOCUMENTATION_AND_RESEARCH/FRONTEND_VISUAL_REFERENCE.md`

## Quick Commands

Repo-level helpers:

```bash
npm run bootstrap
npm run check
npm run build
npm run sync:demo
```

Main app:

```bash
npm run dev
```

If port `5000` is already occupied locally, run the main app from `source-code/` with a safe override such as `PORT=5004 npm run dev`.

Standalone demo:

```bash
npm run dev:demo
```

Repo conventions:

- make implementation changes in `source-code/` first
- sync `frontend-demo/` only when a frontend change should also be demo-ready
- prefer the root `npm run ...` helpers for validation and demo sync
- update `DOCUMENTATION_AND_RESEARCH/PROGRESS.md` after every meaningful change batch
- treat `DOCUMENTATION_AND_RESEARCH/PROGRESS.md` as append-only history
- treat `DOCUMENTATION_AND_RESEARCH/REPO_OVERVIEW.md` as the exact current-state repo map
