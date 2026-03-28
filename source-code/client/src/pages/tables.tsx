import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, Flame, Table as TableIcon, Trophy } from "lucide-react";

type TableRow = {
  pos: number;
  team: string;
  p: number;
  pts: number;
};

type Leader = {
  name: string;
  team: string;
  val: number | string;
};

const eplTable: TableRow[] = [
  { pos: 1, team: "Man Utd", p: 28, pts: 67 },
  { pos: 2, team: "Arsenal", p: 28, pts: 64 },
  { pos: 3, team: "Liverpool", p: 28, pts: 64 },
  { pos: 4, team: "Man City", p: 28, pts: 63 },
  { pos: 5, team: "Aston Villa", p: 28, pts: 55 },
  { pos: 6, team: "Tottenham", p: 27, pts: 53 },
  { pos: 7, team: "West Ham", p: 28, pts: 43 },
  { pos: 8, team: "Brighton", p: 28, pts: 42 },
];

const laLigaTable: TableRow[] = [
  { pos: 1, team: "Real Madrid", p: 28, pts: 69 },
  { pos: 2, team: "Girona", p: 28, pts: 62 },
  { pos: 3, team: "Barcelona", p: 28, pts: 61 },
  { pos: 4, team: "Atletico Madrid", p: 28, pts: 55 },
  { pos: 5, team: "Athletic Club", p: 28, pts: 53 },
  { pos: 6, team: "Real Sociedad", p: 28, pts: 43 },
  { pos: 7, team: "Real Betis", p: 28, pts: 42 },
  { pos: 8, team: "Valencia", p: 28, pts: 40 },
];

const serieATable: TableRow[] = [
  { pos: 1, team: "Inter", p: 28, pts: 75 },
  { pos: 2, team: "Juventus", p: 28, pts: 58 },
  { pos: 3, team: "AC Milan", p: 28, pts: 56 },
  { pos: 4, team: "Bologna", p: 28, pts: 51 },
  { pos: 5, team: "Roma", p: 28, pts: 47 },
  { pos: 6, team: "Atalanta", p: 28, pts: 46 },
  { pos: 7, team: "Napoli", p: 28, pts: 43 },
  { pos: 8, team: "Fiorentina", p: 28, pts: 42 },
];

const bundesligaTable: TableRow[] = [
  { pos: 1, team: "Bayer Leverkusen", p: 25, pts: 67 },
  { pos: 2, team: "Bayern Munich", p: 25, pts: 57 },
  { pos: 3, team: "VfB Stuttgart", p: 25, pts: 53 },
  { pos: 4, team: "Dortmund", p: 25, pts: 47 },
  { pos: 5, team: "RB Leipzig", p: 25, pts: 46 },
  { pos: 6, team: "Frankfurt", p: 25, pts: 40 },
  { pos: 7, team: "Hoffenheim", p: 25, pts: 33 },
  { pos: 8, team: "Freiburg", p: 25, pts: 33 },
];

const statsLeaders: Record<string, Leader[]> = {
  goals: [
    { name: "H. Kane", team: "BAY", val: 36 },
    { name: "S. Guirassy", team: "STU", val: 28 },
    { name: "K. Mbappe", team: "PSG", val: 27 },
    { name: "E. Haaland", team: "MCI", val: 27 },
    { name: "L. Martinez", team: "INT", val: 24 },
    { name: "O. Watkins", team: "AVL", val: 19 },
  ],
  assists: [
    { name: "K. De Bruyne", team: "MCI", val: 12 },
    { name: "P. Gross", team: "BHA", val: 11 },
    { name: "A. Grimaldo", team: "LEV", val: 10 },
    { name: "M. Jobi", team: "LEV", val: 10 },
    { name: "B. Saka", team: "ARS", val: 9 },
    { name: "M. Salah", team: "LIV", val: 9 },
  ],
  passers: [
    { name: "Rodri", team: "MCI", val: "2,450" },
    { name: "L. Dunk", team: "BHA", val: "2,310" },
    { name: "T. Kroos", team: "RMA", val: "2,205" },
    { name: "G. Xhaka", team: "LEV", val: "2,180" },
    { name: "V. van Dijk", team: "LIV", val: "2,100" },
    { name: "W. Saliba", team: "ARS", val: "2,050" },
  ],
  defensive: [
    { name: "J. Palhinha", team: "FUL", val: 185 },
    { name: "C. Romero", team: "TOT", val: 172 },
    { name: "W. Saliba", team: "ARS", val: 168 },
    { name: "Virgil van Dijk", team: "LIV", val: 160 },
    { name: "A. Bastoni", team: "INT", val: 155 },
    { name: "R. Dias", team: "MCI", val: 150 },
  ],
};

const summaryStrip = [
  { label: "Title races tracked", value: "4", note: "Top-five contexts plus one women's title note in the same scan flow." },
  { label: "Upcoming windows", value: "3", note: "One Liga F fixture sits inside the same competition slate." },
  { label: "Stat leader boards", value: "4", note: "Goals, assists, passing control, and defensive output." },
  { label: "Table posture", value: "Static", note: "Premium frontend hub now, real competition feed later." },
];

const competitionPulse = [
  {
    title: "Premier League title race",
    note: "Four points cover the top four, which keeps every game-state swing meaningful.",
  },
  {
    title: "Bundesliga control",
    note: "Leverkusen still own the calmest margin profile in the current mock table snapshot.",
  },
  {
    title: "Liga F context",
    note: "Barcelona Femeni remain part of the core competition view instead of a tucked-away side mention.",
  },
];

