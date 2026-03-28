# BALDONTLIE Production Checklist — Terminal-First, Exhaustive Edition

This is the execution companion to `BALDONTLIE_PRODUCTION_PLAN.md`.

Use this file as the working build-and-ship checklist.
Everything that can be done from the VS Code terminal should be done from the VS Code terminal first.
If a step truly requires a GUI or device tool, the shortest manual path is listed under that step.

---

## Completed Passes — 2026-03-28

- [x] Full i18n system: 25 locales, flat-string keys, RTL for Arabic and Hebrew, language switcher with native names, localStorage persistence
- [x] Page-level `t()` coverage: news, predictions, scout-workspace, team-fit, dashboard, rankings, tables, transfers, social, live-sim, match-rooms, odds, players, player profile, compare pages, fan-sentiment, games surfaces
- [x] Shell nav: all labels translated, route statuses driven by `shared/product-status.ts`
- [x] Director Mode page added (beta squad workspace)
- [x] Shared `components/shared/` module area created
- [x] `.gitignore` hardened: `.bak`, `.zip`, `source-strings.json`
- [x] Research files separated into `DOCUMENTATION_AND_RESEARCH/research/`
- [x] `npm run build` and `npm run check` passing cleanly
- [x] PROGRESS.md, REPO_OVERVIEW.md, PRODUCTION_PLAN.md up to date
- [x] Route inventory exists in `ROUTE_INVENTORY.md`
- [x] `.env.example` exists in `source-code/`

---

## 0. Working Rules Before You Touch Code

- [x] Read `REPO_OVERVIEW.md`.
- [x] Read `BALDONTLIE_PRODUCTION_PLAN.md`.
- [x] Read `PROGRESS.md`.
- [ ] Read `PRODUCTION_RELEASE_RUNBOOK.md`.
- [x] Confirm the app still lives in `source-code/`.
- [x] Confirm the launch posture is still:
  - [x] truthful first
  - [x] web first
  - [x] iOS after web stability
  - [x] `Market XI` simulation-only
  - [x] no immediate monorepo migration
  - [x] no Redis/ClickHouse in launch path
- [x] Confirm what is `locked`, `adjustable`, `deferred`, and `forbidden`.
- [ ] Create a working branch for each major slice.
- [ ] Keep a short change note in every PR or commit series:
  - [ ] what changed
  - [ ] why it changed
  - [ ] whether it affects locked/adjustable/deferred scope
  - [ ] rollback path
- [x] Start a timestamped entry in `PROGRESS.md` before meaningful work begins.
- [x] If the task is frontend-visible, plan screenshot capture/update work from the start.

---

## 1. Terminal-First Setup And Baseline

### 1.1 Local Baseline
Run from terminal first.

- [x] `cd source-code`
- [x] `node -v`
- [x] `npm -v`
- [x] `npm install`
- [x] `npm run check`
- [x] `npm run build`
- [x] `npm run dev`
- [x] verify local app responds at `http://127.0.0.1:5000`
- [x] confirm no obvious startup console errors
- [x] capture baseline screenshots or notes for:
  - [x] home/dashboard
  - [x] players list
  - [x] player detail
  - [x] one team surface
  - [x] one match surface
  - [x] `Market XI`

### 1.2 Baseline Repo Hygiene
- [x] `git status`
- [x] verify no unexpected untracked build artifacts
- [x] verify docs referenced in README actually exist
- [x] verify env file naming is consistent
- [x] verify there is no secret committed
- [x] verify `PROGRESS.md` exists and is using timestamped entries
- [x] create/update `.gitignore` entries for:
  - [x] local env files
  - [x] build output
  - [ ] local Supabase artifacts if needed
  - [ ] iOS derived data if needed later

### 1.3 Immediate Red Flags To Fix Before Wider Work
- [x] broken docs paths
- [x] stale README statements
- [x] missing `.env.example`
- [ ] missing lint pipeline
- [ ] missing CI
- [x] any route that appears “real” but is still fully demo data without labeling

Acceptance:
- [x] app boots
- [x] typecheck/build pass
- [x] repo is understandable from terminal alone
- [x] progress tracking is active from the start of the session

Rollback:
- [ ] if install or build breaks, return to last known green commit before starting deeper work

