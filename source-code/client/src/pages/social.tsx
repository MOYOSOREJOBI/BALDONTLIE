import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Clock3,
  Flame,
  Hash,
  MessageCircle,
  Mic,
  PlaySquare,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { translateRecordFields, translateStrings } from "@/locales/helpers";

const summaryStrip = [
  { label: "Open room concepts", value: "8", note: "Two tactical rooms and one women’s watch party." },
  { label: "Featured threads", value: "14", note: "Scouting, matchday, and role-fit topics." },
  { label: "Moderation posture", value: "Curated", note: "Demo framing stays clear and controlled." },
];

const featuredRooms = [
  {
    title: "Madrid vs City Tactical Forum",
    status: "Featured room",
    note: "Box entries, set-piece structure, and midfield escape routes are driving the conversation.",
    meta: "12.4k following",
  },
  {
    title: "Chelsea Women vs Barcelona Femeni Watch Party",
    status: "Women’s watch party",
    note: "Wing overloads, recovery shape, and final-third timing keep this inside the same community ecology.",
    meta: "3.2k waiting",
  },
];

const roomStack = [
  { title: "Scout Network Alpha", topic: "U21 South America", type: "Analyst room", unread: "5 new" },
  { title: "Lineup Reaction Lobby", topic: "Arsenal vs Tottenham", type: "Matchday room", unread: "Opening soon" },
  { title: "Transfer Heat Desk", topic: "Midfield shortlist", type: "Front office", unread: "2 flags" },
  { title: "Youth Radar Review", topic: "Breakout profiles", type: "Scout room", unread: "4 notes" },
];

const contextTiles = [
  { title: "Top topic", note: "Set-piece edge vs territorial control" },
  { title: "Room to watch", note: "Madrid vs City tactical forum" },
  { title: "Women’s thread", note: "Barcelona Femeni overload chain" },
];

const messageThread = [
  {
    author: "Sarah M.",
    role: "Scout",
    time: "10:42 AM",
    tone: "bg-blue-500/20 text-blue-200",
    body: "The Palmeiras holding midfielder keeps showing first-contact calm under pressure. His interceptions are impressive, but the bigger point is how often he stabilizes the next pass.",
  },
  {
    author: "Alex R.",
    role: "Analyst",
    time: "10:46 AM",
    tone: "bg-purple-500/20 text-purple-200",
    body: "Agreed. The current prototype compare flow should eventually connect that profile to role-fit, not just raw scouting notes.",
  },
  {
    author: "You",
    role: "Workspace",
    time: "10:49 AM",
    tone: "bg-primary/20 text-primary",
    body: "I also want the women’s scouting rooms and the men’s pathways to feel like one football universe. The best current example is how the Barca Femeni watch party sits right next to the big UCL room.",
  },
];

const sideNotes = [
  "This community surface is a structured demo only, not a live messaging stack.",
  "The page now uses football-native room types, not generic social placeholders.",
  "Women’s football appears in the same featured rooms, not a tucked-away bonus lane.",
];

