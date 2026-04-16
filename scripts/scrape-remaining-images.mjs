/**
 * Scrapes individual blog pages on ludum.com to find featured images
 * for blog posts that don't yet have one.
 *
 * Looks for images in: background-image styles, data attributes,
 * img tags, og:image meta tags, etc.
 *
 * Usage: node scripts/scrape-remaining-images.mjs
 */

import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content", "blog");
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images", "blog");

const RATE_LIMIT_MS = 500;

// ─── Helpers ────────────────────────────────────────────────────────────────

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "LudumMigrationBot/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location).then(resolve).catch(reject);
        }
        const chunks = [];
        res.on("data", (d) => chunks.push(d));
        res.on("end", () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString("utf-8") }));
      })
      .on("error", reject);
  });
}

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "LudumMigrationBot/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadBuffer(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        const chunks = [];
        res.on("data", (d) => chunks.push(d));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Image extraction from HTML ─────────────────────────────────────────────

function extractImageCandidates(html) {
  const candidates = new Set();

  // 1. og:image meta tag (most reliable)
  const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (ogMatch) candidates.add(ogMatch[1]);

  // 2. twitter:image meta tag
  const twMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i);
  if (twMatch) candidates.add(twMatch[1]);

  // 3. background-image in inline styles
  const bgMatches = html.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi);
  for (const m of bgMatches) candidates.add(m[1]);

  // 4. data-img-src, data-bg, data-src, data-lazy-src attributes
  const dataAttrMatches = html.matchAll(/data-(?:img-src|bg|src|lazy-src|background-image)=["']([^"']+)["']/gi);
  for (const m of dataAttrMatches) candidates.add(m[1]);

  // 5. img src tags with wp-content
  const imgMatches = html.matchAll(/<img[^>]*src=["']([^"']+wp-content\/uploads[^"']+)["'][^>]*>/gi);
  for (const m of imgMatches) candidates.add(m[1]);

  // 6. srcset entries
  const srcsetMatches = html.matchAll(/srcset=["']([^"']+)["']/gi);
  for (const m of srcsetMatches) {
    const entries = m[1].split(",").map(s => s.trim().split(/\s+/)[0]);
    entries.forEach(e => { if (e.includes("wp-content/uploads")) candidates.add(e); });
  }

  // Filter and rank
  const validImages = [...candidates]
    .map(url => url.startsWith("//") ? "https:" + url : url)
    .map(url => url.startsWith("/") ? `https://ludum.com${url}` : url)
    .filter(url => url.includes("wp-content/uploads"))
    .filter(url => !url.includes("logo"))
    .filter(url => !url.includes("icon"))
    .filter(url => !url.includes("favicon"))
    .filter(url => !url.includes("woocommerce"))
    .filter(url => !url.includes("Header")) // site header images
    .filter(url => !url.includes("contactheader"))
    .filter(url => /\.(jpg|jpeg|png|gif|webp)$/i.test(url));

  // Prioritize: og:image first, then larger images, then others
  // Remove size suffixes to get full-size versions
  return validImages.map(url =>
    url.replace(/-\d+x\d+(\.\w+)$/, "$1")
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  // Find all MDX files without featuredImage
  const mdxFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".mdx"));
  const missing = [];

  for (const file of mdxFiles) {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    if (content.includes("featuredImage:")) continue;

    // Extract originalUrl from frontmatter
    const urlMatch = content.match(/originalUrl:\s*"([^"]+)"/);
    if (!urlMatch) continue;

    missing.push({
      slug: file.replace(".mdx", ""),
      originalUrl: urlMatch[1],
      mdxPath: path.join(CONTENT_DIR, file),
    });
  }

  console.log(`Found ${missing.length} blog posts without featured images.\n`);

  const timestamp = Date.now();
  const results = { found: 0, notFound: 0, failed: 0 };
  const notFoundList = [];

  for (let i = 0; i < missing.length; i++) {
    const { slug, originalUrl, mdxPath } = missing[i];
    const progress = `[${i + 1}/${missing.length}]`;

    try {
      console.log(`${progress} Scraping: ${slug}`);
      const res = await fetch(originalUrl);

      if (res.status !== 200) {
        console.log(`  ⚠ HTTP ${res.status}`);
        results.failed++;
        notFoundList.push({ slug, reason: `HTTP ${res.status}` });
        await sleep(RATE_LIMIT_MS);
        continue;
      }

      const images = extractImageCandidates(res.body);

      if (images.length === 0) {
        console.log(`  ✗ No images found`);
        results.notFound++;
        notFoundList.push({ slug, reason: "no images in HTML" });
        await sleep(RATE_LIMIT_MS);
        continue;
      }

      // Use the first (highest priority) image
      const imageUrl = images[0];
      const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
      const filename = `${slug}-featured-${timestamp}${ext}`;
      const destPath = path.join(IMAGES_DIR, filename);
      const publicPath = `/images/blog/${filename}`;

      console.log(`  Downloading: ${imageUrl.split("/").pop()}`);
      const buffer = await downloadBuffer(imageUrl);

      // Skip tiny images (likely thumbnails/icons)
      if (buffer.length < 5000) {
        console.log(`  ⚠ Image too small (${buffer.length} bytes), trying next...`);
        // Try next candidate
        let found = false;
        for (let j = 1; j < images.length; j++) {
          const alt = images[j];
          try {
            const altBuf = await downloadBuffer(alt);
            if (altBuf.length >= 5000) {
              const altExt = path.extname(new URL(alt).pathname) || ".jpg";
              const altFilename = `${slug}-featured-${timestamp}${altExt}`;
              const altDest = path.join(IMAGES_DIR, altFilename);
              const altPublic = `/images/blog/${altFilename}`;
              fs.writeFileSync(altDest, altBuf);
              updateMdx(mdxPath, altPublic);
              console.log(`  ✓ ${slug} (alt image, ${altBuf.length} bytes)`);
              results.found++;
              found = true;
              break;
            }
          } catch {}
        }
        if (!found) {
          results.notFound++;
          notFoundList.push({ slug, reason: "all images too small" });
        }
        await sleep(RATE_LIMIT_MS);
        continue;
      }

      fs.writeFileSync(destPath, buffer);
      updateMdx(mdxPath, publicPath);
      console.log(`  ✓ ${slug} (${buffer.length} bytes)`);
      results.found++;

    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`);
      results.failed++;
      notFoundList.push({ slug, reason: err.message });
    }

    await sleep(RATE_LIMIT_MS);
  }

  console.log("\n" + "═".repeat(50));
  console.log(`Found & downloaded: ${results.found}`);
  console.log(`Not found: ${results.notFound}`);
  console.log(`Failed: ${results.failed}`);

  if (notFoundList.length > 0) {
    console.log("\nPosts still without images:");
    notFoundList.forEach(({ slug, reason }) => console.log(`  - ${slug}: ${reason}`));
  }
}

function updateMdx(mdxPath, publicPath) {
  let content = fs.readFileSync(mdxPath, "utf-8");
  if (content.includes("excerpt:")) {
    content = content.replace(/^(excerpt:)/m, `featuredImage: "${publicPath}"\n$1`);
  } else if (content.includes("originalUrl:")) {
    content = content.replace(/^(originalUrl:)/m, `featuredImage: "${publicPath}"\n$1`);
  }
  fs.writeFileSync(mdxPath, content, "utf-8");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
