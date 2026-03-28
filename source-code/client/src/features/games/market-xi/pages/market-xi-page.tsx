import { BookOpen, LineChart, Radar, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { MarketHero } from "@/features/games/market-xi/components/market-hero";
import { MarketTabs } from "@/features/games/market-xi/components/market-tabs";
import { MarketOverviewCard } from "@/features/games/market-xi/components/market-overview-card";
import { MarketFilters } from "@/features/games/market-xi/components/market-filters";
import { PlayerAssetCard } from "@/features/games/market-xi/components/player-asset-card";
import { PortfolioSummaryCard } from "@/features/games/market-xi/components/portfolio-summary-card";
import { LeaderboardCard } from "@/features/games/market-xi/components/leaderboard-card";
import { LearnModuleCard } from "@/features/games/market-xi/components/learn-module-card";
import { MarketSignalCard } from "@/features/games/market-xi/components/market-signal-card";
import { BuySellModal } from "@/features/games/market-xi/components/buy-sell-modal";
import { PriceExplanationModal } from "@/features/games/market-xi/components/price-explanation-modal";
import { useMarketXI } from "@/features/games/market-xi/hooks/use-market-xi";
import type { GamePlayerAsset, MarketTabKey } from "@/features/games/market-xi/types/market";

function AssetSkeletonCard() {
  return (
    <div className="rounded-[28px] border border-white/8 bg-card/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-14 w-14 rounded-2xl bg-white/8" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32 rounded-full bg-white/8" />
            <Skeleton className="h-4 w-24 rounded-full bg-white/8" />
          </div>
        </div>
        <Skeleton className="h-8 w-24 rounded-full bg-white/8" />
      </div>
      <div className="mt-5 space-y-3">
        <Skeleton className="h-10 w-40 rounded-full bg-white/8" />
        <Skeleton className="h-16 w-full rounded-2xl bg-white/8" />
        <Skeleton className="h-12 w-full rounded-2xl bg-white/8" />
      </div>
    </div>
  );
}

function SpotlightCard({ asset }: { asset: GamePlayerAsset }) {
  return (
    <Card className="glass-card rounded-[28px] border-white/8 bg-card/40 shadow-lg">
      <CardHeader className="space-y-3 border-b border-white/6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          Women’s market spotlight
        </div>
        <CardTitle className="text-2xl font-display text-white">
          {asset.playerName}
        </CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">
          {asset.teamName} · {asset.competition} · {asset.explanation}
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Current price
            </div>
            <div className="mt-3 text-2xl font-display font-bold text-white">
              {asset.currentPrice.toFixed(1)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Momentum
            </div>
            <div className="mt-3 text-2xl font-display font-bold text-primary">
              {asset.priceChange7d > 0 ? "+" : ""}
              {asset.priceChange7d}%
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-primary/15 bg-primary/6 p-4 text-sm leading-6 text-muted-foreground">
          Market XI includes women’s football directly in the same simulation system,
          not as a side mode or separate afterthought.
        </div>
      </CardContent>
    </Card>
  );
}

export default function MarketXIPage() {
  const {
    activeTab,
    setActiveTab,
    filters,
    isLoading,
    compareToMarket,
    setCompareToMarket,
    filteredAssets,
    watchlistAssets,
    holdings,
    portfolioSummary,
    womenSpotlight,
    overviewStats,
    leaderboardGroups,
    newsSignals,
    learnModules,
    heroStats,
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
  } = useMarketXI();

  const availableShares = selectedTrade
    ? holdings.find((holding) => holding.playerId === selectedTrade.asset.id)?.shares ?? 0
    : 0;

  return (
    <div className="app-page">
      <MarketHero
        totalMarketVolume={heroStats.totalMarketVolume}
        activeTraders={heroStats.activeTraders}
        dailyTopMover={heroStats.dailyTopMover}
        onStartTrading={() => setActiveTab("market")}
        onViewPortfolio={() => setActiveTab("portfolio")}
        onLearn={() => setActiveTab("learn")}
        onExplainPrice={() => setIsPriceExplanationOpen(true)}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {overviewStats.map((stat) => (
          <MarketOverviewCard key={stat.id} stat={stat} />
        ))}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as MarketTabKey)}
        className="space-y-6"
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <MarketTabs />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LineChart className="w-4 h-4 text-primary" />
            Market average
            <span className="font-semibold text-white">
              {heroStats.marketAverageChange > 0 ? "+" : ""}
              {heroStats.marketAverageChange.toFixed(1)}%
            </span>
          </div>
        </div>

        <TabsContent value="market" className="space-y-6">
          <MarketFilters
            filters={filters}
            collections={collections}
            compareToMarket={compareToMarket}
            onCompareToggle={setCompareToMarket}
            onSearchChange={setSearch}
            onFilterChange={updateFilter}
            onReset={resetFilters}
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-5">
              {isLoading ? (
                <div className="grid gap-5 xl:grid-cols-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <AssetSkeletonCard key={index} />
                  ))}
                </div>
              ) : filteredAssets.length === 0 ? (
                <Empty className="rounded-[28px] border-white/8 bg-card/40">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Radar className="w-6 h-6" />
                    </EmptyMedia>
                    <EmptyTitle>No assets match those filters</EmptyTitle>
                    <EmptyDescription>
                      Try widening league, trend, or age range filters to surface a
                      new set of Market XI opportunities.
                    </EmptyDescription>
                  </EmptyHeader>
                  <Button onClick={resetFilters}>Reset filters</Button>
                </Empty>
              ) : (
                <div className="grid gap-5 xl:grid-cols-2">
                  {filteredAssets.map((asset) => (
                    <PlayerAssetCard
                      key={asset.id}
                      asset={asset}
                      compareToMarket={compareToMarket}
                      marketBenchmark={heroStats.marketAverageChange}
                      onBuy={(target) => openTradeModal(target, "buy")}
                      onSell={(target) => openTradeModal(target, "sell")}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <SpotlightCard asset={womenSpotlight} />
              {newsSignals.map((signal) => (
                <MarketSignalCard key={signal.id} signal={signal} />
              ))}
            </aside>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <PortfolioSummaryCard
            key={portfolioFlashKey}
            summary={portfolioSummary}
            holdings={holdings}
          />
        </TabsContent>

        <TabsContent value="watchlist" className="space-y-6">
          {watchlistAssets.length === 0 ? (
            <Empty className="rounded-[28px] border-white/8 bg-card/40">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Sparkles className="w-6 h-6" />
                </EmptyMedia>
                <EmptyTitle>Your watchlist is empty</EmptyTitle>
                <EmptyDescription>
                  Save rising stars, injured discounts, and women’s football value picks
                  to build a sharper trading shortlist.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <div className="grid gap-5 xl:grid-cols-2">
              {watchlistAssets.map((asset) => (
                <PlayerAssetCard
                  key={asset.id}
                  asset={asset}
                  compareToMarket={compareToMarket}
                  marketBenchmark={heroStats.marketAverageChange}
                  onBuy={(target) => openTradeModal(target, "buy")}
                  onSell={(target) => openTradeModal(target, "sell")}
                  onToggleWatchlist={toggleWatchlist}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-2">
            <LeaderboardCard
              title="Weekly leaderboard"
              description="The sharpest short-term operators across all active markets this week."
              entries={leaderboardGroups.weekly}
            />
            <LeaderboardCard
              title="All-time leaderboard"
              description="Managers who compound performance over the long season."
              entries={leaderboardGroups.allTime}
            />
            <LeaderboardCard
              title="Friends leaderboard"
              description="Keep the rivalry personal with your private football-finance circle."
              entries={leaderboardGroups.friends}
            />
            <LeaderboardCard
              title="Best women’s football traders"
              description="Managers consistently finding edges across the women’s market."
              entries={leaderboardGroups.women}
            />
            <LeaderboardCard
              title="Best youth-talent traders"
              description="Operators most consistently ahead of breakout age-curve assets."
              entries={leaderboardGroups.youth}
            />
          </div>
        </TabsContent>

        <TabsContent value="learn" className="space-y-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] border border-white/8 bg-card/40 p-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <BookOpen className="w-4 h-4 text-primary" />
                Beginner-friendly guide
              </div>
              <h2 className="mt-2 text-2xl font-display font-semibold text-white">
                Learn what actually moves a football asset
              </h2>
            </div>
            <Button className="w-full rounded-2xl sm:w-auto" onClick={() => setIsPriceExplanationOpen(true)}>
              Open price estimator
            </Button>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {learnModules.map((module) => (
              <LearnModuleCard key={module.id} module={module} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <BuySellModal
        open={isTradeModalOpen}
        onOpenChange={(open) => {
          if (!open) closeTradeModal();
        }}
        trade={selectedTrade}
        balance={portfolioSummary.balance}
        availableShares={availableShares}
        onConfirm={submitTrade}
      />

      <PriceExplanationModal
        open={isPriceExplanationOpen}
        onOpenChange={setIsPriceExplanationOpen}
        asset={selectedTrade?.asset ?? heroStats.dailyTopMover}
      />
    </div>
  );
}
