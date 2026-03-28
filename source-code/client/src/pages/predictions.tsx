import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Zap, AlertTriangle, ShieldCheck } from "lucide-react";

const summaryStrip = [
  { label: "Scenario boards", value: "2", note: "Scoring and assist outlooks for this fixture window." },
  { label: "Top probability", value: "88%", note: "Haaland to score in the next simulated match." },
  { label: "Active watchouts", value: "2", note: "Fatigue and tactical mismatch signals flagged." },
  { label: "Board posture", value: "Static", note: "Frontend-only prototype. Not live or AI-backed." },
];

interface ScenarioBoardProps {
  title: string;
  accentClassName: string;
  accentBarClassName: string;
  data: { name: string; prob: number; nextMatch: string; isHigh: boolean }[];
}

function ScenarioBoard({ title, accentClassName, accentBarClassName, data }: ScenarioBoardProps) {
  const { t } = useTranslation();
  return (
    <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
      <CardHeader className="border-b border-white/6 pb-4">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-lg font-display text-white">{title}</CardTitle>
          <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
            {t("Prototype board")}
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
              {entry.isHigh ? t("Higher-confidence mock scenario.") : t("Secondary watchlist scenario.")}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function Predictions() {
  const { t } = useTranslation();
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
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-pink-500/20 bg-pink-500/10 text-pink-300">{t("Scenario Outlooks")}</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              {t("Demo board")}
            </Badge>
            <Badge variant="outline" className="border-yellow-500/20 bg-yellow-500/10 text-yellow-200">
              {t("Not live-backed")}
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Target className="h-8 w-8 text-pink-500" /> {t("Match Scenarios & Outlooks")}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Prototype scenario boards for upcoming fixtures using mock attacking inputs. Useful for UI
            review, not live or AI-backed decision support.
          </p>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 xl:max-w-[540px]">
          {summaryStrip.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </div>
              <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/8 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
          <div>
            <div className="text-sm font-semibold text-white">{t("Prototype outlooks only")}</div>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              These probabilities are static mock signals shaped to explain the product concept. They are
              not live predictions, not betting advice, and not model-backed production outputs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_340px]">
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card overflow-hidden rounded-[28px] border-pink-500/20 bg-card/40 shadow-lg shadow-black/20 relative">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/10 blur-[80px] pointer-events-none" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-6 items-center md:flex-row">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-pink-500/30 md:h-32 md:w-32">
                    <span className="text-3xl font-display font-bold text-white md:text-4xl">88%</span>
                    <div className="absolute -bottom-2 rounded bg-pink-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white md:text-xs">
                      {t("Highest Prob")}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 md:text-sm">
                      <Zap className="h-4 w-4" /> {t("Top Goal Scenario")}
                    </div>
                    <h2 className="mb-2 text-xl font-display font-bold text-white md:text-2xl">
                      Erling Haaland to Score
                    </h2>
                    <p className="mb-4 text-sm text-muted-foreground md:text-base">
                      Mock chance-quality inputs point to a strong shot volume profile.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                      <Badge variant="outline" className="bg-background/50">Prototype signal</Badge>
                      <Badge variant="outline" className="bg-background/50">Chance pressure: high</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden rounded-[28px] border-blue-500/20 bg-card/40 shadow-lg shadow-black/20 relative">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-6 items-center md:flex-row">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-blue-500/30 md:h-32 md:w-32">
                    <span className="text-3xl font-display font-bold text-white md:text-4xl">82%</span>
                    <div className="absolute -bottom-2 rounded bg-blue-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white md:text-xs">
                      {t("Highest Prob")}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 md:text-sm">
                      <Zap className="h-4 w-4" /> {t("Top Assist Scenario")}
                    </div>
                    <h2 className="mb-2 text-xl font-display font-bold text-white md:text-2xl">
                      Kevin De Bruyne to Assist
                    </h2>
                    <p className="mb-4 text-sm text-muted-foreground md:text-base">
                      Mock creative-input patterns point to strong chance creation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                      <Badge variant="outline" className="bg-background/50">Prototype signal</Badge>
                      <Badge variant="outline" className="bg-background/50">Creative pressure: high</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ScenarioBoard
              title={t("Scoring Outlook Board")}
              accentClassName="text-primary"
              accentBarClassName="bg-primary"
              data={goalPredictionData}
            />
            <ScenarioBoard
              title={t("Assist Outlook Board")}
              accentClassName="text-blue-400"
              accentBarClassName="bg-blue-500"
              data={assistPredictionData}
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Timeframe")}</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <Select defaultValue="next">
                <SelectTrigger className="w-full border-white/10 bg-card/60 text-white focus:ring-primary/50">
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">{t("Next Match")}</SelectItem>
                  <SelectItem value="3">{t("Next 3 Matches")}</SelectItem>
                  <SelectItem value="5">{t("Next 5 Matches")}</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Timeframe selection is a UI-only control in this prototype. It does not filter real data.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-yellow-500/20 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <CardTitle className="text-base font-display text-white">{t("Watchouts")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                <div className="mb-1 text-sm font-medium text-yellow-400">Fatigue Risk: V. Júnior</div>
                <p className="text-xs leading-6 text-muted-foreground">
                  Played 270 mins in 8 days. Lower attacking outlook due to expected minute management.
                </p>
              </div>
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                <div className="mb-1 text-sm font-medium text-red-400">Tactical Mismatch: M. Jobi</div>
                <p className="text-xs leading-6 text-muted-foreground">
                  Dortmund's low block restricts central zone 14 progressions. Lower attacking upside in
                  this demo outlook.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <CardTitle className="text-base font-display text-white">{t("Model notes")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {[
                "Probabilities shown are static frontend signals shaped to explain the product concept.",
                "No live model, betting feed, or real statistical provider is connected.",
                "This surface becomes more useful once historical match data and an actual model pipeline exist.",
              ].map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground"
                >
                  {note}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-4">
        {[
          { label: "Highest probability", value: "88%", name: "Haaland to score", color: "text-primary" },
          { label: "Top assist outlook", value: "82%", name: "De Bruyne to assist", color: "text-blue-400" },
          { label: "Biggest mover", value: "+18%", name: "Bellingham vs BAR", color: "text-green-400" },
          { label: "Lowest confidence", value: "45%", name: "Yamal to score", color: "text-muted-foreground" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[26px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </div>
            <div className={`mt-3 text-3xl font-display font-bold ${item.color}`}>{item.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_340px]">
        <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <CardTitle className="text-lg font-display text-white">{t("Fixture window outlook")}</CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-white/6 p-0">
            {[
              { match: "Real Madrid vs Barcelona", date: "Sat 22:00", homeGoal: 74, awayGoal: 68, btts: 61, note: "High xG both sides — Mbappé v Yamal is the key duel." },
              { match: "Arsenal vs Tottenham", date: "Sun 17:30", homeGoal: 68, awayGoal: 52, btts: 49, note: "North London derby; Arsenal home press advantage significant." },
              { match: "Inter vs Roma", date: "Mon 20:45", homeGoal: 71, awayGoal: 44, btts: 38, note: "Inter control stats dominant at home across last 8 games." },
              { match: "Leverkusen vs Dortmund", date: "Fri 20:30", homeGoal: 63, awayGoal: 55, btts: 52, note: "Bundesliga watch — Jobi against former club storyline." },
              { match: "Barcelona Femení vs Atletico W.", date: "Sat 21:00", homeGoal: 78, awayGoal: 41, btts: 44, note: "Liga F title race — Femení unbeaten at home this season." },
            ].map((fixture) => (
              <div key={fixture.match} className="p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{fixture.match}</h3>
                  <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
                    {fixture.date}
                  </Badge>
                </div>
                <div className="mb-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Home goal", val: fixture.homeGoal, color: "text-primary" },
                    { label: "Away goal", val: fixture.awayGoal, color: "text-blue-400" },
                    { label: "BTTS", val: fixture.btts, color: "text-yellow-400" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/8 bg-black/20 p-2.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                      <div className={`mt-1 text-lg font-display font-bold ${m.color}`}>{m.val}%</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-5 text-muted-foreground">{fixture.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Top attacking threats")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {[
                { name: "E. Haaland", context: "Shot volume vs high line", val: "88%", color: "text-primary" },
                { name: "K. De Bruyne", context: "Creative input vs low block", val: "82%", color: "text-blue-400" },
                { name: "J. Bellingham", context: "Box arrival vs zonal mark", val: "72%", color: "text-green-400" },
                { name: "V. Júnior", context: "Wide isolation — fatigue flag", val: "65%", color: "text-yellow-400" },
                { name: "L. Yamal", context: "Carry-based chance creation", val: "60%", color: "text-purple-400" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.context}</div>
                  </div>
                  <span className={`text-lg font-display font-bold ${item.color}`}>{item.val}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Women's outlook")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {[
                { name: "A. Bonmatí", context: "vs Atletico Women", val: "81%", color: "text-pink-300" },
                { name: "K. Shaw", context: "vs Chelsea Women", val: "76%", color: "text-pink-300" },
                { name: "G. Clinton", context: "vs Arsenal Women", val: "62%", color: "text-blue-300" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-pink-500/15 bg-pink-500/8 p-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.context}</div>
                  </div>
                  <span className={`text-lg font-display font-bold ${item.color}`}>{item.val}</span>
                </div>
              ))}
              <p className="text-xs leading-5 text-muted-foreground">
                Women's outlooks use the same prototype scoring logic and carry the same static posture as the main boards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
