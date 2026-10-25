"use client";

import React, { useState } from "react";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
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
    <div className="relative rounded-3xl p-8 lg:p-12 bg-white border border-zinc-200/90 shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-zinc-950" /> See what you could earn
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
            Try a simple earnings estimate based on your audience and products.
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Webworks brings your store, tips, audience, and brand deals together, so you can manage your creator business from one place.
          </p>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Followers */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-zinc-600">Total Social Audience <span className="text-xs text-zinc-400 font-normal">(sample audience)</span></span>
                <span className="text-zinc-950 font-bold">
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
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
              />
            </div>

            {/* Slider 2: Average Product Price */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-zinc-600">Average Digital Product Price <span className="text-xs text-zinc-400 font-normal">(example)</span></span>
                <span className="text-zinc-950 font-bold">${avgProductPrice} USD</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={avgProductPrice}
                onChange={(e) => setAvgProductPrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
              />
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-zinc-950 border border-zinc-800 text-white shadow-2xl relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Estimated Monthly Earnings
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-medium">
              Example estimate
            </span>
          </div>

          <div className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-1 tracking-tight">
            {formatCurrency(totalEstimatedMonthly)}
            <span className="text-sm font-normal text-zinc-400 ml-1.5">/ month</span>
          </div>

          <div className="text-xs text-emerald-400 font-medium flex items-center gap-1 mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> Free forever • 0% Webworks platform fee
          </div>

          <div className="space-y-3 pt-3 border-t border-zinc-800 text-xs">
            <div className="flex justify-between text-zinc-300">
              <span className="text-zinc-400">Digital Store Sales</span>
              <span className="font-semibold text-white">{formatCurrency(productRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span className="text-zinc-400">Brand Sponsorships</span>
              <span className="font-semibold text-white">{formatCurrency(brandDealRevenue)}/mo</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span className="text-zinc-400">Tips & Memberships</span>
              <span className="font-semibold text-white">{formatCurrency(tipsRevenue)}/mo</span>
            </div>
          </div>

          <a
            href="/dashboard"
            className="w-full mt-6 py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            Create your free Webworks page <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
