"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const [handleInput, setHandleInput] = useState("");

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleInput.trim()) {
      window.location.href = `/signup?handle=${encodeURIComponent(handleInput.trim())}`;
    } else {
      window.location.href = `/signup`;
    }
  };

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Introducing Webworks 2.0 — The Complete Creator SaaS Suite</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Turn Your Audience Into a{" "}
          <span className="text-gradient-purple">Multi-Revenue Powerhouse</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Replace 6 disconnected subscriptions. Build custom link-in-bio pages, sell digital downloads with instant payouts, automate email broadcasts, and pitch verified sponsorships.
        </p>

        {/* Inline Claim Handle Form */}
        <form
          onSubmit={handleClaimSubmit}
          className="mt-10 max-w-md mx-auto p-1.5 rounded-2xl glass-panel border border-white/15 flex items-center shadow-2xl shadow-violet-950/40"
        >
          <div className="pl-3.5 pr-1 text-sm font-medium text-slate-400 select-none">
            webworks.ai/
          </div>
          <input
            type="text"
            value={handleInput}
            onChange={(e) => setHandleInput(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
            placeholder="yourname"
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none px-1"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:brightness-110 text-white text-sm font-bold shadow-md shadow-violet-500/30 transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Claim Handle</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Social Proof Stats */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Free Forever • 0% Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Instant Stripe Connect Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-violet-400" />
            <span>Custom Domains & SSL Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
