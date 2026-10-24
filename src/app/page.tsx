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
    <div className="relative min-h-screen bg-[#06080e] overflow-hidden flex flex-col justify-between">
      {/* Background ambient lighting */}
      <div className="bg-grid-pattern absolute inset-0 opacity-40 pointer-events-none" />
      <div className="ambient-glow-purple top-12 left-1/4 -translate-x-1/2 opacity-35" />
      <div className="ambient-glow-cyan top-96 right-10 opacity-25" />

      {/* Top Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Interactive Phone Preview Simulator */}
        <section id="interactive-preview" className="relative py-16 lg:py-24 border-y border-white/5 bg-[#080b14]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                Live Interactive Prototype
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Experience the Public Creator Experience
              </h2>
              <p className="text-sm text-slate-400 mt-3">
                Try switching themes, tapping between the Store and Media Kit tabs, or simulating a tip. Every pixel is engineered for conversion.
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

        {/* 5. Transparent Pricing Plans */}
        <PricingCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
