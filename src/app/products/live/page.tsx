import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Eyebrow, Lead, Body } from "@/components/Heading";
import { PhotoBreak } from "@/components/PhotoBreak";
import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationLogos } from "@/components/IntegrationLogos";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ludum Live — Real-Time Race & Session Broadcasting | Ludum",
  description:
    "Real-time GPS tracking, live splits, stroke rate, pace, and heart rate — streamed to coaches, commentators, and spectators. Every crew. Every race.",
};

const crews = [
  { name: "Cambridge W8+", pace: "1:33.6", sr: 36, gap: "—", pos: 1, color: "bg-white" },
  { name: "Leander M8+", pace: "1:34.0", sr: 35, gap: "+2.4s", pos: 2, color: "bg-white/70" },
  { name: "Hampton 1st VIII", pace: "1:35.1", sr: 34, gap: "+5.1s", pos: 3, color: "bg-white/50" },
  { name: "Princeton M8+", pace: "1:36.4", sr: 33, gap: "+8.8s", pos: 4, color: "bg-white/30" },
];

function Bullet() {
  return (
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
  );
}

function LiveRaceMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-dark-border bg-dark px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
          </span>
          <span className="text-sm font-semibold text-white">Head of the River</span>
        </div>
        <span className="text-xs font-medium text-grey">Thames · 6.8km</span>
      </div>
      {/* Race visualisation */}
      <div className="relative bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-950 px-5 py-6">
        {/* Course with lanes */}
        <svg viewBox="0 0 400 200" className="w-full" preserveAspectRatio="xMidYMid meet">
          {/* River water */}
          <defs>
            <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(59,130,246,0.08)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.15)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>
          </defs>
          <rect x="0" y="20" width="400" height="160" fill="url(#river)" rx="8" />

          {/* Lane markers */}
          {[50, 80, 110, 140].map((y) => (
            <line key={y} x1="30" y1={y} x2="380" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="4 4" />
          ))}

          {/* Start/Finish */}
          <line x1="35" y1="30" x2="35" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="35" y="185" textAnchor="middle" fill="#666" fontSize="8">START</text>
          <line x1="375" y1="30" x2="375" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="375" y="185" textAnchor="middle" fill="#666" fontSize="8">FINISH</text>

          {/* Distance markers */}
          {[1, 2, 3, 4, 5, 6].map((km) => {
            const x = 35 + (km / 6.8) * 340;
            return (
              <g key={km}>
                <line x1={x} y1="170" x2={x} y2="175" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                <text x={x} y="185" textAnchor="middle" fill="#555" fontSize="6">{km}km</text>
              </g>
            );
          })}

          {/* Crew 1 - Leading */}
          <g>
            <line x1="40" y1="50" x2="260" y2="50" stroke="#E53F47" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <circle cx="260" cy="50" r="6" fill="#E53F47" />
            <circle cx="260" cy="50" r="3" fill="white" />
            <text x="270" y="53" fill="white" fontSize="8" fontWeight="700">1st</text>
            <text x="295" y="53" fill="#aaa" fontSize="7">Cambridge W8+</text>
          </g>

          {/* Crew 2 */}
          <g>
            <line x1="40" y1="80" x2="248" y2="80" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <circle cx="248" cy="80" r="5" fill="#3B82F6" />
            <circle cx="248" cy="80" r="2.5" fill="white" />
            <text x="258" y="83" fill="white" fontSize="8" fontWeight="700">2nd</text>
            <text x="283" y="83" fill="#aaa" fontSize="7">+2.4s</text>
          </g>

          {/* Crew 3 */}
          <g>
            <line x1="40" y1="110" x2="232" y2="110" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <circle cx="232" cy="110" r="5" fill="#22C55E" />
            <circle cx="232" cy="110" r="2.5" fill="white" />
            <text x="242" y="113" fill="white" fontSize="8" fontWeight="700">3rd</text>
            <text x="267" y="113" fill="#aaa" fontSize="7">+5.1s</text>
          </g>

          {/* Crew 4 */}
          <g>
            <line x1="40" y1="140" x2="218" y2="140" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <circle cx="218" cy="140" r="5" fill="#F59E0B" />
            <circle cx="218" cy="140" r="2.5" fill="white" />
            <text x="228" y="143" fill="white" fontSize="8" fontWeight="700">4th</text>
            <text x="253" y="143" fill="#aaa" fontSize="7">+8.8s</text>
          </g>
        </svg>
      </div>
      {/* Live stats strip */}
      <div className="grid grid-cols-4 gap-px border-t border-dark-border bg-dark-border">
        {crews.map((crew, i) => (
          <div key={crew.name} className="bg-dark-card px-3 py-3 text-center">
            <div className={`mx-auto mb-1.5 h-2 w-2 rounded-full ${
              i === 0 ? "bg-[#E53F47]" : i === 1 ? "bg-[#3B82F6]" : i === 2 ? "bg-[#22C55E]" : "bg-[#F59E0B]"
            }`} />
            <p className="truncate text-[10px] font-semibold text-white">{crew.name.split(" ")[0]}</p>
            <p className="mt-0.5 font-mono text-xs font-bold text-white">{crew.pace}</p>
            <p className="text-[9px] text-grey">SR {crew.sr}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const leaderboard = [
  { pos: 1, name: "Cambridge W8+", time: "11:42.3", gap: "" },
  { pos: 2, name: "Leander M8+", time: "11:44.7", gap: "+2.4s" },
  { pos: 3, name: "Hampton 1st VIII", time: "11:47.4", gap: "+5.1s" },
  { pos: 4, name: "Princeton M8+", time: "11:51.1", gap: "+8.8s" },
  { pos: 5, name: "Royal Chester M8+", time: "11:55.6", gap: "+13.3s" },
];

function SpectatorMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
      <div className="border-b border-dark-border bg-dark px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Spectator View — Head of the River</span>
          <span className="flex items-center gap-1.5 rounded-full border border-dark-border bg-black px-2 py-0.5 text-[10px] font-bold text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
            </span>
            LIVE
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-dark-border bg-black px-3 py-2">
          <span className="flex-1 truncate font-mono text-xs text-grey-light">
            live.ludum.com/hotr-2026
          </span>
          <button className="rounded-md border border-dark-border bg-dark px-2 py-1 text-[10px] font-semibold text-white">
            Copy Link
          </button>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-grey">
          Live Leaderboard — 3.4km Mark
        </p>
        <div className="space-y-2">
          {leaderboard.map((row) => (
            <div key={row.pos} className="flex items-center gap-3 rounded-lg bg-dark px-3 py-2">
              <span className="w-5 font-bold text-white">{row.pos}</span>
              <span className="flex-1 text-sm text-white">{row.name}</span>
              <span className="font-mono text-xs text-grey-light">{row.time}</span>
              {row.gap && <span className="w-12 text-right font-mono text-[10px] text-white/70">{row.gap}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-dark-border bg-dark px-5 py-3">
        <div className="flex items-center justify-between text-[10px] font-medium text-grey">
          {["Start", "1km", "2km", "3.4km", "5km", "Finish"].map((m, i) => (
            <span key={m} className={i === 3 ? "font-bold text-white" : ""}>
              {m}
            </span>
          ))}
        </div>
        <div className="mt-2 h-1 rounded-full bg-dark-border">
          <div className="h-full w-[57%] rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}

const seats = [
  { seat: "Str", hr: 182, zone: "Z5", color: "bg-red-500" },
  { seat: "7", hr: 176, zone: "Z4", color: "bg-orange-500" },
  { seat: "6", hr: 162, zone: "Z3", color: "bg-emerald-500" },
  { seat: "5", hr: 172, zone: "Z4", color: "bg-orange-500" },
  { seat: "4", hr: 155, zone: "Z3", color: "bg-emerald-500" },
  { seat: "3", hr: 178, zone: "Z5", color: "bg-red-500" },
  { seat: "2", hr: 145, zone: "Z2", color: "bg-blue-500" },
  { seat: "Bow", hr: 168, zone: "Z4", color: "bg-orange-500" },
];

function Sparkline({
  data,
  target,
}: {
  data: number[];
  target?: { value: number; label: string };
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 240;
  const h = 60;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${i * step},${h - 6 - ((v - min) / range) * (h - 16)}`)
    .join(" ");
  const targetY =
    target !== undefined ? h - 6 - ((target.value - min) / range) * (h - 16) : 0;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-full w-full">
      {target && (
        <>
          <line
            x1="0"
            x2={w}
            y1={targetY}
            y2={targetY}
            stroke="#808080"
            strokeWidth="0.6"
            strokeDasharray="3 3"
          />
          <text
            x={w - 4}
            y={targetY - 3}
            fill="#808080"
            fontSize="6"
            textAnchor="end"
            fontFamily="var(--font-sans)"
          >
            {target.label}
          </text>
        </>
      )}
      <polyline
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

const paceSeries = [
  94, 94, 93.8, 94.2, 94, 93.6, 94.1, 94.3, 94, 93.8, 94.2, 94.4, 94.1, 93.9,
  94, 94.2, 93.8, 94, 94.3, 94.1, 93.7, 94, 94.2, 94, 93.8, 94.1, 94.3, 94,
  93.9, 94.2, 94, 93.8, 94.1, 94.3, 94, 93.7, 94, 94.2, 94.1, 93.9, 94, 94.2,
  94, 93.8, 94.1, 94, 93.9, 94.2, 94, 93.8, 94.1, 94, 94.2, 94, 93.9, 94, 94.1,
  94, 93.8, 94,
];

const srSeries = [
  33, 34, 34, 33, 34, 35, 34, 34, 33, 34, 34, 35, 34, 34, 35, 34, 33, 34, 34,
  34, 35, 34, 34, 33, 34, 35, 34, 34, 34, 35, 34, 33, 34, 34, 35, 34, 34, 34,
  33, 34, 35, 34, 34, 34, 34, 35, 34, 33, 34, 34, 34, 35, 34, 34, 33, 34, 34,
  35, 34, 34,
];

function CoachFeedMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
      <div className="flex items-center justify-between border-b border-dark-border bg-dark px-5 py-3">
        <span className="text-sm font-semibold text-white">Coach View — M8+ A Crew (Live)</span>
        <span className="flex items-center gap-1.5 rounded-full border border-dark-border bg-black px-2 py-0.5 text-[10px] font-bold text-white">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
          </span>
          LIVE
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 border-b border-dark-border bg-dark p-4">
        <div className="rounded-lg bg-black p-3 text-center">
          <p className="font-mono text-xl font-bold text-white">1:34.0</p>
          <p className="mt-1 text-[9px] uppercase tracking-wider text-grey">/500m</p>
        </div>
        <div className="rounded-lg bg-black p-3 text-center">
          <p className="font-mono text-xl font-bold text-white">34</p>
          <p className="mt-1 text-[9px] uppercase tracking-wider text-grey">SR</p>
        </div>
        <div className="rounded-lg bg-black p-3 text-center">
          <p className="font-mono text-xl font-bold text-white">2,840m</p>
          <p className="mt-1 text-[9px] uppercase tracking-wider text-grey">Dist</p>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-grey">
          Live Heart Rate — By Seat
        </p>
        <div className="space-y-1.5">
          {seats.map((s) => (
            <div key={s.seat} className="flex items-center gap-3">
              <span className="w-10 text-xs font-semibold text-grey-light">{s.seat}</span>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-dark">
                <div
                  className={`absolute inset-y-0 left-0 ${s.color}`}
                  style={{ width: `${(s.hr / 200) * 100}%` }}
                />
              </div>
              <span className="w-10 text-right font-mono text-xs font-bold text-white">{s.hr}</span>
              <span className={`w-8 text-right text-[10px] font-bold ${
                s.zone === "Z5" ? "text-red-400" :
                s.zone === "Z4" ? "text-orange-400" :
                s.zone === "Z3" ? "text-emerald-400" : "text-blue-400"
              }`}>{s.zone}</span>
            </div>
          ))}
        </div>
        <p className="mb-1.5 mt-4 text-[10px] font-semibold uppercase tracking-wider text-grey">
          Pace /500m — Last 60 Strokes
        </p>
        <div className="h-[60px] overflow-hidden rounded-md border border-dark-border bg-black">
          <Sparkline data={paceSeries} target={{ value: 94, label: "Target 1:34" }} />
        </div>
        <p className="mb-1.5 mt-3 text-[10px] font-semibold uppercase tracking-wider text-grey">
          Stroke Rate — Last 60 Strokes
        </p>
        <div className="h-[60px] overflow-hidden rounded-md border border-dark-border bg-black">
          <Sparkline data={srSeries} />
        </div>
      </div>
    </div>
  );
}

const events = [
  { name: "M8+ — Heat 1", meta: "4 crews · 2km · Lane A–D", badge: "LIVE", tone: "live" },
  { name: "W4+ — Heat 2", meta: "3 crews · 2km · Lane A–C", badge: "LIVE", tone: "live" },
  { name: "M4x — Semi-Final", meta: "6 crews · 2km · Starting 14:30", badge: "14:30", tone: "upcoming" },
  { name: "W8+ — Final", meta: "4 crews · 2km · Starting 15:00", badge: "15:00", tone: "upcoming" },
  { name: "M2x — Heat 1", meta: "5 crews · 2km · Finished 12:45", badge: "DONE", tone: "done" },
];

function EventsMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card shadow-2xl">
      <div className="flex items-center justify-between border-b border-dark-border bg-dark px-5 py-3">
        <span className="text-sm font-semibold text-white">Events — Spring Regatta 2026</span>
        <span className="rounded-full border border-dark-border bg-black px-2 py-0.5 text-[10px] font-bold text-white">3 LIVE</span>
      </div>
      <div className="divide-y divide-dark-border">
        {events.map((e) => (
          <div key={e.name} className="flex items-center gap-3 px-5 py-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{e.name}</p>
              <p className="mt-0.5 text-[10px] text-grey">{e.meta}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                e.tone === "live"
                  ? "bg-white/10 text-white"
                  : e.tone === "done"
                  ? "bg-green-500/15 text-green-400"
                  : "bg-white/[.06] text-grey-light"
              }`}
            >
              {e.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BroadcastMockup() {
  return (
    <a
      href="https://www.youtube.com/watch?v=Z5VV3b7VF-Y&t=7337"
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-dark-border shadow-2xl"
    >
      <div className="relative aspect-video">
        <Image
          src="https://img.youtube.com/vi/Z5VV3b7VF-Y/maxresdefault.jpg"
          alt="Ludum Live broadcast overlay in action"
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral shadow-lg transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
          2:02:17
        </div>
        <div className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Watch the broadcast overlay live
        </div>
      </div>
    </a>
  );
}

function PainSolution({
  label,
  heading,
  body,
  details,
  mockup,
  reverse = false,
}: {
  label: string;
  heading: string;
  body: string;
  details: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-dark-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={reverse ? "lg:col-start-2" : ""}>
            <Eyebrow>{label}</Eyebrow>
            <H2>{heading}</H2>
            <Body className="mt-6 text-lg">{body}</Body>
            <ul className="mt-6 space-y-3">
              {details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-grey-light">
                  <Bullet />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>{mockup}</div>
        </div>
      </div>
    </section>
  );
}

export default function LivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-8 text-sm text-grey-light">
            <span>Products</span>
            <span className="mx-2">/</span>
            <span className="text-white">Ludum Live</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Real-Time Broadcasting</Eyebrow>
              <H1 accent="Live.">Broadcast the race.</H1>
              <Lead className="mt-6">
                Real-time GPS tracking, live splits, stroke rate, pace, and
                heart rate — streamed to coaches on the bank, commentators in
                the tower, and spectators on their phones. Every crew. Every
                race. Every training session.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark"
                >
                  Request a Demo &rarr;
                </Link>
                <Link
                  href="#live-race"
                  className="rounded-full border border-dark-border px-7 py-3 text-sm font-semibold text-white transition hover:border-grey-dim"
                >
                  See it in action
                </Link>
              </div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=et4BBlshJk4&list=PLgHoN6LLDp_-K_YKMMdA64UbwEZhPfX_6&t=209"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video overflow-hidden rounded-2xl border border-dark-border"
            >
              <Image
                src="https://img.youtube.com/vi/et4BBlshJk4/maxresdefault.jpg"
                alt="Ludum Live demo video"
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral shadow-lg transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-mono font-semibold text-white backdrop-blur-sm">
                3:29
              </div>
            </a>
          </div>
        </div>
      </section>

      <div id="live-race" />

      <PainSolution
        label="Live Race Tracking"
        heading="See every crew. Every metre. In real time."
        body="Ludum Live tracks every boat on the course in real time via GPS. As crews move, the map updates — showing position, pace, stroke rate, and gaps between boats. Coaches on the bank see everything. Race officials see everything. No more guessing what's happening out of sight."
        details={[
          "Real-time GPS position for every crew on the course",
          "Live pace, stroke rate, and distance covered — updated every stroke",
          "Automatic gap calculation between boats — metres and seconds",
          "Works for head races, side-by-side regattas, and training pieces",
        ]}
        mockup={<LiveRaceMockup />}
      />

      <PainSolution
        label="Spectator Experience"
        heading="One link. Any device. Every spectator."
        body="Share a single link and anyone can follow the race live — on their phone, tablet, or laptop. No app download. No login. Spectators see a real-time leaderboard, live crew positions, and running splits. When the race is over, the full replay is available instantly."
        details={[
          "Public spectator link — no login or app required",
          "Real-time leaderboard with live gap calculations",
          "Mobile-first design — built for the phone in your pocket on the riverbank",
          "Post-race replay available immediately — share results, not just times",
        ]}
        mockup={<SpectatorMockup />}
        reverse
      />

      <PainSolution
        label="Coach Live Feed"
        heading="Live heart rate, stroke rate, and pace — for every seat."
        body="The coach view goes deeper than the spectator feed. See real-time heart rate for every athlete in the crew alongside pace and stroke rate. Know who's in the red zone during a race piece. See if the rate is climbing or dropping. Make coaching decisions with data — not just what you can see from the bank."
        details={[
          "Per-athlete live heart rate with zone indicators",
          "Stroke rate trend — see drift before it becomes a problem",
          "Pace vs target overlay for structured sessions",
          "Secured coach view — only authorised coaches see athlete data",
        ]}
        mockup={<CoachFeedMockup />}
      />

      <PainSolution
        label="Event Management"
        heading="Set up live crew tracking in minutes. Not weeks."
        body="Create an event, define the course, assign crews, and go live. Ludum Live uses the GPS data already streaming from Ludum Row and Ludum Paddle — no additional hardware. For head races, regattas, or training pieces, the setup is the same: create, share, track."
        details={[
          "Define a course by dropping start and finish markers on the map",
          "Assign crews from your Ludum Team roster — no re-entry",
          "Auto-generates a spectator link and QR code for the event",
          "Multi-race support — manage a full regatta schedule from one dashboard",
        ]}
        mockup={<EventsMockup />}
        reverse
      />

      <PainSolution
        label="Broadcast Overlay"
        heading="Add live data to any video stream."
        body="Ludum Live generates a transparent overlay with live crew positions, pace, stroke rate, and gaps — designed for OBS, vMix, or any streaming software. Turn a static camera feed into a professional broadcast. Lower thirds update in real time as crews move through the course."
        details={[
          "Transparent overlay for OBS, vMix, and browser-based streaming tools",
          "Customisable lower third with crew name, pace, stroke rate, and gap",
          "Leaderboard widget for multi-crew races",
          "Brand-ready — add your club or regatta logo to the overlay",
        ]}
        mockup={<BroadcastMockup />}
      />

      <PhotoBreak
        image="/images/hero-sunset-bridge.jpg"
        heading="The race happens on the water."
        headingAccent="Now everyone can see it."
        subtext="Live data for coaches. Live results for spectators. Professional overlays for broadcasters."
      />

      <HowItWorks
        label="How It Works"
        heading="Create. Share. Go live."
        steps={[
          { title: "Create an Event", description: "Name the event, drop course markers on the map, and set up the race schedule." },
          { title: "Assign Crews", description: "Pull crews from your Ludum Team roster. Athletes already have the app — nothing to install." },
          { title: "Share the Link", description: "One link for spectators, one for coaches. QR code for the regatta programme." },
          { title: "Go Live", description: "GPS data streams from the athletes' phones. Everyone watches in real time." },
        ]}
      />

      <IntegrationLogos
        label="Built on the Ludum Ecosystem"
        heading="Live connects to everything your athletes already use."
        subtext="No new hardware. Ludum Live uses the GPS and sensor data already flowing from Ludum Row, Ludum Paddle, and connected wearables."
        logos={["Ludum Row", "Ludum Paddle", "Garmin", "Polar", "Concept2", "OBS"]}
      />

      <ProofSection
        quote="We've been asking for something like this for years. Being able to show parents and supporters what's actually happening during a race — live, on their phones — changes the whole event experience. And as a coach, having live heart rate data from the bank is something I never thought I'd have."
        author="Matt Ryan"
        title="Olympic Medallist & Performance Coach"
        initials="MR"
        logos={["Rowing Australia", "Cambridge University", "Leander Club", "Hampton School"]}
      />

      <CTASection
        heading="See your races like never before."
        subtext="Book a demo and we'll show you Ludum Live with a real event — live tracking, spectator view, coach feed, and broadcast overlay with your crews."
      />
    </>
  );
}
