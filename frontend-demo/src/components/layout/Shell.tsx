import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Activity,
  BarChart2,
  Users,
  Swords,
  TrendingUp,
  Heart,
  Newspaper,
  Target,
  Trophy,
  Search,
  Bell,
  Star,
  Shield,
  Layers,
  Table,
  Dices,
  MessageCircle,
  Globe2,
  ChevronDown,
  Palette,
  Database,
  BrainCircuit,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const homeNavItems = [
  { title: "Following Feed", url: "/news", icon: Newspaper },
  { title: "Dashboard", url: "/dashboard", icon: Activity },
];

const matchCenterItems = [
  { title: "Match Flow Demo", url: "/live-sim", icon: Activity },
  { title: "Match Storyline", url: "/storyline", icon: TrendingUp },
  { title: "Scenario Outlooks", url: "/predictions", icon: Target },
  { title: "Market Signals Lab", url: "/odds", icon: Dices },
  { title: "League Tables", url: "/tables", icon: Table },
];

const discoverItems = [
  { title: "Player Explorer", url: "/players", icon: Users },
  { title: "Rankings", url: "/rankings", icon: Trophy },
  { title: "Transfers Lab", url: "/transfers", icon: TrendingUp },
];

const scoutItems = [
  { title: "Scout Workspace Demo", url: "/scout-workspace", icon: Database },
  { title: "Player Compare", url: "/compare/players", icon: Swords },
  { title: "Team Compare", url: "/compare/teams", icon: Shield },
  { title: "Team Fit", url: "/team-fit", icon: Layers },
  { title: "Technical Overlay", url: "/technical-overlay", icon: BarChart2 },
];

const communityItems = [
  { title: "Match Rooms Demo", url: "/match-rooms", icon: MessageCircle },
  { title: "Community Demo", url: "/social", icon: MessageCircle },
  { title: "Sentiment Demo", url: "/fan-sentiment", icon: Heart },
];

const gamesItems = [
  { title: "Market XI", url: "/games/market-xi", icon: BarChart2 },
  { title: "Prediction Arena Preview", url: "/games/prediction-arena", icon: Target },
  { title: "Fantasy Drafts Preview", url: "/games/fantasy-drafts", icon: Users },
  { title: "Challenges Preview", url: "/games/challenges", icon: Trophy },
];

const mySpaceItems = [
  { title: "My Shortlist", url: "/my-player", icon: Star },
];

const languages = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "yo", name: "Yorùbá", dir: "ltr" },
];

const LANGUAGE_STORAGE_KEY = "baldontlie-language";

const themes = [
  { id: "default", name: "Default Dark" },
  { id: "robotic", name: "Robotic" },
  { id: "paper", name: "Paper Style" },
  { id: "glassy", name: "Glassy" },
  { id: "hacker", name: "Hacker" },
  { id: "motherboard", name: "Motherboard" },
  { id: "concrete", name: "Concrete" },
  { id: "wood", name: "Wood" },
  { id: "steel", name: "Steel" },
  { id: "block", name: "Block 8-Bit" },
  { id: "synthwave", name: "Synthwave" },
  { id: "minimalist-black", name: "Minimalist Black" },
  { id: "ocean", name: "Ocean" },
  { id: "retro90s", name: "Retro 90s" },
  { id: "dracula", name: "Dracula" },
  { id: "solarized", name: "Solarized Dark" },
];

const userModes = [
  { id: "learn", name: "Learn Mode", icon: GraduationCap, color: "text-blue-400" },
  { id: "fan", name: "Fan Mode", icon: Heart, color: "text-red-400" },
  { id: "scout", name: "Scout Mode", icon: BrainCircuit, color: "text-primary" },
];