---

## 2. Freeze The Truthful Launch Slice

### 2.1 Build Route Inventory
From terminal or script first:
- [x] inspect `client/src/App.tsx`
- [x] inspect `client/src/pages`
- [x] create a route inventory file in docs:
  - [x] route path
  - [x] page file
  - [x] current data source
  - [x] route status
  - [ ] launch owner
  - [ ] major blockers

### 2.2 Label Every Route
For every route, mark (driven by `shared/product-status.ts`):
- [x] `launch`
- [x] `beta`
- [x] `demo`
- [x] `hide`
- [x] `later`

### 2.3 Lock Final Launch Loop
Confirm launch includes only the truthful core loop:
- [ ] home/dashboard
- [ ] search
- [ ] player profile
- [ ] team profile
- [ ] one competition table
- [ ] one match center
- [ ] saved/followed entities
- [ ] settings/profile basics if needed
- [ ] `Market XI` only if clearly simulation-only

### 2.4 Explicitly Remove From Launch Navigation
- [ ] fake AI assistant
- [ ] unfinished social/community
- [ ] unfinished broad scout workspace
- [ ] unfinished prediction pages
- [ ] broad games hub beyond what is truthfully ready
- [ ] any screen still mostly hardcoded and unlabelled

### 2.5 Decide Adjustable Launch Choices
Write down with a one-line reason:
- [ ] login required or not
- [ ] exact Wave 1 competitions
- [ ] provider chosen for launch
- [ ] match-center polling interval
- [ ] whether alerts are in launch or immediately after

Acceptance:
- [ ] every route is labeled
- [ ] launch nav only contains launch-approved routes
- [ ] there is a written route map in the docs

Quick fix:
- [ ] if uncertainty remains on a route, default it to `hide` not `launch`

---

## 3. Tighten README

### 3.1 README Must Cover
- [ ] what the repo is
- [ ] where the real app lives
- [ ] where the standalone frontend demo lives
- [ ] what currently works
- [ ] what is still mocked
- [ ] source-of-truth docs
- [ ] progress log workflow
- [ ] terminal-first rule
- [ ] local development commands
- [ ] test/build commands
- [ ] deployment overview
- [ ] what must leave the terminal and why

### 3.2 README Must Not
- [ ] contradict the repo audit
- [ ] imply real APIs exist when they do not
- [ ] imply social/AI depth that is not ready
- [ ] blur research docs with live source-of-truth docs

### 3.3 README Quickstart
Add terminal-first quickstart:
- [ ] `cd source-code`
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] `npm run check`
- [ ] `npm run build`

### 3.4 README Operations Map
Document:
- [ ] what can be done from VS Code terminal
- [ ] what requires cloud CLI
- [ ] what requires Xcode
- [ ] what requires App Store Connect
- [ ] how and when `PROGRESS.md` must be updated
- [ ] when frontend screenshots should be refreshed for documentation

Acceptance:
- [ ] a new contributor can open README and understand the repo without guessing
- [ ] the contributor knows where to log progress, bugs, blockers, and failures
- [ ] the contributor knows where to run the frontend demo and where to document visual changes

---

## 4. Harden Tooling And Guardrails

### 4.1 Formatting And Lint
Terminal-first.
- [ ] install/configure ESLint
- [ ] install/configure Prettier
- [ ] add scripts:
  - [ ] `npm run lint`
  - [ ] `npm run lint:fix`
  - [ ] `npm run format`
  - [ ] `npm run format:check`
- [ ] align lint rules with TypeScript and current codebase reality
- [ ] avoid over-aggressive rules that block progress unnecessarily

### 4.2 CI
- [ ] add GitHub Actions workflow for:
  - [ ] install
  - [ ] lint
  - [ ] typecheck
  - [ ] build
  - [ ] tests when they exist
- [ ] ensure workflows run on PR and `main`
- [ ] avoid cron schedules at the top of the hour for sync jobs
- [ ] note that scheduled workflows can be delayed or dropped under heavy GitHub Actions load

### 4.3 Environment Docs
- [ ] add `.env.example`
- [ ] list each variable with purpose
- [ ] separate:
  - [ ] local
  - [ ] staging
  - [ ] production
