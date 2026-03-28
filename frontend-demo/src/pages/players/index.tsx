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
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function PlayersExplorer() {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [genderFilter, setGenderFilter] = useState<"all" | "mens" | "womens">("all");
  const segmentButtonClass =
    "flex-1 whitespace-nowrap rounded-xl border px-3 py-2 text-sm transition-colors sm:flex-none";
  const isRtl = i18n.dir() === "rtl";

  const filteredPlayers = mockPlayers.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.club.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col p-4 pb-20 sm:p-6 lg:h-[calc(100vh-4rem)] lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1">Player Explorer</h1>
          <p className="text-muted-foreground">Advanced global scouting shell with mock player data and frontend-only filtering.</p>
        </div>
        <div className="flex w-full gap-1 overflow-x-auto rounded-xl border border-white/8 bg-card/50 p-1 sm:w-auto">
          <button 
            className={`${segmentButtonClass} ${genderFilter === 'all' ? 'border-primary/20 bg-primary text-black font-semibold' : 'border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white'}`}
            onClick={() => setGenderFilter('all')}
          >All</button>
          <button 
            className={`${segmentButtonClass} ${genderFilter === 'mens' ? 'border-primary/20 bg-primary text-black font-semibold' : 'border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white'}`}
            onClick={() => setGenderFilter('mens')}
          >Men's</button>
          <button 
            className={`${segmentButtonClass} ${genderFilter === 'womens' ? 'border-primary/20 bg-primary text-black font-semibold' : 'border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white'}`}
            onClick={() => setGenderFilter('womens')}
          >Women's</button>
        </div>
      </div>

      <div className="mb-6 flex shrink-0 flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className={cn("absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground", isRtl ? "right-3" : "left-3")} />
          <Input 
            placeholder="Search by name, club, or position..." 
            className={cn("h-11 border-white/8 bg-card/50 text-base sm:h-12", isRtl ? "pr-11 text-right" : "pl-11")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          className={`h-11 rounded-xl px-5 sm:h-12 sm:px-6 ${showFilters ? 'border-primary/30 bg-primary/20 text-primary' : ''}`} 
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" /> Advanced Filters
        </Button>
      </div>

      <div className="flex flex-1 min-h-0 flex-col gap-6 xl:flex-row">
        {/* Advanced Filters Sidebar */}
        {showFilters && (
          <div className="flex w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/20 xl:w-72">
            <div className="flex items-center justify-between border-b border-border/50 bg-background/50 p-4">
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
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/20">
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-background/50 p-4 backdrop-blur">
            <span className="text-sm font-medium text-muted-foreground">{filteredPlayers.length} players in demo database</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs">
                <ArrowUpDown className={cn("w-3 h-3", isRtl ? "ml-2" : "mr-2")} /> Sort by Percentile
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 custom-scrollbar">
            {filteredPlayers.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20 p-8 text-center">
                <div className="text-lg font-display font-semibold text-white">No players match this filter set</div>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  This explorer is still running on mock player data. Try a broader search or reset the filters to get back to the default database view.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-3 md:hidden">
                  {filteredPlayers.map((player) => (
                    <div key={player.id} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <Link href={`/players/${player.id}`} className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-bold text-sm">
                            {player.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="truncate font-semibold text-white">{player.name}</div>
                            <div className="truncate text-xs text-muted-foreground">{player.position} • {player.club}</div>
                          </div>
                        </Link>
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background font-semibold text-white">
                          {player.overall}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">xG/90</div>
                          <div className="mt-2 font-semibold text-primary">0.{(player.stats.shooting / 10).toFixed(0)}</div>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Create</div>
                          <div className="mt-2 font-semibold text-blue-400">{(player.stats.passing / 20).toFixed(1)}</div>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Value</div>
                          <div className="mt-2 truncate font-semibold text-white">{player.value}</div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                          <Star className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[760px] text-sm text-left">
                    <thead className="sticky top-0 z-10 bg-background text-xs uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Player</th>
                        <th className="px-4 py-3 text-center font-semibold">OVR</th>
                        <th className="px-4 py-3 text-center font-semibold">xG/90</th>
                        <th className="px-4 py-3 text-center font-semibold">Chances/90</th>
                        <th className="px-4 py-3 font-semibold">Value</th>
                        <th className="px-4 py-3 text-right font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPlayers.map((player) => (
                        <tr key={player.id} className="group border-b border-border/50 transition-colors hover:bg-white/5">
                          <td className="px-4 py-3">
                            <Link href={`/players/${player.id}`} className="flex w-fit items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-sm font-bold">
                                {player.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-white transition-colors group-hover:text-primary">{player.name}</div>
                                <div className="text-xs text-muted-foreground">{player.position} • {player.club}</div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-center font-medium text-white">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-border bg-background">
                              {player.overall}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center font-medium text-primary">0.{(player.stats.shooting / 10).toFixed(0)}</td>
                          <td className="px-4 py-3 text-center font-medium text-blue-400">{(player.stats.passing / 20).toFixed(1)}</td>
                          <td className="px-4 py-3 text-muted-foreground">{player.value}</td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                                <Star className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
