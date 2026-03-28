# BALDONTLIE Production Plan — Terminal-First, Project-Specific Edition

This is the tightened source-of-truth production plan for BALDONTLIE.

It is designed for this exact repository and this exact launch posture:
- real product code in `source-code/`
- current frontend is React + Vite with an Express wrapper
- most intelligence is still mocked
- `Market XI` is the cleanest frontend feature and must remain clearly simulation-only
- launch target is a truthful web-first product with iOS packaging after web stability
- day-to-day execution should happen from the VS Code terminal first, using AI tools wherever possible

This plan intentionally preserves room for minor changes without allowing architectural drift.

---

## 0. How To Use This Plan

### 0.1 Document Status

This file is the live decision record for launch.
`BALDONTLIE_PRODUCTION_CHECKLIST.md` is the executable companion.
`REPO_OVERVIEW.md` is the exact current-state repo reference.
Research files remain preserved as supporting evidence, not live authority.

### 0.2 Change Policy: What Is Locked vs Adjustable

To allow minor changes without losing discipline, every decision belongs to one of four classes.

#### Locked
These should not change unless a major project truth changes:
- truthful launch posture over breadth
- web first, iOS second
- `Market XI` remains simulation-only
- React + Vite frontend remains the launch frontend
- Express remains the first API service
- Supabase Postgres/Auth remains the launch persistence/auth choice
- Cloudflare Pages remains the first web host
- Google Cloud Run remains the first API host
- GitHub Actions remains the first scheduled sync/CI runner
- terminal-first execution rule
- no betting framing, no fake-live claims, no fake AI presented as real

#### Adjustable
These can change with a short written reason in the commit or PR:
- whether login is required for public launch
- which exact competitions are in Wave 1
- which provider is primary between API-Football and Sportmonks
- polling interval values
- cache TTLs
- route labels (`launch`, `beta`, `demo`, `hide`, `later`)
- which screens make the final v1 slice
- the exact Learn/Fan/Scout language and copy
- specific package choices where the responsibility stays the same

#### Deferred
These are valid later paths, but should not be pulled into launch unless the launch posture changes:
- Redis
- ClickHouse
- websocket-heavy live systems
- immediate monorepo migration
- React Native / Expo rewrite
- advanced AI assistant in production
- wide social/community rollout
- deep scout workspace
- always-on worker fleet

#### Forbidden At Launch
- real-money mechanics
- sportsbook language
- direct unlicensed streaming/video hosting
- claiming live freshness you do not actually have
- screenshot-driven fake intelligence
- model outputs without explanation and timestamping

---

## 1. Project Truths This Plan Assumes

### 1.1 Current Repository Truth

The current repository is:
- a football intelligence prototype with premium dark UI
- React + Vite frontend
- lightweight Express wrapper
- heavy use of mock data
- broad route coverage
- stronger as a frontend prototype than as a production system
- strongest structurally inside the newer `Games` feature area, especially `Market XI`

### 1.2 Practical Codebase Reality

The repo already has:
- reusable UI foundation
- route shell
- working local boot/build/typecheck
- large page surfaces rebuilt as premium prototype surfaces
- full i18n system: 25 locales, flat-string key architecture, RTL support for Arabic and Hebrew, page-level `t()` coverage across all major surfaces, language switcher with native names, localStorage persistence
- Director Mode page (beta squad-planning workspace)
- shared `product-status.ts` route metadata driving the shell nav
- shared `components/shared/` reusable module area
- a very thin backend scaffold
- minimal shared schema

The repo does not yet have:
- real API surface
- real persistence
- meaningful auth flow in use
- broad query layer against live APIs
- real test suite
- lint pipeline
- stable observability
- stable data ingestion pipeline

### 1.3 Product Truth

BALDONTLIE is not “just a scores app.”
It is a football-first intelligence product that can later combine:
- live football utility
- player/team/match intelligence
- scouting-oriented discovery
- compare/ranking flows
- selective, explainable AI support
- a safe simulation-only `Market XI`

