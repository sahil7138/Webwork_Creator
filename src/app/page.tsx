import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { PhonePreview } from "@/components/landing/PhonePreview";
import { RevenueCalculator } from "@/components/landing/RevenueCalculator";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { PricingCards } from "@/components/landing/PricingCards";
import { InteractiveBackground } from "@/components/landing/InteractiveBackground";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] text-zinc-900 overflow-hidden flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-950">
      {/* Soft Luminous Interactive Background with Delicate Nodes & Tech Grid */}
      <InteractiveBackground />

      {/* Top Floating Glass Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* 1. Dramatic Full-Screen Hero Section */}
        <HeroSection />

        {/* 2. Interactive Phone Preview Simulator */}
        <section
          id="interactive-preview"
          className="relative py-24 sm:py-36 border-y border-zinc-200/80 bg-zinc-50/70 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-[11px] font-mono uppercase tracking-widest text-zinc-600 mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>INTERACTIVE DEVICE SIMULATOR // REAL-TIME ENGINE</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950">
                Experience your profile{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">
                  before you publish.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-4 max-w-xl mx-auto leading-relaxed">
                Cycle through responsive palettes, inspect store deliverables, test tip flows, and view verified audience media cards.
              </p>
            </div>

            <PhonePreview />
          </div>
        </section>

        {/* 3. Full Storytelling Module Architecture */}
        <FeatureGrid />

        {/* 4. Interactive Earnings Model Calculator */}
        <section
          id="calculator"
          className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <RevenueCalculator />
        </section>

        {/* 5. 100% Free Forever Guarantee */}
        <PricingCards />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
