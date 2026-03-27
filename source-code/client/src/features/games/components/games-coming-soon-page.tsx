import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GamesComingSoonPageProps {
  title: string;
  description: string;
  highlights: string[];
}

export function GamesComingSoonPage({
  title,
  description,
  highlights,
}: GamesComingSoonPageProps) {
  return (
    <div className="space-y-8 p-6 pb-20 lg:p-8">
      <Card className="glass-card overflow-hidden rounded-[30px] border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(118,255,3,0.12),transparent_24%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.92))] p-8 shadow-[0_18px_55px_rgba(2,6,23,0.45)]">
        <CardContent className="grid gap-8 p-0 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-primary/20 bg-primary/10 text-primary">
                Games
              </Badge>
              <Badge variant="outline" className="border-blue-400/20 bg-blue-500/10 text-blue-200">
                Coming Soon
              </Badge>
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold tracking-tight text-white">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6">
                <Link href="/games/market-xi">
                  Explore Market XI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/5 text-white">
                <Link href="/games">Back to Games</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-[28px] border border-white/8 bg-black/20 p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Planned feature set
            </div>
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3 text-sm text-white/90"
              >
                {highlight}
              </div>
            ))}
            <div className="rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-sm leading-6 text-muted-foreground">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-4 h-4" />
                Frontend roadmap only
              </div>
              This page is intentionally presented as a premium placeholder while the
              full game system is designed for future backend integration.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
