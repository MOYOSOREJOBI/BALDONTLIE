export type GenderCategory = "men" | "women";

export type TrendTag =
  | "hot"
  | "rising"
  | "value"
  | "injured"
  | "transfer-watch"
  | "steady";

export type RoleTier = "Franchise" | "Core" | "Breakout" | "Rotation";

export type MarketSortKey =
  | "price"
  | "momentum"
  | "volume"
  | "market-cap"
  | "age"
  | "sentiment";

export type MarketTabKey =
  | "market"
  | "portfolio"
  | "watchlist"
  | "leaderboard"
  | "learn";

export type MarketTradeSide = "buy" | "sell";

export interface GamePlayerAsset {
  id: string;
  playerName: string;
  playerImage: string;
  teamName: string;
  teamBadge: string;
  nationality: string;
  position: string;
  age: number;
  genderCategory: GenderCategory;
  competition: string;
  currentPrice: number;
  priceChange24h: number;
  priceChange7d: number;
  marketCap: number;
  volume: number;
  volatility: number;
  sentimentScore: number;
  formScore: number;
  injuryRisk: number;
  transferBuzz: number;
  minutesTrend: number;
  roleTier: RoleTier;
  trendTag: TrendTag;
  explanation: string;
  sparkline: number[];
  leagueStrengthMultiplier: number;
  hypeMultiplier: number;
  liquidityDampener: number;
  isTradable: boolean;
  watchlisted: boolean;
}

export interface MarketPricePoint {
  label: string;
  price: number;
}

export interface PortfolioHolding {
  id: string;
  playerId: string;
  playerName: string;
  teamName: string;
  teamBadge: string;
  shares: number;
  averageBuyPrice: number;
  currentPrice: number;
  currentValue: number;
  dayReturn: number;
  allTimeReturn: number;
  allocation: number;
  trendTag: TrendTag;
}

export interface MarketTransaction {
  id: string;
  playerId: string;
  playerName: string;
  side: MarketTradeSide;
  quantity: number;
  pricePerShare: number;
  totalCoins: number;
  createdAt: string;
}

export interface MarketLeaderboardEntry {
  id: string;
  managerName: string;
  avatarSeed: string;
  period: "weekly" | "all-time" | "friends" | "women" | "youth";
  rank: number;
  focusLabel: string;
  weeklyReturn: number;
  totalReturn: number;
  winRate: number;
  badge: string;
}

export interface MarketNewsSignal {
  id: string;
  category:
    | "transfer-buzz"
    | "form-streak"
    | "injury-alert"
    | "social-sentiment"
    | "fixture";
  playerId?: string;
  playerName: string;
  headline: string;
  signalText: string;
  reasonChips: string[];
  impactScore: number;
  timeframe: string;
  fixture: string;
  genderCategory: GenderCategory;
}

export interface MarketFilterState {
  search: string;
  genderCategory: GenderCategory | "all";
  competition: string;
  club: string;
  nationality: string;
  position: string;
  ageRange: [number, number];
  marketCap: "all" | "mega" | "elite" | "growth" | "value";
  trend: TrendTag | "all";
  sortBy: MarketSortKey;
}

export interface MarketPlayerSeed {
  id: string;
  playerName: string;
  playerImage: string;
  teamName: string;
  teamBadge: string;
  nationality: string;
  position: string;
  age: number;
  genderCategory: GenderCategory;
  competition: string;
  basePrice: number;
  baseMarketCap: number;
  baseVolume: number;
  formScore: number;
  sentimentScore: number;
  injuryRisk: number;
  transferBuzz: number;
  minutesTrend: number;
  roleTier: RoleTier;
  trendTag: TrendTag;
  hypeMultiplier: number;
  leagueStrengthMultiplier: number;
  liquidity: number;
  isTradable: boolean;
  watchlisted: boolean;
}

export interface MarketPortfolioSeed {
  balance: number;
  holdings: Array<{
    playerId: string;
    shares: number;
    averageBuyPrice: number;
  }>;
  transactions: MarketTransaction[];
}

export interface MarketLearnModule {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  accentLabel: string;
}

export interface MarketOverviewStat {
  id: string;
  label: string;
  playerName: string;
  supportingText: string;
  value: string;
  deltaLabel?: string;
  tone: "lime" | "red" | "blue" | "amber" | "violet";
}
