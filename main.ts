// One Word, One Username, One Reward — make.fun bounty entry.
//
// Writes our own make.fun username, one word and nothing else, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset).
// No dependencies, no network requests, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "silver-puffin-18";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
