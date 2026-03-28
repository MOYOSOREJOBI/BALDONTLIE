import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowUpDown,
  Filter,
  Info,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { mockPlayers, type Player } from "@/data/mock";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type GenderFilter = "all" | "mens" | "womens";
type PositionFilter = "all" | "att" | "mid" | "def" | "gk";
type RegionFilter = "all" | "uefa" | "conmebol" | "afc" | "caf";
type RangeValue = [number, number];

type ExplorerPlayer = Player & {
  gender: "mens" | "womens";
  region: Exclude<RegionFilter, "all">;
  heightCm: number;
  crossing: number;
  chancesCreatedP90: number;
  goalPercentile: number;
  tacklingPercentile: number;
  passingPercentile: number;
  contractMonthsLeft: number;
  marketValueMillions: number;
};

const DEFAULT_AGE_RANGE: RangeValue = [16, 40];
const DEFAULT_OVERALL_RANGE: RangeValue = [50, 99];
const DEFAULT_HEIGHT_RANGE: RangeValue = [160, 210];
const DEFAULT_SPEED_RANGE: RangeValue = [0, 99];
const DEFAULT_CROSSING_RANGE: RangeValue = [0, 99];
const DEFAULT_PASSING_RANGE: RangeValue = [0, 99];
const DEFAULT_CHANCES_RANGE: RangeValue = [0, 5];
const DEFAULT_GOAL_PERCENTILE_RANGE: RangeValue = [50, 100];
const DEFAULT_TACKLING_PERCENTILE_RANGE: RangeValue = [0, 100];
const DEFAULT_POTENTIAL_RANGE: RangeValue = [50, 99];
const DEFAULT_PHYSICAL_RANGE: RangeValue = [0, 99];
const DEFAULT_DRIBBLING_RANGE: RangeValue = [0, 99];
const DEFAULT_PASSING_PERCENTILE_RANGE: RangeValue = [0, 100];

const womenPlayers: Player[] = [
  {
    id: "w1",
    name: "Aitana Bonmati",
    club: "Barcelona Femeni",
    league: "Liga F",
    nationality: "Spain",
    age: 26,
    position: "CM",
    overall: 91,
    potential: 92,
    value: "€110M",
    wage: "€250K",
    stats: { pace: 76, shooting: 86, passing: 92, dribbling: 91, defending: 72, physical: 74 },
    trend: "up",
    sentiment: 97,
  },
  {
    id: "w2",
    name: "Lauren James",
    club: "Chelsea Women",
    league: "WSL",
    nationality: "England",
    age: 22,
    position: "RW",
    overall: 88,
    potential: 91,
    value: "€70M",
    wage: "€180K",
    stats: { pace: 86, shooting: 85, passing: 82, dribbling: 89, defending: 48, physical: 74 },
    trend: "up",
    sentiment: 91,
  },
  {
    id: "w3",
    name: "Naomi Girma",
    club: "Chelsea Women",
    league: "WSL",
    nationality: "USA",
    age: 24,
    position: "CB",
    overall: 87,
    potential: 90,
    value: "€65M",
    wage: "€140K",
    stats: { pace: 78, shooting: 42, passing: 83, dribbling: 77, defending: 91, physical: 84 },
    trend: "up",
    sentiment: 88,
  },
  {
    id: "w4",
    name: "Grace Clinton",
    club: "Manchester United Women",
    league: "WSL",
    nationality: "England",
    age: 21,
    position: "CM",
    overall: 84,
    potential: 89,
    value: "€18M",
    wage: "€70K",
    stats: { pace: 79, shooting: 78, passing: 84, dribbling: 83, defending: 72, physical: 76 },
    trend: "up",
    sentiment: 90,
  },
];

const heightByPosition: Record<string, number> = {
  GK: 193,
  CB: 188,
  LB: 180,
  RB: 179,
  CM: 181,
  CAM: 178,
  CDM: 184,
  LW: 178,
  RW: 177,
  ST: 186,
};

