import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ludum — Sports Performance Platform for Coaches & Teams",
  description:
    "The performance platform built for coaches and teams in rowing and paddle sport. Training, data, compliance, and telemetry in one system.",
  metadataBase: new URL("https://ludum.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Ludum",
    title: "Ludum — Sports Performance Platform for Coaches & Teams",
    description:
      "The performance platform built for coaches and teams in rowing and paddle sport. Training, data, compliance, and telemetry in one system.",
    images: [{ url: "/images/ludum-logo.png", width: 512, height: 512, alt: "Ludum" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LudumHQ",
    creator: "@LudumHQ",
    title: "Ludum — Sports Performance Platform for Coaches & Teams",
    description:
      "The performance platform built for coaches and teams in rowing and paddle sport. Training, data, compliance, and telemetry in one system.",
    images: ["/images/ludum-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ludum",
    url: "https://ludum.com",
    logo: "https://ludum.com/images/ludum-logo.png",
    description:
      "Sports performance platform for coaches and teams in rowing and paddle sport.",
    foundingDate: "2019",
    founder: [
      { "@type": "Person", name: "Adrian Cassidy" },
      { "@type": "Person", name: "David Townsend" },
    ],
    sameAs: [
      "https://www.facebook.com/ludumHQ/",
      "https://twitter.com/LudumHQ",
      "https://www.instagram.com/ludumhq/",
      "https://www.linkedin.com/company/ludumteam/",
      "https://www.youtube.com/c/LudumHQ",
    ],
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ludum",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Training management and performance analysis platform for coaches and sports teams.",
    url: "https://ludum.com",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "299",
      offerCount: "4",
    },
    creator: {
      "@type": "Organization",
      name: "Ludum",
    },
  };

  const graph = [organization, software];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  );
}
