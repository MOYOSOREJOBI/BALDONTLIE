import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Star, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function Rankings() {
  const topPlayers = [
    { id: "p2", name: "Erling Haaland", club: "Manchester City", league: "Premier League", overall: 91, trend: 'UP', initials: 'E' },
    { id: "p1", name: "Jude Bellingham", club: "Real Madrid", league: "La Liga", overall: 90, trend: 'UP', initials: 'J' },
    { id: "p4", name: "Moyosore Jobi", club: "Bayer Leverkusen", league: "Bundesliga", overall: 87, trend: 'UP', initials: 'M' },
    { id: "p3", name: "Vinícius Júnior", club: "Real Madrid", league: "La Liga", overall: 90, trend: 'UP', initials: 'V' },
    { id: "p5", name: "Kylian Mbappé", club: "PSG", league: "Ligue 1", overall: 89, trend: 'STABLE', initials: 'K' },
    { id: "p6", name: "Harry Kane", club: "Bayern Munich", league: "Bundesliga", overall: 89, trend: 'UP', initials: 'H' },
    { id: "p7", name: "Rodri", club: "Manchester City", league: "Premier League", overall: 88, trend: 'STABLE', initials: 'R' },
    { id: "p8", name: "Kevin De Bruyne", club: "Manchester City", league: "Premier League", overall: 88, trend: 'DOWN', initials: 'K' },
    { id: "p9", name: "Lamine Yamal", club: "Barcelona", league: "La Liga", overall: 84, trend: 'UP', initials: 'L' },
    { id: "p10", name: "Kobbie Mainoo", club: "Manchester United", league: "Premier League", overall: 81, trend: 'UP', initials: 'K' },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-500" /> Global Power Rankings
        </h1>
        <p className="text-muted-foreground">The definitive list of top performers based on the Intelligence Index.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {topPlayers.map((player, index) => (
          <div key={player.id} className={`flex items-center gap-4 p-4 rounded-xl bg-card/40 border hover:border-primary/50 transition-all group relative overflow-hidden glass-card ${
            index === 0 ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)]' :
            index === 1 ? 'border-[#C0C0C0]/50 shadow-[0_0_30px_rgba(192,192,192,0.15)]' :
            index === 2 ? 'border-[#CD7F32]/50 shadow-[0_0_30px_rgba(205,127,50,0.15)]' :
            'border-white/5'
          }`}>
            {index === 0 && <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />}
            {index === 1 && <div className="absolute top-0 right-0 w-48 h-48 bg-[#C0C0C0]/10 rounded-full blur-[50px] pointer-events-none" />}
            {index === 2 && <div className="absolute top-0 right-0 w-48 h-48 bg-[#CD7F32]/10 rounded-full blur-[50px] pointer-events-none" />}
            
            {/* Rank Number */}
            <div className={`w-12 text-center font-display font-bold text-3xl ${
              index === 0 ? 'text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' : 
              index === 1 ? 'text-[#C0C0C0] drop-shadow-[0_0_8px_rgba(192,192,192,0.8)]' : 
              index === 2 ? 'text-[#CD7F32] drop-shadow-[0_0_8px_rgba(205,127,50,0.8)]' : 
              'text-muted-foreground'
            }`}>
              #{index + 1}
            </div>

            {/* Avatar with Extremely Prominent Custom Rings for Top 3 */}
            <div className="relative shrink-0 ml-2 mr-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-2xl z-10 relative bg-background/80 backdrop-blur-sm ${
                index === 0 ? 'text-yellow-500' : 
                index === 1 ? 'text-[#C0C0C0]' : 
                index === 2 ? 'text-[#CD7F32]' : 
                'text-white'
              }`}>
                {player.initials}
              </div>
              
              {/* Outer glowing rings */}
              {index === 0 && <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-600 animate-[spin_4s_linear_infinite] opacity-80" />}
              {index === 1 && <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-slate-400 via-slate-100 to-slate-400 animate-[spin_4s_linear_infinite] opacity-80" />}
              {index === 2 && <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#8B4513] via-[#CD7F32] to-[#8B4513] animate-[spin_4s_linear_infinite] opacity-80" />}
              
              {/* Inner dark cover so just the ring shows */}
              {(index <= 2) && <div className="absolute inset-[0px] rounded-full bg-background z-0" />}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 pl-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors truncate">{player.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{player.club} • {player.league}</p>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-8 mr-6">
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Trend</div>
                <div className={`font-semibold flex items-center justify-center ${
                  player.trend === 'UP' ? 'text-primary' : 
                  player.trend === 'DOWN' ? 'text-red-500' : 
                  'text-muted-foreground'
                }`}>
                   {player.trend === 'UP' && <TrendingUp className="w-4 h-4 mr-1" />}
                   {player.trend === 'DOWN' && <TrendingDown className="w-4 h-4 mr-1" />}
                   {player.trend === 'STABLE' && <Minus className="w-4 h-4 mr-1" />}
                   {player.trend}
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <div className={`w-20 h-16 rounded-lg bg-background/80 flex flex-col items-center justify-center border shrink-0 ${
               index === 0 ? 'border-yellow-500/50 bg-yellow-500/10' : 
               index === 1 ? 'border-[#C0C0C0]/50 bg-slate-300/10' : 
               index === 2 ? 'border-[#CD7F32]/50 bg-amber-600/10' : 'border-border'
            }`}>
              <span className="text-[10px] uppercase text-muted-foreground font-semibold mb-0.5">Index</span>
              <span className={`font-display font-bold text-2xl ${
                index === 0 ? 'text-yellow-500' : 
                index === 1 ? 'text-[#C0C0C0]' : 
                index === 2 ? 'text-[#CD7F32]' : 'text-white'
              }`}>{player.overall}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}