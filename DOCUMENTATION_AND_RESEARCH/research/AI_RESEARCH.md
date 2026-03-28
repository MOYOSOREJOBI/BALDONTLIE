BALDONTLIE: a complete intelligence blueprint for building a
football operating system
BALDONTLIE has a rare window to become the deﬁnitive football intelligence platform. The
collapse of FBref's advanced statistics in January 2026 — when Opta terminated their data
agreement — has left millions of football analysts without a comprehensive free source for xG,
progressive passes, and advanced metrics. Simultaneously, no existing app combines FotMob-
quality live data, Sofascore-style visual analytics, FPL-grade engagement mechanics, and
StatMuse-like natural language querying into a single, premium experience. The gap between
BALDONTLIE's current state (a visually strong but fully mocked React prototype) and
production is substantial but navigable. This report maps every dimension of that journey —
from data providers and algorithms to regulatory mineﬁelds and RTL typography — with
evidence-based recommendations calibrated for a small team targeting ~200 concurrent users
at launch.
Section 1: The competitive landscape reveals a fragmented market with no
complete solution
FotMob is the gold standard — but leaves social and analytics gaps wide open
FotMob dominates the football score app market with 48M+ Google Play downloads, 20M+
active users, and a 4.83-star rating.  Its success rests on three pillars: lightning-fast live
score updates (often beating TV broadcasts), a clean match-centric UI universally praised by
users,  and surprising analytical depth powered by Opta data — including xG, shot
maps, and since late 2025, physical tracking stats (distance covered, top speed, sprints) via Opta
Vision for Premier League matches.  FotMob Pro costs just ~$10/year, 
 making it one of the best-value subscriptions in sports tech.
What FotMob lacks is exactly what BALDONTLIE aims to provide. There are no social or
community features — the app is a consumption tool, not a platform. There is no AI-powered
querying, no simulation mechanics, no scouting depth, and no information density modes.
FotMob treats a casual fan and a professional scout identically. Its notiﬁcation system, while fast,
is plagued by attribution bugs (wrong goal scorer) and phantom alerts for unfollowed leagues.
Coverage of 500+ competitions  is broad  but women's football is present
without parity treatment.
Sofascore diﬀerentiates through proprietary ratings and visual analytics
Sofascore's proprietary ML-powered player rating system (3-10 scale, updated 60 times per
match) is its moat.  The ratings have become conversation starters — "What Sofascore
rating did he get?" is now common football discourse. Their Attack Momentum visualization,
heatmaps, and shot maps make data visually accessible in ways FotMob has only recently begun
matching. Coverage spans 25 sports across 5,000+ leagues,  though this multi-sport
AppBrain
App Store
Substack App Store
Google Play
Google Play Google Play
Sofascore
Updatestar

breadth dilutes the football-only focus that FotMob and BALDONTLIE share. Critically,
Sofascore does not disclose its data source — academic research from the Journal of Sports
Sciences (2025) conﬁrmed this opacity.  Their October 2025 shift to Gaussian
distribution for ratings drew backlash and even uninstalls, demonstrating the risk of opaque
methodology changes.
FBref's collapse creates BALDONTLIE's biggest opportunity
In January 2026, FBref lost all advanced statistics when Opta terminated their data
agreement. This is the single most important competitive development for BALDONTLIE. FBref
was the go-to free resource for xG, xA, progressive passes, pressures, and advanced metrics
across 20+ leagues. Now it retains only basic stats (goals, assists, appearances) across 40+
countries. The community — analysts, scouts, journalists, fantasy players — is actively seeking
alternatives. The remaining free options are WhoScored (limited, men's only), Understat (xG
only for Big 5 leagues), and consumer apps like FotMob/Sofascore that lack the analytical depth
FBref provided. BALDONTLIE entering this gap with a modern, well-designed analytics
interface could capture an underserved audience of millions.
StatMuse proves natural language sports querying works — but football coverage is shallow
StatMuse launched StatMuse FC in January 2024 for European football,  covering
only the Big 5 leagues with traditional stats (no xG, no advanced metrics). Their proprietary NLP
stack parses queries, executes against a structured database,  and returns visual stat
cards with 700+ unique player illustrations.  The technology works  —
answers arrive in under a second, and visual cards are inherently shareable. But football is clearly
secondary to their NBA/NFL core. BALDONTLIE's AI assistant could deliver what StatMuse FC
promises but doesn't yet: deep football analytics via natural language, with advanced metrics,
multi-league coverage, and mode-aware response complexity.
Wyscout sets the professional scouting benchmark at €299-399+/year
Now rebranded as Hudl Wyscout (post-April 2025), the platform serves 1,000+ professional
clubs  with video analysis, 550,000+ player proﬁles,  and coverage of 600+
competitions.  Unique youth tournament coverage (65% exclusive)  and
tagged video clips (1,800+ events per match)  make it indispensable for scouts. But at
€299-399+/year with strict minute-based video limits,  it prices out amateur analysts
and serious fans — the exact audience BALDONTLIE can serve with data-rich analytics at an
accessible price point.
Engagement platforms reveal what makes football features sticky
Fantasy Premier League commands 11.5M+ registered players  through a
deceptively simple formula: weekly deadlines creating urgency, mini-leagues generating social
competition among friends and coworkers,  and dynamic player pricing that makes
team management feel like portfolio management.  FPL's gameweek
cadence — a hard deadline every week with consequences — is the killer engagement mechanic.
 Mini-leagues are the retention engine: once your oﬃce league is running, quitting mid-
