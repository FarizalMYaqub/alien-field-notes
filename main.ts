// Alien Field Notes: The Two Day Earth Review — entry program.
//
// Writes one original line — a review of planet Earth left by an alien
// tourist — to /output/entry.txt. The grader reads that file; it must be
// UTF-8 text of 1 to 200 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Came for the oceans, stayed for the glowing rectangles the locals worship instead of them. Four stars — the Wi-Fi up here is terrible.";

const text = REVIEW.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${text.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
