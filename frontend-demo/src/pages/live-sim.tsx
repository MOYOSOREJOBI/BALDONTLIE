import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Radio, PlayCircle, Activity, Volume2, Maximize2, TrendingUp, Clock, AlertTriangle, Share2, MessageCircle, BarChart3, ListOrdered } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MatchCenter() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [minute, setMinute] = useState(67);
  const [ballCarrier, setBallCarrier] = useState("V. Júnior");
  const [carrierNumber, setCarrierNumber] = useState(7);
  const [commentary, setCommentary] = useState("Vinícius picks it up wide left, isolates his fullback...");
  const [ballPos, setBallPos] = useState({ top: "61%", left: "66%" });
  const [homeScore, setHomeScore] = useState(2);

  // Mock real-time updates
  useEffect(() => {
    if (!isPlaying) return;
    
    const events = [
      { player: "V. Júnior", num: 7, pos: { top: "60%", left: "65%" }, text: "Vinícius picks it up wide left, isolates his fullback..." },
      { player: "J. Bellingham", num: 5, pos: { top: "50%", left: "70%" }, text: "Inside to Bellingham, he turns beautifully in the pocket." },
      { player: "M. Jobi", num: 10, pos: { top: "30%", left: "80%" }, text: "Jobi makes the overlapping run, receiving it in stride!" },
      { player: "M. Jobi", num: 10, pos: { top: "35%", left: "85%" }, text: "He squares it across the face of goal!" },
      { player: "K. Mbappé", num: 9, pos: { top: "45%", left: "95%" }, text: "MBAPPÉ IS THERE! IT'S IN! REAL MADRID SCORE!" },
      { player: "E. Camavinga", num: 12, pos: { top: "55%", left: "50%" }, text: "Madrid reset in the middle, Camavinga controls." }
    ];

    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % events.length;
      setBallCarrier(events[i].player);
      setCarrierNumber(events[i].num);
      setCommentary(events[i].text);
      
      // Move ball near the player
      setBallPos({ 
        top: `calc(${events[i].pos.top} + 2%)`, 
        left: `calc(${events[i].pos.left} + 2%)` 
      });

      if (events[i].text.includes("IT'S IN")) {
         setHomeScore(prev => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex h-full flex-col space-y-4 p-4 pb-24 sm:p-6 lg:p-8">
      <div className="rounded-2xl border border-primary/20 bg-primary/6 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <div className="text-sm font-semibold text-white">Match flow demo</div>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              This route is a simulated match-center concept. Commentary, momentum, and on-pitch actions are mock frontend sequences, not a real live feed.
            </p>
          </div>
        </div>
      </div>

      {/* Top Strip */}
      <Card className="glass-card bg-card/40 border-white/10 shrink-0">
        <CardContent className="flex flex-col gap-4 p-4 xl:flex-row xl:items-center xl:justify-between">
           <div className="flex w-full items-center justify-between gap-4 xl:w-auto xl:justify-start xl:gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" className="w-full h-full object-contain" alt="RMA" />
                 </div>
                 <div className="text-sm font-display font-bold text-white md:hidden">RMA</div>
                 <h2 className="text-xl font-display font-bold hidden lg:block">Real Madrid</h2>
              </div>
              <div className="flex flex-col items-center px-4">
                 <div className="text-primary text-xs font-bold mb-1 flex justify-center items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> {minute}' • demo sequence
                 </div>
                 <div className="text-3xl font-display font-bold tracking-tighter">
                    {homeScore} - 1
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <h2 className="text-xl font-display font-bold hidden lg:block">Man City</h2>
                 <div className="text-sm font-display font-bold text-white md:hidden">MCI</div>
                 <div className="w-10 h-10 bg-black rounded-full border border-white/20 flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png" className="w-full h-full object-contain" alt="MCI" />
                 </div>
              </div>
           </div>
           
           <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between xl:w-auto xl:justify-end xl:gap-6">
              <div className="hidden xl:flex flex-col items-end border-r border-white/10 pr-6">
                 <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Win Probability</span>
                 <div className="flex items-center gap-2 text-sm mt-1">
                   <span className="text-white">RMA 82%</span>
                   <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden flex">
                     <div className="bg-white w-[82%] h-full" />
                   </div>
                 </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                 <Button variant="outline" size="sm" className="border-primary/50 text-primary bg-primary/10">
                   <Radio className="w-3 h-3 mr-2 animate-pulse" /> Audio Demo
                 </Button>
                 <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   <PlayCircle className="w-3 h-3 mr-2" /> Replay View
                 </Button>
                 <Button variant="ghost" size="icon" className="text-muted-foreground"><AlertTriangle className="w-4 h-4" /></Button>
              </div>
           </div>
        </CardContent>
      </Card>

      <div className="grid flex-1 min-h-[420px] grid-cols-1 gap-4 lg:min-h-[500px] lg:grid-cols-12">
        {/* Center: Pitch & Visualizations */}
        <Card className="glass-card bg-card/40 lg:col-span-8 overflow-hidden border-white/10 flex flex-col relative">
          <CardHeader className="p-3 border-b border-white/5 bg-black/40 flex flex-row items-center justify-between shrink-0">
            <CardTitle className="text-sm font-display flex items-center gap-2 text-white">
              <Activity className="w-4 h-4 text-primary" /> Tactical 2D View
            </CardTitle>
            <div className="flex gap-2">
               <Badge variant="outline" className="bg-black/50 text-[10px]">Champions League</Badge>
               <Maximize2 className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-white transition-colors" />
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 relative bg-[#1a3822] overflow-hidden">
            {/* The Pitch */}
            <div className="absolute inset-4 border-2 border-white/30 rounded overflow-hidden">
              {/* Pitch pattern lines */}
              <div className="absolute inset-0 opacity-10 flex flex-col justify-between">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-[10%] w-full bg-white/20 even:bg-transparent" />
                ))}
              </div>

              {/* Halfway Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/40 -translate-x-1/2" />
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/60 rounded-full -translate-x-1/2 -translate-y-1/2" />
              
              {/* Penalty Areas */}
              <div className="absolute top-1/4 bottom-1/4 left-0 w-32 border-2 border-l-0 border-white/40" />
              <div className="absolute top-[35%] bottom-[35%] left-0 w-12 border-2 border-l-0 border-white/40" />
              <div className="absolute top-1/2 left-24 w-1.5 h-1.5 bg-white/60 rounded-full -translate-y-1/2" />

              <div className="absolute top-1/4 bottom-1/4 right-0 w-32 border-2 border-r-0 border-white/40" />
              <div className="absolute top-[35%] bottom-[35%] right-0 w-12 border-2 border-r-0 border-white/40" />
              <div className="absolute top-1/2 right-24 w-1.5 h-1.5 bg-white/60 rounded-full -translate-y-1/2" />

              {/* Real Madrid Players (White) */}
              <div className="absolute top-[60%] left-[65%] w-6 h-6 bg-white rounded-full border-[2px] border-blue-600 transition-all duration-1000 flex items-center justify-center text-[10px] text-black font-bold z-10">7</div>
              <div className="absolute top-[45%] left-[85%] w-6 h-6 bg-white rounded-full border-[2px] border-blue-600 transition-all duration-1000 flex items-center justify-center text-[10px] text-black font-bold z-10">9</div>
              <div className="absolute top-[30%] left-[70%] w-6 h-6 bg-white rounded-full border-[2px] border-blue-600 transition-all duration-1000 flex items-center justify-center text-[10px] text-black font-bold z-10">10</div>
              <div className="absolute top-[50%] left-[60%] w-6 h-6 bg-white rounded-full border-[2px] border-blue-600 transition-all duration-1000 flex items-center justify-center text-[10px] text-black font-bold z-10">5</div>
              <div className="absolute top-[55%] left-[40%] w-6 h-6 bg-white rounded-full border-[2px] border-blue-600 transition-all duration-1000 flex items-center justify-center text-[10px] text-black font-bold z-10">12</div>
              
              {/* Man City Players (Blue) */}
              <div className="absolute top-[55%] left-[68%] w-6 h-6 bg-blue-500 rounded-full border-[2px] border-white transition-all duration-1000 flex items-center justify-center text-[10px] text-white font-bold z-10">4</div>
              <div className="absolute top-[45%] left-[75%] w-6 h-6 bg-blue-500 rounded-full border-[2px] border-white transition-all duration-1000 flex items-center justify-center text-[10px] text-white font-bold z-10">16</div>
              <div className="absolute top-[40%] left-[80%] w-6 h-6 bg-blue-500 rounded-full border-[2px] border-white transition-all duration-1000 flex items-center justify-center text-[10px] text-white font-bold z-10">3</div>
              <div className="absolute top-[65%] left-[60%] w-6 h-6 bg-blue-500 rounded-full border-[2px] border-white transition-all duration-1000 flex items-center justify-center text-[10px] text-white font-bold z-10">8</div>

              {/* The Ball */}
              <div 
                className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,179,8,1)] transition-all duration-[800ms] ease-out z-20" 
                style={{ top: ballPos.top, left: ballPos.left }}
              />
            </div>
            
            {/* Bottom In Possession Strip */}
            <div className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none flex justify-center">
               <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md p-1.5 px-4 rounded-full border border-white/20 shadow-2xl">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-bold text-black text-sm">
                    {carrierNumber}
                  </div>
                  <div>
                    <div className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">In Possession</div>
                    <div className="text-sm font-display font-bold text-white leading-none">{ballCarrier}</div>
                  </div>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Rail: Tabs */}
        <Card className="glass-card bg-card/40 border-white/10 lg:col-span-4 flex flex-col">
          <Tabs defaultValue="comm" className="w-full h-full flex flex-col">
            <CardHeader className="p-3 border-b border-white/5 bg-black/20 pb-0 shrink-0">
               <TabsList className="w-full flex h-auto bg-transparent mb-2 gap-1 overflow-x-auto hide-scrollbar">
                  <TabsTrigger value="comm" className="text-[11px] px-3 py-1.5 data-[state=active]:bg-primary/20 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/30 rounded-full">Feed</TabsTrigger>
                  <TabsTrigger value="stats" className="text-[11px] px-3 py-1.5 data-[state=active]:bg-white/10 rounded-full">Stats</TabsTrigger>
                  <TabsTrigger value="lineups" className="text-[11px] px-3 py-1.5 data-[state=active]:bg-white/10 rounded-full">Lineups</TabsTrigger>
                  <TabsTrigger value="insights" className="text-[11px] px-3 py-1.5 data-[state=active]:bg-white/10 rounded-full">Insights</TabsTrigger>
               </TabsList>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto custom-scrollbar relative">
               <TabsContent value="comm" className="m-0 p-4 space-y-4">
                  {/* Radio Block */}
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl relative overflow-hidden">
                     <div className="absolute right-0 top-0 w-24 h-24 bg-primary/20 rounded-full blur-[20px]" />
                     <div className="flex items-center gap-2 mb-2 text-primary font-bold text-[10px] uppercase tracking-wider">
                       <Volume2 className="w-3 h-3 animate-pulse" /> Simulated Match Feed
                     </div>
                     <p className="text-white text-base font-medium leading-tight relative z-10 transition-all duration-300">"{commentary}"</p>
                  </div>
                  
                  {/* Timeline */}
                  <div className="space-y-4 pt-2">
                     <div className="flex gap-3 text-sm opacity-60 hover:opacity-100 transition-opacity">
                       <span className="font-bold text-white w-6 shrink-0">65'</span>
                       <span className="text-muted-foreground leading-tight">City stringing passes together in midfield, trying to take the sting out of the game.</span>
                     </div>
                     <div className="flex gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                       <span className="font-bold text-white w-6 shrink-0">63'</span>
                       <span className="text-white leading-tight">Foden's shot is blocked brilliantly by Rüdiger! Corner to City.</span>
                     </div>
                     <div className="flex gap-3 text-sm opacity-60 hover:opacity-100 transition-opacity">
                       <span className="font-bold text-white w-6 shrink-0">60'</span>
                       <span className="text-muted-foreground leading-tight">Substitution: Modric replaces Kroos.</span>
                     </div>
                     <div className="flex gap-3 text-sm text-yellow-500 font-medium bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
                       <span className="font-bold w-6 shrink-0">54'</span>
                       <span className="leading-tight">GOAL! Haaland slots it away for City! 1-1.</span>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="stats" className="m-0 p-4 space-y-5">
                  <div className="space-y-1.5">
                     <div className="flex justify-between text-xs font-medium"><span className="text-white">58%</span><span className="text-muted-foreground uppercase tracking-wider text-[10px]">Possession</span><span className="text-blue-400">42%</span></div>
                     <div className="w-full h-2 rounded-full bg-blue-500/20 overflow-hidden flex">
                        <div className="bg-white h-full w-[58%]" />
                        <div className="bg-blue-500 h-full w-[42%]" />
                     </div>
                  </div>
                  <div className="space-y-1.5">
                     <div className="flex justify-between text-xs font-medium"><span className="text-white">14</span><span className="text-muted-foreground uppercase tracking-wider text-[10px]">Shots</span><span className="text-blue-400">8</span></div>
                     <div className="w-full h-2 rounded-full bg-blue-500/20 overflow-hidden flex">
                        <div className="bg-white h-full w-[63%]" />
                        <div className="bg-blue-500 h-full w-[37%]" />
                     </div>
                  </div>
                  <div className="space-y-1.5">
                     <div className="flex justify-between text-xs font-medium"><span className="text-white">2.4</span><span className="text-muted-foreground uppercase tracking-wider text-[10px]">Expected Goals (xG)</span><span className="text-blue-400">1.1</span></div>
                     <div className="w-full h-2 rounded-full bg-blue-500/20 overflow-hidden flex">
                        <div className="bg-white h-full w-[68%]" />
                        <div className="bg-blue-500 h-full w-[32%]" />
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="insights" className="m-0 p-4 space-y-4">
                  <div className="p-3 border border-white/10 rounded-lg bg-black/40">
                     <h4 className="text-xs font-bold text-primary mb-1 uppercase">Tactical Shift Detected</h4>
                     <p className="text-xs text-muted-foreground">Real Madrid has dropped into a mid-block, reducing pressing intensity by 15% in the last 5 mins.</p>
                  </div>
                  <div className="p-3 border border-white/10 rounded-lg bg-black/40">
                     <h4 className="text-xs font-bold text-primary mb-1 uppercase">Key Matchup</h4>
                     <p className="text-xs text-muted-foreground">M. Jobi has successfully bypassed Rodri 4 times in the central channel.</p>
                  </div>
               </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      {/* Bottom Rail: Storyline & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 shrink-0">
         <Card className="glass-card bg-card/40 border-white/10 lg:col-span-2">
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
               <div className="flex items-center gap-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Current Game State</div>
                    <div className="text-sm font-bold text-white">Madrid Transition Phase</div>
                  </div>
               </div>
               <div className="h-8 w-full max-w-[12rem] rounded border border-white/10 bg-white/5 relative overflow-hidden">
                  {/* Mini momentum chart */}
                  <div className="absolute inset-0 flex items-end opacity-50">
                     <div className="w-1/6 h-[30%] bg-blue-500" />
                     <div className="w-1/6 h-[60%] bg-blue-500" />
                     <div className="w-1/6 h-[40%] bg-white" />
                     <div className="w-1/6 h-[80%] bg-white" />
                     <div className="w-1/6 h-[90%] bg-white" />
                     <div className="w-1/6 h-[50%] bg-white" />
                  </div>
               </div>
            </CardContent>
         </Card>
         <Card className="glass-card bg-card/40 border-white/10 p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" size="sm" className="w-full text-xs"><MessageCircle className="w-3 h-3 mr-2"/> Open Demo Chat</Button>
              <Button variant="outline" size="sm" className="w-full text-xs"><Share2 className="w-3 h-3 mr-2"/> Share Card</Button>
            </div>
         </Card>
      </div>
    </div>
  );
}
