/**
 * Downloads matched featured images from ludum.com and updates MDX frontmatter.
 * Usage: node scripts/download-featured-images.mjs
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

const RATE_LIMIT_MS = 300;

// ─── Matched blog posts → WordPress image URLs ─────────────────────────────
const MATCHES = [
  { slug: "a-fresh-perspective-on-strength-training-for-rowing", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/AFreshPerspectiveOnStrengthTrainingForRowing_Ludum.jpg" },
  { slug: "alan-campbell-olympic-medallist-great-britain-rowing-team-legend-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/10/AlanCampbell_CrossysCorner_Ludum.jpg" },
  { slug: "alex-partridge-reflects-on-rowing-wellbeing-and-mental-health-in-crossys-corner-interview", imageUrl: "https://ludum.com/wp-content/uploads/2020/11/AlexPatridge_CrossysCorner_Ludum.jpg" },
  { slug: "americas-cup-team-ineos-grinder-olympic-rower-matt-gotrel-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/MattGotrel_CrossysCorner_Ludum.jpg" },
  { slug: "andrew-triggs-hodge-3x-olympic-rowing-champion-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/AndrewTriggsHodge_CrossysCorner_Ludum1.jpg" },
  { slug: "athletes-heart-pulse-rates-whats-normal", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/Athletes_Heart_and_Pulse_Rate_Zones.jpg" },
  { slug: "barnabe-delarze-swiss-olympian-oxford-university-rower-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/12/BarnabeDelarze_CrossysCorner_Ludum-1.jpg" },
  { slug: "bill-barry-olympic-medallist-world-class-rowing-coach-chats-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2022/02/BillBarry_CrossysCorner_Ludum.jpg" },
  { slug: "breaking-down-the-technique-and-training-programmes-of-rowing-medallists-in-tokyo-crossys-corner-special-with-kris-korzeniowski", imageUrl: "https://ludum.com/wp-content/uploads/2021/12/KrisKorzeniowski_RowingLessonsFromTokyo_Ludum.jpg" },
  { slug: "british-rower-3x-olympic-silver-medallist-frances-houghton-interview-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/FrancesHoughton_CrossysCorner_Ludum1.jpg" },
  { slug: "british-rower-and-european-champion-in-the-gb-8-james-rudkin-speaks-to-martin-cross-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/JamesRudkin_CrossysCorner_Ludum.jpg" },
  { slug: "cal-coach-olympic-rower-scott-frandsen-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/ScottFrandsen_CrossysCorner_Ludum_Cross.png" },
  { slug: "canadian-olympic-champion-rower-and-leading-management-consultant-adam-kreek-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/AdamKreek_CrossysCorner_Ludum.png" },
  { slug: "canadian-olympic-silver-medallist-world-record-holder-conlin-mccabe-interview-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/02/ConlinMcCabe_CrossysCorner_Ludum_Rowing.jpg" },
  { slug: "canadian-womens-pair-hillary-janssens-and-caileigh-filmer-chat-to-martin-cross-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/CanadianPair_HillaryJanssens_CaileighFilmer_CrossysCorner_Ludum.jpg" },
  { slug: "chris-bartley-interview-in-crossys-corner-coach-olympic-silver-medallist-cycling-time-triallist", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/ChrisBartley_CrossysCorner_Ludum.jpg" },
  { slug: "christian-felkel-discusses-rowing-coaching-with-martin-cross-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/01/ChristianFelkel_CrossysCorner_Ludum1.png" },
  { slug: "common-rowing-injuries-and-how-to-prevent-them", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/RowingInjuries_Ludum.jpg" },
  { slug: "crossys-corner-interview-the-boat-race-special", imageUrl: "https://ludum.com/wp-content/uploads/2021/01/TheBoatRace_CrossysCorner_Ludum.jpg" },
  { slug: "crossys-corner-interview-with-dani-hansen-lead-hydrow-athlete-and-us-rowing-paralympian", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/DaniHansen_CrossysCorner_Ludum.jpg" },
  { slug: "crossys-corner-olympics-special-olympic-rowing-preview-with-adam-kreek-and-camilla-hadland", imageUrl: "https://ludum.com/wp-content/uploads/2021/06/OlympicPreview_AdamKreek_CamillaHadland_Ludum.jpg" },
  { slug: "crossys-corner-wingfield-sculls-2021-special-graeme-thomas-gb-olympian-and-2021-participant", imageUrl: "https://ludum.com/wp-content/uploads/2021/10/GraemeThomas_CrossysCorner_Ludum.jpg" },
  { slug: "crossys-corner-with-julien-bahain-olympic-rower-for-france-canada-ocean-rower", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/JulienBahain_CrossysCorn_Ludum1.jpg" },
  { slug: "crossys-corner-with-tony-oconnor-rowing-coach-of-the-new-zealand-m8", imageUrl: "https://ludum.com/wp-content/uploads/2021/09/TonyOConnor_CrossysCorner_Ludum.jpg" },
  { slug: "determining-a-relevant-training-load-score-in-rowing", imageUrl: "https://ludum.com/wp-content/uploads/2020/07/TrainingLoadScoreWeightings_Ludum.jpg" },
  { slug: "duke-university-varsity-coach-and-world-champion-rower-megan-cooke-carcagno-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/MeganCookCarcagno_CrossysCorner_Ludum1.jpg" },
  { slug: "dutch-rowing-champion-dirk-uittenbogaard-crossys-corner-part-1", imageUrl: "https://ludum.com/wp-content/uploads/2020/09/Dirk_Uittenbogaard_CrossysCorner_Ludum.jpg" },
  { slug: "dutch-rowing-champions-ilse-paulis-and-marieke-kaijser-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/09/Paulis_Keijser_CrossysCorner_Ludum.jpg" },
  { slug: "eric-murray-interviewed-in-crossys-corner-nz-rowing-legend-and-one-half-of-the-kiwi-pair", imageUrl: "https://ludum.com/wp-content/uploads/2021/01/EricMurray_KiwiPair_CrossysCorner_Ludum_edit.png" },
  { slug: "erin-reelick-world-champion-us-rower-and-boat-race-2022-contender-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/12/ErinReelick_CrossysCorner_Ludum.jpg" },
  { slug: "former-rowing-world-champion-cath-bishop-discusses-the-long-win-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/11/CathBishop_CrossysCorner_Ludum.jpg" },
  { slug: "four-time-olympic-medallist-iztok-cop-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/IztokCop_CrossysCorner_Ludum1.jpg" },
  { slug: "gb-olympians-crossys-corner-john-collins-and-karen-bennett", imageUrl: "https://ludum.com/wp-content/uploads/2020/11/John_CrossysCorner_Ludum.png" },
  { slug: "gb-rowings-ollie-cook-interviewed-in-crossys-corner-with-martin-cross", imageUrl: "https://ludum.com/wp-content/uploads/2020/11/OllieCook_CrossysCorner_Ludum.jpg" },
  { slug: "head-coach-of-washington-mens-rowing-michael-callahan-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/MichaelCallahan_CrossysCorner_Ludum.jpg" },
  { slug: "how-much-sleep-does-an-athlete-need", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/AthleteSleep_article_Ludum.jpg" },
  { slug: "how-sports-team-management-apps-can-help-coaches", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/HowSportsTeamManagementAppsCanHelpCoaches_Ludumsmaller.jpg" },
  { slug: "how-to-be-a-better-coxswain", imageUrl: "https://ludum.com/wp-content/uploads/2022/08/CoxingBlog_Ludum_MatildaHorn.jpg" },
  { slug: "imogen-grant-emily-craig-the-gb-womens-lightweight-double-interview-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/ImogenGrant_EmilyCraig_CrossysCorner_Ludum_MartinCross.jpg" },
  { slug: "jack-beaumont-gb-olympic-silver-medallist-leander-club-captain-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/09/JackBeaumont_CrossysCorner_Ludum1.jpg" },
  { slug: "jason-dorland-canadian-olympic-rower-author-of-chariots-and-horses-joins-us-for-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2022/03/JasonDorland_CrossysCorner_Ludum_MartinCross.jpeg" },
  { slug: "jason-osborne-2020-uci-cycling-esports-world-champion-olympic-rower-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/GoZwift_JasonOsbourne_CrossysCorner_Ludum.png" },
  { slug: "jonny-searle-barcelona-olympics-coxed-pair-champion-with-his-brother-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/JonnySearle_CrossysCorner_Ludum.jpg" },
  { slug: "kjetil-borch-in-crossys-corner-the-norwegian-olympic-world-champion-sculler-joins-martin-cross-live", imageUrl: "https://ludum.com/wp-content/uploads/2022/01/KjetilBorch_CrossysCorner_Ludum.jpg" },
  { slug: "korzeniowskis-corner-polish-rowing-coach-kris-korzeniowski-returns-to-crossys-corner-to-continue-the-masterclass", imageUrl: "https://ludum.com/wp-content/uploads/2021/06/KrisKorzeniowskiCorner_CrossysCorner_Ludum.jpg" },
  { slug: "legendary-polish-rowing-coach-kris-korzeniowski-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/KrisKorzeniowskiCorner_CrossysCorner_Ludum1.jpg" },
  { slug: "ludum-ceo-adrian-cassidy-joins-bill-chambers-for-faster-podcast", imageUrl: "https://ludum.com/wp-content/uploads/2022/01/AdrianCassidyFasterPodcast.jpg" },
  { slug: "ludum-live-streams-the-boat-race-trial-eights-2022", imageUrl: "https://ludum.com/wp-content/uploads/2022/01/LudumLiveStreamsTheBoatRaceTrialEights2022.jpg" },
  { slug: "ludum-partners-with-the-gemini-boat-race-for-trial-eights", imageUrl: "https://ludum.com/wp-content/uploads/2021/12/TheBoatRaceTrialEights_Ludum_Blog.jpg" },
  { slug: "magdalena-lobnig-interview-in-crossys-corner-austrian-womens-single-sculler", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/MagdaLogbnig_CrossysCorner_Ludum.jpg" },
  { slug: "megan-kalmoe-live-in-crossys-corner-four-time-olympian-with-the-us-rowing-team", imageUrl: "https://ludum.com/wp-content/uploads/2021/10/MeganKalmoe_CrossysCorner_Ludum.jpg" },
  { slug: "meghan-musnicki-usa-double-olympic-champion-us-rower-joins-martin-cross-live", imageUrl: "https://ludum.com/wp-content/uploads/2022/01/MeghanMusnicki_CrossysCorner_Ludum.jpg" },
  { slug: "new-zealand-rower-zoe-mcbride-discusses-retirement-red-s-mental-health-and-more-in-crossys-corner-interview", imageUrl: "https://ludum.com/wp-content/uploads/2021/04/ZoeMcBride_CrossysCorner_Ludum1.jpeg" },
  { slug: "norwegian-sculling-legend-2x-olympic-champion-olaf-tufte-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/OlafTufte_CrossysCorner_Ludum-1.jpg" },
  { slug: "number-1-rower-in-the-world-richard-schmidt-in-crossys-corner-with-martin-cross-part-1", imageUrl: "https://ludum.com/wp-content/uploads/2020/10/RichardSchmidt_CrossysCorner_Ludum.png" },
  { slug: "ollie-wynne-griffith-olympic-medallist-and-2022-boat-race-contender-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/11/OllieWynneGriffith_CrossysCorner_Ludum1.jpeg" },
  { slug: "olympic-m1x-champion-stefanos-ntouskos-and-rowing-coach-giovanni-postiglione-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/11/StefanosNtouskos-_GiovanniPostiglione_CrossysCorner_Ludum1.jpeg" },
  { slug: "olympic-rowing-champion-anna-watkins-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/02/AnnaWatkins_CrossysCorner_Ludum.jpg" },
  { slug: "olympic-rowing-gb-legends-reunion-martin-cross-and-the-1980-moscow-coxless-four-bronze-medallists", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/OlympicRowingGBLegendsReunion_1980MoscowCoxlessFour_Ludum.jpg" },
  { slug: "olympic-rowing-star-jess-eddie-joins-martin-cross-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/JessEddie_CrossysCorner_Ludum_Interview-e1607341674331.jpg" },
  { slug: "organising-a-training-plan", imageUrl: "https://ludum.com/wp-content/uploads/2020/10/Example_TrainingPlan_Ludum.jpg" },
  { slug: "paralympic-champion-rower-gbs-ollie-stanhope-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/09/OllieStanhope_CrossysCorner_Ludum.jpg" },
  { slug: "polish-rower-natan-wegrzycki-szmczyk-joins-martin-cross-for-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/11/Natan_PolishRower_CrossysCorner_Ludum.png" },
  { slug: "polish-world-champion-rower-marcin-brzezinski-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/MarcinBrzezinski_CrossysCorner_Ludum.jpg" },
  { slug: "press-release-england-talent-canoe-sprint-programme-announce-new-partnership-with-ludum", imageUrl: "https://ludum.com/wp-content/uploads/2021/05/Paddle_Sport_BritishCanoeing_Ludum.jpg" },
  { slug: "rebecca-scown-double-world-champion-rower-double-olympic-medallist-from-new-zealand-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/12/RebeccaScown_CrossysCorner_Ludum2.jpg" },
  { slug: "redefining-success-in-sport-cath-bishop-guest-blog", imageUrl: "https://ludum.com/wp-content/uploads/2021/01/Redefining_Success_CathBishop_Ludum.jpg" },
  { slug: "richard-spratley-the-mastermind-behind-the-oxford-brookes-rowing-empire-chats-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/10/RichardSpratley_CrossysCorner_Ludum-2.jpg" },
  { slug: "robbie-manson-the-worlds-fastest-ever-single-sculler-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/09/Robbie_Manson_CrossysCorner_Ludum.png" },
  { slug: "row-from-home-using-athlete-management-software-to-train-in-a-covid-world", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/Covid_Rowing_AthleteManagementSoftware_Ludum.jpg" },
  { slug: "rowing-coach-ben-lewis-explains-how-to-win-at-henley-royal-regatta-crossys-corner-special", imageUrl: "https://ludum.com/wp-content/uploads/2022/01/BenLewis_CrossysCornerSpecial_Ludum.jpg" },
  { slug: "rowing-legends-reunited-martin-cross-steve-redgrave-and-the-los-angeles-1984-olympic-coxed-four", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/RowingLegendsReunited_LosAngelesOlympicCoxedFour-_Ludum.png" },
  { slug: "rowing-nutrition-what-is-the-ideal-diet-for-rowing", imageUrl: "https://ludum.com/wp-content/uploads/2022/02/RowingNutrition_Ludum.jpg" },
  { slug: "ruben-knab-from-the-dutch-mens-8-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/10/RubenKnab_CrossysCorner_Ludum.png" },
  { slug: "sarah-winckless-world-champion-olympic-bronze-medallist-and-the-boat-race-umpire-interviewed-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/06/SarahWinckless_CrossysCorner_Ludum1.jpg" },
  { slug: "sean-wolf-rowing-illustrated-founder-joins-martin-cross-for-crossys-corner-interview", imageUrl: "https://ludum.com/wp-content/uploads/2021/06/SeanWolf_CrossysCorner_Ludum.jpg" },
  { slug: "the-importance-of-streamlined-communication-in-team-sports", imageUrl: "https://ludum.com/wp-content/uploads/2020/12/Importance_of_Streamlined_Communication_in_TeamSports_Ludum.jpg" },
  { slug: "the-row-show-x-crossys-corner-the-ultimate-rowing-crossover", imageUrl: "https://ludum.com/wp-content/uploads/2021/11/TheRowShow_CrossysCorner_Ludum.jpg" },
  { slug: "time-to-be-more-creative-with-your-rowing-machine-workouts", imageUrl: "https://ludum.com/wp-content/uploads/2021/11/CreativityinRowingWorkouts_Ludum.jpg" },
  { slug: "tokyo-2020-olympic-rowing-predictions", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/TokyoOlympicRowingPredictions_Ludum.jpg" },
  { slug: "tom-kay-chinese-rowing-team-coach-and-former-world-champion-rower-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/10/TomKay_CrossysCorner_Ludum.jpg" },
  { slug: "tricia-smith-world-rowing-vp-and-ioc-member-talks-to-martin-cross-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2021/03/TriciaSmith_CrossysCorner_Ludum.png" },
  { slug: "we-are-all-sports-performance-analysts", imageUrl: "https://ludum.com/wp-content/uploads/2021/07/WeAreAllSportsPerformanceAnalysts_Ludum.jpg" },
  { slug: "what-strength-quality-does-your-rower-crew-need-to-improve-their-speed", imageUrl: "https://ludum.com/wp-content/uploads/2020/08/What_strength_quality_rowing_ludum.jpg" },
  { slug: "why-do-you-need-an-indoor-rowing-training-app", imageUrl: "https://ludum.com/wp-content/uploads/2021/11/Why_do_you_need_an_Indoor_Rowing_Training_App_Ludum.jpg" },
  { slug: "wingfield-sculls-special-mathilda-hodgkins-byrne-and-sam-meijer-in-crossys-corner", imageUrl: "https://ludum.com/wp-content/uploads/2020/10/SamMeijer_WingfieldSculls_CrossysCorner_Ludum.jpg" },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "LudumMigrationBot/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
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

function getExtFromUrl(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  return ext || ".jpg";
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const timestamp = Date.now();
  const results = { downloaded: 0, updated: 0, skipped: 0, failed: 0 };

  console.log(`Processing ${MATCHES.length} matched blog posts...\n`);

  for (const { slug, imageUrl } of MATCHES) {
    const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);

    // Check MDX exists
    if (!fs.existsSync(mdxPath)) {
      console.log(`  SKIP ${slug} - MDX file not found`);
      results.skipped++;
      continue;
    }

    // Check if already has featuredImage
    const mdxContent = fs.readFileSync(mdxPath, "utf-8");
    if (mdxContent.includes("featuredImage:")) {
      console.log(`  SKIP ${slug} - already has featuredImage`);
      results.skipped++;
      continue;
    }

    // Download image
    const ext = getExtFromUrl(imageUrl);
    const filename = `${slug}-featured-${timestamp}${ext}`;
    const destPath = path.join(IMAGES_DIR, filename);
    const publicPath = `/images/blog/${filename}`;

    try {
      console.log(`  Downloading: ${slug}${ext}`);
      const buffer = await download(imageUrl);
      fs.writeFileSync(destPath, buffer);
      results.downloaded++;

      // Update MDX frontmatter - add featuredImage before excerpt or originalUrl
      let updated;
      if (mdxContent.includes('excerpt:')) {
        updated = mdxContent.replace(
          /^(excerpt:)/m,
          `featuredImage: "${publicPath}"\n$1`
        );
      } else if (mdxContent.includes('originalUrl:')) {
        updated = mdxContent.replace(
          /^(originalUrl:)/m,
          `featuredImage: "${publicPath}"\n$1`
        );
      } else {
        // Add before closing ---
        const parts = mdxContent.split("---");
        updated = parts[0] + "---" + parts[1] + `featuredImage: "${publicPath}"\n---` + parts.slice(2).join("---");
      }

      fs.writeFileSync(mdxPath, updated, "utf-8");
      results.updated++;
      console.log(`  ✓ ${slug}`);
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`);
      results.failed++;
    }

    await sleep(RATE_LIMIT_MS);
  }

  console.log("\n" + "═".repeat(50));
  console.log(`Downloaded: ${results.downloaded}`);
  console.log(`MDX updated: ${results.updated}`);
  console.log(`Skipped: ${results.skipped}`);
  console.log(`Failed: ${results.failed}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
