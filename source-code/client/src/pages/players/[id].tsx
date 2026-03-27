import { useRoute } from "wouter";
import { mockPlayers, transferRumours } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  LineChart,
  Line,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ArrowUpRight, Target, Activity, Flame, Shield, Star, Share2, Info, TrendingUp, TrendingDown, ArrowRightLeft, ArrowLeftRight, Clock, MapPin, Zap, CheckCircle2, XCircle, BrainCircuit } from "lucide-react";

export default function PlayerProfile() {
  const [, params] = useRoute("/players/:id");
  const id = params?.id;
  
  // Find player or default to first if not found (for mockup purposes)
  const player = mockPlayers.find(p => p.id === id) || mockPlayers[0];

  const radarData = [
    { subject: 'Attacking', A: player.stats.shooting, fullMark: 100 },
    { subject: 'Technical', A: player.stats.passing, fullMark: 100 },
    { subject: 'Creative', A: player.stats.dribbling, fullMark: 100 },
    { subject: 'Defending', A: player.stats.defending, fullMark: 100 },
    { subject: 'Tactical', A: player.stats.physical, fullMark: 100 },
    { subject: 'Physical', A: player.stats.pace, fullMark: 100 },
  ];

  const seasonStats = [
    { competition: 'League', goals: 12, assists: 5, xG: 10.5, xA: 4.2 },
    { competition: 'Champions League', goals: 4, assists: 2, xG: 3.2, xA: 1.8 },
    { competition: 'Domestic Cup', goals: 1, assists: 1, xG: 0.8, xA: 0.5 },
  ];

  const valueHistory = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 88 },
    { month: 'Mar', value: 92 },
    { month: 'Apr', value: 90 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 110 },
    { month: 'Jul', value: 125 },
    { month: 'Aug', value: 135 },
    { month: 'Sep', value: 135 },
    { month: 'Oct', value: 140 },
    { month: 'Nov', value: 145 },
    { month: 'Dec', value: 150 },
  ];

  const matchRatings = [
    { match: 'vs RMA', rating: 7.8, type: 'league' },
    { match: 'vs BAR', rating: 8.2, type: 'league' },
    { match: 'vs ATM', rating: 6.9, type: 'league' },
    { match: 'vs SEV', rating: 7.5, type: 'league' },
    { match: 'vs MCI', rating: 8.9, type: 'ucl' },
    { match: 'vs MUN', rating: 7.2, type: 'ucl' },
    { match: 'vs PSG', rating: 8.5, type: 'ucl' },
  ];

  const detailedMatches = [
    { tourney: 'Champions League', apps: '5(3)', mins: 420, goals: 1, assists: 1, yel: 1, spg: 0.3, ps: 92.6, aw: 0.4, rating: 6.91 },
    { tourney: 'LaLiga', apps: '11(8)', mins: 1053, goals: 1, assists: 0, yel: 0, spg: 0.5, ps: 91.9, aw: 0.4, rating: 6.84 },
    { tourney: 'World Cup Qual.', apps: '1(1)', mins: 95, goals: 0, assists: 0, yel: 1, spg: 0.5, ps: 94.3, aw: 1.5, rating: 6.61 },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20 max-w-7xl mx-auto">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Players</span> 
          <span>/</span> 
          <span className="text-foreground">{player.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-card/50">
            <ArrowLeftRight className="w-4 h-4 mr-2" /> Compare
          </Button>
          <Button variant="outline" size="sm" className="bg-card/50">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Star className="w-4 h-4 mr-2" /> Add to Shortlist
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Core Info */}
        <div className="lg:col-span-8 space-y-8">
          {/* Hero Profile Section */}
          <Card className="glass-card bg-card/40 overflow-hidden relative border-white/10 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-accent/80 to-background border border-white/20 flex items-center justify-center text-5xl font-display font-bold relative group shadow-xl">
                  {player.name.charAt(0)}
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-background rounded-full flex items-center justify-center border-4 border-card shadow-lg">
                    <span className="text-sm font-bold">{player.nationality.substring(0,3).toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white">{player.name}</h1>
                      <div className="flex gap-1.5 ml-2">
                        <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1 font-bold">{player.overall}</Badge>
                        <Badge variant="outline" className="text-muted-foreground border-border/50 text-lg px-3 py-1 bg-background/50 backdrop-blur">POT {player.potential}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5 text-white/90"><Shield className="w-4 h-4 text-primary/70" /> {player.club}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{player.league}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{player.age} Years Old (Jul 21, 2006)</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>173 cm</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-background/40 border border-white/5 backdrop-blur-sm">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Position</div>
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        {player.position}
                        <span className="text-xs font-normal text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded">Left Foot</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Market Value</div>
                      <div className="text-lg font-bold text-white">€{player.value}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Wage / Wk</div>
                      <div className="text-lg font-bold text-white">€{player.wage}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Contract</div>
                      <div className="text-lg font-bold text-white">Jun 2027</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Data Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-card/50 border border-white/5 w-full justify-start overflow-x-auto h-12 p-1 hide-scrollbar">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md">Overview</TabsTrigger>
              <TabsTrigger value="intelligence" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md flex items-center gap-2"><BrainCircuit className="w-3 h-3" /> Intelligence</TabsTrigger>
              <TabsTrigger value="compare" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md">Compare</TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md">Detailed Stats</TabsTrigger>
              <TabsTrigger value="matches" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md">Matches</TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md">Transfer Market</TabsTrigger>
              <TabsTrigger value="highlights" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary px-6 h-9 rounded-md flex items-center gap-2"><Flame className="w-3 h-3" /> Highlights & Media</TabsTrigger>
            </TabsList>
            
            <div className="mt-6 space-y-6">
              <TabsContent value="highlights" className="m-0 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Main Highlight Reel */}
                  <Card className="glass-card bg-card/40 border-white/5 lg:col-span-2">
                    <CardHeader className="pb-4 border-b border-white/5 flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-display flex items-center gap-2">
                          <Flame className="w-5 h-5 text-primary" /> 
                          {player.name} - Ultimate Skills & Goals 2024
                        </CardTitle>
                        <CardDescription>Scout compilation of best moments this season</CardDescription>
                      </div>
                      <Badge className="bg-red-500/20 text-red-500 border border-red-500/30">YouTube</Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video w-full bg-black/50 relative flex items-center justify-center">
                        {/* Mock YouTube Embed */}
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1`} 
                          title={`${player.name} Highlights`} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tactical Analysis Video */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-4 border-b border-white/5">
                      <CardTitle className="text-base font-display">Tactical Analysis: Role & Movement</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video w-full bg-black/50 relative">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/V9812rZcEXs?autoplay=0`} 
                          title="Tactical Analysis" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Goals Reel */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-4 border-b border-white/5">
                      <CardTitle className="text-base font-display">Top 10 Goals This Season</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video w-full bg-black/50 relative">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/kffacxfA7G4?autoplay=0`} 
                          title="Top Goals" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="absolute inset-0"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="overview" className="space-y-6 m-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Radar Chart */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-base font-display flex items-center justify-between">
                        Attribute Overview
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Percentile rank compared to positional peers in top 5 leagues</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[280px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                            <PolarGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 500 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar name="Player" dataKey="A" stroke="hsl(var(--primary))" strokeWidth={2} fill="hsl(var(--primary))" fillOpacity={0.2} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                              itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rating History */}
                  <Card className="glass-card bg-card/40 border-white/5 flex flex-col">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        Recent Form (Match Ratings)
                        <div className="flex items-center gap-3 text-xs font-normal">
                          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary" /> League</span>
                          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> UCL</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end pt-6">
                      <div className="h-[240px] w-full flex items-end justify-between gap-2">
                        {matchRatings.map((match, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                            <div className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white mb-1">
                              {match.rating}
                            </div>
                            <div 
                              className={`w-full rounded-t-md transition-all duration-500 group-hover:brightness-125 ${match.type === 'league' ? 'bg-primary/80' : 'bg-blue-500/80'}`} 
                              style={{ height: `${Math.max(10, (match.rating - 5) * 25)}%`, minHeight: '10%' }} 
                            />
                            <div className="text-[10px] text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis w-full text-center mt-1">
                              {match.match}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Characteristics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-4 border-b border-white/5">
                      <CardTitle className="text-base font-display flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> Strengths
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-white/5">
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Dribbling</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Very Strong</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Key Passes</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Strong</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Long Shots</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Strong</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Ball Interception</span>
                          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">Good</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-4 border-b border-white/5">
                      <CardTitle className="text-base font-display flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" /> Weaknesses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y divide-white/5">
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Aerial Duels</span>
                          <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">Weak</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 hover:bg-white/5 transition-colors">
                          <span className="text-sm">Crossing</span>
                          <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">Average</Badge>
                        </div>
                        <div className="p-4 bg-background/30 m-4 rounded-lg border border-border mt-6">
                          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Style of Play</div>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Likes to do layoffs</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Gets fouled often</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Plays short passes</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="intelligence" className="space-y-6 m-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Threat Creation Engine */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        Threat Creation Engine
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Expected Threat (xT) added per 90 via passes and carries into dangerous zones</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <CardDescription>Rolling xT generation (Last 10 Matches)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[220px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={[
                            { match: 1, xt: 0.12 }, { match: 2, xt: 0.18 }, { match: 3, xt: 0.15 }, 
                            { match: 4, xt: 0.25 }, { match: 5, xt: 0.32 }, { match: 6, xt: 0.28 }, 
                            { match: 7, xt: 0.45 }, { match: 8, xt: 0.38 }, { match: 9, xt: 0.52 }, { match: 10, xt: 0.48 }
                          ]} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorXt" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                            <XAxis dataKey="match" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `M${v}`} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                            />
                            <Area type="monotone" dataKey="xt" name="xT Added" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorXt)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* On-Ball Value Movers */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        On-Ball Value (OBV)
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Value added or subtracted to the team's chance of scoring per possession</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <CardDescription>Action types driving value</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Passes</span>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-full bg-white/5 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-primary">+0.42</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Dribbles/Carries</span>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-full bg-white/5 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-primary">+0.28</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Shots</span>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-full bg-white/5 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-primary">+0.15</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Defensive Actions</span>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-full bg-white/5 rounded-full h-2 relative">
                              <div className="absolute left-1/2 w-[1px] h-3 -top-0.5 bg-white/30 z-10"></div>
                              <div className="bg-red-400 h-2 rounded-full absolute right-1/2" style={{ width: '15%' }}></div>
                            </div>
                            <span className="text-sm font-bold text-red-400">-0.05</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-3 bg-primary/10 rounded-lg border border-primary/20 flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-xs font-bold text-primary">Elite Progressor</div>
                          <div className="text-xs text-muted-foreground">Top 4% in positional peers for passing OBV</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sequence Control Map */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        Sequence Control Profile
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Player's involvement in team possessions based on sequence style</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <CardDescription>Pace vs Width of involved sequences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-square w-full max-w-[280px] mx-auto mt-4 border border-white/10 rounded-lg bg-background/30 overflow-hidden">
                        {/* Grid lines */}
                        <div className="absolute top-1/2 w-full h-[1px] bg-white/10"></div>
                        <div className="absolute left-1/2 h-full w-[1px] bg-white/10"></div>
                        
                        {/* Labels */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Fast / Direct</div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Slow / Built-up</div>
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider -rotate-90">Narrow</div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider rotate-90">Wide</div>
                        
                        {/* Heat clusters - simulating player's preferred possession styles */}
                        <div className="absolute top-[30%] right-[30%] w-24 h-24 bg-primary/40 rounded-full blur-[20px]"></div>
                        <div className="absolute top-[45%] right-[40%] w-16 h-16 bg-primary/60 rounded-full blur-[15px]"></div>
                        <div className="absolute bottom-[40%] left-[40%] w-12 h-12 bg-blue-500/30 rounded-full blur-[15px]"></div>
                        
                        {/* Data point */}
                        <div className="absolute top-[38%] right-[35%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] border-2 border-primary z-10"></div>
                      </div>
                      <div className="text-center mt-3 text-xs text-muted-foreground">
                        Most involved in <span className="text-white font-medium">Fast, Wide</span> attacks
                      </div>
                    </CardContent>
                  </Card>

                  {/* Press Resistance Index */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        Press Resistance Index
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Ability to retain possession and progress play when under intense defensive pressure</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <CardDescription>Performance vs High Press</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center py-6">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" fill="transparent" stroke="hsl(var(--border))" strokeWidth="12" />
                            <circle cx="64" cy="64" r="56" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray="351.8" strokeDashoffset={351.8 - (351.8 * 0.88)} strokeLinecap="round" />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center">
                            <span className="text-3xl font-display font-bold text-white">88</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="bg-background/40 p-3 rounded-lg border border-white/5 text-center">
                          <div className="text-xl font-bold text-white mb-1">82%</div>
                          <div className="text-[10px] text-muted-foreground uppercase">Retention under pressure</div>
                        </div>
                        <div className="bg-background/40 p-3 rounded-lg border border-white/5 text-center">
                          <div className="text-xl font-bold text-primary mb-1">4.5</div>
                          <div className="text-[10px] text-muted-foreground uppercase">Escapes per 90</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Finishing Reality Check */}
                  <Card className="glass-card bg-card/40 border-white/5 md:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-display flex justify-between items-center">
                        Finishing Reality Check
                        <Tooltip>
                          <TooltipTrigger><Info className="w-4 h-4 text-muted-foreground" /></TooltipTrigger>
                          <TooltipContent>Actual goals scored vs Expected Goals (xG) over time</TooltipContent>
                        </Tooltip>
                      </CardTitle>
                      <CardDescription>Sustainable form vs Streaky finishing (Rolling 10 Matches)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[250px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={[
                            { match: 'M1', goals: 0, xG: 0.2 }, { match: 'M2', goals: 1, xG: 0.8 }, 
                            { match: 'M3', goals: 0, xG: 0.4 }, { match: 'M4', goals: 2, xG: 1.1 }, 
                            { match: 'M5', goals: 1, xG: 0.6 }, { match: 'M6', goals: 0, xG: 0.3 }, 
                            { match: 'M7', goals: 1, xG: 0.9 }, { match: 'M8', goals: 1, xG: 0.5 }, 
                            { match: 'M9', goals: 2, xG: 0.8 }, { match: 'M10', goals: 1, xG: 0.4 }
                          ]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                            <XAxis dataKey="match" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                            />
                            <Line type="monotone" dataKey="goals" name="Actual Goals" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4, fill: 'hsl(var(--primary))' }} />
                            <Line type="monotone" dataKey="xG" name="Expected Goals (xG)" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="text-xs font-medium text-white">Actual: 9 Goals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-muted-foreground border border-dashed border-background"></div>
                          <span className="text-xs font-medium text-white">Expected: 6.0 xG</span>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          +3.0 Overperformance
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Narrative vs Reality Board */}
                  <Card className="glass-card bg-card/40 border-white/5 md:col-span-2 bg-gradient-to-br from-card/40 to-primary/5">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit className="w-5 h-5 text-primary" />
                        <CardTitle className="text-base font-display">Narrative vs Reality Board</CardTitle>
                      </div>
                      <CardDescription>AI-driven synthesis of public sentiment versus underlying performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Public Narrative</div>
                          <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">Media Buzz</span>
                              <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px]">High</Badge>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-1.5 mb-4">
                              <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">Fan Sentiment</span>
                              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-[10px]">Positive</Badge>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-1.5 mb-4">
                              <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">Market Value</span>
                              <span className="text-xs font-bold text-white">€{player.value}M <TrendingUp className="w-3 h-3 inline text-primary" /></span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Underlying Reality</div>
                          <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">xG + xA / 90</span>
                              <span className="text-xs font-bold text-white">0.78 <span className="text-primary">(Top 5%)</span></span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-1.5 mb-4">
                              <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">On-Ball Value</span>
                              <span className="text-xs font-bold text-white">+0.42 <span className="text-primary">(Top 8%)</span></span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-1.5 mb-4">
                              <div className="bg-primary h-1.5 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground">Work Rate Index</span>
                              <span className="text-xs font-bold text-white">High <span className="text-yellow-400">(Top 25%)</span></span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center p-6 bg-card rounded-xl border border-primary/20 shadow-[0_0_30px_rgba(118,255,3,0.1)] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[30px]"></div>
                          
                          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 z-10">AI Verdict</div>
                          <div className="text-3xl font-display font-bold text-white mb-2 z-10 text-center">Fairly Rated</div>
                          <div className="text-xs text-center text-muted-foreground z-10">
                            High media hype is entirely justified by elite underlying metrics. Current valuation aligns perfectly with statistical output.
                          </div>
                          <Badge className="mt-4 bg-primary text-primary-foreground font-bold hover:bg-primary z-10">
                            Prime Performer
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="compare" className="space-y-6 m-0">
                <Card className="glass-card bg-card/40 border-white/5 overflow-hidden">
                  <CardHeader className="bg-background/40 pb-4 border-b border-white/5">
                    <CardTitle className="text-base font-display flex items-center justify-between">
                      Similar Player Comparison
                      <Button variant="outline" size="sm" className="h-8 text-xs border-white/10">Add Player</Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-center min-w-[600px]">
                        <thead>
                          <tr className="bg-background/60">
                            <th className="p-4 border-b border-r border-white/5 w-1/4">
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-sm font-bold text-white">{player.name}</div>
                                <div className="text-xs text-muted-foreground">{player.club}</div>
                                <div className="text-[10px] text-muted-foreground">{player.league}</div>
                                <div className="mt-2 text-xs font-medium">Age: {player.age}</div>
                                <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1">{player.position}</div>
                              </div>
                            </th>
                            <th className="p-4 border-b border-r border-white/5 w-1/4">
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-sm font-bold text-white">Bruno Fernandes</div>
                                <div className="text-xs text-muted-foreground">Man Utd</div>
                                <div className="text-[10px] text-muted-foreground">Premier League</div>
                                <div className="mt-2 text-xs font-medium">Age: 29</div>
                                <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1">CAM</div>
                              </div>
                            </th>
                            <th className="p-4 border-b border-r border-white/5 w-1/4">
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-sm font-bold text-white">Kevin De Bruyne</div>
                                <div className="text-xs text-muted-foreground">Man City</div>
                                <div className="text-[10px] text-muted-foreground">Premier League</div>
                                <div className="mt-2 text-xs font-medium">Age: 32</div>
                                <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1">CM</div>
                              </div>
                            </th>
                            <th className="p-4 border-b border-white/5 w-1/4">
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-sm font-bold text-white">Martin Ødegaard</div>
                                <div className="text-xs text-muted-foreground">Arsenal</div>
                                <div className="text-[10px] text-muted-foreground">Premier League</div>
                                <div className="mt-2 text-xs font-medium">Age: 25</div>
                                <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1">CAM</div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6">
                              <span className="text-muted-foreground text-xs">Apps</span>
                              <span>26(1)</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">25</td>
                            <td className="p-3 border-r border-white/5 font-medium">20(3)</td>
                            <td className="p-3 font-medium bg-primary/5 text-primary">27(1)</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6">
                              <span className="text-muted-foreground text-xs">Mins</span>
                              <span>2240</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">2169</td>
                            <td className="p-3 border-r border-white/5 font-medium">1850</td>
                            <td className="p-3 font-medium bg-primary/5 text-primary">2405</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6 bg-primary/5 text-primary">
                              <span className="text-muted-foreground text-xs text-primary/70">Goals</span>
                              <span>22</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">7</td>
                            <td className="p-3 border-r border-white/5 font-medium">6</td>
                            <td className="p-3 font-medium">4</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6">
                              <span className="text-muted-foreground text-xs">Assists</span>
                              <span>7</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium bg-primary/5 text-primary">13</td>
                            <td className="p-3 border-r border-white/5 font-medium">10</td>
                            <td className="p-3 font-medium">5</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6 bg-primary/5 text-primary">
                              <span className="text-muted-foreground text-xs text-primary/70">Yel</span>
                              <span>1</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium text-yellow-500">3</td>
                            <td className="p-3 border-r border-white/5 font-medium text-yellow-500">2</td>
                            <td className="p-3 font-medium text-yellow-500">2</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6 bg-primary/5 text-primary">
                              <span className="text-muted-foreground text-xs text-primary/70">SpG</span>
                              <span>3.6</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">2.5</td>
                            <td className="p-3 border-r border-white/5 font-medium">2.1</td>
                            <td className="p-3 font-medium">1.3</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6">
                              <span className="text-muted-foreground text-xs">PS%</span>
                              <span>65.3</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">82.8</td>
                            <td className="p-3 border-r border-white/5 font-medium bg-primary/5 text-primary">85.6</td>
                            <td className="p-3 font-medium">88.1</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="p-3 border-r border-white/5 font-medium flex justify-between px-6 bg-primary/5 text-primary">
                              <span className="text-muted-foreground text-xs text-primary/70">MotM</span>
                              <span>10</span>
                            </td>
                            <td className="p-3 border-r border-white/5 font-medium">5</td>
                            <td className="p-3 border-r border-white/5 font-medium">6</td>
                            <td className="p-3 font-medium">5</td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors font-bold bg-background/30">
                            <td className="p-4 border-r border-white/5 flex justify-between px-6 bg-primary/10 text-primary">
                              <span className="text-muted-foreground text-xs uppercase tracking-wider text-primary/70 mt-0.5">Rating</span>
                              <span className="text-lg">7.59</span>
                            </td>
                            <td className="p-4 border-r border-white/5 text-lg">7.44</td>
                            <td className="p-4 border-r border-white/5 text-lg">7.52</td>
                            <td className="p-4 text-lg">7.32</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats" className="m-0 space-y-6">
                <Card className="glass-card bg-card/40 border-white/5">
                  <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 pb-4">
                    <CardTitle className="text-base font-display">Current Participations</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary cursor-pointer hover:bg-primary/30">Summary</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Defensive</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Offensive</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Passing</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Detailed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                      <thead className="text-xs text-muted-foreground bg-background/50 border-b border-white/5">
                        <tr>
                          <th className="px-6 py-4 font-semibold">Tournament</th>
                          <th className="px-4 py-4 font-semibold text-center">Apps</th>
                          <th className="px-4 py-4 font-semibold text-center">Mins</th>
                          <th className="px-4 py-4 font-semibold text-center">Goals</th>
                          <th className="px-4 py-4 font-semibold text-center">Assists</th>
                          <th className="px-4 py-4 font-semibold text-center">Yel</th>
                          <th className="px-4 py-4 font-semibold text-center">SpG</th>
                          <th className="px-4 py-4 font-semibold text-center">PS%</th>
                          <th className="px-4 py-4 font-semibold text-center">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {detailedMatches.map((row, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${i===0 ? 'bg-blue-500' : i===1 ? 'bg-primary' : 'bg-purple-500'}`} />
                              {row.tourney}
                            </td>
                            <td className="px-4 py-4 text-center">{row.apps}</td>
                            <td className="px-4 py-4 text-center text-muted-foreground">{row.mins}</td>
                            <td className="px-4 py-4 text-center font-medium">{row.goals}</td>
                            <td className="px-4 py-4 text-center font-medium">{row.assists}</td>
                            <td className="px-4 py-4 text-center text-yellow-500">{row.yel}</td>
                            <td className="px-4 py-4 text-center">{row.spg}</td>
                            <td className="px-4 py-4 text-center text-primary">{row.ps}</td>
                            <td className="px-4 py-4 text-center font-bold">
                              <Badge variant="outline" className={`border-transparent ${row.rating > 6.8 ? 'bg-primary/20 text-primary' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                {row.rating}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>

                {/* Season Output vs xG Chart */}
                <Card className="glass-card bg-card/40 border-white/5">
                  <CardHeader>
                    <CardTitle className="text-base font-display">Season Output vs Expected (xG/xA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={seasonStats} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                          <XAxis dataKey="competition" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                          <RechartsTooltip 
                            contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                            cursor={{ fill: 'hsl(var(--secondary))', opacity: 0.4 }}
                          />
                          <Bar dataKey="goals" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Actual Goals" barSize={30} />
                          <Bar dataKey="xG" fill="hsl(var(--primary))" fillOpacity={0.3} radius={[4, 4, 0, 0]} name="Expected Goals" barSize={30} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="matches" className="m-0 space-y-6">
                <Card className="glass-card bg-card/40 border-white/5">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/5">
                    <CardTitle className="text-base font-display">Recent Matches</CardTitle>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px] bg-background/50 h-8 text-xs border-white/10">
                          <SelectValue placeholder="Competition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Competitions</SelectItem>
                          <SelectItem value="league">LaLiga</SelectItem>
                          <SelectItem value="ucl">Champions League</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                      <thead className="text-xs text-muted-foreground bg-background/50 border-b border-white/5">
                        <tr>
                          <th className="px-6 py-4 font-semibold">Date</th>
                          <th className="px-4 py-4 font-semibold">Match</th>
                          <th className="px-4 py-4 font-semibold text-center">Result</th>
                          <th className="px-4 py-4 font-semibold text-center">Mins</th>
                          <th className="px-4 py-4 font-semibold text-center">Goals</th>
                          <th className="px-4 py-4 font-semibold text-center">Assists</th>
                          <th className="px-4 py-4 font-semibold text-center">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground text-xs">Mar 05, 2026</td>
                          <td className="px-4 py-4 font-medium flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">RMA</div> Real Madrid vs Getafe</td>
                          <td className="px-4 py-4 text-center text-green-400 font-bold">1 - 0</td>
                          <td className="px-4 py-4 text-center">90'</td>
                          <td className="px-4 py-4 text-center">0</td>
                          <td className="px-4 py-4 text-center">0</td>
                          <td className="px-4 py-4 text-center font-bold text-primary">7.8</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground text-xs">Feb 28, 2026</td>
                          <td className="px-4 py-4 font-medium flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">BAR</div> Barcelona vs Real Madrid</td>
                          <td className="px-4 py-4 text-center text-yellow-500 font-bold">2 - 2</td>
                          <td className="px-4 py-4 text-center">90'</td>
                          <td className="px-4 py-4 text-center">1</td>
                          <td className="px-4 py-4 text-center">1</td>
                          <td className="px-4 py-4 text-center font-bold text-primary">8.2</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground text-xs">Feb 24, 2026</td>
                          <td className="px-4 py-4 font-medium flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">MCI</div> Real Madrid vs Man City</td>
                          <td className="px-4 py-4 text-center text-green-400 font-bold">3 - 1</td>
                          <td className="px-4 py-4 text-center">85'</td>
                          <td className="px-4 py-4 text-center">2</td>
                          <td className="px-4 py-4 text-center">0</td>
                          <td className="px-4 py-4 text-center font-bold text-primary">8.9</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground text-xs">Feb 18, 2026</td>
                          <td className="px-4 py-4 font-medium flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">ATM</div> Atl. Madrid vs Real Madrid</td>
                          <td className="px-4 py-4 text-center text-red-400 font-bold">1 - 0</td>
                          <td className="px-4 py-4 text-center">90'</td>
                          <td className="px-4 py-4 text-center">0</td>
                          <td className="px-4 py-4 text-center">0</td>
                          <td className="px-4 py-4 text-center font-bold text-yellow-500">6.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="market" className="m-0 space-y-6">
                <Card className="glass-card bg-card/40 border-white/5">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-base font-display">Market Value History</CardTitle>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                      <TrendingUp className="w-4 h-4" /> €{player.value} (+15%)
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={valueHistory} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `€${val}m`} />
                          <RechartsTooltip 
                            contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                            formatter={(value: number) => [`€${value}M`, 'Market Value']}
                          />
                          <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Transfer Rumours */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader>
                      <CardTitle className="text-base font-display flex items-center gap-2">
                        <Flame className="w-4 h-4 text-primary" /> Transfer Intelligence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-4">
                          {transferRumours.slice(0, 3).map((rumour, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-background/50 border border-white/5 hover:border-white/10 transition-colors">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-white flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">{rumour.to.charAt(0)}</div>
                                  {rumour.to}
                                </span>
                                <Badge variant="outline" className={`font-bold ${idx === 0 ? 'bg-primary/20 text-primary border-primary/30' : 'bg-card text-muted-foreground'}`}>
                                  {rumour.probability}% Prob
                                </Badge>
                              </div>
                              <div className="flex items-center gap-3 mt-3">
                                <div className="flex-1 bg-secondary h-1.5 rounded-full overflow-hidden">
                                  <div className={`h-full rounded-full ${idx === 0 ? 'bg-primary' : 'bg-muted-foreground'}`} style={{ width: `${rumour.probability}%` }} />
                                </div>
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground mt-3">
                                <span className="flex items-center gap-1">
                                  <Flame className={`w-3 h-3 ${idx === 0 ? 'text-orange-500' : 'text-blue-400'}`} /> 
                                  {rumour.status} rumour
                                </span>
                                <span>{rumour.date}</span>
                              </div>
                            </div>
                          ))}
                          <Button variant="outline" className="w-full text-xs mt-2 border-dashed">View Transfer Room</Button>
                       </div>
                    </CardContent>
                  </Card>
                  
                  {/* System Fits */}
                  <Card className="glass-card bg-card/40 border-white/5">
                    <CardHeader>
                      <CardTitle className="text-base font-display flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" /> System Fits
                      </CardTitle>
                      <CardDescription>AI-driven tactical fit prediction</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5">
                            <div>
                              <div className="font-bold text-white mb-1">Real Madrid</div>
                              <div className="text-xs text-muted-foreground">4-3-3 • Left Central Midfield</div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">98%</div>
                              <div className="text-[10px] text-primary/70 uppercase font-bold tracking-wider">Perfect Fit</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-background/50">
                            <div>
                              <div className="font-bold text-white mb-1">Man City</div>
                              <div className="text-xs text-muted-foreground">3-2-4-1 • Advanced 8</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-green-400">92%</div>
                              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Strong Fit</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-background/50">
                            <div>
                              <div className="font-bold text-white mb-1">Bayern Munich</div>
                              <div className="text-xs text-muted-foreground">4-2-3-1 • Pivot / Number 10</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-yellow-400">85%</div>
                              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Good Fit</div>
                            </div>
                          </div>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          {/* Intelligence Pulse */}
          <Card className="glass-card bg-card/40 border-white/5">
            <CardHeader className="pb-4 border-b border-white/5">
              <CardTitle className="text-base font-display flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Intelligence Pulse
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-muted-foreground">Global Fan Sentiment</span>
                  <span className="text-primary font-bold">{player.sentiment}%</span>
                </div>
                <div className="w-full bg-background border border-border h-3 rounded-full overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-primary/50 to-primary h-full rounded-full" style={{ width: `${player.sentiment}%` }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Highly positive sentiment driven by recent UCL performances.</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Role Archetype Fits</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-transparent">Advanced Playmaker</Badge>
                  <Badge variant="secondary" className="bg-white/5 hover:bg-white/10">High Presser</Badge>
                  <Badge variant="secondary" className="bg-white/5 hover:bg-white/10">Creative Hub</Badge>
                  <Badge variant="secondary" className="bg-white/5 hover:bg-white/10">Box-to-Box</Badge>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-primary/10">
                  <TrendingUp className="w-20 h-20" />
                </div>
                <div className="flex items-center gap-2 mb-2 text-primary font-bold relative z-10">
                  <Flame className="w-4 h-4" /> Market Trend Alert
                </div>
                <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">
                  Value has increased by <span className="text-white font-bold bg-white/10 px-1 rounded">+15%</span> over the last 3 months due to consistent overperformance of expected metrics.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Playing Positions Heatmap Widget */}
          <Card className="glass-card bg-card/40 border-white/5">
            <CardHeader className="pb-4 border-b border-white/5">
              <CardTitle className="text-base font-display flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Positional Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative w-full aspect-[2/3] bg-green-900/20 border border-green-500/20 rounded-lg overflow-hidden flex flex-col justify-between p-2 mb-4">
                {/* Mock Pitch Lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/20" />
                <div className="mx-auto w-1/2 h-16 border border-t-0 border-white/20" />
                <div className="mx-auto w-1/2 h-16 border border-b-0 border-white/20" />
                
                {/* Heatmap Blobs */}
                <div className="absolute top-[40%] left-[20%] w-24 h-32 bg-primary/60 rounded-[100%] blur-xl" />
                <div className="absolute top-[35%] left-[35%] w-20 h-20 bg-yellow-500/50 rounded-[100%] blur-xl" />
                <div className="absolute top-[60%] left-[25%] w-16 h-20 bg-primary/40 rounded-[100%] blur-xl" />
                
                {/* Position Labels */}
                <div className="absolute top-[45%] left-[25%] bg-background/80 backdrop-blur text-primary text-xs font-bold px-2 py-1 rounded border border-primary/30">
                  AML 7.5
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 bg-background/80 backdrop-blur text-yellow-500 text-xs font-bold px-2 py-1 rounded border border-yellow-500/30">
                  AMC 7.0
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-muted-foreground">AMC (Attacking Mid)</span>
                  <span className="font-medium text-white">22 Apps</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-muted-foreground">MC (Central Mid)</span>
                  <span className="font-medium text-white">15 Apps</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Chances Created Visual */}
          <Card className="glass-card bg-card/40 border-white/5">
            <CardHeader className="pb-4 border-b border-white/5">
              <CardTitle className="text-base font-display flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" /> Action Zones
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Radar style pizza chart for actions */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-[8px] border-background/50 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Slices */}
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)', backgroundColor: 'hsl(var(--primary))', opacity: 0.8 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%)', backgroundColor: '#3b82f6', opacity: 0.9 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 50% 100%)', backgroundColor: '#8b5cf6', opacity: 0.7 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0 100%)', backgroundColor: 'hsl(var(--primary))', opacity: 0.4 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 50%)', backgroundColor: '#eab308', opacity: 0.8 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0)', backgroundColor: '#ec4899', opacity: 0.6 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)', backgroundColor: 'hsl(var(--primary))', opacity: 1 }}></div>
                    <div className="absolute w-full h-full" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)', backgroundColor: '#a855f7', opacity: 0.5 }}></div>
                  </div>
                  <div className="w-12 h-12 bg-background rounded-full z-10 flex items-center justify-center font-bold text-sm">94</div>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6 text-xs w-full">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-primary" /> Chances: 89</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-blue-500" /> Goals: 24</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-purple-500" /> Shots: 84</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-500" /> Touches Box: 96</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