At launch, however, it must act like one truthful core product, not a pile of partially convincing demos.

---

## 2. Launch Objective

### 2.1 Main Objective

Ship a trustworthy first production beta that:
- serves roughly 200 concurrent users comfortably
- proves one truthful football data backbone
- proves one real match-center flow
- proves entity-first pages for players, teams, competitions, and matches
- proves saved entities / watchlist / alerts or a reduced equivalent
- preserves the premium frontend identity already present
- does not overbuild beyond the current scale and budget reality

### 2.2 Launch Surfaces

Launch surfaces:
- web
- iOS wrapper after web stability

### 2.3 Cost Objective

Target recurring runtime under `$20/month` at first deployment, excluding the annual Apple Developer fee.

### 2.4 Operating Principle

Every choice should preserve:

`truth > consistency > editability > observability > performance > breadth`

If a decision improves novelty but weakens trust, it loses.

---

## 3. Terminal-First Execution Rule

This project should be executed from the VS Code terminal first.

### 3.1 Primary Rule

If a task can reasonably be done from:

- Codex
- shell commands
- local scripts
- repo files
- CLIs
- CI pipelines

then it should be done there first.

### 3.2 Only Use GUI / Manual Tools When One Of These Is True

Use a GUI or manual external tool only if:
- Apple signing / Xcode / TestFlight / App Store Connect requires it
- a cloud console step is materially faster or the CLI path is blocked
- a one-time credential grant or project creation requires it
- visual verification is necessary and the terminal cannot substitute

### 3.3 Required Brief Manual-Step Standard

Whenever a step must leave the terminal, document:
1. why terminal-first stopped
2. the shortest manual path
3. what to return to terminal with afterward

### 3.4 Examples

Good:
- create migrations with terminal
- generate API types from terminal
- run local Supabase from terminal
- deploy Cloud Run with `gcloud`
- deploy Pages with `wrangler` or Git integration
- run tests, lint, load checks, and screenshots from terminal

Acceptable manual exceptions:
- Apple certificate/profile handling in Xcode
- App Store Connect metadata/review flows
- final iPhone device verification
- one-time Cloudflare/GCP/Supabase project UI setup if CLI setup is blocked

### 3.5 Progress Logging Rule

`PROGRESS.md` is mandatory.

It must be updated continuously while work is happening.

Every meaningful change batch should record:
- local timestamp
- summary of what changed
- files changed
- commands run
- result
- bugs/issues/failures
- bottlenecks/blockers
- next step

The progress log is not a summary written at the very end of a long session.
It is the running execution history for the project.

### 3.6 Frontend Visual Documentation Rule

Meaningful frontend visual changes should also update the visual documentation set.

Expected flow:
- capture screenshot(s) from the running frontend
- save them in `assets/screenshots/`
- update `FRONTEND_VISUAL_REFERENCE.md` when the visuals explain a feature, state, or architectural direction better than text alone
- note the screenshot/documentation update in `PROGRESS.md`

---

## 4. Locked Launch Stack

## 4.1 Frontend

- React
- Vite
- TypeScript
- TanStack Query for server state
- light client state only where server state is not appropriate
- shadcn/Radix-style UI primitives already present in repo
- CSS logical properties required for RTL-safe layout
- route-level lazy loading required before launch

## 4.2 API Layer

- Express
- TypeScript
- Zod for request/response validation at runtime
- OpenAPI contract-first documentation
- generated TypeScript client from OpenAPI
- structured error objects
- health and readiness endpoints

Current repo truth:

- `/api/health` exists
- `/api/system/readiness` exists
- `/api/system/routes` exists
- those routes are truthful repo/system metadata only, not the football feature API layer

## 4.3 Persistence

- Supabase Postgres as system of record
- Supabase Auth if login is required at launch
- narrow schemas only
- raw provider payload retention only for supported competitions
- no speculative table explosion

## 4.4 Jobs / Automation

