ULTIMATE PROJECT PLAN
Football Intelligence Platform
A detailed end-to-end build plan for a football-first operating system spanning web + iOS, real data, live 
match intelligence, scouting workflows, multilingual UX, a football-only AI assistant, and a simulation-only 
Market XI.
Plan basis Master plan + repo overview + merged 
research results
Launch target ~200 concurrent users comfortably, web beta + 
iOS beta
Core product posture Football-first, high-trust, anti-gambling, rights-
aware, multilingual, women’s-parity by design
Current repo reality Premium frontend prototype with mock-heavy 
data, thin backend scaffold, and repo hygiene gaps
Planning priority Do not over-engineer for 1M users now; do not 
under-engineer the truth layer
This document intentionally optimizes for product truth, maintainability, performance, editability, and 
explainability. It favors boring reliability over flashy fragility, and it assumes that the current frontend shell 
is visually strong but not yet production-trustworthy. The plan is tailored to the football platform exactly as 
described in the master plan and the repo audit.

Table of Contents
• 1. Executive summary and hard truths
• 2. Product boundaries, product promise, and what the platform is not
• 3. Current-state assessment and mandatory corrections before serious shipping
• 4. Target architecture: experience, product/API, intelligence, data/platform
• 5. Monorepo, coding standards, and code organization
• 6. Canonical football graph and internal entity model
• 7. Data-provider strategy, coverage waves, media rights, and competition acceptance
• 8. Backend service map, queues, jobs, and runtime responsibilities
• 9. API contracts, versioning strategy, and endpoint surface
• 10. Database plan: Postgres, Redis, ClickHouse, object storage, and auditability
• 11. Realtime match architecture and event projections
• 12. Web app, iOS app, shared UI system, and state architecture
• 13. Search, retrieval, personalization, and feed architecture
• 14. Offline strategy, sync rules, and stale-state behavior
• 15. Localization, RTL, typography, and cultural-language handling
• 16. Football-only AI assistant architecture and evaluation plan
• 17. Models and machine learning plan
• 18. Market XI pricing, safety rules, and backend support plan
• 19. Security, privacy, trust, moderation, and anti-gambling design
• 20. Observability, testing, QA, and release engineering
• 21. Step-by-step implementation plan and acceptance gates
• 22. Launch checklist for the first real production beta
• 23. Future expansion paths and what to delay on purpose

1. Executive summary and hard truths
The platform should be built as one football operating system, not as a pile of unrelated pages. Every 
surface - player profiles, team hubs, match center, rankings, scouting, feed, assistant, and Market XI - 
must read from the same normalized internal football graph so that the product never shows 
contradictory truth depending on which screen a user opens. This principle already appears in the 
master plan and is supported by the strongest merged research result: narrow the first truthful loop 
before widening the product.
• Do not launch broad intelligence before the truth layer is real. Live scores, player pages, team pages, 
one competition hub, one search system, and one match center should become correct first.
• The current repo is not production-healthy yet. The git root is unhealthy, most intelligence is mocked, 
the server is mostly a scaffold, and the quality gates are too thin. Fixing that is not optional; it is the 
first product feature.
• Do not promise perfect player faces, perfect predictions, or perfect global coverage at launch. Rights, 
provider coverage, and model calibration make those promises reckless.
• Treat women’s football parity, multilingual quality, accessibility, and anti-gambling posture as product 
requirements, not cleanup work.
• Web beta plus iOS beta is the right first real launch posture. It is the narrowest credible path that still 
builds the long-term product correctly.
Executive objective
Ship a trustworthy, football-first, data-backed platform for the first production beta that comfortably 
serves roughly 200 concurrent users, establishes the canonical football graph, proves one real match-
center flow, proves entity-first pages, and creates the technical spine for later scouting, assistant, 
rankings, and market simulation layers.
Design rule for every decision
When a choice is available, choose the option that preserves: truth > consistency > editability > 
observability > performance > breadth. Fancy features that reduce trust or increase operational 
ambiguity are out, even if they look impressive in screenshots.
2. Product boundaries, product promise, and what the 
platform is not
What the platform is
• A football-first intelligence ecosystem that combines live coverage, deep entity pages, scouting-oriented 
discovery, explainers, transparent rankings, football-specific querying, a curated feed, and a 
simulation-only player market.
• A product for multiple density modes: Learn mode for newcomers, Fan mode for mainstream daily use, 
and Scout mode for denser professional-style detail.

• A cross-platform product system: web first, iOS first-class, Android after the core system is stable, all on 
the same design language and same typed contracts.
What the platform is not
• Not a sportsbook, not a betting app, not a parlay interface, not an odds-first product.
• Not an unmoderated public square. Open social chaos is not a launch feature.
• Not a rights-agnostic streaming host. Any direct streaming assumptions are wrong unless licensed.
• Not a generic sports chatbot. The assistant is football-only in product scope.
• Not a fake-live demo. If a metric, alert, or feed item is simulated, it must be clearly separated from live 
truth.
North-star promise to users
If the platform says it knows something, users should be able to trust where that knowledge came from, 
how fresh it is, and why it was shown. That means source labels, timestamps, confidence, and 
explanations are part of the product, not buried internal metadata.
3. Current-state assessment and mandatory 
corrections before serious shipping
The repo overview and merged research make the same point: the frontend shell is strong, but the real 
app is still much closer to a polished prototype than a production system. That is not a failure; it just 
means the next phase must be foundation-first and product-visible.
Area Current reality Why it is dangerous Immediate corrective 
action
Repository health
Real app lives under 
source-code and repo 
root tracking is 
unhealthy
Unsafe review, 
rollback, CI, and 
deployment
Fix git tracking first and 
move to a monorepo 
root with all app code 
committed
Backend
Express server exists 
but product APIs and 
persistence are 
effectively absent
No trustworthy user 
state, no real contracts, 
no real product truth
Define contracts first, 
then build the minimal 
API surface and 
database-backed 
persistence
Frontend
Large page files, eager 
imports, mock-heavy 
rendering
Performance drag and 
hard-to-maintain logic
Refactor top 5 surfaces 
into feature modules 
and route-level lazy 
loading
Testing No real test baseline Silent regressions, no 
release confidence
Add lint, unit, contract, 
API integration, and

