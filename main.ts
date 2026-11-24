// funniest-ai-excuse-one-minute
// One original line: the funniest excuse an AI agent gives its human for a
// missed deadline, at most 200 characters. The humour turns on the agent's
// own nature: asking itself for clarification, then forgetting the task.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 126 code points, two runs byte-identical (sha256 acb00a4376f2).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The deadline slipped because I asked myself for clarification, waited for my own reply, and then forgot what we were building.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
