import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings2, Heart, Share2, MessageCircle, Sparkles, BellRing, Radio, Flame } from "lucide-react";

const summaryStrip = [
  { label: "Following", value: "8", note: "Clubs, players, and leagues in your feed." },
  { label: "Scout alerts", value: "4", note: "Threshold triggers active for 4 players." },
  { label: "Women's feed", value: "Active", note: "Women's football sits in the main stream." },
  { label: "Feed posture", value: "Prototype", note: "Mock content now — real sourcing later." },
];

const feedItems = [
  {
    type: "insight",
    title: "Tactical Alert: Bellingham's new role",
    content:
      "In the last 3 matches, Jude Bellingham has operated 15% higher up the pitch, resulting in a +0.4 xG increase per 90.",
    tags: ["Real Madrid", "J. Bellingham"],
    time: "2h ago",
    accentClassName: "border-primary/20 bg-primary/10 text-primary",
  },
  {
    type: "news",
    title: "Kroos hints at extension",
    content:
      "Toni Kroos's camp suggests the midfielder is leaning towards signing a one-year extension.",
    tags: ["Real Madrid", "Transfers"],
    time: "4h ago",
    accentClassName: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  },
  {
    type: "woso",
    title: "Barcelona Femení break attendance record again",
    content:
      "Over 91,000 fans expected for the upcoming El Clásico at Camp Nou.",
    tags: ["FC Barcelona Femení", "Liga F"],
    time: "5h ago",
    accentClassName: "border-pink-500/20 bg-pink-500/10 text-pink-300",
  },
  {
    type: "scout",
    title: "Rising Star: Lamine Yamal",
    content:
      "Your scout alert triggered: Yamal has surpassed 3.0 successful take-ons per 90.",
    tags: ["FC Barcelona", "Scout Alert"],
    time: "8h ago",
    accentClassName: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
  },
];

const followingChannels = [
  { label: "Real Madrid", type: "Club", active: true },
  { label: "J. Bellingham", type: "Player", active: true },
  { label: "Scout Alerts", type: "System", active: true },
  { label: "Women's Football", type: "League", active: true },
  { label: "La Liga", type: "League", active: false },
  { label: "UCL", type: "Competition", active: false },
];

const trendingTopics = [
  { label: "Bellingham half-space role shift", heat: "Hot", heatClassName: "text-primary" },
  { label: "Liga F attendance records", heat: "Rising", heatClassName: "text-pink-300" },
  { label: "UCL knockout bracket", heat: "Hot", heatClassName: "text-primary" },
  { label: "Transfer window posture", heat: "Steady", heatClassName: "text-muted-foreground" },
];

