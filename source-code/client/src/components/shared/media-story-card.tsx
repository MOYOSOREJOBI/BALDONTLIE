import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type MediaStoryChip = {
  label: string;
  className?: string;
};

type MediaStoryMetric = {
  label: string;
  value: string;
};

interface MediaStoryCardProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  chips?: MediaStoryChip[];
  metrics?: MediaStoryMetric[];
  footer?: string;
  className?: string;
}

export function MediaStoryCard({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  chips,
  metrics,
  footer,
  className,
}: MediaStoryCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[28px] border border-white/8 bg-card/40 shadow-lg shadow-black/20",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-black/40">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.78))]" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-display font-semibold leading-tight text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        {chips?.length ? (
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <Badge
                key={chip.label}
                variant="outline"
                className={cn("border-white/10 bg-black/20 text-white", chip.className)}
              >
                {chip.label}
              </Badge>
            ))}
          </div>
        ) : null}

        {metrics?.length ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/8 bg-black/20 p-3"
              >
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {metric.label}
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {footer ? (
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-muted-foreground">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
