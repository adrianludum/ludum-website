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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  );
}