Taylor & Francis Online
Grokipedia
Grokipedia
Bee Partners Fortune
Grokipedia Grokipedia
SoccerEDU SoccerEDU
Grokipedia
360 Scouting
Premier League
Wikipedia
Fantasy Premier League
Wikipedia

season feels like social betrayal. FPL avoids gambling classiﬁcation through complete free-to-
play purity: no entry fees, no cash prizes from the operator, and purely skill-based competition.
Sorare provides the cautionary tale. Once valued at $4.3 billion during the 2021 NFT boom,
 the platform now faces criminal prosecution. The UK Gambling Commission
charged Sorare in September 2024 with oﬀering unlicensed gambling. 
 Trial is set for June 15, 2026  — still pending as of this
writing. The fatal ﬂaw: users purchased NFT cards with real money, could win cryptocurrency
prizes, and a secondary market enabled real-money conversion.  All three
gambling elements (consideration, chance, prize) were present.  BALDONTLIE's
Market XI must learn from this: zero real-money touchpoints is the only safe architecture.
Football Manager oﬀers the richest simulation mechanics to study: position-dependent
weighted attributes,  randomized potential ability for young players ensuring unique
experiences,  progressive scouting that reveals player data over time (creating
information asymmetry that rewards research),  and transfer negotiations with
installments, add-on clauses, and sell-on percentages.  These patterns translate
directly to Market XI design.
Section 2: Data providers range from $0 to $100K+ per year — and the path is clear
A phased data strategy from free prototype to production
The football data landscape divides into three tiers. At the enterprise tier, Opta/Stats Perform
(celebrating 30 years in 2026 with 7.2 petabytes of historical data across 3,900+ competitions)
 and Hudl StatsBomb (3,400+ events per match across 190+ competitions 
with industry-leading xG models)  provide the deepest data — at estimated costs of
$10K-100K+/year and $15K-60K+/year respectively. Both require sales conversations with no
public pricing.
At the startup tier, three options stand out:
Provider Entry
Price
Leagues Live Scores xG Best For
API-Football $19/mo
(Pro)
1,200+ 15-second
updates
No MVP with broad
coverage
Football-
Data.org
Free 12
competitions
Delayed on
free
No Prototyping only
Sportmonks €29/mo 2,200+ Minute-by-
minute
Add-on
available
Scaling commercial
apps
Data Insights Market
Lexology
Gambling Industry News Gambling Commission
Webopedia Vixio
Lexology
Guide to FM
Fandom
Football Manager
GAM3S.GG
Stats Perform StatsBomb
Hudl +2