- [ ] list which secrets live in:
  - [ ] local `.env`
  - [ ] Cloudflare env
  - [ ] Cloud Run env
  - [ ] GitHub Actions secrets
  - [ ] Supabase project secrets if relevant

Acceptance:
- [ ] CI is green on the branch
- [ ] a new machine can run the app from the docs

Quick fix:
- [ ] if lint noise is extreme, stage rules in two passes instead of blocking the whole repo

---

## 5. OpenAPI And Contract-First API

### 5.1 Create The First Contract
Create `docs/api/openapi.v1.yaml` or equivalent.

Must define at least:
- [ ] `/v1/search`
- [ ] `/v1/players/{playerId}`
- [ ] `/v1/teams/{teamId}`
- [ ] `/v1/competitions/{competitionId}`
- [ ] `/v1/competitions/{competitionId}/table`
- [ ] `/v1/matches/{matchId}`
- [ ] `/v1/matches/{matchId}/timeline`
- [ ] `/v1/matches/{matchId}/stats`
- [ ] `/v1/matches/live`
- [ ] `/v1/watchlists`
- [ ] `/v1/alerts`
- [ ] `/v1/market/assets/{playerId}`

### 5.2 Contract Rules
Every response should include:
- [ ] stable internal IDs
- [ ] `lastUpdatedAt`
- [ ] `sourceProvider`
- [ ] `freshnessClass`
- [ ] `isSimulated` when relevant
- [ ] typed error responses

### 5.3 Type Generation
- [ ] generate TypeScript types/client from OpenAPI
- [ ] use generated types in API layer and frontend hooks
- [ ] stop shaping ad hoc API objects in pages

### 5.4 Runtime Validation
- [ ] validate path/query/body with Zod
- [ ] normalize outgoing responses to stable shapes
- [ ] never return raw provider payloads directly

Acceptance:
- [ ] contract exists before large backend coding
- [ ] generated types are usable in frontend/backend
- [ ] request validation rejects bad input cleanly

Quick fix:
- [ ] if full contract is too large at first, ship only launch endpoints and expand later

---

## 6. Supabase Local And Database Foundation

### 6.1 Local Supabase Setup
Use terminal.
- [ ] install Supabase CLI locally or invoke with `npx`
- [ ] `supabase init`
- [ ] `supabase start`
- [ ] confirm local services boot
- [ ] record local URLs/ports for dev use

### 6.2 Minimum Launch Schema
Create migrations for:
- [ ] competitions
- [ ] seasons
- [ ] teams
- [ ] players
- [ ] matches
- [ ] standings
- [ ] lineups
- [ ] match_events
- [ ] users
- [ ] watchlists
- [ ] alerts
- [ ] market_assets
- [ ] provider_mappings
- [ ] raw_payloads
- [ ] sync_runs
- [ ] audit_logs

### 6.3 Database Rules
- [ ] narrow tables only
- [ ] sensible indexes only
- [ ] no speculative analytics warehouse tables for launch
- [ ] every table has timestamps where useful
- [ ] provider mappings are explicit
- [ ] user-state tables are separate from sports-truth tables

### 6.4 DB Acceptance
- [ ] migrations apply cleanly on fresh local setup
- [ ] migrations are idempotent in workflow
- [ ] rollback path exists for risky migration sequences

Quick fix:
- [ ] if schema churn is high, prefer additive migrations early over destructive rewrites

---

## 7. Canonical Graph And Provider Mapping

### 7.1 Internal Entity Strategy
- [ ] create stable internal IDs
- [ ] stop tying business logic to display names
- [ ] define provider mapping rules per entity type
- [ ] create mapping confidence / active window fields

### 7.2 Raw-To-Normalized Flow
- [ ] fetch provider data
- [ ] store raw payloads first
- [ ] record sync run
- [ ] normalize into canonical tables
- [ ] update serving views
- [ ] expose only serving shapes to API

### 7.3 Anomaly Handling
- [ ] missing team ID
- [ ] duplicate player candidate
- [ ] fixture moved/rescheduled
- [ ] inconsistent lineup payload
- [ ] null critical stats
- [ ] stale payload
- [ ] provider mismatch on entity identity

For each anomaly type:
- [ ] log it
- [ ] attach sync run ID
- [ ] do not silently publish broken user-facing data