const fixtureWindows = [
  { time: "21:00", title: "Barcelona Femeni vs Atletico Women", note: "Title-pressure watch in the same slate." },
  { time: "22:15", title: "Arsenal vs Tottenham", note: "Top-four pressure and rest-defense stress." },
  { time: "Tomorrow", title: "Inter vs Roma", note: "Control benchmark for the Serie A run-in." },
];

const tableNotes = [
  "The page is now a competition hub, not just four floating tables.",
  "Women's football is mixed into the same storyline and fixture context rather than isolated.",
  "All standings shown here are still static demo content until the real data layer is wired.",
];

function StandingsCard({ title, rows, accent }: { title: string; rows: TableRow[]; accent: string }) {
  return (
    <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
      <CardHeader className="border-b border-white/6 pb-4">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg font-display text-white">{title}</CardTitle>
          <Badge className={accent}>Top 8</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead className="bg-black/25 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Club</th>
              <th className="px-4 py-3 text-center font-semibold">P</th>
              <th className="px-4 py-3 text-right font-semibold">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.team} className="border-t border-white/6 transition-colors hover:bg-white/5">
                <td className="px-4 py-3 font-medium text-white">
                  <span className="mr-2 text-muted-foreground">{row.pos}.</span>
                  {row.team}
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">{row.p}</td>
                <td className="px-4 py-3 text-right font-bold text-white">{row.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

function LeaderCard({ title, rows, tone }: { title: string; rows: Leader[]; tone: string }) {
  return (
    <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
      <CardHeader className="border-b border-white/6 pb-4">
        <CardTitle className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        {rows.map((player, index) => (
          <div key={`${title}-${player.name}`} className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="min-w-0">
              <div className="truncate font-semibold text-white">
                {index + 1}. {player.name}
              </div>
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{player.team}</div>
            </div>
            <div className={`shrink-0 text-sm font-bold ${tone}`}>{player.val}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function TablesPage() {
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Competition hub</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              Prototype table snapshot
            </Badge>
            <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-200">
              Static football context
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <TableIcon className="h-8 w-8 text-primary" />
            Advanced League Tables and Stats
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            A fuller competition desk for title races, fixture windows, and leader boards. The goal is to make this feel like a real football hub now, while staying honest that the live data layer is still coming.
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

      <Tabs defaultValue="tables" className="space-y-6">
        <TabsList className="app-chip-row h-auto w-full justify-start rounded-2xl border border-white/8 bg-card/40 p-1.5">
          <TabsTrigger value="tables" className="whitespace-nowrap text-xs sm:text-sm">
            League tables
          </TabsTrigger>
          <TabsTrigger value="stats" className="whitespace-nowrap text-xs sm:text-sm">
            Statistical leaders
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="m-0 space-y-6">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.22fr)_340px]">
            <div className="grid gap-6 lg:grid-cols-2">
              <StandingsCard title="Premier League" rows={eplTable} accent="border-none bg-primary/10 text-primary" />
              <StandingsCard title="La Liga" rows={laLigaTable} accent="border-none bg-blue-500/10 text-blue-200" />
              <StandingsCard title="Serie A" rows={serieATable} accent="border-none bg-purple-500/10 text-purple-200" />
              <StandingsCard title="Bundesliga" rows={bundesligaTable} accent="border-none bg-yellow-500/10 text-yellow-200" />
            </div>

            <div className="space-y-6">
              <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
                <CardHeader className="border-b border-white/6 pb-4">
                  <CardTitle className="text-lg font-display text-white">Competition pulse</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-5">
                  {competitionPulse.map((item, index) => (
                    <div key={item.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {index === 0 ? (
                          <Trophy className="h-4 w-4 text-primary" />
                        ) : index === 1 ? (
                          <Activity className="h-4 w-4 text-blue-300" />
                        ) : (
                          <Flame className="h-4 w-4 text-pink-300" />
                        )}
                        Watch next
                      </div>
                      <div className="mt-3 text-base font-semibold text-white">{item.title}</div>
                      <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
                <CardHeader className="border-b border-white/6 pb-4">
                  <CardTitle className="text-lg font-display text-white">Upcoming fixture windows</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-5">
                  {fixtureWindows.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <Badge variant="outline" className="border-white/10 bg-black/20 text-white">
                          {item.time}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
                <CardHeader className="border-b border-white/6 pb-4">
                  <CardTitle className="text-lg font-display text-white">Table notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-5">
                  {tableNotes.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="m-0 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Golden boot leader", value: "Kane", note: "36 goals" },
              { label: "Top playmaker", value: "De Bruyne", note: "12 assists" },
              { label: "Possession anchor", value: "Rodri", note: "2,450 passes" },
              { label: "Defensive wall", value: "Palhinha", note: "185 actions" },
            ].map((item) => (
              <div key={item.label} className="rounded-[26px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <LeaderCard title="Top scorers" rows={statsLeaders.goals} tone="text-primary" />
            <LeaderCard title="Top assisters" rows={statsLeaders.assists} tone="text-blue-400" />
            <LeaderCard title="Most passes" rows={statsLeaders.passers} tone="text-purple-300" />
            <LeaderCard title="Defensive actions" rows={statsLeaders.defensive} tone="text-yellow-300" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
