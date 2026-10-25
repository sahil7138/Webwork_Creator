"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";

export function HeroSection() {
  const [handleInput, setHandleInput] = useState("");

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleInput.trim()) {
      window.location.href = `/signup?handle=${encodeURIComponent(
        handleInput.trim()
      )}`;
    } else {
      window.location.href = `/signup`;
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-8 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
      {/* Decorative Crosshair Marks */}
      <div className="absolute top-12 left-8 font-mono text-[10px] text-zinc-400 select-none pointer-events-none hidden md:block">
        + LOC: 37.7749° N, 122.4194° W<br />
        SYS.CORE // BUILD 2026.10
      </div>
      <div className="absolute top-12 right-8 font-mono text-[10px] text-zinc-400 text-right select-none pointer-events-none hidden md:block">
        FREQ: 60Hz // LOW LATENCY<br />
        PROTOCOL: ZERO-FEE DIRECT
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Top System Status Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-zinc-200 text-[11px] font-mono uppercase tracking-widest text-zinc-600 mb-8 backdrop-blur-md shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="text-zinc-950 font-bold">WEBWORKS 2.0</span>
          <span className="text-zinc-400">/</span>
          <span className="text-emerald-700 font-semibold">THE CREATOR OPERATING SYSTEM</span>
        </div>

        {/* Oversized High-Impact Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black uppercase tracking-[-0.04em] text-zinc-950 max-w-5xl mx-auto leading-[0.94]">
          One page for your{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600">
            work, products,
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">
            and income.
          </span>
        </h1>

        {/* Editorial Subheader */}
        <p className="mt-8 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
          The unified operating system for independent creators. Sell digital
          goods, route newsletters, publish live media kits, and keep{" "}
          <span className="text-zinc-950 font-semibold">100% of your earnings</span>{" "}
          with zero platform take-rate.
        </p>

        {/* Handle Claim Input */}
        <form
          onSubmit={handleClaimSubmit}
          className="mt-10 max-w-lg mx-auto p-1.5 rounded-xl bg-white border border-zinc-200/90 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all flex items-center shadow-xl shadow-zinc-200/50"
        >
          <div className="pl-4 pr-1 text-sm font-mono text-zinc-400 select-none flex items-center gap-1">
            <span>webworks.io/</span>
          </div>
          <input
            type="text"
            value={handleInput}
            onChange={(e) =>
              setHandleInput(
                e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "")
              )
            }
            placeholder="yourhandle"
            className="flex-1 bg-transparent text-sm font-mono text-zinc-950 placeholder-zinc-400 focus:outline-none px-1"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all shrink-0 flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>Claim Handle</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
          </button>
        </form>

        {/* Floating Creator & Product UI Widgets (Desktop) */}
        <div className="hidden xl:block">
          {/* Widget 1: Floating Instant Sale Pill (Top Left) */}
          <div className="absolute -top-4 -left-12 p-3.5 rounded-xl bg-white/95 border border-zinc-200/90 backdrop-blur-xl text-left shadow-xl shadow-zinc-200/40 animate-float-gentle max-w-xs">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1.5">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                NEW SALE COMPLETED
              </span>
              <span>JUST NOW</span>
            </div>
            <div className="text-sm font-bold text-zinc-950 flex items-center justify-between">
              <span>Figma Design Tokens 2026</span>
              <span className="text-emerald-600 font-mono font-black ml-3">+$120.00</span>
            </div>
            <div className="mt-1 text-[10px] text-zinc-500 font-mono flex items-center gap-1.5">
              <span>Direct payout via Stripe</span>
              <span className="text-emerald-700 font-semibold">• 0% take-rate</span>
            </div>
          </div>

          {/* Widget 2: Floating Deal Card (Top Right) */}
          <div className="absolute top-16 -right-10 p-3.5 rounded-xl bg-white/95 border border-zinc-200/90 backdrop-blur-xl text-left shadow-xl shadow-zinc-200/40 animate-float-delayed max-w-xs">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1.5">
              <span className="text-zinc-500">VERIFIED BRAND DEAL</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">PAID</span>
            </div>
            <div className="text-sm font-bold text-zinc-950 flex items-center justify-between">
              <span>Linear Sponsorship</span>
              <span className="text-zinc-950 font-mono font-black ml-3">$4,500</span>
            </div>
            <div className="mt-1 text-[10px] text-zinc-500 font-mono">
              Deliverable: Dedicated Integration
            </div>
          </div>

          {/* Widget 3: Audience Metric (Bottom Left) */}
          <div className="absolute -bottom-8 -left-6 p-3 rounded-xl bg-white/95 border border-zinc-200/90 backdrop-blur-xl text-left shadow-xl shadow-zinc-200/40 animate-float-delayed hidden 2xl:block">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">
              LIVE AUDIENCE REACH
            </div>
            <div className="text-lg font-black text-zinc-950 font-mono flex items-center gap-2">
              <span>850,000+</span>
              <span className="text-[10px] text-emerald-600 font-semibold">+14% MoM</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Ribbon */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs font-mono uppercase tracking-wider text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-800 font-medium">0% Platform Take Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-zinc-800 font-medium">Direct Stripe Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-zinc-800 font-medium">Free Forever</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-zinc-800 font-medium">Custom Domains + SSL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
