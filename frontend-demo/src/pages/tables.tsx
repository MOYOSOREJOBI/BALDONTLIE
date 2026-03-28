import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table as TableIcon, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TablesPage() {
  // Actual mock tables
  const eplTable = [
    { pos: 1, team: "Man Utd", p: 28, pts: 67 },
    { pos: 2, team: "Arsenal", p: 28, pts: 64 },
    { pos: 3, team: "Liverpool", p: 28, pts: 64 },
    { pos: 4, team: "Man City", p: 28, pts: 63 },
    { pos: 5, team: "Aston Villa", p: 28, pts: 55 },
    { pos: 6, team: "Tottenham", p: 27, pts: 53 },
    { pos: 7, team: "West Ham", p: 28, pts: 43 },
    { pos: 8, team: "Brighton", p: 28, pts: 42 }
  ];

  const laLigaTable = [
    { pos: 1, team: "Real Madrid", p: 28, pts: 69 },
    { pos: 2, team: "Girona", p: 28, pts: 62 },
    { pos: 3, team: "Barcelona", p: 28, pts: 61 },
    { pos: 4, team: "Atlético Madrid", p: 28, pts: 55 },
    { pos: 5, team: "Athletic Club", p: 28, pts: 53 },
    { pos: 6, team: "Real Sociedad", p: 28, pts: 43 },
    { pos: 7, team: "Real Betis", p: 28, pts: 42 },
    { pos: 8, team: "Valencia", p: 28, pts: 40 }
  ];

  const serieATable = [
    { pos: 1, team: "Inter", p: 28, pts: 75 },
    { pos: 2, team: "Juventus", p: 28, pts: 58 },
    { pos: 3, team: "AC Milan", p: 28, pts: 56 },
    { pos: 4, team: "Bologna", p: 28, pts: 51 },
    { pos: 5, team: "Roma", p: 28, pts: 47 },
    { pos: 6, team: "Atalanta", p: 28, pts: 46 },
    { pos: 7, team: "Napoli", p: 28, pts: 43 },
    { pos: 8, team: "Fiorentina", p: 28, pts: 42 }
  ];

  const bundesligaTable = [
    { pos: 1, team: "Bayer Leverkusen", p: 25, pts: 67 },
    { pos: 2, team: "Bayern Munich", p: 25, pts: 57 },
    { pos: 3, team: "VfB Stuttgart", p: 25, pts: 53 },
    { pos: 4, team: "Dortmund", p: 25, pts: 47 },
    { pos: 5, team: "RB Leipzig", p: 25, pts: 46 },
    { pos: 6, team: "Frankfurt", p: 25, pts: 40 },
    { pos: 7, team: "Hoffenheim", p: 25, pts: 33 },
    { pos: 8, team: "Freiburg", p: 25, pts: 33 }
  ];

  const statsLeaders = {
    assists: [
      { name: "K. De Bruyne", team: "MCI", val: 12 },
      { name: "P. Groß", team: "STU", val: 11 },
      { name: "A. Grimaldo", team: "LEV", val: 10 },
      { name: "M. Jobi", team: "LEV", val: 10 },
      { name: "B. Saka", team: "ARS", val: 9 },
      { name: "M. Salah", team: "LIV", val: 9 }
    ],
    passers: [
      { name: "Rodri", team: "MCI", val: "2,450" },
      { name: "L. Dunk", team: "BHA", val: "2,310" },
      { name: "T. Kroos", team: "BAY", val: "2,205" },
      { name: "G. Xhaka", team: "LEV", val: "2,180" },
      { name: "V. van Dijk", team: "LIV", val: "2,100" },
      { name: "W. Saliba", team: "ARS", val: "2,050" }
    ],
    goals: [
      { name: "H. Kane", team: "BAY", val: 36 },
      { name: "S. Guirassy", team: "STU", val: 28 },
      { name: "K. Mbappé", team: "PSG", val: 27 },
      { name: "E. Haaland", team: "MCI", val: 27 },
      { name: "L. Martínez", team: "INT", val: 24 },
      { name: "O. Watkins", team: "AVL", val: 19 }
    ],
    yellows: [
      { name: "J. Palhinha", team: "FUL", val: 12 },
      { name: "E. Álvarez", team: "WHU", val: 10 },
      { name: "N. Jackson", team: "CHE", val: 9 },
      { name: "B. Guimarães", team: "NEW", val: 9 },
      { name: "D. Núñez", team: "LIV", val: 8 },
      { name: "A. Gordon", team: "NEW", val: 8 }
    ],
    defensive: [ // Tackles + Interceptions + Clearances
      { name: "J. Palhinha", team: "FUL", val: 185 },
      { name: "C. Romero", team: "TOT", val: 172 },
      { name: "W. Saliba", team: "ARS", val: 168 },
      { name: "Virgil van Dijk", team: "LIV", val: 160 },
      { name: "A. Bastoni", team: "INT", val: 155 },
      { name: "R. Dias", team: "MCI", val: 150 }
    ],
    saves: [
      { name: "A. Onana", team: "MUN", val: 105 },
      { name: "T. Kaminski", team: "LUT", val: 102 },
      { name: "A. Areola", team: "WHU", val: 98 },
      { name: "B. Leno", team: "FUL", val: 95 },
      { name: "J. Pickford", team: "EVE", val: 90 },
      { name: "G. Vicario", team: "EVE", val: 88 }
    ],
    cleanSheets: [
      { name: "Y. Sommer", team: "INT", val: 16 },
      { name: "D. Raya", team: "ARS", val: 13 },
      { name: "A. Areola", team: "WHU", val: 11 },
      { name: "L. Hradecky", team: "LEV", val: 11 },
      { name: "Ederson", team: "MCI", val: 10 },
      { name: "Alisson", team: "LIV", val: 9 }
    ]
  };

  return (
    <div className="space-y-8 p-4 pb-20 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <TableIcon className="w-8 h-8 text-primary" /> Advanced League Tables & Stats
        </h1>
        <p className="text-muted-foreground">Comprehensive overview of tables, expected points, and individual statistical leaders.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
            Prototype table snapshot
          </Badge>
          <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
            Competition feed not wired yet
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="tables" className="w-full">
        <TabsList className="mb-6 flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-xl border border-white/5 bg-card/50 p-1 hide-scrollbar">
          <TabsTrigger value="tables" className="whitespace-nowrap">League Tables (Top 4)</TabsTrigger>
          <TabsTrigger value="stats" className="whitespace-nowrap">Statistical Leaders</TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-6 pb-12 lg:max-h-[800px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* EPL */}
             <Card className="glass-card bg-card/40">
               <CardHeader className="pb-2 border-b border-border/50">
                 <CardTitle className="text-lg font-display text-primary">Premier League</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <table className="w-full text-sm">
                   <thead className="text-xs text-muted-foreground bg-secondary/30">
                     <tr><th className="px-4 py-2 text-left">Club</th><th className="px-4 py-2">P</th><th className="px-4 py-2 text-right">Pts</th></tr>
                   </thead>
                   <tbody>
                     {eplTable.map(r => (
                       <tr key={r.team} className="border-b border-border/50 hover:bg-white/5"><td className="px-4 py-3 font-semibold text-white">{r.pos}. {r.team}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.p}</td><td className="px-4 py-3 text-right font-bold text-white">{r.pts}</td></tr>
                     ))}
                   </tbody>
                 </table>
               </CardContent>
             </Card>

             {/* La Liga */}
             <Card className="glass-card bg-card/40">
               <CardHeader className="pb-2 border-b border-border/50">
                 <CardTitle className="text-lg font-display text-primary">La Liga</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <table className="w-full text-sm">
                   <thead className="text-xs text-muted-foreground bg-secondary/30">
                     <tr><th className="px-4 py-2 text-left">Club</th><th className="px-4 py-2">P</th><th className="px-4 py-2 text-right">Pts</th></tr>
                   </thead>
                   <tbody>
                     {laLigaTable.map(r => (
                       <tr key={r.team} className="border-b border-border/50 hover:bg-white/5"><td className="px-4 py-3 font-semibold text-white">{r.pos}. {r.team}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.p}</td><td className="px-4 py-3 text-right font-bold text-white">{r.pts}</td></tr>
                     ))}
                   </tbody>
                 </table>
               </CardContent>
             </Card>

             {/* Serie A */}
             <Card className="glass-card bg-card/40">
               <CardHeader className="pb-2 border-b border-border/50">
                 <CardTitle className="text-lg font-display text-primary">Serie A</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <table className="w-full text-sm">
                   <thead className="text-xs text-muted-foreground bg-secondary/30">
                     <tr><th className="px-4 py-2 text-left">Club</th><th className="px-4 py-2">P</th><th className="px-4 py-2 text-right">Pts</th></tr>
                   </thead>
                   <tbody>
                     {serieATable.map(r => (
                       <tr key={r.team} className="border-b border-border/50 hover:bg-white/5"><td className="px-4 py-3 font-semibold text-white">{r.pos}. {r.team}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.p}</td><td className="px-4 py-3 text-right font-bold text-white">{r.pts}</td></tr>
                     ))}
                   </tbody>
                 </table>
               </CardContent>
             </Card>

             {/* Bundesliga */}
             <Card className="glass-card bg-card/40">
               <CardHeader className="pb-2 border-b border-border/50">
                 <CardTitle className="text-lg font-display text-primary">Bundesliga</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <table className="w-full text-sm">
                   <thead className="text-xs text-muted-foreground bg-secondary/30">
                     <tr><th className="px-4 py-2 text-left">Club</th><th className="px-4 py-2">P</th><th className="px-4 py-2 text-right">Pts</th></tr>
                   </thead>
                   <tbody>
                     {bundesligaTable.map(r => (
                       <tr key={r.team} className="border-b border-border/50 hover:bg-white/5"><td className="px-4 py-3 font-semibold text-white">{r.pos}. {r.team}</td><td className="px-4 py-3 text-center text-muted-foreground">{r.p}</td><td className="px-4 py-3 text-right font-bold text-white">{r.pts}</td></tr>
                     ))}
                   </tbody>
                 </table>
               </CardContent>
             </Card>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-6 pb-12 lg:max-h-[800px] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Top Scorers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.goals.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-primary font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Top Assisters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.assists.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-primary font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Most Passes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.passers.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-blue-400 font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Tackles+Int+Clear</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.defensive.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-yellow-500 font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Most Saves</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.saves.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-pink-500 font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Clean Sheets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.cleanSheets.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-purple-400 font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card bg-card/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground">Most Yellow Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {statsLeaders.yellows.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm items-center"><div className="font-semibold text-white">{i+1}. {p.name} <span className="text-xs text-muted-foreground ml-1 font-normal">{p.team}</span></div><div className="text-red-400 font-bold">{p.val}</div></div>
                ))}
              </CardContent>
            </Card>

          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