export default function SocialPage() {
  const { t } = useTranslation();
  const localizedSummaryStrip = useMemo(() => translateRecordFields(summaryStrip, ["label", "note"], t), [t]);
  const localizedFeaturedRooms = useMemo(() => translateRecordFields(featuredRooms, ["status", "note", "meta"], t), [t]);
  const localizedRoomStack = useMemo(() => translateRecordFields(roomStack, ["topic", "type", "unread"], t), [t]);
  const localizedContextTiles = useMemo(() => translateRecordFields(contextTiles, ["title", "note"], t), [t]);
  const localizedMessageThread = useMemo(() => translateRecordFields(messageThread, ["role", "body"], t), [t]);
  const localizedSideNotes = useMemo(() => translateStrings(sideNotes, t), [t]);
  return (
    <div className="app-page">
      <div className="app-hero">
        <div>
          <h1 className="mb-1 flex items-center gap-3 text-3xl font-display font-bold tracking-tight text-white">
            <MessageCircle className="h-8 w-8 text-primary" />
            {t("Community Demo")}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {t("A fuller concept for moderated football rooms, analyst threads, watch parties, and community workflows that still stays honest about being a frontend demo.")}
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="border-white/10 bg-card/45 text-white">
            <Mic className="mr-2 h-4 w-4" />
            {t("Start Demo Space")}
          </Button>
          <Button className="bg-primary text-black">
            <Plus className="mr-2 h-4 w-4" />
            {t("New Mock Thread")}
          </Button>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/8 bg-card/35 p-4 text-sm leading-6 text-muted-foreground">
        {t("Community activity shown here is structured mock content for layout and product design review only. It does not claim live rooms, real-time messaging, or active moderation infrastructure.")}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {localizedSummaryStrip.map((item) => (
          <div key={item.label} className="rounded-[26px] border border-white/8 bg-card/40 p-5 shadow-lg shadow-black/20">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-3 text-3xl font-display font-bold text-white">{item.value}</div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {localizedFeaturedRooms.map((room, index) => (
          <Card key={room.title} className="glass-card rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge className={index === 0 ? "bg-primary/10 text-primary" : "bg-pink-500/10 text-pink-300"}>
                      {room.status}
                    </Badge>
                    <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
                      {room.meta}
                    </Badge>
                  </div>
                  <div className="text-2xl font-display font-bold text-white">{room.title}</div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-primary">
                  {index === 0 ? <Users className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(118,255,3,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.82))] p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/60">{t("Room shape")}</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Debate", "Briefings", "Clips"].map((tag) => (
                    <div key={tag} className="rounded-2xl border border-white/8 bg-black/20 px-3 py-4 text-center text-sm font-semibold text-white">
                      {t(tag)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm leading-6 text-muted-foreground">{room.note}</div>

              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full px-6">{t("Open Demo Room")}</Button>
                <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white">
                  {t("View topics")}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)] 2xl:grid-cols-[320px_minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Room stack")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {localizedRoomStack.map((room) => (
                <div key={room.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-white">{room.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {room.type}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-white/10 bg-black/20 text-white">
                      {room.unread}
                    </Badge>
                  </div>
                  <div className="mt-3 text-sm leading-6 text-muted-foreground">{room.topic}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Community signals")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {localizedContextTiles.map((item, index) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  {index === 0 ? <Flame className="mt-0.5 h-4 w-4 text-primary" /> : index === 1 ? <PlaySquare className="mt-0.5 h-4 w-4 text-blue-300" /> : <Sparkles className="mt-0.5 h-4 w-4 text-pink-300" />}
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted-foreground">{item.note}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card relative overflow-hidden rounded-[30px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(118,255,3,0.08),transparent_34%)]" />
          <CardHeader className="relative z-10 border-b border-white/6 pb-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary/10 text-primary">{t("Featured thread")}</Badge>
                  <Badge variant="outline" className="border-white/10 bg-black/20 text-muted-foreground">
                    {t("Analyst room")}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-display text-white">Scout Network Alpha</CardTitle>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t("Topic: U21 South America, progressive first receivers, and role-fit notes.")}
                </div>
              </div>
              <div className="flex -space-x-2">
                {["SM", "AR", "MJ", "KC"].map((tag) => (
                  <div key={tag} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-accent text-xs font-semibold text-white">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 space-y-5 p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Scout clips", "Role-fit notes", "Women’s watch threads"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm font-medium text-white">
                  {t(item)}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {localizedMessageThread.map((message, index) => (
                <div
                  key={message.author + message.time}
                  className={`flex gap-3 ${index === messageThread.length - 1 ? "justify-end" : ""}`}
                >
                  {index === messageThread.length - 1 ? null : (
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${message.tone}`}>
                      {message.author.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div className={`${index === messageThread.length - 1 ? "max-w-[85%]" : "max-w-[80%]"}`}>
                    <div className={`mb-2 flex items-center gap-2 text-xs text-muted-foreground ${index === messageThread.length - 1 ? "justify-end" : ""}`}>
                      <span>{message.author}</span>
                      <span>·</span>
                      <span>{message.role}</span>
                      <span>·</span>
                      <span>{message.time}</span>
                    </div>
                    <div className={`rounded-2xl p-4 text-sm leading-6 ${index === messageThread.length - 1 ? "bg-primary text-black" : "bg-secondary text-foreground"}`}>
                      {message.body}
                    </div>
                  </div>
                  {index === messageThread.length - 1 ? (
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${message.tone}`}>
                      Y
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/6 pt-4 sm:flex-row">
              <Input className="h-11 bg-background/80" placeholder={t("Reply to the demo thread...")} />
              <Button className="h-11 shrink-0 bg-primary text-black">
                {t("Send mock reply")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Context rail")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {[
                { title: "Moderated topic lanes", note: "Matchday, tactical, scouting, and community lanes are kept visually distinct." },
                { title: "Women’s football integration", note: "Featured rooms and threads include women’s fixtures as part of the same football map." },
                { title: "Demo honesty", note: "This page is denser and stronger, but still clearly marked as a concept surface." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white">{t(item.title)}</div>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{t(item.note)}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg shadow-black/20">
            <CardHeader className="border-b border-white/6 pb-4">
              <CardTitle className="text-lg font-display text-white">{t("Guardrails")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              {localizedSideNotes.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
                  {index === 0 ? <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" /> : index === 1 ? <Hash className="mt-0.5 h-4 w-4 text-blue-300" /> : <Clock3 className="mt-0.5 h-4 w-4 text-pink-300" />}
                  <div className="text-sm leading-6 text-muted-foreground">{item}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