const contractMonthsById: Record<string, number> = {
  p8: 8,
  p11: 10,
  p12: 6,
  p19: 11,
  p20: 12,
  p22: 9,
  p24: 14,
  w2: 10,
  w4: 11,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function asRange(value: number[]): RangeValue {
  return [value[0] ?? 0, value[1] ?? 0];
}

function parseValueToMillions(value: string) {
  const normalized = value.replace("€", "").replace("M", "").replace("K", "");
  const amount = Number.parseFloat(normalized);

  if (Number.isNaN(amount)) return 0;
  if (value.includes("K")) return amount / 1000;
  return amount;
}

function getPositionBucket(position: string): PositionFilter {
  if (position === "GK") return "gk";
  if (["CB", "LB", "RB"].includes(position)) return "def";
  if (["CM", "CAM", "CDM"].includes(position)) return "mid";
  return "att";
}

function inferRegion(player: Player): Exclude<RegionFilter, "all"> {
  const europeanLeagues = ["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "WSL", "Liga F"];
  const conmebolNationalities = ["Brazil", "Argentina", "Uruguay", "Colombia", "Chile", "Paraguay", "Ecuador"];
  const afcNationalities = ["Japan", "South Korea", "Iran", "Saudi Arabia", "Australia"];
  const cafNationalities = ["Egypt", "Morocco", "Nigeria", "Ghana", "Senegal", "Algeria", "Mali"];

  if (europeanLeagues.includes(player.league)) return "uefa";
  if (conmebolNationalities.includes(player.nationality)) return "conmebol";
  if (afcNationalities.includes(player.nationality)) return "afc";
  if (cafNationalities.includes(player.nationality)) return "caf";
  return "uefa";
}

function buildExplorerPlayer(player: Player, gender: "mens" | "womens"): ExplorerPlayer {
  const baseHeight = heightByPosition[player.position] ?? 180;
  const heightCm = clamp(
    Math.round(baseHeight + (player.stats.physical - 70) * 0.35 - (player.stats.pace - 70) * 0.12),
    160,
    210,
  );
  const wingBias = ["LW", "RW", "LB", "RB"].includes(player.position) ? 8 : 0;
  const playmakerBias = ["CM", "CAM", "RW", "LW"].includes(player.position) ? 0.45 : 0.1;
  const crossing = clamp(
    Math.round(player.stats.passing * 0.55 + player.stats.dribbling * 0.25 + player.stats.pace * 0.2 + wingBias),
    0,
    99,
  );
  const chancesCreatedP90 = clamp(
    Number((player.stats.passing * 0.03 + player.stats.dribbling * 0.014 + playmakerBias).toFixed(1)),
    0,
    5,
  );
  const goalPercentile = clamp(
    Math.round(player.stats.shooting * 0.75 + player.overall * 0.25 - (getPositionBucket(player.position) === "def" ? 12 : 0) - (player.position === "GK" ? 45 : 0)),
    0,
    100,
  );
  const tacklingPercentile = clamp(
    Math.round(player.stats.defending * 0.82 + player.stats.physical * 0.18 - (getPositionBucket(player.position) === "att" ? 12 : 0) - (player.position === "GK" ? 35 : 0)),
    0,
    100,
  );
  const passingPercentile = clamp(
    Math.round(player.stats.passing * 0.85 + player.overall * 0.15),
    0,
    100,
  );
  const contractMonthsLeft =
    contractMonthsById[player.id] ??
    clamp(Math.round(30 - (player.age - 20) * 0.9 + (player.trend === "up" ? 4 : 0) - (player.trend === "down" ? 6 : 0)), 6, 36);

  return {
    ...player,
    gender,
    region: inferRegion(player),
    heightCm,
    crossing,
    chancesCreatedP90,
    goalPercentile,
    tacklingPercentile,
    passingPercentile,
    contractMonthsLeft,
    marketValueMillions: parseValueToMillions(player.value),
  };
}

function formatRangeLabel(range: RangeValue, defaultRange: RangeValue, suffix = "") {
  if (range[0] === defaultRange[0] && range[1] === defaultRange[1]) {
    return `${defaultRange[0]}${suffix} - ${defaultRange[1]}${suffix}`;
  }

  return `${range[0]}${suffix} - ${range[1]}${suffix}`;
}

function formatPercentileLabel(range: RangeValue, defaultRange: RangeValue, topLabel: string) {
  if (range[0] === defaultRange[0] && range[1] === defaultRange[1]) return topLabel;
  if (range[0] === 0 && range[1] === 100) return "Any";
  return `${range[0]}% - ${range[1]}%`;
}

function RemoveFilterButton({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full p-0.5 transition-opacity hover:text-red-400",
        active ? "opacity-100 text-muted-foreground" : "opacity-0 group-hover:opacity-100 text-muted-foreground",
      )}
      aria-label="Reset filter"
    >
      <X className="w-3 h-3" />
    </button>
  );
}