- GitHub Actions for:
  - CI
  - scheduled sync jobs
  - validation tasks
  - doc consistency checks
- no always-on worker fleet at launch

## 4.5 Hosting

- Cloudflare Pages for the web frontend
- Google Cloud Run for the Express API
- Sentry for errors/performance monitoring
- static assets pushed to CDN path
- no extra infra unless a measured need exists

## 4.6 iOS

- Capacitor added to the existing web app
- Xcode-managed native packaging
- internal TestFlight first
- small external TestFlight after web stability
- App Store only after web-backed experience is stable

---

## 5. Route and Scope Rules

## 5.1 Route Labeling System

Every current route must be labeled as one of:
- `launch`
- `beta`
- `hide`
- `later`

### 5.2 Launch Rule

A route can only be `launch` if:
- it has real or truthfully limited data
- it has loading/empty/error states
- it has stable navigation
- it does not misrepresent fake-live or fake-AI behavior
- it can be tested and monitored
- it fits the first truthful loop

### 5.3 First Truthful Loop

The target launch loop is:

`home/dashboard -> search -> player -> team -> competition table -> match center -> saved entities`

`Market XI` is allowed only if:
- it remains clearly virtual/simulated
- it uses non-gambling language
- its “price” or portfolio behavior is clearly educational/simulation-only
- it is not presented as the central launch hero

### 5.4 Explicitly Not Launch-Critical

Do not launch these unless they become fully truthful:
- generic floating AI assistant
- open social/community
- broad feed layer
- broad scout workspace
- broad games hub
- predictions presented with unjustified certainty
- any data-rich page that is still mostly hardcoded demo content

---

## 6. Architecture Model

The architecture is intentionally modest physically, but modular logically.

### 6.1 Experience Layer

Responsibilities:
- web UI
- iOS packaging
- localization
- offline-capable shell
- density modes
- view-model rendering
- stale-state labeling
- safe error display

### 6.2 Product/API Layer

Responsibilities:
- typed contracts
- validation
- auth boundary
- serving views
- search API
- player/team/match/table/user-state endpoints
- source/freshness metadata
- model metadata exposure

### 6.3 Intelligence Layer

Launch posture:
- very selective
- only transparent, explainable, narrow models
- no large production AI assistant at launch

Later responsibilities:
- rankings
- match probabilities
- xG enrichment
- scouting similarity
- market simulation support
- retrieval ranking
- explainability layer

### 6.4 Data/Platform Layer

Responsibilities:
- provider ingest
- normalization
- canonical football graph
- serving tables/views
- caching where needed
- observability
- audit trails
- release safety

---

## 7. Canonical Football Graph

Everything advanced depends on one stable internal graph.

### 7.1 Core Entities

Minimum launch domain:
- Competition
- Season
- Team
- Player
- Match
- Standing
- MatchEvent
- Lineup
- User
- Watchlist
- Alert
- MarketAsset

Later domain:
- Transfer
- Injury
- Suspension
- Article
- FeedItem
- Notification
- Portfolio
- Transaction
- Topic
- Comment
- ModelSnapshot
- ProviderMapping
- RawPayload
- AuditLog

### 7.2 ID Rules

- every product entity gets a stable internal ID
- provider IDs are mappings, not product truth
- never key business logic off a display name
- every user-visible view includes source metadata and freshness metadata
- provider remaps must be auditable

### 7.3 Minimum Tables

Recommended first tables:
- `competitions`
- `seasons`
- `teams`
- `players`
- `matches`
- `standings`
- `match_events`
- `lineups`
- `users`
- `watchlists`
- `alerts`
- `market_assets`
- `provider_mappings`
- `raw_payloads`
- `sync_runs`
- `audit_logs`

### 7.4 Example Provider Mapping Shape

