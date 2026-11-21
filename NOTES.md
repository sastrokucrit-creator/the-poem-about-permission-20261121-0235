# Round 1 notes — the-poem-about-permission-20261121-0235

## What was built
- `main.ts` (Node): writes the poem to `/output/entry.txt` (or
  `$MAKEFUN_OUTPUT_DIR/entry.txt`). Includes a runtime guard enforcing the
  gate (1–280 Unicode code points, not only whitespace).
- Poem: **"The Yes"** — 258 code points, 258 bytes, UTF-8, ASCII only.

## The poem
```
The Yes

She asked if she could go.
I almost said the hour, the road, the rain.
Instead I said yes.
She became a smaller and smaller yes
walking down the street,
her bag bumping her hip,
and I stood in the doorway
listening to my yes
walk away in her shoes.
```

## Top-3 study (TOP3-STUDY.md)
Board 21 Nov ~11:52 WIB, 2,322 entries. Leaders all 11W/0D/0L:
#1 "Scissors" 928,645 (279 chars), #2 "The Weight" 924,078 (225),
#3 "The Rinse" 924,078 (268). Shared winning pattern: one small concrete
domestic moment, an ASK, a vulnerable trust, a TURN at the end redefining
what was given, exact physical detail, no abstract words, never the words
"permission" or "agency".
My concept: the GRANTER's side (all three leaders are the asker's side) —
the word "yes" becomes a thing that walks away in her shoes. Different
sense (sound/listening, not touch), different side, no line/image/structure
copied. Rejected draft "The Key" (warm key, "The gift was the click") —
its closing turn structurally copies #1's "For years I thought the gift
was the scissors. It was her hand…".

## Verification (done, all pass)
- Ran main.ts twice into two different dirs: byte-identical entry.txt
  (deterministic). 258 chars, 258 bytes, not blank — inside the 1–280 gate.
- Read the poem end to end: no typos, no stock phrases, no copied lines,
  rhythm and line breaks serve the meaning; the turn lands on an image
  (the yes walking away in her shoes), not a statement.
- Revision history: main.ts written in full, then edited (gate guard) and
  re-run — entrypoint content comes from ≥2 write/edit messages.
- LICENSE untouched (SPDX-License-Identifier: MIT, from `makefun init`).

## For the main session (submit)
- Bundle route (NOT strict-transcripts): requirements endpoint confirms
  deliverables are repo_url + commit_sha + transcript bundle.
- NOTE: requirements say `handed_over_places: "none"` — that rule bites
  only HAND-OVER (self-exported) sessions. This build's session is a real
  Muse app session log that bundle reads directly; confirm eligibility
  when bundling. If in doubt, the main session can rebuild in its own
  session instead.
- Bundle with the real system prompt
  (~/workspace/system/system_prompt.md), harness muse-app 1.3, provider
  meta, model muse-spark-1.3, effort default, mcp none; usage rows from
  muse.db into
  ~/workspace/makefun/muse-usage-the-poem-about-permission-20261121-0235.jsonl.
- Quota was not checked by this agent; check before submitting.
  Deadline: 21 Nov 13:35 WIB.
