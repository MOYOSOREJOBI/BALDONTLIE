import { z } from "zod";

export const surfaceStatusSchema = z.enum(["launch", "beta", "demo", "later", "hide"]);
export type SurfaceStatus = z.infer<typeof surfaceStatusSchema>;

export const surfaceGroupSchema = z.enum(["core", "analysis", "simulation", "labs"]);
export type SurfaceGroup = z.infer<typeof surfaceGroupSchema>;

export const dataSourceStateSchema = z.enum([
  "static-mock",
  "structured-mock",
  "api-contract-ready",
  "live-provider",
]);
export type DataSourceState = z.infer<typeof dataSourceStateSchema>;

export const backendStageSchema = z.enum([
  "none",
  "contract-ready",
  "endpoint-ready",
  "storage-pending",
  "live",
]);
export type BackendStage = z.infer<typeof backendStageSchema>;

export const productSurfaceSchema = z.object({
  path: z.string(),
  title: z.string(),
  group: surfaceGroupSchema,
  status: surfaceStatusSchema,
  navVisible: z.boolean(),
  summary: z.string(),
  dataSource: dataSourceStateSchema,
  backendStage: backendStageSchema,
});
export type ProductSurface = z.infer<typeof productSurfaceSchema>;

export const surfaceGroupLabels: Record<SurfaceGroup, string> = {
  core: "Core",
  analysis: "Analysis",
  simulation: "Simulation",
  labs: "Labs",
};

