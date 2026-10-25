"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function PricingCards() {
  return (
    <section id="pricing" className="relative py-24 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono uppercase tracking-widest text-emerald-800 mb-4 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-SUBSCRIPTION PROTOCOL</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950">
          100% Free. <span className="text-emerald-600">Keep what you earn.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed font-normal">
          Full platform access. Zero monthly subscription tiers. Zero platform transaction cut. Settle directly through Stripe Connect.
        </p>
      </div>

      {/* Main Master Monolith Card */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white/95 border border-zinc-200/90 p-8 sm:p-14 shadow-xl shadow-zinc-200/50 backdrop-blur-2xl relative overflow-hidden group hover:border-zinc-300 transition-all z-10">
        {/* Decorative Corner Tech Brackets */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-400 select-none">
          + TIER // UNLIMITED_FREE
        </div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-emerald-600 select-none font-bold">
          STATUS: UNRESTRICTED
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Price & CTA */}
          <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-zinc-200 pb-8 md:pb-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> All Features Included
            </div>

            <div className="text-6xl sm:text-7xl font-black text-zinc-950 font-mono tracking-tight flex items-baseline gap-2">
              <span>$0</span>
              <span className="text-sm font-mono font-normal text-zinc-500 uppercase">
                / FOREVER
              </span>
            </div>

            <p className="text-xs text-zinc-600 font-mono leading-relaxed">
              No credit card required. No 14-day paywalls. Creators retain 100% of product sales and sponsorships.
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/90 text-xs font-mono text-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>0% Webworks Platform Fee</span>
              </div>
              <div className="text-[11px] text-zinc-500">
                You only pay Stripe standard processing (2.9% + 30¢).
              </div>
            </div>

            <Link
              href="/signup"
              className="w-full py-4 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Create Your Free Account</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 stroke-[3]" />
            </Link>
          </div>

          {/* Right Column: Full Feature Roster */}
          <div className="md:col-span-7 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              UNRESTRICTED ACCESS INCLUDES:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlimited blocks, links, and themes</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlimited digital store products</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom domain mapping + free SSL</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct Stripe Connect payouts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Audience CRM & contact tagging</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Email newsletter broadcasts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Live auto-updating media kit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sponsorship proposal pitch builder</span>
              </div>
            </div>

            {/* Platform Take-Rate Contrast */}
            <div className="pt-4 border-t border-zinc-100 text-xs font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-zinc-500">
              <span>Standard Creator Platforms: 5% - 10% take-rate</span>
              <span className="text-emerald-700 font-bold">Webworks: 0.00% take-rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