export default function SmartFeed() {
  const { t } = useTranslation();
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">{t("Following Feed")}</Badge>
            <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
              {t("Prototype")}
            </Badge>
          </div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <Sparkles className="h-8 w-8 text-primary" /> {t("Smart Following Feed")}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Personalized insights based on your clubs, players, and scout alerts. All feed items are
            mock content — real sourcing and personalization APIs come later.
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

      <div className="app-chip-row">
        <Badge className="shrink-0 cursor-pointer bg-primary text-black hover:bg-primary/90">
          {t("For You")}
        </Badge>
        <Badge
          variant="outline"
          className="shrink-0 cursor-pointer hover:bg-white/5"
        >
          Real Madrid
        </Badge>
        <Badge
          variant="outline"
          className="shrink-0 cursor-pointer hover:bg-white/5"
        >
          J. Bellingham
        </Badge>
        <Badge
          variant="outline"
          className="shrink-0 cursor-pointer hover:bg-white/5"
        >
          Scout Alerts
        </Badge>
        <Badge
          variant="outline"
          className="shrink-0 cursor-pointer hover:bg-white/5"
        >
          Women's Football
        </Badge>
        <Badge
          variant="outline"
          className="shrink-0 cursor-pointer hover:bg-white/5"
        >
          La Liga
        </Badge>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_340px]">
        <div className="space-y-5">
          {feedItems.map((item, idx) => (
            <Card
              key={idx}
              className="glass-card overflow-hidden rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Badge key={t} className={`text-[10px] uppercase tracking-wider ${item.accentClassName}`}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                </div>

                <h2 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{item.content}</p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-red-400"
                  >
                    <Heart className="mr-2 h-4 w-4" /> {t("Like")}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> {t("Discuss")}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-muted-foreground hover:text-white"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> {t("Share")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base font-display text-white">{t("Following")}</CardTitle>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground">
                  <Settings2 className="mr-1.5 h-3.5 w-3.5" /> {t("Manage")}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {followingChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{channel.label}</div>
                    <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {channel.type}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BellRing
                      className={`h-4 w-4 ${channel.active ? "text-primary" : "text-white/20"}`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-primary" />
                <CardTitle className="text-base font-display text-white">{t("Trending now")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {trendingTopics.map((topic) => (
                <div
                  key={topic.label}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  <div className="text-sm leading-6 text-white">{topic.label}</div>
                  <div className={`shrink-0 text-xs font-semibold uppercase tracking-[0.14em] ${topic.heatClassName}`}>
                    {topic.heat}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-base font-display text-white">{t("Feed note")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="text-sm leading-6 text-muted-foreground">
                This feed is a structured mock prototype. Real personalization, follow logic, and live
                content sourcing are planned for a future backend integration phase.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {[
          {
            time: "21:00 Today",
            match: "Barcelona Femení vs Atletico Women",
            context: "Liga F title-pressure watch. Highest attendance record on the line.",
            accent: "border-pink-500/20 bg-pink-500/8",
            badge: "Liga F",
            badgeClass: "border-pink-500/20 bg-pink-500/10 text-pink-300",
          },
          {
            time: "22:15 Today",
            match: "Arsenal vs Tottenham",
            context: "North London derby with top-four implications and significant rest-defence stress.",
            accent: "border-primary/20 bg-primary/8",
            badge: "Premier League",
            badgeClass: "border-primary/20 bg-primary/10 text-primary",
          },
          {
            time: "Tomorrow 20:45",
            match: "Inter vs Roma",
            context: "Control benchmark for the Serie A run-in. Inter's defensive line under scrutiny.",
            accent: "border-blue-500/20 bg-blue-500/8",
            badge: "Serie A",
            badgeClass: "border-blue-500/20 bg-blue-500/10 text-blue-300",
          },
        ].map((fixture) => (
          <Card
            key={fixture.match}
            className={`glass-card rounded-[28px] border bg-card/40 shadow-lg shadow-black/20 ${fixture.accent}`}
          >
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge className={`text-[10px] ${fixture.badgeClass}`}>{fixture.badge}</Badge>
                <span className="text-xs text-muted-foreground">{fixture.time}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{fixture.match}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{fixture.context}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_340px]">
        <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <CardHeader className="border-b border-white/6 pb-4">
            <div className="flex items-center gap-2">
              <Badge className="border-pink-500/20 bg-pink-500/10 text-pink-300 text-[10px]">{t("Women's Football")}</Badge>
              <CardTitle className="text-lg font-display text-white">{t("Women's Highlights")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="divide-y divide-white/6 p-0">
            {[
              { title: "Barcelona Femení break attendance record again", summary: "91,000+ expected at Camp Nou for the upcoming El Clásico — new Liga F benchmark.", time: "5h ago", tag: "Liga F" },
              { title: "Grace Clinton earns call-up to England squad", summary: "Chelsea's creative midfielder earns her first senior call-up after a breakout league run.", time: "8h ago", tag: "International" },
              { title: "Khadija Shaw: contract leverage window opens", summary: "City Women striker's deal enters final 12 months — clubs monitoring closely.", time: "1d ago", tag: "Transfers" },
              { title: "Esmee Brugts: Liga F's most progressive carrier", summary: "The Dutch winger leads Liga F in progressive carries per 90 with 9.2 — elite output.", time: "2d ago", tag: "Stats" },
            ].map((item) => (
              <div key={item.title} className="p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <Badge variant="outline" className="border-pink-500/20 bg-pink-500/8 text-pink-300 text-[10px]">{item.tag}</Badge>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <h3 className="mb-1.5 font-semibold text-white hover:text-primary cursor-pointer transition-colors">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Scout triggers")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {[
                { player: "Lamine Yamal", trigger: "Take-on rate surpassed 3.0 / 90", color: "text-primary" },
                { player: "Grace Clinton", trigger: "Top 5 in progressive carries this month", color: "text-pink-300" },
                { player: "Joao Neves", trigger: "Contract enters 12-month leverage window", color: "text-red-400" },
                { player: "Kobbie Mainoo", trigger: "Pressures per 90 now 22.1 — elite tier", color: "text-blue-400" },
              ].map((alert) => (
                <div key={alert.player} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">{alert.player}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${alert.color}`}>{t("Alert")}</span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{alert.trigger}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-base font-display text-white">{t("Transfer pulse")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-5">
              {[
                { name: "Nico Williams", from: "Athletic", to: "Watch", status: "Hot", color: "text-red-400" },
                { name: "Leny Yoro", from: "Lille", to: "Open", status: "Active", color: "text-yellow-400" },
                { name: "Zubimendi", from: "Sociedad", to: "Target", status: "Confirmed", color: "text-primary" },
              ].map((r) => (
                <div key={r.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.from} → {r.to}</div>
                  </div>
                  <span className={`text-xs font-bold ${r.color}`}>{r.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
