import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Swords, TrendingUp, Users, Target, Activity } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const teamStats = [
  { subject: "Attack", teamA: 92, teamB: 85, fullMark: 100 },
  { subject: "Defense", teamA: 88, teamB: 94, fullMark: 100 },
  { subject: "Midfield Control", teamA: 95, teamB: 89, fullMark: 100 },
  { subject: "Pressing", teamA: 85, teamB: 91, fullMark: 100 },
  { subject: "Chance Creation", teamA: 90, teamB: 82, fullMark: 100 },
  { subject: "Squad Depth", teamA: 96, teamB: 88, fullMark: 100 },
];

const positionStrength = [
  { pos: "GK", teamA: 88, teamB: 92 },
  { pos: "DEF", teamA: 85, teamB: 90 },
  { pos: "MID", teamA: 94, teamB: 88 },
  { pos: "ATT", teamA: 92, teamB: 85 },
];

const keyMatchups = [
  {
    area: "Midfield control",
    teamANote: "Higher pass volume and progression rate through central zones.",
    teamBNote: "Lower pass count but stronger pressing intensity and turnovers.",
    advantage: "A",
  },
  {
    area: "Defensive shape",
    teamANote: "High line, aggressive press — vulnerable to pace in behind.",
    teamBNote: "Compact mid-block, harder to break down in transition.",
    advantage: "B",
  },
  {
    area: "Attacking depth",
    teamANote: "Wider squad options and more rotational attacking flexibility.",
    teamBNote: "More clinical top two but thinner depth behind the starters.",
    advantage: "A",
  },
];

const contextNotes = [
  "Head-to-head data is static mock content — no real provider connection yet.",
  "Squad values and ratings use prototype scoring logic, not licensed feed data.",
  "Women's football team comparisons are planned for the same surface in a future iteration.",
];

export default function TeamCompare() {
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Team Compare</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              Mock data
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Shield className="h-8 w-8 text-primary" /> Squad Comparison
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Analyze team strengths, tactical matchups, and squad depth. All data shown is structured
            mock content until the real team data layer is connected.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-[28px] border border-white/8 bg-card/40 p-6 md:grid-cols-2 md:items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <Select defaultValue="rma">
            <SelectTrigger className="w-full max-w-xs border-white/10 bg-card/60 text-xl text-white h-12 focus:ring-primary/50">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rma">Real Madrid</SelectItem>
              <SelectItem value="mci">Manchester City</SelectItem>
              <SelectItem value="bay">Bayern Munich</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Squad Value</div>
            <div className="text-2xl font-display font-bold text-primary">€1.04B</div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs text-center">
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Rating</div>
              <div className="mt-1 text-lg font-bold text-white">92</div>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Form</div>
              <div className="mt-1 text-lg font-bold text-primary">W5</div>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Avg Age</div>
              <div className="mt-1 text-lg font-bold text-white">26.4</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <Select defaultValue="mci">
            <SelectTrigger className="w-full max-w-xs border-blue-500/40 bg-card/60 text-xl text-white h-12 focus:ring-blue-500/50">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rma">Real Madrid</SelectItem>
              <SelectItem value="mci">Manchester City</SelectItem>
              <SelectItem value="bay">Bayern Munich</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Squad Value</div>
            <div className="text-2xl font-display font-bold text-blue-400">€1.26B</div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs text-center">
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Rating</div>
              <div className="mt-1 text-lg font-bold text-white">94</div>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Form</div>
              <div className="mt-1 text-lg font-bold text-blue-400">W4</div>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/20 p-3">
              <div className="text-xs text-muted-foreground">Avg Age</div>
              <div className="mt-1 text-lg font-bold text-white">27.1</div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background font-display font-bold text-muted-foreground">
          VS
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_340px]">
        <div className="space-y-6">
          <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">Tactical Profile Matchup</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={teamStats}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Team A"
                      dataKey="teamA"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Team B"
                      dataKey="teamB"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                    />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "hsl(var(--foreground))" }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">Position Group Quality</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={positionStrength}
                    layout="vertical"
                    margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
                  >
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis
                      dataKey="pos"
                      type="category"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--secondary))", opacity: 0.5 }}
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    <Bar
                      name="Team A"
                      dataKey="teamA"
                      fill="hsl(var(--primary))"
                      radius={[0, 4, 4, 0]}
                      barSize={16}
                    />
                    <Bar
                      name="Team B"
                      dataKey="teamB"
                      fill="#3b82f6"
                      radius={[0, 4, 4, 0]}
                      barSize={16}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <Swords className="h-4 w-4 text-primary" />
                <CardTitle className="text-base font-display text-white">Key matchup areas</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {keyMatchups.map((matchup) => (
                <div
                  key={matchup.area}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                      {matchup.area}
                    </div>
                    <Badge
                      className={
                        matchup.advantage === "A"
                          ? "border-none bg-primary/10 text-primary"
                          : "border-none bg-blue-500/10 text-blue-300"
                      }
                    >
                      Team {matchup.advantage}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-xs leading-5 text-muted-foreground">
                    <div className="flex gap-2">
                      <span className="shrink-0 font-semibold text-primary">A:</span>
                      {matchup.teamANote}
                    </div>
                    <div className="flex gap-2">
                      <span className="shrink-0 font-semibold text-blue-400">B:</span>
                      {matchup.teamBNote}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">Context notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {contextNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground"
                >
                  {note}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {[
          {
            icon: <TrendingUp className="h-4 w-4 text-primary" />,
            title: "Pressing intensity",
            teamA: { label: "PPDA", val: "8.4", note: "Passes allowed per defensive action." },
            teamB: { label: "PPDA", val: "6.9", note: "Lower PPDA = more aggressive press." },
            advantage: "B",
          },
          {
            icon: <Target className="h-4 w-4 text-blue-400" />,
            title: "Chance quality",
            teamA: { label: "xG per game", val: "2.4", note: "Strong chance volume and quality." },
            teamB: { label: "xG per game", val: "2.1", note: "Slightly lower volume, higher efficiency." },
            advantage: "A",
          },
          {
            icon: <Activity className="h-4 w-4 text-purple-400" />,
            title: "Ball progression",
            teamA: { label: "Prog. passes", val: "68", note: "Per 90 into the final third." },
            teamB: { label: "Prog. passes", val: "59", note: "More direct but fewer progressive entries." },
            advantage: "A",
          },
        ].map((block) => (
          <Card
            key={block.title}
            className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
          >
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                {block.icon}
                <CardTitle className="text-base font-display text-white">{block.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              <div className="rounded-2xl border border-primary/20 bg-primary/8 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.14em] text-primary">Team A</span>
                  <span className="text-[11px] text-muted-foreground">{block.teamA.label}</span>
                </div>
                <div className="text-2xl font-display font-bold text-white">{block.teamA.val}</div>
                <div className="mt-1 text-xs text-muted-foreground">{block.teamA.note}</div>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/8 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.14em] text-blue-400">Team B</span>
                  <span className="text-[11px] text-muted-foreground">{block.teamB.label}</span>
                </div>
                <div className="text-2xl font-display font-bold text-white">{block.teamB.val}</div>
                <div className="mt-1 text-xs text-muted-foreground">{block.teamB.note}</div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/20 px-4 py-2 text-sm">
                <span className="text-muted-foreground">Edge</span>
                <Badge
                  className={
                    block.advantage === "A"
                      ? "border-none bg-primary/10 text-primary"
                      : "border-none bg-blue-500/10 text-blue-300"
                  }
                >
                  Team {block.advantage}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