API-Football at $19/month is the clear starting point for BALDONTLIE:  1,200+
leagues, 15-second live score updates,  7,500 requests/day on the Pro plan, and no
credit card required for the free tier (100 requests/day).  The API covers ﬁxtures, live
scores, standings, events, lineups, player stats, transfers, and injuries. It lacks xG data, but
combined with StatsBomb's open data for advanced metrics, it provides suﬃcient coverage for
launch.
StatsBomb open data (free on GitHub) remains the best free source for building advanced
analytics.  The dataset includes event data for select competitions
(FIFA World Cups, select league seasons, UEFA Women's Euro 2025) with Python and R libraries
for easy ingestion. Some datasets include 360 freeze-frame data showing all player positions at
the moment of each event.  This is suﬃcient for building and validating xG models, player
comparison tools, and analytical features.
Content rights create real constraints for indie developers
Player images require licensing from providers like Getty Images ($175-500+ per editorial
image) or direct negotiation with clubs. Most indie apps avoid photos entirely, using silhouettes
or illustrations. Club logos are registered trademarks — commercial use requires written
permission  with fees of $500-2,000+ per club plus royalties. Unauthorized use risks cease-
and-desist letters  and App Store takedown requests (penalties up to $150,000 per
violation under US trademark law).  The safest approach: use text names with
country ﬂags,  or rely on logos provided through API providers (common but legally gray).
Streaming rights are fragmented by market. Premier League UK domestic rights alone cost £6.7
billion over 4 years (Sky Sports: 215+ matches, TNT Sports: 52 matches, BBC: highlights).
 A football app can legally provide "where to watch" information (broadcaster name
per match per country, as LiveSoccerTV does) but cannot link directly to live streams without
licensing agreements. Never aggregate or facilitate unauthorized stream access.
Women's football data has a clear leader and a massive gap
StatsBomb is the undisputed leader in women's football data. Since 2019, they have oﬀered
free access to their StatsBomb IQ analytics platform for all professional women's teams in top
leagues across England, France, Germany, Italy, Spain, Sweden, USA, Finland, Brazil, Australia,
and Mexico.  Over 35 women's clubs use the platform, and many have upgraded
from free to paid customers.  Their open data releases include complete
women's competition datasets with dedicated xG models calibrated speciﬁcally for women's
football — not just repurposed men's models. 
The coverage gap remains stark: men's football has event-level data for 190+ competitions,
 while women's football has comparable depth for only ~15-20 top leagues.
Historical data extends decades for men but rarely before 2017-2019 for women. Tracking data
(GPS, positional) is widespread in top men's leagues but limited to select women's competitions.
API-Sports
API-Football
api-football
GitHub Sports Data Campus
Home
Avvo
Racketrampage
Racketrampage
Avvo
SalaryLeaks
Statsbomb +2
Statsbomb Statsbomb
StatsBomb
HudlStatsBomb

Section 3: Algorithms and models — from FIFA Elo to xG to market simulation
The FIFA ranking formula is simpler than most people think
The men's ranking system, adopted in June 2018, uses a straightforward Elo formula:
P_new = P_old + K × (W - W_e).  The expected result W_e uses the
formula 1/(10^(-(P_A - P_B)/600) + 1), where the divisor of 600 (versus 400 in chess)
makes the system deliberately less sensitive to rating diﬀerences. 
The K factor ranges from 5 (friendlies outside FIFA windows) to 60 (World Cup knockout
rounds), meaning a World Cup knockout result moves ratings 12× more than a friendly. The
system considers only win/draw/loss — no goal diﬀerence, no home advantage, no confederation
weighting. 
The women's ranking system diﬀers in critical ways: it includes goal diﬀerence (a 5-0 win
matters more than 1-0), applies home advantage (+100 points to home team in calculations),
 uses a scaling factor of 200 (denominator 400, same as chess) making it more
sensitive,  and covers all international matches back to 1971.  These
diﬀerences mean BALDONTLIE needs separate implementations for men's and women's
rankings if building its own rating system.
Match prediction models start simple and scale with data
The Dixon-Coles model (1997) remains the practical standard for football match prediction.
 It extends the basic Poisson model with two innovations: a tau correction function that
increases the probability of low-scoring outcomes (0-0, 1-0, 0-1, 1-1 draws) which the
independent Poisson model systematically underestimates,  and time-decay
weighting that gives recent matches more inﬂuence via φ (t) = exp(- ξ  × t). Parameters
(attack strength, defense strength per team, home advantage, correlation parameter ρ ) are ﬁtted
via weighted maximum likelihood estimation. Python implementations exist on GitHub
(dashee87), and the R goalmodel package provides a complete toolkit. For BALDONTLIE's
Express/Postgres stack, ﬁtting Dixon-Coles once per week in a background job and storing team
parameters requires approximately 200 lines of code.
xG models reward practical feature engineering over model complexity
Building a basic xG model requires only shot distance to goal center and angle to goal — these
two features alone achieve AUC ~0.75-0.77 with logistic regression.  Adding body part
(headers score at ~50% the rate of feet), shot type (open play vs set piece vs penalty), assist type,
and game state pushes AUC to 0.78-0.80.  Gradient boosting (XGBoost/LightGBM)
captures non-linear interactions automatically and typically achieves AUC 0.80-0.82 — the
practical ceiling without tracking data. StatsBomb's xG model leads the industry because it
incorporates 360 freeze-frame data: goalkeeper position, defender locations, and shot impact
height — features unavailable in standard event data. 
For BALDONTLIE's launch: consume xG values from data providers rather than building a
model. When ready to build, use StatsBomb open data with XGBoost: extract shot events with
coordinates, calculate distance/angle, encode categorical features, train a binary classiﬁer, and
Jobs In Football %sitename%
Hermann-baum Hermann-baum
Hermann-baum Wikipedia
Wikipedia
Hermann-baum En Academic +2
Scribd
Emergent Mind
Frontiers
Medium
Stats Perform StatsBomb

