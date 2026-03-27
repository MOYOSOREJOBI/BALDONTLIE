import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import "@/locales/i18n";

import Shell from "@/components/layout/Shell";
import AIChatBot from "@/components/chat/AIChatBot";

// Page Imports
import Landing from "@/pages/index";
import Dashboard from "@/pages/dashboard";
import PlayersExplorer from "@/pages/players";
import PlayerProfile from "@/pages/players/[id]";
import PlayerCompare from "@/pages/compare/players";
import TeamCompare from "@/pages/compare/teams";
import TeamFit from "@/pages/team-fit";
import Transfers from "@/pages/transfers";
import News from "@/pages/news";
import FanSentiment from "@/pages/fan-sentiment";
import Predictions from "@/pages/predictions";
import MyPlayer from "@/pages/my-player";
import Rankings from "@/pages/rankings";

// New Page Imports
import TablesPage from "@/pages/tables";
import OddsPage from "@/pages/odds";
import SocialPage from "@/pages/social";
import GamesPage from "@/pages/games";
import MarketXIPage from "@/pages/games/market-xi";
import PredictionArenaPage from "@/pages/games/prediction-arena";
import FantasyDraftsPage from "@/pages/games/fantasy-drafts";
import ChallengesPage from "@/pages/games/challenges";
import TechnicalOverlay from "@/pages/technical-overlay";
import LiveSim from "@/pages/live-sim";
import ScoutWorkspace from "@/pages/scout-workspace";
import MatchStoryline from "@/pages/storyline";
import MatchRooms from "@/pages/match-rooms";

function Router() {
  return (
    <Shell>
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
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
      <AIChatBot />
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
