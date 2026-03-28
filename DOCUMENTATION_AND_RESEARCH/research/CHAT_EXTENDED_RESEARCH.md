DEEP RESEARCH REPORT
Football Intelligence Platform
Evidence-Based Product, Data, AI, and
Launch Research
A detailed, project-specific research report grounded in the uploaded
master plan and repo audit, then reconciled against live benchmark,
platform, localization, rights, and architecture evidence.
CORE CONCLUSION
Narrow the first truthful loop before
widening the product.
LAUNCH POSTURE
Web beta + iOS beta, one real data
backbone, one real match-center flow.
BIGGEST RISK
Trust failure from mocked intelligence,
rights ambiguity, and premature AI/
social breadth.
DIFFERENTIATION
Football-first coherence: utility +
explainability + multilingual quality +
workflow depth.
Prepared for: Project founder / PM / design lead /
staff engineer / data lead
Date: March 27, 2026
Primary internal sources: F1 master plan, F2 repo audit, F3
research brief
External evidence: official product pages, platform docs, provider
docs, and selected research notes
Football Intelligence Platform Research Report 1

Table of Contents
1. Cover Page
2. Table of Contents
3. Executive Summary
4. What the Attached Files Reveal
5. Current State vs Target State Gap Analysis
6. User Segments and Jobs-to-be-Done
7. Competitive Benchmark Matrix
8. Feature Opportunity and Prioritization Map
9. Data Provider and Rights Matrix
10. Model / Algorithm Recommendations
11. Football AI Assistant Recommendations
12. UX / Navigation / Design System
Recommendations
13. Offline / Online Strategy
14. Localization / RTL / Cultural Design
Recommendations
15. Trust / Safety / Anti-Gambling
Recommendations
16. Launch Architecture for First Real Production
Launch
17. Key Risks, Gaps, and Unknowns
18. What to Build Now / Next / Later / Never
19. Final Recommended North Star Product Shape
20. Appendix
21. Source Notes / Bibliography
Method. This report synthesizes three evidence layers: internal project documents [F1][F2][F3], official
or primary product/platform documentation [W1]-[W50], and constrained inference/recommendation
built on those materials. Facts are sourced. Inferences are explicitly framed as product judgment.
Recommendations are tagged as Supports target-state master plan, Fixes current repo/frontend gap, 
New evidence-based opportunity, Too early / should be delayed, or High risk / avoid. 
Football Intelligence Platform Research Report 2

Executive Summary
The core opportunity is real: your concept can occupy a strong position between utility live-score
apps, stat/reference products, football-native media, and a safer simulation layer. The current
prototype already proves visual ambition and broad concept coverage, but the repo is still too
mock-heavy and structurally under-hardened for a trustworthy public launch [F1][F2].
The decisive strategic move is narrowing before widening: ship one truthful football loop first: 
search -> player/team/competition -> one real match center -> alert/follow. That loop gives you
trust, habit, and the data spine that later powers AI, scouting, rankings, and Market XI [F1][F2].
Your clearest differentiation is not “more features” but “more coherence”: one canonical football
graph, contract-first APIs, source-labeled intelligence, better multilingual quality, and mode-aware
density (Learn / Fan / Scout) are more defensible than piling on pages [F1][W41].
The biggest near-term risk is trust failure, not missing novelty: fake-live behaviors, contradictory
stats, unclear rights, rushed localization, and an AI layer launched before real tools would damage
retention faster than a smaller feature set would [F1][F2][W30][W37].
Market XI should survive, but not as a launch hero: it is a good differentiator only if it remains
unmistakably simulation-only, educational, and grounded in transparent drivers. Any ambiguity
with betting harms both product trust and store/compliance posture [F1][W30][W31][W32].
Women’s football parity is both mission-critical and product-smart: the internal plan is right to
make it first-class. External evidence also supports it: women’s football fan interest is growing,
while many fans still feel coverage is insufficient [F1][W19].
The assistant should be narrow, tool-using, and citeable: borrow the query ergonomics of
StatMuse, but ground answers in your own APIs and explainers. Retrieve facts; generate prose.
Never let the assistant outgrow the product truth layer [W7][F1].
Launch architecture should stay disciplined: web + iOS beta, OpenAPI-first contracts, Postgres +
Auth + Storage, a narrow realtime path, route-level code splitting, Prometheus/Sentry, and only the
analytics infrastructure you actually need at ~200 concurrent users [F1][W42][W46][W47][W49]
[W50].
FIRST 30 DAYS
Fix repo tracking, lock
monorepo structure, add CI/
lint/test baseline, define
OpenAPI surface.
FIRST TRUTH LOOP
Search, player page, team
page, competition table, one
real match center, alerts, and
last-known offline cache.
DO NOT RUSH
Open social, public AI breadth,
and market simulation as hero
features before data and
moderation foundations exist.
Bottom line. The project is already strong enough to justify serious investment in a real production
spine, but not yet trustworthy enough to widen into more pages, more AI, or more community. The
winning move is disciplined sequencing, not feature inflation. 
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 3

What the Attached Files Reveal
The uploaded files do not describe a small app. They describe a football operating system with three
simultaneous demands: high daily usefulness, professional-grade trust, and long-term extensibility. The
master plan is strong because it correctly centers the product on a canonical football graph, contract-first
APIs, explainability, women’s parity, and an anti-gambling stance [F1]. The repo audit is equally valuable
because it stops strategic self-deception: today’s codebase is a premium prototype shell, not a production
platform [F2].
The key implication is that the next phase must be foundation-first but product-visible. Pure infrastructure
work without a visible product loop will feel slow; adding more pages without a reliable data backbone will
only create a wider demo. The bridge strategy is therefore to harden the narrowest set of surfaces that
prove truth, freshness, and retention at the same time: search, player pages, team pages, competition hubs,
and one real match center [F1][F2].
Source File What it reveals Why it matters
F1 Master plan Defines the target state as a
football-first operating system
with one canonical graph, one
contract-first API layer, web +
iOS first, simulation-not-
gambling, women’s parity, and
scale from ~200 concurrent
users upward.
Sets the architecture, principles,
build order, and launch bar.
F2 Repo audit Confirms current reality is a
visually strong React/Vite + Ex‐
press prototype with most intelli‐
gence mocked, almost no real
backend, partial i18n, missing
CI/lint/tests, and a mis-tracked
repo root.
Prevents dream-state recom‐
mendations that ignore current
engineering risk.
F3 Research brief Raises the bar: benchmark
against football utilities, social/
feed energy, scouting work‐
flows, multilingual quality, rights
reality, and anti-gambling
design.
Expands the report from archi‐
tecture into product-market and
decision sequencing.
WHAT THE MASTER PLAN GETS RIGHT
It correctly centers canonical data, contract-
first APIs, explainability, women’s parity, 
multilingual/RTL quality, and simulation-not-
gambling as product fundamentals—not
optional extras [F1].
WHAT THE REPO AUDIT FORCES YOU TO
CONFRONT
Today’s repo is still mainly a premium prototype
shell. The design system is a strength, but the
backend, data contracts, persistence, testing,
and live trust layer are not production-ready
[F2].
Football Intelligence Platform Research Report 4

