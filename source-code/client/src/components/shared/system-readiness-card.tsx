import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Layers3,
  Server,
} from "lucide-react";
import {
  systemReadinessResponseSchema,
  type ReadinessWorkstreamStatus,
  type SystemReadinessResponse,
} from "@shared/product-status";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

async function fetchSystemReadiness(): Promise<SystemReadinessResponse> {
  const response = await fetch("/api/system/readiness", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`System readiness request failed: ${response.status}`);
  }

  return systemReadinessResponseSchema.parse(await response.json());
}

function getWorkstreamStatusClassName(status: ReadinessWorkstreamStatus) {
  switch (status) {
    case "ready":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";
    case "in-progress":
      return "border-blue-500/20 bg-blue-500/10 text-blue-200";
    case "planned":
      return "border-amber-500/20 bg-amber-500/10 text-amber-200";
    case "blocked":
      return "border-red-500/20 bg-red-500/10 text-red-300";
    default:
      return "border-white/10 bg-black/20 text-muted-foreground";
  }
}

export function SystemReadinessCard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/system/readiness"],
    queryFn: fetchSystemReadiness,
    staleTime: Infinity,
  });

  return (
    <Card className="rounded-[32px] border border-white/8 bg-card/40 shadow-lg shadow-black/20">
      <CardHeader className="space-y-4 border-b border-white/6 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-primary/20 bg-primary/10 text-primary">
            Backend handoff
          </Badge>
          <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-200">
            Real API metadata
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Server className="h-4 w-4 text-primary" />
            System readiness
          </div>
          <CardTitle className="text-xl font-display text-white">
            The dashboard now reads a truthful backend status layer.
          </CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            This panel comes from <code>/api/system/readiness</code>. It is a real Express endpoint,
            but it only reports readiness metadata for now, not live football data.
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-5">
        {isLoading ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-20 animate-pulse rounded-2xl border border-white/8 bg-black/20"
              />
            ))}
          </div>
        ) : null}

        {isError ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4" />
              Readiness endpoint unavailable
            </div>
            <p className="mt-2 text-red-100/80">
              The shell still runs, but the backend metadata handshake needs attention before deeper API work starts.
            </p>
          </div>
        ) : null}

        {data ? (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Visible shell
                </div>
                <div className="mt-2 text-2xl font-display font-bold text-white">
                  {data.summary.navVisibleSurfaces}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Launch {data.summary.launch} · Beta {data.summary.beta} · Demo {data.summary.demo}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Hidden or later
                </div>
                <div className="mt-2 text-2xl font-display font-bold text-white">
                  {data.summary.hiddenOrLater}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Surfaces deliberately kept out of the primary shell while truth catches up.
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Layers3 className="h-4 w-4 text-primary" />
                Current backend reality
              </div>
              <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                <div>{data.stack.frontend}</div>
                <div>{data.stack.api}</div>
                <div>{data.stack.persistence}</div>
                <div>{data.stack.data}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Workstreams
              </div>
              <div className="space-y-3">
                {data.workstreams.map((workstream) => (
                  <div
                    key={workstream.key}
                    className="rounded-2xl border border-white/8 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-white">{workstream.label}</div>
                        <div className="mt-1 text-sm leading-6 text-muted-foreground">
                          {workstream.detail}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0 text-[9px] font-semibold uppercase tracking-[0.14em]",
                          getWorkstreamStatusClassName(workstream.status),
                        )}
                      >
                        {workstream.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Clock3 className="h-4 w-4 text-primary" />
                Next backend moves
              </div>
              {data.nextSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-muted-foreground"
                >
                  {step}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