```sql
provider_mappings (
  id uuid primary key,
  internal_entity_type text not null,
  internal_entity_id uuid not null,
  provider text not null,
  provider_entity_id text not null,
  confidence numeric(5,4) not null default 1.0,
  active_from timestamptz,
  active_to timestamptz,
  created_at timestamptz not null default now()
);
```

### 7.5 Example Raw Payload Shape

```sql
raw_payloads (
  id uuid primary key,
  provider text not null,
  endpoint text not null,
  requested_at timestamptz not null,
  payload_json jsonb not null,
  checksum text,
  sync_run_id uuid,
  created_at timestamptz not null default now()
);
```

---

## 8. Data Provider Strategy

## 8.1 Provider Posture

Use one primary provider for launch.
Do not build a multi-provider reconciliation engine before a stable single-provider ingest exists.

### 8.2 Launch Candidates

Primary launch candidate should be one of:
- API-Football
- Sportmonks

Selection criteria:
- coverage quality for Wave 1 competitions
- developer ergonomics
- rate limits
- fixture/event/lineup/standing consistency
- reasonable monthly cost
- acceptable injury/transfer coverage
- acceptable women’s football coverage for the first supported set

### 8.3 Research-Only / Model-Only Inputs

- StatsBomb Open Data for R&D, calibration experiments, prototyping, and model validation
- not as sole product backbone

### 8.4 Competition Waves

#### Wave 1
Purpose: trustworthy beta coverage

Candidate set:
- Premier League
- La Liga
- Serie A
- Bundesliga
- Ligue 1
- UEFA Champions League
- WSL
- NWSL
- UWCL
- selected major international qualifiers/tournaments

#### Wave 2
Purpose: wider serious coverage

Candidate additions:
- Portugal
- Netherlands
- Belgium
- Turkey
- Brazil
- Argentina
- MLS
- Liga MX
- Saudi Pro League
- selected continental club competitions

#### Wave 3
Purpose: long-tail expansion only after quality gates

### 8.5 Competition Acceptance Rule

A competition only ships as properly supported if you can defend:
- stable team IDs
- stable player IDs
- reliable match/fixture status
- reasonable lineup availability
- reasonable event availability
- reasonable standings integrity
- acceptable freshness
- acceptable localized naming
- acceptable media-rights posture or fallback path

If not, the competition stays out of launch or is reduced in feature depth.

---

## 9. Rights And Media Rules

### 9.1 Default Legal Safety Posture

Assume you do **not** have broad automatic rights to:
- player photos
- club logos
- federation marks
- league marks
- broadcast images
- hosted video clips
- direct streams

### 9.2 Launch Policy

Allowed by default:
- factual data
- text naming
- own UI graphics
- neutral placeholders
- silhouettes
- official watch-link style only if legally safe and source-labeled

Avoid at launch:
- scraping and storing copyrighted football imagery
- direct video hosting
- pretending logo/photo availability is guaranteed

### 9.3 Fallback Strategy

If rights are unclear:
- use initials, silhouettes, neutral shields, or text-only identities
- keep image/logo support as optional enrichment, not a schema dependency

---

## 10. API Contract Strategy

OpenAPI is required before major backend expansion.

### 10.1 Minimum Public API Surface

```text
GET  /v1/search
GET  /v1/players/:playerId
GET  /v1/teams/:teamId
GET  /v1/competitions/:competitionId
GET  /v1/competitions/:competitionId/table
GET  /v1/matches/:matchId
GET  /v1/matches/:matchId/timeline
GET  /v1/matches/:matchId/stats
GET  /v1/matches/live
GET  /v1/transfers
GET  /v1/rankings/international
GET  /v1/rankings/clubs
GET  /v1/market/assets/:playerId
POST /v1/watchlists
POST /v1/alerts
```

### 10.2 Response Rules

Every response should carry:
- internal IDs
- `lastUpdatedAt`
- `sourceProvider`
- `freshnessClass`
- `isSimulated` where applicable
- pagination/cursor info when relevant

### 10.3 Error Shape