Current State vs Target State Gap Analysis
Strategic gaps. The project wants to be trusted, global, multilingual, football-native, and eventually useful to
both fans and professionals. Today, the codebase proves design taste and concept range, but not system
truth. That means the platform currently over-indexes on screenshot breadth and under-indexes on
reliability, provenance, and workflow completion [F1][F2].
Architectural gaps. There is no stable backend contract, no real canonical entity layer, no production
database behavior, and no monitored live data path. Without those, advanced features such as rankings, AI,
transfer intelligence, scouting, and Market XI cannot stay internally consistent [F1][F2].
Product-trust gaps. The simulated chatbot, mocked intelligence surfaces, and unresolved rights/
localization posture would be acceptable in a founder demo; they are not acceptable in a product that
claims to be trustworthy, football-first, and multilingual [F1][F2][W30][W37][W38].
Fastest credible bridge. Fix repo health; define contracts; stand up canonical entities and mappings;
integrate one provider for real teams/players/fixtures/standings plus a narrow live slice; replace mocks on
the top five surfaces; add alerts/offline basics; then layer the assistant, rankings, scouting, and Market XI
support afterward [F1][F2].
Area Current state Target state Risk created Bridge strategy
Recommendation
type
Repository healthReal app folder ef‐
fectively untracked;
local working copy
risk.
Monorepo with
tracked apps/pack‐
ages and reprodu‐
cible CI.
Release blocker: un‐
safe rollback/review/
deploy.
Fix git root first, then
establish monorepo
skeleton.
Fixes current repo/frontend gap
Data backbone Mock data and
page-local arrays
dominate flagship
surfaces.
Canonical football
graph with normal‐
ized IDs and serving
views.
Conflicting stats, im‐
possible trust, du‐
plicated logic.
Build raw -> normal‐
ized -> serving
pipeline before
breadth.
Supports target-state master plan
API contract No meaningful
product API surface
yet.
OpenAPI-first typed
contracts across
web, iOS, workers.
Frontend/backend
drift and brittle in‐
tegrations.
Write schema for
search, player/team,
standings, live
match, notes, alerts,
assistant, Market XI.
Supports target-state master plan
Realtime No truthful live event
backbone.
Single ordered event
stream feeding
score, timeline, com‐
mentary, probability,
alerts.
Live surfaces be‐
come contradictory
and stale.
Launch with one
narrow real match-
center flow, not a
fake multi-feature
live stack.
Launch blocker
Persistence & authNo meaningful per‐
sistence; in-memory
user store only.
Database-backed
user state, RLS,
audit logs, watch‐
lists, notes, alerts,
portfolio.
Cannot support
trust, syncing, or
private state.
Use managed Post‐
gres/Auth early;
model permissions
before social fea‐
tures.
Launch blocker
Frontend architec‐
ture
Premium shell, but
monolithic pages
and eager imports.
Feature-based mod‐
ules, route-level
code splitting,
shared adapters/
hooks.
Performance drag;
difficult mainten‐
ance.
Refactor top 5 sur‐
faces first, keep
visual identity.
Fixes current repo/frontend gap
Localization Partial string transla‐
tion only.
Real i18n subsystem:
locale formatting,
football terminology,
RTL, fallback fonts,
QA.
Arabic/Hebrew
breakage; football
terms mistranslated.
Ship a smaller lan‐
guage set well be‐
fore expanding.
Launch blocker
Football Intelligence Platform Research Report 5

Area Current state Target state Risk created Bridge strategy
Recommendation
type
AI assistant Simulated chatbot,
no real tooling.
Football-scoped re‐
trieval + tool use +
citations + mode-
awareness.
Hallucinations and
generic-sports-bot
failure.
Delay public AI
breadth until search/
player/team/match
tools are real.
Too early / should be delayed
Market XI Frontend simulation
only, promising
concept.
Still virtual-only, but
backed by
transparent inputs
and risk controls.
Could be mistaken
for betting if rushed.
Keep educational
framing, no cash-
out, no sportsbook
language.
High risk / avoid if ambiguous
Observability & QANo lint/test baseline;
no live-data monitor‐
ing.
Prometheus/Sentry/
alerts, contract
tests, data-quality
tests, E2E paths.
Invisible failures in
live, provider lag,
user churn.
Add observability
before opening beta
widely.
Launch blocker
Rights & media Visual prototype can
imply rights not yet
secured.
Rights-aware media
policy and graceful
fallbacks.
App review, legal
complaints, take‐
downs.
Assume no logo/
player-image entitle‐
ment until licensed
or explicitly permit‐
ted.
High risk / avoid
Fastest path from current state to target state
Repair repository health and establish the monorepo boundary.
Freeze design tokens, route names, entity naming, and core product states.
Define OpenAPI contracts before expanding backend code.
Stand up canonical football entities and provider mappings in Postgres.
Integrate one launch provider and retire mocks on five flagship surfaces.
Add one real match-center flow, alerts, and last-known offline states.
Only then layer assistant, rankings, scouting depth, and Market XI support.
1. 
2. 
3. 
4. 
5. 
6. 
7. 
Football Intelligence Platform Research Report 6

User Segments and Jobs-to-be-Done
The product should not design for “football fans” as one blob. Density tolerance, urgency, willingness to
pay, and trust triggers vary sharply across segments. Live-score utilities win because they collapse friction
for casual and hardcore fans. Reference products win because they reduce ambiguity. Pro scouting tools
win because they support workflows, not just pages. Your product has to combine those strengths without
forcing every user into the same information density [W1][W4][W8][W12][W13].
User segment summary
Segment Primary need Density tolerance Realtime urgency Offline value
Casual fan Fast scores, table, lineup,
key moments, transfer
headlines
Low-medium Very high during live
matches
High on mobile; last-
known data acceptable
Hardcore fan Deep stats, momentum,
xG race, tactical context,
multiple matches
High Very high Medium; wants saved
hubs and alerts
Football newbie Explainers, glossary,
simple rankings, begin‐
ner-safe comparisons
Low Medium High if content is guided
and readable
International tournament
fan
Country follow, brackets,
FIFA ranking context,
time-zone clarity
Medium Very high during tourna‐
ments
High for schedules and
saved teams
Women’s football fanParity in coverage, re‐
spect, complete player/
team pages, discovery
Medium-high High High; underserved by
current products
Fantasy / game user Price movement, fixtures,
injury/news context,
social bragging
Medium-high Very high near deadlinesMedium
Scout Role search, video-linked
stats, similarity, shortlist,
notes
Very high Medium High for notes/reports
Analyst Exportable tables, repro‐
ducibility, data lineage,
advanced filters
Very high Medium Medium
Coach / manager Opponent context, avail‐
ability, lineup trends,
short explainable sum‐
maries
High High pre-match Medium
Player / pro Self/comparison context,
trend understanding,
clipped reports
Medium Low-medium Medium
Creator / media user Story angles, visuals,
timelines, comparison
cards, embeddable out‐
puts
Medium-high High around news cyclesMedium
Football Intelligence Platform Research Report 7

Jobs-to-be-done and retention dynamics
Segment
Core job-to-be-
done
Current product
pain Trust triggers
Frustration trig‐
gers Retention driver
Casual fan Tell me what matters
right now without
making me work for
it.
Too many cluttered
tabs; generic news;
unclear TV/watch
options.
Speed, clarity, push
alerts that matter, no
jargon.
Confusing density,
intrusive ads, fake-
live feel.
Watchlists, live
alerts, habit loop
around matchdays.
Hardcore fan Let me go from
score -> why -> who
-> what changed.
Stats split across
products; weak
timeline context; lim‐
ited cross-links.
Depth, freshness,
lineup certainty,
trustworthy event
ordering.
Shallow summaries,
lagging data, over‐
simplified ratings.
Sticky saved hubs,
compare flows,
multi-match dash‐
board.
Football newbie Help me understand
what I’m looking at.
Most apps assume
prior knowledge; ac‐
ronyms unexplained.
Learn mode, gloss‐
ary, clean explain‐
ers, 'why this mat‐
ters'.
Dense tables, ac‐
ronyms with no help,
gatekeeping tone.
Beginner-friendly
answers, saved ex‐
plainers, simple
alerts.
Tournament fan Make big events
easy to follow
across time zones
and stages.
Scattered bracket/
schedule/news info;
poor local-time
presentation.
Local-time sched‐
ules, simple stage
navigation, ranking
context.
UTC confusion, bur‐
ied women’s/contin‐
ental competitions.
Bracket tracking,
one-tap nation fol‐
low, reminder alerts.
Women’s football
fan
Don’t make me use a
second-class ver‐
sion of the product.
Coverage gaps,
missing player
pages/images, weak
search.
Parity in search,
rankings, alerts,
market surfaces, ed‐
itorial respect.
Token inclusion, in‐
complete squads,
missing stats.
Consistent coverage
and featured discov‐
ery.
Fantasy / game userHelp me make better
picks without feeling
like a sportsbook.
Injury ambiguity,
weak explainability,
noisy prediction
products.
Transparent drivers,
fixture difficulty,
availability clarity.
Predatory copy, fake
certainty, cash-like
framing.
Social bragging,
weekly habit loops,
explainable price
moves.
Scout Find me relevant
players fast, then let
me narrow the list
hard.
Too much fan noise,
not enough role-
based filtering,
video disconnected
from stats.
Role taxonomy,
comp filters, shortl‐
ist workflows, note-
taking.
Unverifiable models,
no export, no lin‐
eage.
Saved searches,
shareable reports,
evidence-linked
clips.
Analyst Give me reprodu‐
cible, explainable
football data.
Opaque vendor
transforms, incon‐
sistent IDs, weak
versioning.
Canonical IDs, ver‐
sioned snapshots,
exportability.
Black-box compos‐
ite scores, shifting
definitions.
API trust, stable
schemas, traceable
calculations.
Coach / managerSummarize the op‐
ponent quickly and
credibly.
Scouting tools often
too broad or too ex‐
pensive; fan apps
too shallow.
Short reports, avail‐
ability, set-piece /
trend summaries.
Over-designed
dashboards, slow
workflows.
Reliable pre-match
prep packets.
Player / pro Show me where I
stand and what style
I resemble.
Public products are
shallow or sensa‐
tionalized.
Respectful tone, role
comparisons,
strengths/weak‐
nesses.
Shaming leader‐
boards, junk social
metrics.
Useful self-study,
comparison cards.
Creator / media Help me turn foot‐
ball data into stories
fast.
Need to jump across
live app, stat site,
social platform,
graphics tool.
Reusable charts/
cards, timelines, ex‐
plainers, source la‐
bels.
Watermarked clutter,
awkward exports.
Shareable visuals,
alerts, trend hooks.
Important design implication. Casual and newbie flows should not be forced through the same density
as scout or analyst flows. The best way to unify the product is not separate apps; it is shared entity
pages with mode-aware density, clear explanations, and predictable navigation. 
Football Intelligence Platform Research Report 8

