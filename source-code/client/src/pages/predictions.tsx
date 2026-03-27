import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Zap, TrendingUp, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function Predictions() {
  const goalPredictionData = [
    { name: "E. Haaland", prob: 88, nextMatch: "vs CHE", isHigh: true },
    { name: "J. Bellingham", prob: 72, nextMatch: "vs BAR", isHigh: true },
    { name: "V. Júnior", prob: 65, nextMatch: "vs BAR", isHigh: false },
    { name: "M. Jobi", prob: 58, nextMatch: "vs DOR", isHigh: false },
    { name: "L. Yamal", prob: 45, nextMatch: "vs RMA", isHigh: false },
  ];

  const assistPredictionData = [
    { name: "K. De Bruyne", prob: 82, nextMatch: "vs CHE", isHigh: true },
    { name: "T. Alexander-Arnold", prob: 75, nextMatch: "vs ARS", isHigh: true },
    { name: "M. Jobi", prob: 68, nextMatch: "vs DOR", isHigh: false },
    { name: "L. Yamal", prob: 60, nextMatch: "vs RMA", isHigh: false },
    { name: "B. Saka", prob: 55, nextMatch: "vs LIV", isHigh: false },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Target className="w-8 h-8 text-pink-500" /> Goal & Assist Predictions
          </h1>
          <p className="text-muted-foreground">AI-driven forecasts for upcoming fixtures based on xG and xA trends.</p>
        </div>
        
        <div className="flex gap-2">
          <Select defaultValue="next">
            <SelectTrigger className="w-[180px] bg-card/50">
              <SelectValue placeholder="Timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next Match</SelectItem>
              <SelectItem value="3">Next 3 Matches</SelectItem>
              <SelectItem value="5">Next 5 Matches</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Top Prediction Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card bg-card/40 overflow-hidden relative border-pink-500/20">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-pink-500/30 flex items-center justify-center relative">
                <span className="text-3xl md:text-4xl font-display font-bold text-white">88%</span>
                <div className="absolute -bottom-2 bg-pink-500 text-white text-[10px] md:text-xs px-2 py-1 rounded font-semibold uppercase tracking-wider">
                  Highest Prob
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-pink-400 text-xs md:text-sm font-semibold mb-2 uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Top Goal Prediction
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Erling Haaland to Score</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  xG models show a significant spike in high-quality chances created against teams employing a high defensive line.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-background/50">Form: Incredible</Badge>
                  <Badge variant="outline" className="bg-background/50">Opponent xGA: 1.8</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card bg-card/40 overflow-hidden relative border-blue-500/20">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-blue-500/30 flex items-center justify-center relative">
                <span className="text-3xl md:text-4xl font-display font-bold text-white">82%</span>
                <div className="absolute -bottom-2 bg-blue-500 text-white text-[10px] md:text-xs px-2 py-1 rounded font-semibold uppercase tracking-wider">
                  Highest Prob
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs md:text-sm font-semibold mb-2 uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Top Assist Prediction
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Kevin De Bruyne to Assist</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  xA data indicates extreme creative output when facing low-pressing midfields like Chelsea's.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-background/50">Form: Elite</Badge>
                  <Badge variant="outline" className="bg-background/50">Key Passes: 4.2/g</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Probabilities Chart - Goals */}
        <Card className="glass-card bg-card/40">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-display">Likelihood to Score</CardTitle>
            <Button variant="ghost" size="sm">Full List</Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={goalPredictionData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground))" fontSize={14} tickLine={false} axisLine={false} width={100} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--secondary))', opacity: 0.5}}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    formatter={(value: number) => [`${value}%`, 'Probability']}
                  />
                  <Bar dataKey="prob" radius={[0, 4, 4, 0]} barSize={24}>
                    {goalPredictionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isHigh ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Probabilities Chart - Assists */}
        <Card className="glass-card bg-card/40">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-display">Likelihood to Assist</CardTitle>
            <Button variant="ghost" size="sm">Full List</Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={assistPredictionData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground))" fontSize={14} tickLine={false} axisLine={false} width={100} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--secondary))', opacity: 0.5}}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    formatter={(value: number) => [`${value}%`, 'Probability']}
                  />
                  <Bar dataKey="prob" radius={[0, 4, 4, 0]} barSize={24}>
                    {assistPredictionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isHigh ? '#3b82f6' : 'hsl(var(--muted-foreground))'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Confidence Alerts */}
      <Card className="glass-card bg-card/40">
        <CardHeader>
          <CardTitle className="text-lg font-display flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" /> Watchouts
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="text-sm font-medium text-yellow-500 mb-1">Fatigue Risk: V. Júnior</div>
            <p className="text-xs text-muted-foreground">Played 270 mins in 8 days. Scoring probability reduced by 15% due to expected minute management.</p>
          </div>
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="text-sm font-medium text-red-500 mb-1">Tactical Mismatch: M. Jobi</div>
            <p className="text-xs text-muted-foreground">Dortmund's low block historically restricts central zone 14 progressions. Lower xG expected.</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}