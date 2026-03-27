import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, MessageCircle, ArrowUpRight, Flame, ArrowDownRight, Globe, HeartCrack, ArrowRightLeft } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

import imgWorldMap from '@/assets/images/world-map.png';

export default function FanSentiment() {
  const sentimentTrend = [
    { date: 'Mon', p1: 65, p2: 80, p3: 40 },
    { date: 'Tue', p1: 68, p2: 82, p3: 45 },
    { date: 'Wed', p1: 75, p2: 81, p3: 50 },
    { date: 'Thu', p1: 85, p2: 85, p3: 42 },
    { date: 'Fri', p1: 92, p2: 88, p3: 35 },
    { date: 'Sat', p1: 95, p2: 90, p3: 30 },
    { date: 'Sun', p1: 98, p2: 92, p3: 25 },
  ];

  const debates = [
    { id: 1, topic: "Should Real Madrid prioritize Jobi or Musiala?", intensity: 95, comments: "12.4k" },
    { id: 2, topic: "Lamine Yamal vs prime Messi age comparison", intensity: 88, comments: "15.2k" },
    { id: 3, topic: "Is Xabi Alonso over-performing his expected points?", intensity: 85, comments: "9.3k" },
    { id: 4, topic: "Haaland's touch map vs deep blocks", intensity: 82, comments: "8.1k" },
    { id: 5, topic: "Should Arsenal drop Zinchenko for Timber?", intensity: 78, comments: "11.5k" },
    { id: 6, topic: "Mainoo deserves the Euros call-up over Henderson", intensity: 92, comments: "22.1k" },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-500" /> Fan Sentiment & Demand
        </h1>
        <p className="text-muted-foreground">Real-time pulse of global football supporters across socials and forums.</p>
      </div>

      {/* Top Indices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card bg-card/40 border-t-4 border-t-red-500">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-red-500" /> Global Hype Index
            </div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-display font-bold text-white">67.7</div>
              <div className="flex items-center text-red-500 text-sm font-medium bg-red-500/10 px-2 py-1 rounded">
                <ArrowDownRight className="w-4 h-4 mr-1" /> DOWN 3.4
              </div>
            </div>
            <div className="mt-4 w-full bg-secondary h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-[67.7%]" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card bg-card/40 border-t-4 border-t-primary">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-primary" /> Most Requested Transfer
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1 truncate">Moyosore Jobi</div>
            <div className="text-sm text-muted-foreground">to Real Madrid</div>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-background/50">#JobiToMadrid</Badge>
              <Badge variant="outline" className="bg-background/50 text-primary">Trending</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card bg-card/40 border-t-4 border-t-orange-500">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" /> Most Debated Player
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1 truncate">Darwin Núñez</div>
            <div className="text-sm text-muted-foreground">Tactical fit discussions</div>
            <div className="mt-4 flex items-center text-orange-400 text-sm font-medium bg-orange-500/10 w-fit px-2 py-1 rounded">
              <MessageCircle className="w-4 h-4 mr-2" /> 45k active threads
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card bg-card/40 border-t-4 border-t-red-600 hover:bg-white/5 transition-colors cursor-pointer group">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <HeartCrack className="w-4 h-4 text-red-600" /> Most Hated
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1 truncate group-hover:text-red-500 transition-colors">Pestriani</div>
            <div className="text-sm text-muted-foreground">Negative sentiment spike</div>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-background/50 group-hover:border-red-600/50 transition-colors">View Top 10</Badge>
              <Badge variant="outline" className="bg-background/50 text-red-500">Trending</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card bg-card/40 border-t-4 border-t-pink-500 hover:bg-white/5 transition-colors cursor-pointer group">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500" /> Most Loved
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1 truncate group-hover:text-pink-400 transition-colors">Paul Pogba</div>
            <div className="text-sm text-muted-foreground">Positive sentiment surge</div>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-background/50 group-hover:border-pink-500/50 transition-colors">View Top 10</Badge>
              <Badge variant="outline" className="bg-background/50 text-pink-400">Trending</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card bg-card/40 border-t-4 border-t-blue-500 hover:bg-white/5 transition-colors cursor-pointer group">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-500" /> Most Talked About
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1 truncate group-hover:text-blue-400 transition-colors">Vinícius Júnior</div>
            <div className="text-sm text-muted-foreground">Across all platforms</div>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-background/50 group-hover:border-blue-500/50 transition-colors">View Top 10</Badge>
              <Badge variant="outline" className="bg-background/50 text-blue-400">Trending</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* World Map replacing Hype Score Trends at the top */}
        <Card className="glass-card bg-card/40 lg:col-span-2">
          <CardHeader className="pb-3 border-b border-white/5">
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" /> Global Player Heatmap
            </CardTitle>
            <p className="text-sm text-muted-foreground">Most loved & trending players globally in real-time.</p>
          </CardHeader>
          <CardContent className="p-4">
             <div className="w-full h-[400px] rounded-xl overflow-hidden relative border border-white/10 group bg-black">
                <img src={imgWorldMap} alt="Global Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Simulated Heat Points Overlay */}
                <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-primary rounded-full blur-[4px] animate-pulse"></div>
                <div className="absolute top-[40%] left-[50%] w-6 h-6 bg-red-500 rounded-full blur-[6px] animate-pulse delay-75"></div>
                <div className="absolute top-[25%] left-[55%] w-3 h-3 bg-blue-500 rounded-full blur-[3px] animate-pulse delay-150"></div>
                <div className="absolute top-[60%] left-[30%] w-5 h-5 bg-yellow-500 rounded-full blur-[5px] animate-pulse delay-300"></div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center">
                   <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md px-3 py-1 font-bold shadow-[0_0_10px_rgba(118,255,3,0.2)]">V. Júnior (Brazil)</Badge>
                   <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 backdrop-blur-md px-3 py-1 font-bold shadow-[0_0_10px_rgba(59,130,246,0.2)]">E. Haaland (Scandinavia)</Badge>
                   <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 backdrop-blur-md px-3 py-1 font-bold shadow-[0_0_10px_rgba(236,72,153,0.2)]">K. Mainoo (UK)</Badge>
                   <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 backdrop-blur-md px-3 py-1 font-bold shadow-[0_0_10px_rgba(249,115,22,0.2)]">K. Mbappé (France)</Badge>
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Hot Debates */}
        <Card className="glass-card bg-card/40">
          <CardHeader className="border-b border-white/5 pb-4">
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500 animate-pulse" /> Hot Debates
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto custom-scrollbar">
              {debates.map((debate) => (
                <div key={debate.id} className="p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <h4 className="font-medium text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                    {debate.topic}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 mr-4">
                      <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full relative" style={{ width: `${debate.intensity}%` }}>
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-orange-500">{debate.intensity}°</span>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 font-medium bg-black/40 px-2 py-1 rounded">
                      <MessageCircle className="w-3 h-3 text-blue-400" /> {debate.comments}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trend Chart (Moved Down) */}
        <Card className="glass-card bg-card/40 lg:col-span-3">
          <CardHeader className="pb-2 border-b border-white/5 mb-4">
            <CardTitle className="text-lg font-display flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Hype Score Trends (7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sentimentTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorP1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorP2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.3} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="p1" name="L. Yamal" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#colorP1)" />
                  <Area type="monotone" dataKey="p2" name="J. Bellingham" stroke="#3b82f6" strokeWidth={2} fill="url(#colorP2)" />
                  <Area type="monotone" dataKey="p3" name="D. Núñez" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-4 justify-center text-sm font-semibold">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary" /> Lamine Yamal</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Jude Bellingham</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-muted-foreground border border-white/20" /> Darwin Núñez</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}