Competitive Benchmark Matrix
The benchmark set suggests a clear pattern. Users do not necessarily want one app that does everything;
they want one app that gets the core job right. FotMob excels at matchday usefulness and football-first
focus [W1][W3]. Sofascore pushes stat depth and feature velocity, but its multi-sport breadth also shows
what your product should avoid [W4][W5]. ESPN proves the value of watch pathways and content
packaging [W6]. FBref proves that structured, comparable stats create trust [W8]. Wyscout and Hudl
StatsBomb show that professional workflows depend on evidence-linked filtering, notes, and video—not just
dashboards [W12][W13].
Benchmark Core strength Likely user love points
Clutter / confusion
risk
What to copy / reinter‐
pret / avoid
FotMob Live match utility, trans‐
fer center, TV schedules,
rankings, alerts [W1][W3]
Fast matchday utility;
football-first scope; re‐
cent heatmaps and trans‐
fer-value graphs show
feature velocity [W2]
Ad burden can annoy
users; utility surface can
become crowded [W2]
Copy football-first focus,
schedules, transfer cen‐
ter, personal alerts; rein‐
terpret heatmaps care‐
fully; avoid ad-clutter
aesthetics.
Sofascore Deep stat density, wide
live coverage, feed, ana‐
lyst features [W4][W5]
Live detail, physical/run‐
ning data, halftime ana‐
lysis, feed layer [W5]
Multi-sport breadth can
dilute football-first iden‐
tity; can feel busy.
Copy deep event/stat in‐
strumentation; reinterpret
feed/news inside foot‐
ball-only frame; avoid
becoming generic all-
sports utility.
ESPN Personalization, watch
links, highlights, editorial
reach [W6]
Strong 'where to watch'
and content ecosystem.
Broad-network mentality
can feel less football-nat‐
ive; football detail often
secondary.
Copy official watch-link
posture and editorial
packaging; avoid TV-net‐
work sprawl.
FBref Structured statistical
depth, scouting report
framing [W8]
Excellent comparison
and percentile
storytelling.
Can intimidate casual
users; not a live-first
product.
Copy percentile/compar‐
ison clarity; reinterpret
into Learn/Fan/Scout
modes.
StatMuse Conversational query
pattern for sports data
[W7]
Natural language entry is
fast and memorable.
Needs strong grounding
or it becomes gimmicky.
Copy query ergonomics;
avoid free-form un‐
answered prompts
without tools.
FPL Habit loops, deadlines,
chips, injury/news integ‐
ration [W9]
Strong weekly ritual, so‐
cial competition, simple
rules.
Can over-optimize users
into anxiety loops.
Copy ritual and explain‐
ability; avoid compulsion
framing and cash-adja‐
cent language.
Wyscout Professional scouting
workflow: video + search
+ shortlist [W12]
Evidence-first profes‐
sional workflow; global
coverage.
Too dense for main‐
stream fans.
Copy role filters, notes,
and shortlist logic into a
separate Scout mode.
Hudl StatsBomb Verified-by-video analyt‐
ics, recruitment/opposi‐
tion analysis [W13]
Trusted pro-grade fram‐
ing; evidence linked to
video.
Premium/professional
complexity.
Copy 'verified by video'
trust posture and explain‐
able model framing.
X / Twitter Fast rumor/news conver‐
sation and correction
layer [W14]
Immediate discourse and
crowd-sourced context.
Rumor amplification, bri‐
gading, toxicity.
Reinterpret with source
labels, rumor tiers, and
context notes; avoid
open-firehose chaos.
TikTok Discovery engine, topic
feedback, feed reset,
short-form habit loop
[W15][W16][W17]
Discovery, simple con‐
trols, topic tuning.
Risk of addictive end‐
less-scroll behavior.
Copy feed tuning, 'why
this item', refresh/reset;
avoid infinite-slot-
machine UX.
Football Intelligence Platform Research Report 9

Copy / reinterpret / avoid
Benchmark Copy Reinterpret Avoid
FotMob Team/player alerts; TV sched‐
ules; transfer center; football-
only IA
Player-value graphs only once
inputs are explainable
Ad-heavy or banner-stacked
layouts
Sofascore Deep match stats and event
completeness
Feed/news if football-only and
source-labeled
Becoming a multi-sport super-
app
ESPN Official watch pathways; per‐
sonalization
Highlight-led recap summariesTV-network clutter and generic
editorial voice
FBref Percentile scouting reports;
clean statistical tables
Advanced views under Scout
mode
Dumping FBref-like density onto
casual users by default
StatMuse Question-box entry point Mode-aware football assistantHallucinated natural-language
answers with no citations
FPL Deadlines, watchlists, rivalry en‐
ergy
Virtual-only Market XI cadenceStress-maximizing scarcity or
cash-like urgency
Wyscout Shortlists, role filters, notes, clip
linkage
Scout workspace inside a
broader consumer product
Making pro workflows mandat‐
ory for fans
X Source diversity; rumor velocity
awareness
Context notes for disputed
claims
Open timeline chaos and un‐
bounded reply graphs
TikTok Why am I seeing this?; refresh
feed; topic controls
Storytelling card loops for goals,
trends, explainers
Exploitative infinite scroll and
opaque ranking
Football Intelligence Platform Research Report 10

Feature Opportunity and Prioritization Map
For this project, MVP does not mean “smallest imaginable app.” It means the smallest set of surfaces that
can credibly establish trust, habit, and extensibility. Live matches, player/team/competition pages, search,
alerts, offline basics, and a clean multilingual foundation deliver the highest combined value. Feed/
community, advanced predictions, and public AI can be powerful later, but they create disproportionate trust
and moderation risk if launched before the data backbone is stable [F1][F2][W18].
Scoring note. Scores use a 1–5 scale where 5 means highest value, trust sensitivity, complexity, or
dependency. 
Feature User value
Trust sens‐
itivity Novelty
Technical
complexity
Data de‐
pendency
Rights de‐
pendency Phase
Recom‐
mendation
Live
matches
5 5 2 4 5 3 MVP Must be real
on at least
one flagship
flow; core
trust sur‐
face.
Comment‐
ary /
timeline
5 5 2 4 5 2 MVP Use one
canonical
event
stream; no
separate
fake com‐
mentary
path.
Player
pages
5 4 3 3 4 3 MVP High-use
destination;
must replace
mock data
early.
Team pages5 4 2 3 4 3 MVP Anchor for
following
clubs and
competi‐
tions.
Competition
pages
5 4 2 3 4 2 MVP Tables,
fixtures,
schedules,
forms.
Search / dis‐
cover
5 4 3 4 4 1 MVP Needs ca‐
nonical IDs,
aliases, and
football-first
ranking.
Alerts 5 4 2 3 4 1 MVP High reten‐
tion lever
once data
trust exists.
Compare 4 4 3 3 4 1 Phase 1.5 Good bridge
between fan
and scout
use cases.
Football Intelligence Platform Research Report 11