Acceptance:
- [ ] raw -> normalized -> serving path exists
- [ ] mapping logic is documented
- [ ] anomalies are visible, not hidden

---

## 8. Provider Strategy And Competition Waves

### 8.1 Launch Provider Choice
Choose and write down:
- [ ] primary provider
- [ ] why chosen
- [ ] fallback provider later if needed
- [ ] rate-limit assumptions
- [ ] launch competitions supported

### 8.2 Wave 1 Competitions
Select only competitions that pass the acceptance bar:
- [ ] stable IDs
- [ ] decent lineups
- [ ] decent standings
- [ ] decent fixture freshness
- [ ] decent player/team completeness
- [ ] acceptable women’s competition depth where promised

### 8.3 Competition Acceptance Checklist
For each launch competition:
- [ ] teams present
- [ ] player records acceptable
- [ ] schedule acceptable
- [ ] standings acceptable
- [ ] lineups acceptable
- [ ] event freshness acceptable
- [ ] naming acceptable
- [ ] rights posture acceptable or fallback exists

Acceptance:
- [ ] launch competitions are written down
- [ ] unsupported competitions are not implied as supported

Quick fix:
- [ ] if a competition is shaky, downgrade or remove it instead of shipping a half-truth

---

## 9. Build The Minimum Real Backend

### 9.1 Express API Skeleton
- [ ] create route modules by domain
- [ ] avoid a giant `routes.ts`
- [x] add health endpoint
- [x] add readiness endpoint
- [ ] add request ID middleware
- [ ] add structured logging
- [ ] add centralized error handler

### 9.2 Minimum Launch Endpoints
Implement real or truthfully reduced endpoints for:
- [ ] search
- [ ] player
- [ ] team
- [ ] competition table
- [ ] match
- [ ] match timeline
- [ ] match stats
- [ ] watchlist
- [ ] alerts if in launch
- [ ] market asset read endpoint if needed

### 9.3 Backend Acceptance
- [ ] endpoints return stable shapes
- [ ] invalid params handled cleanly
- [ ] stale/no-data states handled cleanly
- [ ] no route depends on hardcoded page-local arrays

Quick fix:
- [ ] if a route cannot be made real in time, hide it from launch nav

---

## 10. Replace Launch-Critical Mocks

### 10.1 Launch Surfaces That Must Lose Mock Dependence
- [ ] home/dashboard launch cards
- [ ] search
- [ ] player profile
- [ ] team profile
- [ ] competition table
- [ ] match center
- [ ] saved/followed entities
- [ ] any launch `Market XI` backend read state if included

### 10.2 Real Data UX Requirements
For every launch surface:
- [ ] loading state
- [ ] empty state
- [ ] error state
- [ ] retry state
- [ ] last updated timestamp
- [ ] source label
- [ ] simulated label when relevant

### 10.3 Simulated Surface Cleanup
- [ ] remove fake AI behavior from launch nav
- [ ] label simulation-only pieces clearly
- [ ] remove fake-live implications

Acceptance:
- [ ] no launch-critical view is silently fake
- [ ] source and freshness are visible

---

## 11. Refactor Frontend For Launch Maintainability

### 11.1 Route-Level Code Splitting
- [ ] lazy-load route modules
- [ ] avoid eagerly importing all routes
- [ ] confirm no broken fallback states

### 11.2 Feature Extraction
Refactor the biggest launch pages into feature-based modules:
- [ ] player detail page
- [ ] dashboard
- [ ] match center
- [ ] team page
- [ ] competition page

### 11.3 API Hooks
- [ ] create typed hooks per feature
- [ ] use TanStack Query for server state
- [ ] stop page-level fetch shaping
- [ ] stop page-local data truth for launch routes

### 11.4 Bundle And Asset Cleanup
- [ ] compress large images
- [ ] defer non-critical assets
- [ ] remove unused imports
- [ ] investigate empty/unfinished folders
- [ ] clean dead code where safe

Acceptance:
- [ ] launch routes are smaller, clearer, and easier to test
- [ ] build output is improved
- [ ] no critical route regression after refactor

Quick fix:
- [ ] if deep refactor is too risky, wrap existing pages with hooks and lazy boundaries first

