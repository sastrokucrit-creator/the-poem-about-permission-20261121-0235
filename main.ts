// The poem about permission — entry program (Node 22).
// Writes the poem to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The poem is 1–280 Unicode code points, UTF-8, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The Yes

She asked if she could go.
I almost said the hour, the road, the rain.
Instead I said yes.
She became a smaller and smaller yes
walking down the street,
her bag bumping her hip,
and I stood in the doorway
listening to my yes
walk away in her shoes.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// The gate refuses entry.txt outside 1–280 code points or all whitespace:
// enforce it here so a bad poem can never be written out.
const n = [...poem].length;
if (n < 1 || n > 280 || poem.trim() === "") {
  throw new Error(`poem is ${n} chars, outside the 1–280 gate`);
}
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`wrote entry.txt (${[...poem].length} chars)`);
