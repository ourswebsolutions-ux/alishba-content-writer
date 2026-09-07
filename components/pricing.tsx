"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  discount?: string;
}

const packages: PricingPackage[] = [
  {
    name: "Starter",
    price: "$50",
    description: "Perfect for individuals & small brands",
    features: [
      "5 SEO-optimized articles",
      "Keyword research included",
      "Basic on-page optimization",
      "1 revision round",
      "7-day delivery",
    ],
  },
  {
    name: "Growth",
    price: "$85",
    description: "Ideal for growing businesses",
    features: [
      "15 SEO-optimized articles",
      "Advanced keyword strategy",
      "Full on-page SEO",
      "Meta titles & descriptions",
      "2 revision rounds",
      "Priority support",
      "14-day delivery",
    ],
    popular: true,
    discount: "Save 20%",
  },
  {
    name: "Authority",
    price: "$150",
    description: "For brands that want to dominate",
    features: [
      "30 SEO-optimized articles",
      "Competitor content analysis",
      "Complete technical SEO audit",
      "Internal linking strategy",
      "Unlimited revisions",
      "Dedicated content manager",
      "Monthly performance report",
    ],
  },
];

export default function PricingPackages() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      {/* Soft yellow glow */}
      <div
        className="pointer-events-none absolute -right-10 top-0 h-[480px] w-[580px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 179, 8, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Pricing Packages
          </h2>
          <p className="text-lg text-gray-400">
            Flexible content solutions for every stage of your brand
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-zinc-900/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 ${
                pkg.popular
                  ? "border-yellow-500/60 shadow-yellow-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Most Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-black shadow-md">
                  Most Popular
                </div>
              )}

              {/* Discount badge */}
              {pkg.discount && (
                <div className="absolute right-4 top-4 z-10 rounded-md bg-yellow-400 px-2.5 py-1 text-xs font-semibold text-black shadow">
                  {pkg.discount}
                </div>
              )}

              {/* Header */}
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                <div className="mb-2 text-3xl font-bold text-yellow-400">
                  {pkg.price}
                </div>
                <p className="text-sm text-gray-400">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "border border-yellow-500/50 bg-transparent text-yellow-400 hover:bg-yellow-500/10"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}