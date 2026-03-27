import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameDestinationCardProps {
  title: string;
  description: string;
  href: string;
  status: string;
  eyebrow: string;
  bullets: string[];
  accentClassName: string;
  ctaLabel: string;
}

export function GameDestinationCard({
  title,
  description,
  href,
  status,
  eyebrow,
  bullets,
  accentClassName,
  ctaLabel,
}: GameDestinationCardProps) {
  return (
    <Card className={`glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg ${accentClassName}`}>
      <CardHeader className="space-y-4 border-b border-white/6">
        <div className="flex items-center justify-between gap-4">
          <Badge className="border-white/10 bg-white/5 text-white">{eyebrow}</Badge>
          <Badge className="border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="w-3 h-3" />
            {status}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-2xl font-display text-white">{title}</CardTitle>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/6 bg-black/20 px-4 py-3 text-sm text-white/90"
            >
              {bullet}
            </div>
          ))}
        </div>
        <Button asChild className="rounded-2xl">
          <Link href={href}>
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
