import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

function sharedManualChunks(id: string) {
  if (!id.includes("node_modules")) {
    return undefined;
  }

  if (
    id.includes("@radix-ui") ||
    id.includes("cmdk") ||
    id.includes("vaul")
  ) {
    return "ui-primitives";
  }

  if (
    id.includes("recharts") ||
    id.includes("framer-motion") ||
    id.includes("embla-carousel-react")
  ) {
    return "visuals";
  }

  if (
    id.includes("react-hook-form") ||
    id.includes("@hookform/resolvers") ||
    id.includes("react-day-picker") ||
    id.includes("input-otp")
  ) {
    return "forms";
  }

  if (
    id.includes("@tanstack/react-query") ||
    id.includes("wouter") ||
    id.includes("i18next") ||
    id.includes("react-i18next") ||
    id.includes("date-fns")
  ) {
    return "app-runtime";
  }

  return "vendor";
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src")
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: sharedManualChunks
      }
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true
  }
});
