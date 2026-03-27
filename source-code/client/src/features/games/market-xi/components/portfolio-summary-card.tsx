import { ArrowUpRight, Coins, Layers3, PieChart, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketTransaction, PortfolioHolding } from "@/features/games/market-xi/types/market";

interface PortfolioSummaryCardProps {
  summary: {
    balance: number;
    totalPortfolioValue: number;
    dailyReturn: number;
    allTimeReturn: number;
    openPositions: number;
    topHolding?: PortfolioHolding;
    diversificationScore: number;
    recentTransactions: MarketTransaction[];
  };
  holdings: PortfolioHolding[];
}

export function PortfolioSummaryCard({
  summary,
  holdings,
}: PortfolioSummaryCardProps) {
  const metrics = [
    {
      label: "Balance",
      value: `${summary.balance.toLocaleString()} coins`,
      tone: "text-primary",
      icon: Coins,
    },
    {
      label: "Portfolio Value",
      value: `${summary.totalPortfolioValue.toLocaleString()} coins`,
      tone: "text-white",
      icon: PieChart,
    },
    {
      label: "Daily Return",
      value: `${summary.dailyReturn > 0 ? "+" : ""}${summary.dailyReturn.toLocaleString()} coins`,
      tone: summary.dailyReturn >= 0 ? "text-primary" : "text-red-300",
      icon: TrendingUp,
    },
    {
      label: "All-Time Return",
      value: `${summary.allTimeReturn > 0 ? "+" : ""}${summary.allTimeReturn.toLocaleString()} coins`,
      tone: summary.allTimeReturn >= 0 ? "text-primary" : "text-red-300",
      icon: ArrowUpRight,
    },
  ];

  return (
    <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg">
      <CardHeader className="space-y-4 border-b border-white/6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Portfolio panel
            </div>
            <CardTitle className="mt-2 text-2xl font-display text-white">
              Built for long-season operators
            </CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-white/10 bg-white/5 text-white">
              {summary.openPositions} open positions
            </Badge>
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              Diversification {summary.diversificationScore}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 pt-6 xl:grid-cols-[1.35fr_1fr]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/8 bg-black/20 p-4"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <metric.icon className="w-4 h-4 text-primary" />
                  {metric.label}
                </div>
                <div className={`mt-4 text-xl font-display font-bold ${metric.tone}`}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Top holding
                </div>
                <div className="mt-1 text-lg font-display font-semibold text-white">
                  {summary.topHolding?.playerName ?? "No active position"}
                </div>
              </div>
              {summary.topHolding ? (
                <Badge className="border-primary/20 bg-primary/10 text-primary">
                  {summary.topHolding.allocation}% allocation
                </Badge>
              ) : null}
            </div>
            <div className="grid gap-3">
              {holdings.map((holding) => (
                <div
                  key={holding.id}
                  className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-white">{holding.playerName}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {holding.shares} shares · avg {holding.averageBuyPrice.toFixed(1)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">
                      {holding.currentValue.toLocaleString()} coins
                    </div>
                    <div
                      className={`mt-1 text-xs ${
                        holding.allTimeReturn >= 0 ? "text-primary" : "text-red-300"
                      }`}
                    >
                      {holding.allTimeReturn >= 0 ? "+" : ""}
                      {holding.allTimeReturn.toLocaleString()} total
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Layers3 className="w-4 h-4 text-primary" />
            Recent transactions
          </div>
          <div className="space-y-3">
            {summary.recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{transaction.playerName}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {transaction.side} · {transaction.quantity} shares
                    </div>
                  </div>
                  <Badge
                    className={
                      transaction.side === "buy"
                        ? "border-primary/20 bg-primary/10 text-primary"
                        : "border-blue-500/20 bg-blue-500/10 text-blue-300"
                    }
                  >
                    {transaction.side === "buy" ? "Buy" : "Sell"}
                  </Badge>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{transaction.createdAt}</span>
                  <span className="font-semibold text-white">
                    {transaction.totalCoins.toLocaleString()} coins
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
