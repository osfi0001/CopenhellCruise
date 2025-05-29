// scripts/copy-headers.js
import { copyFile } from "fs/promises";
import { join } from "path";

const src = join("public", "_headers");
const dest = join("dist", "_headers");

try {
  await copyFile(src, dest);
  console.log("✅ Copied _headers to dist/");
} catch (err) {
  console.error("❌ Failed to copy _headers:", err.message);
}
