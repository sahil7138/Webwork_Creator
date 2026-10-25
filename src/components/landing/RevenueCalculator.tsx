"use client";

import React, { useState } from "react";
import { ArrowRight, Zap, ShieldCheck, DollarSign, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function RevenueCalculator() {
  const [followers, setFollowers] = useState<number>(65000);
  const [avgProductPrice, setAvgProductPrice] = useState<number>(49);

  // Realistic creator monetization mechanics
  const monthlyProfileViews = Math.round(followers * 0.2);
  const monthlyStoreVisitors = Math.round(monthlyProfileViews * 0.25);
  const storePurchases = Math.max(8, Math.round(monthlyStoreVisitors * 0.032));
  const productRevenue = storePurchases * avgProductPrice;

  // Monthly brand deals estimation based on audience size
  const brandDealRevenue =
    followers < 10000
      ? 600
      : followers < 50000
      ? 2800
      : followers < 150000
      ? 6500
      : 16000;

  // Community tips & direct supporters
  const tipsRevenue = Math.round(followers * 0.018);

  const totalEstimatedMonthly = productRevenue + brandDealRevenue + tipsRevenue;
  const legacyPlatformLostCut = Math.round(productRevenue * 0.1);
  const annualSavedWithWebworks = legacyPlatformLostCut * 12;

  return (
    <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#09090c]/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Decorative Technical Grid & Corner Elements */}
      <div className="absolute top-6 right-8 font-mono text-[10px] text-zinc-600 hidden sm:block">
        [ FINANCIAL_MODEL // REVENUE_SIMULATOR_V2 ]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
            <Zap className="w-3.5 h-3.5" /> Direct Creator Economics
          </div>

          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Calculate your monthly earnings. Keep every dollar.
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Adjust your audience reach and product price. Webworks charges zero platform take-rate, meaning you never surrender a percentage of your livelihood to middlemen.
          </p>

          <div className="space-y-6 pt-3">
            {/* Slider 1: Followers */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400 uppercase">Total Social Audience</span>
                <span className="text-white font-bold text-sm bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {followers.toLocaleString()} FOLLOWERS
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00FF66]"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>5K</span>
                <span>250K</span>
                <span>500K</span>
              </div>
            </div>

            {/* Slider 2: Average Product Price */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400 uppercase">Average Digital Product Price</span>
                <span className="text-[#00FF66] font-bold text-sm bg-emerald-950/60 px-2.5 py-1 rounded border border-[#00FF66]/30">
                  ${avgProductPrice} USD
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgProductPrice}
                onChange={(e) => setAvgProductPrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00FF66]"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                <span>$10</span>
                <span>$125</span>
                <span>$250</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Terminal */}
        <div className="lg:col-span-5 rounded-2xl p-7 bg-[#050507] border border-white/15 text-white shadow-2xl relative space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              PROJECTED MONTHLY REVENUE
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20">
              0% PLATFORM FEE
            </span>
          </div>

          <div>
            <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
              <span className="text-[#00FF66]">$</span>
              <span>{totalEstimatedMonthly.toLocaleString()}</span>
              <span className="text-xs font-mono text-zinc-500 font-normal">/MO</span>
            </div>
            <div className="text-xs font-mono text-zinc-400 mt-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FF66]" />
              <span>Direct Stripe settlement • Zero take-rate</span>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs font-mono">
            <div className="flex justify-between text-zinc-400">
              <span>Digital Store Sales</span>
              <span className="text-white font-bold">{formatCurrency(productRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Brand Deals & Sponsorships</span>
              <span className="text-white font-bold">{formatCurrency(brandDealRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Community Tips & Support</span>
              <span className="text-white font-bold">{formatCurrency(tipsRevenue)}/mo</span>
            </div>
          </div>

          {/* Savings Highlight vs Legacy Platforms */}
          <div className="p-3.5 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/30 text-xs font-mono text-[#00FF66] flex items-center justify-between">
            <span>SAVED VS 10% PLATFORM FEES:</span>
            <span className="font-black text-white">+{formatCurrency(annualSavedWithWebworks)}/yr</span>
          </div>

          <a
            href="/dashboard"
            className="w-full py-3.5 px-4 rounded-xl bg-[#00FF66] hover:bg-[#1eff7c] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,102,0.3)] transition-all active:scale-95 cursor-pointer"
          >
            <span>Launch Your Page at 100% Payout</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>
      </div>
    </div>
  );
}
