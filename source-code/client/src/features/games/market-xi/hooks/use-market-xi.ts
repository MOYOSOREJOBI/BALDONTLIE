import {
  startTransition,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { useToast } from "@/hooks/use-toast";
import {
  marketLeaderboardEntries,
  marketLearnModules,
  marketNewsSignals,
  marketPlayerSeeds,
  marketPortfolioSeed,
} from "@/features/games/market-xi/data/mock-market-xi";
import {
  buildMarketAssets,
  buildPortfolioHoldings,
  buildPortfolioSummary,
  filterAndSortAssets,
  formatCompactNumber,
} from "@/features/games/market-xi/utils/market-calculations";
import type {
  GamePlayerAsset,
  MarketFilterState,
  MarketTabKey,
  MarketTradeSide,
  MarketTransaction,
} from "@/features/games/market-xi/types/market";

const initialFilters: MarketFilterState = {
  search: "",
  genderCategory: "all",
  competition: "all",
  club: "all",
  nationality: "all",
  position: "all",
  ageRange: [16, 35],
  marketCap: "all",
  trend: "all",
  sortBy: "momentum",
};

export function useMarketXI() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<MarketTabKey>("market");
  const [filters, setFilters] = useState<MarketFilterState>(initialFilters);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlistIds, setWatchlistIds] = useState(
    marketPlayerSeeds.filter((seed) => seed.watchlisted).map((seed) => seed.id),
  );
  const [balance, setBalance] = useState(marketPortfolioSeed.balance);
  const [holdingsSeed, setHoldingsSeed] = useState(marketPortfolioSeed.holdings);
  const [transactions, setTransactions] = useState(marketPortfolioSeed.transactions);
  const [selectedTrade, setSelectedTrade] = useState<{
    asset: GamePlayerAsset;
    side: MarketTradeSide;
  } | null>(null);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [isPriceExplanationOpen, setIsPriceExplanationOpen] = useState(false);
  const [portfolioFlashKey, setPortfolioFlashKey] = useState(0);
  const [compareToMarket, setCompareToMarket] = useState(false);
  const deferredSearch = useDeferredValue(filters.search);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 750);
    return () => window.clearTimeout(timeout);
  }, []);

  // TODO: replace local seed hydration with backend API responses when Market XI endpoints exist.
  const assets = buildMarketAssets(marketPlayerSeeds, watchlistIds);
  const resolvedFilters = { ...filters, search: deferredSearch };
  const filteredAssets = filterAndSortAssets(assets, resolvedFilters);
  const holdings = buildPortfolioHoldings(holdingsSeed, assets);
  const portfolioSummary = buildPortfolioSummary(balance, holdings, transactions);
  const watchlistAssets = assets.filter((asset) => watchlistIds.includes(asset.id));
  const heroTopMover = assets
    .slice()
    .sort((left, right) => right.priceChange24h - left.priceChange24h)[0];
  const marketAverageChange =
    assets.reduce((sum, asset) => sum + asset.priceChange24h, 0) / assets.length;

  const overviewStats = [
    (() => {
      const asset = assets.slice().sort((a, b) => b.priceChange24h - a.priceChange24h)[0];
      return {
        id: "top-gainer",
        label: "Top Gainer",
        playerName: asset.playerName,
        supportingText: `${asset.teamName} · ${asset.position}`,
        value: `${asset.priceChange24h > 0 ? "+" : ""}${asset.priceChange24h}%`,
        deltaLabel: "24h momentum",
        tone: "lime" as const,
      };
    })(),
    (() => {
      const asset = assets.slice().sort((a, b) => a.priceChange24h - b.priceChange24h)[0];
      return {
        id: "biggest-drop",
        label: "Biggest Drop",
        playerName: asset.playerName,
        supportingText: `${asset.teamName} · ${asset.position}`,
        value: `${asset.priceChange24h}%`,
        deltaLabel: "injury / minutes risk",
        tone: "red" as const,
      };
    })(),
    (() => {
      const asset = assets.slice().sort((a, b) => b.volume - a.volume)[0];
      return {
        id: "most-traded",
        label: "Most Traded",
        playerName: asset.playerName,
        supportingText: `${asset.teamName} · ${formatCompactNumber(asset.volume)} volume`,
        value: `${Math.round(asset.currentPrice)} coins`,
        deltaLabel: "liquidity leader",
        tone: "blue" as const,
      };
    })(),
    (() => {
      const asset = assets
        .filter((entry) => entry.transferBuzz >= 50 || entry.sentimentScore >= 88)
        .sort((a, b) => b.transferBuzz + b.sentimentScore - (a.transferBuzz + a.sentimentScore))[0];
      return {
        id: "most-hyped",
        label: "Most Hyped",
        playerName: asset.playerName,
        supportingText: `${asset.transferBuzz}/100 transfer buzz`,
        value: `${asset.sentimentScore}/100 sentiment`,
        deltaLabel: "crowd demand",
        tone: "amber" as const,
      };
    })(),
    (() => {
      const asset = assets
        .filter((entry) => entry.trendTag === "value")
        .sort((a, b) => b.formScore - a.formScore)[0];
      return {
        id: "undervalued-pick",
        label: "Undervalued Pick",
        playerName: asset.playerName,
        supportingText: asset.explanation,
        value: `${Math.round(asset.currentPrice)} coins`,
        deltaLabel: "quiet upside",
        tone: "violet" as const,
      };
    })(),
    (() => {
      const asset = assets
        .filter((entry) => entry.genderCategory === "women")
        .sort((a, b) => b.priceChange7d - a.priceChange7d)[0];
      return {
        id: "womens-spotlight",
        label: "Women's Market Spotlight",
        playerName: asset.playerName,
        supportingText: `${asset.competition} · ${asset.teamName}`,
        value: `${asset.priceChange7d > 0 ? "+" : ""}${asset.priceChange7d}%`,
        deltaLabel: "7d leader",
        tone: "blue" as const,
      };
    })(),
  ];

  const womenSpotlight = assets
    .filter((asset) => asset.genderCategory === "women")
    .sort((left, right) => right.currentPrice - left.currentPrice)[0];

  const leaderboardGroups = {
    weekly: marketLeaderboardEntries.filter((entry) => entry.period === "weekly"),
    allTime: marketLeaderboardEntries.filter((entry) => entry.period === "all-time"),
    friends: marketLeaderboardEntries.filter((entry) => entry.period === "friends"),
    women: marketLeaderboardEntries.filter((entry) => entry.period === "women"),
    youth: marketLeaderboardEntries.filter((entry) => entry.period === "youth"),
  };

  const collections = {
    competitions: ["all", ...Array.from(new Set(assets.map((asset) => asset.competition)))],
    clubs: ["all", ...Array.from(new Set(assets.map((asset) => asset.teamName)))],
    nationalities: ["all", ...Array.from(new Set(assets.map((asset) => asset.nationality)))],
    positions: ["all", ...Array.from(new Set(assets.map((asset) => asset.position)))],
  };

  function updateFilter<Key extends keyof MarketFilterState>(
    key: Key,
    value: MarketFilterState[Key],
  ) {
    startTransition(() => {
      setFilters((current) => ({ ...current, [key]: value }));
    });
  }

  function resetFilters() {
    setFilters(initialFilters);
  }

  function setSearch(search: string) {
    updateFilter("search", search);
  }

  function toggleWatchlist(asset: GamePlayerAsset) {
    const isWatchlisted = watchlistIds.includes(asset.id);

    startTransition(() => {
      setWatchlistIds((current) =>
        isWatchlisted
          ? current.filter((id) => id !== asset.id)
          : [...current, asset.id],
      );
    });

    toast({
      title: isWatchlisted ? "Removed from watchlist" : "Added to watchlist",
      description: `${asset.playerName} is now ${isWatchlisted ? "out of" : "on"} your Market XI watchlist.`,
    });
  }

  function openTradeModal(asset: GamePlayerAsset, side: MarketTradeSide) {
    setSelectedTrade({ asset, side });
    setIsTradeModalOpen(true);
  }

  function closeTradeModal() {
    setIsTradeModalOpen(false);
    setSelectedTrade(null);
  }

  function submitTrade(quantity: number) {
    if (!selectedTrade || quantity <= 0) return false;

    const totalCoins = Number((selectedTrade.asset.currentPrice * quantity).toFixed(1));
    const existingHolding = holdingsSeed.find(
      (holding) => holding.playerId === selectedTrade.asset.id,
    );

    if (selectedTrade.side === "buy" && totalCoins > balance) {
      toast({
        title: "Not enough coins",
        description: "Reduce quantity or free up balance before opening a new position.",
        variant: "destructive",
      });
      return false;
    }

    if (
      selectedTrade.side === "sell" &&
      (!existingHolding || existingHolding.shares < quantity)
    ) {
      toast({
        title: "Not enough shares",
        description: "You can only sell holdings that already exist in your simulation portfolio.",
        variant: "destructive",
      });
      return false;
    }

    // TODO: replace this optimistic local trade update with a backend mutation when trading endpoints land.
    if (selectedTrade.side === "buy") {
      setBalance((current) => Number((current - totalCoins).toFixed(1)));
      setHoldingsSeed((current) => {
        const target = current.find((holding) => holding.playerId === selectedTrade.asset.id);

        if (!target) {
          return [
            {
              playerId: selectedTrade.asset.id,
              shares: quantity,
              averageBuyPrice: selectedTrade.asset.currentPrice,
            },
            ...current,
          ];
        }

        const totalShares = target.shares + quantity;
        const weightedAverage =
          (target.averageBuyPrice * target.shares + totalCoins) / totalShares;

        return current.map((holding) =>
          holding.playerId === selectedTrade.asset.id
            ? {
                ...holding,
                shares: totalShares,
                averageBuyPrice: Number(weightedAverage.toFixed(1)),
              }
            : holding,
        );
      });
    } else {
      setBalance((current) => Number((current + totalCoins).toFixed(1)));
      setHoldingsSeed((current) =>
        current
          .map((holding) =>
            holding.playerId === selectedTrade.asset.id
              ? { ...holding, shares: holding.shares - quantity }
              : holding,
          )
          .filter((holding) => holding.shares > 0),
      );
    }

    const nextTransaction: MarketTransaction = {
      id: `txn-${Date.now()}`,
      playerId: selectedTrade.asset.id,
      playerName: selectedTrade.asset.playerName,
      side: selectedTrade.side,
      quantity,
      pricePerShare: selectedTrade.asset.currentPrice,
      totalCoins,
      createdAt: "Just now",
    };

    setTransactions((current) => [nextTransaction, ...current]);
    setPortfolioFlashKey((current) => current + 1);
    closeTradeModal();

    toast({
      title: selectedTrade.side === "buy" ? "Trade confirmed" : "Position trimmed",
      description: `${selectedTrade.side === "buy" ? "Bought" : "Sold"} ${quantity} share${quantity > 1 ? "s" : ""} of ${selectedTrade.asset.playerName} for ${totalCoins.toLocaleString()} virtual coins.`,
    });

    return true;
  }

  return {
    activeTab,
    setActiveTab,
    filters,
    isLoading,
    compareToMarket,
    setCompareToMarket,
    assets,
    filteredAssets,
    watchlistAssets,
    holdings,
    portfolioSummary,
    womenSpotlight,
    overviewStats,
    leaderboardGroups,
    newsSignals: marketNewsSignals,
    learnModules: marketLearnModules,
    heroStats: {
      totalMarketVolume: assets.reduce((sum, asset) => sum + asset.volume, 0),
      activeTraders: 18462,
      dailyTopMover: heroTopMover,
      marketAverageChange,
    },
    selectedTrade,
    isTradeModalOpen,
    openTradeModal,
    closeTradeModal,
    submitTrade,
    toggleWatchlist,
    updateFilter,
    setSearch,
    resetFilters,
    setIsPriceExplanationOpen,
    isPriceExplanationOpen,
    collections,
    portfolioFlashKey,
  };
}
