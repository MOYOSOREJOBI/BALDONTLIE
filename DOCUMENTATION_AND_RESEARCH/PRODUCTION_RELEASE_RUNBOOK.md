# BALDONTLIE Production Release Runbook

This file is the operator runbook for taking BALDONTLIE from the current frontend demo state to a truthful production release on:
- web
- iOS

This runbook is terminal-first.
Anything that can be done from the VS Code terminal should be done from the VS Code terminal first.
Only leave the terminal when Apple/Xcode/App Store Connect or a one-time cloud setup step truly requires it.

---

## 0. Precedence And Scope

Read and obey these files in this order:
1. `README.md`
2. `REPO_OVERVIEW.md`
3. `BALDONTLIE_PRODUCTION_PLAN.md`
4. `BALDONTLIE_PRODUCTION_CHECKLIST.md`
5. `PROGRESS.md`
6. `WORKING_CONVENTIONS.md`
7. `DEV_START_HERE.md`
8. `ROUTE_INVENTORY.md`
9. `FRONTEND_VISUAL_REFERENCE.md`
10. `TASK_EXECUTION_TEMPLATE.md`
11. `PRODUCTION_RELEASE_RUNBOOK.md`

Decision precedence:
- `BALDONTLIE_PRODUCTION_PLAN.md` = strategy and locked decisions
- `BALDONTLIE_PRODUCTION_CHECKLIST.md` = execution checklist
- `PRODUCTION_RELEASE_RUNBOOK.md` = operator steps and release flow
- `WORKING_CONVENTIONS.md` = day-to-day work rules
- `REPO_OVERVIEW.md` = current-state reality only
- `PROGRESS.md` = live execution history
- research files = supporting evidence only

This file does **not** replace the plan or checklist.
It explains how to actually operate the work from terminal to public release.

---

## 1. Locked Release Truths

These are treated as fixed unless the production plan is updated first:
- real app code lives in `source-code/`
- web launches before iOS public release
- first iOS path is Capacitor, not Expo/React Native
- first backend is Express on Cloud Run
- first persistence/auth is Supabase
- first web host is Cloudflare Pages
- first automation path is GitHub Actions
- no betting framing
- no fake-live claims
- no fake AI presented as real
- `Market XI` must remain clearly simulation-only
- no Redis / ClickHouse in first launch path
- no immediate monorepo migration before launch

---

## 2. Definition Of Ready Before Real Backend Work

Do not move into provider wiring, Supabase persistence, or deployment until all of the following are true.

### 2.1 Local baseline must pass
From terminal:

```bash
cd source-code
node -v
npm -v
npm install
npm run check
npm run build
npm run dev
```

Required:
- local app boots
- build passes
- typecheck passes
- no obvious console crash loop
- repo is understandable from docs

### 2.2 Scope baseline must pass
Required:
- `ROUTE_INVENTORY.md` is current
- every route has a status: `launch`, `beta`, `hide`, or `later`
- the first truthful launch slice is frozen
- hidden launch-conflicting routes are removed from launch nav

### 2.3 Repo baseline must pass
Required:
- `.env.example` exists and matches the code
- `.gitignore` blocks local secrets and build output
- lint/format/test scripts are either present or tracked as immediate work
- CI is either present or the first infra task on the branch

---

## 3. Launch Slice That Must Exist Before Public Release

The first truthful public slice is:
- home/dashboard
- search
- player profile
- team profile
- one competition table
- one match center
- saved/followed entities
- settings/profile basics only if needed
- `Market XI` only if clearly labeled as simulation

Do not publicly release:
- fake AI assistant
- odds route
- broad unfinished social/community
- unfinished scout workspace
- fake-live widgets
- prediction surfaces that overclaim certainty

If a route is uncertain, set it to `hide`, not `launch`.

---

## 4. Environment And Secrets Matrix

This file documents **where** each class of secret belongs.
Never place real values in markdown.

| Class | Local `.env` | GitHub Actions Secret | Cloud Run Env | Cloudflare Pages Env | Supabase Project Setting | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| API base URL | optional | optional | yes | yes | no | separate staging and production |
| Supabase URL | yes if used locally | yes if build/runtime needs it | yes | yes if frontend needs it | managed in project | public URL is not the same thing as secret key |
| Supabase anon key | yes if frontend uses it | yes if build/runtime needs it | yes if API uses it | yes if frontend uses it | managed in project | public client key, still document it |
| Supabase service role | no unless needed locally | yes | yes if API/admin job needs it | no | managed in project | never expose to frontend |
| Data provider key | yes for local backend/sync work | yes | yes | no unless frontend directly needs public endpoint | no | preferred in API/sync layer only |
| Sentry DSN | optional | yes | yes | yes | no | separate frontend and backend DSNs if used |
| GCP project/region/service names | optional | yes | yes | no | no | document exact names |
| Cloudflare project name / token | optional | yes | no | managed in project | no | needed for terminal-driven Pages deployment if not using pure Git integration |
| Apple credentials | no | optional only if later automation is used | no | no | no | keep manual early unless you intentionally automate |

