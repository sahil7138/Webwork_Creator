import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { PhonePreview } from "@/components/landing/PhonePreview";
import { RevenueCalculator } from "@/components/landing/RevenueCalculator";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { PricingCards } from "@/components/landing/PricingCards";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] overflow-hidden flex flex-col justify-between">
      {/* Subtle architectural background grid */}
      <div className="bg-grid-pattern absolute inset-0 opacity-50 pointer-events-none" />

      {/* Top Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Interactive Phone Preview Simulator */}
        <section id="interactive-preview" className="relative py-16 lg:py-24 border-y border-zinc-200/80 bg-zinc-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                See what a Webworks profile looks like
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-2">
                Try a creator profile before you sign up.
              </h2>
              <p className="text-sm text-zinc-600 mt-3">
                Switch themes, browse the Store and Media Kit, and try the tip flow. This is an example of what your public profile can look like.
              </p>
            </div>

            <PhonePreview />
          </div>
        </section>

        {/* 3. Interactive Earnings Model Calculator */}
        <section id="calculator" className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevenueCalculator />
        </section>

        {/* 4. Full Module Architecture Grid */}
        <FeatureGrid />

        {/* 5. 100% Free Forever Guarantee */}
        <PricingCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
