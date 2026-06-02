import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const repository = process.env.GITHUB_REPOSITORY;
const token = process.env.TRAFFIC_TOKEN || process.env.GITHUB_TOKEN;
const outputPath = process.env.TRAFFIC_HISTORY_PATH || "data/github-traffic-history.json";

if (!repository) {
  throw new Error("GITHUB_REPOSITORY is required, for example ludovicjoly/bourneville-quest.");
}

if (!token) {
  throw new Error("A GitHub token is required. Set TRAFFIC_TOKEN or GITHUB_TOKEN.");
}

const [owner, repo] = repository.split("/");

async function githubApi(path) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}${path}`, {
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28",
      "user-agent": "bourneville-quest-traffic-archiver"
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${path} failed with ${response.status}: ${body}`);
  }

  return response.json();
}

async function readHistory() {
  try {
    return JSON.parse(await readFile(outputPath, "utf8"));
  } catch {
    return {
      source: "GitHub Traffic API",
      repository,
      days: {},
      snapshots: []
    };
  }
}

function sortObjectByKey(object) {
  return Object.fromEntries(Object.entries(object).sort(([left], [right]) => left.localeCompare(right)));
}

const [views, paths, referrers] = await Promise.all([
  githubApi("/traffic/views?per=day"),
  githubApi("/traffic/popular/paths"),
  githubApi("/traffic/popular/referrers")
]);

const history = await readHistory();
history.source = "GitHub Traffic API";
history.repository = repository;
history.updatedAt = new Date().toISOString();
history.totalsLast14Days = {
  views: views.count,
  uniqueVisitors: views.uniques
};
history.days ||= {};

for (const item of views.views || []) {
  const day = item.timestamp.slice(0, 10);
  history.days[day] = {
    ...(history.days[day] || {}),
    views: item.count,
    uniqueVisitors: item.uniques,
    timestamp: item.timestamp
  };
}

history.days = sortObjectByKey(history.days);
history.snapshots ||= [];
history.snapshots.push({
  capturedAt: history.updatedAt,
  topPaths: paths,
  topReferrers: referrers
});
history.snapshots = history.snapshots.slice(-30);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(history, null, 2)}\n`);

console.log(`Archived ${Object.keys(history.days).length} traffic days to ${outputPath}.`);
