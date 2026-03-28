import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MoreHorizontal, Bell, Plus, Users, Shield, UserCircle, Trash2, CheckCircle2 } from "lucide-react";
import { mockPlayers } from "@/data/mock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function MyPlayer() {
  const { toast } = useToast();
  const [savedPlayers, setSavedPlayers] = useState(mockPlayers.slice(0, 3));
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showAddManager, setShowAddManager] = useState(false);
  const [showAddClub, setShowAddClub] = useState(false);
  
  const [savedManagers, setSavedManagers] = useState([
    { id: 'm1', name: 'Xabi Alonso', team: 'Bayer Leverkusen', role: 'Head Coach', style: 'Fluid Possession' }
  ]);
  
  const [savedClubs, setSavedClubs] = useState([
    { id: 'c1', name: 'Real Madrid CF', league: 'La Liga', type: 'Club', priority: 'High' }
  ]);

  const availablePlayers = mockPlayers.filter(p => !savedPlayers.find(sp => sp.id === p.id)).slice(0, 5);
  const availableManagers = [
    { id: 'm2', name: 'Pep Guardiola', team: 'Manchester City', role: 'Head Coach', style: 'Positional Play' },
    { id: 'm3', name: 'Carlo Ancelotti', team: 'Real Madrid', role: 'Manager', style: 'Pragmatic/Adaptive' },
    { id: 'm4', name: 'Mikel Arteta', team: 'Arsenal', role: 'Manager', style: 'Positional Play' },
    { id: 'm5', name: 'Jürgen Klopp', team: 'Liverpool', role: 'Manager', style: 'Gegenpressing' },
    { id: 'm6', name: 'Diego Simeone', team: 'Atlético Madrid', role: 'Head Coach', style: 'Defensive Block' },
    { id: 'm7', name: 'Thomas Tuchel', team: 'Free Agent', role: 'Manager', style: 'Fluid Attacking' },
    { id: 'm8', name: 'Julian Nagelsmann', team: 'Bayern Munich', role: 'Manager', style: 'Vertical Tiki-Taka' },
    { id: 'm9', name: 'Unai Emery', team: 'Aston Villa', role: 'Manager', style: 'Structured Counter' },
    { id: 'm10', name: 'Roberto De Zerbi', team: 'Aston Villa', role: 'Head Coach', style: 'Bait and Press' },
    { id: 'm11', name: 'Luis Enrique', team: 'Aston Villa', role: 'Manager', style: 'Direct Attack' },
    { id: 'm12', name: 'Ruben Amorim', team: 'Brighton', role: 'Manager', style: 'Possession/Build-up' },
    { id: 'm13', name: 'Eddie Howe', team: 'Newcastle United', role: 'Manager', style: 'High Intensity' },
    { id: 'm14', name: 'Simone Inzaghi', team: 'Inter Milan', role: 'Head Coach', style: '3-5-2 Wing Play' },
    { id: 'm15', name: 'Luciano Spalletti', team: 'Free Agent', role: 'Manager', style: 'Balanced' },
    { id: 'm16', name: 'Erik ten Hag', team: 'Manchester United', role: 'Manager', style: 'Transitional Play' },
    { id: 'm17', name: 'Mauricio Pochettino', team: 'Free Agent', role: 'Manager', style: 'High Press' },
    { id: 'm18', name: 'Gasperini', team: 'Italy', role: 'National Coach', style: 'Attacking Overload' },
    { id: 'm19', name: 'Xavi Hernandez', team: 'Barcelona', role: 'Manager', style: 'Tiki-Taka' },
    { id: 'm20', name: 'Antonio Conte', team: 'Chelsea', role: 'Head Coach', style: 'Wingbacks/Counter' }
  ];
  const availableClubs = [
    { id: 'c2', name: 'Arsenal FC', league: 'Premier League', type: 'Club', priority: 'Medium' },
    { id: 'c3', name: 'AC Milan', league: 'Serie A', type: 'Club', priority: 'Medium' }
  ];

  const removePlayer = (id: string) => {
    setSavedPlayers(savedPlayers.filter(p => p.id !== id));
    toast({ title: "Player removed", description: "Removed from your shortlist." });
  };

  const addPlayer = (player: any) => {
    setSavedPlayers([...savedPlayers, player]);
    setShowAddPlayer(false);
    toast({ title: "Player added", description: `${player.name} added to shortlist.` });
  };
  
  const removeManager = (id: string) => {
    setSavedManagers(savedManagers.filter(m => m.id !== id));
    toast({ title: "Manager removed", description: "Removed from your shortlist." });
  };

  const addManager = (manager: any) => {
    setSavedManagers([...savedManagers, manager]);
    setShowAddManager(false);
    toast({ title: "Manager added", description: `${manager.name} added to shortlist.` });
  };
  
  const removeClub = (id: string) => {
    setSavedClubs(savedClubs.filter(c => c.id !== id));
    toast({ title: "Club removed", description: "Removed from your shortlist." });
  };

  const addClub = (club: any) => {
    setSavedClubs([...savedClubs, club]);
    setShowAddClub(false);
    toast({ title: "Club added", description: `${club.name} added to shortlist.` });
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" fill="currentColor" /> My Shortlist
          </h1>
          <p className="text-muted-foreground">Track targets, managers, clubs, and entire leagues across all confederations.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="bg-card/50">Export PDF</Button>
          <Button className="bg-primary text-primary-foreground">Compare Selection</Button>
        </div>
      </div>

      <Tabs defaultValue="players" className="w-full">
        <TabsList className="bg-card/50 border border-white/5 mb-6">
          <TabsTrigger value="players" className="flex items-center gap-2"><UserCircle className="w-4 h-4"/> Players ({savedPlayers.length})</TabsTrigger>
          <TabsTrigger value="managers" className="flex items-center gap-2"><Users className="w-4 h-4"/> Managers ({savedManagers.length})</TabsTrigger>
          <TabsTrigger value="clubs" className="flex items-center gap-2"><Shield className="w-4 h-4"/> Clubs & Leagues ({savedClubs.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="players" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedPlayers.map(player => (
              <Card key={player.id} className="glass-card bg-card/40 border-white/10 group relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-background/50 hover:bg-background/80"
                  onClick={() => removePlayer(player.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <CardContent className="p-0">
                  <div className="p-4 border-b border-white/5 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded bg-gradient-to-br from-accent to-background flex items-center justify-center font-display font-bold text-lg border border-white/10">
                        {player.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors pr-6">{player.name}</h3>
                        <p className="text-xs text-muted-foreground">{player.club}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 grid grid-cols-2 gap-4 text-sm bg-background/30">
                    <div>
                      <span className="text-muted-foreground text-xs block mb-0.5">Role</span>
                      <span className="font-medium text-white">{player.position}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-0.5">Value</span>
                      <span className="font-medium text-white">{player.value}</span>
                    </div>
                  </div>

                  <div className="p-4 border-t border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Target Priority</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">High</Badge>
                    </div>
                    <Button variant="secondary" className="w-full h-8 text-xs bg-white/5 hover:bg-white/10">
                      <Bell className="w-3 h-3 mr-2" /> Alerts Active
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add Slot / Selector */}
            {showAddPlayer ? (
              <Card className="glass-card bg-card border-primary/30 min-h-[300px] flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Select Player to Track</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                  {availablePlayers.map(p => (
                    <div key={p.id} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md cursor-pointer group" onClick={() => addPlayer(p)}>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-accent/50 flex items-center justify-center text-xs">{p.name.charAt(0)}</div>
                        <div>
                          <div className="text-sm font-medium group-hover:text-primary transition-colors">{p.name}</div>
                          <div className="text-[10px] text-muted-foreground">{p.club}</div>
                        </div>
                      </div>
                      <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-xs text-muted-foreground mt-2" onClick={() => setShowAddPlayer(false)}>Cancel</Button>
                </CardContent>
              </Card>
            ) : (
              <Card 
                className="glass-card bg-card/10 border-dashed border-2 border-white/10 hover:border-primary/30 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[300px] text-muted-foreground hover:text-primary"
                onClick={() => setShowAddPlayer(true)}
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-current" />
                </div>
                <span className="font-medium">Add Player</span>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="managers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedManagers.map(manager => (
              <Card key={manager.id} className="glass-card bg-card/40 border-white/10 group relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-background/50 hover:bg-background/80"
                  onClick={() => removeManager(manager.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <CardContent className="p-0">
                  <div className="p-4 border-b border-white/5 flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-gradient-to-br from-indigo-500/20 to-background flex items-center justify-center font-display font-bold text-lg border border-indigo-500/20 text-indigo-400">
                      {manager.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors pr-6">{manager.name}</h3>
                      <p className="text-xs text-muted-foreground">{manager.team}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 grid grid-cols-2 gap-4 text-sm bg-background/30">
                    <div>
                      <span className="text-muted-foreground text-xs block mb-0.5">Role</span>
                      <span className="font-medium text-white">{manager.role}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-0.5">Style</span>
                      <span className="font-medium text-white">{manager.style}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {showAddManager ? (
              <Card className="glass-card bg-card border-indigo-500/30 min-h-[200px] flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Select Manager</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                  {availableManagers.map(m => (
                    <div key={m.id} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md cursor-pointer group" onClick={() => addManager(m)}>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-400">{m.name.charAt(0)}</div>
                        <div>
                          <div className="text-sm font-medium group-hover:text-indigo-400 transition-colors">{m.name}</div>
                          <div className="text-[10px] text-muted-foreground">{m.team}</div>
                        </div>
                      </div>
                      <Plus className="w-4 h-4 text-muted-foreground group-hover:text-indigo-400" />
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-xs text-muted-foreground mt-2" onClick={() => setShowAddManager(false)}>Cancel</Button>
                </CardContent>
              </Card>
            ) : (
              <Card 
                className="glass-card bg-card/10 border-dashed border-2 border-white/10 hover:border-indigo-500/30 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px] text-muted-foreground hover:text-indigo-400"
                onClick={() => setShowAddManager(true)}
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-current" />
                </div>
                <span className="font-medium">Track a Manager</span>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="clubs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {savedClubs.map(club => (
              <Card key={club.id} className="glass-card bg-card/40 border-white/10 group relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-background/50 hover:bg-background/80"
                  onClick={() => removeClub(club.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <CardContent className="p-0">
                  <div className="p-4 border-b border-white/5 flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-gradient-to-br from-emerald-500/20 to-background flex items-center justify-center font-display font-bold text-lg border border-emerald-500/20 text-emerald-400">
                      {club.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors pr-6">{club.name}</h3>
                      <p className="text-xs text-muted-foreground">{club.league}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {showAddClub ? (
              <Card className="glass-card bg-card border-emerald-500/30 min-h-[150px] flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Select Club</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                  {availableClubs.map(c => (
                    <div key={c.id} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md cursor-pointer group" onClick={() => addClub(c)}>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400">{c.name.charAt(0)}</div>
                        <div>
                          <div className="text-sm font-medium group-hover:text-emerald-400 transition-colors">{c.name}</div>
                          <div className="text-[10px] text-muted-foreground">{c.league}</div>
                        </div>
                      </div>
                      <Plus className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400" />
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-xs text-muted-foreground mt-2" onClick={() => setShowAddClub(false)}>Cancel</Button>
                </CardContent>
              </Card>
            ) : (
              <Card 
                className="glass-card bg-card/10 border-dashed border-2 border-white/10 hover:border-emerald-500/30 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[150px] text-muted-foreground hover:text-emerald-400"
                onClick={() => setShowAddClub(true)}
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-current" />
                </div>
                <span className="font-medium">Add Club or League</span>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
