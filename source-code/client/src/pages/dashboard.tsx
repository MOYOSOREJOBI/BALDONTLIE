import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Target, Trophy, ArrowUpRight, Flame, Medal, Calendar, Shield, Map, BarChart2, TrendingUp, Users, Zap, Eye, Globe, Star } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, LineChart, Line, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();

  const ballonDorDataMulti = [
    { month: 'Jan', vinicius: 82, bellingham: 90, haaland: 85, rodri: 75, kane: 80 },
    { month: 'Feb', vinicius: 88, bellingham: 89, haaland: 86, rodri: 78, kane: 85 },
    { month: 'Mar', vinicius: 95, bellingham: 88, haaland: 84, rodri: 80, kane: 88 },
    { month: 'Apr', vinicius: 98, bellingham: 86, haaland: 85, rodri: 85, kane: 85 },
    { month: 'May', vinicius: 99, bellingham: 90, haaland: 86, rodri: 88, kane: 84 },
  ];

  const goldenBootData = [
    { name: 'H. Kane', goals: 36, xG: 28.4, league: 'BUN' },
    { name: 'S. Guirassy', goals: 28, xG: 21.2, league: 'BUN' },
    { name: 'K. Mbappé', goals: 27, xG: 26.1, league: 'LIG1' },
    { name: 'E. Haaland', goals: 27, xG: 29.8, league: 'EPL' },
    { name: 'L. Martínez', goals: 24, xG: 20.5, league: 'SERA' },
  ];

  const uclFixtures = [
    { home: 'Real Madrid', away: 'Man City', date: 'Oct 24, 20:00', probHome: 45, probAway: 55 },
    { home: 'Arsenal', away: 'Bayern Munich', date: 'Oct 24, 20:00', probHome: 60, probAway: 40 },
    { home: 'PSG', away: 'Barcelona', date: 'Oct 25, 20:00', probHome: 52, probAway: 48 },
    { home: 'Atl. Madrid', away: 'Dortmund', date: 'Oct 25, 20:00', probHome: 58, probAway: 42 },
  ];

  const marketMovers = [
    { name: 'Lamine Yamal', club: 'Barcelona', value: '€90M', change: '+€20M', trend: 'up' },
    { name: 'Kobbie Mainoo', club: 'Man Utd', value: '€50M', change: '+€15M', trend: 'up' },
    { name: 'Moyosore Jobi', club: 'Leverkusen', value: '€110M', change: '+€10M', trend: 'up' },
    { name: 'Marcus Rashford', club: 'Man Utd', value: '€60M', change: '-€10M', trend: 'down' },
  ];
  
  const teamPressingData = [
    { team: 'Liverpool', ppda: 8.5 },
    { team: 'Arsenal', ppda: 9.1 },
    { team: 'Tottenham', ppda: 9.8 },
    { team: 'Man City', ppda: 10.2 },
    { team: 'Aston Villa', ppda: 10.5 },
  ];

  const leagueXGData = [
    { name: 'EPL', xG: 3.2, actual: 3.0 },
    { name: 'Bundesliga', xG: 3.1, actual: 3.2 },
    { name: 'Serie A', xG: 2.5, actual: 2.6 },
    { name: 'La Liga', xG: 2.7, actual: 2.5 },
    { name: 'Ligue 1', xG: 2.6, actual: 2.4 },
  ];

  const youthProspects = [
    { name: "Pau Cubarsí", age: 17, club: "Barcelona", rating: 88 },
    { name: "Warren Zaïre-Emery", age: 18, club: "PSG", rating: 92 },
    { name: "Endrick", age: 18, club: "Real Madrid", rating: 89 },
    { name: "Leny Yoro", age: 18, club: "Man Utd", rating: 87 },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" /> {t('Global Intelligence Hub')}
          </h1>
          <p className="text-muted-foreground">{t('The epicenter of world football data. Live stream of global insights.')}</p>
        </div>
        <div className="flex items-center gap-2 bg-card/60 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 text-sm font-medium shadow-[0_0_15px_rgba(118,255,3,0.1)]">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(118,255,3,1)]" />
          <span className="text-primary font-bold">LIVE DATA STREAM</span>
        </div>
      </div>

      {/* Top Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Player of the Week */}
        <div className="bg-card/40 border border-blue-500/20 rounded-xl p-4 flex flex-col gap-3 shadow-lg hover:bg-card/60 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-500">
                <Star className="w-4 h-4" />
              </div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Player of the Week</div>
            </div>
            <Badge className="bg-blue-500/20 text-blue-400 border-none text-[10px]">EPL</Badge>
          </div>
          <div>
             <div className="text-2xl font-display font-bold text-white pl-1 group-hover:text-blue-400 transition-colors">K. Mainoo</div>
             <div className="text-sm text-muted-foreground pl-1 font-medium">Man Utd vs Liverpool (9.2 Rtg)</div>
          </div>
        </div>

        {/* Team of the Week */}
        <div className="bg-card/40 border border-purple-500/20 rounded-xl p-4 flex flex-col gap-3 shadow-lg hover:bg-card/60 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-500">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Team of the Week</div>
            </div>
            <Badge className="bg-purple-500/20 text-purple-400 border-none text-[10px]">UCL</Badge>
          </div>
          <div>
             <div className="text-2xl font-display font-bold text-white pl-1 group-hover:text-purple-400 transition-colors">Real Madrid</div>
             <div className="text-sm text-muted-foreground pl-1 font-medium">Defensive Masterclass v City</div>
          </div>
        </div>

        {/* Manager of the Week */}
        <div className="bg-card/40 border border-orange-500/20 rounded-xl p-4 flex flex-col gap-3 shadow-lg hover:bg-card/60 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-500/10 text-orange-500">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Manager of the Week</div>
            </div>
            <Badge className="bg-orange-500/20 text-orange-400 border-none text-[10px]">AFCON</Badge>
          </div>
          <div>
             <div className="text-2xl font-display font-bold text-white pl-1 group-hover:text-orange-400 transition-colors">Eric Chelle</div>
             <div className="text-sm text-muted-foreground pl-1 font-medium">Mali National Team Tactical Masterclass</div>
          </div>
        </div>

        {/* Goal of the Week */}
        <div className="bg-card/40 border border-primary/20 rounded-xl p-4 flex flex-col gap-3 shadow-lg hover:bg-card/60 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <Target className="w-4 h-4" />
              </div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Goal of the Week</div>
            </div>
            <Badge className="bg-primary/20 text-primary border-none text-[10px] animate-pulse">90+8'</Badge>
          </div>
          <div>
             <div className="text-2xl font-display font-bold text-white pl-1 group-hover:text-primary transition-colors">B. Šeško</div>
             <div className="text-sm text-muted-foreground pl-1 font-medium">RB Leipzig vs Man City (Volley)</div>
          </div>
        </div>
      </div>

      {/* Masonry-style Dashboard Feed */}
      <div className="columns-1 lg:columns-2 xl:columns-3 gap-6 space-y-6">
        
        {/* Main Chart: Ballon d'Or Rankings - Multiple Line Graph */}
        <Card className="glass-card bg-card/40 border-yellow-500/30 break-inside-avoid shadow-lg shadow-yellow-500/10">
          <CardHeader className="pb-0">
            <CardTitle className="text-xl font-display font-semibold flex items-center gap-2 text-yellow-500">
              <Medal className="w-6 h-6" />
              {t("Ballon d'Or Power Index")}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Comparative trend over time based on sentiment, odds, and output.</p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ballonDorDataMulti} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.5} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} domain={[60, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
                  <Line type="monotone" dataKey="vinicius" name="V. Júnior" stroke="#eab308" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="bellingham" name="J. Bellingham" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="haaland" name="E. Haaland" stroke="#ec4899" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="rodri" name="Rodri" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="kane" name="H. Kane" stroke="#10b981" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Golden Boot Widget */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-primary/5">
          <CardHeader className="pb-3 border-b border-white/5">
            <div className="flex justify-between items-center">
              <CardTitle className="text-md font-display flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" /> Europe Golden Boot Race
              </CardTitle>
              <Badge variant="outline" className="text-xs font-normal border-primary/50 text-primary bg-primary/10 animate-pulse">Live Tracker</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {goldenBootData.map((player, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="font-bold text-muted-foreground w-4 text-center">{idx + 1}</div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white border border-white/10 group-hover:border-primary transition-colors">
                      {player.name.split(' ')[1]?.charAt(0) || player.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{player.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{player.league}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">{player.goals} <span className="text-xs font-normal text-muted-foreground ml-1">GLS</span></div>
                    <div className="text-[10px] font-medium text-emerald-400">xG: {player.xG}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* League xG vs Actual Goals Comparison */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-blue-500/5">
          <CardHeader className="pb-0 border-b border-white/5 mb-4">
             <CardTitle className="text-md font-display flex items-center gap-2 pb-3">
               <BarChart2 className="w-5 h-5 text-blue-400" /> League Avg Goals p90 (Actual vs xG)
             </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leagueXGData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.3} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} domain={[2, 4]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="actual" name="Actual Goals p90" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="xG" name="Expected Goals (xG) p90" fill="#76ff03" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Movers */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-green-500/5 border-green-500/20">
          <CardHeader className="pb-3 border-b border-white/5">
            <div className="flex justify-between items-center">
              <CardTitle className="text-md font-display flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" /> Transfer Value Movers
              </CardTitle>
              <Badge className="bg-green-500/20 text-green-400 border-none text-[10px] uppercase">Last 30 Days</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {marketMovers.map((player, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-xs font-bold text-white border border-white/10 group-hover:border-green-400/50">
                      {player.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">{player.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{player.club}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">{player.value}</div>
                    <div className={`text-[10px] font-bold flex items-center justify-end gap-1 px-1.5 py-0.5 rounded ${player.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                      {player.trend === 'up' ? '▲' : '▼'} {player.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* UCL / Leagues Tab */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-blue-500/5">
          <CardContent className="p-4">
            <Tabs defaultValue="ucl" className="w-full">
              <TabsList className="w-full grid grid-cols-2 bg-black/40 mb-4 p-1 rounded-lg">
                <TabsTrigger value="ucl" className="text-xs">UCL Projections</TabsTrigger>
                <TabsTrigger value="leagues" className="text-xs">League Winners</TabsTrigger>
              </TabsList>
              <TabsContent value="ucl" className="space-y-3">
                {uclFixtures.map((fixture, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-white/5 bg-black/20 hover:border-white/10 transition-colors group cursor-pointer">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 text-center font-semibold flex items-center justify-center gap-1">
                       <Zap className="w-3 h-3 text-yellow-500" /> {fixture.date}
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm w-1/3 text-right text-white group-hover:text-primary transition-colors">{fixture.home}</span>
                      <span className="text-[10px] text-muted-foreground px-2 bg-white/5 rounded px-2 py-0.5">vs</span>
                      <span className="font-semibold text-sm w-1/3 text-left text-white group-hover:text-blue-400 transition-colors">{fixture.away}</span>
                    </div>
                    <div className="flex h-1.5 rounded-full overflow-hidden w-full bg-secondary">
                      <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${fixture.probHome}%` }} />
                      <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${fixture.probAway}%` }} />
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-muted-foreground font-medium">
                      <span>{fixture.probHome}% Win</span>
                      <span>{fixture.probAway}% Win</span>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="leagues">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-center mb-3 text-muted-foreground uppercase tracking-wider">Simulated Champions (10,000 runs)</div>
                  
                  <div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-black/20 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/30">EPL</div>
                      <span className="font-semibold text-white">Arsenal</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-display font-bold text-primary">45%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-black/20 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold text-xs border border-yellow-500/30">LAL</div>
                      <span className="font-semibold text-white">Real Madrid</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-display font-bold text-primary">82%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-white/5 rounded-lg bg-black/20 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">SER</div>
                      <span className="font-semibold text-white">Inter</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-display font-bold text-primary">95%</div>
                    </div>
                  </div>
                  
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Hot Youth Prospects */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-pink-500/5">
          <CardHeader className="pb-3 border-b border-white/5">
             <CardTitle className="text-md font-display flex items-center gap-2">
               <Eye className="w-5 h-5 text-pink-400" /> Top U19 Radar
             </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
             <div className="space-y-4">
               {youthProspects.map((player, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-xs border border-pink-500/20">
                         {player.age}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors">{player.name}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">{player.club}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-muted-foreground">Scout Score</div>
                      <div className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">{player.rating}</div>
                    </div>
                  </div>
               ))}
             </div>
          </CardContent>
        </Card>

        {/* Team Pressing Intensity (PPDA) */}
        <Card className="glass-card bg-card/40 break-inside-avoid shadow-lg shadow-purple-500/5">
          <CardHeader className="pb-3 border-b border-white/5">
            <CardTitle className="text-md font-display flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" /> Pressing Intensity (PPDA)
            </CardTitle>
            <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">Passes Allowed Per Defensive Action</p>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="space-y-5">
              {teamPressingData.map((data, idx) => (
                <div key={idx} className="space-y-2 group cursor-pointer">
                  <div className="flex justify-between text-sm items-end">
                    <span className="font-semibold text-white group-hover:text-purple-400 transition-colors">{idx + 1}. {data.team}</span>
                    <span className="font-bold text-purple-400 text-lg leading-none">{data.ppda}</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden border border-white/5">
                    {/* Inverse logic for visual: lower PPDA fills the bar more */}
                    <div 
                      className="bg-purple-500 h-full rounded-full transition-all duration-1000 relative overflow-hidden" 
                      style={{ width: `${100 - (data.ppda - 8) * 15}%` }} 
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}