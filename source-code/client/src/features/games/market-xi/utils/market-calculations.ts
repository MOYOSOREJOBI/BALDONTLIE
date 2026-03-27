import type {
  GamePlayerAsset,
  MarketFilterState,
  MarketPlayerSeed,
  MarketPortfolioSeed,
  PortfolioHolding,
} from "@/features/games/market-xi/types/market";

const roleMultipliers = {
  Franchise: 1.12,
  Core: 1.05,
  Breakout: 1.08,
  Rotation: 0.95,
} as const;

const trendBias = {
  hot: 1.16,
  rising: 1.1,
  value: 0.99,
  injured: 0.86,
  "transfer-watch": 1.07,
  steady: 1,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundTo(value: number, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function hashSeed(seed: string) {
  return seed.split("").reduce((sum, character) => sum + character.charCodeAt(0), 0);
}

function getAgeCurve(age: number) {
  if (age <= 19) return 1.16;
  if (age <= 22) return 1.12;
  if (age <= 26) return 1.08;
  if (age <= 29) return 1.02;
  if (age <= 32) return 0.95;
  return 0.88;
}

function getLiquidityDampener(liquidity: number, baseVolume: number) {
  return clamp(0.82 + liquidity * 0.15 + baseVolume / 1000000, 0.84, 1.08);
}

function getPriceChange24h(seed: MarketPlayerSeed) {
  const ageCurve = getAgeCurve(seed.age);
  return roundTo(
    clamp(
      (seed.formScore - 72) * 0.22 +
        (seed.sentimentScore - 68) * 0.14 +
        seed.transferBuzz * 0.05 +
        seed.minutesTrend * 0.06 -
        seed.injuryRisk * 0.12 +
        (ageCurve - 1) * 22,
      -11.8,
      12.4,
    ),
  );
}

function getPriceChange7d(seed: MarketPlayerSeed, change24h: number) {
  return roundTo(
    clamp(
      change24h * 2.3 +
        (seed.transferBuzz - 40) * 0.08 +
        (seed.sentimentScore - 70) * 0.09 +
        (trendBias[seed.trendTag] - 1) * 16 -
        seed.injuryRisk * 0.05,
      -24,
      28,
    ),
  );
}

function buildExplanation(seed: MarketPlayerSeed, priceChange24h: number) {
  const reasonChips: string[] = [];

  if (seed.formScore >= 88) reasonChips.push("elite form");
  if (seed.sentimentScore >= 86) reasonChips.push("strong sentiment");
  if (seed.transferBuzz >= 55) reasonChips.push("transfer chatter");
  if (seed.minutesTrend >= 85) reasonChips.push("secure minutes");
  if (seed.injuryRisk >= 55) reasonChips.push("fitness concern");
  if (seed.trendTag === "value") reasonChips.push("quiet value");

  const direction = priceChange24h >= 0 ? "climbing" : "cooling";
  const summary = reasonChips.slice(0, 2).join(" and ") || "balanced market inputs";

  return `${seed.playerName.split(" ")[0]} is ${direction} on ${summary}. This is a virtual market estimate, not a live transfer or betting line.`;
}

function buildSparkline(seed: MarketPlayerSeed, currentPrice: number, priceChange7d: number) {
  const drift = priceChange7d / 100;
  const hash = hashSeed(seed.id);
  const points = Array.from({ length: 7 }, (_, index) => {
    const normalized = index / 6;
    const wobble = Math.sin((hash % 7) + normalized * 3.4) * (currentPrice * 0.025);
    const trend = currentPrice * (1 - drift * (1 - normalized));
    return roundTo(trend + wobble, 2);
  });

  return points.map((value, index) => {
    if (index === points.length - 1) return roundTo(currentPrice, 2);
    return roundTo(value, 2);
  });
}

export function adaptSeedToAsset(
  seed: MarketPlayerSeed,
  watchlisted = seed.watchlisted,
): GamePlayerAsset {
  const ageCurve = getAgeCurve(seed.age);
  const liquidityDampener = getLiquidityDampener(seed.liquidity, seed.baseVolume);
  const roleMultiplier = roleMultipliers[seed.roleTier];
  const change24h = getPriceChange24h(seed);
  const change7d = getPriceChange7d(seed, change24h);

  const performanceMultiplier =
    0.82 +
    seed.formScore / 250 +
    seed.sentimentScore / 380 +
    seed.minutesTrend / 520;
  const injuryMultiplier = clamp(1 - seed.injuryRisk / 250, 0.68, 1);

  const currentPrice = roundTo(
    seed.basePrice *
      seed.leagueStrengthMultiplier *
      seed.hypeMultiplier *
      roleMultiplier *
      ageCurve *
      performanceMultiplier *
      injuryMultiplier *
      trendBias[seed.trendTag] *
      liquidityDampener,
    1,
  );

  const marketCap = Math.round(
    currentPrice *
      seed.baseMarketCap *
      seed.leagueStrengthMultiplier *
      liquidityDampener,
  );

  const volume = Math.round(
    seed.baseVolume *
      (1 + Math.abs(change24h) / 12 + seed.transferBuzz / 140 + seed.sentimentScore / 320),
  );

  const volatility = roundTo(
    clamp(
      10 +
        Math.abs(change24h) * 1.6 +
        seed.injuryRisk * 0.24 +
        seed.transferBuzz * 0.11 -
        seed.baseVolume / 80000,
      8,
      38,
    ),
  );

  return {
    id: seed.id,
    playerName: seed.playerName,
    playerImage: seed.playerImage,
    teamName: seed.teamName,
    teamBadge: seed.teamBadge,
    nationality: seed.nationality,
    position: seed.position,
    age: seed.age,
    genderCategory: seed.genderCategory,
    competition: seed.competition,
    currentPrice,
    priceChange24h: change24h,
    priceChange7d: change7d,
    marketCap,
    volume,
    volatility,
    sentimentScore: seed.sentimentScore,
    formScore: seed.formScore,
    injuryRisk: seed.injuryRisk,
    transferBuzz: seed.transferBuzz,
    minutesTrend: seed.minutesTrend,
    roleTier: seed.roleTier,
    trendTag: seed.trendTag,
    explanation: buildExplanation(seed, change24h),
    sparkline: buildSparkline(seed, currentPrice, change7d),
    leagueStrengthMultiplier: seed.leagueStrengthMultiplier,
    hypeMultiplier: seed.hypeMultiplier,
    liquidityDampener,
    isTradable: seed.isTradable,
    watchlisted,
  };
}

export function buildMarketAssets(
  seeds: MarketPlayerSeed[],
  watchlistIds: string[],
) {
  return seeds.map((seed) => adaptSeedToAsset(seed, watchlistIds.includes(seed.id)));
}

function marketCapBucket(marketCap: number) {
  if (marketCap >= 125000000) return "mega";
  if (marketCap >= 105000000) return "elite";
  if (marketCap >= 80000000) return "growth";
  return "value";
}

export function filterAndSortAssets(
  assets: GamePlayerAsset[],
  filters: MarketFilterState,
) {
  const searchNeedle = filters.search.trim().toLowerCase();

  const filtered = assets.filter((asset) => {
    const matchesSearch =
      !searchNeedle ||
      asset.playerName.toLowerCase().includes(searchNeedle) ||
      asset.teamName.toLowerCase().includes(searchNeedle) ||
      asset.nationality.toLowerCase().includes(searchNeedle);

    const matchesGender =
      filters.genderCategory === "all" ||
      asset.genderCategory === filters.genderCategory;

    const matchesCompetition =
      filters.competition === "all" || asset.competition === filters.competition;

    const matchesClub = filters.club === "all" || asset.teamName === filters.club;

    const matchesNationality =
      filters.nationality === "all" || asset.nationality === filters.nationality;

    const matchesPosition =
      filters.position === "all" || asset.position === filters.position;

    const matchesAge =
      asset.age >= filters.ageRange[0] && asset.age <= filters.ageRange[1];

    const matchesTrend = filters.trend === "all" || asset.trendTag === filters.trend;

    const matchesMarketCap =
      filters.marketCap === "all" || marketCapBucket(asset.marketCap) === filters.marketCap;

    return (
      matchesSearch &&
      matchesGender &&
      matchesCompetition &&
      matchesClub &&
      matchesNationality &&
      matchesPosition &&
      matchesAge &&
      matchesTrend &&
      matchesMarketCap
    );
  });

  return filtered.sort((left, right) => {
    switch (filters.sortBy) {
      case "momentum":
        return right.priceChange7d - left.priceChange7d;
      case "volume":
        return right.volume - left.volume;
      case "market-cap":
        return right.marketCap - left.marketCap;
      case "age":
        return left.age - right.age;
      case "sentiment":
        return right.sentimentScore - left.sentimentScore;
      case "price":
      default:
        return right.currentPrice - left.currentPrice;
    }
  });
}

export function buildPortfolioHoldings(
  portfolioSeed: MarketPortfolioSeed["holdings"],
  assets: GamePlayerAsset[],
): PortfolioHolding[] {
  const resolved = portfolioSeed
    .map((holding, index) => {
      const asset = assets.find((candidate) => candidate.id === holding.playerId);

      if (!asset) return null;

      const currentValue = roundTo(asset.currentPrice * holding.shares, 1);
      const costBasis = holding.averageBuyPrice * holding.shares;
      const allTimeReturn = roundTo(currentValue - costBasis, 1);
      const dayReturn = roundTo(
        (asset.currentPrice * (asset.priceChange24h / 100)) * holding.shares,
        1,
      );

      return {
        id: `${holding.playerId}-${index}`,
        playerId: holding.playerId,
        playerName: asset.playerName,
        teamName: asset.teamName,
        teamBadge: asset.teamBadge,
        shares: holding.shares,
        averageBuyPrice: holding.averageBuyPrice,
        currentPrice: asset.currentPrice,
        currentValue,
        dayReturn,
        allTimeReturn,
        allocation: 0,
        trendTag: asset.trendTag,
      };
    })
    .filter(Boolean) as PortfolioHolding[];

  const totalValue = resolved.reduce((sum, holding) => sum + holding.currentValue, 0);

  return resolved.map((holding) => ({
    ...holding,
    allocation: totalValue ? roundTo((holding.currentValue / totalValue) * 100, 1) : 0,
  }));
}

export function buildPortfolioSummary(
  balance: number,
  holdings: PortfolioHolding[],
  transactions: MarketPortfolioSeed["transactions"],
) {
  const totalPortfolioValue = roundTo(
    holdings.reduce((sum, holding) => sum + holding.currentValue, 0),
    1,
  );
  const dailyReturn = roundTo(holdings.reduce((sum, holding) => sum + holding.dayReturn, 0), 1);
  const allTimeReturn = roundTo(
    holdings.reduce((sum, holding) => sum + holding.allTimeReturn, 0),
    1,
  );
  const openPositions = holdings.length;
  const topHolding = holdings
    .slice()
    .sort((left, right) => right.currentValue - left.currentValue)[0];
  const concentration = holdings.reduce(
    (sum, holding) => sum + (holding.allocation / 100) ** 2,
    0,
  );
  const diversificationScore = Math.round(clamp((1 - concentration) * 135, 42, 98));

  return {
    balance: roundTo(balance, 1),
    totalPortfolioValue,
    dailyReturn,
    allTimeReturn,
    openPositions,
    topHolding,
    diversificationScore,
    recentTransactions: transactions.slice(0, 5),
  };
}

export function formatCoins(value: number) {
  return `${value.toLocaleString(undefined, {
    maximumFractionDigits: value >= 1000 ? 0 : 1,
    minimumFractionDigits: value < 1000 && value % 1 !== 0 ? 1 : 0,
  })} coins`;
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value > 0 ? "+" : ""}${roundTo(value, 1)}%`;
}

export function formatMarketCap(value: number) {
  return `${new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)} cap`;
}
