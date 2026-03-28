import { useState } from "react";
import { mockPlayers } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Swords, Plus, X, TrendingUp, Info } from "lucide-react";

const statKeys = ["Pace", "Shooting", "Passing", "Dribbling", "Defending", "Physical"] as const;
type StatKey = (typeof statKeys)[number];

const statNotes: Record<StatKey, string> = {
  Pace: "Sprint speed and acceleration across the last 90 mins of mock data.",
  Shooting: "Shot accuracy, power, and volume relative to position.",
  Passing: "Range, completion rate, and progressive pass count.",
  Dribbling: "Successful take-ons per 90, carry distance, and ball retention.",
  Defending: "Interceptions, pressures, aerial wins, and duel success rate.",
  Physical: "Stamina, strength, and aerial presence combined.",
};

function BadgeColor({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {children}
    </div>
  );
}

export default function PlayerCompare() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["p1", "p4"]);

  const selectedPlayers = selectedIds
    .map((id) => mockPlayers.find((p) => p.id === id)!)
    .filter(Boolean);

  const radarData = statKeys.map((stat) => {
    const dataPoint: Record<string, string | number> = { subject: stat, fullMark: 100 };
    selectedPlayers.forEach((p, idx) => {
      dataPoint[`player${idx}`] = p.stats[stat.toLowerCase() as keyof typeof p.stats];
    });
    return dataPoint;
  });

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
  ];

  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Player Compare</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              Mock data
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Swords className="h-8 w-8 text-primary" /> Head to Head Comparison
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Compare up to 4 players across all technical and physical metrics. All data shown is
            structured mock content until the real player data layer is connected.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {selectedIds.map((id, index) => (
          <Card
            key={index}
            className="glass-card relative overflow-hidden rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
          >
            <div
              className="absolute right-0 top-0 h-full w-1"
              style={{ backgroundColor: colors[index] }}
            />
            <CardContent className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <BadgeColor color={colors[index]}>Player {index + 1}</BadgeColor>
                {selectedIds.length > 2 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => setSelectedIds(selectedIds.filter((_, i) => i !== index))}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <Select
                value={id}
                onValueChange={(val) => {
                  const newIds = [...selectedIds];
                  newIds[index] = val;
                  setSelectedIds(newIds);
                }}
              >
                <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                  <SelectValue placeholder="Select Player" />
                </SelectTrigger>
                <SelectContent>
                  {mockPlayers.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedPlayers[index] && (
                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Club</span>
                    <span className="text-white">{selectedPlayers[index].club}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Age</span>
                    <span className="text-white">{selectedPlayers[index].age}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Overall</span>
                    <span className="font-bold text-white">{selectedPlayers[index].overall}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {selectedIds.length < 4 && (
          <Button
            variant="outline"
            className="min-h-[140px] flex-col gap-2 rounded-[28px] border-2 border-dashed border-white/15 bg-transparent text-muted-foreground hover:bg-white/5"
            onClick={() =>
              setSelectedIds([
                ...selectedIds,
                mockPlayers.find((p) => !selectedIds.includes(p.id))?.id || mockPlayers[0].id,
              ])
            }
          >
            <Plus className="h-6 w-6" />
            Add Player
          </Button>
        )}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_340px]">
        <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <CardTitle className="text-lg font-display text-white">Technical Profile Overlay</CardTitle>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  {selectedPlayers.map((p, idx) => (
                    <Radar
                      key={p.id}
                      name={p.name}
                      dataKey={`player${idx}`}
                      stroke={colors[idx]}
                      fill={colors[idx]}
                      fillOpacity={0.2}
                    />
                  ))}
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

        <div className="space-y-4">
          {selectedPlayers.map((p, idx) => (
            <Card
              key={p.id}
              className="glass-card overflow-hidden rounded-[28px] border-l-4 border-white/8 bg-card/40 shadow-lg shadow-black/20"
              style={{ borderLeftColor: colors[idx] }}
            >
              <CardContent className="p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-background/70 font-display text-lg font-bold text-white">
                    {p.overall}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {p.club} · {p.age} yo
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-xl border border-white/8 bg-black/20 p-2.5">
                    <span className="mb-1 block text-xs text-muted-foreground">Market Value</span>
                    <span className="font-medium text-white">{p.value}</span>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 p-2.5">
                    <span className="mb-1 block text-xs text-muted-foreground">Sentiment</span>
                    <span className="font-medium text-white">{p.sentiment}%</span>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 p-2.5">
                    <span className="mb-1 block text-xs text-muted-foreground">Potential</span>
                    <span className="font-medium text-white">{p.potential}</span>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 p-2.5">
                    <span className="mb-1 block text-xs text-muted-foreground">Wage</span>
                    <span className="font-medium text-white">{p.wage}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {statKeys.slice(0, 3).map((stat) => {
          const values = selectedPlayers.map((p) => ({
            name: p.name,
            val: p.stats[stat.toLowerCase() as keyof typeof p.stats] as number,
          }));
          const max = Math.max(...values.map((v) => v.val), 1);
          return (
            <Card
              key={stat}
              className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
            >
              <CardHeader className="border-b border-white/6 pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base font-display text-white">{stat}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {values.map((v, idx) => (
                  <div key={v.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-muted-foreground truncate">{v.name}</span>
                      <span className="font-bold text-white">{v.val}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(v.val / max) * 100}%`,
                          backgroundColor: colors[idx],
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-2 rounded-xl border border-white/8 bg-black/20 p-3">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <p className="text-xs leading-5 text-muted-foreground">{statNotes[stat]}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {statKeys.slice(3).map((stat) => {
          const values = selectedPlayers.map((p) => ({
            name: p.name,
            val: p.stats[stat.toLowerCase() as keyof typeof p.stats] as number,
          }));
          const max = Math.max(...values.map((v) => v.val), 1);
          return (
            <Card
              key={stat}
              className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
            >
              <CardHeader className="border-b border-white/6 pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <CardTitle className="text-base font-display text-white">{stat}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {values.map((v, idx) => (
                  <div key={v.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-muted-foreground truncate">{v.name}</span>
                      <span className="font-bold text-white">{v.val}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(v.val / max) * 100}%`,
                          backgroundColor: colors[idx],
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-2 rounded-xl border border-white/8 bg-black/20 p-3">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <p className="text-xs leading-5 text-muted-foreground">{statNotes[stat]}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
