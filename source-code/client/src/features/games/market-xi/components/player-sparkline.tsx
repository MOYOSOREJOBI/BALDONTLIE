import { cn } from "@/lib/utils";

interface PlayerSparklineProps {
  points: number[];
  positive: boolean;
  compareToMarket?: boolean;
}

export function PlayerSparkline({
  points,
  positive,
  compareToMarket = false,
}: PlayerSparklineProps) {
  const width = 144;
  const height = 48;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const coordinates = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const fillCoordinates = `0,${height} ${coordinates} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn(
        "h-12 w-full overflow-visible",
        compareToMarket && "opacity-90",
      )}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sparkline-${positive ? "up" : "down"}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={positive ? "rgba(118,255,3,0.35)" : "rgba(248,113,113,0.32)"} />
          <stop offset="100%" stopColor="rgba(15,23,42,0)" />
        </linearGradient>
      </defs>
      <polygon
        points={fillCoordinates}
        fill={`url(#sparkline-${positive ? "up" : "down"})`}
      />
      <polyline
        points={coordinates}
        fill="none"
        stroke={positive ? "rgb(118,255,3)" : "rgb(248,113,113)"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
