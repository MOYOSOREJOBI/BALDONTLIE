import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { localeCatalog, LANGUAGE_STORAGE_KEY, getLocaleMeta, type LocaleMeta } from "@/locales/config";
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
  Menu,
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
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  useSidebar,
} from "@/components/ui/sidebar";

const homeNavItems = [
  { title: "For You Feed", url: "/news", icon: Newspaper },
  { title: "Dashboard", url: "/dashboard", icon: Activity },
];

const matchCenterItems = [
  { title: "Live Match Simulator", url: "/live-sim", icon: Activity },
  { title: "Match Storyline", url: "/storyline", icon: TrendingUp },
  { title: "Predictions & xG", url: "/predictions", icon: Target },
  { title: "Prediction Markets", url: "/odds", icon: Dices },
  { title: "League Tables", url: "/tables", icon: Table },
];

const discoverItems = [
  { title: "Player Explorer", url: "/players", icon: Users },
  { title: "Rankings", url: "/rankings", icon: Trophy },
  { title: "Transfers Lab", url: "/transfers", icon: TrendingUp },
];

const scoutItems = [
  { title: "Scout Workspace", url: "/scout-workspace", icon: Database },
  { title: "Player Compare", url: "/compare/players", icon: Swords },
  { title: "Team Compare", url: "/compare/teams", icon: Shield },
  { title: "Team Fit", url: "/team-fit", icon: Layers },
  { title: "Technical Overlay", url: "/technical-overlay", icon: BarChart2 },
];

const communityItems = [
  { title: "Match Rooms", url: "/match-rooms", icon: MessageCircle },
  { title: "Social & Chats", url: "/social", icon: MessageCircle },
  { title: "Fan Sentiment", url: "/fan-sentiment", icon: Heart },
];

const gamesItems = [
  { title: "Market XI", url: "/games/market-xi", icon: BarChart2 },
  { title: "Prediction Arena", url: "/games/prediction-arena", icon: Target },
  { title: "Fantasy Drafts", url: "/games/fantasy-drafts", icon: Users },
  { title: "Challenges", url: "/games/challenges", icon: Trophy },
  { title: "Director Mode", url: "/games/director-mode", icon: Compass },
];

const mySpaceItems = [
  { title: "My Shortlist", url: "/my-player", icon: Star },
];

// Language list sourced from localeCatalog — single source of truth
const languages = localeCatalog;

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


function AppSidebar({ dir }: { dir: string }) {
  const [location] = useLocation();
  const { t } = useTranslation();

  const renderNavGroup = (title: string, items: any[]) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
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
                className="hover:bg-primary/10 transition-colors"
              >
                <Link href={item.url} className="font-medium">
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
      className="border-r border-border/50 transition-colors duration-300"
    >
      <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/50 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors w-full"
        >
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground shrink-0 transition-colors duration-300">
            <BarChart2 className="w-5 h-5" />
          </div>
          <span className="truncate">BALDONTLIE</span>
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
  currentLang: LocaleMeta;
  setLang: (l: LocaleMeta) => void;
  currentTheme: string;
  setTheme: (t: string) => void;
}) {
  const [location] = useLocation();
  const { toggleSidebar } = useSidebar();
  const { t, i18n } = useTranslation();
  if (location === "/") return null;

  const handleLanguageChange = (lang: LocaleMeta) => {
    setLang(lang);
    // i18n.changeLanguage triggers the languageChanged event in i18n.ts
    // which updates document.documentElement.dir and lang automatically
    i18n.changeLanguage(lang.code);
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
    <header className="h-16 border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-4 lg:px-8 transition-colors duration-300">
      <div className="flex items-center gap-4 w-full max-w-xl">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden shrink-0"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="relative hidden md:block w-full">
          <Search
            className={`absolute ${currentLang.dir === "rtl" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`}
          />
          <input
            type="text"
            placeholder={t("Cmd + K to search players, clubs, matches...")}
            className={`w-full bg-card/50 border border-border rounded-md py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-card transition-all duration-300 ${currentLang.dir === "rtl" ? "pr-10 pl-4" : "pl-10 pr-4"}`}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-4 shrink-0">
        
        {/* Theme Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
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
              className="h-9 px-2 hidden lg:flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Globe2 className="w-4 h-4" />
              <span className="text-xs uppercase font-medium">
                {currentLang.code}
              </span>
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-card border-border max-h-[320px] overflow-y-auto"
          >
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                className={`cursor-pointer flex items-center gap-2 ${currentLang.code === lang.code ? "text-primary font-bold" : ""}`}
                onClick={() => handleLanguageChange(lang)}
              >
                <span>{lang.nativeName}</span>
                {lang.experimental && (
                  <span className="text-[10px] text-muted-foreground ml-auto">beta</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        </Button>
        <div className="w-8 h-8 rounded-full bg-accent border border-border flex items-center justify-center font-semibold text-xs">
          MJ
        </div>
      </div>
    </header>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { i18n } = useTranslation();

  // Initialise currentLang from stored preference or i18n.language
  const [currentLang, setCurrentLang] = useState<LocaleMeta>(() => {
    const stored = typeof window !== "undefined"
      ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
      : null;
    return getLocaleMeta(stored || i18n.language) ?? languages[0];
  });

  const [currentTheme, setCurrentTheme] = useState("default");

  // Keep currentLang in sync when i18n.language changes from elsewhere
  useEffect(() => {
    const handleChange = (lng: string) => {
      setCurrentLang(getLocaleMeta(lng) ?? languages[0]);
    };
    i18n.on("languageChanged", handleChange);
    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, [i18n]);

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
        className={`flex min-h-screen bg-background text-foreground w-full selection:bg-primary selection:text-primary-foreground transition-colors duration-300 ${currentLang.dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}
        dir={currentLang.dir}
      >
        <AppSidebar dir={currentLang.dir} />
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          <TopNav
            currentLang={currentLang}
            setLang={setCurrentLang}
            currentTheme={currentTheme}
            setTheme={setCurrentTheme}
          />
          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