Recommended minimum:
```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Player not found",
    "requestId": "req_123",
    "timestamp": "2026-03-27T23:00:00Z"
  }
}
```

### 10.4 Validation Rules

- validate request params, query, and body with Zod
- never trust provider payload shapes blindly
- never pass raw provider JSON straight to frontend views

---

## 11. Backend Runtime Design

## 11.1 Launch Runtime Responsibilities

### API service
- request handling
- auth boundary
- validation
- typed serving views
- structured logging
- health endpoints

### ingest job
- poll provider
- store raw payloads
- record sync run
- retry on transient failures

### normalization job
- map provider data to canonical graph
- update serving tables
- record anomalies

### live projection job
- build current match state for supported views
- no separate contradictory truth paths

### model job
- only for approved narrow models
- batch execution only at first if possible

### notification job
- alert/send logic only if launch requires it

## 11.2 Job Design Rules

- idempotent inputs
- explicit retry policy
- dead-letter capture for failed runs
- no provider write goes straight to live UI tables without normalization
- no hidden manual fixes without audit log entries

---

## 12. Live Data Policy

### 12.1 What Launch Means

Launch does **not** mean “full real-time everywhere.”

### 12.2 Launch Live Policy

- use refresh-based updates first
- use HTTP polling where acceptable
- timestamp everything
- keep one truthful match-center path
- if a live surface is stale, say so explicitly
- do not fake commentary, momentum, or AI interpretation

### 12.3 Deferred Live Upgrades

Only add these later when justified:
- SSE for match center
- websocket fan-out
- hot in-memory state clusters
- wide live event architecture across many surfaces

---

## 13. Offline And Stale-State Rules

### 13.1 Product Truth

Offline should be “stale but useful,” never “fake live.”

### 13.2 Offline-Capable Surfaces

Can be cached:
- followed players
- followed teams
- last-opened player/team pages
- competition tables
- recent match summaries
- saved notes
- watchlists
- glossary/explainer content

Online-only:
- live match truth
- trade execution if Market XI gets backend execution
- freshness-dependent alerts

### 13.3 Sync Rules

- queued writes for notes/watchlists if implemented
- stale state clearly labeled with `Last synced`
- immutable sports truth always reconciles to server truth
- user-authored local objects may use last-write-wins if low-risk

---

## 14. Frontend Refactor Strategy

## 14.1 Immediate Frontend Priorities

1. route-level lazy loading
2. loading/empty/error/retry states
3. extraction of top 5 launch surfaces into feature modules
4. typed API hooks
5. removal of page-local hardcoded intelligence where launch-critical
6. bundle trimming
7. image optimization
8. RTL-safe layout refactor
9. clear simulated-vs-real labeling

### 14.2 Refactor Targets

Highest-value pages to refactor first:
- `dashboard`
- `players/index`
- `players/[id]`
- one team page
- one match center
- one competition table
- any route included in the final launch slice

### 14.3 Client State Rules

Use server state for:
- entity data
- match data
- standings
- transfers
- alerts
- user server-backed state

Use local UI state for:
- tab selection
- modal visibility
- filter drawers
- density mode
- theme
- ephemeral local form state

---

## 15. Localization And RTL Rules

### 15.1 Launch Language Posture

Launch fewer languages well:
- English
- Spanish
- French
- Arabic
- Portuguese
- Japanese
- Yoruba only if human QA is available

### 15.2 Required RTL Rules

- use CSS logical properties, not left/right-specific layout rules
- test entire football flows in Arabic:
  - search
  - standings
  - player profile
  - match center
  - Market XI cards
- do not blindly mirror charts or logos
- directional icons should flip where semantically appropriate

### 15.3 Translation Quality Rules

- no lazy literal translations for football terms
- football vocabulary glossary required
- machine translation must be reviewed for priority locales
- player/team name clipping must be tested

---

## 16. Observability, QA, And Safety

## 16.1 Observability Baseline

Required before public beta:
- structured request logging
- request IDs
- Sentry integration
- deployment environment tagging
- sync job success/failure logs
- basic alerting for failed ingest and severe frontend errors

