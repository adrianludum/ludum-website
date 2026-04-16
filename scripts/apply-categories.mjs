/**
 * Reads the updated blog-categories.csv and applies category changes to MDX frontmatter.
 * Supports multi-category via pipe delimiter (e.g. "Crossy's Corner|Coaching")
 *
 * Usage: node scripts/apply-categories.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content", "blog");
const CSV_PATH = path.join(PROJECT_ROOT, "blog-categories.csv");

// ─── CSV Parser (handles quoted fields with commas) ─────────────────────────

function parseCSVLine(line) {
  const fields = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  const raw = fs.readFileSync(CSV_PATH, "utf-8");
  const lines = raw.split("\n").filter(l => l.trim().length > 0);

  // Skip header
  const header = parseCSVLine(lines[0]);
  console.log(`CSV headers: ${header.join(" | ")}`);

  const updates = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCSVLine(lines[i]);
    if (fields.length < 3) continue;

    const slug = fields[0].trim();
    if (!slug) continue;

    // Category is everything after the second comma (rejoin in case title had commas)
    // Actually with our parser, field[2] onwards is the category
    // But the CSV might have: slug, "title with, commas", category
    // Our parser handles this correctly - last field is category
    const category = fields[fields.length - 1].trim();
    if (!category || category === "category") continue; // skip header dupes

    updates.push({ slug, category });
  }

  console.log(`\nFound ${updates.length} category updates to apply.\n`);

  let changed = 0;
  let skipped = 0;
  let notFound = 0;
  const allCategories = new Set();

  for (const { slug, category } of updates) {
    const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);

    if (!fs.existsSync(mdxPath)) {
      console.log(`  SKIP ${slug} - MDX not found`);
      notFound++;
      continue;
    }

    // Parse categories (pipe-delimited)
    const cats = category.split("|").map(c => c.trim()).filter(Boolean);
    cats.forEach(c => allCategories.add(c));

    // Format for frontmatter
    let categoryValue;
    if (cats.length === 1) {
      categoryValue = `"${cats[0]}"`;
    } else {
      // YAML array format
      categoryValue = `\n${cats.map(c => `  - "${c}"`).join("\n")}`;
    }

    let content = fs.readFileSync(mdxPath, "utf-8");

    // Replace existing category line
    const categoryRegex = /^category:\s*"[^"]*"$/m;
    if (!categoryRegex.test(content)) {
      console.log(`  SKIP ${slug} - no category field found`);
      skipped++;
      continue;
    }

    const oldMatch = content.match(categoryRegex);
    const oldCategory = oldMatch[0];

    const newCategory = cats.length === 1
      ? `category: "${cats[0]}"`
      : `category:${categoryValue}`;

    if (oldCategory === newCategory) {
      skipped++;
      continue;
    }

    content = content.replace(categoryRegex, newCategory);
    fs.writeFileSync(mdxPath, content, "utf-8");
    console.log(`  ✓ ${slug}: ${oldCategory} → ${newCategory.replace(/\n\s*/g, " ")}`);
    changed++;
  }

  console.log("\n" + "═".repeat(50));
  console.log(`Changed: ${changed}`);
  console.log(`Unchanged: ${skipped}`);
  console.log(`Not found: ${notFound}`);
  console.log(`\nAll categories used:`);
  [...allCategories].sort().forEach(c => console.log(`  - ${c}`));
}

main();
