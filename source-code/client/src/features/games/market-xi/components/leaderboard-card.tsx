import { Crown, Percent, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketLeaderboardEntry } from "@/features/games/market-xi/types/market";

interface LeaderboardCardProps {
  title: string;
  description: string;
  entries: MarketLeaderboardEntry[];
}

export function LeaderboardCard({
  title,
  description,
  entries,
}: LeaderboardCardProps) {
  return (
    <Card className="glass-card rounded-3xl border-white/8 bg-card/40 shadow-lg">
      <CardHeader className="border-b border-white/6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Leaderboard
            </div>
            <CardTitle className="mt-2 text-xl font-display text-white">{title}</CardTitle>
          </div>
          <Badge className="border-primary/25 bg-primary/10 text-primary">
            <Crown className="w-3 h-3" />
            Premium
          </Badge>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3 pt-5">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.03]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-display font-bold text-primary">
              {entry.rank}
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs font-bold text-white">
                {entry.avatarSeed}
              </div>
              <div className="min-w-0">
                <div className="truncate font-semibold text-white">{entry.managerName}</div>
                <div className="truncate text-xs text-muted-foreground">{entry.focusLabel}</div>
              </div>
            </div>
            <div className="hidden text-right text-xs text-muted-foreground md:block">
              <div className="flex items-center gap-1 justify-end">
                <Sparkles className="w-3 h-3 text-primary" />
                {entry.badge}
              </div>
              <div className="mt-1">{entry.winRate}% win rate</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-sm font-semibold text-primary">
                <Percent className="w-3 h-3" />
                +{entry.weeklyReturn}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {entry.totalReturn > 0 ? "+" : ""}
                {entry.totalReturn}% total
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
