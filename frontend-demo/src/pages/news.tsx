import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings2, Heart, Share2, MessageCircle, Sparkles } from "lucide-react";

export default function SmartFeed() {
  const feedItems = [
    { type: "insight", title: "Tactical Alert: Bellingham's new role", content: "In the last 3 matches, Jude Bellingham has operated 15% higher up the pitch, resulting in a +0.4 xG increase per 90.", tags: ["Real Madrid", "J. Bellingham"], time: "2h ago" },
    { type: "news", title: "Kroos hints at extension", content: "Toni Kroos's camp suggests the midfielder is leaning towards signing a one-year extension.", tags: ["Real Madrid", "Transfers"], time: "4h ago" },
    { type: "woso", title: "Barcelona Femení break attendance record again", content: "Over 91,000 fans expected for the upcoming El Clásico at Camp Nou.", tags: ["FC Barcelona Femení", "Liga F"], time: "5h ago" },
    { type: "scout", title: "Rising Star: Lamine Yamal", content: "Your scout alert triggered: Yamal has surpassed 3.0 successful take-ons per 90.", tags: ["FC Barcelona", "Scout Alert"], time: "8h ago" }
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-20 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" /> Following Feed
          </h1>
          <p className="text-muted-foreground">Prototype personalized feed built from static football story cards and mock follow signals.</p>
        </div>
        <Button variant="outline" className="border-white/10 text-white">
          <Settings2 className="w-4 h-4 mr-2" /> Feed Settings
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
         <Badge className="bg-primary text-black hover:bg-primary/90 cursor-pointer">For You</Badge>
         <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Real Madrid</Badge>
         <Badge variant="outline" className="cursor-pointer hover:bg-white/5">J. Bellingham</Badge>
         <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Scout Alerts</Badge>
         <Badge variant="outline" className="cursor-pointer hover:bg-white/5">Women's Football</Badge>
      </div>

      <div className="space-y-6">
        {feedItems.map((item, idx) => (
          <Card key={idx} className="glass-card bg-card/40 border-white/10 overflow-hidden group">
            <CardContent className="p-6">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                     {item.tags.map(t => (
                        <Badge key={t} variant="secondary" className="bg-black/50 text-[10px] uppercase tracking-wider">{t}</Badge>
                     ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
               </div>
               
               <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h2>
               <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.content}</p>
               
               <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-400"><Heart className="w-4 h-4 mr-2" /> Like</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white"><MessageCircle className="w-4 h-4 mr-2" /> Discuss</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white ml-auto"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
