import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users } from "lucide-react";

export default function MatchRooms() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-primary" /> Match Rooms
        </h1>
        <p className="text-muted-foreground">Live chat, polls, and instant reactions for big matches.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card bg-card/40 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
          <CardContent className="p-6">
             <div className="flex justify-between items-start mb-4">
                <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Users className="w-4 h-4" /> 12.4k
                </div>
             </div>
             <h2 className="text-2xl font-bold mb-2">Real Madrid vs Man City</h2>
             <p className="text-muted-foreground text-sm mb-4">Global tactical debate room. Hosted by BALDONTLIE.</p>
             
             <div className="flex gap-[-10px]">
               <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black" />
               <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-black -ml-2" />
               <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-black -ml-2" />
               <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-black -ml-2 flex items-center justify-center text-xs">+12k</div>
             </div>
          </CardContent>
        </Card>

        <Card className="glass-card bg-card/20 border-white/10 hover:border-white/30 transition-colors cursor-pointer">
          <CardContent className="p-6">
             <div className="flex justify-between items-start mb-4">
                <Badge variant="outline">Upcoming</Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Users className="w-4 h-4" /> 3.2k waiting
                </div>
             </div>
             <h2 className="text-2xl font-bold mb-2">Arsenal vs Barcelona</h2>
             <p className="text-muted-foreground text-sm mb-4">Women's Champions League Quarter-Final Watch Party.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { Badge } from "@/components/ui/badge";
