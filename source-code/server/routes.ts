import type { Express } from "express";
import type { Server } from "http";
import { buildSystemReadiness, productSurfaces } from "@shared/product-status";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      service: "baldontlie-app",
      environment: process.env.NODE_ENV ?? "development",
      timestamp: new Date().toISOString(),
    });
  });

  app.get("/api/system/readiness", (_req, res) => {
    res.json(buildSystemReadiness(process.env.NODE_ENV ?? "development"));
  });

  app.get("/api/system/routes", (_req, res) => {
    res.json({
      routes: productSurfaces,
      generatedAt: new Date().toISOString(),
    });
  });

  return httpServer;
}
