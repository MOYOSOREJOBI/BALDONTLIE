import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, Users, Hash, Plus, Mic, Video, PlaySquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SocialPage() {
  const groups = [
    { name: "Scout Network Alpha", members: 124, unread: 5, topic: "Main Network", type: "chat", icon: Hash },
    { name: "Match Room Demo", members: 4500, unread: 12, topic: "Madrid vs City", type: "chat", icon: MessageCircle },
    { name: "Audio Spaces Preview", members: 320, unread: 0, topic: "Transfer Rumours", type: "audio", icon: Mic },
    { name: "Watchalong Concepts", members: 1250, unread: 0, topic: "UCL Quarterfinals", type: "watch", icon: Video },
  ];

  const friends = [
    { name: "Alex Ferguson (Not that one)", status: "online", role: "Analyst", story: true },
    { name: "Sarah M.", status: "offline", role: "Scout", story: false },
    { name: "Jamie Carragher", status: "online", role: "Pundit", story: true },
    { name: "Fabrizio Romano", status: "online", role: "Journalist", story: true },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col space-y-6 p-4 pb-20 sm:p-6 lg:h-[calc(100vh-4rem)] lg:p-8">
      <div className="shrink-0 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" /> Community Demo
          </h1>
          <p className="text-muted-foreground">A static concept preview for moderated football rooms, spaces, and analyst conversations.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="bg-card/50">
            <Mic className="w-4 h-4 mr-2" /> Start Demo Space
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> New Mock Thread
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-card/30 p-4 text-sm leading-6 text-muted-foreground">
        Community, chat, and room activity shown here is mock frontend content for layout review only.
        It does not represent live rooms, real moderation systems, or active messaging infrastructure.
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

      <div className="flex flex-1 min-h-0 flex-col gap-6 xl:flex-row">
        {/* Sidebar */}
        <div className="flex w-full shrink-0 flex-col gap-6 overflow-y-auto hide-scrollbar xl:w-80">
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
        <Card className="relative flex flex-1 flex-col overflow-hidden border-white/10 bg-card/40 glass-card">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,255,0,0.03),transparent_50%)] pointer-events-none" />
           <CardHeader className="border-b border-border/50 bg-background/50 backdrop-blur z-10 shrink-0 p-4">
             <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                   I dropped him into the prototype fit board earlier. The profile still looks strong for a high-pressing pivot role.
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
