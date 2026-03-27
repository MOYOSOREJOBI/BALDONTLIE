import { ArrowDownRight, ArrowUpRight, Coins, HeartPulse, Info, ShoppingCart, Star, TrendingUp } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { GamePlayerAsset } from "@/features/games/market-xi/types/market";
import { formatMarketCap } from "@/features/games/market-xi/utils/market-calculations";
import { PlayerSparkline } from "@/features/games/market-xi/components/player-sparkline";

const trendBadgeMap = {
  hot: "bg-primary/15 text-primary border-primary/25",
  rising: "bg-blue-500/15 text-blue-300 border-blue-400/25",
  value: "bg-violet-500/15 text-violet-200 border-violet-400/25",
  injured: "bg-red-500/15 text-red-200 border-red-400/25",
  "transfer-watch": "bg-amber-500/15 text-amber-200 border-amber-400/25",
  steady: "bg-white/8 text-white border-white/10",
} as const;

interface PlayerAssetCardProps {
  asset: GamePlayerAsset;
  compareToMarket: boolean;
  marketBenchmark: number;
  onBuy: (asset: GamePlayerAsset) => void;
  onSell: (asset: GamePlayerAsset) => void;
  onToggleWatchlist: (asset: GamePlayerAsset) => void;
}

export function PlayerAssetCard({
  asset,
  compareToMarket,
  marketBenchmark,
  onBuy,
  onSell,
  onToggleWatchlist,
}: PlayerAssetCardProps) {
  const changeValue = compareToMarket
    ? asset.priceChange24h - marketBenchmark
    : asset.priceChange24h;
  const positive = changeValue >= 0;
  const initials = asset.playerName
    .split(" ")
    .map((segment) => segment[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group rounded-[28px] border border-white/8 bg-card/40 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(2,6,23,0.45)] motion-reduce:transform-none">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(118,255,3,0.28),rgba(15,23,42,0.18))] text-sm font-display font-bold text-white">
            {asset.playerImage || initials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-lg font-display font-semibold text-white">
              {asset.playerName}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>{asset.teamName}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{asset.position}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{asset.genderCategory === "women" ? "Women" : "Men"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge className={trendBadgeMap[asset.trendTag]}>
            {asset.trendTag === "transfer-watch"
              ? "TRANSFER WATCH"
              : asset.trendTag.toUpperCase()}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl border ${asset.watchlisted ? "border-primary/30 text-primary" : "border-white/10 text-muted-foreground"}`}
            onClick={() => onToggleWatchlist(asset)}
          >
            <Star className={`w-4 h-4 ${asset.watchlisted ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_132px] md:items-center">
        <div>
          <div className="flex flex-wrap items-end gap-3">
            <div className="text-3xl font-display font-bold text-white">
              {asset.currentPrice.toFixed(1)}
              <span className="ml-1 text-sm font-medium text-muted-foreground">coins</span>
            </div>
            <div className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${positive ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-300"}`}>
              {positive ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              {positive ? "+" : ""}
              {changeValue.toFixed(1)}%
              <span className="text-xs text-muted-foreground">
                {compareToMarket ? "vs market" : "24h"}
              </span>
            </div>
          </div>

          <div className="mt-3 text-sm leading-6 text-muted-foreground">
            {asset.explanation}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <Badge variant="outline" className="border-white/8 bg-black/20 text-muted-foreground">
              {formatMarketCap(asset.marketCap)}
            </Badge>
            <Badge variant="outline" className="border-white/8 bg-black/20 text-muted-foreground">
              Vol {asset.volume.toLocaleString()}
            </Badge>
            <Badge variant="outline" className="border-white/8 bg-black/20 text-muted-foreground">
              Sentiment {asset.sentimentScore}
            </Badge>
            <Badge variant="outline" className="border-white/8 bg-black/20 text-muted-foreground">
              Form {asset.formScore}
            </Badge>
          </div>
        </div>

        <div className="rounded-3xl border border-white/6 bg-black/20 p-3">
          <PlayerSparkline
            points={asset.sparkline}
            positive={positive}
            compareToMarket={compareToMarket}
          />
          <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>7d curve</span>
            <span>
              {asset.priceChange7d > 0 ? "+" : ""}
              {asset.priceChange7d}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <HoverCard>
          <HoverCardTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
            >
              <Info className="w-4 h-4" />
              Hover details
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 rounded-3xl border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
            <div className="space-y-3">
              <div className="text-sm font-semibold">{asset.playerName}</div>
              <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  Injury risk
                  <div className="mt-1 font-semibold text-white">{asset.injuryRisk}/100</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  Transfer buzz
                  <div className="mt-1 font-semibold text-white">{asset.transferBuzz}/100</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  Minutes trend
                  <div className="mt-1 font-semibold text-white">{asset.minutesTrend}/100</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                  Volatility
                  <div className="mt-1 font-semibold text-white">{asset.volatility}/100</div>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-2xl border-white/10 bg-white/5 text-white"
            onClick={() => onSell(asset)}
          >
            <HeartPulse className="w-4 h-4" />
            Sell
          </Button>
          <Button className="rounded-2xl px-5" onClick={() => onBuy(asset)}>
            <ShoppingCart className="w-4 h-4" />
            Buy
          </Button>
        </div>
      </div>
    </article>
  );
}
