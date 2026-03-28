import { ArrowRight, BookOpen, CandlestickChart, Coins, ShieldCheck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCompactNumber } from "@/features/games/market-xi/utils/market-calculations";
import type { GamePlayerAsset } from "@/features/games/market-xi/types/market";

interface MarketHeroProps {
  totalMarketVolume: number;
  activeTraders: number;
  dailyTopMover: GamePlayerAsset;
  onStartTrading: () => void;
  onViewPortfolio: () => void;
  onLearn: () => void;
  onExplainPrice: () => void;
}

export function MarketHero({
  totalMarketVolume,
  activeTraders,
  dailyTopMover,
  onStartTrading,
  onViewPortfolio,
  onLearn,
  onExplainPrice,
}: MarketHeroProps) {
  const marketDrivers = [
    {
      title: "Role + minutes",
      description: "Players re-rate fastest when their role stabilizes and minutes remain secure.",
    },
    {
      title: "Buzz + sentiment",
      description: "Transfer noise, fan belief, and news flow change short-term pricing pressure.",
    },
    {
      title: "Competition level",
      description: "Big-stage output and women’s-market visibility both create sharper repricing swings.",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(118,255,3,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.92))] p-6 shadow-[0_0_40px_rgba(118,255,3,0.08)] lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
      <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative grid gap-8 xl:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/15 text-primary border-primary/30 px-3 py-1 uppercase tracking-[0.22em]">
              Market XI
            </Badge>
            <Badge variant="outline" className="border-blue-400/30 bg-blue-500/10 text-blue-200">
              Virtual coins only
            </Badge>
            <button
              type="button"
              onClick={onExplainPrice}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              How price is estimated
            </button>
          </div>

          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-display font-bold tracking-tight text-white md:text-5xl">
              Trade footballers. Build your portfolio. Beat the market.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Market XI is a fantasy-finance football simulation where player share
              prices react to form, role, injuries, transfer buzz, sentiment, and
              competition level. No real money. Just football intelligence and
              virtual portfolio strategy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              className="w-full rounded-full px-6 shadow-[0_0_24px_rgba(118,255,3,0.18)] sm:w-auto"
              onClick={onStartTrading}
            >
              Start Trading
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-white/10 bg-white/5 px-6 text-white sm:w-auto"
              onClick={onViewPortfolio}
            >
              <CandlestickChart className="w-4 h-4" />
              View Portfolio
            </Button>
            <Button
              variant="ghost"
              className="w-full rounded-full border border-transparent px-6 text-muted-foreground hover:text-white sm:w-auto"
              onClick={onLearn}
            >
              <BookOpen className="w-4 h-4" />
              Learn How It Works
            </Button>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {marketDrivers.map((driver) => (
              <div
                key={driver.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                  <Zap className="h-4 w-4 text-primary" />
                  {driver.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Coins className="w-4 h-4 text-primary" />
              Total market volume
            </div>
            <div className="text-3xl font-display font-bold text-white">
              {formatCompactNumber(totalMarketVolume)} coins
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Virtual trading volume across men’s and women’s football.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Users className="w-4 h-4 text-blue-300" />
              Active traders
            </div>
            <div className="text-3xl font-display font-bold text-white">
              {formatCompactNumber(activeTraders)}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Players rotating holdings, watchlists, and tactical themes today.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/8 p-5 backdrop-blur-sm sm:col-span-2 xl:col-span-1">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Daily top mover
                </div>
                <div className="mt-2 truncate text-xl font-display font-bold text-white">
                  {dailyTopMover.playerName}
                </div>
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                {dailyTopMover.priceChange24h > 0 ? "+" : ""}
                {dailyTopMover.priceChange24h}%
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
                <div className="text-muted-foreground">Club</div>
                <div className="mt-1 font-semibold text-white">{dailyTopMover.teamName}</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/20 p-3">
                <div className="text-muted-foreground">Signal</div>
                <div className="mt-1 font-semibold text-white capitalize">
                  {dailyTopMover.trendTag.replace("-", " ")}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Simulation only. No betting, cashout, or real-money trading.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
