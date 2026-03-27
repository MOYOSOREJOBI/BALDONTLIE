import { useState } from "react";
import { Link } from "wouter";
import { Search, Filter, SlidersHorizontal, ArrowUpDown, MoreHorizontal, Star, Info, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { mockPlayers } from "@/data/mock";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function PlayersExplorer() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [genderFilter, setGenderFilter] = useState<"all" | "mens" | "womens">("all");

  const filteredPlayers = mockPlayers.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.club.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1">Player Explorer</h1>
          <p className="text-muted-foreground">Advanced global scouting & data filtering.</p>
        </div>
        <div className="flex bg-card/50 p-1 rounded-lg border border-border">
          <button 
            className={`px-4 py-1.5 text-sm rounded-md transition-colors ${genderFilter === 'all' ? 'bg-primary text-black font-semibold' : 'text-muted-foreground hover:text-white'}`}
            onClick={() => setGenderFilter('all')}
          >All</button>
          <button 
            className={`px-4 py-1.5 text-sm rounded-md transition-colors ${genderFilter === 'mens' ? 'bg-primary text-black font-semibold' : 'text-muted-foreground hover:text-white'}`}
            onClick={() => setGenderFilter('mens')}
          >Men's</button>
          <button 
            className={`px-4 py-1.5 text-sm rounded-md transition-colors ${genderFilter === 'womens' ? 'bg-primary text-black font-semibold' : 'text-muted-foreground hover:text-white'}`}
            onClick={() => setGenderFilter('womens')}
          >Women's</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search by name, club, or position..." 
            className="pl-11 bg-card/50 border-border h-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          className={`h-12 px-6 ${showFilters ? 'bg-primary/20 text-primary border-primary/50' : ''}`} 
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" /> Advanced Filters
        </Button>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Advanced Filters Sidebar */}
        {showFilters && (
          <div className="w-full md:w-72 shrink-0 flex-col overflow-hidden bg-card/20 rounded-xl border border-border/50 flex">
            <div className="p-4 border-b border-border/50 bg-background/50 flex justify-between items-center">
              <h3 className="font-semibold flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
              </h3>
              <Button variant="ghost" size="sm" className="text-xs h-7">Reset</Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
              <Accordion type="multiple" defaultValue={['basic', 'physical', 'technical', 'percentiles', 'market']}>
                <AccordionItem value="basic" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Basic Info</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full bg-background/50 h-8 text-xs">
                          <SelectValue placeholder="Position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Positions</SelectItem>
                          <SelectItem value="att">Attackers</SelectItem>
                          <SelectItem value="mid">Midfielders</SelectItem>
                          <SelectItem value="def">Defenders</SelectItem>
                          <SelectItem value="gk">Goalkeepers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full bg-background/50 h-8 text-xs">
                          <SelectValue placeholder="League / Confederation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Global (All)</SelectItem>
                          <SelectItem value="uefa">UEFA Top 5</SelectItem>
                          <SelectItem value="conmebol">CONMEBOL</SelectItem>
                          <SelectItem value="afc">AFC (Asia)</SelectItem>
                          <SelectItem value="caf">CAF (Africa)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Age <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>16 - 40</span>
                      </div>
                      <Slider defaultValue={[16, 40]} max={40} min={16} step={1} />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Overall Rating <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>50 - 99</span>
                      </div>
                      <Slider defaultValue={[50, 99]} max={99} min={1} step={1} />
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary">
                      <Plus className="w-3 h-3 mr-2" /> Add Stat Filter
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="physical" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Physical Attributes</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Height (cm) <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>160 - 210</span>
                      </div>
                      <Slider defaultValue={[160, 210]} max={210} min={160} step={1} />
                    </div>
                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Speed (Sprint) <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>0 - 99</span>
                      </div>
                      <Slider defaultValue={[0, 99]} max={99} min={0} step={1} />
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary">
                      <Plus className="w-3 h-3 mr-2" /> Add Stat Filter
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Core Stats</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Crossing <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>0 - 99</span>
                      </div>
                      <Slider defaultValue={[0, 99]} max={99} min={0} step={1} />
                    </div>
                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Passing <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>0 - 99</span>
                      </div>
                      <Slider defaultValue={[0, 99]} max={99} min={0} step={1} />
                    </div>
                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Chances Created (p90) <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>0 - 5.0</span>
                      </div>
                      <Slider defaultValue={[0, 5]} max={5} min={0} step={0.1} />
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary">
                      <Plus className="w-3 h-3 mr-2" /> Add Stat Filter
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="percentiles" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Advanced Percentiles</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Goal Percentile <Tooltip><TooltipTrigger><Info className="w-3 h-3"/></TooltipTrigger><TooltipContent>Goals compared to positional peers</TooltipContent></Tooltip> <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>Top 50%</span>
                      </div>
                      <Slider defaultValue={[50, 100]} max={100} min={1} step={1} />
                    </div>
                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">Tackling Percentile <X className="w-3 h-3 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-red-400 transition-opacity" /></span>
                        <span>Any</span>
                      </div>
                      <Slider defaultValue={[0, 100]} max={100} min={0} step={1} />
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary">
                      <Plus className="w-3 h-3 mr-2" /> Add Stat Filter
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="market" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Market & Contracts</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="market-risers" />
                      <label htmlFor="market-risers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">Market Risers</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="market-drops" />
                      <label htmlFor="market-drops" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">Market Drops</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contract-expiring" />
                      <label htmlFor="contract-expiring" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">Contract Expiring (&lt; 1 yr)</label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-card/20 rounded-xl border border-border/50 overflow-hidden">
          <div className="p-4 border-b border-border/50 flex justify-between items-center shrink-0 bg-background/50 backdrop-blur">
            <span className="text-sm text-muted-foreground font-medium">{filteredPlayers.length} players found in Global Database</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-xs h-8">
                <ArrowUpDown className="w-3 h-3 mr-2" /> Sort by Percentile
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 custom-scrollbar">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase sticky top-0 bg-background z-10">
                <tr>
                  <th className="px-4 py-3 font-semibold">Player</th>
                  <th className="px-4 py-3 font-semibold text-center">OVR</th>
                  <th className="px-4 py-3 font-semibold text-center">xG/90</th>
                  <th className="px-4 py-3 font-semibold text-center">Chances/90</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.map((player) => (
                  <tr key={player.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                    <td className="px-4 py-3">
                      <Link href={`/players/${player.id}`} className="flex items-center gap-3 w-fit">
                        <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-bold text-sm">
                          {player.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-primary transition-colors">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.position} • {player.club}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-center text-white font-medium">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded bg-background border border-border">
                        {player.overall}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-primary font-medium">0.{(player.stats.shooting / 10).toFixed(0)}</td>
                    <td className="px-4 py-3 text-center text-blue-400 font-medium">{(player.stats.passing / 20).toFixed(1)}</td>
                    <td className="px-4 py-3 text-muted-foreground">{player.value}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                          <Star className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
