import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketLearnModule } from "@/features/games/market-xi/types/market";

export function LearnModuleCard({ module }: { module: MarketLearnModule }) {
  return (
    <Card className="glass-card rounded-3xl border-white/8 bg-card/40 shadow-lg">
      <CardHeader className="space-y-3">
        <Badge className="w-fit border-primary/25 bg-primary/10 text-primary">
          {module.accentLabel}
        </Badge>
        <CardTitle className="text-2xl font-display text-white">{module.title}</CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{module.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {module.keyPoints.map((point) => (
          <div
            key={point}
            className="rounded-2xl border border-white/6 bg-black/20 px-4 py-3 text-sm leading-6 text-white/90"
          >
            {point}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
