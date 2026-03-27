import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Swords, Users, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

export default function TeamCompare() {
  const teamStats = [
    { subject: 'Attack', teamA: 92, teamB: 85, fullMark: 100 },
    { subject: 'Defense', teamA: 88, teamB: 94, fullMark: 100 },
    { subject: 'Midfield Control', teamA: 95, teamB: 89, fullMark: 100 },
    { subject: 'Pressing', teamA: 85, teamB: 91, fullMark: 100 },
    { subject: 'Chance Creation', teamA: 90, teamB: 82, fullMark: 100 },
    { subject: 'Squad Depth', teamA: 96, teamB: 88, fullMark: 100 },
  ];

  const positionStrength = [
    { pos: 'GK', teamA: 88, teamB: 92 },
    { pos: 'DEF', teamA: 85, teamB: 90 },
    { pos: 'MID', teamA: 94, teamB: 88 },
    { pos: 'ATT', teamA: 92, teamB: 85 },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary" /> Squad Comparison
        </h1>
        <p className="text-muted-foreground">Analyze team strengths, tactical matchups, and squad depth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card/20 p-6 rounded-xl border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        {/* Team A Select */}
        <div className="flex flex-col items-center gap-4 relative z-10">
           <Select defaultValue="rma">
            <SelectTrigger className="w-full max-w-xs bg-background/80 text-xl h-12">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rma">Real Madrid</SelectItem>
              <SelectItem value="mci">Manchester City</SelectItem>
              <SelectItem value="bay">Bayern Munich</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-center">
             <div className="text-sm text-muted-foreground">Squad Value</div>
             <div className="text-2xl font-display font-bold text-primary">€1.04B</div>
          </div>
        </div>

        {/* Team B Select */}
        <div className="flex flex-col items-center gap-4 relative z-10">
           <Select defaultValue="mci">
            <SelectTrigger className="w-full max-w-xs bg-background/80 text-xl h-12 border-blue-500/50">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rma">Real Madrid</SelectItem>
              <SelectItem value="mci">Manchester City</SelectItem>
              <SelectItem value="bay">Bayern Munich</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-center">
             <div className="text-sm text-muted-foreground">Squad Value</div>
             <div className="text-2xl font-display font-bold text-blue-500">€1.26B</div>
          </div>
        </div>
        
        {/* VS Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center font-display font-bold text-muted-foreground z-20">
          VS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Compare */}
        <Card className="glass-card bg-card/40">
          <CardHeader>
            <CardTitle className="text-lg font-display">Tactical Profile Matchup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={teamStats}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Team A" dataKey="teamA" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                  <Radar name="Team B" dataKey="teamB" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
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

        {/* Position Group Strength */}
        <Card className="glass-card bg-card/40">
          <CardHeader>
            <CardTitle className="text-lg font-display">Position Group Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={positionStrength} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="pos" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--secondary))', opacity: 0.5}}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar name="Team A" dataKey="teamA" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={16} />
                  <Bar name="Team B" dataKey="teamB" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