export default function PlayersExplorer() {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [positionFilter, setPositionFilter] = useState<PositionFilter>("all");
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("all");
  const [ageRange, setAgeRange] = useState<RangeValue>(DEFAULT_AGE_RANGE);
  const [overallRange, setOverallRange] = useState<RangeValue>(DEFAULT_OVERALL_RANGE);
  const [heightRange, setHeightRange] = useState<RangeValue>(DEFAULT_HEIGHT_RANGE);
  const [speedRange, setSpeedRange] = useState<RangeValue>(DEFAULT_SPEED_RANGE);
  const [crossingRange, setCrossingRange] = useState<RangeValue>(DEFAULT_CROSSING_RANGE);
  const [passingRange, setPassingRange] = useState<RangeValue>(DEFAULT_PASSING_RANGE);
  const [chancesRange, setChancesRange] = useState<RangeValue>(DEFAULT_CHANCES_RANGE);
  const [goalPercentileRange, setGoalPercentileRange] = useState<RangeValue>(DEFAULT_GOAL_PERCENTILE_RANGE);
  const [tacklingPercentileRange, setTacklingPercentileRange] = useState<RangeValue>(DEFAULT_TACKLING_PERCENTILE_RANGE);
  const [marketRisersOnly, setMarketRisersOnly] = useState(false);
  const [marketDropsOnly, setMarketDropsOnly] = useState(false);
  const [contractExpiringOnly, setContractExpiringOnly] = useState(false);
  const [showPotentialFilter, setShowPotentialFilter] = useState(false);
  const [showPhysicalFilter, setShowPhysicalFilter] = useState(false);
  const [showDribblingFilter, setShowDribblingFilter] = useState(false);
  const [showPassingPercentileFilter, setShowPassingPercentileFilter] = useState(false);
  const [potentialRange, setPotentialRange] = useState<RangeValue>(DEFAULT_POTENTIAL_RANGE);
  const [physicalRange, setPhysicalRange] = useState<RangeValue>(DEFAULT_PHYSICAL_RANGE);
  const [dribblingRange, setDribblingRange] = useState<RangeValue>(DEFAULT_DRIBBLING_RANGE);
  const [passingPercentileRange, setPassingPercentileRange] = useState<RangeValue>(DEFAULT_PASSING_PERCENTILE_RANGE);
  const segmentButtonClass =
    "flex-1 whitespace-nowrap rounded-xl border px-3 py-2 text-sm transition-colors sm:flex-none";
  const isRtl = i18n.dir() === "rtl";

  const explorerPlayers = useMemo(
    () => [...mockPlayers.map((player) => buildExplorerPlayer(player, "mens")), ...womenPlayers.map((player) => buildExplorerPlayer(player, "womens"))],
    [],
  );

  const resetAllFilters = () => {
    setSearchQuery("");
    setGenderFilter("all");
    setPositionFilter("all");
    setRegionFilter("all");
    setAgeRange(DEFAULT_AGE_RANGE);
    setOverallRange(DEFAULT_OVERALL_RANGE);
    setHeightRange(DEFAULT_HEIGHT_RANGE);
    setSpeedRange(DEFAULT_SPEED_RANGE);
    setCrossingRange(DEFAULT_CROSSING_RANGE);
    setPassingRange(DEFAULT_PASSING_RANGE);
    setChancesRange(DEFAULT_CHANCES_RANGE);
    setGoalPercentileRange(DEFAULT_GOAL_PERCENTILE_RANGE);
    setTacklingPercentileRange(DEFAULT_TACKLING_PERCENTILE_RANGE);
    setMarketRisersOnly(false);
    setMarketDropsOnly(false);
    setContractExpiringOnly(false);
    setShowPotentialFilter(false);
    setShowPhysicalFilter(false);
    setShowDribblingFilter(false);
    setShowPassingPercentileFilter(false);
    setPotentialRange(DEFAULT_POTENTIAL_RANGE);
    setPhysicalRange(DEFAULT_PHYSICAL_RANGE);
    setDribblingRange(DEFAULT_DRIBBLING_RANGE);
    setPassingPercentileRange(DEFAULT_PASSING_PERCENTILE_RANGE);
  };

  const filteredPlayers = useMemo(() => {
    return explorerPlayers.filter((player) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        player.name.toLowerCase().includes(query) ||
        player.club.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query) ||
        player.league.toLowerCase().includes(query);

      const matchesGender = genderFilter === "all" || player.gender === genderFilter;
      const matchesPosition = positionFilter === "all" || getPositionBucket(player.position) === positionFilter;
      const matchesRegion = regionFilter === "all" || player.region === regionFilter;
      const matchesAge = player.age >= ageRange[0] && player.age <= ageRange[1];
      const matchesOverall = player.overall >= overallRange[0] && player.overall <= overallRange[1];
      const matchesHeight = player.heightCm >= heightRange[0] && player.heightCm <= heightRange[1];
      const matchesSpeed = player.stats.pace >= speedRange[0] && player.stats.pace <= speedRange[1];
      const matchesCrossing = player.crossing >= crossingRange[0] && player.crossing <= crossingRange[1];
      const matchesPassing = player.stats.passing >= passingRange[0] && player.stats.passing <= passingRange[1];
      const matchesChances = player.chancesCreatedP90 >= chancesRange[0] && player.chancesCreatedP90 <= chancesRange[1];
      const matchesGoalPercentile =
        player.goalPercentile >= goalPercentileRange[0] && player.goalPercentile <= goalPercentileRange[1];
      const matchesTacklingPercentile =
        player.tacklingPercentile >= tacklingPercentileRange[0] &&
        player.tacklingPercentile <= tacklingPercentileRange[1];
      const matchesTrend =
        (!marketRisersOnly && !marketDropsOnly) ||
        (marketRisersOnly && player.trend === "up") ||
        (marketDropsOnly && player.trend === "down");
      const matchesContract = !contractExpiringOnly || player.contractMonthsLeft < 12;
      const matchesPotential =
        !showPotentialFilter || (player.potential >= potentialRange[0] && player.potential <= potentialRange[1]);
      const matchesPhysical =
        !showPhysicalFilter || (player.stats.physical >= physicalRange[0] && player.stats.physical <= physicalRange[1]);
      const matchesDribbling =
        !showDribblingFilter || (player.stats.dribbling >= dribblingRange[0] && player.stats.dribbling <= dribblingRange[1]);
      const matchesPassingPercentile =
        !showPassingPercentileFilter ||
        (player.passingPercentile >= passingPercentileRange[0] &&
          player.passingPercentile <= passingPercentileRange[1]);

      return (
        matchesSearch &&
        matchesGender &&
        matchesPosition &&
        matchesRegion &&
        matchesAge &&
        matchesOverall &&
        matchesHeight &&
        matchesSpeed &&
        matchesCrossing &&
        matchesPassing &&
        matchesChances &&
        matchesGoalPercentile &&
        matchesTacklingPercentile &&
        matchesTrend &&
        matchesContract &&
        matchesPotential &&
        matchesPhysical &&
        matchesDribbling &&
        matchesPassingPercentile
      );
    });
  }, [
    ageRange,
    chancesRange,
    contractExpiringOnly,
    crossingRange,
    dribblingRange,
    explorerPlayers,
    genderFilter,
    goalPercentileRange,
    heightRange,
    marketDropsOnly,
    marketRisersOnly,
    overallRange,
    passingPercentileRange,
    passingRange,
    physicalRange,
    positionFilter,
    potentialRange,
    regionFilter,
    searchQuery,
    showDribblingFilter,
    showPassingPercentileFilter,
    showPhysicalFilter,
    showPotentialFilter,
    speedRange,
    tacklingPercentileRange,
  ]);

  const activeFilterCount = [
    genderFilter !== "all",
    positionFilter !== "all",
    regionFilter !== "all",
    ageRange[0] !== DEFAULT_AGE_RANGE[0] || ageRange[1] !== DEFAULT_AGE_RANGE[1],
    overallRange[0] !== DEFAULT_OVERALL_RANGE[0] || overallRange[1] !== DEFAULT_OVERALL_RANGE[1],
    heightRange[0] !== DEFAULT_HEIGHT_RANGE[0] || heightRange[1] !== DEFAULT_HEIGHT_RANGE[1],
    speedRange[0] !== DEFAULT_SPEED_RANGE[0] || speedRange[1] !== DEFAULT_SPEED_RANGE[1],
    crossingRange[0] !== DEFAULT_CROSSING_RANGE[0] || crossingRange[1] !== DEFAULT_CROSSING_RANGE[1],
    passingRange[0] !== DEFAULT_PASSING_RANGE[0] || passingRange[1] !== DEFAULT_PASSING_RANGE[1],
    chancesRange[0] !== DEFAULT_CHANCES_RANGE[0] || chancesRange[1] !== DEFAULT_CHANCES_RANGE[1],
    goalPercentileRange[0] !== DEFAULT_GOAL_PERCENTILE_RANGE[0] ||
      goalPercentileRange[1] !== DEFAULT_GOAL_PERCENTILE_RANGE[1],
    tacklingPercentileRange[0] !== DEFAULT_TACKLING_PERCENTILE_RANGE[0] ||
      tacklingPercentileRange[1] !== DEFAULT_TACKLING_PERCENTILE_RANGE[1],
    marketRisersOnly,
    marketDropsOnly,
    contractExpiringOnly,
    showPotentialFilter,
    showPhysicalFilter,
    showDribblingFilter,
    showPassingPercentileFilter,
  ].filter(Boolean).length;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1680px] flex-col p-4 pb-20 sm:p-6 lg:h-[calc(100vh-4rem)] lg:p-8">
      <div className="mb-6 flex shrink-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-display font-bold tracking-tight text-white">Player Explorer</h1>
          <p className="text-muted-foreground">
            Advanced global scouting shell with mock player data and real frontend filtering.
          </p>
        </div>
        <div className="flex w-full gap-1 overflow-x-auto rounded-xl border border-white/8 bg-card/50 p-1 sm:w-auto">
          <button
            className={`${segmentButtonClass} ${genderFilter === "all" ? "border-primary/20 bg-primary text-black font-semibold" : "border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white"}`}
            onClick={() => setGenderFilter("all")}
          >
            All
          </button>
          <button
            className={`${segmentButtonClass} ${genderFilter === "mens" ? "border-primary/20 bg-primary text-black font-semibold" : "border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white"}`}
            onClick={() => setGenderFilter("mens")}
          >
            Men&apos;s
          </button>
          <button
            className={`${segmentButtonClass} ${genderFilter === "womens" ? "border-primary/20 bg-primary text-black font-semibold" : "border-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-white"}`}
            onClick={() => setGenderFilter("womens")}
          >
            Women&apos;s
          </button>
        </div>
      </div>

      <div className="mb-6 flex shrink-0 flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className={cn("absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground", isRtl ? "right-3" : "left-3")} />
          <Input
            placeholder="Search by name, club, or position..."
            className={cn("h-11 border-white/8 bg-card/50 text-base sm:h-12", isRtl ? "pr-11 text-right" : "pl-11")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          className={`h-11 rounded-xl px-5 sm:h-12 sm:px-6 ${showFilters ? "border-primary/30 bg-primary/20 text-primary" : ""}`}
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" /> Advanced Filters
        </Button>
      </div>

      <div className="flex flex-1 min-h-0 flex-col gap-6 xl:flex-row">
        {showFilters && (
          <div className="flex w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/20 xl:w-72">
            <div className="flex items-center justify-between border-b border-border/50 bg-background/50 p-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
              </h3>
              <Button variant="ghost" size="sm" className="text-xs h-7" onClick={resetAllFilters}>
                Reset
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-4">
              <Accordion type="multiple" defaultValue={["basic", "physical", "technical", "percentiles", "market"]}>
                <AccordionItem value="basic" className="border-none">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Basic Info</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <Select value={positionFilter} onValueChange={(value) => setPositionFilter(value as PositionFilter)}>
                        <SelectTrigger className="w-full bg-background/50 h-8 text-xs">
                          <SelectValue placeholder="Position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Positions</SelectItem>
                          <SelectItem value="att">Attackers</SelectItem>
                          <SelectItem value="mid">Midfielders</SelectItem>
                          <SelectItem value="def">Defenders</SelectItem>
                          <SelectItem value="gk">Goalkeepers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Select value={regionFilter} onValueChange={(value) => setRegionFilter(value as RegionFilter)}>
                        <SelectTrigger className="w-full bg-background/50 h-8 text-xs">
                          <SelectValue placeholder="League / Confederation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Global (All)</SelectItem>
                          <SelectItem value="uefa">UEFA Top 5</SelectItem>
                          <SelectItem value="conmebol">CONMEBOL</SelectItem>
                          <SelectItem value="afc">AFC (Asia)</SelectItem>
                          <SelectItem value="caf">CAF (Africa)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Age
                          <RemoveFilterButton
                            active={ageRange[0] !== DEFAULT_AGE_RANGE[0] || ageRange[1] !== DEFAULT_AGE_RANGE[1]}
                            onClick={() => setAgeRange(DEFAULT_AGE_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(ageRange, DEFAULT_AGE_RANGE)}</span>
                      </div>
                      <Slider value={ageRange} onValueChange={(value) => setAgeRange(asRange(value))} max={40} min={16} step={1} />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Overall Rating
                          <RemoveFilterButton
                            active={overallRange[0] !== DEFAULT_OVERALL_RANGE[0] || overallRange[1] !== DEFAULT_OVERALL_RANGE[1]}
                            onClick={() => setOverallRange(DEFAULT_OVERALL_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(overallRange, DEFAULT_OVERALL_RANGE)}</span>
                      </div>
                      <Slider value={overallRange} onValueChange={(value) => setOverallRange(asRange(value))} max={99} min={1} step={1} />
                    </div>

                    {showPotentialFilter ? (
                      <div className="space-y-3 pt-2 group">
                        <div className="flex justify-between text-xs items-center">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Potential
                            <RemoveFilterButton
                              active
                              onClick={() => {
                                setShowPotentialFilter(false);
                                setPotentialRange(DEFAULT_POTENTIAL_RANGE);
                              }}
                            />
                          </span>
                          <span>{formatRangeLabel(potentialRange, DEFAULT_POTENTIAL_RANGE)}</span>
                        </div>
                        <Slider value={potentialRange} onValueChange={(value) => setPotentialRange(asRange(value))} max={99} min={50} step={1} />
                      </div>
                    ) : null}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary"
                      onClick={() => setShowPotentialFilter((value) => !value)}
                    >
                      <Plus className="w-3 h-3 mr-2" /> {showPotentialFilter ? "Remove Potential Filter" : "Add Stat Filter"}
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="physical" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Physical Attributes</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Height (cm)
                          <RemoveFilterButton
                            active={heightRange[0] !== DEFAULT_HEIGHT_RANGE[0] || heightRange[1] !== DEFAULT_HEIGHT_RANGE[1]}
                            onClick={() => setHeightRange(DEFAULT_HEIGHT_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(heightRange, DEFAULT_HEIGHT_RANGE)}</span>
                      </div>
                      <Slider value={heightRange} onValueChange={(value) => setHeightRange(asRange(value))} max={210} min={160} step={1} />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Speed (Sprint)
                          <RemoveFilterButton
                            active={speedRange[0] !== DEFAULT_SPEED_RANGE[0] || speedRange[1] !== DEFAULT_SPEED_RANGE[1]}
                            onClick={() => setSpeedRange(DEFAULT_SPEED_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(speedRange, DEFAULT_SPEED_RANGE)}</span>
                      </div>
                      <Slider value={speedRange} onValueChange={(value) => setSpeedRange(asRange(value))} max={99} min={0} step={1} />
                    </div>

                    {showPhysicalFilter ? (
                      <div className="space-y-3 pt-2 group">
                        <div className="flex justify-between text-xs items-center">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Physical
                            <RemoveFilterButton
                              active
                              onClick={() => {
                                setShowPhysicalFilter(false);
                                setPhysicalRange(DEFAULT_PHYSICAL_RANGE);
                              }}
                            />
                          </span>
                          <span>{formatRangeLabel(physicalRange, DEFAULT_PHYSICAL_RANGE)}</span>
                        </div>
                        <Slider value={physicalRange} onValueChange={(value) => setPhysicalRange(asRange(value))} max={99} min={0} step={1} />
                      </div>
                    ) : null}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary"
                      onClick={() => setShowPhysicalFilter((value) => !value)}
                    >
                      <Plus className="w-3 h-3 mr-2" /> {showPhysicalFilter ? "Remove Physical Filter" : "Add Stat Filter"}
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Core Stats</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Crossing
                          <RemoveFilterButton
                            active={crossingRange[0] !== DEFAULT_CROSSING_RANGE[0] || crossingRange[1] !== DEFAULT_CROSSING_RANGE[1]}
                            onClick={() => setCrossingRange(DEFAULT_CROSSING_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(crossingRange, DEFAULT_CROSSING_RANGE)}</span>
                      </div>
                      <Slider value={crossingRange} onValueChange={(value) => setCrossingRange(asRange(value))} max={99} min={0} step={1} />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Passing
                          <RemoveFilterButton
                            active={passingRange[0] !== DEFAULT_PASSING_RANGE[0] || passingRange[1] !== DEFAULT_PASSING_RANGE[1]}
                            onClick={() => setPassingRange(DEFAULT_PASSING_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(passingRange, DEFAULT_PASSING_RANGE)}</span>
                      </div>
                      <Slider value={passingRange} onValueChange={(value) => setPassingRange(asRange(value))} max={99} min={0} step={1} />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Chances Created (p90)
                          <RemoveFilterButton
                            active={chancesRange[0] !== DEFAULT_CHANCES_RANGE[0] || chancesRange[1] !== DEFAULT_CHANCES_RANGE[1]}
                            onClick={() => setChancesRange(DEFAULT_CHANCES_RANGE)}
                          />
                        </span>
                        <span>{formatRangeLabel(chancesRange, DEFAULT_CHANCES_RANGE, "")}</span>
                      </div>
                      <Slider value={chancesRange} onValueChange={(value) => setChancesRange(asRange(value))} max={5} min={0} step={0.1} />
                    </div>

                    {showDribblingFilter ? (
                      <div className="space-y-3 pt-2 group">
                        <div className="flex justify-between text-xs items-center">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Dribbling
                            <RemoveFilterButton
                              active
                              onClick={() => {
                                setShowDribblingFilter(false);
                                setDribblingRange(DEFAULT_DRIBBLING_RANGE);
                              }}
                            />
                          </span>
                          <span>{formatRangeLabel(dribblingRange, DEFAULT_DRIBBLING_RANGE)}</span>
                        </div>
                        <Slider value={dribblingRange} onValueChange={(value) => setDribblingRange(asRange(value))} max={99} min={0} step={1} />
                      </div>
                    ) : null}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary"
                      onClick={() => setShowDribblingFilter((value) => !value)}
                    >
                      <Plus className="w-3 h-3 mr-2" /> {showDribblingFilter ? "Remove Dribbling Filter" : "Add Stat Filter"}
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="percentiles" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Advanced Percentiles</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="space-y-3 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Goal Percentile
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-3 h-3" />
                            </TooltipTrigger>
                            <TooltipContent>Goals compared to positional peers</TooltipContent>
                          </Tooltip>
                          <RemoveFilterButton
                            active={goalPercentileRange[0] !== DEFAULT_GOAL_PERCENTILE_RANGE[0] || goalPercentileRange[1] !== DEFAULT_GOAL_PERCENTILE_RANGE[1]}
                            onClick={() => setGoalPercentileRange(DEFAULT_GOAL_PERCENTILE_RANGE)}
                          />
                        </span>
                        <span>{formatPercentileLabel(goalPercentileRange, DEFAULT_GOAL_PERCENTILE_RANGE, "Top 50%")}</span>
                      </div>
                      <Slider
                        value={goalPercentileRange}
                        onValueChange={(value) => setGoalPercentileRange(asRange(value))}
                        max={100}
                        min={0}
                        step={1}
                      />
                    </div>

                    <div className="space-y-3 pt-2 group">
                      <div className="flex justify-between text-xs items-center">
                        <span className="text-muted-foreground flex items-center gap-1">
                          Tackling Percentile
                          <RemoveFilterButton
                            active={
                              tacklingPercentileRange[0] !== DEFAULT_TACKLING_PERCENTILE_RANGE[0] ||
                              tacklingPercentileRange[1] !== DEFAULT_TACKLING_PERCENTILE_RANGE[1]
                            }
                            onClick={() => setTacklingPercentileRange(DEFAULT_TACKLING_PERCENTILE_RANGE)}
                          />
                        </span>
                        <span>{formatPercentileLabel(tacklingPercentileRange, DEFAULT_TACKLING_PERCENTILE_RANGE, "Any")}</span>
                      </div>
                      <Slider
                        value={tacklingPercentileRange}
                        onValueChange={(value) => setTacklingPercentileRange(asRange(value))}
                        max={100}
                        min={0}
                        step={1}
                      />
                    </div>

                    {showPassingPercentileFilter ? (
                      <div className="space-y-3 pt-2 group">
                        <div className="flex justify-between text-xs items-center">
                          <span className="text-muted-foreground flex items-center gap-1">
                            Passing Percentile
                            <RemoveFilterButton
                              active
                              onClick={() => {
                                setShowPassingPercentileFilter(false);
                                setPassingPercentileRange(DEFAULT_PASSING_PERCENTILE_RANGE);
                              }}
                            />
                          </span>
                          <span>{formatPercentileLabel(passingPercentileRange, DEFAULT_PASSING_PERCENTILE_RANGE, "Any")}</span>
                        </div>
                        <Slider
                          value={passingPercentileRange}
                          onValueChange={(value) => setPassingPercentileRange(asRange(value))}
                          max={100}
                          min={0}
                          step={1}
                        />
                      </div>
                    ) : null}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-xs border-dashed border-muted-foreground/50 hover:border-primary hover:text-primary"
                      onClick={() => setShowPassingPercentileFilter((value) => !value)}
                    >
                      <Plus className="w-3 h-3 mr-2" /> {showPassingPercentileFilter ? "Remove Passing Filter" : "Add Stat Filter"}
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="market" className="border-none mt-2">
                  <AccordionTrigger className="py-2 hover:no-underline font-medium text-sm">Market & Contracts</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="market-risers"
                        checked={marketRisersOnly}
                        onCheckedChange={(checked) => setMarketRisersOnly(checked === true)}
                      />
                      <label htmlFor="market-risers" className="text-sm font-medium leading-none text-muted-foreground">
                        Market Risers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="market-drops"
                        checked={marketDropsOnly}
                        onCheckedChange={(checked) => setMarketDropsOnly(checked === true)}
                      />
                      <label htmlFor="market-drops" className="text-sm font-medium leading-none text-muted-foreground">
                        Market Drops
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="contract-expiring"
                        checked={contractExpiringOnly}
                        onCheckedChange={(checked) => setContractExpiringOnly(checked === true)}
                      />
                      <label htmlFor="contract-expiring" className="text-sm font-medium leading-none text-muted-foreground">
                        Contract Expiring (&lt; 1 yr)
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/20">
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-background/50 p-4 backdrop-blur">
            <span className="text-sm font-medium text-muted-foreground">
              {filteredPlayers.length} players match current filters
              {activeFilterCount > 0 ? ` · ${activeFilterCount} active filter${activeFilterCount === 1 ? "" : "s"}` : ""}
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs">
                <ArrowUpDown className={cn("w-3 h-3", isRtl ? "ml-2" : "mr-2")} /> Sort by Percentile
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-4 custom-scrollbar">
            {filteredPlayers.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20 p-8 text-center">
                <div className="text-lg font-display font-semibold text-white">No players match this filter set</div>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  The explorer is still running on mock player data, but the visible filters now work for real. Try broadening a range or hit reset to reopen the full demo database.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-3 md:hidden">
                  {filteredPlayers.map((player) => (
                    <div key={player.id} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <Link href={`/players/${player.id}`} className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-bold text-sm">
                            {player.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="truncate font-semibold text-white">{player.name}</div>
                            <div className="truncate text-xs text-muted-foreground">
                              {player.position} • {player.club}
                            </div>
                          </div>
                        </Link>
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background font-semibold text-white">
                          {player.overall}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">xG/90</div>
                          <div className="mt-2 font-semibold text-primary">0.{(player.stats.shooting / 10).toFixed(0)}</div>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Create</div>
                          <div className="mt-2 font-semibold text-blue-400">{player.chancesCreatedP90.toFixed(1)}</div>
                        </div>
                        <div className="rounded-xl border border-white/8 bg-background/40 p-3">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Value</div>
                          <div className="mt-2 truncate font-semibold text-white">{player.value}</div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        <span>{player.gender === "womens" ? "Women’s" : "Men’s"}</span>
                        <span>{player.region.toUpperCase()}</span>
                        <span>{player.contractMonthsLeft}m left</span>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                          <Star className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[860px] text-sm text-left">
                    <thead className="sticky top-0 z-10 bg-background text-xs uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Player</th>
                        <th className="px-4 py-3 text-center font-semibold">OVR</th>
                        <th className="px-4 py-3 text-center font-semibold">xG/90</th>
                        <th className="px-4 py-3 text-center font-semibold">Chances/90</th>
                        <th className="px-4 py-3 text-center font-semibold">Goal %</th>
                        <th className="px-4 py-3 font-semibold">Value</th>
                        <th className="px-4 py-3 text-right font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPlayers.map((player) => (
                        <tr key={player.id} className="group border-b border-border/50 transition-colors hover:bg-white/5">
                          <td className="px-4 py-3">
                            <Link href={`/players/${player.id}`} className="flex w-fit items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded bg-accent text-sm font-bold">
                                {player.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-white transition-colors group-hover:text-primary">{player.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {player.position} • {player.club} • {player.gender === "womens" ? "Women’s" : "Men’s"}
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-center font-medium text-white">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded border border-border bg-background">
                              {player.overall}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center font-medium text-primary">0.{(player.stats.shooting / 10).toFixed(0)}</td>
                          <td className="px-4 py-3 text-center font-medium text-blue-400">{player.chancesCreatedP90.toFixed(1)}</td>
                          <td className="px-4 py-3 text-center font-medium text-white">{player.goalPercentile}%</td>
                          <td className="px-4 py-3 text-muted-foreground">
                            <div>{player.value}</div>
                            <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                              {player.contractMonthsLeft}m left
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                                <Star className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-white/10 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
