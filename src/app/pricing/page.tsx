import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Ludum Team",
  description:
    "Performance data, smarter planning, and seamless communication — for clubs of every size. Find the right Ludum plan for your squad.",
};

export default function PricingPage() {
  return <PricingClient />;
}
