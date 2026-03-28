# Task Execution Template

Use this file as the template for any new meaningful task, feature slice, bug-fix track, or implementation branch.

It is meant to keep work structured, reviewable, and easy to continue in AI tools or Codex.

---

## 1. Task Header

```md
# Task: <short task name>

Date started:
- YYYY-MM-DD HH:MM TZ

Owner:
- <name or agent>

Branch:
- <branch-name>

Status:
- planned | in progress | blocked | done | failed
```

---

## 2. Goal

```md
## Goal

- What is the actual outcome this task must produce?
- What user or product problem does it solve?
```

---

## 3. Scope

```md
## In Scope

- ...

## Out Of Scope

- ...
```

---

## 4. Constraints

```md
## Constraints

- locked decisions this task must respect
- launch-slice limitations
- budget / runtime / memory / storage considerations
- simulation-only or trust-first rules if relevant
```

Typical examples:
- no betting framing
- no fake-live claims
- no fake AI presented as real
- do not widen launch scope casually

---

## 5. Files Likely To Change

```md
## Files Likely To Change

- path/to/file
- path/to/file
```

---

## 6. Plan

```md
## Plan

1. ...
2. ...
3. ...
```

Keep it short and concrete.

---

## 7. Verification

```md
## Verification

- commands to run
- expected result
```

Examples:
- `npm run check`
- `npm run build`
- route-level manual smoke test
- screenshot capture if the task changes frontend visuals

---

## 8. Progress Logging Requirement

Every meaningful task must also update:

- `PROGRESS.md`

If the task changes the frontend visually:

- capture updated screenshot(s)
- store them in `assets/screenshots/`
- update `FRONTEND_VISUAL_REFERENCE.md` if the change is important enough to document visually

If the task also affects the standalone demo:

- make the implementation change in `source-code/` first
- sync `frontend-demo/` intentionally
- note the mirror sync in `PROGRESS.md`

---

## 9. Completion Record

```md
## Completion Record

What changed:
- ...

Commands run:
- ...

Result:
- ...

Bugs / Issues / Failures:
- ...

Next:
- ...
```

---

## 10. Working Rule

If a task changes a locked decision, update these before treating the task as complete:

- `BALDONTLIE_PRODUCTION_PLAN.md`
- `BALDONTLIE_PRODUCTION_CHECKLIST.md`

If a task changes current-state reality only, update:

- `REPO_OVERVIEW.md`

If a task changes the visible UI in a meaningful way, update:

- `PROGRESS.md`
- `FRONTEND_VISUAL_REFERENCE.md` when useful
