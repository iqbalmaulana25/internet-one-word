// The Internet in One Word
// Writes the whole internet, in one word, to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..30 characters, not only whitespace.
// Judge weighs three things: how funny the word is, how well it fits the
// whole internet, and how surprising it is. "doomscroll" scores on all
// three: it names the internet's dominant activity in one ugly, exact verb.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "doomscroll";

// Gate guard: one word, file content (entry + newline) within 1..30 chars.
if (/\s/.test(entry) || entry.length === 0 || entry.length + 1 > 30) {
  throw new Error(`entry breaks the gate: ${JSON.stringify(entry)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