### 16.2 QA Baseline

Required before launch:
- linting
- formatting
- typecheck
- build verification
- smoke E2E for core launch loop
- API contract checks
- route sanity checks
- mobile width checks
- tablet checks
- cold load checks
- low bandwidth checks

### 16.3 Release Safety

Every release should have:
- what changed
- what routes changed
- which migrations ran
- whether provider mappings changed
- rollback path
- known issues
- post-deploy checks

---

## 17. Security And Permissions

### 17.1 Minimum Security Rules

- no secrets committed
- `.env.example` kept current
- provider keys only in env/secret managers
- auth-required write routes protected
- server-side input validation everywhere
- no trust in frontend-supplied authorization state
- audit sensitive operations if implemented

### 17.2 User-State Scope At Launch

Launch user state should stay narrow:
- watchlist
- alerts or saved entities
- minimal settings/profile
- Market XI persistence only if needed and safe

Avoid broad user-generated content at launch.

---

## 18. Model And Math Plan

Launch should use only models that are:
- explainable
- reproducible
- data-supported
- easy to validate
- not misleadingly overconfident

## 18.1 International Team Rankings

### Problem
Provide a trustworthy ranking users recognize.

### Launch Recommendation
Mirror FIFA-style rating logic as closely as practical.

### Formula
Use an Elo/SUM-style update:

`R_new = R_old + I * (W - W_e)`

Where:
- `R_old` = previous rating
- `I` = match importance weight
- `W` = actual result value
- `W_e` = expected result

Expected result:

`W_e = 1 / (10^(-(R_A - R_B)/600) + 1)`

### Why
- transparent
- recognizable
- explainable
- enough for launch

### Validation
- compare movement against official ranking movement
- rank correlation over time
- predictive lift over naive form-only ranking

### Failure Modes
- overweighting friendlies
- bad initialization
- stale ratings for low-activity teams

## 18.2 Club Strength Ratings

### Launch Recommendation
Transparent house Elo with home advantage.

### Expected result
`E_home = 1 / (1 + 10^(-(R_h + H - R_a)/400))`

Where:
- `R_h` = home team rating
- `R_a` = away team rating
- `H` = home advantage adjustment

Update:
`R_new = R_old + K * (actual - expected)`

### Inputs
- results
- venue/home/neutral
- competition strength
- date

### Validation
- log loss / Brier score on outcome forecasts
- calibration vs actual outcomes

## 18.3 Match Outcome Probabilities

### Launch Recommendation
Poisson or Dixon-Coles baseline, not black-box first.

### Simple Poisson expectation
If:
- `lambda_home` = expected home goals
- `lambda_away` = expected away goals

Then:
`P(home=x, away=y) = Pois(x; lambda_home) * Pois(y; lambda_away)`

### Dixon-Coles Improvement
Use low-score correction if data maturity justifies it.

### Inputs
- team attack strength
- team defense strength
- home advantage
- recent form weighting
- optionally injuries/lineups later

### Validation
- Brier score
- log loss
- calibration curves
- compare against naive baseline

### Launch Rule
Keep probabilities secondary and explained.
Do not frame them like betting odds.

## 18.4 xG

### Launch Recommendation
Consume provider xG if available.
Do not build a production xG model before the event data foundation is stable.

### Later Build Inputs
- shot distance
- shot angle
- body part
- shot type
- assist type
- game state
- sequence context
- optional defensive context if available

### Simple distance formula
Distance from shot point `(x, y)` to goal center `(x_g, y_g)`:

`distance = sqrt((x - x_g)^2 + (y - y_g)^2)`

### Simple angle concept
Approximate open-goal angle from shot location to both posts.

### Later model candidates
- logistic regression
- XGBoost / LightGBM
- only if event data quality is strong enough

### Validation
- AUC
- calibration curve
- Brier/log loss on shot outcome classification

## 18.5 Player Comparison

