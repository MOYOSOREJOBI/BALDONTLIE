import { useState } from "react";
import { Search, Filter, SlidersHorizontal, ArrowUpDown, ChevronDown, MonitorPlay } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockPlayers } from "@/data/mock";

export default function TechnicalOverlay() {
  const [positionFilter, setPositionFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlayers = mockPlayers.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.club.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (positionFilter === "all") return matchesSearch;
    
    // Grouping positions for simpler filtering
    if (positionFilter === "att") return matchesSearch && ["ST", "LW", "RW", "CF", "FW"].includes(p.position);
    if (positionFilter === "mid") return matchesSearch && ["CM", "CDM", "CAM", "RM", "LM", "AM"].includes(p.position);
    if (positionFilter === "def") return matchesSearch && ["CB", "LB", "RB", "LWB", "RWB"].includes(p.position);
    if (positionFilter === "gk") return matchesSearch && p.position === "GK";
    
    return matchesSearch && p.position === positionFilter;
  });

  // Calculate min/max for color scaling
  const getMinMax = (stat: keyof typeof mockPlayers[0]['stats']) => {
    const vals = filteredPlayers.map(p => p.stats[stat] || 0);
    return { min: Math.min(...vals), max: Math.max(...vals) };
  };

  const getHeatmapColor = (value: number, min: number, max: number, reverse = false) => {
    if (value === undefined || value === null) return "bg-gray-800 text-gray-400";
    
    // Normalize value between 0 and 1
    const normalized = max === min ? 0.5 : (value - min) / (max - min);
    
    // Adjust based on if higher is better (default) or lower is better (reverse)
    const score = reverse ? 1 - normalized : normalized;
    
    if (score >= 0.8) return "bg-green-500/20 text-green-400 font-bold border-green-500/30";
    if (score >= 0.6) return "bg-green-500/10 text-green-300 border-green-500/10";
    if (score >= 0.4) return "bg-white/5 text-slate-300 border-transparent";
    if (score >= 0.2) return "bg-red-500/10 text-red-300 border-red-500/10";
    return "bg-red-500/20 text-red-400 font-bold border-red-500/30";
  };

  const attackingStats = [
    { key: "shooting", label: "Shooting" },
    { key: "dribbling", label: "Dribbling" },
    { key: "pace", label: "Pace" },
  ];

  const passingStats = [
    { key: "passing", label: "Passing" },
    // Mocking some other passing-related stats for the visualizer
    { key: "vision", label: "Vision", mock: (p: any) => Math.min(99, p.stats.passing + (p.stats.dribbling % 10)) },
    { key: "crossing", label: "Crossing", mock: (p: any) => Math.min(99, p.stats.passing - (p.stats.physical % 5)) },
  ];

  const defendingStats = [
    { key: "defending", label: "Defending" },
    { key: "physical", label: "Physical" },
    // Mocking another defending stat
    { key: "interceptions", label: "Interceptions", mock: (p: any) => Math.min(99, p.stats.defending + (p.stats.pace % 8)) },
  ];

  const keeperStats = [
    { key: "diving", label: "Diving", mock: (p: any) => p.position === 'GK' ? 85 + (p.id.length % 10) : null },
    { key: "handling", label: "Handling", mock: (p: any) => p.position === 'GK' ? 82 + (p.id.length % 15) : null },
    { key: "kicking", label: "Kicking", mock: (p: any) => p.position === 'GK' ? 75 + (p.id.length % 20) : null },
    { key: "reflexes", label: "Reflexes", mock: (p: any) => p.position === 'GK' ? 88 + (p.id.length % 10) : null },
    { key: "positioning", label: "Positioning", mock: (p: any) => p.position === 'GK' ? 84 + (p.id.length % 12) : null },
  ];

  // Helper to get stat value
  const getStatValue = (player: any, statObj: any) => {
    if (statObj.mock) return statObj.mock(player);
    return player.stats[statObj.key];
  };

  // Helper to get min/max for a specific column
  const getColumnMinMax = (statObj: any) => {
    const vals = filteredPlayers.map(p => getStatValue(p, statObj)).filter(v => v !== null);
    if (vals.length === 0) return { min: 0, max: 100 };
    return { min: Math.min(...vals), max: Math.max(...vals) };
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col p-4 pb-20 sm:p-6 lg:h-[calc(100vh-4rem)] lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <MonitorPlay className="w-8 h-8 text-primary" /> Technical Overlay
          </h1>
          <p className="text-muted-foreground">Comparative data visualizer. <span className="text-green-400">Green = Best</span>, <span className="text-red-400">Red = Worst</span>.</p>
          <div className="mt-2 text-xs text-muted-foreground">Best on tablet or desktop. On smaller screens, horizontal scroll is expected for the comparison table.</div>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search players..." 
              className="pl-9 bg-card/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={positionFilter} onValueChange={setPositionFilter}>
            <SelectTrigger className="w-full bg-card/50 sm:w-[140px]">
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="att">Attackers (FW/W)</SelectItem>
              <SelectItem value="mid">Midfielders (CM/AM)</SelectItem>
              <SelectItem value="def">Defenders (CB/FB)</SelectItem>
              <SelectItem value="gk">Goalkeepers (GK)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-card/20 rounded-xl border border-border/50 glass-card">
        <div className="min-w-[1000px]">
          <table className="w-full text-sm text-left">
            <thead className="bg-background/80 sticky top-0 z-20 backdrop-blur-md border-b border-border/50">
              <tr>
                <th className="px-4 py-4 font-semibold text-white sticky left-0 bg-background/95 z-30 min-w-[200px] border-r border-border/50">
                  Player / Club
                </th>
                <th className="px-4 py-4 font-semibold text-center text-white border-r border-border/50">POS</th>
                <th className="px-4 py-4 font-semibold text-center text-white border-r border-border/50">OVR</th>
                
                {positionFilter !== 'gk' && (
                  <>
                    <th colSpan={attackingStats.length} className="px-4 py-2 font-semibold text-center border-r border-border/50 border-b border-border/50">
                      <div className="text-orange-400 uppercase tracking-wider text-xs">Attacking</div>
                    </th>
                    <th colSpan={passingStats.length} className="px-4 py-2 font-semibold text-center border-r border-border/50 border-b border-border/50">
                      <div className="text-blue-400 uppercase tracking-wider text-xs">Passing & Vision</div>
                    </th>
                    <th colSpan={defendingStats.length} className="px-4 py-2 font-semibold text-center border-b border-border/50">
                      <div className="text-green-400 uppercase tracking-wider text-xs">Defending & Physical</div>
                    </th>
                  </>
                )}
                
                {positionFilter === 'gk' && (
                  <th colSpan={keeperStats.length} className="px-4 py-2 font-semibold text-center border-b border-border/50">
                    <div className="text-yellow-400 uppercase tracking-wider text-xs">Goalkeeping</div>
                  </th>
                )}
              </tr>
              <tr>
                <th className="px-4 py-2 sticky left-0 bg-background/95 z-30 border-r border-border/50"></th>
                <th className="px-4 py-2 border-r border-border/50"></th>
                <th className="px-4 py-2 border-r border-border/50"></th>
                
                {positionFilter !== 'gk' && (
                  <>
                    {attackingStats.map(stat => (
                      <th key={stat.key} className="px-2 py-2 font-medium text-center text-muted-foreground text-xs hover:text-white cursor-pointer group">
                        <div className="flex items-center justify-center gap-1">
                          {stat.label} <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </th>
                    ))}
                    {passingStats.map(stat => (
                      <th key={stat.key} className="px-2 py-2 font-medium text-center text-muted-foreground text-xs hover:text-white cursor-pointer group">
                        <div className="flex items-center justify-center gap-1">
                          {stat.label} <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </th>
                    ))}
                    {defendingStats.map(stat => (
                      <th key={stat.key} className="px-2 py-2 font-medium text-center text-muted-foreground text-xs hover:text-white cursor-pointer group">
                        <div className="flex items-center justify-center gap-1">
                          {stat.label} <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </th>
                    ))}
                  </>
                )}
                
                {positionFilter === 'gk' && (
                  <>
                    {keeperStats.map(stat => (
                      <th key={stat.key} className="px-2 py-2 font-medium text-center text-muted-foreground text-xs hover:text-white cursor-pointer group">
                        <div className="flex items-center justify-center gap-1">
                          {stat.label} <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </th>
                    ))}
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filteredPlayers.length === 0 ? (
                <tr>
                  <td colSpan={15} className="p-8 text-center text-muted-foreground">
                    No players found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredPlayers.map((player) => (
                  <tr key={player.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 sticky left-0 bg-background/80 backdrop-blur-md border-r border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-xs shrink-0">
                          {player.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-white truncate">{player.name}</div>
                          <div className="text-[10px] text-muted-foreground truncate">{player.club}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center border-r border-border/50">
                      <Badge variant="outline" className="bg-background/50 font-mono text-[10px] uppercase">
                        {player.position}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center border-r border-border/50">
                      <span className="font-display font-bold text-white">{player.overall}</span>
                    </td>
                    
                    {/* Attacking Stats */}
                    {positionFilter !== 'gk' && attackingStats.map(stat => {
                      const val = getStatValue(player, stat);
                      const { min, max } = getColumnMinMax(stat);
                      return (
                        <td key={`att-${stat.key}`} className="px-2 py-2 text-center">
                          {val !== null ? (
                            <div className={`mx-auto w-10 h-8 flex items-center justify-center rounded border ${getHeatmapColor(val, min, max)}`}>
                              {val}
                            </div>
                          ) : <span className="text-muted-foreground">-</span>}
                        </td>
                      );
                    })}
                    
                    {/* Passing Stats */}
                    {positionFilter !== 'gk' && passingStats.map(stat => {
                      const val = getStatValue(player, stat);
                      const { min, max } = getColumnMinMax(stat);
                      return (
                        <td key={`pas-${stat.key}`} className="px-2 py-2 text-center">
                          {val !== null ? (
                            <div className={`mx-auto w-10 h-8 flex items-center justify-center rounded border ${getHeatmapColor(val, min, max)}`}>
                              {val}
                            </div>
                          ) : <span className="text-muted-foreground">-</span>}
                        </td>
                      );
                    })}
                    
                    {/* Defending Stats */}
                    {positionFilter !== 'gk' && defendingStats.map(stat => {
                      const val = getStatValue(player, stat);
                      const { min, max } = getColumnMinMax(stat);
                      return (
                        <td key={`def-${stat.key}`} className="px-2 py-2 text-center">
                          {val !== null ? (
                            <div className={`mx-auto w-10 h-8 flex items-center justify-center rounded border ${getHeatmapColor(val, min, max)}`}>
                              {val}
                            </div>
                          ) : <span className="text-muted-foreground">-</span>}
                        </td>
                      );
                    })}
                    
                    {/* Keeper Stats */}
                    {positionFilter === 'gk' && keeperStats.map(stat => {
                      const val = getStatValue(player, stat);
                      const { min, max } = getColumnMinMax(stat);
                      return (
                        <td key={`gk-${stat.key}`} className="px-2 py-2 text-center">
                          {val !== null ? (
                            <div className={`mx-auto w-10 h-8 flex items-center justify-center rounded border ${getHeatmapColor(val, min, max)}`}>
                              {val}
                            </div>
                          ) : <span className="text-muted-foreground">-</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
