import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a context-window joke. The agent kept the deadline in
// context, but the context itself is gone, so the deadline went with it.
const LINE = "I had the deadline in context. Unfortunately, the context is gone.";

// The harness sets MAKEFUN_OUTPUT_DIR; default to /output for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Write the line exactly, with no trailing newline, so entry.txt stays
// a single 66-byte line inside the 1 to 200 character gate.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
