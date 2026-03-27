import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Euro, Search, FileText, Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import { transferRumours } from "@/data/mock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransferLab() {
  const fullRumours = [...transferRumours, ...transferRumours];

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" /> Transfer Lab
          </h1>
          <p className="text-muted-foreground">Interactive squad planning, chemistry risks, and replacement intelligence.</p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 py-1.5 px-4 font-semibold">Summer Window: OPEN</Badge>
      </div>

      <Tabs defaultValue="planner" className="w-full space-y-6">
        <TabsList className="bg-card/40 border border-white/10 rounded-lg p-1">
           <TabsTrigger value="planner" className="text-xs sm:text-sm">Squad Planner</TabsTrigger>
           <TabsTrigger value="rumours" className="text-xs sm:text-sm">Live Rumours</TabsTrigger>
           <TabsTrigger value="risers" className="text-xs sm:text-sm">Market Movers</TabsTrigger>
        </TabsList>

        <TabsContent value="planner" className="m-0 space-y-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card bg-card/40 border-white/10 lg:col-span-2">
                 <CardHeader className="border-b border-white/5 pb-4">
                    <div className="flex justify-between items-center">
                       <CardTitle className="text-lg">Replacement Intelligence: Casemiro</CardTitle>
                       <Badge variant="outline" className="text-yellow-500 border-yellow-500/30 bg-yellow-500/10">Squad Need: High</Badge>
                    </div>
                 </CardHeader>
                 <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                       <div className="space-y-4">
                          <h4 className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Outgoing Profile</h4>
                          <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">C</div>
                                <div>
                                   <div className="font-bold">Casemiro</div>
                                   <div className="text-xs text-muted-foreground">Deep Lying / Destroyer</div>
                                </div>
                             </div>
                             <div className="space-y-2 text-sm">
                                <div className="flex justify-between"><span className="text-muted-foreground">Age</span><span>32</span></div>
                                <div className="flex justify-between"><span className="text-muted-foreground">Wage</span><span className="text-red-400">£350k/wk</span></div>
                                <div className="flex justify-between"><span className="text-muted-foreground">Contract</span><span>2026</span></div>
                             </div>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Target Profile Match</h4>
                          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden">
                             <div className="absolute right-0 top-0 w-16 h-16 bg-primary/10 blur-[20px] rounded-full" />
                             <div className="flex items-center gap-3 mb-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">Z</div>
                                <div>
                                   <div className="font-bold text-white">M. Zubimendi</div>
                                   <div className="text-xs text-primary">Real Sociedad</div>
                                </div>
                             </div>
                             <div className="space-y-2 text-sm relative z-10">
                                <div className="flex justify-between items-center"><span className="text-muted-foreground">Style Fit</span><Badge className="bg-green-500/20 text-green-400 text-[10px]">94% Match</Badge></div>
                                <div className="flex justify-between items-center"><span className="text-muted-foreground">Est. Fee</span><span className="text-white">€60M</span></div>
                                <div className="flex justify-between items-center"><span className="text-muted-foreground">Chemistry Risk</span><span className="text-yellow-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3"/> Low</span></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    <Button className="w-full bg-primary text-black font-bold hover:bg-primary/90">Add to Transfer Strategy</Button>
                 </CardContent>
              </Card>

              <Card className="glass-card bg-card/40 border-white/10">
                 <CardHeader className="border-b border-white/5 pb-4">
                    <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Squad Balance View</CardTitle>
                 </CardHeader>
                 <CardContent className="p-4 space-y-6">
                    <div>
                       <div className="flex justify-between text-xs mb-2">
                          <span className="text-white font-medium">Wage Bill Impact</span>
                          <span className="text-green-400">-£120k/wk</span>
                       </div>
                       <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                          <div className="h-full bg-red-500 w-[60%]" />
                          <div className="h-full bg-green-500 w-[20%]" />
                       </div>
                    </div>
                    
                    <div>
                       <div className="flex justify-between text-xs mb-2">
                          <span className="text-white font-medium">Average Squad Age</span>
                          <span className="text-primary">26.4 → 25.8</span>
                       </div>
                       <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                          <div className="h-full bg-white w-[70%]" />
                          <div className="h-full bg-primary w-[15%]" />
                       </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                       <h5 className="text-xs font-bold mb-3">League Adaptation Risk</h5>
                       <div className="flex items-start gap-3 p-3 bg-black/40 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <p className="text-xs text-muted-foreground leading-relaxed">Player profile suggests fast adaptation to Premier League intensity based on pressing metrics in La Liga.</p>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </TabsContent>

        <TabsContent value="rumours" className="m-0">
           <Card className="glass-card bg-card/40 border-white/10">
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  {fullRumours.map((rumour, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-white/5 transition-colors gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-white">{rumour.player}</span>
                          <Badge variant={rumour.status === 'Hot' ? 'default' : 'secondary'} className={rumour.status === 'Hot' ? 'bg-red-500 text-white text-[10px]' : 'text-[10px]'}>
                            {rumour.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{rumour.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5 px-2 py-1 bg-black/40 rounded-md border border-white/10">{rumour.from}</span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span className="flex items-center gap-1.5 px-2 py-1 bg-black/40 rounded-md border border-white/10">{rumour.to}</span>
                        </div>
                      </div>
                      <div className="w-full sm:w-48">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Probability</span>
                          <span className="font-medium text-white">{rumour.probability}%</span>
                        </div>
                        <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${rumour.status === 'Hot' ? 'bg-red-500' : 'bg-primary'}`} style={{ width: `${rumour.probability}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="risers" className="m-0">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="glass-card bg-card/40 border-white/10">
                <CardHeader className="pb-4 border-b border-white/5">
                  <CardTitle className="text-sm font-display uppercase tracking-wider text-green-400">Market Risers</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-white/5">
                     {[
                       { name: "L. Yamal", club: "Barcelona", shift: "+€20M" },
                       { name: "M. Jobi", club: "Leverkusen", shift: "+€15M" },
                       { name: "K. Mainoo", club: "Man Utd", shift: "+€12M" }
                     ].map(p => (
                       <div className="flex justify-between items-center p-4 hover:bg-white/5">
                         <div>
                           <div className="font-medium text-white">{p.name}</div>
                           <div className="text-xs text-muted-foreground">{p.club}</div>
                         </div>
                         <Badge className="bg-green-500/10 text-green-400 border-none">{p.shift}</Badge>
                       </div>
                     ))}
                   </div>
                </CardContent>
             </Card>
             <Card className="glass-card bg-card/40 border-white/10">
                <CardHeader className="pb-4 border-b border-white/5">
                  <CardTitle className="text-sm font-display uppercase tracking-wider text-red-400">Market Drops</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="divide-y divide-white/5">
                     {[
                       { name: "Antony", club: "Man Utd", shift: "-€15M" },
                       { name: "J. Sancho", club: "Man Utd", shift: "-€10M" },
                       { name: "João Félix", club: "Chelsea", shift: "-€8M" }
                     ].map(p => (
                       <div className="flex justify-between items-center p-4 hover:bg-white/5">
                         <div>
                           <div className="font-medium text-white">{p.name}</div>
                           <div className="text-xs text-muted-foreground">{p.club}</div>
                         </div>
                         <Badge className="bg-red-500/10 text-red-400 border-none">{p.shift}</Badge>
                       </div>
                     ))}
                   </div>
                </CardContent>
             </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
