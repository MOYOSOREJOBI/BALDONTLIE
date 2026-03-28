import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  Minus,
  Radar,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";

type Trend = "UP" | "DOWN" | "STABLE";

type RankedPlayer = {
  id: string;
  name: string;
  club: string;
  league: string;
  overall: number;
  trend: Trend;
  initials: string;
  note: string;
};

const summaryStrip = [
  { label: "Active ranking board", value: "Top 10", note: "Prototype scoring blends output, role value, and recent form." },
  { label: "Fastest risers", value: "4", note: "One women's football breakout sits inside the same movement logic." },
  { label: "League spread", value: "6", note: "Premier League, Liga F, La Liga, Bundesliga, Serie A, and UCL context." },
  { label: "Model posture", value: "Static", note: "Frontend-only board now, real freshness later." },
];

const topPlayers: RankedPlayer[] = [
  {
    id: "p2",
    name: "Erling Haaland",
    club: "Manchester City",
    league: "Premier League",
    overall: 91,
    trend: "UP",
    initials: "EH",
    note: "Still the cleanest shot-volume gravity inside the final third.",
  },
  {
    id: "p1",
    name: "Jude Bellingham",
    club: "Real Madrid",
    league: "La Liga",
    overall: 90,
    trend: "UP",
    initials: "JB",
    note: "Role expansion keeps raising his first-receiver and box-arrival value together.",
  },
  {
    id: "p3",
    name: "Vinicius Junior",
    club: "Real Madrid",
    league: "La Liga",
    overall: 90,
    trend: "UP",
    initials: "VJ",
    note: "Direct carry threat still changes defensive shape earlier than almost anyone else.",
  },
  {
    id: "w1",
    name: "Aitana Bonmati",
    club: "Barcelona Femeni",
    league: "Liga F",
    overall: 90,
    trend: "UP",
    initials: "AB",
    note: "She belongs on the main board because her ball carrying and control remain elite.",
  },
  {
    id: "p5",
    name: "Kylian Mbappe",
    club: "PSG",
    league: "Ligue 1",
    overall: 89,
    trend: "STABLE",
    initials: "KM",
    note: "Output is still massive even when the surrounding possession shape fluctuates.",
  },
  {
    id: "p6",
    name: "Harry Kane",
    club: "Bayern Munich",
    league: "Bundesliga",
    overall: 89,
    trend: "UP",
    initials: "HK",
    note: "Volume finishing plus link play keeps the overall index floor extremely high.",
  },
  {
    id: "p7",
    name: "Rodri",
    club: "Manchester City",
    league: "Premier League",
    overall: 88,
    trend: "STABLE",
    initials: "RO",
    note: "Game-state control and progression calm still anchor the midfield hierarchy.",
  },
  {
    id: "p9",
    name: "Lamine Yamal",
    club: "Barcelona",
    league: "La Liga",
    overall: 84,
    trend: "UP",
    initials: "LY",
    note: "Breakout acceleration and carry creation are pushing him toward the elite bracket.",
  },
];

const risers = [
  { name: "Grace Clinton", context: "Creative spike and transition carrying", delta: "+5", tone: "text-primary" },
  { name: "Kobbie Mainoo", context: "Buildup role growing", delta: "+4", tone: "text-blue-400" },
  { name: "Pau Cubarsi", context: "Defensive calm beyond age curve", delta: "+4", tone: "text-purple-300" },
  { name: "Vicky Lopez", context: "Youth ceiling signal", delta: "+3", tone: "text-pink-300" },
];

const contextBoards = [
  {
    title: "Competition pulse",
    note: "Madrid, City, and Barcelona still dominate the top-end control conversation, with Barcelona Femeni appearing in the same index ecosystem.",
  },
  {
    title: "Role climbers",
    note: "Midfielders who can receive under pressure and still move the attack forward keep gaining ranking weight fastest.",
  },
  {
    title: "Age-curve radar",
    note: "The biggest late-season movement still comes from U21 players whose role value grows faster than raw goal volume.",
  },
];

function trendIcon(trend: Trend) {
  if (trend === "UP") return <TrendingUp className="h-4 w-4" />;
  if (trend === "DOWN") return <TrendingDown className="h-4 w-4" />;
  return <Minus className="h-4 w-4" />;
}

function trendTone(trend: Trend) {
  if (trend === "UP") return "text-primary";
  if (trend === "DOWN") return "text-red-400";
  return "text-muted-foreground";
}

export default function Rankings() {
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Rankings</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              Prototype board
            </Badge>
            <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-200">
              Static football logic
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Trophy className="h-8 w-8 text-yellow-500" />
            Global Rankings Board
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            A fuller ranking desk for elite performers, role climbers, and movement notes. It still stays honest: premium frontend framing now, real provider-backed ranking logic later.
          </p>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 xl:max-w-[620px]">
          {summaryStrip.map((item) => (
            <div key={item.label} className="rounded-[26px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </div>
              <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_340px]">
        <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <Radar className="h-4 w-4 text-primary" />
                  Main board
                </div>
                <CardTitle className="text-2xl font-display text-white">Who is driving the top tier right now</CardTitle>
              </div>
              <Badge className="border-none bg-primary/10 text-primary">Top performers</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-5">
            {topPlayers.map((player, index) => (
              <div
                key={player.id}
                className="rounded-[26px] border border-white/8 bg-black/20 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors hover:border-primary/30"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-sm font-bold text-white">
                      #{index + 1}
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background/70 text-sm font-bold text-white">
                      {player.initials}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="truncate text-lg font-semibold text-white">{player.name}</div>
                      <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
                        {player.league}
                      </Badge>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{player.club}</div>
                    <div className="mt-3 text-sm leading-6 text-muted-foreground">{player.note}</div>
                  </div>

                  <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                    <div className={`inline-flex items-center gap-1 rounded-full border border-white/8 bg-black/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${trendTone(player.trend)}`}>
                      {trendIcon(player.trend)}
                      {player.trend}
                    </div>
                    <div className="flex h-14 w-16 items-center justify-center rounded-2xl border border-white/8 bg-background/70">
                      <span className="text-2xl font-display font-bold text-white">{player.overall}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">Risers this week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {risers.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-base font-semibold text-white">{item.name}</div>
                    <div className={`text-sm font-semibold ${item.tone}`}>{item.delta}</div>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.context}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">Method notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {[
                "The board rewards output, role difficulty, and team-shape value together instead of chasing goals alone.",
                "Women's football appears in the same ranking logic and visual weight, not as a sideboard.",
                "This is still a static frontend ranking desk. Live freshness and provider-backed weighting come later.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {contextBoards.map((item, index) => (
          <Card key={item.title} className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {index === 0 ? (
                  <Sparkles className="h-4 w-4 text-primary" />
                ) : index === 1 ? (
                  <ArrowUpRight className="h-4 w-4 text-blue-300" />
                ) : (
                  <Radar className="h-4 w-4 text-purple-300" />
                )}
                Context board
              </div>
              <div className="text-lg font-display font-semibold text-white">{item.title}</div>
              <div className="text-sm leading-6 text-muted-foreground">{item.note}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