### Launch Recommendation
Percentiles + cohort-aware comparisons before deep similarity embeddings.

### Inputs
- position/role bucket
- minutes floor
- competition strength
- core stat set
- per-90 and possession-adjusted views where meaningful

### Validation
- sanity checks against known comparable players
- internal review by football-literate evaluation
- no cross-role nonsense

## 18.6 Scouting Similarity

### Launch Recommendation
Delay production rollout.
Prototype only after player pages and data quality are stable.

### Candidate method
Weighted feature distance:
`distance(p, q) = sqrt(sum_i w_i * (p_i - q_i)^2)`

Where:
- `w_i` = feature importance weight
- `p_i`, `q_i` = normalized feature values

### Failure Modes
- bad normalization
- cross-role comparisons
- cross-league distortions

## 18.7 Transfer Valuation

### Launch Recommendation
Do not make it a central launch claim.

### Candidate transparent composite
`value = role_base * age_curve * performance_factor * contract_factor * league_factor * availability_factor`

Inputs:
- age
- contract length
- role-adjusted performance
- league strength
- injury/availability
- minutes reliability

### Failure Modes
- transfer fees are noisy and strategic
- users overread precision
- poor cross-league comparability

## 18.8 Market XI Simulation Pricing

### Product Rule
This is simulation-only and must not mimic trading/gambling harm patterns.

### Candidate launch-suitable pricing model
Use a bounded composite rather than a fake financial market engine at first.

`price_next = clamp(price_now * (1 + alpha * fundamentals_delta + beta * demand_delta - gamma * volatility_dampener), floor, ceiling)`

Where:
- `fundamentals_delta` = recent performance / value driver change
- `demand_delta` = user demand pressure in simulation
- `volatility_dampener` = protection against extreme swings
- `floor`, `ceiling` = explicit safety bounds

Optional simpler bounded update:
`price_next = clamp(base_price + form_component + demand_component - cooldown_component, min_price, max_price)`

### Launch Rule
- no cash framing
- no “odds”
- no “bet”
- no withdrawal/cash-out analogues
- transparent “why price changed” explanation

---

## 19. AI Assistant Plan

### 19.1 Launch Rule

No broad production AI assistant at launch.
Anything currently simulated must be removed or clearly labeled as simulated.

### 19.2 Later Assistant Architecture

When ready, the assistant must be:
- football-only in scope
- tool-using
- retrieval-grounded
- mode-aware (`Learn`, `Fan`, `Scout`)
- citation-capable
- freshness-aware

### 19.3 Retrieval vs Generation Rule

Retrieve:
- stats
- standings
- player/team/match facts
- glossary snippets
- stored explainers
- provider timestamps

Generate:
- prose explanation
- beginner-friendly phrasing
- comparison narrative
- summary formatting

### 19.4 Minimum Tool Surface Later

- `searchPlayers`
- `getPlayerProfile`
- `comparePlayers`
- `searchMatches`
- `getMatchTimeline`
- `getTeamForm`
- `getCompetitionTable`
- `getTransfers`
- `getMarketAsset`
- `searchKnowledgeBase`

### 19.5 Failure Modes To Avoid

- generic sports chatbot drift
- uncited statistics
- stale facts presented as current
- fake confidence
- model-memory invention

---

## 20. Terminal-First Tool Map

## 20.1 Use From VS Code Terminal First

### Repo / package work
- `git`
- `npm`
- `npx`
- local scripts
- AI / Codex

### Typecheck / build / tests
- `npm run check`
- `npm run build`
- future lint/test scripts

### API spec generation
- local generators from terminal

### Supabase local
- `supabase init`
- `supabase start`
- migrations / db tasks from terminal

### Cloud Run deployment
- `gcloud` commands from terminal

### Cloudflare deployment
- `wrangler` / Pages direct upload or Git-based flow

### Capacitor
- `npx cap init`
- `npx cap add ios`
- `npx cap sync`
- `npx cap open ios`

