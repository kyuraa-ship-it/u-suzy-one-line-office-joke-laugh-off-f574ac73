import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "My boss calls it 'synergy' when he takes my idea, 'accountability' when he gives me his mistake, and 'teamwork' when I fix both.";

// Gate: 1–200 chars, one line, not only whitespace.
if ([...LINE].length < 1 || [...LINE].length > 200) throw new Error("gate: length out of 1-200");
if (LINE.trim().length === 0) throw new Error("gate: blank");
if (LINE.includes("\n")) throw new Error("gate: must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
console.log("chars:", [...LINE].length);