evaluate with calibration curves. Related metrics to surface include xA (expected assists — the
xG of shots created by a pass), xGChain (xG credited to all players in the possession), 
and xT (expected threat — valuing every action based on how much it increases goal probability
from the resulting pitch zone). 
Market XI simulation pricing can use simpliﬁed automated market maker mechanics
For Market XI, a constant-product automated market maker provides realistic price dynamics
without real-money risk. The core formula: supply × virtual_currency = constant. 
When users "buy" a player's token, supply decreases and price increases; selling reverses the
eﬀect. This guarantees inﬁnite liquidity and smooth price curves. Layer on performance-driven
adjustments: after each matchday, adjust base price by (actual_performance -
expected_performance) × sensitivity_factor. Add time decay to reduce the impact of older
performances, and price bounds (ﬂoor at 20% of peak, ceiling at 200% of base) to prevent
extreme swings. This creates engaging, realistic dynamics while remaining entirely simulated —
approximately 500 lines of Express middleware to implement.
Section 4: The AI assistant should use tool-calling with hybrid retrieval, not pure
RAG
Text-to-SQL plus vector search beats traditional RAG for structured football data
Traditional RAG (embedding documents → vector search → LLM synthesis) is poorly suited for
structured football statistics. Football data is relational — goals, assists, xG, match results live in
Postgres tables. BALDONTLIE should implement Table Augmented Generation (TAG): a
hybrid combining Text-to-SQL for statistical queries with vector search via pgvector for
unstructured content like match reports and tactical analyses.
A real-world sports analytics company built exactly this system using PostgreSQL + pgvector +
LangChain + GPT-4o + React.js — matching BALDONTLIE's stack perfectly — and achieved a
70% reduction in query time. The architecture routes queries through intent classiﬁcation:
statistical queries go to Text-to-SQL (the LLM generates SQL from natural language),
factual/contextual queries go to vector search, and complex queries combine both paths before
LLM synthesis.
David Sumpter of Twelve Football  (used by 50+ professional clubs via WhatsApp)
 advocates for a "choose your own adventure" approach rather than open-ended Text-to-
SQL: deﬁne 10-12 pre-built function paths (compare players, analyze transfers, evaluate team
form), let the LLM route the query to the right function, which assembles the data and context
needed.  His key insight: context engineering matters far more than prompt
engineering — the quality of data provided to the LLM determines response quality more than
clever prompting. 
Statsbomb
OddAlerts Wikipedia
GitHub
Medium
Medium
Medium
Medium

Mode-aware responses require system prompt variants, not separate models
Implementing Learn/Fan/Scout modes is primarily a system prompt engineering problem. Each
mode injects diﬀerent instructions: Learn mode deﬁnes all technical terms with analogies and
limits responses to 3-4 key points (~150 words); Fan mode uses standard football terminology
with moderate depth (~250 words); Scout mode uses advanced metrics freely with percentile
rankings and methodological references (~400 words). Store the user's selected mode in
Postgres, inject the appropriate prompt modiﬁer at query time. Cost implication: Scout mode
uses approximately 2× more tokens than Learn mode.
Cost estimates for ~200 concurrent users: $600-1,500/month with optimization
At 200 concurrent users averaging 5 queries/hour, BALDONTLIE would process approximately
500,000 AI queries monthly. With a tiered routing model — 70% of simple queries to GPT-5
nano ($0.05/$0.40 per MTok), 20% standard queries to GPT-5 mini ($0.25/$2.00), and 10%
complex queries to GPT-5.2 ($1.75/$14.00) — raw LLM costs reach approximately $936/month.
Adding semantic caching (embedding queries in pgvector, serving similar cached queries at
cosine similarity >0.92) reduces LLM calls by 50-70%, bringing the AI bill to $475-600/month.
Combined with infrastructure costs (Supabase Pro $35-75, Redis $15-30, hosting $25-50, data
API $50-100), total monthly cost lands at $600-1,500.
Section 5: Anti-gambling design is not optional — it determines whether Market XI
can exist
The three-element test is the regulatory bright line
Across UK, Ontario, EU, US, and Australian jurisdictions, the gambling classiﬁcation test
consistently requires three elements: consideration (user pays money), chance (outcome
partially inﬂuenced by luck), and prize (monetary or valuable reward). Eliminate any one
element and you fall outside gambling regulation. BALDONTLIE's safest architecture eliminates
all three: no real-money entry, no cash/crypto prizes, and no ability to convert virtual holdings to
real money.
The UK Gambling Commission's prosecution of Sorare (charged September 2024, trial June
2026) establishes the high-water mark for enforcement. Sorare had all three elements: NFT card
purchases (consideration), real player performance (chance), and Ethereum/cash prizes (prize).
 Even a £40M/year Premier League licensing deal didn't shield them from
