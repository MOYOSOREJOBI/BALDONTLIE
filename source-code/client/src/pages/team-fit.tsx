import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Layers,
  CheckCircle2,
  Loader2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  AlertCircle,
  Activity,
  BarChart2,
  Clock,
} from "lucide-react";

const squadNeeds: Record<string, { role: string; urgency: string; urgencyColor: string; note: string }[]> = {
  "real-madrid": [
    { role: "Destroyer 6", urgency: "High", urgencyColor: "text-red-400 bg-red-500/10 border-red-500/25", note: "Casemiro succession still unresolved." },
    { role: "Inverted Fullback / L", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Shaw / Camavinga rotation thin." },
    { role: "Box Winger / R", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Antony replacement still open." },
  ],
  "arsenal": [
    { role: "Striker / 9", urgency: "High", urgencyColor: "text-red-400 bg-red-500/10 border-red-500/25", note: "No true plan B for Jesus." },
    { role: "Holding Midfielder", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Partey injury cover needed." },
    { role: "Inv. Winger / L", urgency: "Low", urgencyColor: "text-primary bg-primary/10 border-primary/25", note: "Trossard depth fine for now." },
  ],
  "man-city": [
    { role: "Creative CM", urgency: "High", urgencyColor: "text-red-400 bg-red-500/10 border-red-500/25", note: "De Bruyne cover urgent." },
    { role: "LB / Inverted", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Gvardiol adapting but depth thin." },
    { role: "False 9 Cover", urgency: "Low", urgencyColor: "text-primary bg-primary/10 border-primary/25", note: "Haaland availability strong." },
  ],
  "barcelona": [
    { role: "Inv. Fullback / R", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Cancelo future uncertain." },
    { role: "Destroyer 6", urgency: "Low", urgencyColor: "text-primary bg-primary/10 border-primary/25", note: "Gavi / Pedri balance works." },
    { role: "Striker", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Lewandowski age curve watch." },
  ],
  "bayern": [
    { role: "CB / Build", urgency: "High", urgencyColor: "text-red-400 bg-red-500/10 border-red-500/25", note: "Defensive depth gap post-Pavard." },
    { role: "Wide Forward / L", urgency: "Medium", urgencyColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/25", note: "Sané contract risk." },
    { role: "Box-to-Box CM", urgency: "Low", urgencyColor: "text-primary bg-primary/10 border-primary/25", note: "Kimmich / Goretzka solid base." },
  ],
};

const formationContext: Record<string, { system: string; pressIntensity: string; xGFor: string; xGAgainst: string; avgAge: string; notes: string[] }> = {
  "4-3-3": {
    system: "4-3-3 Attacking (Fluid)",
    pressIntensity: "High (PPDA 7.2)",
    xGFor: "2.4 / game",
    xGAgainst: "0.9 / game",
    avgAge: "25.8",
    notes: [
      "Wide forwards must be able to invert and carry centrally.",
      "The 6 needs elite press resistance — not just a destroyer.",
      "Full-backs are attacking vectors, not defensive anchors.",
    ],
  },
  "4-2-3-1": {
    system: "4-2-3-1 Possession",
    pressIntensity: "Medium (PPDA 11.4)",
    xGFor: "2.1 / game",
    xGAgainst: "0.8 / game",
    avgAge: "26.4",
    notes: [
      "Double pivot must be able to split and receive under pressure.",
      "The 10 needs carry and link-play ability above chance creation alone.",
      "Wide midfielders track back — not pure wingers.",
    ],
  },
  "3-4-2-1": {
    system: "3-4-2-1 High Press",
    pressIntensity: "Very High (PPDA 5.8)",
    xGFor: "2.2 / game",
    xGAgainst: "1.1 / game",
    avgAge: "25.2",
    notes: [
      "Wing-backs must have the stamina and pace to operate as both full-back and winger.",
      "The 3-man back line needs elite aerial and 1v1 ability.",
      "High press requires all 11 to be aerobically elite.",
    ],
  },
  "5-3-2": {
    system: "5-3-2 Counter Attack",
    pressIntensity: "Low (PPDA 18.3)",
    xGFor: "1.4 / game",
    xGAgainst: "0.7 / game",
    avgAge: "27.1",
    notes: [
      "Strikers need elite off-ball movement and counter-run ability.",
      "Wing-backs serve primarily as a 2nd line of defense.",
      "Central midfielders must transition quickly and cover ground.",
    ],
  },
};

const matchResults = [
  {
    name: "Moyosore Jobi",
    club: "Bayer Leverkusen",
    age: 21,
    position: "CAM/CM",
    score: 98,
    scoreColor: "text-primary",
    borderColor: "border-primary/25",
    checks: [
      { label: "Role Fit", note: "Perfect for advancing play in half-spaces." },
      { label: "Pressing", note: "Matches desired intensity metrics (18.4 PP90)." },
      { label: "Age Profile", note: "Fits long-term project perfectly at 21." },
    ],
    metrics: [
      { label: "Carries / 90", val: "8.4" },
      { label: "Prog Passes / 90", val: "7.1" },
      { label: "Press Actions / 90", val: "18.4" },
      { label: "Est. Fee", val: "EUR 65M" },
    ],
  },
  {
    name: "Jamal Musiala",
    club: "Bayern Munich",
    age: 21,
    position: "CAM/LW",
    score: 94,
    scoreColor: "text-green-400",
    borderColor: "border-green-500/20",
    checks: [
      { label: "Role Fit", note: "Natural half-space runner who can drift inside." },
      { label: "Dribbling", note: "3.4 successful take-ons per 90." },
      { label: "Wage Fit", note: "Contract leverage window opens 2025." },
    ],
    metrics: [
      { label: "Take-ons / 90", val: "3.4" },
      { label: "Prog Carries / 90", val: "6.8" },
      { label: "xA / 90", val: "0.31" },
      { label: "Est. Fee", val: "EUR 90M" },
    ],
  },
  {
    name: "Xavi Simons",
    club: "RB Leipzig",
    age: 21,
    position: "CAM/RW",
    score: 88,
    scoreColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    checks: [
      { label: "Role Fit", note: "Versatile across the front three and CM." },
      { label: "Pressing", note: "High sprint count — press intensity matches profile." },
      { label: "Potential", note: "91 potential — room for ceiling growth." },
    ],
    metrics: [
      { label: "Prog Passes / 90", val: "5.9" },
      { label: "xG+xA / 90", val: "0.48" },
      { label: "Pressures / 90", val: "21.2" },
      { label: "Est. Fee", val: "EUR 55M" },
    ],
  },
  {
    name: "Grace Clinton",
    club: "Man Utd Women",
    age: 20,
    position: "AM/Winger",
    score: 81,
    scoreColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    checks: [
      { label: "Style Fit", note: "Creative carrier profile matching the system ask." },
      { label: "Value", note: "Early-career trajectory and fee both still rising." },
      { label: "Watch", note: "Women's pathway — different competitive context." },
    ],
    metrics: [
      { label: "Carries / 90", val: "7.2" },
      { label: "Take-ons / 90", val: "2.9" },
      { label: "xA / 90", val: "0.22" },
      { label: "Est. Fee", val: "EUR 4M" },
    ],
  },
  {
    name: "Kobbie Mainoo",
    club: "Manchester United",
    age: 19,
    position: "CM/DM",
    score: 76,
    scoreColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    checks: [
      { label: "Role Fit", note: "Natural progression midfielder who carries under press." },
      { label: "Press Resistance", note: "Ball retention in tight spaces is strong." },
      { label: "Cost", note: "Not available externally but worth the benchmark." },
    ],
    metrics: [
      { label: "Prog Passes / 90", val: "6.3" },
      { label: "Ball Wins / 90", val: "4.1" },
      { label: "Pressures / 90", val: "19.8" },
      { label: "Est. Fee", val: "N/A" },
    ],
  },
];

const recentSearches = [
  { label: "Real Madrid · 4-3-3 · Creative CM", time: "Today" },
  { label: "Arsenal · 4-2-3-1 · Striker", time: "Yesterday" },
  { label: "Man City · 4-3-3 · LB Inverted", time: "3 days ago" },
];

export default function TeamFit() {
  const { t } = useTranslation();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [targetClub, setTargetClub] = useState("real-madrid");
  const [tacticalSystem, setTacticalSystem] = useState("4-3-3");

  const handleMatchmaker = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const needs = squadNeeds[targetClub] ?? squadNeeds["real-madrid"];
  const formation = formationContext[tacticalSystem] ?? formationContext["4-3-3"];

  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">{t("Tactical Fit Finder")}</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              {t("Demo workspace")}
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Layers className="h-8 w-8 text-primary" /> {t("Tactical Fit Finder")}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Discover players that match a club's tactical system and current squad needs. All results are
            mock data shaped to demonstrate the scouting intelligence concept.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div className="space-y-5">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Target Profile")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 pt-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">{t("Target Club")}</label>
                <Select value={targetClub} onValueChange={setTargetClub}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-madrid">Real Madrid CF</SelectItem>
                    <SelectItem value="arsenal">Arsenal FC</SelectItem>
                    <SelectItem value="bayern">Bayern Munich</SelectItem>
                    <SelectItem value="man-city">Manchester City</SelectItem>
                    <SelectItem value="barcelona">FC Barcelona</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">{t("Tactical System")}</label>
                <Select value={tacticalSystem} onValueChange={setTacticalSystem}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4-3-3">4-3-3 Attacking (Fluid)</SelectItem>
                    <SelectItem value="4-2-3-1">4-2-3-1 Possession</SelectItem>
                    <SelectItem value="3-4-2-1">3-4-2-1 High Press</SelectItem>
                    <SelectItem value="5-3-2">5-3-2 Counter Attack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">{t("Key Needs")}</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">Creative CM</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">High Press</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">U23</Badge>
                  <Badge variant="outline" className="cursor-pointer border-dashed border-white/30 text-muted-foreground">
                    + Add
                  </Badge>
                </div>
              </div>
              <Button
                className="w-full bg-primary font-bold text-primary-foreground"
                onClick={handleMatchmaker}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("Running Models...")}
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" /> {t("Run AI Matchmaker")}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-400" />
                <CardTitle className="text-sm font-display text-white">{t("Squad needs")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {needs.map((need) => (
                <div
                  key={need.role}
                  className={`rounded-2xl border p-3 ${need.urgencyColor}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">{need.role}</span>
                    <Badge className={`text-[10px] ${need.urgencyColor}`}>{need.urgency}</Badge>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{need.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-400" />
                <CardTitle className="text-sm font-display text-white">{t("Formation context")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Press", val: formation.pressIntensity },
                  { label: "xG For", val: formation.xGFor },
                  { label: "xG Ag.", val: formation.xGAgainst },
                  { label: "Avg Age", val: formation.avgAge },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/8 bg-black/20 p-2.5 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                    <div className="mt-1 text-sm font-bold text-white">{m.val}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {formation.notes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-2 rounded-xl border border-white/8 bg-black/20 p-3"
                  >
                    <BarChart2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <p className="text-xs leading-5 text-muted-foreground">{note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-sm font-display text-white">{t("Recent searches")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pt-4">
              {recentSearches.map((s) => (
                <button
                  key={s.label}
                  className="flex w-full items-center justify-between rounded-xl border border-white/8 bg-black/20 px-3 py-2.5 text-left hover:bg-black/40 transition-colors"
                >
                  <span className="text-sm text-white">{s.label}</span>
                  <span className="text-xs text-muted-foreground">{s.time}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          {isAnalyzing && (
            <Card className="glass-card flex min-h-[400px] flex-col items-center justify-center rounded-[28px] border-white/8 bg-card/40">
              <div className="relative mb-6 h-16 w-16">
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent" />
                <div className="absolute inset-2 animate-spin rounded-full border-4 border-b-blue-500 border-l-blue-500 border-t-transparent border-r-transparent" style={{ animationDirection: "reverse" }} />
              </div>
              <h3 className="animate-pulse text-xl font-medium text-white">{t("Scanning 38,400+ Profiles...")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Cross-referencing stylistic fit and expected impact.</p>
            </Card>
          )}

          {!isAnalyzing && showResults && (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-semibold text-white">
                  {t("Top System Fits")}
                </h2>
                <Badge className="border-primary/30 bg-primary/20 text-primary">
                  {matchResults.length} matches
                </Badge>
              </div>

              <div className="space-y-4">
                {matchResults.map((player, idx) => (
                  <Card
                    key={player.name}
                    className={`glass-card cursor-pointer rounded-[28px] border bg-card/40 transition-all hover:bg-card/60 ${player.borderColor}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-lg text-white">
                            {player.name.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-white">{player.name}</h3>
                              {idx === 0 && (
                                <Badge className="border-none bg-primary/10 text-primary text-[10px]">{t("Top Pick")}</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {player.club} · {player.age} yo · {player.position}
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className={`text-3xl font-display font-bold ${player.scoreColor}`}>
                            {player.score}%
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("Match Score")}</div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-3 border-t border-white/6 pt-4 sm:grid-cols-3">
                        {player.checks.map((check) => (
                          <div key={check.label} className="flex items-start gap-2">
                            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${player.scoreColor}`} />
                            <div className="text-sm">
                              <span className="block font-medium text-white">{check.label}</span>
                              <span className="text-muted-foreground">{check.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {player.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl border border-white/8 bg-black/20 p-2.5 text-center">
                            <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                              {m.label}
                            </div>
                            <div className="mt-1 text-sm font-bold text-white">{m.val}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <CardTitle className="text-base font-display text-white">{t("System comparison")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-5">
            {[
              { system: "4-3-3", press: "High", xG: "2.4", suitability: "Best fit", color: "text-primary" },
              { system: "4-2-3-1", press: "Medium", xG: "2.1", suitability: "Good fit", color: "text-green-400" },
              { system: "3-4-2-1", press: "Very High", xG: "2.2", suitability: "Conditional", color: "text-yellow-400" },
              { system: "5-3-2", press: "Low", xG: "1.4", suitability: "Poor fit", color: "text-muted-foreground" },
            ].map((row) => (
              <div
                key={row.system}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
              >
                <div>
                  <div className="text-sm font-semibold text-white">{row.system}</div>
                  <div className="text-xs text-muted-foreground">Press: {row.press} · xG: {row.xG}</div>
                </div>
                <span className={`text-xs font-semibold ${row.color}`}>{row.suitability}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <CardTitle className="text-base font-display text-white">{t("Age curve analysis")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-5">
            {[
              { band: "U19 ceiling", count: "1", note: "High potential, long runway." },
              { band: "U21 elite", count: "3", note: "Peak development, style-fit priority window." },
              { band: "U24 prime", count: "1", note: "Ready now, growing value." },
              { band: "U28 proven", count: "0", note: "None in current results." },
            ].map((row) => (
              <div key={row.band} className="flex items-start justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold text-white">{row.band}</div>
                  <div className="text-xs text-muted-foreground">{row.note}</div>
                </div>
                <span className="ml-4 shrink-0 text-2xl font-display font-bold text-white">{row.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-yellow-400" />
              <CardTitle className="text-base font-display text-white">{t("Fee range overview")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-5">
            {[
              { label: "Under EUR 10M", count: 1, note: "Women's market — Grace Clinton range." },
              { label: "EUR 40–60M", count: 2, note: "Simons · Mainoo (internal benchmark)." },
              { label: "EUR 60–80M", count: 1, note: "Jobi · realistic for Leverkusen exit." },
              { label: "EUR 80M+", count: 1, note: "Musiala — premium ceiling price." },
            ].map((row) => (
              <div key={row.label} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{row.label}</span>
                  <span className="text-lg font-display font-bold text-white">{row.count}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{row.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
