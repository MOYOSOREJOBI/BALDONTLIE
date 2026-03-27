import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dices, TrendingUp, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OddsPage() {
  const matchOdds = [
    { match: "Real Madrid vs Man City", 1: "2.80", X: "3.50", 2: "2.40", comp: "UCL" },
    { match: "Arsenal vs Bayern Munich", 1: "2.10", X: "3.40", 2: "3.20", comp: "UCL" },
    { match: "Liverpool vs Man United", 1: "1.95", X: "3.80", 2: "3.60", comp: "EPL" },
    { match: "Barcelona vs PSG", 1: "2.50", X: "3.20", 2: "2.80", comp: "UCL" },
    { match: "Inter vs Juventus", 1: "2.10", X: "3.10", 2: "3.80", comp: "Serie A" },
    { match: "Bayern Munich vs Dortmund", 1: "1.60", X: "4.50", 2: "5.50", comp: "BUN" },
    { match: "AC Milan vs Napoli", 1: "2.30", X: "3.30", 2: "3.10", comp: "Serie A" },
    { match: "Chelsea vs Tottenham", 1: "2.40", X: "3.40", 2: "2.80", comp: "EPL" },
    { match: "Aston Villa vs Newcastle", 1: "2.50", X: "3.50", 2: "2.60", comp: "EPL" },
    { match: "Girona vs Atl. Madrid", 1: "2.70", X: "3.20", 2: "2.60", comp: "La Liga" },
    { match: "Leverkusen vs Stuttgart", 1: "1.80", X: "3.80", 2: "4.20", comp: "BUN" },
    { match: "Roma vs Lazio", 1: "2.20", X: "3.20", 2: "3.40", comp: "Serie A" },
    { match: "Man City vs Arsenal", 1: "2.05", X: "3.60", 2: "3.50", comp: "EPL" },
    { match: "Real Madrid vs Barcelona", 1: "2.10", X: "3.60", 2: "3.20", comp: "La Liga" },
    { match: "Juventus vs AC Milan", 1: "2.40", X: "3.10", 2: "3.20", comp: "Serie A" },
    { match: "PSG vs Marseille", 1: "1.45", X: "4.80", 2: "6.50", comp: "LIG1" },
    { match: "Boca Juniors vs River Plate", 1: "2.30", X: "3.10", 2: "3.40", comp: "ARG" },
    { match: "Flamengo vs Racing Club", 1: "2.10", X: "3.30", 2: "3.60", comp: "LIB" },
  ];

  const fullMatchOdds = [...matchOdds, ...matchOdds, ...matchOdds];

  const transferOdds = [
    { player: "K. Mbappé", target: "Real Madrid", odds: "1.05", status: "Done Deal" },
    { player: "M. Jobi", target: "Bayern Munich", odds: "2.50", status: "Active" },
    { player: "V. Osimhen", target: "Arsenal", odds: "4.00", status: "Rumour" },
    { player: "J. Kimmich", target: "Man City", odds: "3.50", status: "Active" },
    { player: "R. Leão", target: "PSG", odds: "5.00", status: "Rumour" },
    { player: "K. Kvaratskhelia", target: "Barcelona", odds: "6.50", status: "Cold" },
    { player: "B. Silva", target: "Barcelona", odds: "4.50", status: "Rumour" },
    { player: "M. Rashford", target: "PSG", odds: "7.00", status: "Cold" },
    { player: "A. Davies", target: "Real Madrid", odds: "1.50", status: "Active" },
    { player: "M. Olise", target: "Man Utd", odds: "5.50", status: "Rumour" },
    { player: "D. Raum", target: "Liverpool", odds: "8.00", status: "Cold" },
    { player: "A. Bastoni", target: "Real Madrid", odds: "6.00", status: "Rumour" },
    { player: "P. Pogba", target: "LA Galaxy", odds: "3.00", status: "Active" },
  ];

  const fullTransferOdds = [...transferOdds, ...transferOdds, ...transferOdds, ...transferOdds];

  const managerOdds = [
    { name: "Erik ten Hag", club: "Man Utd", odds: "1.80", status: "Under Pressure" },
    { name: "Mauricio Pochettino", club: "Chelsea", odds: "3.50", status: "Uncertain" },
    { name: "Vincent Kompany", club: "Bayern", odds: "12.00", status: "Safe" },
    { name: "Eddie Howe", club: "Newcastle", odds: "8.00", status: "Safe" },
    { name: "Ange Postecoglou", club: "Tottenham", odds: "15.00", status: "Safe" },
    { name: "Max Allegri", club: "Juventus", odds: "2.50", status: "Under Pressure" },
    { name: "Xavi", club: "Barcelona", odds: "1.05", status: "Leaving" },
    { name: "Thomas Tuchel", club: "Bayern", odds: "1.05", status: "Leaving" },
    { name: "Diego Simeone", club: "Atl. Madrid", odds: "25.00", status: "Safe" },
  ];

  const fullManagerOdds = [...managerOdds, ...managerOdds, ...managerOdds, ...managerOdds];

  const liveMatches = [
    { time: "FT", comp: "UCL", home: "RMA", away: "MCI", homeScore: 2, awayScore: 1, homeProb: "46.0%", drawProb: "26.7%", awayProb: "27.4%", homeColor: "bg-white", awayColor: "bg-blue-300" },
    { time: "FT", comp: "UCL", home: "ARS", away: "BAY", homeScore: 2, awayScore: 0, homeProb: "43.8%", drawProb: "26.8%", awayProb: "29.4%", homeColor: "bg-red-600", awayColor: "bg-red-500" },
    { time: "FT", comp: "EPL", home: "LIV", away: "MUN", homeScore: 0, awayScore: 1, homeProb: "28.5%", drawProb: "25.4%", awayProb: "46.1%", homeColor: "bg-red-600", awayColor: "bg-red-600" },
    { time: "FT", comp: "UCL", home: "BAR", away: "PSG", homeScore: 3, awayScore: 0, homeProb: "32.1%", drawProb: "28.5%", awayProb: "39.4%", homeColor: "bg-red-800", awayColor: "bg-blue-800" },
    { time: "FT", comp: "SERIE A", home: "INT", away: "JUV", homeScore: 1, awayScore: 3, homeProb: "45.2%", drawProb: "22.1%", awayProb: "32.7%", homeColor: "bg-blue-600", awayColor: "bg-white" },
    { time: "FT", comp: "BUNDESLIGA", home: "BAY", away: "DOR", homeScore: 0, awayScore: 1, homeProb: "85.4%", drawProb: "10.2%", awayProb: "4.4%", homeColor: "bg-red-500", awayColor: "bg-yellow-400" },
    { time: "Mar 3 @ 12:30 PM", comp: "SERIE A", home: "MIL", away: "NAP", homeScore: null, awayScore: null, homeProb: "44.6%", drawProb: "26.9%", awayProb: "28.6%", homeColor: "bg-red-600", awayColor: "bg-blue-400" },
    { time: "Mar 3 @ 12:30 PM", comp: "EPL", home: "CHE", away: "TOT", homeScore: null, awayScore: null, homeProb: "63.3%", drawProb: "19.5%", awayProb: "17.2%", homeColor: "bg-blue-600", awayColor: "bg-white" },
    { time: "Mar 3 @ 12:45 PM", comp: "EPL", home: "AVL", away: "NEW", homeScore: null, awayScore: null, homeProb: "48.9%", drawProb: "21.3%", awayProb: "19.6%", homeColor: "bg-purple-800", awayColor: "bg-black" },
    { time: "Mar 3 @ 12:45 PM", comp: "LA LIGA", home: "GIR", away: "ATM", homeScore: null, awayScore: null, homeProb: "20.4%", drawProb: "20.5%", awayProb: "59.1%", homeColor: "bg-red-500", awayColor: "bg-red-600" },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Dices className="w-8 h-8 text-primary" /> Prediction Markets
        </h1>
        <p className="text-muted-foreground">Live odds across match outcomes, transfers, and manager sackings.</p>
      </div>

      {/* Live Match Odds Ticker */}
      <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar -mx-6 px-6 lg:-mx-8 lg:px-8">
        {liveMatches.map((match, i) => (
          <div key={i} className="shrink-0 w-[240px] glass-card bg-card/40 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-[0_0_15px_rgba(118,255,3,0.15)] transition-all duration-300">
            <div className="bg-black/40 text-muted-foreground text-[10px] font-bold px-3 py-2 flex justify-between items-center border-b border-white/5">
              <span className="text-primary uppercase tracking-wider">{match.comp}</span>
              <span>{match.time}</span>
            </div>
            <div className="flex h-[64px]">
              {/* Left Column (Teams & Scores/Probs) */}
              <div className="flex-1 flex flex-col justify-center px-4 py-2 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${match.homeColor} ${match.homeColor.includes('white') ? 'border border-white/20' : ''} flex shrink-0`}></div>
                    <span className="font-display font-bold text-[13px] text-white truncate max-w-[60px]">{match.home}</span>
                  </div>
                  {match.homeScore !== null ? (
                    <span className="font-bold text-[14px] text-white bg-white/10 px-2 py-0.5 rounded-md">{match.homeScore}</span>
                  ) : (
                    <span className="text-[12px] font-bold text-primary">{match.homeProb}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${match.awayColor} ${match.awayColor.includes('white') ? 'border border-white/20' : ''} flex shrink-0`}></div>
                    <span className="font-display font-bold text-[13px] text-white truncate max-w-[60px]">{match.away}</span>
                  </div>
                  {match.awayScore !== null ? (
                    <span className="font-bold text-[14px] text-white bg-white/10 px-2 py-0.5 rounded-md">{match.awayScore}</span>
                  ) : (
                    <span className="text-[12px] font-bold text-blue-400">{match.awayProb}</span>
                  )}
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent h-full shrink-0"></div>

              {/* Right Column (FT or Draw Prob) */}
              <div className="w-[56px] flex flex-col items-center justify-center shrink-0 bg-black/20">
                {match.homeScore !== null ? (
                  <span className="text-[12px] font-bold text-primary uppercase tracking-widest">FT</span>
                ) : (
                  <>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Draw</span>
                    <span className="font-bold text-[13px] text-white">{match.drawProb}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="transfers" className="w-full">
        <TabsList className="bg-card/50 border border-white/5 mb-6">
          <TabsTrigger value="transfers">Transfer Markets</TabsTrigger>
          <TabsTrigger value="predictions">Event Predictions</TabsTrigger>
          <TabsTrigger value="managers">Manager Sack Race</TabsTrigger>
          <TabsTrigger value="matches">Match Odds</TabsTrigger>
        </TabsList>

        <TabsContent value="transfers" className="h-[800px] overflow-y-auto custom-scrollbar pr-2">
           <Card className="glass-card bg-card/40 pb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Summer Transfer Odds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fullTransferOdds.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-background/50 border border-border rounded-xl">
                    <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                      <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-bold">
                        {item.player.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{item.player}</div>
                        <div className="text-sm text-muted-foreground">Next Club: <span className="text-foreground">{item.target}</span></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <Badge variant="outline" className={item.status === 'Done Deal' ? 'border-primary text-primary' : item.status === 'Active' ? 'border-yellow-500 text-yellow-500' : ''}>
                        {item.status}
                      </Badge>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg cursor-pointer hover:bg-primary/90">
                        {item.odds}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="predictions" className="h-[800px] overflow-y-auto custom-scrollbar pr-2">
           <Card className="glass-card bg-card/40 pb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Event Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">Champions League Winner</div>
                    <div className="text-xl font-bold text-white mb-3">Real Madrid</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Probability</span>
                      <span className="text-primary font-bold">34%</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary h-full w-[34%]" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">Premier League Winner</div>
                    <div className="text-xl font-bold text-white mb-3">Man City</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Probability</span>
                      <span className="text-primary font-bold">58%</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary h-full w-[58%]" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">Ballon d'Or Winner</div>
                    <div className="text-xl font-bold text-white mb-3">Jude Bellingham</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Probability</span>
                      <span className="text-primary font-bold">42%</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary h-full w-[42%]" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">European Golden Shoe</div>
                    <div className="text-xl font-bold text-white mb-3">Harry Kane</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Probability</span>
                      <span className="text-primary font-bold">61%</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary h-full w-[61%]" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="managers" className="h-[800px] overflow-y-auto custom-scrollbar pr-2">
           <Card className="glass-card bg-card/40 pb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Next Manager to Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fullManagerOdds.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-background/50 border border-border rounded-xl">
                    <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                      <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.club}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <Badge variant="outline" className={item.status === 'Under Pressure' ? 'border-red-500 text-red-500' : item.status === 'Leaving' ? 'border-purple-500 text-purple-500' : item.status === 'Uncertain' ? 'border-yellow-500 text-yellow-500' : ''}>
                        {item.status}
                      </Badge>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg cursor-pointer hover:bg-primary/90">
                        {item.odds}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="matches" className="space-y-6 h-[800px] overflow-y-auto custom-scrollbar pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {fullMatchOdds.map((match, idx) => (
              <Card key={idx} className="glass-card bg-card/40 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                    <Badge variant="outline">{match.comp}</Badge>
                    <span>Today, 20:00</span>
                  </div>
                  <CardTitle className="text-lg font-display leading-tight">{match.match.split(' vs ')[0]} <br/> <span className="text-muted-foreground text-sm">vs</span> <br/> {match.match.split(' vs ')[1]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-background border border-border rounded-lg p-2 text-center cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <div className="text-[10px] text-muted-foreground mb-1">1 (Home)</div>
                      <div className="font-bold">{match[1]}</div>
                    </div>
                    <div className="bg-background border border-border rounded-lg p-2 text-center cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <div className="text-[10px] text-muted-foreground mb-1">X (Draw)</div>
                      <div className="font-bold">{match.X}</div>
                    </div>
                    <div className="bg-background border border-border rounded-lg p-2 text-center cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <div className="text-[10px] text-muted-foreground mb-1">2 (Away)</div>
                      <div className="font-bold">{match[2]}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}