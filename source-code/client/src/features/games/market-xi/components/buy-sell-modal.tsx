import { useEffect, useState } from "react";
import { Coins, Minus, Plus, ShieldCheck, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { GamePlayerAsset, MarketTradeSide } from "@/features/games/market-xi/types/market";

interface BuySellModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trade: { asset: GamePlayerAsset; side: MarketTradeSide } | null;
  balance: number;
  availableShares: number;
  onConfirm: (quantity: number) => boolean;
}

function TradeContent({
  trade,
  balance,
  availableShares,
  onConfirm,
}: Omit<BuySellModalProps, "open" | "onOpenChange">) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [trade?.asset.id, trade?.side]);

  if (!trade) return null;

  const maxQuantity =
    trade.side === "buy"
      ? Math.max(Math.floor(balance / trade.asset.currentPrice), 0)
      : availableShares;
  const total = Number((trade.asset.currentPrice * quantity).toFixed(1));
  const disabled =
    quantity <= 0 ||
    maxQuantity === 0 ||
    (trade.side === "buy" ? total > balance : quantity > availableShares);

  return (
    <div className="space-y-5 px-4 pb-5 sm:px-0 sm:pb-0">
      <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {trade.side === "buy" ? "Build position" : "Trim position"}
            </div>
            <div className="mt-2 text-xl font-display font-semibold text-white">
              {trade.asset.playerName}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {trade.asset.teamName} · {trade.asset.position}
            </div>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right">
            <div className="text-xs uppercase tracking-[0.16em] text-primary/80">
              Price
            </div>
            <div className="mt-1 font-display text-xl font-bold text-white">
              {trade.asset.currentPrice.toFixed(1)} coins
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-white">Quick quantity</div>
        <div className="flex flex-wrap gap-2">
          {[1, 5, 10, 25].map((value) => (
            <Button
              key={value}
              type="button"
              variant="outline"
              className="rounded-2xl border-white/10 bg-black/20 text-white"
              onClick={() => setQuantity(Math.min(Math.max(value, 1), Math.max(maxQuantity, 1)))}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white transition-colors hover:border-primary/20 hover:text-primary disabled:opacity-40"
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          disabled={quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Quantity
          </div>
          <div className="mt-1 text-3xl font-display font-bold text-white">{quantity}</div>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white transition-colors hover:border-primary/20 hover:text-primary disabled:opacity-40"
          onClick={() =>
            setQuantity((current) =>
              Math.min(current + 1, Math.max(maxQuantity, 1)),
            )
          }
          disabled={quantity >= Math.max(maxQuantity, 1)}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/20 p-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Simulation total</span>
          <span className="font-semibold text-white">{total.toLocaleString()} coins</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            {trade.side === "buy" ? "Available balance" : "Available shares"}
          </span>
          <span className="font-semibold text-white">
            {trade.side === "buy"
              ? `${balance.toLocaleString()} coins`
              : `${availableShares} shares`}
          </span>
        </div>
      </div>

      <div className="rounded-3xl border border-primary/15 bg-primary/6 p-4 text-sm leading-6 text-muted-foreground">
        <div className="mb-2 flex items-center gap-2 text-primary">
          <ShieldCheck className="w-4 h-4" />
          Virtual-only simulation
        </div>
        Market XI uses virtual coins only. This is not betting, not gambling, and
        not real-money trading.
      </div>

      <Button
        className="w-full rounded-2xl py-6 text-base"
        onClick={() => onConfirm(quantity)}
        disabled={disabled}
      >
        <ShoppingCart className="w-4 h-4" />
        {trade.side === "buy" ? "Confirm Buy" : "Confirm Sell"}
      </Button>
    </div>
  );
}

export function BuySellModal({
  open,
  onOpenChange,
  trade,
  balance,
  availableShares,
  onConfirm,
}: BuySellModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="border-white/10 bg-slate-950 text-white">
          <DrawerHeader>
            <DrawerTitle>
              {trade?.side === "buy" ? "Buy shares" : "Sell shares"}
            </DrawerTitle>
            <DrawerDescription className="text-muted-foreground">
              Manage your Market XI position with virtual coins.
            </DrawerDescription>
          </DrawerHeader>
          <TradeContent
            trade={trade}
            balance={balance}
            availableShares={availableShares}
            onConfirm={onConfirm}
          />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-[28px] border-white/10 bg-slate-950 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-display">
            <Coins className="w-5 h-5 text-primary" />
            {trade?.side === "buy" ? "Buy Market XI shares" : "Sell Market XI shares"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Use virtual coins to manage your simulation portfolio.
          </DialogDescription>
        </DialogHeader>
        <TradeContent
          trade={trade}
          balance={balance}
          availableShares={availableShares}
          onConfirm={onConfirm}
        />
      </DialogContent>
    </Dialog>
  );
}
