import { cp, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const sourceClientRoot = path.join(repoRoot, "source-code", "client");
const demoRoot = path.join(repoRoot, "frontend-demo");

const syncPairs = [
  {
    from: path.join(sourceClientRoot, "src"),
    to: path.join(demoRoot, "src"),
  },
  {
    from: path.join(sourceClientRoot, "public"),
    to: path.join(demoRoot, "public"),
  },
];

function shouldCopy(sourcePath) {
  return path.basename(sourcePath) !== ".DS_Store";
}

for (const pair of syncPairs) {
  await rm(pair.to, { recursive: true, force: true });
  await cp(pair.from, pair.to, {
    recursive: true,
    filter: shouldCopy,
  });
}

await cp(
  path.join(sourceClientRoot, "index.html"),
  path.join(demoRoot, "index.html"),
);

console.log("Synced frontend-demo from source-code/client.");