Area Current reality Why it is dangerous Immediate corrective 
action
E2E smoke paths
Localization Partial translations only
Broken RTL and 
inconsistent 
terminology
Launch fewer 
languages well, with 
proper formatting and 
QA
AI Simulated chatbot
Trust damage if 
presented as real 
intelligence
Delay broad assistant 
until tool surface is real
Mandatory corrections before any serious launch work
• Repair repo health and establish a real monorepo.
• Freeze route names, design tokens, core entity names, and feature boundaries.
• Write the OpenAPI contract before writing non-trivial API code.
• Replace mocks on the top five surfaces before adding new surfaces.
• Add metrics, tracing, structured logs, and data-quality alerts before opening the beta widely.
• Add real Last synced and Source labeling before presenting anything as intelligent or live.
4. Target architecture: experience, product/API, 
intelligence, data/platform
The architecture should follow the four-layer model from the master plan, because it maps cleanly to 
your actual product shape and avoids both under-engineering and premature microservice sprawl.
Layer Responsibility Launch technology Key constraints
Experience
Web client, iOS client, 
offline UX, themes, 
localization, alerts
React web + Expo/React 
Native + service 
worker/PWA shell
Do not let platform-
specific UI drift the 
product into two 
different apps
Product/API
Typed API contracts, 
request validation, 
auth, serving views, 
search, assistant tools
TypeScript API service 
with OpenAPI-
generated types
No page depends on 
raw vendor payloads
Intelligence
Ratings, probabilities, 
feed ranking, retrieval 
ranking, valuation, 
Python/TypeScript 
model services with 
batch + streaming jobs
Every model must 
publish inputs, 
exclusions, refresh

Layer Responsibility Launch technology Key constraints
market pricing time, and confidence
Data/platform
Raw ingest, 
normalization, serving 
tables, cache, media 
metadata, telemetry
Postgres, Redis, 
ClickHouse, object 
storage, worker queues, 
metrics
Truth and observability 
matter more than 
feature breadth
Architecture principles
• One source of truth: internal canonical IDs own the product. Provider IDs are mappings, never the 
product truth.
• Contract first: frontend and mobile consume generated clients, not hand-shaped ad hoc fetches.
• Ordered event stream: live score, commentary, simulator, timeline, and probability projections all 
derive from one ordered match event stream.
• Model separation: rankings, probabilities, xG, role ratings, feed ranking, and market pricing are 
separate models, with separate governance.
• Graceful degradation: if live is down, entity pages, saved data, and last-known state still work.
5. Monorepo, coding standards, and code organization
Monorepo layout
Use a monorepo immediately so that web, mobile, API, workers, shared UI, contracts, and model helpers 
evolve together without duplication.
apps/
  web/
  mobile/
  api/
  workers/
packages/
  ui/
  design-tokens/
  api-contract/
  client-sdk/
  football-models/
  analytics/
  i18n/
  config/
infra/
  docker/
  observability/

deployment/
docs/
  architecture/
  runbooks/
  product/
Coding standards
• TypeScript strict mode everywhere in app-facing code.
• Zod or equivalent runtime validation at API boundaries and worker inputs.
• No raw fetch calls in page files. Use feature hooks backed by generated clients.
• No business logic in pages. Pages only compose feature modules.
• Shared view-model adapters live next to the feature, not buried in generic utils.
• Every domain module gets its own tests, fixtures, and story/demo data.
• Feature flags are typed and centrally declared. Never scatter env-condition logic through components.
Editability and customization
The system should be easy to edit by design. That means: strong interfaces, generated clients, modular 
feature folders, comments only where they add intent, and explicit extension points for providers, 
models, and locale bundles. The goal is to make change cheap without making the codebase loose.
6. Canonical football graph and internal entity model
The canonical graph is the core product asset. It is what lets the app talk about players, teams, 
competitions, matches, events, lineups, injuries, transfers, articles, notes, and market assets without 
becoming a bundle of vendor-specific mini-apps.
Core football entities
• Competition, Season, Stage, Round, Group
• Team, TeamSeason, NationalTeam, Venue, Coach
• Player, PlayerSeason, PlayerPositionProfile, Contract, SquadMembership
• Match, MatchStatus, MatchEvent, Lineup, Formation, PlayerAppearance
• TeamMatchStat, PlayerMatchStat, ShotEvent, xGEvent, Injury, Suspension, Transfer
• Article, FeedItem, Topic, Comment, Alert, Notification
• MarketAsset, Holding, Transaction, Portfolio, PortfolioSnapshot
• MediaAsset, MediaRights, Provider, ProviderMapping, RawPayload, SyncRun, AuditLog
Internal ID rules
• Every entity gets a stable internal UUID or snowflake-style ID.
• Provider mappings are many-to-one over time, with active_from and active_to windows.
• Never key business logic off display names.

