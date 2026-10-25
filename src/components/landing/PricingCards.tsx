"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Sparkles } from "lucide-react";

export function PricingCards() {
  return (
    <section id="pricing" className="relative py-24 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,255,102,0.06),transparent_70%)] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#00FF66] mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ZERO-SUBSCRIPTION PROTOCOL</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          100% Free. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-emerald-400">Keep what you earn.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
          Full platform access. Zero monthly subscription tiers. Zero platform transaction cut. Settle directly through Stripe Connect.
        </p>
      </div>

      {/* Main Master Monolith Card */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#09090c]/90 border border-white/15 p-8 sm:p-14 shadow-2xl backdrop-blur-2xl relative overflow-hidden group hover:border-[#00FF66]/40 transition-all z-10">
        {/* Decorative Corner Tech Brackets */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-700 select-none">
          + TIER // UNLIMITED_FREE
        </div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-[#00FF66] select-none">
          STATUS: UNRESTRICTED
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Price & CTA */}
          <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> All Features Included
            </div>

            <div className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
              <span>$0</span>
              <span className="text-sm font-mono font-normal text-zinc-500 uppercase">
                / FOREVER
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              No credit card required. No 14-day paywalls. Creators retain 100% of product sales and sponsorships.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 space-y-1">
              <div className="flex items-center gap-2 text-[#00FF66] font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>0% Webworks Platform Fee</span>
              </div>
              <div className="text-[11px] text-zinc-500">
                You only pay Stripe standard processing (2.9% + 30¢).
              </div>
            </div>

            <Link
              href="/signup"
              className="w-full py-4 px-6 rounded-xl bg-[#00FF66] hover:bg-[#1eff7c] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,102,0.3)] transition-all active:scale-95 cursor-pointer"
            >
              <span>Create Your Free Account</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>

          {/* Right Column: Full Feature Roster */}
          <div className="md:col-span-7 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              UNRESTRICTED ACCESS INCLUDES:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Unlimited blocks, links, and themes</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Unlimited digital store products</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Custom domain mapping + free SSL</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Direct Stripe Connect payouts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Audience CRM & contact tagging</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Email newsletter broadcasts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Live auto-updating media kit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                <span>Sponsorship proposal pitch builder</span>
              </div>
            </div>

            {/* Platform Take-Rate Contrast */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-zinc-500">
              <span>Standard Creator Platforms: 5% - 10% take-rate</span>
              <span className="text-[#00FF66] font-bold">Webworks: 0.00% take-rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
