import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Filter,
  BookmarkPlus,
  Plus,
  Database,
  Save,
  Bell,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  ChevronRight,
  Star,
  Clock,
  Users,
  Target,
  BarChart2,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const searchResults = [
  { name: "Joao Neves", club: "Benfica", nation: "Portugal", age: 19, role: "Box-to-Box", contract: "Jun 2025", match: 98, matchColor: "text-primary" },
  { name: "Warren Zaïre-Emery", club: "PSG", nation: "France", age: 18, role: "Box-to-Box", contract: "Jun 2026", match: 94, matchColor: "text-primary" },
  { name: "Arthur Vermeeren", club: "Atletico Madrid", nation: "Belgium", age: 19, role: "Deep Lying", contract: "Jun 2027", match: 89, matchColor: "text-green-400" },
  { name: "Kobbie Mainoo", club: "Man United", nation: "England", age: 19, role: "Box-to-Box", contract: "Jun 2028", match: 84, matchColor: "text-green-400" },
  { name: "Grace Clinton", club: "Man Utd Women", nation: "England", age: 20, role: "Inv. Winger", contract: "Jun 2025", match: 79, matchColor: "text-blue-400" },
  { name: "Yui Hasegawa", club: "Man City Women", nation: "Japan", age: 27, role: "Destroyer 6", contract: "Jun 2026", match: 76, matchColor: "text-blue-400" },
  { name: "Pau Cubarsí", club: "Barcelona", nation: "Spain", age: 17, role: "CB / Build", contract: "Jun 2027", match: 72, matchColor: "text-yellow-400" },
];

const shortlists = [
  {
    name: "Summer Window Targets",
    count: 5,
    updated: "2 days ago",
    accentClassName: "border-primary/30 bg-primary/10 text-primary",
    players: [
      { name: "Joao Neves", club: "Benfica", note: "Priority DM target — expiring deal leverage." },
      { name: "Nico Williams", club: "Athletic Bilbao", note: "Winger profile that inverts and carries." },
      { name: "Martin Zubimendi", club: "Real Sociedad", note: "Destroyer 6, immediate squad readiness." },
      { name: "Grace Clinton", club: "Man Utd Women", note: "Women's window — value and upside both rising." },
      { name: "Lamine Yamal", club: "Barcelona", note: "Long-term watch, not realistic this window." },
    ],
  },
  {
    name: "Emergency CB Cover",
    count: 3,
    updated: "5 days ago",
    accentClassName: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    players: [
      { name: "Pau Cubarsí", club: "Barcelona", note: "Young but composure and reading of game is elite." },
      { name: "Leny Yoro", club: "Lille", note: "Fee risk is high but ceiling matches the need." },
      { name: "Murillo", club: "Nottingham Forest", note: "Budget-realistic option with PL adaptation already proven." },
    ],
  },
  {
    name: "Women's Watch List",
    count: 4,
    updated: "1 week ago",
    accentClassName: "border-pink-500/30 bg-pink-500/10 text-pink-300",
    players: [
      { name: "Grace Clinton", club: "Man Utd Women", note: "Creative spike showing in key matches." },
      { name: "Esmee Brugts", club: "Barcelona Femení", note: "Hybrid wide runner profile." },
      { name: "Vicky Lopez", club: "Barcelona Femení", note: "Development track — one for next cycle." },
      { name: "Khadija Shaw", club: "Man City Women", note: "Elite output, contract leverage window opens soon." },
    ],
  },
];

const successionScenarios = [
  {
    role: "Deep-Lying Playmaker",
    outgoing: { name: "Casemiro", club: "Man United", contract: "Jun 2026", age: 32, wage: "GBP 350k/wk" },
    internal: [
      { name: "Nico Paz", note: "Academy — 1-2 year readiness timeline.", readinessColor: "text-yellow-400" },
    ],
    external: [
      { name: "Martín Zubimendi", club: "Real Sociedad", fee: "EUR 60M", fit: 94, ready: "Immediate", readinessColor: "text-primary" },
      { name: "Joao Gomes", club: "Wolves", fee: "EUR 35M", fit: 87, ready: "Immediate", readinessColor: "text-primary" },
    ],
  },
  {
    role: "Inv. Fullback / Left",
    outgoing: { name: "Luke Shaw", club: "Man United", contract: "Jun 2025", age: 28, wage: "GBP 180k/wk" },
    internal: [
      { name: "Tyrell Malacia", note: "Long-term injury return — fitness risk remains.", readinessColor: "text-red-400" },
    ],
    external: [
      { name: "Theo Hernández", club: "AC Milan", fee: "EUR 50M", fit: 91, ready: "Immediate", readinessColor: "text-primary" },
      { name: "Milos Kerkez", club: "AFC Bournemouth", fee: "EUR 40M", fit: 82, ready: "Immediate", readinessColor: "text-green-400" },
    ],
  },
  {
    role: "Box Winger / Right",
    outgoing: { name: "Antony", club: "Man United", contract: "Jun 2027", age: 24, wage: "GBP 200k/wk" },
    internal: [
      { name: "Alejandro Garnacho", note: "Strong internal option — promotion path likely.", readinessColor: "text-primary" },
    ],
    external: [
      { name: "Nico Williams", club: "Athletic Bilbao", fee: "EUR 58M", fit: 96, ready: "Immediate", readinessColor: "text-primary" },
      { name: "Bryan Mbeumo", club: "Brentford", fee: "EUR 45M", fit: 88, ready: "Immediate", readinessColor: "text-green-400" },
    ],
  },
];

