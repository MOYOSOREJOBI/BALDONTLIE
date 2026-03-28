import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Clock3, Flame, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { translateRecordFields, translateStrings } from "@/locales/helpers";

const featuredRooms = [
  {
    title: "Real Madrid vs Man City",
    status: "Live room",
    audience: "12.4k",
    note: "Tactical debate, set-piece tracking, and momentum swings are driving the room.",
  },
  {
    title: "Chelsea Women vs Barcelona Femeni",
    status: "Women’s watch party",
    audience: "3.2k waiting",
    note: "The same product logic applies here: big women’s fixtures belong in the same room ecology.",
  },
];

const sideTopics = [
  "Featured room of the night",
  "Tactical debate room",
  "Youth scouting chat",
  "Lineup reaction lobby",
];

const countdowns = [
  { label: "Next room", value: "23m", note: "Arsenal vs Tottenham opens soon." },
  { label: "Hot topic", value: "Set pieces", note: "City restarts vs Madrid box control." },
  { label: "Women’s spotlight", value: "Wing overloads", note: "Chelsea Women vs Barca Femeni." },
];

export default function MatchRooms() {
  const { t } = useTranslation();
  const localizedFeaturedRooms = useMemo(
    () => translateRecordFields(featuredRooms, ["status", "note"], t),
    [t],
  );
  const localizedSideTopics = useMemo(() => translateStrings(sideTopics, t), [t]);
  const localizedCountdowns = useMemo(
    () => translateRecordFields(countdowns, ["label", "note"], t),
    [t],
  );

  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <MessageCircle className="h-8 w-8 text-primary" />
            {t("Match Rooms Demo")}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {t("A fuller concept for moderated football rooms, watch parties, tactical debates, and matchday conversation structures.")}
          </p>
        </div>
        <Badge className="border-none bg-primary/10 px-4 py-2 text-primary">{t("Mock room system")}</Badge>
      </div>

      <div className="rounded-[28px] border border-white/8 bg-card/40 p-5 text-sm leading-6 text-muted-foreground">
        {t("Match Rooms remain a frontend concept only. The goal here is to show stronger room composition and football-native context, not to imply live chat infrastructure exists already.")}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.14fr)_340px] 2xl:grid-cols-[minmax(0,1.2fr)_360px]">
        <div className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-2">
            {localizedFeaturedRooms.map((room, index) => (
              <Card key={room.title} className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className={index === 0 ? "bg-red-500 text-white" : "bg-pink-500/10 text-pink-300"}>
                          {room.status}
                        </Badge>
                        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {room.audience}
                        </div>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">{room.title}</div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(118,255,3,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.82))] p-5">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-white/60">{t("Room shape")}</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Debate", "Lineups", "Reactions"].map((tag) => (
                        <div key={tag} className="rounded-2xl border border-white/8 bg-black/20 px-3 py-4 text-center text-sm font-semibold text-white">
                          {t(tag)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm leading-6 text-muted-foreground">{room.note}</div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="rounded-full px-6">{t("Enter Demo Room")}</Button>
                    <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white">
                      {t("View topics")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Room list")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {[
                { title: "Madrid vs City tactical room", status: "Live", note: "Press resistance and box entry debate." },
                { title: "Arsenal vs Tottenham countdown", status: "Opening soon", note: "Lineups and rest-defense preview." },
                { title: "U21 scouting room", status: "Active", note: "Breakout clips, fit notes, and shortlist debate." },
                { title: "Chelsea Women vs Barca Femeni", status: "Scheduled", note: "High-value women’s watch party." },
              ].map((room) => (
                <div key={room.title} className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-base font-semibold text-white">{room.title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted-foreground">{t(room.note)}</div>
                  </div>
                  <Badge variant="outline" className="w-fit border-white/10 bg-black/20 text-white">
                    {t(room.status)}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Context rail")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {localizedSideTopics.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Countdown and heat")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {localizedCountdowns.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-display font-bold text-primary">{item.value}</div>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-primary/80">
                <ShieldCheck className="h-4 w-4 text-primary" />
                {t("Demo honesty")}
              </div>
              <div className="text-sm leading-6 text-muted-foreground">
                {t("These rooms are structured demo surfaces only. No live moderation, messaging, or presence engine is being claimed here yet.")}
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                <Flame className="mt-0.5 h-4 w-4 text-primary" />
                <div className="text-sm leading-6 text-muted-foreground">
                  {t("The page now feels like a real part of the football product instead of two floating cards in a dark void.")}
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                <Clock3 className="mt-0.5 h-4 w-4 text-yellow-300" />
                <div className="text-sm leading-6 text-muted-foreground">
                  {t("Women’s football remains integrated into the same room stack and not a token extra lane.")}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
