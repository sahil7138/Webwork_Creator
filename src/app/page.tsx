import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CreatorShowcase } from "@/components/landing/CreatorShowcase";
import { StatsSection } from "@/components/landing/StatsSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-zinc-900 overflow-x-hidden flex flex-col justify-between selection:bg-purple-100 selection:text-purple-900">
      {/* Floating Pill Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1 space-y-6 sm:space-y-10">
        {/* 1. Primary Rounded Hero Section */}
        <HeroSection />

        {/* 2. How It Works Section */}
        <HowItWorksSection />

        {/* 3. Features Section (The tools to grow your creator business) */}
        <FeaturesSection />

        {/* 4. Statistics Section (10K+, 50K+, 1M+, $2M+) */}
        <StatsSection />

        {/* 5. Creator Showcase Section (Built by creators, for creators) */}
        <CreatorShowcase />

        {/* 6. Final Rounded CTA Section */}
        <CtaSection />
      </main>

      {/* 7. Minimal White Footer */}
      <Footer />
    </div>
  );
}
