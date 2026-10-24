"use client";

import React, { useState } from "react";
import { Sparkles, DollarSign, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function RevenueCalculator() {
  const [followers, setFollowers] = useState<number>(45000);
  const [digitalProductsCount, setDigitalProductsCount] = useState<number>(3);
  const [avgProductPrice, setAvgProductPrice] = useState<number>(45);

  // Approximate realistic creator monetization model:
  // 1.5% profile click-through, 2.2% store conversion, plus estimated brand deals per tier
  const monthlyProfileViews = Math.round(followers * 0.18);
  const monthlyStoreVisitors = Math.round(monthlyProfileViews * 0.22);
  const storePurchases = Math.max(5, Math.round(monthlyStoreVisitors * 0.028));
  const productRevenue = storePurchases * avgProductPrice;

  // Monthly brand deals estimation based on audience size
  const brandDealRevenue =
    followers < 10000
      ? 450
      : followers < 50000
      ? 2200
      : followers < 150000
      ? 5800
      : 14500;

  // Community tips & memberships
  const tipsRevenue = Math.round(followers * 0.015);

  const totalEstimatedMonthly = productRevenue + brandDealRevenue + tipsRevenue;

  return (
    <div className="relative rounded-3xl p-8 lg:p-12 glass-panel border border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="ambient-glow-purple -top-32 -right-32 opacity-40 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
            <Zap className="w-3.5 h-3.5" /> Interactive Earnings Model
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Calculate your earning potential with <span className="text-gradient-purple">Webworks</span>
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Unlike fragmented link-in-bio tools, Webworks combines your storefront, community tips,
            automated newsletter sales funnels, and verified brand deal kits in one workflow.
          </p>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Followers */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-slate-300">Total Social Audience</span>
                <span className="text-violet-400 font-bold">
                  {followers.toLocaleString()} followers
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
              />
            </div>

            {/* Slider 2: Average Product Price */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-slate-300">Average Digital Product Price</span>
                <span className="text-cyan-400 font-bold">${avgProductPrice} USD</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgProductPrice}
                onChange={(e) => setAvgProductPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-violet-500/30 shadow-xl shadow-violet-950/40 relative">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Estimated Monthly Earnings
          </div>

          <div className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-1 tracking-tight">
            {formatCurrency(totalEstimatedMonthly)}
            <span className="text-sm font-normal text-slate-400 ml-1.5">/ month</span>
          </div>

          <div className="text-xs text-emerald-400 font-medium flex items-center gap-1 mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Free • 0% platform fee for all creators
          </div>

          <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Digital Store Sales</span>
              <span className="font-semibold text-white">{formatCurrency(productRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Brand Sponsorships</span>
              <span className="font-semibold text-white">{formatCurrency(brandDealRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Tips & Memberships</span>
              <span className="font-semibold text-white">{formatCurrency(tipsRevenue)}/mo</span>
            </div>
          </div>

          <a
            href="/dashboard"
            className="w-full mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all"
          >
            Claim Your Free Webworks Handle <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