prosecution. FPL, by contrast, has operated for over 20 years without gambling classiﬁcation
because it is completely free-to-play with non-monetary prizes and no secondary market.
App Store policies demand careful framing — Google is stricter than Apple
Apple's App Store guidelines (Section 5.3) require simulated gambling apps to clearly state no
real money is involved and set appropriate age ratings.  Google Play is
explicitly stricter: it prohibits "simulated gambling content (e.g., social casino apps)" and
Lexology
ShopApper Gummicube

restricts apps from providing "gambling or real money game, lottery, or tournament support or
companion functionality."  For Market XI to survive Google Play review,
BALDONTLIE must frame it as an educational analytics tool, not a market simulation.
Concrete framing strategies: use language like "portfolio analysis" and "performance tracking"
instead of "market," "stakes," or "bets." Integrate football analytics education into every feature
— explain why a player's value changed with data-driven reasoning. Include learning modules
alongside simulation. Reward learning completion, not trading volume. Display prominent
disclaimers: "This is a simulation for educational purposes only. No real money. No cash prizes."
Consider renaming "Market XI" to something like "Scout XI" or "Performance Lab" to avoid
market/trading connotations entirely.
Ten dark patterns from betting apps that BALDONTLIE must explicitly avoid
Research from the Lancet commission (2024) and PMC taxonomy studies identiﬁes dark
patterns that pervade gambling apps: forced continuity (easy deposits, friction for withdrawals),
high suggested default amounts, false urgency via countdown timers, loss aversion exploitation
through "insurance" features, social proof manipulation showing others' wins while hiding
losses, disguised losses as wins (celebrating small returns on a net-negative position), currency
abstraction obscuring real values,  push notiﬁcations designed to chase losses,
obscured responsible gaming controls, and VIP ladders rewarding volume over outcomes.
 BALDONTLIE should implement the opposite of each: balanced performance
display (gains and losses), no time pressure, prominent controls, and rewards tied to analytical
quality rather than activity volume.
Section 6: Localization demands Arabic's six plural forms and human translation
for Yoruba
shadcn/ui gained ﬁrst-class RTL support in January 2026
A critical development for BALDONTLIE's timeline: shadcn/ui now supports RTL natively as of
January 2026.  Setting "rtl": true in components.json automatically converts
physical CSS classes to logical equivalents at install time (ml-4 → ms-4, text-left → text-
start).  For existing projects, shadcn migrate rtl converts all existing components.
 A DirectionProvider wrapper from @/components/ui/direction handles runtime
direction switching. Tailwind CSS provides logical property utilities directly: ms-4 (margin-
inline-start), me-4 (margin-inline-end), text-start, text-end.  CSS logical properties
have excellent browser support in 2026, eliminating the need for fallbacks. 
The remaining RTL challenges are interaction-level: directional icons (arrows, chevrons, back
buttons) must ﬂip with rtl:rotate-180,  while non-directional icons (search,
settings) should not. Phone numbers, timestamps, and code snippets must remain LTR even
within RTL context using <span dir="ltr">. Mixed bidirectional text (player names
combining Latin and Arabic script) requires the <bdi> element for user-generated content.
Google Support
Todays-woman
LuxuryFootball
shadcn/ui
shadcn/ui
shadcn/ui
Vercel
Better i18n
shadcn/ui

