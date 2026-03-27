import { useState } from "react";
import { mockPlayers } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
import { Swords, Plus, X } from "lucide-react";

export default function PlayerCompare() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['p1', 'p4']);

  const selectedPlayers = selectedIds.map(id => mockPlayers.find(p => p.id === id)!).filter(Boolean);

  const radarData = [
    { subject: 'Pace', fullMark: 100 },
    { subject: 'Shooting', fullMark: 100 },
    { subject: 'Passing', fullMark: 100 },
    { subject: 'Dribbling', fullMark: 100 },
    { subject: 'Defending', fullMark: 100 },
    { subject: 'Physical', fullMark: 100 },
  ].map(stat => {
    const dataPoint: any = { subject: stat.subject, fullMark: stat.fullMark };
    selectedPlayers.forEach((p, idx) => {
      dataPoint[`player${idx}`] = p.stats[stat.subject.toLowerCase() as keyof typeof p.stats];
    });
    return dataPoint;
  });

  const colors = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Swords className="w-8 h-8 text-primary" /> Head to Head Comparison
        </h1>
        <p className="text-muted-foreground">Compare up to 4 players across all technical and physical metrics.</p>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedIds.map((id, index) => (
          <Card key={index} className="glass-card bg-card/40 border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1 h-full" style={{ backgroundColor: colors[index] }} />
             <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <BadgeColor color={colors[index]}>Player {index + 1}</BadgeColor>
                  {selectedIds.length > 2 && (
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSelectedIds(selectedIds.filter((_, i) => i !== index))}>
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
                <Select value={id} onValueChange={(val) => {
                  const newIds = [...selectedIds];
                  newIds[index] = val;
                  setSelectedIds(newIds);
                }}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select Player" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPlayers.map(p => (
                      <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
             </CardContent>
          </Card>
        ))}

        {selectedIds.length < 4 && (
          <Button 
            variant="outline" 
            className="h-full min-h-[120px] border-dashed border-2 bg-transparent hover:bg-white/5 flex flex-col gap-2 text-muted-foreground"
            onClick={() => setSelectedIds([...selectedIds, mockPlayers.find(p => !selectedIds.includes(p.id))?.id || mockPlayers[0].id])}
          >
            <Plus className="w-6 h-6" /> Add Player
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Comparison */}
        <Card className="glass-card bg-card/40 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-display">Technical Profile Overlay</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  
                  {selectedPlayers.map((p, idx) => (
                    <Radar 
                      key={p.id}
                      name={p.name} 
                      dataKey={`player${idx}`} 
                      stroke={colors[idx]} 
                      fill={colors[idx]} 
                      fillOpacity={0.2} 
                    />
                  ))}
                  
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Comparison */}
        <div className="space-y-4">
           {selectedPlayers.map((p, idx) => (
             <Card key={p.id} className="glass-card bg-card/40 border-l-4" style={{ borderLeftColor: colors[idx] }}>
               <CardContent className="p-4">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-12 h-12 rounded bg-background flex items-center justify-center font-display font-bold text-lg">
                     {p.overall}
                   </div>
                   <div>
                     <h3 className="font-semibold text-white">{p.name}</h3>
                     <p className="text-xs text-muted-foreground">{p.club} • {p.age} yo</p>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3 text-sm">
                   <div className="bg-background/50 p-2 rounded">
                     <span className="text-muted-foreground text-xs block mb-1">Market Value</span>
                     <span className="font-medium text-white">{p.value}</span>
                   </div>
                   <div className="bg-background/50 p-2 rounded">
                     <span className="text-muted-foreground text-xs block mb-1">Fan Sentiment</span>
                     <span className="font-medium text-white">{p.sentiment}%</span>
                   </div>
                   <div className="bg-background/50 p-2 rounded">
                     <span className="text-muted-foreground text-xs block mb-1">Potential</span>
                     <span className="font-medium text-white">{p.potential}</span>
                   </div>
                   <div className="bg-background/50 p-2 rounded">
                     <span className="text-muted-foreground text-xs block mb-1">Wage</span>
                     <span className="font-medium text-white">{p.wage}</span>
                   </div>
                 </div>
               </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </div>
  );
}

function BadgeColor({ color, children }: { color: string, children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      {children}
    </div>
  )
}