Rules:
- every new env var must be added to `.env.example`
- every env var must be documented by purpose, consumer, and environment
- never let frontend-only routes require secret-only env vars
- do not invent env vars that code does not use

---

## 5. Branching, Session Logging, And Change Control

### 5.1 Branching rule
Create one branch per meaningful slice:
- repo-hardening
- route-freeze
- openapi-v1
- supabase-schema-v1
- provider-ingest-v1
- launch-surface-real-data
- deploy-web
- ios-capacitor

### 5.2 End-of-session standard
At the end of each session, record:
- what changed
- what commands were run
- what passed
- what failed
- what is blocked
- what the next step is
- whether any locked or adjustable decision changed

Always update:
- `PROGRESS.md`

If the task changed the frontend visually in a meaningful way:
- capture screenshot(s)
- save them in `assets/screenshots/`
- update `FRONTEND_VISUAL_REFERENCE.md` when the screenshot adds documentation value

If the task changed the standalone demo:
- confirm the implementation change originated in `source-code/`
- note the mirror sync in `PROGRESS.md`

### 5.3 Rollback standard
Every risky change should carry:
- file list
- commands to undo or revert
- migration rollback note if needed
- route impact note
- post-rollback test command

---

## 6. Terminal-First Delivery Flow

## Phase A — Harden The Repo Before Product Breadth

### A1. Tooling
From terminal:

```bash
cd source-code
npm install
npm run check
npm run build
```

Then add and verify:
- ESLint
- Prettier
- CI workflow
- `.env.example`
- doc updates

Preferred scripts:
```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run test
npm run test:e2e
```

Acceptance:
- install / lint / typecheck / build all pass locally
- CI runs on PR and `main`

### A2. Route freeze
From terminal:
- inspect `client/src/App.tsx`
- inspect `client/src/pages`
- update `ROUTE_INVENTORY.md`
- remove or hide launch-conflicting routes from navigation

Acceptance:
- no fake AI / odds / unfinished routes in public launch navigation

---

## Phase B — Contract First

### B1. OpenAPI v1
Create a first contract for:
- search
- player
- team
- competition table
- match
- match timeline
- live match center
- watchlist/follow state
- Market XI asset endpoint if server-backed at launch

Every response should carry:
- stable internal ID
- `lastUpdatedAt`
- `sourceProvider`
- `freshnessClass`
- `isSimulated` where relevant
- typed error shape

### B2. Generated types
Generate TypeScript types/client from the OpenAPI file and consume them in:
- API route handlers
- frontend query layer
- test fixtures where possible

Acceptance:
- frontend/backend stop drifting on response shape

---

## Phase C — Supabase And Canonical Data

### C1. Local or linked Supabase flow
Terminal-first path:

```bash
supabase init
supabase start
supabase link --project-ref <PROJECT_REF>
supabase migration new <name>
```

Then apply/test migrations according to the chosen local/remote flow.

Required first table families:
- canonical football entities
- provider mappings
- raw payload tracking
- watchlist/follow state
- alerts if included in launch
- Market XI persistence only if truly needed for launch

### C2. Data model rules
Required:
- internal IDs own the product truth
- provider IDs are mappings, not product truth
- raw payloads are retained for supported competitions only
- every serving surface must be traceable to source and snapshot time

Acceptance:
- raw -> normalized -> serving flow exists for Wave 1 coverage

---

## Phase D — Real Data Replacement

Replace demo intelligence on the launch slice in this order:
1. search
2. player profile
3. team profile
4. competition table
5. match center
6. saved/followed entities

Required on every real-data launch surface:
- loading state
- empty state
- error state
- retry path
- visible timestamp
- source label
- no fake-live implication

Acceptance:
- launch routes stop depending on hardcoded demo intelligence

---

## Phase E — Lean Sync And Runtime

### E1. Sync jobs
Use terminal + GitHub Actions first.

Rules:
- scheduled sync jobs, not always-on workers
- keep competition coverage narrow
- use polling before heavier live infrastructure
- avoid top-of-hour cron if possible
- every sync must log start, success/failure, records processed, and provider/time window

### E2. Runtime limits
Do not add before justified:
- Redis
- ClickHouse
- websocket-heavy live stack
- always-on worker fleet

Acceptance:
- launch runtime stays lean and understandable

---

## 7. Web Release Runbook

## 7.1 Build web artifacts
From terminal:

```bash
cd source-code
npm install
npm run check
npm run build
```

Verify:
- built assets exist
- asset paths resolve correctly
- no launch route hard-crashes in production build

