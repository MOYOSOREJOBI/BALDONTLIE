import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Users,
  TrendingUp,
  ShieldCheck,
  Target,
  Plus,
  ChevronRight,
  ArrowUpRight,
  BarChart2,
  AlertCircle,
} from "lucide-react";

const FORMATION_SLOTS = [
  { position: "GK", label: "Goalkeeper", filled: true, name: "M. Onana", age: 28, status: "keep" },
  { position: "RB", label: "Right Back", filled: true, name: "A. Wan-Bissaka", age: 26, status: "review" },
  { position: "CB", label: "Centre Back", filled: true, name: "H. Maguire", age: 31, status: "replace" },
  { position: "CB", label: "Centre Back", filled: true, name: "L. Martínez", age: 26, status: "keep" },
  { position: "LB", label: "Left Back", filled: false, name: null, age: null, status: "target" },
  { position: "CM", label: "Central Mid", filled: true, name: "B. Fernandes", age: 29, status: "keep" },
  { position: "CM", label: "Central Mid", filled: true, name: "C. Gallagher", age: 24, status: "review" },
  { position: "CAM", label: "Attacking Mid", filled: false, name: null, age: null, status: "target" },
  { position: "RW", label: "Right Wing", filled: true, name: "M. Rashford", age: 26, status: "review" },
  { position: "LW", label: "Left Wing", filled: true, name: "A. Diallo", age: 22, status: "keep" },
  { position: "ST", label: "Striker", filled: false, name: null, age: null, status: "target" },
];

const TRANSFER_TARGETS = [
  { name: "Leny Yoro", club: "Real Madrid", position: "CB", age: 19, value: "€65m", priority: "high", fit: 94 },
  { name: "Youssouf Fofana", club: "Monaco", position: "CM", age: 25, value: "€35m", priority: "high", fit: 88 },
  { name: "Nuno Mendes", club: "PSG", position: "LB", age: 22, value: "€55m", priority: "medium", fit: 91 },
];

const SQUAD_METRICS = [
  { label: "Avg Age", value: "26.4", delta: "-0.8", direction: "down", note: "Target: under 26" },
  { label: "Budget Used", value: "€120m", delta: "of €180m", direction: "neutral", note: "3 positions remaining" },
  { label: "Squad Depth", value: "72%", delta: "+8%", direction: "up", note: "from last cycle" },
  { label: "Homegrown", value: "4 / 25", delta: "UEFA min: 4", direction: "neutral", note: "Compliant" },
];

