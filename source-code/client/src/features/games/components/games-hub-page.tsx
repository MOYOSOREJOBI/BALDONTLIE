import { Gamepad2, Sparkles, Target, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GameDestinationCard } from "@/features/games/components/game-destination-card";

const gameCards = [
  {
    title: "Market XI",
    description:
      "Trade footballers like virtual assets, rotate a live simulation portfolio, and chase alpha across men’s and women’s football.",
    href: "/games/market-xi",
    status: "Flagship Live",
    eyebrow: "Market Simulation",
    bullets: ["Live movers", "Portfolio system", "Women’s spotlight"],
    accentClassName: "border-primary/18",
    ctaLabel: "Enter Market XI",
  },
  {
    title: "Prediction Arena",
    description:
      "A premium prediction battleground for fixture calls, scenario drafting, and match intelligence streaks.",
    href: "/games/prediction-arena",
    status: "Coming Soon",
    eyebrow: "Forecasting",
    bullets: ["Scenario ladders", "Prediction rounds", "Head-to-head leagues"],
    accentClassName: "border-blue-500/18",
    ctaLabel: "Preview Arena",
  },
  {
    title: "Fantasy Drafts",
    description:
      "Draft clubs, player pools, and tactical identities in a modern fantasy layer built around football fit and squad construction.",
    href: "/games/fantasy-drafts",
    status: "Coming Soon",
    eyebrow: "Draft Engine",
    bullets: ["Live draft board", "Squad chemistry", "Role-based scouting"],
    accentClassName: "border-violet-500/18",
    ctaLabel: "Preview Drafts",
  },
  {
    title: "Challenges",
    description:
      "Short-form football strategy challenges, market missions, and weekly objectives built for quick returns and replayability.",
    href: "/games/challenges",
    status: "Coming Soon",
    eyebrow: "Challenges",
    bullets: ["Weekly missions", "XP style progression", "Friend leaderboards"],
    accentClassName: "border-amber-500/18",
    ctaLabel: "Preview Challenges",
  },
];

export function GamesHubPage() {
  return (
    <div className="space-y-8 p-6 pb-20 lg:p-8">
      <section className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(118,255,3,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.92))] p-8 shadow-[0_18px_55px_rgba(2,6,23,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-primary/20 bg-primary/10 text-primary">
                <Gamepad2 className="w-3 h-3" />
                Games
              </Badge>
              <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
                Premium football simulations
              </Badge>
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold tracking-tight text-white md:text-5xl">
                A dedicated Games layer for football intelligence.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                The new Games section turns scouting, forecasting, drafting, and challenge
                play into premium simulation products. Market XI leads the new lineup as
                the flagship football trading-market experience.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                label: "Flagship mode",
                value: "Market XI",
                icon: Sparkles,
              },
              {
                label: "Competitive layer",
                value: "Prediction Arena",
                icon: Target,
              },
              {
                label: "Progression loops",
                value: "Drafts + Challenges",
                icon: Trophy,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/8 bg-black/20 p-5"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
                <div className="mt-3 text-xl font-display font-semibold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6">
        {gameCards.map((card) => (
          <GameDestinationCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