Arabic requires all six CLDR plural forms — enforcement must be automated
Arabic has the most complex pluralization rules of any target language: zero (n=0), one (n=1),
two (n=2, the dual form), few (n%100=3-10), many (n%100=11-99), and other (n=0,100,200+).
Every translatable string with a count variable needs all six forms in Arabic. Japanese, by
contrast, uses only the "other" form (no grammatical plurals). i18next v21+ handles this
automatically with the _zero, _one, _two, _few, _many, _other suﬃx convention when
using the count parameter.  BALDONTLIE should enforce completeness through a CI
script that validates all Arabic translation ﬁles contain all six forms for every plural key.
West African languages require human translation — machine translation quality is
insuﬃcient
For Yoruba, Hausa, and Igbo,  Google Translate is the only machine translation service
with support, and quality is classiﬁed as low-resource — signiﬁcantly below production quality.
DeepL does not support any of these languages. Academic research conﬁrms that Yoruba
football vocabulary lacks standardization, with multiple competing designations for the same
concepts. In practice, Nigerian football discourse involves heavy code-switching with English:
terms like "goal," "penalty," "oﬀside," and "corner" are used directly even in Yoruba/Hausa/Igbo
conversations. BALDONTLIE should translate UI chrome (navigation, labels, general phrases)
into these languages while keeping football-speciﬁc technical terms as English loanwords.
Human translation is essential — budget accordingly.
For typography, the Google Noto font family provides the best multilingual coverage 
(800+ languages, 150+ scripts). Load fonts conditionally per locale: Noto Sans Arabic Variable
for Arabic,  Noto Sans JP for Japanese (large CJK font ﬁles of 5-16MB require unicode-
range subsetting), Noto Sans Hebrew Variable for Hebrew.  Arabic text typically needs
line-height: 1.8 versus 1.5 for Latin scripts. Use the JavaScript Intl API exclusively for all
date, time, and number formatting — it handles Eastern Arabic-Indic numerals, locale-
appropriate date formats, and 12h/24h clock conventions automatically.
Section 7: The technical architecture should start simple and add complexity only
when needed
Supabase Pro at $35-75/month is the right starting point — with caveats
Supabase provides auth, database, storage, realtime, and edge functions in a single managed
platform. At BALDONTLIE's launch scale (~200 concurrent users), the Pro tier at $25/month
plus usage (realistically $35-75/month)  covers all needs. Row-level security works well
for user-speciﬁc data (saved comparisons, preferences). However, Supabase's Realtime Postgres
Changes has a critical scaling limitation: every database change triggers N reads (one per
subscriber) for RLS checks, processed on a single thread. With 200 users watching a match, each
goal insert equals 200 reads. The documentation explicitly states: "The server does not guarantee
that every message will be delivered to your clients." 
i18next
Wikipedia
shadcn/ui
shadcn/ui
shadcn/ui
MetaCTO
GitHub

The solution: use Supabase Broadcast ( not Postgres Changes) for live match data,
 or better yet, build a dedicated SSE/WebSocket layer in the Express API for live data
delivery while using Supabase for auth, user data, and storage. Pattern: Express API validates
and enriches sports data → writes to Supabase Postgres → optionally triggers Broadcast for non-
critical updates.
SSE beats WebSocket for football's primarily server-to-client data ﬂow
Live football scores are 95% server-to-client updates — Server-Sent Events (SSE) is purpose-
built for this pattern. SSE auto-reconnects  (critical for mobile users with ﬂaky
connections), works through corporate proxies/ﬁrewalls that block WebSocket,  and
multiplexes natively over HTTP/2.  For the ~5% of client-to-server needs (user actions,
chat), standard REST API calls alongside SSE work well. At 200 concurrent users, SSE
performance is excellent. At 10,000+ users, WebSocket with Socket.IO or dedicated
infrastructure becomes necessary — but that's a future problem.
Expo/React Native is strongly recommended over PWA for iOS
iOS PWA limitations are deal-breaking for a serious football app. Safari clears service worker
cache after 7 days of inactivity — if a user doesn't open the app between match weeks, all cached
data vanishes. Background Sync API is unsupported. Push notiﬁcations work on iOS 16.4+ but
only outside the EU (EU users lost standalone PWA mode entirely in iOS 17.4). Expo/React
Native provides reliable push notiﬁcations  for goal alerts, iOS Live Activities for live
scores on Lock Screen and Dynamic Island (implementable via @bacons/apple-targets),
 persistent storage, background fetch, and App Store presence for
discoverability. Share business logic and types between web and mobile through a monorepo,
but accept that UI components will be platform-speciﬁc.
Turborepo with pnpm is the right monorepo choice for a solo developer
Turborepo benchmarks at 2.8 seconds for a 10-package build versus Nx's 8.3 seconds,
 with approximately 20 lines of conﬁguration versus 200+.  For a