Feature User value
Trust sens‐
itivity Novelty
Technical
complexity
Data de‐
pendency
Rights de‐
pendency Phase
Recom‐
mendation
Rankings 4 5 4 3 4 1 Phase 1.5 Only once
formulas and
caveats are
public.
Transfers 4 4 3 3 4 3 Phase 1.5 High en‐
gagement,
but needs
rumor/
source dis‐
cipline.
Feed / news4 4 4 4 3 4 Phase 2 Needs
source
graph, mod‐
eration,
rights-aware
media.
Com‐
munity /
sentiment
3 5 4 5 2 2 Later Very risky
before mod‐
eration/ad‐
min tooling.
Football AI 4 5 4 4 4 1 Phase 2 Start narrow
and tool-
driven; nev‐
er generic.
Predictions3 5 3 4 4 1 Later Trust-sensit‐
ive; only
after
backtesting
and explana‐
tion UI.
Scout work‐
space
4 4 5 4 5 3 Phase 2 Major differ‐
entiation, but
only with re‐
liable data
joins.
Offline 4 3 2 3 2 1 MVP-lite Saved entit‐
ies and last-
known data
first; never
fake live.
Multilingual
support
5 4 2 4 1 1 MVP-lite Start with
4-6 launch
languages
done well.
Games /
Market XI
3 5 5 4 4 4 Phase 2 Keep virtual,
educational,
clearly non-
gambling.
Player mar‐
ket simula‐
tion
3 5 5 5 5 4 Later Only after
transparent
fundament‐
als and mod‐
eration safe‐
guards.
Football Intelligence Platform Research Report 12

Data Provider and Rights Matrix
There is no single “best football data provider” in the abstract. The right answer depends on product phase,
budget, target competitions, and tolerance for missingness. For launch, the product should prioritize breadth
of core football entities, predictable developer ergonomics, and explicit coverage rules. Professional-grade
scouting or analytics depth can be layered later or sourced selectively [W21][W23][W25][W28].
The most important data strategy decision is not vendor selection alone. It is adopting a competition
acceptance framework: a competition only ships when teams, players, fixtures, standings, lineups, event
freshness, localization quality, and rights posture all meet a minimum bar. This is especially important for
women’s football and long-tail international competitions, where demand is real but coverage completeness
often varies [F1][W19][W22][W27].
Provider comparison matrix
Provider
Coverage /
strength
Why it is attract‐
ive Main caution
Recommended
role Bottom-line fit
Sportmonks Broad app-friendly
coverage; fixtures,
events, lineups,
standings, squads;
women’s football
page is explicit
[W21][W22]
Developer-friendly;
good for first real
app slice
Less suitable than
premium scout
stacks for pro-grade
analytics
Primary launch app
data provider can‐
didate
Good balance for
MVP breadth
API-Football Broad endpoints; fix‐
tures as key join en‐
tity; injuries usable
by fixture [W23]
[W24]
Low-friction proto‐
typing; broad end‐
points
Prediction/odds fea‐
tures tempt
gambling adjacency;
verify quality
league-by-league
Fallback / secondary
provider
Useful backup and
reconciliation source
Sportradar Very broad enter‐
prise soccer cover‐
age, push + REST,
tiered coverage,
transfers/lineups/in‐
juries guidance
[W25][W26][W27]
Enterprise-grade
depth and live ops
posture
Cost/complexity
heavier for first
launch
Premium upgrade
path
Best if product gets
funded for serious
live scale
StatsBomb Open
Data
High-quality open
event data, some
women’s competi‐
tions and 360
samples [W28]
[W29]
Excellent for model
R&D, demos, bench‐
marks
Coverage is partial
and non-commer‐
cially constrained
Research-only /
model development
Do not use as sole
product backbone
Wyscout / Hudl
StatsBomb products
Professional scout‐
ing workflows and
linked video/data
[W12][W13]
Best benchmark for
scout UX and pro
trust
Sales-led and premi‐
um; not a cheap
general-consumer
backbone
Benchmark / premi‐
um partner later
Use to shape work‐
flows, not launch
consumer coverage
Football Intelligence Platform Research Report 13

Rights-risk matrix
Asset class Risk level Evidence / reason Implication
Player names/images/likenessHigh FIFPRO explicitly frames collect‐
ive licensing as safeguarding
NIL usage [W33]; eFootball lists
FIFPRO-authorized collective
rights as a licensing example
[W36].
Use licensed provider assets or
fallbacks; do not assume free
use of player photos/likenesses.
Federation / competition marksHigh FIFA directs users to brand pro‐
tection and mark request pro‐
cesses for official marks [W34].
Treat federation marks as li‐
censed assets, not generic web
graphics.
Club / association logos High The FA states only official part‐
ners, sponsors, and licensees
are authorized to use its marks
[W35].
Use logos only if explicitly li‐
censed or bundled under pro‐
vider rights; otherwise use text/
fallback badges.
Editorial images and videosHigh Rights differ by league, club,
agency, and territory.
Define a rights matrix by asset
type before launch; keep signed
URLs / metadata.
Streaming video High Rights are fragmented by
region/platform.
Launch with watch-link discov‐
ery, not direct hosting, unless
rights are secured.
User-generated community
posts
Medium Moderation and defamation/
rumor risk.
Add moderation tools, proven‐
ance labels, and takedown
workflow before wide com‐
munity launch.
Market-like mechanics High Apple guideline 5.3 treats gam‐
ing/gambling/lotteries as highly
regulated and restricts real-
money flows [W30]; AGCO
maintains sport/event betting
standards [W31][W32].
Keep Market XI strictly virtual,
educational, and clearly separ‐
ate from betting language and
real-money value.
Data you cannot assume exists everywhere
Data category Why it is inconsistent Recommended product behavior
Expected lineups Often model-derived, late, or premium-
gated
Graceful unknown states; confidence labels;
never imply certainty
Reliable injury status League and provider completeness vary
widely
Use source freshness timestamps and
status confidence
Player headshots Rights and availability inconsistent Fallback initials/neutral silhouettes
Women’s lower-tier historical depthCoverage frequently patchy Wave-based competition acceptance matrix
Advanced event data / xG Usually premium or absent in many leaguesOffer basic stats where event detail is
missing; do not fabricate xG
Transfer rumor truth Editorial source quality varies wildlySource-tier and rumor-tier labeling; no
unqualified certainty
Physical/running metrics Not universal and often premium Treat as optional enrichment, not schema
requirement
Localized names and editorial copyMany competitions lack high-quality local-
language data
Maintain internal localization layer and
human QA for priority locales
Football Intelligence Platform Research Report 14

Recommendation. Use a competition acceptance matrix as a shipping gate. A league should not
appear “fully supported” unless the product can defend its coverage depth, freshness, terminology,
and rights posture for that league. 
Football Intelligence Platform Research Report 15