function AppSidebar({ dir }: { dir: string }) {
  const [location] = useLocation();
  const { t } = useTranslation();
  const isRtl = dir === "rtl";

  const renderNavGroup = (title: string, items: any[]) => (
    <SidebarGroup>
      <SidebarGroupLabel className={cn("text-[10px] uppercase tracking-widest text-muted-foreground font-bold", isRtl && "text-right")}>
        {t(title)}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={
                  location === item.url ||
                  (item.url !== "/" && location.startsWith(item.url))
                }
                tooltip={item.title}
                className={cn("hover:bg-primary/10 transition-colors", isRtl && "text-right")}
              >
                <Link href={item.url} className={cn("font-medium", isRtl && "flex-row-reverse justify-end text-right")}>
                  <item.icon className="w-4 h-4" />
                  <span>{t(item.title)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar
      side={dir === "rtl" ? "right" : "left"}
      variant="inset"
      collapsible="icon"
      className={cn("transition-colors duration-300", isRtl ? "border-l border-border/50" : "border-r border-border/50")}
    >
      <SidebarHeader className={cn("h-16 flex items-center border-b border-border/50 px-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2", isRtl ? "justify-end" : "justify-start")}>
        <Link
          href="/"
          className={cn("flex w-full items-center gap-2 font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors group-data-[collapsible=icon]:justify-center", isRtl && "flex-row-reverse justify-end")}
        >
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground shrink-0 transition-colors duration-300">
            <BarChart2 className="w-5 h-5" />
          </div>
          <span className="truncate group-data-[collapsible=icon]:hidden">BALDONTLIE</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="hide-scrollbar">
        {renderNavGroup("Home", homeNavItems)}
        {renderNavGroup("Match Center", matchCenterItems)}
        {renderNavGroup("Discover", discoverItems)}
        {renderNavGroup("Scout", scoutItems)}
        {renderNavGroup("GAMES", gamesItems)}
        {renderNavGroup("Community", communityItems)}
        {renderNavGroup("My Space", mySpaceItems)}
      </SidebarContent>
    </Sidebar>
  );
}

function TopNav({
  currentLang,
  setLang,
  currentTheme,
  setTheme,
}: {
  currentLang: any;
  setLang: (l: any) => void;
  currentTheme: string;
  setTheme: (t: string) => void;
}) {
  const [location] = useLocation();
  const { t, i18n } = useTranslation();
  const [currentMode, setCurrentMode] = useState(userModes[2]); // Default Scout
  const controlClassName =
    "rounded-xl border border-white/8 bg-card/45 text-muted-foreground hover:border-primary/20 hover:bg-white/6 hover:text-foreground";
  const isRtl = currentLang.dir === "rtl";

  if (location === "/") return null;

  const handleLanguageChange = (lang: any) => {
    setLang(lang);
    i18n.changeLanguage(lang.code);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang.code);

    // Set direction explicitly on HTML
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
  };

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
    if (themeId === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 px-3 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-4 md:px-6 lg:px-8">
      <div className={cn("flex w-full flex-wrap items-center gap-3 md:flex-nowrap md:gap-4", isRtl && "md:flex-row-reverse")}>
        <div className={cn("flex min-w-0 flex-1 items-center gap-3 md:max-w-2xl", isRtl && "md:flex-row-reverse")}>
          <SidebarTrigger className={`h-9 w-9 shrink-0 ${controlClassName}`} />
          <div className="relative order-3 basis-full md:order-none md:basis-auto md:flex-1">
          <Search
            className={`absolute ${currentLang.dir === "rtl" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`}
          />
          <input
            type="text"
            placeholder={t("Search players, clubs, matches...")}
            className={`h-11 w-full rounded-xl border border-white/8 bg-card/45 py-2 text-sm text-foreground transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary focus:bg-card ${currentLang.dir === "rtl" ? "pr-10 pl-4" : "pl-10 pr-4"}`}
          />
        </div>
        </div>
        <div className={cn("flex shrink-0 items-center gap-1 sm:gap-2 lg:gap-4", isRtl ? "mr-auto flex-row-reverse" : "ml-auto")}>
        
        {/* User Mode Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={`hidden xl:flex items-center gap-2 ${controlClassName} ${currentMode.color}`}
            >
              <currentMode.icon className="w-4 h-4" />
              <span className="font-semibold">{currentMode.name}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card border-border">
             <DropdownMenuLabel className="text-xs text-muted-foreground">Select Experience</DropdownMenuLabel>
             <DropdownMenuSeparator />
             {userModes.map((mode) => (
                <DropdownMenuItem 
                  key={mode.id} 
                  className="cursor-pointer flex items-center gap-2"
                  onClick={() => setCurrentMode(mode)}
                >
                  <mode.icon className={`w-4 h-4 ${mode.color}`} />
                  <span className={currentMode.id === mode.id ? "font-bold" : ""}>{mode.name}</span>
                </DropdownMenuItem>
             ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={controlClassName}
            >
              <Palette className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-card border-border max-h-[300px] overflow-y-auto"
          >
            <DropdownMenuLabel>Themes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.id}
                className={`cursor-pointer ${currentTheme === theme.id ? "text-primary font-bold" : ""}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                {theme.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`flex h-9 items-center gap-2 px-2 ${controlClassName}`}
            >
              <Globe2 className="w-4 h-4" />
              <span className="hidden text-xs uppercase font-medium sm:inline-flex">
                {currentLang.code}
              </span>
              <ChevronDown className="hidden w-3 h-3 sm:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-40 bg-card border-border"
          >
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                className={`cursor-pointer ${currentLang.code === lang.code ? "text-primary" : ""}`}
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className={`relative ${controlClassName}`}
        >
          <Bell className="w-5 h-5" />
          <span className={cn("absolute top-2 w-2 h-2 bg-primary rounded-full animate-pulse", isRtl ? "left-2" : "right-2")}></span>
        </Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-card/45 text-xs font-semibold text-white">
          MJ
        </div>
      </div>
      </div>
    </header>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(
    () =>
      languages.find((language) => language.code === (i18n.resolvedLanguage || i18n.language)) ??
      languages[0],
  );
  const [currentTheme, setCurrentTheme] = useState("default");

  useEffect(() => {
    const nextLanguage =
      languages.find((language) => language.code === (i18n.resolvedLanguage || i18n.language)) ??
      languages[0];

    setCurrentLang((previous) =>
      previous.code === nextLanguage.code ? previous : nextLanguage,
    );
  }, [i18n.language, i18n.resolvedLanguage]);

  // Apply RTL direction if Arabic
  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang.code);
  }, [currentLang]);

  if (location === "/") {
    return (
      <div
        className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground transition-colors duration-300"
        dir={currentLang.dir}
      >
        {children}
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div
        className="flex min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300"
        data-app-dir={currentLang.dir}
        dir={currentLang.dir}
      >
        <AppSidebar dir={currentLang.dir} />
        <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
          <TopNav
            currentLang={currentLang}
            setLang={setCurrentLang}
            currentTheme={currentTheme}
            setTheme={setCurrentTheme}
          />
          <div className="flex-1 overflow-auto overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_35%)]">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