const STATUS_CONFIG: Record<string, { label: string; className: string }> = {
  keep: { label: "Keep", className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
  review: { label: "Review", className: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
  replace: { label: "Replace", className: "bg-red-500/15 text-red-300 border-red-500/20" },
  target: { label: "Open", className: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
};

export default function DirectorMode() {
  const [activeTab, setActiveTab] = useState<"squad" | "targets" | "budget">("squad");

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
            <Compass className="w-8 h-8 text-primary" />
            Director Mode
          </h1>
          <p className="text-muted-foreground">
            Strategic squad-planning workspace. Map your current roster, identify gaps, and model your next transfer window.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="border-blue-500/20 bg-blue-500/10 text-blue-200 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          >
            Beta
          </Badge>
          <Button variant="default" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Plan
          </Button>
        </div>
      </div>

      {/* Beta disclaimer */}
      <div className="flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/5 p-4 text-sm text-muted-foreground">
        <AlertCircle className="w-4 h-4 shrink-0 text-blue-400 mt-0.5" />
        <span>
          Director Mode is a <strong className="text-blue-300">beta planning workspace</strong>. Squad data, transfer values, and
          metrics are mock content. Real scouting integration and database-backed plans are on the roadmap.
        </span>
      </div>

      {/* Squad metrics row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SQUAD_METRICS.map((metric) => (
          <Card key={metric.label} className="bg-card/40 border-white/10">
            <CardContent className="p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-2xl font-display font-bold text-white">{metric.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {metric.direction === "up" && (
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                )}
                {metric.direction === "down" && (
                  <TrendingUp className="w-3 h-3 rotate-180 text-amber-400" />
                )}
                <span className="text-xs text-muted-foreground">
                  {metric.delta} · {metric.note}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tab nav */}
      <div className="flex gap-4 border-b border-white/10 pb-2">
        {(["squad", "targets", "budget"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-semibold pb-2 border-b-2 transition-colors capitalize ${
              activeTab === tab
                ? "border-primary text-white"
                : "border-transparent text-muted-foreground hover:text-white"
            }`}
          >
            {tab === "squad" ? "Squad Map" : tab === "targets" ? "Transfer Targets" : "Budget Model"}
          </button>
        ))}
      </div>

      {/* Squad Map tab */}
      {activeTab === "squad" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                Current Formation — 4-3-3
              </h2>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Change Formation
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {FORMATION_SLOTS.map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/8 bg-card/30 px-4 py-3 hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-xs text-primary shrink-0">
                      {slot.position}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {slot.filled ? slot.name : (
                          <span className="text-muted-foreground italic">Open position</span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {slot.label}
                        {slot.age ? ` · Age ${slot.age}` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={`rounded-full px-2 py-0 text-[10px] font-semibold uppercase tracking-widest ${STATUS_CONFIG[slot.status].className}`}
                    >
                      {STATUS_CONFIG[slot.status].label}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <ChevronRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Squad summary panel */}
          <div className="space-y-4">
            <Card className="bg-card/40 border-white/10">
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-sm font-display flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Squad Health
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-3">
                {[
                  { label: "Keep", count: 5, color: "bg-emerald-400" },
                  { label: "Review", count: 3, color: "bg-amber-400" },
                  { label: "Replace", count: 1, color: "bg-red-400" },
                  { label: "Open", count: 3, color: "bg-blue-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{item.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-white/10">
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-sm font-display flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Priority Gaps
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-2">
                {["Left Back", "Attacking Mid", "Striker"].map((pos) => (
                  <div key={pos} className="flex items-center justify-between rounded-lg bg-blue-500/5 border border-blue-500/15 px-3 py-2">
                    <span className="text-sm text-white">{pos}</span>
                    <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-200 text-[10px]">
                      Open
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Transfer Targets tab */}
      {activeTab === "targets" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {TRANSFER_TARGETS.length} targets shortlisted · mock data only
            </p>
            <Button variant="outline" size="sm" className="border-white/10 text-muted-foreground">
              <Plus className="w-3 h-3 mr-2" />
              Add Target
            </Button>
          </div>
          {TRANSFER_TARGETS.map((target, i) => (
            <Card key={i} className="bg-card/30 border-white/8 hover:bg-card/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center font-display font-bold text-primary shrink-0">
                    {target.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white truncate">{target.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {target.club} · {target.position} · Age {target.age}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-muted-foreground">Value</div>
                    <div className="font-bold text-white text-sm">{target.value}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Fit Score</div>
                    <div className="font-bold text-emerald-400 text-sm">{target.fit}%</div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      target.priority === "high"
                        ? "border-red-500/20 bg-red-500/10 text-red-300 text-[10px]"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-300 text-[10px]"
                    }
                  >
                    {target.priority === "high" ? "Priority" : "Watch"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Budget Model tab */}
      {activeTab === "budget" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/40 border-white/10">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-primary" />
                Window Budget
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
              {[
                { label: "Total Available", value: "€180m", bar: 100, color: "bg-primary" },
                { label: "Committed (3 targets)", value: "€120m", bar: 67, color: "bg-blue-500" },
                { label: "Remaining", value: "€60m", bar: 33, color: "bg-emerald-500" },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-white/10">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Potential Sales
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-3">
              {[
                { name: "H. Maguire", value: "€12m", status: "Likely" },
                { name: "M. Rashford", value: "€40m", status: "Possible" },
                { name: "C. Gallagher", value: "€28m", status: "Review" },
              ].map((sale, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-white/8 bg-black/20 px-3 py-2.5">
                  <span className="text-sm font-medium text-white">{sale.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-emerald-400 font-semibold">{sale.value}</span>
                    <Badge variant="outline" className="border-white/10 text-muted-foreground text-[10px]">
                      {sale.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-white/8 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Potential incoming</span>
                <span className="font-bold text-emerald-400">+€80m</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