Model / Algorithm Recommendations
The product should avoid the trap of one magic “football score.” Different questions require different
models: national-team rankings, club strength, match probabilities, xG, role ratings, transfer valuation,
content ranking, and market simulation are not the same problem. The right launch posture is layered,
transparent, and narrow: start with models whose behavior can be explained in plain language and
backtested with the data you actually have [F1][W10][W11][W13][W28].
Model/prob‐
lem
What it
solves
Candidate
method
Data require‐
ment
Launch-wor‐
thiness Validation Failure mode
Recom‐
mendation
International
team rankings
Trustworthy
ranking
aligned with
user expecta‐
tions
FIFA-style
SUM / Elo-like
additive up‐
date [W10]
[W11]
Historical
match results,
match import‐
ance, home/
neutral
metadata
High Backtest
against official
rankings and
event out‐
comes
If formula
drifts too far
from official
logic, users
distrust it
Mirror FIFA lo‐
gic for national
teams; do not
invent a flashy
replacement.
Club strengthRelative club
quality across
competitions
Elo or Glicko
family with
competition
weighting
Results, ven‐
ue, opponent
strength,
maybe lineups
High Brier/log loss
on match out‐
comes; calib‐
ration
Domestic/con‐
tinental
weighting mis‐
takes distort
reputation
Use transpar‐
ent house Elo;
publish inputs
and refresh
cadence.
Match prob‐
abilities
Home/draw/
away and sco‐
reline priors
Poisson / Dix‐
on-Coles
baseline with
lineup modifi‐
ers
Goals history,
team strength,
rest, venue, in‐
juries
Medium-highCalibration
curves, Brier
score, sharp‐
ness
Users over‐
read certainty;
lineup miss‐
ingness hurts
accuracy
Launch simple
and explain‐
able; add rich‐
er priors later.
Scoreline pre‐
diction
Most likely ex‐
act scores
Derived from
goal model
rather than
separate black
box
Same as
match probab‐
ility
Medium Proper scoring
rules on sco‐
reline distribu‐
tions
Exact-score
obsession can
feel betting-
adjacent
Keep second‐
ary; never
hero-feature
at launch.
xG Shot quality
estimate
Logistic/prob‐
abilistic shot
model; enrich
with event
context [W13]
[W28][W29]
Shot location/
angle/body
part/se‐
quence/
pressure if
available
Medium-highCalibration
against held-
out shots
League
coverage
gaps; incon‐
sistent event
taxonomies
Use only
where event
detail supports
it; label cover‐
age.
Player role rat‐
ings
How good a
player is for a
role, not in the
abstract
Role-specific
z-score blends
+ percentiles
Player event/
season stats,
league
strength, posi‐
tion/role tax‐
onomy
High Correlation
with expert la‐
bels / shortlist
outcomes
One-size-fits-
all ratings mis‐
lead
Build role fam‐
ilies first, then
weighted mod‐
els.
Player com‐
parison
Side-by-side
contextualized
evaluation
Percentiles,
peer cohorts,
similarity
neighbor‐
hoods
Normalized
player stats,
minutes,
league
strength
High User task suc‐
cess, scout
validation
Cross-league
comparisons
can overclaim
Default to
same-role co‐
horts and dis‐
close sample
filters.
Transfer valu‐
ation
Longer-hori‐
zon football
value
Transparent
composite:
age curve,
contract, per‐
formance,
league
strength
Contract, per‐
formance,
age, injuries,
availability
Medium Compare to
realized trans‐
fer fees with
caveats
Fees are noisy
and strategic,
not pure value
Keep separate
from market
simulation
price.
Football Intelligence Platform Research Report 16

Model/prob‐
lem
What it
solves
Candidate
method
Data require‐
ment
Launch-wor‐
thiness Validation Failure mode
Recom‐
mendation
Scouting sim‐
ilarity
Find analog‐
ous players
Weighted fea‐
ture distance /
embedding
over role-spe‐
cific features
Role vectors,
normalized
stats, league
context
High Human scout
acceptance
tests
Bad feature
scaling cre‐
ates silly
comps
Start inter‐
pretable be‐
fore deep em‐
beddings.
Feed rankingWhich items a
user should
see first
Hybrid re‐
cency +
relevance +
follow graph +
diversity con‐
straints
User follows,
clicks, hides,
content
metadata
Medium Retention +
hide/report
rates
Echo cham‐
bers and ru‐
mor amplifica‐
tion
Use topic con‐
trols and
source di‐
versity con‐
straints.
Personaliza‐
tion
Make the
product feel
relevant
Rule-based
cold start +
lightweight
ranking model
User follows,
language, re‐
gion, session
behavior
High Activation/re‐
tention lift
Cold start and
feedback
loops
Prefer explicit
follows early;
delay opaque
heavy person‐
alization.
Sentiment
scoring
Summarize fan
mood
Entity-aware
NLP over mod‐
erated sources
Comments/
posts, entity
linking, lan‐
guage support
Low at launchAgreement vs
human labels
Sarcasm, mul‐
tilingual drift,
brigading
Delay until
moderation
and entity res‐
olution are
strong.
Trend detec‐
tion
Surface rising
players/topics/
rumors
Velocity + nov‐
elty + source
diversity +
baseline devi‐
ations
Event stream,
search spikes,
follow/add be‐
havior,
editorial ingest
Medium Precision of
surfaced
trends
Can magnify
noise
Require minim‐
um source di‐
versity and
cooling peri‐
ods.
Market simu‐
lation pricing
Virtual
portfolio price
movement
Fundamentals
+ demand im‐
balance +
volatility
dampeners
Valuation fea‐
tures, user de‐
mand, event/
news signals
Low-mediumStability and
manipulation
tests
Pump-and-
dump behavi‐
or, perceived
betting
Launch only
with caps, ex‐
planations,
cooldowns,
and no cash
cues.
Confidence
scoring
Communicate
uncertainty
Coverage
completeness
+ recency +
model support
Data fresh‐
ness, missing‐
ness, sample
size
High User compre‐
hension stud‐
ies
Ignored if bur‐
ied
Display confid‐
ence promin‐
ently on rank‐
ings, predic‐
tions, rumors.
ExplainabilityHelp users
trust outputs
Driver break‐
downs, peer
cohorts,
timestamps
Model features
+ provenance
High Qualitative
trust testing
Verbose but
still opaque
explanations
Make every
advanced met‐
ric clickable to
'why?'.
Anomaly / ma‐
nipulation de‐
tection
Catch weird
price spikes or
spammy
trends
Thresholds +
z-score spikes
+ graph fea‐
tures
Trade logs, fol‐
low graphs,
content bursts
Medium False positive/
negative re‐
view
Overblocking
legitimate
buzz
Start conser‐
vative and
manual-review
assisted.
Search rank‐
ing
Return the
right player/
team/match
fast
Exact alias +
canonical ID +
popularity +
recency hybrid
Aliases, locale
names, entity
graph, user
context
High Zero-result
rate, click-
through
Name colli‐
sions and mul‐
tilingual vari‐
ants
Invest early;
search is
navigation, not
a side feature.
Football AI Assistant Recommendations
The football assistant should be built as a tool-using analyst, not as a free-form chatbot. The main lesson
from StatMuse is that conversational entry can be powerful when the answer is grounded in structured
Football Intelligence Platform Research Report 17

sports data [W7]. The main lesson from TikTok/X is that discovery controls and transparency matter when
recommendations feel wrong or rumors spread too fast [W14][W15][W17].
The correct split is simple: retrieve facts, generate explanation. Entity resolution, live stats, injuries,
transfers, standings, and market inputs should be retrieved from canonical APIs. The model should only
generate phrasing, comparison narratives, glossary explanations, and concise summaries over those
retrieved facts. Every answer should carry a freshness timestamp and at least one visible provenance cue.
Assistant layer Tool surface Retrieve Generate Trust behavior
Search/retrieve Player/team/match look‐
up, tables, injuries, trans‐
fers, watchlists, user
notes
Facts with freshness re‐
quirements; entity disam‐
biguation; history re‐
trieved from trusted APIs
Natural-language phras‐
ing, summaries, compare
narratives, beginner ex‐
planations
All answers cite source
data block and update
timestamp
Learn mode Glossary, explainers,
why-this-metric context
Rules, definitions, com‐
petition structures
Friendly analogies and
layered explanation
Short answer first; 'learn
more' expandable
Fan mode Live match, news, trans‐
fer context
Current data, timelines,
standings, source-
labeled rumors
Storytelling summary and
context
Avoid certainty on ru‐
mors; label source tier
Scout mode Role search, comparison,
shortlist summaries
Structured stats, video-
linked evidence, role co‐
horts
Plain-language interpret‐
ation of drivers
Show caveats, sample fil‐
ters, league adjustments
Freshness policy Live match and rumor an‐
swers expire fastest
Match events seconds/
minutes; transfers/news
minutes/hours; season
stats daily
Generated language nev‐
er outlives source
timestamp
Show 'last updated'
everywhere advanced
outputs appear
How freshness should work
Match-state answers: seconds to minutes. Expire aggressively.
Injuries, transfers, rumor context: minutes to hours with source-tier labels.
Season and historical stats: daily snapshot freshness is often acceptable.
Definitions and explainers: durable knowledge, but still versioned.
How to avoid generic sports-chatbot failure
Do not answer beyond the tools you actually have.
Always resolve to canonical entities before generating prose.
Surface confidence and known limitations on advanced answers.
Use different answer shapes for Learn, Fan, and Scout modes.
Show what data the answer came from and when it was refreshed.
UX / Navigation / Design System Recommendations
The existing prototype already proves that the product can feel premium. The risk is not visual weakness; it
is information sprawl. The cleanest IA is the one already implied by the master plan: Home, Match Center,
Discover, Scout, Community, Games, My Space [F1]. The design challenge is to stop these from behaving
like disconnected pages and instead make them feel like views into one football graph.
• 
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 18

