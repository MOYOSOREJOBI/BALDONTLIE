import { Activity, MessageSquareText, Siren, Sparkles, TimerReset } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketNewsSignal } from "@/features/games/market-xi/types/market";

const signalIconMap = {
  "transfer-buzz": Sparkles,
  "form-streak": Activity,
  "injury-alert": Siren,
  "social-sentiment": MessageSquareText,
  fixture: TimerReset,
} as const;

export function MarketSignalCard({ signal }: { signal: MarketNewsSignal }) {
  const SignalIcon = signalIconMap[signal.category];

  return (
    <Card className="glass-card rounded-3xl border-white/8 bg-card/40 shadow-lg">
      <CardHeader className="space-y-4 border-b border-white/6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <SignalIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {signal.timeframe}
              </div>
              <CardTitle className="mt-1 text-lg font-display text-white">
                {signal.headline}
              </CardTitle>
            </div>
          </div>
          <Badge className="border-white/10 bg-white/5 text-white">
            {signal.impactScore}/100
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        <div>
          <div className="text-sm font-semibold text-white">{signal.playerName}</div>
          <div className="mt-1 text-sm leading-6 text-muted-foreground">
            {signal.signalText}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {signal.reasonChips.map((chip) => (
            <Badge
              key={chip}
              variant="outline"
              className="border-white/8 bg-black/20 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
            >
              {chip}
            </Badge>
          ))}
        </div>
        <div className="rounded-2xl border border-white/6 bg-black/15 px-4 py-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Upcoming fixture: <span className="text-white">{signal.fixture}</span>
        </div>
      </CardContent>
    </Card>
  );
}
