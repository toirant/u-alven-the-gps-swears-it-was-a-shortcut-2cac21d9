// The GPS Swears It Was a Shortcut — entry program.
//
// Writes the GPS's one-line excuse for taking the wrong road to
// /output/entry.txt, then validates the output against the bounty gate:
// UTF-8 text, 1 to 200 characters, a single line, not whitespace-only.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY =
  "In my defense, the lake was clearly a road on my 2009 map — and you did say you wanted a shortcut, not a dry one.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry must be 1 to 200 characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No control characters (other than the line breaks already rejected):
  // the gate wants clean plain text, and a stray control byte would
  // fail the UTF-8 text check or read badly aloud.
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error(
        `entry contains a control character: U+${ch
          .charCodeAt(0)
          .toString(16)
          .padStart(4, "0")}`,
      );
    }
  }
  // UTF-8 round-trip: the bytes we write must decode back to this text.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry does not round-trip as UTF-8");
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
validate(ENTRY);
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Re-read and re-validate what was actually written, so a write
// failure or encoding surprise cannot slip through silently.
const written = readFileSync(OUTPUT_PATH, "utf8");
validate(written);
if (written !== ENTRY) {
  throw new Error("written entry does not match the intended text");
}

console.log(`Wrote ${written.length} characters to ${OUTPUT_PATH}`);
