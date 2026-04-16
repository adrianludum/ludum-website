/**
 * Adds youtubeId to blog MDX frontmatter for posts with embedded videos.
 * Usage: node scripts/add-youtube-videos.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.resolve(__dirname, "..", "content", "blog");

const VIDEO_MAP = {
  "rowing-record-breaker-georgie-rowe-in-crossys-corner": "MVR8HmdRRMI",
  "ruben-knab-from-the-dutch-mens-8-interviewed-in-crossys-corner": "YDKlUUxFA6g",
  "alan-campbell-olympic-medallist-great-britain-rowing-team-legend-in-crossys-corner": "cvhJij7v3Vw",
  "number-1-rower-in-the-world-richard-schmidt-in-crossys-corner-with-martin-cross-part-1": "PC4HepEGai4",
  "wingfield-sculls-special-mathilda-hodgkins-byrne-and-sam-meijer-in-crossys-corner": "fz8V9naCP2E",
  "polish-rower-natan-wegrzycki-szmczyk-joins-martin-cross-for-crossys-corner": "GTKSnxACzvc",
  "gb-rowings-ollie-cook-interviewed-in-crossys-corner-with-martin-cross": "H55CYIG0CRI",
  "former-rowing-world-champion-cath-bishop-discusses-the-long-win-in-crossys-corner": "OviX03eFzvM",
  "john-wojtkiewicz-author-of-rowing-as-a-zero-billion-dollar-industry-interviewed-in-crossys-corner": "yI6uwDKBfCY",
  "alex-partridge-reflects-on-rowing-wellbeing-and-mental-health-in-crossys-corner-interview": "HWWOF-KeY_o",
  "jurgen-grobler": "Jt4cOwN_rCE",
  "olympic-rowing-star-jess-eddie-joins-martin-cross-in-crossys-corner": "UgCbb5sm0MQ",
  "jason-osborne-2020-uci-cycling-esports-world-champion-olympic-rower-interviewed-in-crossys-corner": "t-yqGSRGWcA",
  "americas-cup-team-ineos-grinder-olympic-rower-matt-gotrel-interviewed-in-crossys-corner": "FI19cR0ywkY",
  "canadian-olympic-champion-rower-and-leading-management-consultant-adam-kreek-interviewed-in-crossys-corner": "wevm4NUaf0c",
  "andrew-triggs-hodge-3x-olympic-rowing-champion-interviewed-in-crossys-corner": "ZNExMDh5Ksk",
  "cal-coach-olympic-rower-scott-frandsen-interviewed-in-crossys-corner": "oSo8c2BAvOU",
  "crossys-corner-interview-the-boat-race-special": "s5gpUQP3pdQ",
  "christian-felkel-discusses-rowing-coaching-with-martin-cross-in-crossys-corner": "MF2SJih3LiI",
  "rowing-chat-interview-with-adrian-cassidy-on-data-in-rowing-and-new-ludum-features": "3E8rk6wQxCQ",
  "eric-murray-interviewed-in-crossys-corner-nz-rowing-legend-and-one-half-of-the-kiwi-pair": "110hmFsvJ7g",
  "olympic-rowing-champion-anna-watkins-interviewed-in-crossys-corner": "H_aCFNOyRfw",
  "canadian-olympic-silver-medallist-world-record-holder-conlin-mccabe-interview-in-crossys-corner": "ii9zjyMiqcU",
  "head-coach-of-washington-mens-rowing-michael-callahan-interviewed-in-crossys-corner": "op-bjarIFpQ",
  "norwegian-sculling-legend-2x-olympic-champion-olaf-tufte-interviewed-in-crossys-corner": "gjV5slT18f8",
  "tricia-smith-world-rowing-vp-and-ioc-member-talks-to-martin-cross-in-crossys-corner": "540LSW-GlHQ",
  "duke-university-varsity-coach-and-world-champion-rower-megan-cooke-carcagno-interviewed-in-crossys-corner": "C_--ahRAWq4",
  "polish-world-champion-rower-marcin-brzezinski-in-crossys-corner": "Jth1rd-_Ajw",
  "crossys-corner-with-julien-bahain-olympic-rower-for-france-canada-ocean-rower": "NQn6g6yRPmE",
  "jonny-searle-barcelona-olympics-coxed-pair-champion-with-his-brother-interviewed-in-crossys-corner": "jka9f8Bph0E",
  "crossys-corner-the-devizes-to-westminster-international-canoe-race-special": "vlsVtnmNBys",
  "imogen-grant-emily-craig-the-gb-womens-lightweight-double-interview-in-crossys-corner": "K1Js8lSCCZk",
  "four-time-olympic-medallist-iztok-cop-interviewed-in-crossys-corner": "Gxm6G4aMyLI",
  "british-rower-3x-olympic-silver-medallist-frances-houghton-interview-in-crossys-corner": "5kz6ZHlD03k",
  "british-rower-and-european-champion-in-the-gb-8-james-rudkin-speaks-to-martin-cross-in-crossys-corner": "NVCK6ADPy-M",
  "new-zealand-rower-zoe-mcbride-discusses-retirement-red-s-mental-health-and-more-in-crossys-corner-interview": "6AtIb0475ss",
  "garry-herbert-bbc-rowing-commentator-and-olympic-champion-coxswain-interview-in-crossys-corner": "5qnosT-WyVo",
  "chris-bartley-interview-in-crossys-corner-coach-olympic-silver-medallist-cycling-time-triallist": "Bv4kw4WH0Ek",
  "magdalena-lobnig-interview-in-crossys-corner-austrian-womens-single-sculler": "sDu2DVhWaVM",
  "legendary-polish-rowing-coach-kris-korzeniowski-interviewed-in-crossys-corner": "m8mQiPftHTo",
  "estonian-quad-sculler-olympic-medallist-kasper-taimsoo-chats-in-crossys-corner": "lhcTu5p34aQ",
  "canadian-womens-pair-hillary-janssens-and-caileigh-filmer-chat-to-martin-cross-in-crossys-corner": "UznR5Up4fR4",
  "korzeniowskis-corner-polish-rowing-coach-kris-korzeniowski-returns-to-crossys-corner-to-continue-the-masterclass": "RGQ1FBcH-oQ",
  "crossys-corner-olympics-special-olympic-rowing-preview-with-adam-kreek-and-camilla-hadland": "XS8k5m97mUw",
  "sarah-winckless-world-champion-olympic-bronze-medallist-and-the-boat-race-umpire-interviewed-in-crossys-corner": "asq7aLIk_XQ",
  "sean-wolf-rowing-illustrated-founder-joins-martin-cross-for-crossys-corner-interview": "hPb02AMtsVk",
  "crossys-corner-interview-with-dani-hansen-lead-hydrow-athlete-and-us-rowing-paralympian": "lnULMoNBzS4",
  "olympic-rowing-gb-legends-reunion-martin-cross-and-the-1980-moscow-coxless-four-bronze-medallists": "6YMb9_MEAJ4",
  "rowing-legends-reunited-martin-cross-steve-redgrave-and-the-los-angeles-1984-olympic-coxed-four": "gvCkFKnh4Mw",
  "crossy-gets-cornered-our-interview-with-olympic-champion-and-rowing-legend-martin-cross": "P02EZcoeGsw",
  "emma-twigg-tokyo-2020-olympic-rowing-champion-chats-with-martin-cross-in-crossys-corner": "PF65M4SlT7w",
  "crossys-corner-with-tony-oconnor-rowing-coach-of-the-new-zealand-m8": "ge91dTkKNrY",
  "andrea-proske-in-crossys-corner-canadian-olympic-champion-in-the-womens-eight": "AMlfimtiVpg",
  "jack-beaumont-gb-olympic-silver-medallist-leander-club-captain-interviewed-in-crossys-corner": "Qrenww3D2qw",
  "paralympic-champion-rower-gbs-ollie-stanhope-interviewed-in-crossys-corner": "rHutiIfDF-A",
  "richard-spratley-the-mastermind-behind-the-oxford-brookes-rowing-empire-chats-in-crossys-corner": "bmlwY5zKqws",
  "tom-kay-chinese-rowing-team-coach-and-former-world-champion-rower-in-crossys-corner": "THm7qPh4DWM",
  "crossys-corner-wingfield-sculls-2021-special-graeme-thomas-gb-olympian-and-2021-participant": "1h0uLa-gtRE",
  "megan-kalmoe-live-in-crossys-corner-four-time-olympian-with-the-us-rowing-team": "BzdM4cER-Jg",
  "olympic-m1x-champion-stefanos-ntouskos-and-rowing-coach-giovanni-postiglione-in-crossys-corner": "7_oGz7-A9QE",
  "ollie-wynne-griffith-olympic-medallist-and-2022-boat-race-contender-in-crossys-corner": "biE8RlGvrtc",
  "the-row-show-x-crossys-corner-the-ultimate-rowing-crossover": "_MYP1rIUvZw",
  "barnabe-delarze-swiss-olympian-oxford-university-rower-in-crossys-corner": "fyOgf72Eq9U",
  "breaking-down-the-technique-and-training-programmes-of-rowing-medallists-in-tokyo-crossys-corner-special-with-kris-korzeniowski": "UKBRn7AJTeI",
  "erin-reelick-world-champion-us-rower-and-boat-race-2022-contender-in-crossys-corner": "MQGoVd6GaRg",
  "rebecca-scown-double-world-champion-rower-double-olympic-medallist-from-new-zealand-in-crossys-corner": "RktB3GLRCGw",
  "kjetil-borch-in-crossys-corner-the-norwegian-olympic-world-champion-sculler-joins-martin-cross-live": "Yqlzg81PtV4",
  "rowing-coach-ben-lewis-explains-how-to-win-at-henley-royal-regatta-crossys-corner-special": "KvXhTYFz7aw",
  "meghan-musnicki-usa-double-olympic-champion-us-rower-joins-martin-cross-live": "uhLZ8CGthKg",
  "bill-barry-olympic-medallist-world-class-rowing-coach-chats-in-crossys-corner": "I9Dv9f-vIpM",
  "jason-dorland-canadian-olympic-rower-author-of-chariots-and-horses-joins-us-for-crossys-corner": "JZY3FjA1Bt8",
};

let updated = 0;
let skipped = 0;

for (const [slug, videoId] of Object.entries(VIDEO_MAP)) {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    console.log(`SKIP ${slug} - file not found`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(mdxPath, "utf-8");

  if (content.includes("youtubeId:")) {
    skipped++;
    continue;
  }

  // Add youtubeId before originalUrl or excerpt
  if (content.includes("originalUrl:")) {
    content = content.replace(
      /^(originalUrl:)/m,
      `youtubeId: "${videoId}"\n$1`
    );
  } else if (content.includes("excerpt:")) {
    content = content.replace(
      /^(excerpt:)/m,
      `youtubeId: "${videoId}"\n$1`
    );
  }

  fs.writeFileSync(mdxPath, content, "utf-8");
  console.log(`✓ ${slug} → ${videoId}`);
  updated++;
}

console.log(`\nUpdated: ${updated}, Skipped: ${skipped}`);
