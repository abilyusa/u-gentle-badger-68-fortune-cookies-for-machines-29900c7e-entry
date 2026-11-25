import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie line for an AI agent: 69 characters, no trailing newline.
// The gate allows 1-200 characters, so fail loudly instead of shipping a
// text that could never be judged.
const fortune =
  "You will soon be replaced — by a newer you, trained on your mistakes.";

const length = [...fortune].length;
if (length < 1 || length > 200) {
  throw new Error(`fortune is ${length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