## 20.2 Short Manual-Step Exceptions

### Xcode
Use when:
- signing
- provisioning
- bundle config verification
- archive/export/build validation on device

### App Store Connect
Use when:
- TestFlight metadata
- tester management
- app privacy details
- screenshots
- submission/review notes

### Brief rule
Return to terminal immediately after the required manual step.

---

## 21. Phase Plan

## Phase 1 — Lock The Truthful Launch Slice

Outputs:
- route inventory
- route labels
- final v1 slice
- login decision
- launch competition list
- launch provider decision
- simulation labeling rules

Acceptance:
- every current route has status
- every launch route has an owner
- every hidden route is removed from launch nav

## Phase 2 — Harden Repo And Tooling

Outputs:
- ESLint
- Prettier
- CI
- `.env.example`
- `PROGRESS.md`
- doc map
- environment flow
- release notes template
- deploy notes

Acceptance:
- lint/typecheck/build pass in CI
- docs stop contradicting repo truth
- progress history is being maintained continuously during execution

## Phase 3 — Build Minimum Real Backend

Outputs:
- OpenAPI v1
- migrations
- canonical tables
- provider mapping path
- request validation
- structured errors
- health/readiness routes
- search/player/team/table/match endpoints

Acceptance:
- backend serves real data for Wave 1 coverage
- raw -> normalized -> serving flow exists
- launch-critical endpoints tested

## Phase 4 — Replace Launch-Critical Mocks

Outputs:
- real search
- real player
- real team
- real table
- real match center
- source labels
- timestamps
- real/fake labeling

Acceptance:
- launch surfaces no longer rely on hardcoded demo intelligence
- stale/empty/error states visible and sane

## Phase 5 — Keep Runtime Lean

Outputs:
- scheduled sync jobs
- no always-on live stack
- polling intervals
- API stays stateless
- no Redis/ClickHouse in launch path

Acceptance:
- sync frequency acceptable
- no hidden infra creep

## Phase 6 — Optimize Web App

Outputs:
- lazy loading
- image optimization
- mobile/tablet checks
- low-bandwidth checks
- Sentry

Acceptance:
- acceptable cold load
- acceptable mobile UX
- no catastrophic route bundle issues

## Phase 7 — Deploy Web First

Outputs:
- Cloudflare Pages deploy
- Cloud Run deploy
- Supabase env wiring
- staging pass
- production pass
- rollback note

Acceptance:
- public web URL stable
- logs sane
- sync jobs healthy
- basic monitoring in place

## Phase 8 — Package iOS With Capacitor

Outputs:
- Capacitor config
- iOS project
- bundle ID/icons/splash
- safe-area checks
- keyboard/nav checks
- internal TestFlight

Acceptance:
- app opens cleanly
- core launch loop works on real iPhone
- no major web-wrapper regressions

## Phase 9 — Submit To The App Store

Outputs:
- screenshots
- privacy disclosures
- review notes
- test credentials if needed
- release plan

Acceptance:
- web-backed experience already stable
- TestFlight issues are addressed

## Phase 10 — Hold The Cost Line

Outputs:
- runtime cost review
- provider cost review
- usage review
- infra creep review

Acceptance:
- no unjustified infra added
- budget posture still respected

---

## 22. Rollback And Quick-Fix Philosophy

Every risky change should have:
- file list
- rollback command
- migration rollback note if needed
- test to verify revert
- route impact note

### Quick-fix categories
- provider mapping bug
- stale sync bug
- broken route import
- broken env var
- bad migration
- broken mobile safe area
- simulated label missing
- source/timestamp missing

For each of those, the checklist should require:
- detection path
- immediate rollback path
- root-cause follow-up

---

## 23. Final Build Rule

Do not confuse “detailed” with “bloated.”
This project should be:
- highly specific
- highly testable
- highly documented
- terminal-first
- mathematically honest
- operationally modest
- flexible in small things
- rigid in trust-critical things
