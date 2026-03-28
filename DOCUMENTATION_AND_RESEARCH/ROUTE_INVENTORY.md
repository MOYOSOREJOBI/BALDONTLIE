# Route Inventory

This file is the current route inventory for BALDONTLIE.

It is based on the live route map in `source-code/client/src/App.tsx` and the shared route-status model in `source-code/shared/product-status.ts`.
Use it to decide what is `launch`, `beta`, `demo`, `hide`, or `later`.

This is a current-state inventory, not a promise that every route should ship.

---

## 1. Important Reality Check

The production plan's truthful launch slice expects:

- home/dashboard
- search
- player profile
- team profile
- one competition table
- one match center
- saved/followed entities
- `Market XI` only if clearly simulation-only

The current route map still does **not** fully match that target.

Current route gaps:

- there is no dedicated team profile route in the current route map
- there is no dedicated match-center route in the current route map
- there is no dedicated search route in the current route map
- several routes still exist as demos or hidden prototypes even though the shell is now cleaner
- the AI chatbot component still exists in the repo, but it is now hidden from the main app shell because it is still simulated

Current shell truth:

- the primary shell now exposes only routes marked `launch`, `beta`, or `demo`
- `odds`, `social`, `fan-sentiment`, preview game routes, and other weaker surfaces are no longer in the primary shell
- `demo` now means visible prototype with explicit status signaling, not production-ready

That is not a failure.
It is exactly the kind of mismatch this inventory is supposed to make obvious before implementation starts.

---

## 2. Current Route Map

| Path | Page File | Current Reality | Recommended Status | Notes |
| --- | --- | --- | --- | --- |
| `/` | `client/src/pages/index.tsx` | Landing/front door, prototype shell | `launch` | Keep as primary entry or merge with dashboard later |
| `/dashboard` | `client/src/pages/dashboard.tsx` | Strong visual dashboard with a new truthful readiness panel fed by `/api/system/readiness` | `launch` | Still mock-heavy, but now cleaner and more honest |
| `/players` | `client/src/pages/players/index.tsx` | Player discovery surface | `launch` | One of the clearest first API targets |
| `/players/:id` | `client/src/pages/players/[id].tsx` | Rich player profile, still mock-backed | `launch` | Must get real data before launch |
| `/compare/players` | `client/src/pages/compare/players.tsx` | Comparison feature | `later` | Not needed for first truthful launch |
| `/compare/teams` | `client/src/pages/compare/teams.tsx` | Comparison feature | `later` | Team profile should come before team compare |
| `/team-fit` | `client/src/pages/team-fit.tsx` | Analytical/scouting-style feature | `later` | Good later feature, not first-launch critical |
| `/transfers` | `client/src/pages/transfers.tsx` | Useful football surface, still mock-heavy | `beta` | Good next-step route once search/contracts exist |
| `/news` | `client/src/pages/news.tsx` | Content/feed surface | `beta` | Only ship if source/freshness is truthful |
| `/fan-sentiment` | `client/src/pages/fan-sentiment.tsx` | Sentiment/social-style feature | `hide` | Too easy to overclaim at launch |
| `/predictions` | `client/src/pages/predictions.tsx` | Prediction-like prototype surface | `demo` | Visible in the shell only as an explicit demo |
| `/my-player` | `client/src/pages/my-player.tsx` | Personalized/game-like route | `later` | Not core to truthful first release |
| `/rankings` | `client/src/pages/rankings.tsx` | Ranking surface | `beta` | Can follow once source logic is clear |
| `/tables` | `client/src/pages/tables.tsx` | Best fit for competition-table launch slice | `launch` | Narrow to one competition table first |
| `/odds` | `client/src/pages/odds.tsx` | Betting-adjacent surface | `hide` | Conflicts with no-betting launch posture |
| `/social` | `client/src/pages/social.tsx` | Social/community surface | `hide` | Defer until moderation/trust plan exists |
| `/games` | `client/src/pages/games/index.tsx` | Games section hub | `later` | Hub can return once more than one game is ready |
| `/games/market-xi` | `client/src/pages/games/market-xi.tsx` | Strongest structured simulation feature | `beta` | Can become `launch` if clearly simulation-only |
| `/games/prediction-arena` | `client/src/pages/games/prediction-arena.tsx` | Game/prediction route | `hide` | Not needed for first launch |
| `/games/fantasy-drafts` | `client/src/pages/games/fantasy-drafts.tsx` | Game route | `hide` | Defer |
| `/games/challenges` | `client/src/pages/games/challenges.tsx` | Game route | `hide` | Defer |
| `/technical-overlay` | `client/src/pages/technical-overlay.tsx` | Internal/diagnostic-style route | `later` | Keep internal only |
| `/live-sim` | `client/src/pages/live-sim.tsx` | Live-layout prototype | `demo` | Visible in the shell only as an explicit demo |
| `/scout-workspace` | `client/src/pages/scout-workspace.tsx` | Broad scouting workspace prototype | `demo` | Useful concept route, not first truthful release |
| `/storyline` | `client/src/pages/storyline.tsx` | Narrative/match-context surface | `beta` | Could support match center later |
| `/games/director-mode` | `client/src/pages/director-mode.tsx` | Squad-building workspace — formation planner, transfer targets, budget model | `beta` | In Games sidebar section and Games hub card. Mock-backed. `/director-mode` also resolves as fallback. |
| `/match-rooms` | `client/src/pages/match-rooms.tsx` | Community/match-room concept | `demo` | Visible only as an explicit demo, not a launch route |
| `*` | `client/src/pages/not-found.tsx` | Not found boundary | `launch` | Keep |

---

## 3. Non-Route UI That Affects Launch Truth

These are not routes, but they matter for launch honesty:

| Surface | File | Current Reality | Recommended Status | Notes |
| --- | --- | --- | --- | --- |
| Global AI chatbot | `client/src/components/chat/AIChatBot.tsx` | Simulated frontend widget, currently hidden from the app shell | `hide` | Keep disabled until it is real or explicitly labeled as demo-only |
| Main app shell | `client/src/components/layout/Shell.tsx` | Navigation is now driven by shared status metadata and explicit route badges | `launch` | Primary shell currently exposes only `launch`, `beta`, and `demo` routes |
| Dashboard readiness card | `client/src/components/shared/system-readiness-card.tsx` | Reads `/api/system/readiness` and surfaces truthful backend-prep state | `launch` | Useful backend handoff anchor without faking feature APIs |

---

## 4. Immediate Implementation Implications

Before public launch, the app still likely needs these route-level changes:

1. Create or define a real team profile route.
2. Create or define a real match-center route.
3. Decide whether search is:
   - global shell capability, or
   - a dedicated route.
4. Keep `odds` out of the primary shell.
5. Hide or label the AI chatbot.
6. Narrow `tables` to one truthful competition table.
7. Decide whether `Market XI` is `beta` or `launch`.
8. Replace the remaining `demo` routes with either real products or hidden routes before public release.

---

## 5. Working Rule

If a route is uncertain, prefer `hide` or `demo`, not `launch`.

Update this file whenever:

- a route is added
- a route is removed
- a route changes launch status
- a new launch-critical screen is created