export const productSurfaces: ProductSurface[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    group: "core",
    status: "launch",
    navVisible: true,
    summary: "Best current football operating dashboard shell.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/news",
    title: "Following Feed",
    group: "core",
    status: "beta",
    navVisible: true,
    summary: "Promising editorial feed shell that still needs truthful source wiring.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/players",
    title: "Player Explorer",
    group: "core",
    status: "launch",
    navVisible: true,
    summary: "Strong discovery surface and a sensible first API target.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/tables",
    title: "League Tables",
    group: "core",
    status: "launch",
    navVisible: true,
    summary: "Clean first truth-layer table surface once real data lands.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/transfers",
    title: "Transfers Lab",
    group: "analysis",
    status: "beta",
    navVisible: true,
    summary: "Valuable football desk surface, still mock-driven.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/rankings",
    title: "Rankings",
    group: "analysis",
    status: "beta",
    navVisible: true,
    summary: "Backend-ready once ranking logic and source attribution exist.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/storyline",
    title: "Match Storyline",
    group: "analysis",
    status: "beta",
    navVisible: true,
    summary: "Useful explainability layer for a future match center.",
    dataSource: "structured-mock",
    backendStage: "endpoint-ready",
  },
  {
    path: "/games/director-mode",
    title: "Director Mode",
    group: "simulation",
    status: "beta",
    navVisible: false,
    summary: "Squad-building workspace inside the Games section. Formation planner, transfer target board, and budget model.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/games/market-xi",
    title: "Market XI",
    group: "simulation",
    status: "beta",
    navVisible: true,
    summary: "Strong simulation surface that must stay clearly non-live.",
    dataSource: "structured-mock",
    backendStage: "endpoint-ready",
  },
  {
    path: "/live-sim",
    title: "Match Flow Demo",
    group: "simulation",
    status: "demo",
    navVisible: true,
    summary: "Useful live-layout prototype, but not truthful as a live product yet.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/predictions",
    title: "Scenario Outlooks",
    group: "simulation",
    status: "demo",
    navVisible: true,
    summary: "Static scenario board that should not be treated as production intelligence.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/scout-workspace",
    title: "Scout Workspace Demo",
    group: "labs",
    status: "demo",
    navVisible: true,
    summary: "Exploratory scout workspace that needs tighter backend scope.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/match-rooms",
    title: "Match Rooms Demo",
    group: "labs",
    status: "demo",
    navVisible: true,
    summary: "Community concept shell that still needs moderation and real utility.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/players/:id",
    title: "Player Profile",
    group: "core",
    status: "launch",
    navVisible: false,
    summary: "Launch-grade target once real player data is wired.",
    dataSource: "structured-mock",
    backendStage: "contract-ready",
  },
  {
    path: "/compare/players",
    title: "Player Compare",
    group: "analysis",
    status: "later",
    navVisible: false,
    summary: "Valuable later surface once core profiles are real.",
    dataSource: "structured-mock",
    backendStage: "storage-pending",
  },
  {
    path: "/compare/teams",
    title: "Team Compare",
    group: "analysis",
    status: "later",
    navVisible: false,
    summary: "Team compare should follow real team pages.",
    dataSource: "structured-mock",
    backendStage: "storage-pending",
  },
  {
    path: "/team-fit",
    title: "Team Fit",
    group: "analysis",
    status: "later",
    navVisible: false,
    summary: "Good football intelligence feature, but not first backend priority.",
    dataSource: "structured-mock",
    backendStage: "storage-pending",
  },
  {
    path: "/games",
    title: "Games Hub",
    group: "simulation",
    status: "later",
    navVisible: false,
    summary: "Hub can return once more than one game feels ready.",
    dataSource: "structured-mock",
    backendStage: "none",
  },
  {
    path: "/games/prediction-arena",
    title: "Prediction Arena Preview",
    group: "simulation",
    status: "hide",
    navVisible: false,
    summary: "Preview-only surface that should stay out of the primary shell.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/games/fantasy-drafts",
    title: "Fantasy Drafts Preview",
    group: "simulation",
    status: "hide",
    navVisible: false,
    summary: "Preview-only surface that should stay out of the primary shell.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/games/challenges",
    title: "Challenges Preview",
    group: "simulation",
    status: "hide",
    navVisible: false,
    summary: "Preview-only surface that should stay out of the primary shell.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/odds",
    title: "Market Signals Lab",
    group: "analysis",
    status: "hide",
    navVisible: false,
    summary: "Still too close to betting framing for a truthful-first shell.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/social",
    title: "Community Demo",
    group: "labs",
    status: "hide",
    navVisible: false,
    summary: "Community shell should stay out of nav until moderation is real.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/fan-sentiment",
    title: "Sentiment Demo",
    group: "labs",
    status: "hide",
    navVisible: false,
    summary: "Too easy to overclaim without a clear source and model story.",
    dataSource: "static-mock",
    backendStage: "none",
  },
  {
    path: "/my-player",
    title: "My Shortlist",
    group: "labs",
    status: "later",
    navVisible: false,
    summary: "Worth keeping for later personalization, not current backend priority.",
    dataSource: "static-mock",
    backendStage: "storage-pending",
  },
  {
    path: "/technical-overlay",
    title: "Technical Overlay",
    group: "labs",
    status: "later",
    navVisible: false,
    summary: "Internal-style overlay that should stay outside the primary shell.",
    dataSource: "static-mock",
    backendStage: "none",
  },
];

export const visibleShellSurfaces = productSurfaces.filter((surface) => surface.navVisible);

export const readinessWorkstreamStatusSchema = z.enum(["ready", "in-progress", "planned", "blocked"]);
export type ReadinessWorkstreamStatus = z.infer<typeof readinessWorkstreamStatusSchema>;

export const readinessWorkstreamSchema = z.object({
  key: z.string(),
  label: z.string(),
  status: readinessWorkstreamStatusSchema,
  detail: z.string(),
});
export type ReadinessWorkstream = z.infer<typeof readinessWorkstreamSchema>;

