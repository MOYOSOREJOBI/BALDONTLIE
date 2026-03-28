import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MediaStoryCard } from "@/components/shared/media-story-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import imgScoutReport from "@/assets/images/scout-report.png";
import imgTransferGraphic from "@/assets/images/transfer-graphic.png";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { transferRumours } from "@/data/mock";

const fullRumours = [...transferRumours, ...transferRumours.slice(0, 3)];

const summaryStrip = [
  { label: "Critical squad needs", value: "3", note: "DM · LB · right winger" },
  { label: "Expiring contracts", value: "5", note: "Two starters in decision range" },
  { label: "Shortlist live", value: "12", note: "Three women’s names in active watch" },
  { label: "Budget posture", value: "Flexible", note: "Sales likely shape the second phase" },
];

const contractWatch = [
  { player: "Adrien Rabiot", club: "Juventus", note: "Contract entering the leverage window." },
  { player: "Joshua Kimmich", club: "Bayern", note: "Role fit still strong for several systems." },
  { player: "Khadija Shaw", club: "Man City Women", note: "Women’s watch item with elite output gravity." },
];

const roleMatrix = [
  { title: "Destroyer 6", fit: "Zubimendi · Joao Gomes · Yui Hasegawa profile" },
  { title: "Box winger", fit: "Nico Williams · Hemp-style wide runner" },
  { title: "Build LB", fit: "Theo profile · inversion option required" },
];

const womenTransferWatch = [
  { name: "Grace Clinton", note: "Value and role curve both still rising." },
  { name: "Esmee Brugts", note: "Hybrid flank profile suits multiple systems." },
  { name: "Vicky Lopez", note: "Development track makes her one for later cycles." },
];

const wagePressure = [
  "Outgoing high earners would reopen two rotation slots and one starting role.",
  "The current wage floor is inflating squad-balance risk more than fee risk.",
  "Women’s recruitment watch is being treated with the same presentation weight, not a side lane.",
];

const fitChips = [
  "Counterpress ready",
  "Can invert",
  "Premier League speed",
  "Wage friendly",
  "Two-footed buildup",
  "Women’s pathway active",
];

const windowPressureMetrics = [
  { label: "Shortlist lane", value: "12 names" },
  { label: "Women’s watch", value: "3 profiles" },
  { label: "Urgent roles", value: "3 needs" },
];