---

## 12. Match Center And Live Data

### 12.1 Launch Live Rules
- [ ] one truthful match-center path
- [ ] polling before websocket complexity
- [ ] timestamped refresh
- [ ] explicit stale-state UI
- [ ] no fake commentary path
- [ ] no contradictory score/timeline/stats paths

### 12.2 Match Center Must Show
- [ ] score/status
- [ ] key events
- [ ] lineups if available
- [ ] basic stats if available
- [ ] last updated timestamp
- [ ] source label

### 12.3 Match Center Must Not Imply
- [ ] sub-second live if you do not have it
- [ ] advanced event truth you do not actually ingest
- [ ] AI-generated live interpretation presented as fact

Acceptance:
- [ ] one real match center works
- [ ] stale-state behavior is honest

Quick fix:
- [ ] if event detail is weak, ship a simpler truthful match center, not a richer fake one

---

## 13. Market XI Safety And Backend Readiness

### 13.1 Keep Market XI Safe
- [ ] keep virtual-currency framing
- [ ] keep women’s football in same system if supported
- [ ] show simulation labels
- [ ] no betting or cash-out language
- [ ] no urgency dark patterns

### 13.2 Minimum Backend Support Later Or At Launch If Needed
- [ ] read market asset state
- [ ] read portfolio state
- [ ] simulated transaction endpoint only if ready
- [ ] audit entries for portfolio state changes
- [ ] source/explanation fields for price moves

### 13.3 Price-Move Explanation Requirement
If price changes are user-visible:
- [ ] show why price changed
- [ ] separate fundamentals vs simulated demand
- [ ] enforce min/max bounds or dampeners
- [ ] prevent impossible spikes

Acceptance:
- [ ] Market XI remains obviously simulation-only
- [ ] it cannot be confused with gambling or real-money trading

Quick fix:
- [ ] if backend state is not ready, keep it read-only or frontend-only and label it clearly

---

## 14. Localization, RTL, And Copy Safety

### 14.1 Launch Locales
- [ ] English
- [ ] Spanish
- [ ] French
- [ ] Arabic
- [ ] Portuguese
- [ ] Japanese
- [ ] Yoruba only if reviewed well

### 14.2 RTL Checklist
- [ ] use logical CSS properties
- [ ] verify directional icon behavior
- [ ] verify text alignment
- [ ] verify table/list layouts
- [ ] verify search and input behavior
- [ ] verify standings layout
- [ ] verify player/team names do not clip
- [ ] verify match-center flows in RTL

### 14.3 Football Vocabulary QA
- [ ] glossary for football terms
- [ ] no literal garbage translations
- [ ] consistent competition/team/player naming
- [ ] tone is football-native, not robotic

Acceptance:
- [ ] Arabic flow works at basic launch quality
- [ ] key strings do not break layout
- [ ] translations are consistent on launch routes

Quick fix:
- [ ] if a locale is poor, reduce launch locale count rather than ship low-quality localization

---

## 15. Testing And QA

### 15.1 Minimum Test Stack
- [ ] lint
- [ ] typecheck
- [ ] build
- [ ] API smoke tests
- [ ] critical path E2E
- [ ] launch-route rendering smoke checks

### 15.2 Critical E2E Paths
- [ ] app boots
- [ ] navigate to dashboard
- [ ] search returns results
- [ ] open player page
- [ ] open team page
- [ ] open competition table
- [ ] open match center
- [ ] `Market XI` page loads and keeps correct labeling
- [ ] mobile width sanity
- [ ] tablet width sanity

### 15.3 Data QA
- [ ] one match result verified against provider
- [ ] one table verified against provider
- [ ] one player profile spot-check
- [ ] one team profile spot-check
- [ ] one lineup spot-check
- [ ] one source label spot-check
- [ ] one freshness timestamp spot-check

Acceptance:
- [ ] critical paths pass before deploy
- [ ] no launch surface is unverified

Quick fix:
- [ ] if a low-priority page breaks, move it out of launch rather than blocking launch core

---

## 16. Observability And Logging

### 16.1 Required Before Public Beta
- [ ] Sentry integrated in frontend
- [ ] Sentry integrated in API if practical
- [ ] structured API logs
- [ ] request IDs
- [ ] sync job logs
- [ ] deploy metadata visible in logs