solo developer, the simplicity advantage is decisive. Structure the monorepo as: 
apps/web (React + Vite), apps/mobile (Expo), apps/api (Express), with packages/shared
(types, validation with Zod, constants), packages/ui (design tokens), and packages/api-
client (generated from OpenAPI spec via Orval, which produces TypeScript types, TanStack
Query hooks, and Zod validation schemas from a single openapi.yaml contract).
Defer ClickHouse until Postgres analytics queries become slow
ClickHouse excels at columnar analytical queries — average xG by player over 5 seasons,
aggregations across millions of event rows. But at launch with modest data volumes, Postgres
handles everything. ClickHouse Cloud's Development tier costs ~$10-50/month with idle auto-
stop, making it cheap to add when needed. The trigger: when analytical queries consistently
exceed 1-2 seconds on Postgres, pipe aggregated data to ClickHouse via batch ETL jobs.
Supabase
Supabase
WebSocket
RxDB
WebSocket
Expo
Christopher Medium
DEV Community DEV Community
DEV Community

Section 8: UX patterns must serve three audiences through a single, cohesive dark
interface
Five bottom tabs, a command palette, and breadcrumbs handle football's deep entity
hierarchy
Football apps navigate a deep entity tree: Competition → Team → Player → Match → Event.
FotMob's 5-tab bottom navigation (Matches, News, Favorites, Leagues, More) is the proven
mobile pattern.  BALDONTLIE should adapt: Home (today's matches), Explore
(leagues/competitions), Search (universal entity search), Favorites (my teams/players), Proﬁle
(settings + mode switcher). A command palette (Cmd+K) built on shadcn's Command
component (wrapping the cmdk library that powers Linear and Raycast) serves as the power-
user shortcut:  fuzzy search across players, teams, matches, and competitions
 with entity-type preﬁxes (@player Saka, #team Arsenal).
Breadcrumbs maintain orientation during deep navigation: Premier League >
Arsenal > Bukayo Saka > vs Chelsea (GW12), with each segment clickable. Hover cards
(shadcn HoverCard) provide quick player stats without full navigation. In Scout mode, the
command palette becomes the primary navigation with keyboard shortcuts throughout. In
Learn mode, a visible search bar replaces the keyboard-driven palette, and simpliﬁed labels
("Games" instead of "Fixtures") reduce cognitive load.
Three density modes require a React context provider with per-component conditional
rendering
The density system propagates through a DensityContext with three values (learn | fan |
scout). Each component consumes the context and renders conditionally:
Learn mode: 16px body text, 24px spacing, 3-4 key stats per view, always-on tooltips
explaining terms, simple bar charts with big numbers, shallow navigation (2-3 levels)
Fan mode: 14px body, 16px spacing, 6-8 stats, on-hover deﬁnitions, radar charts and
timelines, full 4-level navigation
Scout mode: 13px body with monospace for statistics, 8-12px compact spacing, 12-20+ stats
with horizontal scroll, pizza charts and heatmaps and distribution plots, unlimited depth
with custom queries, keyboard shortcuts, resizable split-pane layouts via shadcn
ResizablePanel
Store preference in localStorage with server sync. Oﬀer an onboarding question ("How familiar
are you with football analytics?") to suggest initial mode, with a 3-way ToggleGroup in settings
for explicit switching.
The dark theme needs four surface elevation levels and disciplined neon-lime usage
BALDONTLIE's dark UI should use dark grays, never pure black (#000000 causes harsh
contrast and haloing).  Four surface levels create visual hierarchy: surface-0 (
DesignRush
Medium Shadcn
MacStories
Userpilot
Qodequay

#0A0A12, app background), surface-1 (#12121E, cards/panels), surface-2 (#1A1A2E,
elevated cards/modals), surface-3 (#24243A, popovers/dropdowns). Text uses oﬀ-whites:
primary (#F0F0F5), secondary (#A0A0B8), tertiary (#6B6B80).  The neon-lime
accent (#CCFF00) should be reserved for active tab indicators, primary buttons, selected
states, important data highlights, and chart primary series — with a subtle glow eﬀect (box-
shadow: 0 0 12px rgba(204,255,0,0.2)) on hover. Never use it for large background areas or
body text.  On surface-0, neon-lime achieves a ~12:1 contrast ratio, exceeding WCAG
AAA requirements.
For charts in dark mode, reduce color saturation by 15-20%, use semi-transparent ﬁlls (80-90%
opacity), and render grid lines in surface-2 or as faint dashed lines. Skeleton loading screens
should use shimmer animations sweeping from surface-1 through surface-2 — research
shows skeletons reduce perceived loading time by up to 50% compared to spinners.
Section 9: Women's football parity is both a moral imperative and a strategic
diﬀerentiator
Audience growth is explosive and accelerating
The numbers are unambiguous. NWSL achieved 18.7 million total viewership across Nielsen-
rated platforms in 2024 — a ﬁvefold increase from 2023. Total NWSL attendance exceeded 2
million for the ﬁrst time, with San Diego Wave averaging 19,575 per match. WSL YouTube hit
39.6 million views in its inaugural 2024-25 season — the second-most-watched women's sports
property globally on YouTube behind WTA. WSL cumulative attendance exceeded 1 million for
the ﬁrst time in 2023-24. Average attendances across the top 4 European women's leagues grew
24% in 2023-24. The 2025-26 WSL broadcast deal triples Sky's coverage to 118 matches per
season.
No major football app treats women's football with true parity
FotMob covers women's competitions but positions them secondary to men's — leagues aren't
featured as prominently in default views, and advanced stats like running data are unavailable.
Sofascore includes women's matches but with less statistical depth. No app oﬀers a dedicated
women's football experience with the same richness as men's coverage. Player proﬁles, career
histories, and analytical depth for women's players are far less developed across all existing
platforms.
BALDONTLIE has the opportunity to be the ﬁrst football app that treats women's football as
truly ﬁrst-class. This means equal billing in navigation (women's leagues alongside men's from
day one, not buried under "more leagues"), leveraging StatsBomb's free women's data for
advanced analytics, including women's players in Market XI simulation, and building content
speciﬁcally for women's football audiences. The 2025 UEFA Women's Euro and the 2027 FIFA
Women's World Cup create massive visibility windows to establish this positioning.
Medium
Toptal

Section 10: Oﬄine capability should be surgical, not comprehensive
Cache what's static, never cache what's live
A football app's oﬄine strategy must be data-type-speciﬁc. Cache aggressively: team/player
proﬁles (relatively static, cache-ﬁrst), historical match results (immutable, cache forever), saved
player comparisons (user-generated, persist locally), league standings (stale but useful, stale-
while-revalidate), team logos and player photos, and the app shell. Never cache: live scores (stale
scores are worse than no scores), real-time chat, fresh transfer news, or up-to-the-minute
statistics.
For the web app, implement Workbox with per-route caching strategies: precacheAndRoute for
the app shell, CacheFirst for images with 30-day expiry, StaleWhileRevalidate for standings
and stats, NetworkFirst for news, and NetworkOnly for live scores. Note the critical iOS
limitation: Safari evicts service worker caches after 7 days of inactivity and caps Cache API at
approximately 50MB.
For the React Native mobile app, use MMKV (20× faster than AsyncStorage, synchronous reads,
encryption support) for key-value storage like user preferences and auth tokens, and expo-sqlite
for structured oﬄine data like cached match results and standings. WatermelonDB adds oﬄine-
ﬁrst sync with conﬂict resolution but is only worth the complexity when BALDONTLIE needs
robust bidirectional sync — defer it to post-launch.
Conclusion: from mocked prototype to football intelligence platform
BALDONTLIE's path to production follows a clear sequence. Phase 1 (immediate): restructure
the repository into a Turborepo monorepo, connect API-Football at $19/month for live data,
implement the Express API with 6-8 core endpoints deﬁned in OpenAPI, and replace mocked
data with real API responses. Phase 2 (weeks 5-8): build the AI assistant with OpenAI function
calling, implement Text-to-SQL plus pgvector hybrid retrieval, add Learn/Fan/Scout mode
switching, and launch the Expo mobile app with iOS Live Activities for match scores. Phase 3
(weeks 9-12): add Market XI with constant-product AMM pricing and educational framing,
implement full RTL support via shadcn's migration tool, and deploy StatsBomb open data for
advanced analytics features. Phase 4 (weeks 13-16): add semantic caching for AI cost reduction,
implement Dixon-Coles match predictions, build comprehensive player comparison with pizza
charts, and add Workbox oﬄine support.
The competitive window created by FBref's collapse is time-limited — other projects will move to
ﬁll that gap. But BALDONTLIE's vision goes beyond replacing FBref: the combination of live
data quality (FotMob-grade), visual analytics (Sofascore-grade), natural language querying
(StatMuse-grade), engagement mechanics (FPL-grade), and women's football parity
(industry-ﬁrst) has no existing competitor. The mocked frontend prototype proves the design
vision works. The task now is connecting it to reality — one API endpoint, one real data source,
one production feature at a time.