• Every serving view stores both current_snapshot_timestamp and source_provider_info.
• Every user-facing projection must be traceable back to raw inputs.
Core schema pattern
provider_mappings(
  internal_entity_id, provider, provider_entity_id, confidence, active_from, active_to
)
raw_payloads(
  raw_id, provider, endpoint, requested_at, payload_json, checksum, sync_run_id
)
core_matches(
  match_id, competition_id, season_id, home_team_id, away_team_id, kickoff_utc, status, venue_id
)
7. Data-provider strategy, coverage waves, media 
rights, and competition acceptance
Do not depend on one provider for everything. Use a layered data strategy: a practical launch provider 
for broad live coverage, an optional fallback/cross-check provider, open or research data for model R&D, 
and premium providers later for deeper competition tiers or advanced analytics.
Launch provider recommendation
• Primary launch provider: API-Football or Sportmonks. API-Football publicly lists plans starting at 
$19/month and says all plans include all competitions and endpoints, while Sportmonks publicly 
markets over 2,200 football leagues in its coverage materials. These are good launch-tier providers for 
breadth, though exact competition acceptance must still be verified one competition at a time.
• Fallback/cross-check strategy: add a second provider after the first launch slice is stable; do not build a 
multi-provider reconciliation engine before you have stable primary ingest.
• Open/research source: StatsBomb Open Data for R&D, baselining, and prototype model validation, not 
as your only production backbone.
Wave-based competition onboarding
Wave Goal Recommended 
competitions Why this wave
Wave 1 Trust-first beta 
coverage
EPL, La Liga, Serie A, 
Bundesliga, Ligue 1, 
UEFA Champions 
League, WSL, NWSL, 
UWCL, major 
Enough breadth to feel 
real without drowning 
in long-tail data quality 
issues

Wave Goal Recommended 
competitions Why this wave
international qualifiers
Wave 2 Wider serious coverage
Portugal, Netherlands, 
Belgium, Turkey, Brazil, 
Argentina, Saudi Pro 
League, MLS, Liga MX, 
CAF/AFC/CONCACAF 
club comps
Broader football 
relevance with 
manageable 
operational increase
Wave 3 Long-tail depth
Lower divisions, more 
cups, youth/reserve 
comps where data is 
acceptable
Only after acceptance 
matrix, QA, and 
demand justify it
Competition acceptance framework
• Lineups available pre-match and post-match?
• Reliable player IDs and team IDs over time?
• Substitution events, cards, goals, and venue times trustworthy?
• Historical depth acceptable for standings, form, and rankings?
• Women's coverage and historical depth acceptable, not just present?
• Image/logo rights acceptable or clear fallback path exists?
• Latency acceptable for match center use case?
• If any of the above fail, the competition is not launch-ready.
Rights and media rules
• Treat player faces, club logos, and streaming as rights-sensitive assets. Build media rights tables from 
day one.
• Launch should assume no direct streaming rights. Only link out or integrate officially when rights are 
secured.
• Do not promise universal player-face coverage. Use licensed sources where available and silhouette 
fallbacks otherwise.
• Do not scrape copyrighted images or broadcast stills and assume that because the URL exists you are 
allowed to use it.

8. Backend service map, queues, jobs, and runtime 
responsibilities
Start with modular services inside one codebase, not a fully distributed microservice architecture. The 
platform should be logically separated even if it is physically modest at first.
Service / worker Main job Launch notes
API gateway
Public and internal API surface, 
auth, validation, rate limits, 
generated docs
Single TypeScript API service is 
enough at launch
Ingest worker Pull provider data on schedule 
or stream hook
Write raw payloads first, then 
normalize
Normalization worker Map raw payloads to canonical 
graph
Own provider mappings and 
conflict rules
Live projection worker Turn ordered match events into 
current-state projections
Feeds score, timeline, simulator, 
commentary, alerts
Model worker
Run ratings, probabilities, xG 
refreshes, price updates, feed 
scores
Split batch jobs by model family
Notification worker Push, email, in-app alert fan-out Do not let API threads own push 
delivery
Media worker
Image metadata sync, 
transformation metadata, rights 
labeling
No implicit approval of media 
rights
Moderation/admin worker Queue reports, content review, 
anti-manipulation triggers
Needed before open community 
features
Queue strategy
• Use one reliable job queue at launch for scheduled and retryable work.
• Each job payload must be idempotent and versioned.
• Never let provider webhooks or polling results write directly to user-facing views without 
normalization.
• Use dead-letter handling and alerting for failed ingest, failed normalization, and failed projection 
updates.