Three density modes—Learn, Fan, Scout—are especially strong for this product because they let one entity
page serve multiple audiences without forcing three separate products [F1]. This is more defensible than a
forest of “lite” and “pro” pages.
Recommended top-level navigation
Home
Live now, transfer pulse, saved-entity updates,
women’s spotlight, explainers, assistant entry,
and one clean recap lane.
Match Center
Score, timeline, lineups, watch-link discovery,
xG/momentum only when justified,
commentary/storyline rail, and alerts.
Discover
Search, players, teams, competitions,
comparisons, rankings, and seasonal views.
Scout
Role filters, shortlist, notes, export, similarity,
and video-linked evidence. Keep this clearly
separate from fan feed surfaces.
Community
Later, curated, and source-aware. Should feel
like a football discussion layer, not a generic
social app clone.
Games / My Space
Games houses simulation-only mechanics. My
Space stores follows, notes, saved explainers,
alerts, and downloaded reports.
Search and command palette
Single query box that accepts players, clubs, competitions, matches, and natural-language
questions.
Entity-first ranking: canonical IDs, aliases, language variants, and popularity/recentness.
Shortcuts for compare, follow, add alert, save note, and open assistant with current entity context.
Premium-feeling design rules
Keep one dominant accent and generous spacing. Premium is hierarchy, not ornament.
Use cards sparingly; not every block needs a border.
Prefer progressive disclosure over full-surface density.
Every advanced metric should answer “why am I seeing this?”
Keep hero surfaces football-first and calm. Avoid homepage casino-energy.
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 19

Offline / Online Strategy
Offline support matters, but football products often oversell it. The correct promise is not “live sport works
offline.” It is “your saved football world remains useful when the connection is poor.” Service workers and
local caches are appropriate for shell assets, saved entities, notes, articles, last-known fixtures, and
downloaded reports [W39][W40]. Live scores and other freshness-critical surfaces should fail gracefully
rather than fake reality.
Surface Offline status Local behavior Sync behavior Conflict rule
App shell, icons, fonts,
locale bundles
Offline-first Long-lived cache; ver‐
sioned by release
Background refresh on
reconnect
No conflicts
Followed teams/playersOffline-capable Read local snapshot im‐
mediately
Queue follow/unfollow
writes
Last write wins
Saved articles/explain‐
ers
Offline-capable Store explicit saves and
recent reads
Silent refresh when on‐
line
Newest server copy wins
Scout notes Offline-capable Local-first editing Background sync queuePer-note merge history
or explicit conflict dialog
Standings / fixtures /
last-known stats
Offline-capable Show synced-at
timestamp and stale
badge
Replace on reconnectServer wins; user cannot
edit
Live scores / live odds /
live commentary
Online-only Never fake live updates
offline
Resume and backfill on
reconnect
N/A
Portfolio / Market XI Partially offline Read last-known hold‐
ings, but block trades
offline
Refresh before enabling
actions
Server authority for bal‐
ances and trades
Community drafts Offline-capable Draft locally Post on reconnect after
revalidation
Prompt user if thread is
locked/deleted
Localization / RTL / Cultural Design Recommendations
Localization is not a translation file problem. It is a product-system problem involving football vocabulary,
typography, pluralization, RTL behavior, line-length pressure, local time/date rules, and editorial tone. W3C
guidance is clear that RTL and internationalization need to be designed into layout and content, not patched
later [W37][W38].
The internal plan is directionally right but too ambitious for a first public launch if interpreted literally. A
better rollout is: launch with a small, high-quality set of languages; ensure football terms are localized
contextually; and only expand when layout, glossary, and human QA are ready.
Language Complexity Key issue
Typography / layout
note Recommended timing
English Low Baseline editorial source
language
Standard sans fonts Master copy
French Medium Football terms and plural‐
ization
Good Latin coverage Launch
Spanish Medium Large football audience;
regional terminology
shifts
Good Latin coverage Launch
Football Intelligence Platform Research Report 20

Language Complexity Key issue
Typography / layout
note Recommended timing
Arabic High RTL, mirrored layout,
contextual football
vocabulary
Arabic-supporting font
stack required
Launch if done properly
Japanese High Compact UI, truncation,
honorific/editorial tone
CJK fallback requiredPhase 1.5
Chinese High Simplified/traditional de‐
cision; dense labels
CJK fallback requiredPhase 1.5
Yoruba High Diacritics, scarce sports
localization resources
Font coverage importantLater with human review
Swahili Medium-high Growing football audi‐
ence; glossary work
needed
Latin coverage okay Later
Portuguese Medium Brazil/Portugal term dif‐
ferences
Latin coverage okay Phase 1.5
Russian Medium-high Grammar and translitera‐
tion quality matter
Cyrillic support Later / market-dependent
Hebrew High RTL and football term QAHebrew-supporting font
stack
Launch if Arabic
launches
Igbo High Limited localization re‐
sources
Diacritic support Later
Hausa High Limited localization re‐
sources
Latin coverage okay Later
Italian Medium Strong football culture
and tactical vocabulary
Latin coverage okay Phase 1.5
Hindi High Font quality, line-height,
transliteration choices
Devanagari fallback re‐
quired
Later
German Medium Long compounds can
break layouts
Latin coverage okay Recommended added
language
Turkish Medium Strong football audience
and transfer interest
Latin coverage okay Recommended added
language
Indonesian Medium Huge mobile football
audience
Latin coverage okay Recommended added
language
Korean High Compact UI; proper
name order choices
Hangul fallback requiredRecommended added
language
Dutch Medium High football literacy;
good editorial fit
Latin coverage okay Recommended added
language
Launch recommendation
Start with English, French, Spanish, and one high-quality RTL pair only if layout QA is complete. Expand only
after terminology glossaries, fallback fonts, and editorial review are working. Do not ship languages merely
because string files exist [F1][W37][W38].
Trust / Safety / Anti-Gambling Recommendations
The anti-gambling stance is not a cosmetic positioning detail. It is part of the product architecture. Apple
treats gaming/gambling/lottery functionality as highly regulated [W30], and Ontario’s AGCO maintains a full
Football Intelligence Platform Research Report 21

standards framework for sport and event betting [W31][W32]. Even if the product never handles real money,
design language, push mechanics, and price/prediction framing can still create review and reputational risk.
The safest—and strongest—interpretation for this product is to channel the energy of market mechanics into
football literacy, not risk-taking: explain why a price moved, cap volatility, label simulation clearly, and avoid
every piece of sportsbook vocabulary.
Principle Design rule Importance
Virtual-only economy All coins/points have no cash-out path, no
redeemability, no wagering language.
High
No sportsbook lexicon Avoid bet, stake, parlay, lock, payout, wager,
odds-led hero copy.
High
Educational framing Explain what changed a player price and
what fundamentals matter.
High
Cooling mechanisms Cap volatility, rate-limit trades, no streak
pressure, no countdown panic.
High
Age-appropriate presentation No glamorized risk-taking or status framing
around speculation.
High
Transparency Display formula drivers, confidence, and
freshness for price or prediction changes.
High
No narrow event contracts Do not let users speculate on micro-events
like next yellow card or next corner.
Critical
Opt-out and controls Users can mute games/market surfaces and
disable push nudges.
Medium
Moderation against hype manipulationDetect brigading, coordinated pumps, fake
news, deceptive rumors.
Critical
Store-review readiness Keep language, screenshots, onboarding,
and pricing clearly non-gambling [W30]
[W31][W32].
Critical
Rumor, source, and manipulation policy
Every transfer/news item gets a source label and rumor tier.
Trend surfaces require source diversity, not just volume.
Provide context notes on disputed claims, borrowing the best corrective instinct from Community
Notes without copying open-platform chaos [W14].
Offer “why this story is rising” and “show me fewer stories like this” controls, inspired by TikTok’s
recommendation explanations and feed refresh controls [W15][W16][W17].
Launch Architecture for First Real Production Launch
The first real production launch should be optimized for truth, recovery, and iteration, not for theoretical
hyperscale. The master plan’s ~200-concurrent-user launch gate is reasonable precisely because it allows
disciplined choices: one primary region, managed Postgres/Auth/Storage, a narrow realtime path, typed
contracts, worker processes for ingest/reconciliation, and real observability [F1].
• 
• 
• 
• 
Football Intelligence Platform Research Report 22

