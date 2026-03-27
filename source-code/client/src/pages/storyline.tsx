import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, TrendingUp } from "lucide-react";

export default function MatchStoryline() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Activity className="w-8 h-8 text-primary" /> Match Storyline
        </h1>
        <p className="text-muted-foreground">Momentum swings, xG timelines, and tactical shifts.</p>
      </div>

      <Card className="glass-card bg-card/40 border-primary/20">
        <CardContent className="p-8">
           <div className="h-64 relative border-b border-l border-white/20 mb-8">
              {/* Mock Chart Area */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 border-dashed" />
              
              {/* Bars */}
              <div className="absolute bottom-1/2 left-[10%] w-4 h-[20%] bg-blue-500/50" />
              <div className="absolute bottom-1/2 left-[20%] w-4 h-[40%] bg-blue-500/80" />
              <div className="absolute bottom-1/2 left-[30%] w-4 h-[10%] bg-blue-500/30" />
              
              <div className="absolute top-1/2 left-[40%] w-4 h-[30%] bg-white/80" />
              <div className="absolute top-1/2 left-[50%] w-4 h-[50%] bg-white/100" />
              
              <div className="absolute bottom-1/2 left-[70%] w-4 h-[60%] bg-blue-500/100" />
              <div className="absolute bottom-1/2 left-[80%] w-4 h-[20%] bg-blue-500/40" />

              <div className="absolute bottom-[-24px] w-full flex justify-between text-xs text-muted-foreground">
                <span>0'</span>
                <span>15'</span>
                <span>30'</span>
                <span>45'</span>
                <span>60'</span>
                <span>75'</span>
                <span>90'</span>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Key Tactical Shifts</h3>
              
              <div className="pl-4 border-l-2 border-white/10 relative">
                 <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                 <div className="text-sm font-bold text-white">45' - Half Time Switch</div>
                 <div className="text-sm text-muted-foreground">Real Madrid switches from 4-3-3 to 4-2-3-1, pushing Vinicius higher up the pitch. Resulted in +0.8 xG swing in the next 15 minutes.</div>
              </div>

              <div className="pl-4 border-l-2 border-white/10 relative">
                 <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500" />
                 <div className="text-sm font-bold text-white">65' - City Response</div>
                 <div className="text-sm text-muted-foreground">Pep introduces Doku for Grealish. City establishes control with 68% possession over a 10-minute "Siege" phase.</div>
              </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