export default function TransferLab() {
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <TrendingUp className="h-8 w-8 text-primary" />
            Transfer Lab
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            A fuller transfer intelligence surface for squad planning, replacement mapping, contract pressure, and market movement review.
          </p>
        </div>
        <Badge className="border-primary/30 bg-primary/20 px-4 py-2 font-semibold text-primary">
          Window Watch Demo
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryStrip.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="planner" className="space-y-6">
        <TabsList className="hide-scrollbar flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-2xl border border-white/8 bg-card/40 p-1.5">
          <TabsTrigger value="planner" className="whitespace-nowrap text-xs sm:text-sm">
            Squad Planner
          </TabsTrigger>
          <TabsTrigger value="rumours" className="whitespace-nowrap text-xs sm:text-sm">
            Rumour Board
          </TabsTrigger>
          <TabsTrigger value="risers" className="whitespace-nowrap text-xs sm:text-sm">
            Value Movers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="planner" className="m-0 space-y-6">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_360px]">
            <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Replacement intelligence
                    </div>
                    <CardTitle className="text-xl font-display text-white">
                      Casemiro succession desk
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="border-yellow-500/30 bg-yellow-500/10 text-yellow-300">
                    Squad need: high
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4 rounded-[26px] border border-white/8 bg-black/20 p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Outgoing profile</div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 font-bold text-white">
                        C
                      </div>
                      <div>
                        <div className="text-base font-semibold text-white">Casemiro</div>
                        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Destroyer / first duel winner</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">Age</span><span className="text-white">32</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Wage</span><span className="text-red-400">GBP 350k / week</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Contract</span><span className="text-white">2026</span></div>
                    </div>
                  </div>

                  <div className="space-y-4 rounded-[26px] border border-primary/20 bg-primary/8 p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-primary/80">Target profile match</div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                        Z
                      </div>
                      <div>
                        <div className="text-base font-semibold text-white">Martin Zubimendi</div>
                        <div className="text-xs uppercase tracking-[0.14em] text-primary">Real Sociedad</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between"><span className="text-muted-foreground">Style fit</span><Badge className="border-none bg-green-500/10 text-green-400">94% match</Badge></div>
                      <div className="flex items-center justify-between"><span className="text-muted-foreground">Estimated fee</span><span className="text-white">EUR 60M</span></div>
                      <div className="flex items-center justify-between"><span className="text-muted-foreground">Adaptation risk</span><span className="text-yellow-300">Low</span></div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary text-black font-bold hover:bg-primary/90">
                  Add to transfer strategy
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-lg font-display text-white">Squad balance view</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-white">Wage bill impact</span>
                    <span className="text-green-400">-GBP 120k / week</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[60%] bg-red-500" />
                    <div className="h-full w-[20%] bg-green-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-white">Average squad age</span>
                    <span className="text-primary">26.4 → 25.8</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[70%] bg-white" />
                    <div className="h-full w-[15%] bg-primary" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
                  The current planner treats women’s recruitment watch items with the same visual seriousness as the men’s pathway instead of tucking them into a side mode.
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-2 2xl:grid-cols-4">
            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-white">Contract watch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {contractWatch.map((item) => (
                  <div key={item.player} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-base font-semibold text-white">{item.player}</div>
                    <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.club}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-white">Role replacement matrix</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {roleMatrix.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.fit}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-white">Women’s transfer watch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {womenTransferWatch.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-base font-semibold text-white">{item.name}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-white">Wage pressure notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {wagePressure.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                    <ShieldAlert className="mt-0.5 h-4 w-4 text-yellow-300" />
                    <div className="text-sm leading-6 text-muted-foreground">{item}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rumours" className="m-0 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Hot files", value: "4", note: "Two likely to move inside this cycle" },
              { title: "Source posture", value: "Mixed", note: "Prototype confidence, not live reporting" },
              { title: "Women’s watch", value: "1", note: "One major women’s move sitting in the same board" },
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.title}</div>
                <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
              </div>
            ))}
          </div>

          <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardContent className="p-0">
              <div className="divide-y divide-white/6">
                {fullRumours.map((rumour, index) => (
                  <div key={`${rumour.player}-${index}`} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="font-semibold text-white">{rumour.player}</span>
                        <Badge
                          variant={rumour.status === "Hot" ? "default" : "secondary"}
                          className={rumour.status === "Hot" ? "bg-red-500 text-white text-[10px]" : "text-[10px]"}
                        >
                          {rumour.status}
                        </Badge>
                        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{rumour.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1">{rumour.from}</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1">{rumour.to}</span>
                      </div>
                    </div>
                    <div className="w-full sm:w-48">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted-foreground">Probability</span>
                        <span className="font-medium text-white">{rumour.probability}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-black/50">
                        <div
                          className={rumour.status === "Hot" ? "h-full rounded-full bg-red-500" : "h-full rounded-full bg-primary"}
                          style={{ width: `${rumour.probability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risers" className="m-0 space-y-6">
          <div className="grid gap-6 xl:grid-cols-2">
            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-green-400">Market risers</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-white/6 p-0">
                {[
                  { name: "Lamine Yamal", club: "Barcelona", shift: "+EUR 20M" },
                  { name: "Moyosore Jobi", club: "Leverkusen", shift: "+EUR 15M" },
                  { name: "Grace Clinton", club: "Man Utd Women", shift: "+EUR 2M" },
                ].map((player) => (
                  <div key={player.name} className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium text-white">{player.name}</div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{player.club}</div>
                    </div>
                    <Badge className="border-none bg-green-500/10 text-green-400">{player.shift}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-red-400">Market drops</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-white/6 p-0">
                {[
                  { name: "Antony", club: "Man Utd", shift: "-EUR 15M" },
                  { name: "Jadon Sancho", club: "Man Utd", shift: "-EUR 10M" },
                  { name: "Joao Felix", club: "Chelsea", shift: "-EUR 8M" },
                ].map((player) => (
                  <div key={player.name} className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium text-white">{player.name}</div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{player.club}</div>
                    </div>
                    <Badge className="border-none bg-red-500/10 text-red-400">{player.shift}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.06fr)_380px]">
            <MediaStoryCard
              imageSrc={imgTransferGraphic}
              imageAlt="Transfer market graphic"
              eyebrow="Window pressure map"
              title="The lower transfer desk should still feel like part of the same active room"
              description="Instead of dropping into plain notes and chips, the page now carries a stronger visual planning block for fit, pressure, and sequencing across the same recruitment dashboard."
              chips={fitChips.map((chip) => ({
                label: chip,
                className: chip === "Women’s pathway active" ? "border-pink-500/20 bg-pink-500/10 text-pink-300" : undefined,
              }))}
              metrics={windowPressureMetrics}
              footer="This stays honest: it is a polished planning surface, not live sourcing or a real transaction engine."
            />

            <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
              <CardHeader className="border-b border-white/6 pb-4">
                <CardTitle className="text-base font-display text-white">Lab notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-black/20">
                  <img
                    src={imgScoutReport}
                    alt="Scouting report graphic"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                  <div className="text-sm leading-6 text-muted-foreground">The page now carries enough supporting panels to feel like a real transfer desk instead of one floating hero module.</div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-yellow-300" />
                  <div className="text-sm leading-6 text-muted-foreground">All signals here remain mock transfer content and should not be read as live reporting or licensed news sourcing.</div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  <Sparkles className="mt-0.5 h-4 w-4 text-pink-300" />
                  <div className="text-sm leading-6 text-muted-foreground">Women’s football stays inside the same value and shortlist systems, not a separate corner.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