The big mistake would be either over-building distributed complexity too early or under-building the core
truth layer. The launch architecture recommended here keeps that balance: enough structure to be auditable
and recoverable, but not so much machinery that product progress stalls.
Architecture area Current reality Launch recommendationLater evolution
Client apps React web prototype, no real
iOS client
React web + Expo/React Native
iOS beta sharing tokens/con‐
tracts [F1][W44][W45]
Android after core flows are
stable
Repo structure Single local repo in unhealthy
tracked state
Monorepo with apps/web, apps/
mobile, apps/api, apps/workers,
packages/* [F1][F2]
Package-level contracts, design
tokens, model helpers
API layer Express scaffold TypeScript API with OpenAPI-
first contracts [F1][W41]
Service decomposition only
when load/teams justify
Database None / in-memory user storeManaged Postgres for canonical
graph + user state [F1][W42]
Read replicas/pooler later
Realtime None Redis-backed hot state + web‐
socket/SSE for one real match
center
Queue/broker and multi-region
fan-out later
Analytics/time series None Keep MVP analytics light; adopt
ClickHouse when live/event load
and product analytics justify [F1]
[W50]
Dedicated real-time analytics
and observability workloads
Auth/storage None Supabase Auth + Storage + RLS
for launch convenience [W42]
[W43]
Can swap/augment later if
needed
Observability None Prometheus metrics + Sentry er‐
rors/perf + runbooks [W46]
[W47][W48]
SLOs and on-call maturity
CI/CD None GitHub Actions for build/test/
typecheck/deploy gates [W49]
Preview environments, schema
checks, canary rollout
Beta distribution None Web beta + TestFlight iOS beta
[W45]
App Store release after beta reli‐
ability
First-launch readiness standard
Tracked app, reproducible build, lint/test/typecheck all green in CI.
Real player/team/fixture/table data on flagship paths.
At least one monitored live match-center path.
Priority-language QA done; Arabic/Hebrew only if RTL is proven.
Offline shell and last-known data behave honestly.
Assistant only answers through football-scoped tools.
Rights-aware media behavior and fallback strategy defined.
Key Risks, Gaps, and Unknowns
The largest unresolved unknowns are not technical in the narrow sense; they are product-governance
unknowns: launch competition scope, licensing status, business model, language commitment, and
whether Market XI belongs in the first public beta. These decisions affect everything from provider selection
to UI copy to moderation and on-call burden.
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 23

ID Risk Severity Likelihood Why it matters Mitigation
R1 Repo remains mis-
tracked
Critical High Unsafe deployment/
release management
Fix git root before
any serious beta
R2 Live data shipped
without canonical
IDs
Critical Medium Contradictory pages
and impossible de‐
bugging
Define mappings
and serving views
first
R3 AI launches before
tools/data are real
High High Hallucinations des‐
troy trust
Delay AI breadth;
use tool-calling only
R4 Market XI perceived
as betting
Critical Medium Store review risk
and brand confusion
Virtual-only framing,
copy review, no
cash cues
R5 Rights assumptions
on logos/images
Critical Medium Takedown/legal ex‐
posure
License or fallback;
maintain rights
metadata
R6 Localization rushedHigh High Broken RTL and mis‐
translated football
terms
Launch fewer lan‐
guages well
R7 Community features
launched without
moderation
High Medium Rumor/abuse/bri‐
gading spiral
Delay open social
until controls exist
R8 Prediction features
overstate certainty
High Medium Trust erosion and
gambling adjacency
Confidence labels
and backtesting
R9 Provider
dependence with no
reconciliation
High Medium Silent data regres‐
sions
Fallback provider +
diff checks
R10 Too many features
before one strong
loop
High High Wide demo, weak
retention
Focus on search ->
player/team -> live
-> alert loop
What to Build Now / Next / Later / Never
Build now
Fix repo tracking and move to
monorepo skeleton.
Write OpenAPI for search, player/
team/competition, match center,
alerts, notes, assistant tool endpoints,
and Market XI read models.
Stand up Postgres + Auth + Storage +
RLS; model canonical IDs and
mappings.
Integrate one primary provider for
teams, players, fixtures, standings,
and a narrow live timeline.
Replace mocks on search, player
page, team page, competition table,
and one real match center.
Build next
Compare flows, rankings, and
explainable role ratings.
Football assistant in Learn/Fan/Scout
modes using only product tools and
citations.
Transfer center with rumor tiers and
source credibility.
Scout workspace: role filters, shortlist,
notes, exportable snapshots.
Rights-aware feed with verified
sources and story cards.
Basic Market XI backend support with
educational framing only.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 24

Add route-level code splitting, loading/
empty/error/stale states, and
performance budgets.
Implement push/alert foundations and
offline caching for shell + saved
entities.
Ship 4-6 languages maximum, with
Arabic/Hebrew only if RTL QA is
genuinely ready.
Build later
Open community rooms and creator
tools.
Advanced xG, momentum, and role-
family models across more
competitions.
Android app once web + iOS loops are
stable.
Long-tail league expansion after
competition acceptance criteria are
passing.
Heavier personalization and trend
engines once enough explicit
feedback exists.
Cool but not now / avoid
COOL BUT NOT NOW
Full public creator marketplace.
Ubiquitous social graph and
comments under every entity.
Exact-score hero product.
Complex live simulation overlays for
every match before event trust is
proven.
AVOID / DANGEROUS / LOW-VALUE
A generic multi-sport super-app
posture.
Launching with flashy prediction
certainty and no backtests.
Using sportsbook or trader language
in consumer-facing copy.
Assuming rights for logos/headshots
because competitors show them.
Public AI answers that cannot cite the
product’s own data layer.
Additional brutally honest filters
SCREENSHOT-GOOD BUT RETENTION-WEAK
AI surfaces that answer beautifully but
are not grounded in real data
Open community timelines before
moderation and source labeling exist
FEATURES USERS MAY SAY THEY WANT BUT
USE LESS
Open comments under everything
Dozens of simultaneous themes and
skins
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 25

Prediction widgets with sleek
percentages but no calibration or
freshness cues
Hyper-decorated dashboards that
impress in screenshots but slow
recurring use
Market XI as a homepage hero before
the core football loop is trusted
Exact-score predictions front and
center
Aggressive rumor feeds with no
friction
Every league immediately, regardless
of data quality
FEATURES IMPOSSIBLE TO TRUST EARLY
Global cross-league player rankings
with no league-strength adjustment
Transfer values presented as objective
truth
Expected lineups for obscure
competitions with no confidence cue
Sentiment scores across many
languages before moderation/entity
resolution
A football assistant that answers
beyond the data that actually exists
FEATURES BLOCKED BY RIGHTS OR
COMPLIANCE
Universal player headshots
Club/federation marks across all
competitions
Direct streaming or highlights hosting
Unrestricted editorial photo usage in
feed cards
Final Recommended North Star Product Shape
The strongest north star for this project is not “the biggest football app.” It is the most coherent football
operating system for informed following: one place where a fan can reliably move from score to
explanation, from player to role fit, from rumor to source context, from table to watch path, and from
curiosity to cited assistant answer.
In practical product terms, that shape looks like this:
Home: personalized but calm; live cards, transfer pulse, women’s spotlight, explainers, and
assistant entry.
Match Center: one truthful live spine with score, timeline, lineups, xG/momentum only where
justified, and watch-link discovery.
Discover: best-in-class search plus player/team/competition pages with Learn/Fan/Scout density
modes.
Scout: separate evidence-first workspace with role filters, notes, similarity, and exportable
shortlists.
Community: curated later, with source labels, context notes, and moderation—not an open-
firehose clone of X.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
Football Intelligence Platform Research Report 26

Games: retained as a clearly virtual simulation layer, never the product identity.
My Space: follows, alerts, notes, saved explainers, and downloaded reports—the user’s durable
football memory.
If the product builds that shape in the recommended order, it can become unusually defensible: football-first
like FotMob, stat-legible like FBref, queryable like StatMuse, workflow-aware like Wyscout/StatsBomb, and
more globally thoughtful than most current football products [W1][W7][W8][W12][W13].
Appendix
Questions still unanswered
Which competitions are in Wave 1 launch coverage, explicitly including women’s competitions?
What exact rights, if any, already exist for club logos, player headshots, and editorial images?
What is the business model at launch: free, ads, premium, or hybrid?
What level of scouting depth is intended for external/public users versus authenticated premium
users?
Will match center use websocket, SSE, or a hybrid polling fallback?
Which languages are genuine launch commitments versus long-term aspirations?
What specific rumor-source taxonomy will govern transfer/news surfacing?
Should Market XI exist in the first public beta, or wait until trust in core data is established?
Is the first iOS beta consumer-facing or founder/design-led closed beta?
Which provider is budget-feasible for launch and which data categories will still be missing even
after purchase?
Recommended launch coverage logic
Choose a Wave 1 competition set with explicit women’s parity.
For each competition, test entity completeness, lineup freshness, localized naming, and media
posture.
Only surface advanced models where underlying event depth supports them.
Mark everything else clearly as unavailable rather than approximated.
Decision heuristic for every new feature
Ask four questions: Does it improve the core football loop? Does it sit on the canonical graph? Can it be
explained? Can it be localized and moderated responsibly? If the answer is no to any of those, it does not
belong in the first real launch.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
1. 
2. 
3. 
4. 
Football Intelligence Platform Research Report 27

Source Notes / Bibliography
All sources accessed/reviewed on March 27, 2026 unless the source itself carries a different publication/update date. Internal
source codes F* refer to uploaded project files. External source codes W* refer to official product pages, platform
documentation, provider documentation, and selected supporting research.
F1 Football Platform Master Plan — Uploaded project document. Internal
F2 Repo Overview and Audit — Uploaded project document. Internal
F3 Project research brief / pasted prompt — Uploaded project document. Internal
W1 FotMob official site — FotMob. https://www.fotmob.com/
W2 FotMob App Store listing / release notes — Apple App Store. https://apps.apple.com/ca/app/
fotmob-football-live-scores/id488575683
W3 FotMob Google Play listing — Google Play. https://play.google.com/store/apps/details?
id=com.mobilefootie.wc2010
W4 Sofascore football page — Sofascore. https://www.sofascore.com/
W5 Sofascore App Store listing — Apple App Store. https://apps.apple.com/us/app/sofascore-live-
sports-scores/id1176147574
W6 ESPN football hub / app features — ESPN. https://global.espn.com/football/
W7 StatMuse company/about — StatMuse. https://www.statmuse.com/company/about
W8 FBref scouting reports explained — FBref. https://fbref.com/en/about/scouting-reports-explained
W9 Fantasy Premier League rules/help — Premier League. https://fantasy.premierleague.com/help/
rules
W10 FIFA men’s ranking procedures — FIFA. https://inside.fifa.com/fifa-world-ranking/procedure-men
W11 FIFA women’s ranking methodology — FIFA. https://inside.fifa.com/fifa-world-ranking/procedure-
women
W12 Hudl Wyscout product page — Hudl. https://www.hudl.com/en_gb/products/wyscout
W13 Hudl StatsBomb platform page — Hudl. https://www.hudl.com/en_gb/products/statsbomb/platform
Football Intelligence Platform Research Report 28

W14 X Community Notes help page — X. https://help.x.com/en/using-x/community-notes
W15 TikTok For You help page — TikTok. https://support.tiktok.com/en/getting-started/for-you
W16 TikTok recommendation / LIVE content help page — TikTok. https://support.tiktok.com/en/using-
tiktok/exploring-videos/how-tiktok-recommends-content
W17 TikTok feed refresh announcement — TikTok. https://newsroom.tiktok.com/introducing-a-way-to-
refresh-your-for-you-feed-on-tiktok-ca?lang=en-CA
W18 IBM sports fan digital content study — IBM. https://newsroom.ibm.com/2025-08-18-ibm-study-
sports-fans-demand-more-dynamic-digital-content%2C-powered-by-ai
W19 SPORTFIVE women’s football value study — SPORTFIVE. https://sportfive.com/press-media/
sportfive-study-underlines-the-value-of-womens-football-and-uncovers-its-growth-potential
W20 FIFA Women’s World Cup 2023 audience report — FIFA. https://inside.fifa.com/tournament-
organisation/audience-reports/australia-new-zealand-2023
W21 Sportmonks football API — Sportmonks. https://www.sportmonks.com/football-api/
W22 Sportmonks women’s football coverage — Sportmonks. https://www.sportmonks.com/football-api/
womens-football/
W23 API-Football documentation — API-Football. https://www.api-football.com/documentation-v3
W24 API-Football injury usage guide — API-Football. https://www.api-football.com/news/post/how-to-
get-started-with-api-football-the-complete-beginners-guide
W25 Sportradar soccer API overview — Sportradar. https://developer.sportradar.com/soccer/reference/
soccer-api-overview
W26 Sportradar rosters, lineups, transfers guide — Sportradar. https://developer.sportradar.com/
soccer/docs/soccer-ig-rosters-lineups-transfers
W27 Sportradar data coverage tiers — Sportradar. https://developer.sportradar.com/soccer/docs/
soccer-ig-data-coverage-tiers
W28 StatsBomb open data repository — GitHub / StatsBomb. https://github.com/statsbomb/open-data
W29 Hudl StatsBomb free UEFA Women’s Euro 2025 data — Hudl. https://www.hudl.com/blog/hudl-
statsbomb-free-euro-2025-data
Football Intelligence Platform Research Report 29

W30 Apple App Review Guidelines — Apple Developer. https://developer.apple.com/app-store/review/
guidelines/
W31 AGCO standards and resources for sport/event betting — AGCO Ontario. https://www.agco.ca/en/
lottery-and-gaming/responsibilities-and-resources/standards-and-requirements-sport-and-event
W32 AGCO player information on sport and event betting — AGCO Ontario. https://www.agco.ca/en/
lottery-and-gaming/sport-and-event-betting-ontario-player-information
W33 FIFPRO commercial/licensing — FIFPRO. https://www.fifpro.org/en/who-we-are/commercial
W34 FIFA legal / branding / rights — FIFA. https://inside.fifa.com/organisation/contact-fifa/legal-
branding-and-rights
W35 The FA brand protection page — The FA. https://www.thefa.com/about-football-association/brand-
protection
W36 eFootball info detail / licensing example — Konami. https://www.konami.com/efootball/en/topic/
news/5003
W37 WCAG 2.2 — W3C. https://www.w3.org/TR/WCAG22/
W38 W3C RTL handling guidance — W3C. https://www.w3.org/International/geo/html-tech/tech-
bidi.html
W39 MDN Service Worker API — MDN. https://developer.mozilla.org/en-US/docs/Web/API/
Service_Worker_API
W40 MDN offline and background operation — MDN. https://developer.mozilla.org/en-US/docs/Web/
Progressive_web_apps/Guides/Offline_and_background_operation
W41 OpenAPI Specification 3.2 — OpenAPI Initiative. https://spec.openapis.org/oas/v3.2.0.html
W42 Supabase docs — Supabase. https://supabase.com/docs
W43 Supabase Realtime authorization — Supabase. https://supabase.com/docs/guides/realtime/
authorization
W44 Expo npx testflight command — Expo. https://docs.expo.dev/build-reference/npx-testflight/
W45 Apple TestFlight overview — Apple Developer. https://developer.apple.com/help/app-store-
connect/test-a-beta-version/testflight-overview/
Football Intelligence Platform Research Report 30

W46 Prometheus overview — Prometheus. https://prometheus.io/docs/introduction/overview/
W47 Sentry performance monitoring — Sentry. https://docs.sentry.io/product/sentry-basics/
performance-monitoring/
W48 Sentry performance metrics — Sentry. https://docs.sentry.io/product/insights/overview/metrics/
W49 GitHub Actions docs — GitHub. https://docs.github.com/en/actions
W50 ClickHouse real-time analytics docs — ClickHouse. https://clickhouse.com/docs/cloud/get-
started/cloud/use-cases/real-time-analytics
Football Intelligence Platform Research Report 31