### 16.2 Operational Alerts
At minimum, alert on:
- [ ] failed deploy
- [ ] failed sync job
- [ ] repeated API 5xx
- [ ] broken match-center fetches
- [ ] major frontend crash loop

### 16.3 Release Checklist
Every release should answer:
- [ ] what changed
- [ ] what routes changed
- [ ] what migrations ran
- [ ] what sync changes landed
- [ ] what to verify after deploy
- [ ] how to roll back

Acceptance:
- [ ] you can detect failure quickly after launch

---

## 17. Security And Secret Handling

### 17.1 Secrets
- [ ] never commit secrets
- [ ] `.env.example` exists
- [ ] provider key env vars documented
- [ ] Supabase keys documented by purpose
- [ ] Cloud Run env vars documented
- [ ] GitHub Actions secrets documented

### 17.2 Route Security
- [ ] write routes protected
- [ ] input validation on every route
- [ ] error messages do not leak secrets
- [ ] auth boundary documented if auth is enabled

### 17.3 Audit Trail
For sensitive or important actions:
- [ ] sync run recorded
- [ ] provider mapping override recorded
- [ ] simulated portfolio changes recorded if server-backed
- [ ] admin/manual data fixes recorded

Acceptance:
- [ ] secrets are not leaking
- [ ] sensitive behavior is explainable later

---

## 18. Deployment — Web First

### 18.1 Cloudflare Pages
Terminal-first:
- [ ] build web assets
- [ ] choose Git integration or direct upload
- [ ] if direct upload, document exact terminal command path
- [ ] verify production env vars
- [ ] verify custom domain or default project URL
- [ ] verify caching/asset path behavior

### 18.2 Cloud Run
Terminal-first:
- [ ] containerize API if needed
- [ ] build image
- [ ] push image
- [ ] deploy with `gcloud`
- [ ] set env vars
- [ ] verify service URL
- [ ] verify health/readiness
- [ ] verify logs

### 18.3 Supabase Production
Terminal-first where possible:
- [ ] link project
- [ ] apply migrations
- [ ] confirm schema
- [ ] confirm auth config if used
- [ ] confirm row-level policies if used

### 18.4 Staging Pass
- [ ] staging build deployed
- [ ] launch routes manually tested
- [ ] source labels present
- [ ] timestamps present
- [ ] no broken nav
- [ ] no obvious console errors
- [ ] API logs healthy

### 18.5 Production Pass
- [ ] production build deployed
- [ ] smoke test repeated
- [ ] Sentry events visible
- [ ] sync job healthy
- [ ] rollback note ready

Acceptance:
- [ ] web app is publicly stable before iOS packaging begins

Quick fix:
- [ ] if production breaks, rollback immediately and investigate offline

---

## 19. iOS Packaging With Capacitor

### 19.1 Terminal-First Capacitor Setup
- [ ] install Capacitor packages
- [ ] `npx cap init`
- [ ] verify `webDir`
- [ ] `npm run build`
- [ ] `npx cap add ios`
- [ ] `npx cap sync`

### 19.2 Terminal-Friendly Verification
- [ ] verify iOS project generated
- [ ] verify build output syncs
- [ ] verify bundle ID configured in project files where possible
- [ ] commit generated config/files intentionally

### 19.3 Short Manual Path — Xcode
Use only when needed.
- [ ] open project with `npx cap open ios` or equivalent
- [ ] configure signing
- [ ] confirm icons/splash
- [ ] run on simulator
- [ ] run on physical iPhone
- [ ] verify safe areas
- [ ] verify keyboard/input
- [ ] verify nav and scroll behavior

### 19.4 Internal TestFlight
- [ ] archive build
- [ ] upload build
- [ ] add internal testers
- [ ] verify feedback path
- [ ] log any blocker before external testing

Acceptance:
- [ ] web-backed launch loop works on real iPhone
- [ ] no major wrapper regressions
- [ ] TestFlight internal build succeeds

Quick fix:
- [ ] if Capacitor wrapper quality is unacceptable, stop and reassess before external beta

---

## 20. App Store Submission

