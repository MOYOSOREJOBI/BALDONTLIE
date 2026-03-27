import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, BookmarkPlus, Layers, Plus, Database, ChevronRight, Save } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ScoutWorkspace() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" /> Scout Workspace
          </h1>
          <p className="text-muted-foreground">Advanced search, shortlists, and succession planning.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="border-primary/50 text-primary">
             <Save className="w-4 h-4 mr-2" /> Save Filter
           </Button>
           <Button variant="default">
             <Plus className="w-4 h-4 mr-2" /> New Shortlist
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar for Filters */}
        <Card className="glass-card bg-card/40 border-white/10 lg:col-span-1 h-fit">
          <CardHeader className="p-4 border-b border-white/5 bg-black/20">
            <CardTitle className="text-sm font-display flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" /> Advanced Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
             <div className="space-y-2">
               <label className="text-xs font-semibold text-muted-foreground uppercase">Role / Position</label>
               <select className="w-full bg-black/40 border border-white/10 rounded-md p-2 text-sm text-white">
                 <option>Inverted Fullback</option>
                 <option>Box-to-Box Midfielder</option>
                 <option>False 9</option>
                 <option>Sweeper Keeper</option>
               </select>
             </div>
             
             <div className="space-y-2">
               <label className="text-xs font-semibold text-muted-foreground uppercase">Age Range</label>
               <div className="flex items-center gap-2">
                 <Input type="number" placeholder="16" className="bg-black/40 border-white/10" />
                 <span className="text-muted-foreground">-</span>
                 <Input type="number" placeholder="23" className="bg-black/40 border-white/10" />
               </div>
             </div>

             <div className="space-y-2">
               <label className="text-xs font-semibold text-muted-foreground uppercase">Contract Expiry</label>
               <select className="w-full bg-black/40 border border-white/10 rounded-md p-2 text-sm text-white">
                 <option>Under 12 months</option>
                 <option>1-2 years</option>
                 <option>3+ years</option>
               </select>
             </div>

             <div className="space-y-2">
               <label className="text-xs font-semibold text-muted-foreground uppercase">Key Metric (Per 90)</label>
               <select className="w-full bg-black/40 border border-white/10 rounded-md p-2 text-sm text-white mb-2">
                 <option>Progressive Passes {'>'} 5.0</option>
                 <option>Successful Take-ons {'>'} 2.5</option>
                 <option>Interceptions {'>'} 1.5</option>
               </select>
             </div>
             
             <Button className="w-full mt-4" variant="secondary">Apply Filters</Button>
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
           <div className="flex gap-4 border-b border-white/10 pb-2">
              <button 
                className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'search' ? 'border-primary text-white' : 'border-transparent text-muted-foreground hover:text-white'}`}
                onClick={() => setActiveTab('search')}
              >
                Global Search
              </button>
              <button 
                className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'shortlists' ? 'border-primary text-white' : 'border-transparent text-muted-foreground hover:text-white'}`}
                onClick={() => setActiveTab('shortlists')}
              >
                My Shortlists
              </button>
              <button 
                className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${activeTab === 'succession' ? 'border-primary text-white' : 'border-transparent text-muted-foreground hover:text-white'}`}
                onClick={() => setActiveTab('succession')}
              >
                Succession Planning
              </button>
           </div>

           {activeTab === 'search' && (
             <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search database of 150,000+ players..." className="pl-10 bg-black/40 border-white/10 w-full" />
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "Joao Neves", club: "Benfica", role: "Box-to-Box", match: "98%" },
                    { name: "Warren Zaire-Emery", club: "PSG", role: "Box-to-Box", match: "94%" },
                    { name: "Arthur Vermeeren", club: "Atletico", role: "Deep Lying", match: "89%" }
                  ].map((p, i) => (
                    <Card key={i} className="bg-card/20 border-white/5 hover:bg-card/40 transition-colors cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                              {p.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-white">{p.name}</h3>
                              <p className="text-xs text-muted-foreground">{p.club} • {p.role}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-xs text-muted-foreground">Style Match</div>
                              <div className="font-bold text-green-400">{p.match}</div>
                            </div>
                            <Button variant="ghost" size="icon"><BookmarkPlus className="w-4 h-4" /></Button>
                         </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
             </div>
           )}

           {activeTab === 'succession' && (
             <Card className="bg-card/20 border-white/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Target: Replace Casemiro</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                     <span className="bg-black/50 px-3 py-1 rounded-full">Contract expires: 2025</span>
                     <span className="bg-black/50 px-3 py-1 rounded-full">Role: Deep-Lying Playmaker</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Internal Options</h4>
                      <div className="p-4 border border-white/10 rounded-lg bg-black/20 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-white/10" />
                           <span>Nico Paz <Badge variant="secondary" className="ml-2">Academy</Badge></span>
                        </div>
                        <span className="text-yellow-500 text-sm">Readiness: 1-2 Years</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Market Targets</h4>
                      <div className="p-4 border border-white/10 rounded-lg bg-black/20 flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">Z</div>
                           <span>Martín Zubimendi <Badge className="ml-2 bg-blue-500/20 text-blue-400">High Priority</Badge></span>
                        </div>
                        <span className="text-green-400 text-sm">Readiness: Immediate</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
             </Card>
           )}
        </div>
      </div>
    </div>
  );
}
