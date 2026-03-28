import { CircleHelp, TrendingDown, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GamePlayerAsset } from "@/features/games/market-xi/types/market";

function FactorBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold text-white">{Math.round(value)}/100</span>
      </div>
      <div className="h-2 rounded-full bg-white/8">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${Math.max(8, Math.min(value, 100))}%` }}
        />
      </div>
    </div>
  );
}

export function PriceExplanationModal({
  open,
  onOpenChange,
  asset,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  asset?: GamePlayerAsset;
}) {
  if (!asset) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-[28px] border-white/10 bg-slate-950 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-display">
            <CircleHelp className="w-5 h-5 text-primary" />
            How price is estimated
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Market XI prices are simulated from mock football signals. This is frontend
            only for now, structured for backend pricing later.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-4 rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary/80">
                  Asset snapshot
                </div>
                <div className="mt-2 text-2xl font-display font-bold text-white">
                  {asset.playerName}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {asset.teamName} · {asset.competition} · {asset.position}
                </div>
              </div>
              <div
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
                  asset.priceChange24h >= 0
                    ? "bg-primary/10 text-primary"
                    : "bg-red-500/10 text-red-300"
                }`}
              >
                {asset.priceChange24h >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {asset.priceChange24h > 0 ? "+" : ""}
                {asset.priceChange24h}% 24h
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FactorBar label="Form score" value={asset.formScore} />
              <FactorBar label="Sentiment score" value={asset.sentimentScore} />
              <FactorBar label="Transfer buzz" value={asset.transferBuzz} />
              <FactorBar label="Minutes trend" value={asset.minutesTrend} />
              <FactorBar label="Injury risk" value={100 - asset.injuryRisk} />
              <FactorBar label="Liquidity support" value={asset.liquidityDampener * 100} />
            </div>
          </div>

          <div className="space-y-4 rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Mock estimation logic
              </div>
              <div className="mt-3 text-sm leading-6 text-muted-foreground">
                Price = base value × league strength × hype × role tier × age curve ×
                performance × injury adjustment × liquidity dampener.
              </div>
            </div>

            <div className="space-y-3 text-sm leading-6 text-muted-foreground">
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                Strong form, locked-in minutes, and positive sentiment usually push the
                estimate upward.
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                Injury risk, bench risk, or cooling buzz can pull the estimate down.
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                League strength and liquidity dampening keep prices believable across
                stars, value plays, and women’s football assets.
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-primary/6 p-4 text-sm leading-6 text-muted-foreground">
              TODO: connect this modal to backend pricing explanations once Market XI
              pricing endpoints are available.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
