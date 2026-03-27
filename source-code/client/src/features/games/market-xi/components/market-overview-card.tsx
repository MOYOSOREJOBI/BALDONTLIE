import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketOverviewStat } from "@/features/games/market-xi/types/market";
import { cn } from "@/lib/utils";

const toneClassMap = {
  lime: "border-primary/20 bg-primary/6 text-primary",
  red: "border-red-500/20 bg-red-500/7 text-red-300",
  blue: "border-blue-500/20 bg-blue-500/7 text-blue-300",
  amber: "border-amber-500/20 bg-amber-500/7 text-amber-300",
  violet: "border-violet-500/20 bg-violet-500/7 text-violet-300",
} as const;

export function MarketOverviewCard({ stat }: { stat: MarketOverviewStat }) {
  const positive = !stat.value.startsWith("-");

  return (
    <Card className={cn("glass-card rounded-3xl border-white/8 shadow-lg", toneClassMap[stat.tone])}>
      <CardHeader className="space-y-3 pb-3">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline" className="border-white/10 bg-black/20 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {stat.label}
          </Badge>
          {stat.deltaLabel ? (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {positive ? (
                <ArrowUpRight className="w-3 h-3 text-primary" />
              ) : (
                <ArrowDownRight className="w-3 h-3 text-red-300" />
              )}
              {stat.deltaLabel}
            </div>
          ) : null}
        </div>
        <CardTitle className="text-xl font-display text-white">{stat.playerName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
        <p className="text-sm leading-6 text-muted-foreground">{stat.supportingText}</p>
      </CardContent>
    </Card>
  );
}
