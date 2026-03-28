# Working Conventions

This file defines the practical day-to-day operating rules for working in this repo.

Use it to keep implementation, documentation, demo sync, and task tracking consistent.

---

## 1. Source Of Truth Hierarchy

Use this exact hierarchy when making or reviewing changes:

1. `source-code/`
   This is the real product codebase and the source of truth for implementation.
2. `frontend-demo/`
   This is a presentation/demo mirror of the frontend only.
3. `DOCUMENTATION_AND_RESEARCH/BALDONTLIE_PRODUCTION_PLAN.md`
   Canonical strategy and locked decisions.
4. `DOCUMENTATION_AND_RESEARCH/BALDONTLIE_PRODUCTION_CHECKLIST.md`
   Executable extraction of the plan.
5. `DOCUMENTATION_AND_RESEARCH/REPO_OVERVIEW.md`
   Exact current-state repo reference only.
6. `DOCUMENTATION_AND_RESEARCH/PROGRESS.md`
   Append-only timestamped execution history.

Important rule:

- never treat `frontend-demo/` as the implementation source of truth
- make frontend changes in `source-code/` first
- sync `frontend-demo/` only when the change improves demo review or presentation

---

## 2. Default Task Flow

For any meaningful task:

1. read `DEV_START_HERE.md`
2. check `PROGRESS.md`
3. confirm the task respects the production plan
4. create or use a clean working branch
5. log the start of the task in `PROGRESS.md`
6. make the smallest coherent change that moves the task forward
7. run verification commands
8. update docs that changed in meaning
9. log the outcome in `PROGRESS.md`

If the task touches the visible UI:

- capture updated screenshots when the change is meaningful
- save screenshots in `assets/screenshots/`
- update `FRONTEND_VISUAL_REFERENCE.md` when the screenshot adds real explanatory value

---

## 2A. Writing And Commit Style

Use this file:

- `MOYOSOREJOBI_STYLE.md`

Rules:

- write in MOYOSOREJOBI style
- keep comments brief
- keep comments at `1-15` words max
- keep commit messages at `1-15` words max
- keep commit messages direct and real
- do not pad docs with extra words

Git author rule for this repo:

- `user.name` must be `MOYOSOREJOBI`
- keep `user.email` aligned with the real GitHub account email used for attribution

When adding inline comments:

- explain only what needs help
- keep one comment to one idea
- prefer direct action wording

When writing task notes or summaries:

- keep them tight
- keep them honest
- do not sound more finished than the code really is

---

## 3. Documentation Update Matrix

Update these files based on what changed:

- strategy or locked decisions:
  `BALDONTLIE_PRODUCTION_PLAN.md`
  `BALDONTLIE_PRODUCTION_CHECKLIST.md`
- current repo reality:
  `REPO_OVERVIEW.md`
- session/task history:
  `PROGRESS.md`
- frontend visual state:
  `FRONTEND_VISUAL_REFERENCE.md`
- startup or operator workflow:
  `DEV_START_HERE.md`
  `PRODUCTION_RELEASE_RUNBOOK.md`
- reusable task process:
  `TASK_EXECUTION_TEMPLATE.md`

Do not leave a meaningful repo change undocumented if it affects:

- workflow
- launch truth
- route status
- deployment path
- visual behavior worth preserving as reference

Documentation role split:

- `PROGRESS.md`
  This is the history book.
  Keep adding timestamped entries.
  Do not erase prior work history.
  If an older entry was wrong, correct it with a newer entry.
- `REPO_OVERVIEW.md`
  This is the exact current-state reference.
  Rewrite it in place whenever the repo changes.
  Do not let it drift into roadmap, retrospective, or execution log territory.

---

## 4. Frontend Demo Mirror Rule

`frontend-demo/` exists so the UI can be shown quickly without the full server/runtime setup.

Treat it as a mirror, not a fork.

Rules:

- change `source-code/` first
- only sync the demo when the UI or UX meaningfully changed
- do not let `frontend-demo/` quietly diverge from `source-code/`
- if the demo is intentionally different for presentation, document that difference in `frontend-demo/README.md`

When syncing:

- prefer `npm run sync:demo` from the repo root
- verify the demo still boots
- note the sync in `PROGRESS.md`

---

## 5. Verification Minimum

For frontend/code tasks, the default minimum is:

```bash
npm run check:app
npm run build:app
```

If the task also affects the standalone demo:

```bash
npm run sync:demo
npm run check:demo
npm run build:demo
```

If the task changes a visible screen:

- manually open the affected route locally
- confirm the layout does not regress at normal desktop width
- capture a screenshot if the change is documentation-worthy

---

## 6. Progress Logging Standard

Every meaningful work session should add a timestamped entry to `PROGRESS.md`.

`PROGRESS.md` is append-only.

That means:

- keep the current-task snapshot at the top updated
- append permanent dated entries in the archive section
- do not delete older entries just because they are no longer current
- do not compress old work into one summary line later
- treat mistakes, reversions, and failed attempts as part of the permanent record

Each entry should include:

- status
- what changed
- files changed
- commands run
- result
- bugs / issues / failures
- bottlenecks / blockers
- next

Do not wait until the end of a long session to reconstruct the work from memory.

---

## 7. Repo Cleanliness Rules

Keep the repo easy to operate:

- respect `.gitignore`
- keep `.env.example` aligned with real env usage
- prefer markdown docs over binary planning files
- avoid duplicate docs that compete for authority
- keep screenshots inside the repo when they explain the product better than text
- prefer small, reviewable changes over wide speculative rewrites
- prefer root helper scripts when they make repeatable validation easier

---

## 8. Ready-For-Work Standard

The repo is considered ready for active task work when all of these are true:

- the docs identify one canonical plan and one canonical checklist
- `source-code/` is the implementation source of truth
- `frontend-demo/` is documented as a mirror
- `PROGRESS.md` is actively maintained as append-only history
- `REPO_OVERVIEW.md` accurately reflects the repo exactly as it exists now
- `MOYOSOREJOBI_STYLE.md` is followed for comments, notes, and commit messages
- the app boots locally
- typecheck/build pass
- visual documentation stays in sync with meaningful frontend changes

That is the standard to preserve during future work.
