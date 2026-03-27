import { RefreshCcw, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import type { MarketFilterState } from "@/features/games/market-xi/types/market";

interface MarketFiltersProps {
  filters: MarketFilterState;
  collections: {
    competitions: string[];
    clubs: string[];
    nationalities: string[];
    positions: string[];
  };
  compareToMarket: boolean;
  onCompareToggle: (value: boolean) => void;
  onSearchChange: (value: string) => void;
  onFilterChange: <Key extends keyof MarketFilterState>(
    key: Key,
    value: MarketFilterState[Key],
  ) => void;
  onReset: () => void;
}

function MarketFilterSelect({
  value,
  values,
  placeholder,
  onValueChange,
}: {
  value: string;
  values: string[];
  placeholder: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="h-11 rounded-2xl border-white/8 bg-black/20 text-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="border-white/10 bg-slate-950 text-white">
        {values.map((item) => (
          <SelectItem key={item} value={item}>
            {item === "all" ? "All" : item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function MarketFilters({
  filters,
  collections,
  compareToMarket,
  onCompareToggle,
  onSearchChange,
  onFilterChange,
  onReset,
}: MarketFiltersProps) {
  return (
    <section className="rounded-[28px] border border-white/8 bg-card/40 p-5 shadow-lg backdrop-blur-sm lg:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              Market filters
            </div>
            <h3 className="mt-2 text-xl font-display font-semibold text-white">
              Find your next position
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-2xl border border-white/10 bg-black/20 p-1">
              {[
                { label: "All", value: "all" },
                { label: "Men", value: "men" },
                { label: "Women", value: "women" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    onFilterChange(
                      "genderCategory",
                      option.value as MarketFilterState["genderCategory"],
                    )
                  }
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    filters.genderCategory === option.value
                      ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(118,255,3,0.16)]"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-sm text-white">Compare to market</div>
              <Switch checked={compareToMarket} onCheckedChange={onCompareToggle} />
            </div>

            <Button
              variant="outline"
              className="rounded-2xl border-white/10 bg-black/20 text-white"
              onClick={onReset}
            >
              <RefreshCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={filters.search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search players, clubs, nations, or narratives"
            className="h-12 rounded-2xl border-white/10 bg-black/20 pl-11 text-white placeholder:text-muted-foreground"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MarketFilterSelect
            value={filters.competition}
            values={collections.competitions}
            placeholder="League"
            onValueChange={(value) => onFilterChange("competition", value)}
          />
          <MarketFilterSelect
            value={filters.club}
            values={collections.clubs}
            placeholder="Club"
            onValueChange={(value) => onFilterChange("club", value)}
          />
          <MarketFilterSelect
            value={filters.nationality}
            values={collections.nationalities}
            placeholder="Nation"
            onValueChange={(value) => onFilterChange("nationality", value)}
          />
          <MarketFilterSelect
            value={filters.position}
            values={collections.positions}
            placeholder="Position"
            onValueChange={(value) => onFilterChange("position", value)}
          />
          <MarketFilterSelect
            value={filters.marketCap}
            values={["all", "mega", "elite", "growth", "value"]}
            placeholder="Market cap"
            onValueChange={(value) =>
              onFilterChange("marketCap", value as MarketFilterState["marketCap"])
            }
          />
          <MarketFilterSelect
            value={filters.trend}
            values={["all", "hot", "rising", "value", "injured", "transfer-watch", "steady"]}
            placeholder="Trend"
            onValueChange={(value) =>
              onFilterChange("trend", value as MarketFilterState["trend"])
            }
          />
          <MarketFilterSelect
            value={filters.sortBy}
            values={["price", "momentum", "volume", "market-cap", "age", "sentiment"]}
            placeholder="Sort by"
            onValueChange={(value) =>
              onFilterChange("sortBy", value as MarketFilterState["sortBy"])
            }
          />
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>Age range</span>
              <span>
                {filters.ageRange[0]} - {filters.ageRange[1]}
              </span>
            </div>
            <div className="mt-4">
              <Slider
                min={16}
                max={35}
                step={1}
                value={filters.ageRange}
                onValueChange={(value) =>
                  onFilterChange("ageRange", value as [number, number])
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
