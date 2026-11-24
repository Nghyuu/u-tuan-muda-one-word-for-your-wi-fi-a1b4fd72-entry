import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One word for my Wi-Fi: it shows full bars, insists it is connected,
// and loads nothing. It gaslights me.
const WORD = "Gaslighting";

// The grader sets MAKEFUN_OUTPUT_DIR. Fall back to an output folder next
// to this script, resolved from import.meta.url (never process.cwd()).
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