export const systemReadinessResponseSchema = z.object({
  service: z.literal("baldontlie-app"),
  environment: z.string(),
  generatedAt: z.string(),
  summary: z.object({
    totalSurfaces: z.number(),
    navVisibleSurfaces: z.number(),
    launch: z.number(),
    beta: z.number(),
    demo: z.number(),
    hiddenOrLater: z.number(),
  }),
  stack: z.object({
    frontend: z.string(),
    api: z.string(),
    persistence: z.string(),
    data: z.string(),
  }),
  workstreams: z.array(readinessWorkstreamSchema),
  risks: z.array(z.string()),
  nextSteps: z.array(z.string()),
  routes: z.array(productSurfaceSchema),
});
export type SystemReadinessResponse = z.infer<typeof systemReadinessResponseSchema>;

export function getShellNavigationGroups() {
  return (Object.keys(surfaceGroupLabels) as SurfaceGroup[]).map((group) => ({
    id: group,
    label: surfaceGroupLabels[group],
    items: visibleShellSurfaces.filter((surface) => surface.group === group),
  }));
}

export function findSurfaceByPath(pathname: string) {
  const orderedSurfaces = [...productSurfaces].sort((left, right) => right.path.length - left.path.length);

  return orderedSurfaces.find((surface) => {
    if (surface.path.includes(":")) {
      const basePath = surface.path.split("/:")[0];
      return pathname === basePath || pathname.startsWith(`${basePath}/`);
    }

    if (surface.path === "/") {
      return pathname === "/";
    }

    return pathname === surface.path || pathname.startsWith(`${surface.path}/`);
  });
}

export function buildSystemReadiness(environment: string): SystemReadinessResponse {
  const counts = productSurfaces.reduce(
    (accumulator, surface) => {
      accumulator[surface.status] += 1;
      return accumulator;
    },
    {
      launch: 0,
      beta: 0,
      demo: 0,
      later: 0,
      hide: 0,
    },
  );

  return systemReadinessResponseSchema.parse({
    service: "baldontlie-app",
    environment,
    generatedAt: new Date().toISOString(),
    summary: {
      totalSurfaces: productSurfaces.length,
      navVisibleSurfaces: visibleShellSurfaces.length,
      launch: counts.launch,
      beta: counts.beta,
      demo: counts.demo,
      hiddenOrLater: counts.hide + counts.later,
    },
    stack: {
      frontend: "React + Vite shell is live locally and ready for review.",
      api: "Express now exposes health and readiness metadata endpoints.",
      persistence: "Shared schema is still user-only and needs football domain tables next.",
      data: "Most screens still run on structured mock data, not live providers.",
    },
    workstreams: [
      {
        key: "route-truth",
        label: "Route truth",
        status: "ready",
        detail: "The main shell is being aligned to launch, beta, and demo route status instead of showing every prototype equally.",
      },
      {
        key: "system-endpoints",
        label: "System endpoints",
        status: "ready",
        detail: "Health and readiness endpoints give the frontend a truthful backend handshake point.",
      },
      {
        key: "domain-contracts",
        label: "Domain contracts",
        status: "in-progress",
        detail: "Core route metadata now has a shared contract, but player, club, match, and search models still need expansion.",
      },
      {
        key: "feature-apis",
        label: "Feature APIs",
        status: "planned",
        detail: "Players, teams, matches, tables, and search should be the first production API slices.",
      },
      {
        key: "persistence-auth",
        label: "Persistence + auth",
        status: "planned",
        detail: "Supabase/Postgres/Auth wiring is still ahead, not already in place.",
      },
    ],
    risks: [
      "Several visible surfaces still run on structured mock content and need clear labeling.",
      "Shared schema coverage is still too small for the football product surface.",
      "The shell was previously over-exposing demo routes, which weakened product truth.",
    ],
    nextSteps: [
      "Add shared domain contracts for players, clubs, matches, tables, and search filters.",
      "Create `/api/v1` feature endpoints behind the new contract layer before wiring provider data.",
      "Move launch-critical pages onto typed query hooks one surface at a time.",
    ],
    routes: productSurfaces,
  });
}
