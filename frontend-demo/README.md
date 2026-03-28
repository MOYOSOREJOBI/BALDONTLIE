# BALDONTLIE Frontend Demo

This is the standalone frontend-only demo copy of BALDONTLIE.

It contains the raw React + Vite UI demo without the Express server, database scaffolding, or deployment docs from the main project.

## Run

```bash
cd frontend-demo
npm install
npm run dev
```

Local URL:

```text
http://127.0.0.1:5001
```

## Useful Commands

```bash
npm run check
npm run build
npm run preview
```

## What This Copy Is For

- quick frontend demos
- UI review
- local testing of the raw product shell
- showing the product without backend setup

## Mirror Rule

- `source-code/` is the implementation source of truth
- this folder is a frontend-only mirror for demos and review
- make the real change in `source-code/` first, then sync this copy when needed with `npm run sync:demo` from the repo root
- do not let this copy drift silently from the main frontend

## What This Copy Is Not

- not the production app
- not wired to real backend APIs
- not the source of truth for deployment architecture

For the full project, use `source-code/`.
