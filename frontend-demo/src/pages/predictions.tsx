import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Zap, AlertTriangle } from "lucide-react";

interface ScenarioBoardProps {
  title: string;
  accentClassName: string;
  accentBarClassName: string;
  data: { name: string; prob: number; nextMatch: string; isHigh: boolean }[];
}

function ScenarioBoard({ title, accentClassName, accentBarClassName, data }: ScenarioBoardProps) {
  return (
    <Card className="glass-card bg-card/40">
      <CardHeader className="border-b border-white/5 pb-4">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-xl font-display">{title}</CardTitle>
          <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
            Prototype board
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        {data.map((entry) => (
          <div key={`${title}-${entry.name}`} className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold text-white">{entry.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.nextMatch}
                </div>
              </div>
              <div className={`text-xl font-display font-semibold ${accentClassName}`}>{entry.prob}%</div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/6">
              <div
                className={`h-full rounded-full ${accentBarClassName}`}
                style={{ width: `${entry.prob}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {entry.isHigh ? "Higher-confidence mock scenario." : "Secondary watchlist scenario."}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

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
    <div className="space-y-8 p-4 pb-20 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Target className="w-8 h-8 text-pink-500" /> Match Scenarios & Outlooks
          </h1>
          <p className="text-muted-foreground">
            Prototype scenario boards for upcoming fixtures using mock attacking inputs.
            Useful for UI review, not live or AI-backed decision support.
          </p>
        </div>
        
        <div className="flex w-full gap-2 md:w-auto">
          <Select defaultValue="next">
            <SelectTrigger className="w-full bg-card/50 md:w-[180px]">
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

      <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/8 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white">Prototype outlooks only</div>
            <p className="text-sm leading-6 text-muted-foreground">
              These probabilities are static mock signals shaped to explain the product
              concept. They are not live predictions, not betting advice, and not model-backed production outputs.
            </p>
          </div>
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
                  <Zap className="w-4 h-4" /> Top Goal Scenario
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Erling Haaland to Score</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Mock chance-quality inputs point to a strong shot volume profile against teams that keep a high line.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-background/50">Prototype signal</Badge>
                  <Badge variant="outline" className="bg-background/50">Chance pressure: high</Badge>
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
                  <Zap className="w-4 h-4" /> Top Assist Scenario
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Kevin De Bruyne to Assist</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Mock creative-input patterns point to strong chance creation against deeper, low-pressing midfields.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-background/50">Prototype signal</Badge>
                  <Badge variant="outline" className="bg-background/50">Creative pressure: high</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScenarioBoard
          title="Scoring Outlook Board"
          accentClassName="text-primary"
          accentBarClassName="bg-primary"
          data={goalPredictionData}
        />

        <ScenarioBoard
          title="Assist Outlook Board"
          accentClassName="text-blue-400"
          accentBarClassName="bg-blue-500"
          data={assistPredictionData}
        />
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
            <p className="text-xs text-muted-foreground">Played 270 mins in 8 days. This prototype board flags a lower attacking outlook due to expected minute management.</p>
          </div>
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="text-sm font-medium text-red-500 mb-1">Tactical Mismatch: M. Jobi</div>
            <p className="text-xs text-muted-foreground">Dortmund's low block historically restricts central zone 14 progressions. Lower attacking upside is shown in this demo outlook.</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
