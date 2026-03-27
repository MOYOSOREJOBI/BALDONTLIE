import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, Users, Hash, Plus, Mic, Video, PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SocialPage() {
  const groups = [
    { name: "Scout Network Alpha", members: 124, unread: 5, topic: "Main Network", type: "chat", icon: Hash },
    { name: "Live Chat of Games", members: 4500, unread: 12, topic: "Madrid vs City", type: "chat", icon: MessageCircle },
    { name: "Audio Spaces", members: 320, unread: 0, topic: "Transfer Rumours", type: "audio", icon: Mic },
    { name: "Watch Alongs & Lives", members: 1250, unread: 0, topic: "UCL Quarterfinals", type: "watch", icon: Video },
  ];

  const friends = [
    { name: "Alex Ferguson (Not that one)", status: "online", role: "Analyst", story: true },
    { name: "Sarah M.", status: "offline", role: "Scout", story: false },
    { name: "Jamie Carragher", status: "online", role: "Pundit", story: true },
    { name: "Fabrizio Romano", status: "online", role: "Journalist", story: true },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6 h-[calc(100vh-4rem)] flex flex-col pb-20">
      <div className="shrink-0 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" /> Social & Chats
          </h1>
          <p className="text-muted-foreground">Connect with scouts, fans, and analysts globally.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-card/50">
            <Mic className="w-4 h-4 mr-2" /> Start Space
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> New Chat
          </Button>
        </div>
      </div>

      {/* Stories/Live Updates Bar */}
      <div className="shrink-0 flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center bg-card/50 group-hover:bg-card transition-colors">
            <Plus className="w-6 h-6 text-muted-foreground group-hover:text-white" />
          </div>
          <span className="text-xs text-muted-foreground">Add Story</span>
        </div>
        
        {friends.filter(f => f.story).map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-16 h-16 rounded-full border-[3px] border-primary p-0.5">
              <div className="w-full h-full rounded-full bg-accent flex items-center justify-center text-xl font-bold">
                {f.name.charAt(0)}
              </div>
            </div>
            <span className="text-xs text-white max-w-[64px] truncate">{f.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Sidebar */}
        <div className="w-80 shrink-0 flex flex-col gap-6 overflow-y-auto hide-scrollbar">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Hash className="w-4 h-4" /> Spaces & Chats
            </h3>
            {groups.map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={i} className={`p-3 rounded-xl border cursor-pointer flex justify-between items-center transition-colors ${
                  g.name === "Scout Network Alpha" 
                    ? 'bg-primary/10 border-primary/30' 
                    : 'bg-card/40 border-white/5 hover:bg-white/10'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      g.type === 'watch' ? 'bg-red-500/20 text-red-500' :
                      g.type === 'audio' ? 'bg-purple-500/20 text-purple-500' :
                      'bg-secondary text-muted-foreground'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{g.name}</div>
                      <div className="text-xs text-muted-foreground">{g.type === 'watch' ? 'LIVE NOW' : `${g.members} members`}</div>
                    </div>
                  </div>
                  {g.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      {g.unread}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" /> Friends
            </h3>
            {friends.map((f, i) => (
              <div key={i} className="p-3 rounded-xl bg-transparent hover:bg-white/5 cursor-pointer flex items-center gap-3 transition-colors">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-bold">
                    {f.name.charAt(0)}
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${f.status === 'online' ? 'bg-primary' : 'bg-muted-foreground'}`} />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <Card className="flex-1 glass-card bg-card/40 flex flex-col border-white/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,255,0,0.03),transparent_50%)] pointer-events-none" />
           <CardHeader className="border-b border-border/50 bg-background/50 backdrop-blur z-10 shrink-0 p-4">
             <div className="flex justify-between items-center">
               <div>
                 <h2 className="font-bold text-lg text-white">Scout Network Alpha</h2>
                 <p className="text-xs text-muted-foreground">Topic: U21 South America</p>
               </div>
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-accent" />
                 ))}
               </div>
             </div>
           </CardHeader>
           <CardContent className="flex-1 p-4 flex flex-col justify-end z-10 space-y-4">
             {/* Mock Messages */}
             <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs shrink-0">SM</div>
               <div>
                 <div className="text-xs text-muted-foreground mb-1">Sarah M. <span className="ml-2 opacity-50">10:42 AM</span></div>
                 <div className="bg-secondary p-3 rounded-2xl rounded-tl-sm text-sm text-foreground max-w-md">
                   Has anyone looked at the young DM from Palmeiras? His interception numbers are off the charts.
                 </div>
               </div>
             </div>
             
             <div className="flex gap-3 flex-row-reverse">
               <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs shrink-0">You</div>
               <div className="flex flex-col items-end">
                 <div className="text-xs text-muted-foreground mb-1">You <span className="mr-2 opacity-50">10:45 AM</span></div>
                 <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm text-sm max-w-md">
                   Yeah, I ran his data through the AnythingFootball matchmaker. 92% fit for a high-pressing pivot role.
                 </div>
               </div>
             </div>

             {/* Input */}
             <div className="mt-4 flex gap-2">
               <Input className="bg-background/80" placeholder="Type a message..." />
               <Button className="bg-primary text-primary-foreground shrink-0">Send</Button>
             </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