9. API contracts, versioning strategy, and endpoint 
surface
Write the OpenAPI spec before major backend coding. The contract should be the public shape of the 
product, and generated clients should be used by web, mobile, workers, and internal tools. This reduces 
frontend/backend drift and makes typed editing cheaper.
Public API v1 surface
GET /v1/search?q=&type=&competition=&mode=
GET /v1/players/{playerId}
GET /v1/teams/{teamId}
GET /v1/competitions/{competitionId}
GET /v1/competitions/{competitionId}/table
GET /v1/matches/{matchId}
GET /v1/matches/{matchId}/timeline
GET /v1/matches/{matchId}/stats
GET /v1/matches/live
GET /v1/transfers
GET /v1/rankings/international
GET /v1/rankings/clubs
GET /v1/assistant/tools/*
POST /v1/watchlists
POST /v1/alerts
GET /v1/market/assets/{playerId}
POST /v1/market/orders/simulated
API design rules
• Every response carries freshness metadata, source metadata, and entity IDs.
• Entities are returned in a stable shape even if providers change.
• Write-only actions require authenticated user IDs and audit trails.
• Use cursor pagination for large feeds and search results.
• Version breaking changes in the path or media type; do not silently mutate schemas.
10. Database plan: Postgres, Redis, ClickHouse, object 
storage, and auditability
Postgres: operational truth
• Canonical football entities and mappings
• Users, profiles, follows, notes, watchlists, saved searches
• Alerts, notifications, moderation objects, portfolios, transactions

• Translation metadata and content source lineage
• Model snapshots, calibration summaries, and experiment assignments
Redis: hot state and coordination
• Live match current-state projections
• Rate-limit counters and session ephemera
• Short-lived search/result caches
• Queue coordination, pub/sub, and hot alert fan-out
• Do not treat Redis as long-term truth
ClickHouse: event-heavy analytics
• Match event streams at scale
• Odds snapshots if later supported for informational comparison only
• Feed impression/click metrics, search logs, ranking snapshots, market price history
• Analytical queries and dashboards that should not burden Postgres
Object storage
• Media metadata only in relational DB; actual objects in storage
• Store report exports, images you are licensed to store, and cached derived artifacts
• Do not store rights-risk media without a clear rights record
Audit and provenance
• Every manual override, moderation action, provider remap, and model release gets an audit log row.
• Every user-visible model output should point to a model version and a snapshot time.
• Every ingest run should be queryable by provider, job, time window, and failure status.
11. Realtime match architecture and event projections
Use one canonical match event stream. Do not maintain separate truth systems for the score bug, 
commentary, simulator, possession badge, and probability graph. Each downstream surface should 
derive from the same ordered event model.
match_event(
  event_id, match_id, seq_no, event_time_utc, clock_minute, clock_second, period,
  team_id, player_id, event_type, x, y, outcome, xg_value, payload_json
)
Projection pattern
• Raw ordered event lands in authoritative storage.
• Projection worker updates live_match_state, live_timeline, and possession projection.
• API streams incremental updates over WebSocket or SSE depending on client surface.

• Clients render current state from one projection version; no client synthesizes its own truth from 
partial events.
Realtime choices
• For live match center, use WebSockets where interactive bidirectional state matters and SSE where 
server-to-client stream simplicity is enough.
• Use Redis-backed hot state for current match state; durable event history remains in Postgres and/or 
ClickHouse.
• At launch, narrow the realtime scope to one truthful match-center path, not multiple partly-correct live 
widgets.
12. Web app, iOS app, shared UI system, and state 
architecture
Web
• Keep the current React web shell, but refactor into feature modules and route-level code splitting.
• Use React Query (or TanStack Query) for server state. Use a small client-state store for UI-only state 
such as theme, density mode, temporary filters, and modal visibility.
• Adopt CSS logical properties now so RTL does not become a rewrite later.
• Use service workers for offline-capable shell and cached last-known entity pages.
iOS
• Use Expo/React Native for a real iOS client rather than a web wrapper.
• Share generated API clients, design tokens, feature flags, and analytics event names with web.
• Use TestFlight first, then App Store after stability, crash visibility, and rights posture are ready.
• Design with deep linking / universal links from day one.
Shared design system
• One token system for typography, spacing, color semantics, elevation, motion, and chart palettes.
• Keep theme count small and consistent. Strong defaults beat many half-finished skins.
• Build primitives -> composites -> feature components -> pages. No page should be a giant logic object.
13. Search, retrieval, personalization, and feed 
architecture
Search
• Global search should resolve players, teams, competitions, matches, articles, and saved entities from 
one query surface.

• Use intent-aware ranking: exact entity names, followed entities, active competitions, and 
recent/frequent searches should rank higher.
• At launch, start with deterministic and field-weighted search plus popularity priors before jumping to 
expensive semantic search everywhere.
Personalization
• Separate retrieval from ranking. Retrieval gets candidate items; ranking orders them based on follows, 
context, recency, trust, and source diversity.
• Do not let sentiment or raw volume dominate the feed. Verified source quality and user follows should 
matter more.
• Personalization must be explainable: why you are seeing this, why this story is rising, show fewer like 
this.
Recommendation and retrieval system
• Short term: rules + weighted ranking + collaborative signals where safe.
• Mid term: learned-to-rank for feed ordering once enough clean interaction data exists.
• Search and assistant retrieval should share the same entity and knowledge indexes where possible, but 
not necessarily the same ranking objective.
14. Offline strategy, sync rules, and stale-state behavior
Offline can be excellent, but it cannot equal live for live sport. Design the offline experience around useful 
last-known state, saved entities, saved notes, saved watchlists, downloaded explainers, and clean stale-
state labeling.
Feature Online-only / offline-capable Rule
Live score and live commentary Online-only Show last-known state with 
explicit Last synced if offline
Player, team, competition pages Offline-capable Cache most-viewed and followed 
entities with background refresh
Watchlists, notes, shortlists Offline-first Queue writes locally and sync 
when connectivity returns
Feed Offline-capable Read cached stories; do not 
pretend they are fresh
Assistant Mostly online Allow offline glossary/help, but 
not full live assistant reasoning
Market XI Offline-capable read; online 
trade execution
Never execute portfolio changes 
without a confirmed sync

Sync rules
• Each offline-editable object gets a local revision and a server revision.
• Conflict resolution is explicit: server wins for immutable sports truth, user-merge or latest-write for 
notes/drafts depending on object type.
• Every cached surface shows freshness and stale-state UI.
• Prefetch followed teams, followed players, next fixtures, and last-opened match center shells.
15. Localization, RTL, typography, and cultural-
language handling
Localization is not string replacement. This product needs language-aware formatting, football 
terminology QA, RTL handling, and culturally correct phrasing for headlines, commentary, and assistant 
responses.
Launch language posture
• Launch fewer languages well: English, French, Spanish, Arabic, Portuguese, Japanese, Yoruba if you 
have human QA. Add more only when review capacity exists.
• Do not ship low-quality machine translation for languages that depend on context and football 
vocabulary nuance.
• Use locale-aware date, number, and time formatting everywhere.
RTL rules
• Adopt document or app-shell direction, not component-by-component hacks.
• Mirror layout flow and directional icons where appropriate, but do not blindly mirror charts, team 
logos, or numeric/statistical semantics.
• Test Arabic and Hebrew with actual football UI flows: match center, standings, player profile, 
commentary, search, and Market XI cards.
Typography and truncation
• Define fallback font stacks per script.
• Reserve more vertical rhythm for Arabic and some CJK layouts.
• Never let player names, team names, or match status labels clip due to fixed row heights.
16. Football-only AI assistant architecture and 
evaluation plan
The assistant should not be described as 'trained only on football' unless you actually run a custom 
training program. The realistic and correct product pattern is football-scoped tools plus retrieval plus 
football-specific prompts, evaluation, and guardrails.

Assistant scope
• In scope: football rules, players, teams, competitions, match summaries, rankings, comparisons, 
transfer context, beginner explainers, scouting-oriented stat interpretation, Market XI explanations.
• Out of scope: general open-domain chat, non-football knowledge, image generation, medical/legal 
advice, real-money investment advice, generic life-coach behavior.
Architecture
• LLM orchestration layer with tool calls only to football-scoped APIs.
• Structured retrieval over entity docs, explainers, source-labeled articles, and internal knowledge 
objects.
• Modes: Learn, Fan, Scout. Output density and vocabulary vary by mode.
• Facts are retrieved; prose is generated. The assistant should not invent statistics from model memory.
Minimum tool surface
search_players(query, filters)
get_player_profile(player_id)
compare_players(player_ids, role_context)
search_matches(filters)
get_match_timeline(match_id)
get_team_form(team_id, n_matches)
get_competition_table(competition_id)
get_transfers(filters)
get_injuries(team_or_player)
get_market_asset(player_id)
search_knowledge_base(query)
Evaluation
• Create benchmark sets for beginner explanations, player comparison, table lookups, transfer 
questions, and match-summary questions.
• Measure answer grounding, citation correctness, freshness, hallucination rate, mode correctness, and 
user-rated usefulness.
• Never let the assistant expose a stat that cannot be reproduced through a product API or knowledge 
source.
17. Models and machine learning plan
This is the hard part. The goal is not to use the fanciest model everywhere. The goal is to choose the 
simplest method that can be correct, explainable, calibratable, and operationally sustainable at the 
current data maturity. Every model below includes the launch posture, data needs, validation, and failure 
modes.

Model governance rules
• Every model publishes: purpose, inputs, exclusions, refresh cadence, version, calibration status, and 
intended use.
• No model silently mixes incompatible time windows or provider vintages.
• Every user-facing model output includes freshness, confidence, and an explanation surface.
• Simple baselines always exist. No model is allowed into product without beating its baseline on the 
relevant metric or providing a strong interpretability benefit.
17.1 International team rankings
• Problem: rank international national teams in a way that users trust and that feels consistent with 
official football discourse.
• Launch method: mirror FIFA-style Elo/SUM logic as closely as practical rather than inventing a 
mysterious house system.
• Formula: R_new = R_old + I * (W - W_e).
• Where: I = match importance, W = actual result, W_e = expected result from rating gap and context.
• Data required: results, competition type, neutral/home context, date, opponent rating.
• Why this method: transparent, stable, understandable, aligned with official FIFA ranking procedures 
for men and rating-based women’s procedures.
• Validation: compare ranking movement against official FIFA movement, rank correlation over time, 
and predictive lift over naive form table baselines.
• Failure modes: overweighting friendlies, stale initialization, poor handling of very weak or rarely-
playing teams.
• Not for launch: Bayesian hierarchical international rating systems unless the current data tooling is 
already strong enough to justify them.
17.2 Club strength ratings
• Problem: estimate underlying club strength across domestic and continental contexts.
• Launch method: Club Elo or Glicko-family house rating with home advantage and competition 
weighting.
• Core expectation formula: E_home = 1 / (1 + 10^(-(R_h + H - R_a)/400)).
• Update: R_h' = R_h + K * (S_h - E_home).
• Data required: match results, competition, home/away/neutral, recency weighting, inter-competition 
bridges.
• Validation: Brier score / log-loss on win-draw-loss probabilities when using Elo-derived priors, stability 
around promotion/relegation boundaries, and predictive comparison against raw table position.
• Failure modes: league-island bias, poorly calibrated competition-weight bridges, and overreaction to 
small samples.
• Use in product: team strength pages, compare surfaces, match priors, transfer-context quality 
multipliers.

17.3 Match outcome probabilities and scoreline prediction
• Problem: estimate match result probabilities and plausible scoreline distribution.
• Launch method: Poisson / Dixon-Coles family baseline with time decay.
• Core structure: lambda_home = exp(attack_h - defense_a + home + lineup + form + rest), lambda_away 
= exp(attack_a - defense_h + away + lineup' + form' + rest').
• Then use Poisson score probabilities, with Dixon-Coles correction for low-score correlation and draw 
behavior.
• Data required: historical results, attack/defense strengths, home effect, rest days, travel flags, lineup 
availability, optionally xG-based prior features.
• Validation: log-loss, Brier score, calibration curves, sharpness, and bookmaker-consensus comparison 
when used for evaluation only.
• Failure modes: lineup uncertainty, red-card effects not represented, stale attack/defense estimates, and 
competition mixing without strength adjustments.
• Launch stance: this is launch-worthy as a transparent baseline. Do not overpromise 'best predictions'.
17.4 xG (expected goals)
• Problem: estimate the probability that a shot becomes a goal.
• Launch method: logistic regression baseline using shot distance, angle, body part, shot type, assist type, 
phase of play, pressure proxy, and pre-shot sequence context.
• Formula form: xG = sigmoid(beta_0 + beta_1*distance + beta_2*angle + beta_3*bodypart + 
beta_4*context + ...).
• Mid-term upgrade: gradient boosting (for example XGBoost/LightGBM) if feature richness and 
calibration justify it.
• Women’s football rule: build separate calibration or separate model variants once sufficient women’s 
event data exists. Do not blindly reuse men’s calibration.
• Data required: shot-level event data. Open StatsBomb-style event data is enough to develop a public 
baseline; premium event data gives better production breadth.
• Validation: AUC, log-loss, Brier score, calibration plots, and competition-segment checks.
• Failure modes: missing defensive context, poor shot-type consistency across providers, and 
league/context shift.
17.5 Player role ratings
• Problem: summarize a player’s football value for a specific role without collapsing all football roles 
into one fake master score.
• Launch posture: do not ship full role ratings until player pages and stat normalization are stable.
• Method: role-specific weighted indices on opponent-adjusted and league-adjusted z-scores.
• Formula: RoleScore = sum(w_i * z_i).
• Role families: GK, CB, FB/WB, DM, CM, AM, Winger, Striker.
• Example DM features: progressive passes, pass completion under pressure, pressures resisted, ball 
recoveries, interceptions, duel win rate, availability.

• Validation: face-validity review with football experts, year-over-year consistency, downstream utility in 
similarity search, and correlation with known expert judgments where available.
• Failure modes: garbage role labels, unstable weights, style bias across leagues, and small-sample 
inflation.
17.6 Player comparison
• Problem: compare two or more players fairly across roles, leagues, and samples.
• Method: role-aware side-by-side comparisons using percentile views, raw per-90 views, and context 
notes.
• Key rule: every comparison must state role context, minutes threshold, competition filter, and sample 
size.
• Launch method: deterministic metric bundles rather than ML-generated 'better' declarations.
• Mid-term enhancement: assistant-assisted comparison narrative using retrieved metric bundles and 
constraints.
• Failure modes: comparing out-of-role players without caveats, using mixed competition samples, or 
hiding sample size.
17.7 Scouting similarity search
• Problem: find players who look like a target role profile or resemble another player along useful 
football dimensions.
• Launch method: vector similarity over engineered feature spaces, not a black-box deep model first.
• Feature set: role family, team style context, ball progression, creation, defending, availability, physical 
proxies where available, age, league strength.
• Distance options: cosine similarity on normalized feature vectors, optional metric learning later.
• Validation: expert scout review of nearest-neighbor quality, diversity of candidates, and role-
consistency metrics.
• Failure modes: one dominant stat swamping the vector, league-style bias, and false similarity due to 
low samples.
17.8 Transfer valuation
• Problem: estimate a plausible football-value range for a player independent from buzz-driven game 
pricing.
• Launch posture: not a launch-critical feature; build after enough transfer dataset and contract data 
quality exists.
• Method: regression on comparable transfers plus explicit adjustment multipliers.
• Formula: Value = BaseRoleValue * AgeCurve * PerformanceIndex * LeagueStrength * ContractFactor * 
AvailabilityFactor.
• Inputs: age, minutes, role-adjusted performance, contract length, wage tier if available, international 
reputation, injury burden, team strength, league strength.
• Model candidates: gradient boosting or random forest with SHAP explanations, but keep a transparent 
baseline calculator too.

• Validation: out-of-time transfer-fee error metrics, robust checks by role and age bucket, and sanity 
review against known market narratives.
• Failure modes: bad wage/contract data, inflation regime shifts, rumor contamination, and popularity 
leaking into fundamentals.
17.9 Feed ranking and personalization
• Problem: order stories, alerts, and insights so the feed feels timely, football-relevant, and trustworthy 
without becoming manipulative noise.
• Launch method: rules + weighted ranking.
• Core ranking inputs: followed teams/players, competition relevance, recency, source quality, cross-
source confirmation, interaction history, novelty, and suppression of near-duplicate stories.
• Mid-term upgrade: learned-to-rank using clean feedback once enough impression/click/dwell data 
exists.
• Validation: editorial review, CTR, save/follow downstream actions, user complaints, and diversity 
metrics.
• Failure modes: sensationalism bias, rumor spam, reinforcing only giant clubs, and deceptive recency 
dominance.
17.10 Search ranking
• Problem: rank entity and content results for global search.
• Launch method: deterministic BM25-style / field-weighted lexical retrieval + business priors.
• Boost exact name matches, followed entities, currently live matches, major competitions, and user's 
region/language context.
• Later: add semantic retrieval for explainers and assistant knowledge, but keep entity search 
deterministic and accountable.
• Failure modes: noisy aliases, multilingual name variants, club-name collisions, and low-quality 
transliteration matching.
17.11 Sentiment scoring and trend detection
• Problem: summarize football sentiment and emerging discussion without letting hype dominate truth.
• Launch posture: keep sentiment lightly weighted and source-diversified.
• Method: source-labeled rule/ML hybrid over editorial headlines, verified social signals, and structured 
trend indicators.
• Do not let a single source dominate. Trend detection should require source diversity and time-window 
consistency.
• Validation: manual review on high-profile stories, disagreement rate, and manipulation incident 
tracking.
• Failure modes: coordinated brigading, sarcasm, rumor cascades, and language-model overconfidence 
in multilingual sentiment.

17.12 Market XI pricing
• Problem: run an engaging football market simulation that feels rich and reactive without becoming 
gambling-like or manipulable.
• Architecture: two layers - fundamental value and market price.
• Fundamental value example: F_t = 0.30P + 0.15M + 0.10A + 0.10C + 0.10L + 0.10I + 0.10T + 0.05S, where 
P=form/performance, M=minutes availability, A=age curve, C=contract quality, L=league/team level, 
I=injury penalty, T=transfer buzz, S=sentiment.
• Price update: Price_t+1 = Price_t * (1 + mu_t + epsilon_t), where mu_t blends change in fundamentals, 
demand imbalance, and capped sentiment shock.
• Safety rules: no cash-out, no real-money vocabulary, capped volatility, cooldowns, no micro-event 
contracts, explicit simulation labeling.
• Validation: price stability under low liquidity, manipulation tests, and user comprehension tests ('can 
users explain why the price moved?').
• Failure modes: pump loops, sentiment overpowering fundamentals, rumor manipulation, and users 
confusing the game with real financial products.
17.13 Confidence, calibration, and explainability
• Every probability output shows calibration confidence and last refresh.
• Every ranking or rating shows what it measures, what it ignores, and its sample window.
• Every assistant comparison cites the data slice used.
• Model release checklist: input snapshot version, training window, evaluation metrics, change log, 
rollback plan, bias review, and product copy review.
• Do not say 'best model'. Say 'current production model', publish baselines, and iterate.
18. Market XI pricing, safety rules, and backend 
support plan
Market XI can remain a strong differentiator if it stays clearly secondary to the core football platform and 
clearly simulation-only. It should teach football market logic and reward understanding, not mimic 
gambling harm patterns.
Backend components
• Market asset table linked to canonical player IDs
• Price history snapshots
• Portfolio, holdings, transactions, and portfolio snapshots
• Event triggers from match performance, injuries, transfers, and approved sentiment/trend inputs
• Risk controls: rate limits, volatility caps, cooldowns, anti-brigading triggers, clear source labels on 
market signals

Copy rules
• Use portfolio, holdings, simulation, value, price driver, fundamentals, and virtual coins.
• Avoid bet, stake, wager, odds-led hero copy, payout, and cash-out language.
• Explain why a price moved with transparent factors.
19. Security, privacy, trust, moderation, and anti-
gambling design
Security
• JWT or session-based auth with DB-enforced authorization.
• Rate-limit public APIs and search.
• Audit all privileged actions.
• Secrets in managed secret store, never in client.
• Signed URLs or controlled proxying for protected media if ever needed.
Privacy
• Collect only what the product needs. Publish clear data collection and analytics notices.
• Separate first-party product analytics from sensitive user-generated content moderation data.
• Honor App Store privacy disclosure requirements accurately.
Trust and moderation
• Source-label stories, rumors, and market signals.
• Rumor tiers: confirmed, credible, mixed, low-confidence, disputed.
• Moderation tooling before open match rooms.
• Manipulation detection for coordinated rumor pumping or abusive brigading around players or clubs.
Anti-gambling rules
• Simulation-only economy with zero redeemability.
• No narrow event contracts such as next card, next corner, next throw-in.
• No streak-pressure countdowns or panic CTAs.
• Optional controls to hide market/game surfaces and reduce push nudges.
20. Observability, testing, QA, and release engineering
Observability
• Metrics: API latency, error rate, ingest lag, normalization failure rate, live projection delay, queue 
depth, cache hit ratio, push-delivery success.
• Tracing: user action -> API -> DB -> worker -> notification path.

• Structured logs with trace IDs across API and workers.
• SLOs for core surfaces: search, player page, team page, competition table, match center.
Testing
• Unit tests for adapters, model feature engineering, validation, and helpers.
• Contract tests for OpenAPI-generated client/server compatibility.
• Integration tests for ingest -> normalization -> serving path.
• E2E tests for the first truthful loop: search -> player -> team -> competition -> match center -> 
follow/alert.
• Model validation notebooks and scheduled recalibration checks separate from app unit tests.
Release engineering
• CI: lint, typecheck, unit tests, contract tests, build, E2E smoke path, migration validation.
• Staging environment mirrors production shape enough to test live slices and push flows.
• Blue/green or canary deployment later if needed; simple disciplined deployment is enough at launch.
• Never merge without passing typed contracts and E2E smoke tests.
21. Step-by-step implementation plan and acceptance 
gates
Phase 0 - structural reset
• Fix git tracking and move to monorepo.
• Freeze route map, design tokens, entity naming conventions, and feature folder boundaries.
• Add CI, lint, typecheck, and smoke E2E skeleton.
• Acceptance gate: clean tracked repo, reproducible build, CI green on main.
Phase 1 - contract and schema
• Write OpenAPI spec for search, players, teams, competitions, tables, matches, alerts, watchlists, 
assistant tools, and market assets.
• Design Postgres schema, provider mappings, raw payload tables, serving views, audit logs.
• Acceptance gate: generated clients compile against mock server, DB migrations reviewable.
Phase 2 - provider ingest and normalization
• Integrate primary provider for Wave 1 competitions.
• Write raw ingest worker and normalization pipeline.
• Build provider acceptance tests and data-quality alerts.
• Acceptance gate: teams, players, fixtures, tables, and basic events correct for Wave 1.

Phase 3 - first truthful loop
• Replace mocks on search, player page, team page, competition hub, and match center.
• Add follows/alerts and last-known offline cache.
• Acceptance gate: these surfaces are real, source-labeled, and stable.
Phase 4 - iOS beta and offline baseline
• Stand up Expo iOS app on the same contracts.
• Add service worker/PWA shell on web and local cache behavior on iOS.
• Fix RTL for Arabic/Hebrew on the core flows.
• Acceptance gate: web beta + iOS beta work on the truthful loop with Last synced behavior.
Phase 5 - intelligence v1
• Ship international rankings, club Elo, match probabilities, and xG where data exists.
• Ship assistant v1 as a tool-using football analyst over the real graph.
• Acceptance gate: model outputs calibrated and explainable; no fake intelligence.
Phase 6 - Market XI backend
• Add holdings, transactions, price service, and transparent driver explanations.
• Run anti-manipulation and comprehension tests.
• Acceptance gate: clearly simulation-only, no gambling confusion, no instability under test scenarios.
Phase 7 - scouting and feed expansion
• Add advanced filters, role profiles, similarity search, and feed ranking improvements.
• Acceptance gate: real utility beyond the launch loop, with moderation and rights posture intact.
22. Launch checklist for the first real production beta
Category Required for beta? Notes
Tracked monorepo and CI Yes Launch blocker if absent
OpenAPI contracts + generated 
clients Yes Required to prevent drift
Managed Postgres + auth + 
persistence Yes No in-memory user truth
Wave 1 real competitions Yes At least one narrow truthful 
loop
Stable match center for those 
competitions Yes One real live path

Category Required for beta? Notes
RTL validated on core flows Yes Arabic/Hebrew cannot be 
broken
Service worker / offline last-
known state Yes At least for followed entities
Prometheus/Sentry + alerts Yes Need visibility before public 
beta
AI assistant broad public release No Only if tool surface is real and 
safe
Open public social feed No Delay until moderation and trust 
layers exist
Direct streaming hosting No Rights risk
Perfect player-face coverage No Rights/supply constrained
23. Future expansion paths and what to delay on 
purpose
Do later on purpose
• Deep long-tail global coverage before Wave 1 and Wave 2 are stable
• Direct video hosting rather than rights-aware deep linking or partnerships
• Generic open-domain assistant
• Open, unmoderated match rooms
• Perfect player-face coverage promise
• Black-box 'magic ratings' without transparent drivers
• Building for 1M+ users before proving product-market fit and operational maturity at 200
Good future expansions once the core is real
• Advanced scouting workspace with report export and clip integration
• Creator dashboards and embeddable visual cards
• Expanded women’s football depth with dedicated model calibration
• Partnered stream discovery and official rights-based integrations
• More advanced feed ranking and personalization with learned-to-rank
• Regionalized editorial and language-specific football explainers

Final recommendation
The correct move is not to build everything at once. It is to build the truth layer, prove the first truthful loop, 
and then let every advanced surface inherit that truth. The project already has a strong visual shell and a 
differentiated product idea. What it lacks is not imagination; it is production truth. Fix that first. Then add 
intelligence, not before.
Appendix A - Core equations
International ranking: R_new = R_old + I * (W - W_e)
Club Elo expected home result: E_home = 1 / (1 + 10^(-(R_h + H - R_a)/400))
Poisson goal rate: lambda_home = exp(attack_h - defense_a + home + lineup + form + rest)
xG baseline: xG = sigmoid(beta_0 + beta_1*distance + beta_2*angle + beta_3*bodypart + ...)
Role rating: RoleScore = sum(w_i * z_i)
Transfer value: Value = BaseRoleValue * AgeCurve * PerformanceIndex * LeagueStrength * ContractFactor * 
AvailabilityFactor
Market price: Price_t+1 = Price_t * (1 + mu_t + epsilon_t)
Appendix B - Source basis for this plan
• Internal: football platform master plan, repo overview, merged research results, and the tailored 
research brief.
• External official docs considered in the architecture choices: OpenAPI specification, Supabase docs, 
Expo docs, WCAG 2.2 / W3C internationalization guidance, MDN service worker docs, Apple App 
Review/TestFlight guidance, ClickHouse docs, Prometheus docs, Sentry docs, API-Football pricing/docs, 
Sportmonks coverage docs, StatsBomb Open Data repository, and FIFA ranking procedure pages.