## 7.2 Cloudflare Pages release paths
Choose one and document which one is used.

### Option A — Git integration
Use when you want push-based deploys.

Terminal prep:
- ensure production branch is clean
- ensure build config is correct
- push branch / merge to release branch

### Option B — Direct Upload
Use when you want to build locally or in custom CI and upload prebuilt assets.

Terminal prep:
- build assets locally or in CI
- upload with the chosen Pages CLI flow

Rules:
- do not mix Git integration and Direct Upload casually
- once the project path is chosen, document it in release notes

## 7.3 Cloud Run API release
Preferred terminal flow:
- build container
- push image
- deploy with `gcloud`
- set env vars
- verify URL
- verify health endpoint
- verify logs

Minimum checks after deploy:
- `/health` or equivalent works
- API can reach Supabase
- provider-backed endpoints respond
- logs show no crash loop

## 7.4 Web QA before public release
Required web QA matrix:
- Chrome on desktop
- Safari on desktop
- Safari on iPhone
- one Chromium mobile browser if available
- low-bandwidth check
- hard refresh/cache check

Required route QA:
- dashboard/home
- player list
- player detail
- team detail
- table
- match center
- saved/followed path
- Market XI simulation labeling

Required UI QA:
- no broken nav
- no missing source labels where real data exists
- no missing timestamps
- no obviously broken RTL toggles if enabled
- no catastrophic image/layout shift

---

## 8. iOS Packaging And App Store Runbook

## 8.1 Capacitor terminal path
From terminal:

```bash
cd source-code
npm run build
npx cap add ios
npx cap sync ios
```

Re-run after web changes:

```bash
npm run build
npx cap sync ios
```

## 8.2 Manual exception: Xcode
Leave terminal only for:
- signing
- bundle identifier review
- capabilities if needed
- simulator/device run
- archive/upload flow

When you leave the terminal, log:
- why you had to leave
- what changed in Xcode
- what files were modified and committed back

## 8.3 iPhone QA checklist
Required on real device:
- app opens cleanly
- safe areas correct
- keyboard/input correct
- scroll behavior sane
- status bar / notch / tab areas sane
- deep links only if intentionally enabled
- login flow works if login is included in launch
- match center remains usable
- no obvious wrapper-only bug

## 8.4 TestFlight path
Manual/Apple path:
- archive build
- upload build
- add internal testers
- collect issues
- fix blockers
- only then allow small external beta

## 8.5 App Store submission path
Manual/Apple path:
- screenshots
- metadata
- privacy disclosures
- support URL
- review notes
- test credentials if needed
- explicit note that simulations use no real money

App review safety checks:
- no betting wording
- no misleading odds language
- no unlicensed-risk media slipped in
- no fake AI overclaiming live intelligence

---

## 9. Browser And Platform Support Standard

Target support for first public release:
- latest Chrome stable on desktop
- latest Safari stable on macOS
- latest Safari on supported iPhone/iOS target used for QA

What must be checked before public launch:
- route rendering
- navigation
- forms/input
- scroll
- responsive layout
- source/timestamp display
- simulation labeling
- build asset loading on hard refresh

If a browser-specific issue affects a non-core beta route:
- hide the route before launch rather than breaking launch core

---

## 10. Observability, Incident, And Rollback

## 10.1 Minimum observability before public beta
Required:
- Sentry in frontend
- Sentry in API if practical
- structured API logs
- request IDs where feasible
- sync job logs
- deployment version/build marker in logs

## 10.2 Alerts that matter first
At minimum alert on:
- failed deploy
- failed sync job
- repeated 5xx API errors
- match-center fetch failures
- major frontend crash loop

## 10.3 Rollback playbook
For every release, record:
- release identifier
- commit SHA
- migrations included
- env vars added/changed
- routes affected
- rollback command/path
- post-rollback smoke tests

Immediate rollback triggers:
- launch route blank screen
- broken API health
- provider sync producing bad/stale data on launch surfaces
- missing source/timestamp across live routes
- iOS wrapper breaking the core launch loop

---

## 11. What Is Still Not A Documentation Blocker

These are important, but not blockers for starting implementation if the current docs already reflect the truth:
- final OpenAPI file contents
- final `.env.example` values
- final migration files
- final CI yaml
- final Cloud Run service names
- final Cloudflare project names
- final App Store screenshots

Those are implementation artifacts, not evidence that the current doc set is bad.

---

## 12. Final Ready-To-Start Verdict

You are ready to start implementation work from AI / Codex **if**:
- the improved plan/checklist/readme are the live docs
- `DEV_START_HERE.md` is used as the first-session handoff
- `ROUTE_INVENTORY.md` is treated as the current route truth
- this runbook is used for release and deployment operations

You are **not** ready to claim production launch readiness yet.
You are ready to start the work cleanly.
