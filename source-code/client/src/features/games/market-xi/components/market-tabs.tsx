import { BarChart2, BookOpen, CandlestickChart, Eye, Trophy } from "lucide-react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { MarketTabKey } from "@/features/games/market-xi/types/market";

const tabConfig: Array<{
  key: MarketTabKey;
  label: string;
  icon: typeof CandlestickChart;
}> = [
  { key: "market", label: "Market", icon: CandlestickChart },
  { key: "portfolio", label: "Portfolio", icon: BarChart2 },
  { key: "watchlist", label: "Watchlist", icon: Eye },
  { key: "leaderboard", label: "Leaderboard", icon: Trophy },
  { key: "learn", label: "Learn", icon: BookOpen },
];

export function MarketTabs() {
  return (
    <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-3xl border border-white/8 bg-card/50 p-2 md:inline-flex md:w-auto">
      {tabConfig.map((tab) => (
        <TabsTrigger
          key={tab.key}
          value={tab.key}
          className="min-w-[128px] rounded-2xl border border-transparent px-4 py-3 data-[state=active]:border-primary/20 data-[state=active]:bg-primary/10 data-[state=active]:text-white"
        >
          <tab.icon className="w-4 h-4" />
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
