import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/locales/i18n";

import Shell from "@/components/layout/Shell";

const NotFound = lazy(() => import("@/pages/not-found"));
const Landing = lazy(() => import("@/pages/index"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const PlayersExplorer = lazy(() => import("@/pages/players"));
const PlayerProfile = lazy(() => import("@/pages/players/[id]"));
const PlayerCompare = lazy(() => import("@/pages/compare/players"));
const TeamCompare = lazy(() => import("@/pages/compare/teams"));
const TeamFit = lazy(() => import("@/pages/team-fit"));
const Transfers = lazy(() => import("@/pages/transfers"));
const News = lazy(() => import("@/pages/news"));
const FanSentiment = lazy(() => import("@/pages/fan-sentiment"));
const Predictions = lazy(() => import("@/pages/predictions"));
const MyPlayer = lazy(() => import("@/pages/my-player"));
const Rankings = lazy(() => import("@/pages/rankings"));
const TablesPage = lazy(() => import("@/pages/tables"));
const OddsPage = lazy(() => import("@/pages/odds"));
const SocialPage = lazy(() => import("@/pages/social"));
const GamesPage = lazy(() => import("@/pages/games"));
const MarketXIPage = lazy(() => import("@/pages/games/market-xi"));
const PredictionArenaPage = lazy(() => import("@/pages/games/prediction-arena"));
const FantasyDraftsPage = lazy(() => import("@/pages/games/fantasy-drafts"));
const ChallengesPage = lazy(() => import("@/pages/games/challenges"));
const TechnicalOverlay = lazy(() => import("@/pages/technical-overlay"));
const LiveSim = lazy(() => import("@/pages/live-sim"));
const ScoutWorkspace = lazy(() => import("@/pages/scout-workspace"));
const MatchStoryline = lazy(() => import("@/pages/storyline"));
const MatchRooms = lazy(() => import("@/pages/match-rooms"));
const DirectorMode = lazy(() => import("@/pages/director-mode"));

function RouteSkeleton() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
        <p className="text-sm text-muted-foreground">Loading page…</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Shell>
      <Suspense fallback={<RouteSkeleton />}>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/players" component={PlayersExplorer} />
          <Route path="/players/:id" component={PlayerProfile} />
          <Route path="/compare/players" component={PlayerCompare} />
          <Route path="/compare/teams" component={TeamCompare} />
          <Route path="/team-fit" component={TeamFit} />
          <Route path="/transfers" component={Transfers} />
          <Route path="/news" component={News} />
          <Route path="/fan-sentiment" component={FanSentiment} />
          <Route path="/predictions" component={Predictions} />
          <Route path="/my-player" component={MyPlayer} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/tables" component={TablesPage} />
          <Route path="/odds" component={OddsPage} />
          <Route path="/social" component={SocialPage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/games/market-xi" component={MarketXIPage} />
          <Route path="/games/prediction-arena" component={PredictionArenaPage} />
          <Route path="/games/fantasy-drafts" component={FantasyDraftsPage} />
          <Route path="/games/challenges" component={ChallengesPage} />
          <Route path="/technical-overlay" component={TechnicalOverlay} />
          <Route path="/live-sim" component={LiveSim} />
          <Route path="/scout-workspace" component={ScoutWorkspace} />
          <Route path="/storyline" component={MatchStoryline} />
          <Route path="/match-rooms" component={MatchRooms} />
          <Route path="/games/director-mode" component={DirectorMode} />
          <Route path="/director-mode" component={DirectorMode} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Shell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