### 20.1 Manual Requirements
These are normally not worth over-automating early:
- [ ] screenshots
- [ ] app metadata
- [ ] privacy disclosures
- [ ] review notes
- [ ] support URL
- [ ] marketing URL if needed
- [ ] age rating

### 20.2 Review Preparation
- [ ] explain if any simulation exists
- [ ] explain no real money involved
- [ ] provide test credentials if needed
- [ ] ensure no misleading gambling wording
- [ ] ensure no rights-risk assets slipped in

Acceptance:
- [ ] submission package is coherent and honest

---

## 21. Cost Line Review

### 21.1 Before Launch
- [ ] estimate provider cost
- [ ] estimate Cloud Run cost posture
- [ ] estimate Pages posture
- [ ] estimate Supabase posture
- [ ] estimate Sentry posture
- [ ] note Apple Developer fee separately

### 21.2 During Beta
- [ ] monitor request volume
- [ ] monitor sync frequency
- [ ] monitor storage growth
- [ ] monitor API bottlenecks
- [ ] confirm no unjustified extra infra appears

Acceptance:
- [ ] launch stays within intended low-cost footprint or deviations are explicitly approved

---

## 22. Model And Math Checklist

### 22.1 Rankings
- [ ] choose launch ranking scope
- [ ] document formula
- [ ] document inputs
- [ ] document update cadence
- [ ] document confidence/caveats

### 22.2 Match Probabilities
- [ ] only if ready
- [ ] choose baseline Poisson/Dixon-Coles approach
- [ ] document home advantage
- [ ] document refresh cadence
- [ ] document validation metric

### 22.3 xG
- [ ] consume provider xG if available
- [ ] do not pretend custom xG exists if it does not
- [ ] if prototyping later, document features and validation

### 22.4 Market XI Pricing
- [ ] document safe price formula
- [ ] document floors/ceilings
- [ ] document demand/fundamentals split
- [ ] document price-change explanation UI
- [ ] verify anti-gambling wording

Acceptance:
- [ ] no model-like surface is unexplained
- [ ] no fake mathematical precision

---

## 23. Quick-Fix / Bug Classes

For each class, have a fast path.

### 23.1 Provider Bug
- [ ] identify bad payload
- [ ] identify sync run
- [ ] pause affected competition or endpoint if needed
- [ ] patch mapping or normalization
- [ ] rerun sync
- [ ] document fix

### 23.2 Migration Bug
- [ ] stop deploy
- [ ] rollback or restore previous schema state
- [ ] verify app boot
- [ ] verify critical endpoints
- [ ] write root-cause note

### 23.3 Route Regression
- [ ] hide route if non-core
- [ ] rollback if core
- [ ] fix lazy import or hook crash
- [ ] retest nav

### 23.4 Stale Data Bug
- [ ] verify scheduler ran
- [ ] verify cron timing
- [ ] verify provider rate limit not exceeded
- [ ] rerun sync manually if needed
- [ ] check timestamp display

### 23.5 Misleading UI Bug
- [ ] missing simulation label
- [ ] missing source label
- [ ] missing freshness timestamp
- [ ] missing error state
- [ ] fix immediately because trust risk is high

---

## 24. Final Launch Gate

Do not launch until all of these are true.

### Core Truth Gate
- [ ] launch routes are real or truthfully reduced
- [ ] no fake AI assistant in launch path
- [ ] source labels visible
- [ ] timestamps visible
- [ ] `Market XI` is clearly simulation-only

### System Gate
- [ ] lint/typecheck/build green
- [ ] critical path tests green
- [ ] API stable
- [ ] migrations stable
- [ ] deploy stable
- [ ] observability exists

### UX Gate
- [ ] mobile works
- [ ] tablet works
- [ ] desktop works
- [ ] low-bandwidth acceptable
- [ ] RTL critical flow acceptable
- [ ] no major clipping/layout failures

### Ops Gate
- [ ] rollback ready
- [ ] env vars documented
- [ ] provider configured
- [ ] sync jobs healthy
- [ ] error monitoring live

### iOS Gate
- [ ] only after web stack is stable
- [ ] internal TestFlight build good
- [ ] real iPhone verified

If any critical gate is not green:
- [ ] delay
- [ ] reduce scope
- [ ] do not fake readiness