const scoutAlerts = [
  { name: "Joao Neves", trigger: "Contract enters 12-month notice window", urgency: "High", urgencyColor: "text-red-400 border-red-500/30 bg-red-500/10" },
  { name: "Lamine Yamal", trigger: "Take-on success rate surpassed 3.0 per 90", urgency: "Watch", urgencyColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  { name: "Grace Clinton", trigger: "Top-5 in progressive carries per 90 this month", urgency: "Rising", urgencyColor: "text-primary border-primary/30 bg-primary/10" },
];

const marketMovers = [
  { name: "Lamine Yamal", club: "Barcelona", shift: "+EUR 12M", color: "text-primary" },
  { name: "Nico Williams", club: "Athletic", shift: "+EUR 8M", color: "text-primary" },
  { name: "Antony", club: "Man United", shift: "−EUR 18M", color: "text-red-400" },
  { name: "Khadija Shaw", club: "Man City W.", shift: "+EUR 3M", color: "text-pink-300" },
];

export default function ScoutWorkspace() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("search");
  const [roleFilter, setRoleFilter] = useState("inverted-fb");
  const [contractFilter, setContractFilter] = useState("under-12");
  const [metricFilter, setMetricFilter] = useState("prog-passes");
  const [leagueFilter, setLeagueFilter] = useState("all");

  const tabs = [
    { id: "search", label: t("Global Search") },
    { id: "shortlists", label: t("My Shortlists") },
    { id: "succession", label: t("Succession Planning") },
  ];

  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Scout Workspace</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              {t("Demo")}
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Database className="h-8 w-8 text-primary" /> Scout Workspace
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Scouting workflow concept: search, shortlists, and succession planning in one workspace.
            All results are structured mock data — real player database and alerts API come later.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" className="border-primary/50 text-primary">
            <Save className="mr-2 h-4 w-4" /> {t("Save Filter")}
          </Button>
          <Button variant="default">
            <Plus className="mr-2 h-4 w-4" /> {t("New Shortlist")}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="space-y-5">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 p-4">
              <CardTitle className="flex items-center gap-2 text-sm font-display">
                <Filter className="h-4 w-4 text-primary" /> {t("Advanced Filters")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("Role / Position")}
                </label>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inverted-fb">Inverted Fullback</SelectItem>
                    <SelectItem value="box-to-box">Box-to-Box Midfielder</SelectItem>
                    <SelectItem value="false-9">False 9</SelectItem>
                    <SelectItem value="sweeper-keeper">Sweeper Keeper</SelectItem>
                    <SelectItem value="destroyer-6">Destroyer 6</SelectItem>
                    <SelectItem value="inv-winger">Inverted Winger</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("Age Range")}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="16"
                    className="border-white/10 bg-card/60 [appearance:textfield] focus-visible:ring-primary/50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span className="shrink-0 text-muted-foreground">—</span>
                  <Input
                    type="number"
                    placeholder="26"
                    className="border-white/10 bg-card/60 [appearance:textfield] focus-visible:ring-primary/50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("Contract Expiry")}
                </label>
                <Select value={contractFilter} onValueChange={setContractFilter}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-12">Under 12 months</SelectItem>
                    <SelectItem value="1-2-years">1–2 years</SelectItem>
                    <SelectItem value="3-plus">3+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  League
                </label>
                <Select value={leagueFilter} onValueChange={setLeagueFilter}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Leagues</SelectItem>
                    <SelectItem value="epl">Premier League</SelectItem>
                    <SelectItem value="laliga">La Liga</SelectItem>
                    <SelectItem value="bundesliga">Bundesliga</SelectItem>
                    <SelectItem value="serie-a">Serie A</SelectItem>
                    <SelectItem value="liga-f">Liga F (Women's)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("Key Metric (Per 90)")}
                </label>
                <Select value={metricFilter} onValueChange={setMetricFilter}>
                  <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prog-passes">Progressive Passes &gt; 5.0</SelectItem>
                    <SelectItem value="take-ons">Successful Take-ons &gt; 2.5</SelectItem>
                    <SelectItem value="interceptions">Interceptions &gt; 1.5</SelectItem>
                    <SelectItem value="carries">Progressive Carries &gt; 4.0</SelectItem>
                    <SelectItem value="pressures">Pressures &gt; 20</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="mt-2 w-full" variant="secondary">
                {t("Apply Filters")}
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-display">{t("Scout Alerts")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 p-4">
              {scoutAlerts.map((alert) => (
                <div
                  key={alert.name}
                  className={`rounded-2xl border p-3 ${alert.urgencyColor}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">{alert.name}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${alert.urgencyColor.split(" ")[0]}`}>
                      {alert.urgency}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{alert.trigger}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 p-4">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-4 w-4 text-blue-400" />
                <CardTitle className="text-sm font-display">{t("Market movers")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 p-4">
              {marketMovers.map((m) => (
                <div key={m.name} className="flex items-center justify-between rounded-xl border border-white/8 bg-black/20 px-3 py-2.5">
                  <div>
                    <div className="text-sm font-medium text-white">{m.name}</div>
                    <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{m.club}</div>
                  </div>
                  <span className={`text-sm font-bold ${m.color}`}>{m.shift}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <div className="flex gap-1 rounded-2xl border border-white/8 bg-card/40 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-black"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "search" && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search the prototype scouting pool..."
                  className="w-full border-white/10 bg-black/40 pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer border-white/10 hover:bg-white/5">All roles</Badge>
                <Badge className="cursor-pointer bg-primary/10 text-primary">Box-to-Box</Badge>
                <Badge variant="outline" className="cursor-pointer border-white/10 hover:bg-white/5">Winger</Badge>
                <Badge variant="outline" className="cursor-pointer border-white/10 hover:bg-white/5">Defender</Badge>
                <Badge variant="outline" className="cursor-pointer border-pink-500/20 bg-pink-500/5 text-pink-300">Women's</Badge>
              </div>

              <div className="space-y-3">
                {searchResults.map((p, i) => (
                  <Card
                    key={i}
                    className="cursor-pointer rounded-[24px] border-white/8 bg-card/30 transition-colors hover:bg-card/60"
                  >
                    <CardContent className="flex items-center justify-between gap-4 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-primary/20 font-bold text-primary">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{p.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {p.club} · {p.nation} · {p.age}yo · {p.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <div className="hidden text-right sm:block">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("Contract")}</div>
                          <div className="text-sm font-medium text-white">{p.contract}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("Style Match")}</div>
                          <div className={`text-lg font-bold ${p.matchColor}`}>{p.match}%</div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Total results", value: "7", note: "Filtered from 38k+ profiles" },
                  { label: "High priority", value: "3", note: "Match ≥ 90% style fit" },
                  { label: "Women's included", value: "2", note: "Same pool, same weight" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-white/8 bg-card/40 p-4"
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
                    <div className="mt-2 text-2xl font-display font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "shortlists" && (
            <div className="space-y-6">
              {shortlists.map((list) => (
                <Card
                  key={list.name}
                  className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
                >
                  <CardHeader className="border-b border-white/6 pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Star className="h-4 w-4 text-primary" />
                        <CardTitle className="text-base font-display text-white">{list.name}</CardTitle>
                        <Badge className={`text-xs ${list.accentClassName}`}>{list.count} players</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {list.updated}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-5">
                    {list.players.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold text-sm text-white">
                            {p.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{p.name}</div>
                            <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{p.club}</div>
                            <div className="mt-1 text-xs leading-5 text-muted-foreground">{p.note}</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full rounded-xl border-dashed border-white/15 text-muted-foreground hover:text-white">
                      <Plus className="mr-2 h-4 w-4" /> Add player to list
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "succession" && (
            <div className="space-y-6">
              {successionScenarios.map((scenario) => (
                <Card
                  key={scenario.role}
                  className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
                >
                  <CardHeader className="border-b border-white/6 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {t("Succession scenario")}
                        </div>
                        <CardTitle className="text-lg font-display text-white">
                          {scenario.role} — Replace {scenario.outgoing.name}
                        </CardTitle>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground text-[10px]">
                          Age {scenario.outgoing.age}
                        </Badge>
                        <Badge variant="outline" className="border-red-500/20 bg-red-500/10 text-red-300 text-[10px]">
                          Contract {scenario.outgoing.contract}
                        </Badge>
                        <Badge variant="outline" className="border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-[10px]">
                          {scenario.outgoing.wage}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5 pt-5">
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        <Users className="h-3.5 w-3.5" /> {t("Internal options")}
                      </div>
                      {scenario.internal.map((opt) => (
                        <div
                          key={opt.name}
                          className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                              {opt.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{opt.name}</div>
                              <div className="text-xs text-muted-foreground">{opt.note}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        <Target className="h-3.5 w-3.5" /> {t("Market targets")}
                      </div>
                      <div className="space-y-3">
                        {scenario.external.map((opt) => (
                          <div
                            key={opt.name}
                            className="flex items-center justify-between gap-4 rounded-2xl border border-primary/15 bg-primary/6 p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                                {opt.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-white">{opt.name}</div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                  <span>{opt.club}</span>
                                  <span>·</span>
                                  <span>{opt.fee}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-right">
                              <div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Fit</div>
                                <div className="font-bold text-primary">{opt.fit}%</div>
                              </div>
                              <div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Ready</div>
                                <div className={`text-sm font-semibold ${opt.readinessColor}`}>{opt.ready}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
