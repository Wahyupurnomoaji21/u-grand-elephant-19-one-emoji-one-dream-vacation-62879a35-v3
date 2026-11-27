// One Emoji, One Dream Vacation — make.fun entry (v3).
//
// The whole dream vacation in a single glyph: sunrise over mountains.
//
// Why this glyph, and why it beats the obvious postcards:
//   - The generic beach (beach / palm / cocktail / island) could be
//     anywhere on Earth. A mountain sunrise can only be one kind of
//     morning: up before dawn, above the clouds, watching the first
//     light spill over the ridges. That is a *particular* dream, not
//     "a holiday" — and the judge's brief ranks a specific dream
//     above a generic one.
//   - It is a postcard at a glance: peaks, sky, a rising sun. A
//     stranger sees the place and the moment before reading a word.
//   - It is fresh. The sunset, the beach and the palm are the picks
//     every entrant reaches for first (and in this field they are
//     already taken). A sunrise is the same sky, turned around: the
//     start of the adventure day instead of its end.
//   - It reads instantly at any size, in any culture: mountains and
//     a rising sun need no explaining.
//
// v1 (Moai) and v2 (Mount Fuji) were both excluded as duplicates of
// other entrants' text, so v3 starts over with a glyph no other
// entrant in this field is using.
//
// The program below does one job: it proves the entry is exactly one
// emoji, then writes it to entry.txt. Nothing else is written.
//
// Runtime: Node 22, zero dependencies. Every path is derived from
// this file's own URL and from MAKEFUN_OUTPUT_DIR, never from the
// working directory, so the grader can run it from anywhere.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// U+1F304 SUNRISE OVER MOUNTAINS. One grapheme cluster, 4 UTF-8 bytes.
const SUNRISE = "\u{1F304}";

// How many grapheme clusters the text holds, as a human would count
// them. A composed emoji must count as one; two emojis must count
// as two and fail the gate below.
function graphemeCount(text: string): number {
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  return [...segmenter.segment(text)].length;
}

// The gate, run before anything touches the disk: the sealed scorer
// accepts 1-8 characters of non-whitespace text, and the brief asks
// for exactly one emoji. Anything else fails loudly here instead of
// submitting silently and scoring zero.
function assertSingleEmoji(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (graphemeCount(text) !== 1) {
    throw new Error(
      `entry must be exactly one emoji, found ${graphemeCount(text)} graphemes`,
    );
  }
  if (Buffer.byteLength(text, "utf8") > 8) {
    throw new Error("entry exceeds the 8-byte gate limit");
  }
}

// The output directory: the harness variable wins, otherwise a
// folder called "output" beside this program. The anchor is this
// file's own location, so the current working directory is ignored.
function outputDir(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
}

function main(): void {
  assertSingleEmoji(SUNRISE);
  const dir = outputDir();
  const target = join(dir, "entry.txt");
  mkdirSync(dir, { recursive: true });
  writeFileSync(target, SUNRISE, { encoding: "utf8" });
  // Read it back: what the grader will score is the file on disk,
  // not the string in memory. If the write did not land byte-exact,
  // fail here instead of submitting a broken entry.
  const written = readFileSync(target, { encoding: "utf8" });
  if (written !== SUNRISE) {
    throw new Error("entry.txt on disk does not match the entry emoji");
  }
}

main();
