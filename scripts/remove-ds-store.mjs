import { readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const ignoredDirs = new Set([".git"]);
let removedCount = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        await walk(absolutePath);
      }
      continue;
    }

    if (entry.name === ".DS_Store") {
      await rm(absolutePath, { force: true });
      removedCount += 1;
    }
  }
}

await walk(repoRoot);

console.log(`Removed ${removedCount} .DS_Store file(s).`);
