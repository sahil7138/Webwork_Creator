import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function PricingCards() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5" /> Simple pricing. No monthly subscription.
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 mt-1 tracking-tight">
          Free to use. <span className="text-zinc-500">Keep what you earn.</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed">
          You get access to the full Webworks platform without a monthly subscription or Webworks transaction fee.
        </p>
      </div>

      {/* Main Single Master Card: 100% Free Creator Tier */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-12 shadow-xl shadow-zinc-200/60 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Cost & Guarantee */}
          <div className="md:col-span-5 space-y-4 border-b md:border-b-0 md:border-r border-zinc-200 pb-8 md:pb-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-zinc-900" /> Everything included
            </div>

            <div className="text-5xl sm:text-6xl font-extrabold text-zinc-950 tracking-tight">
              $0
              <span className="text-base font-normal text-zinc-500 ml-2">forever</span>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              No credit card. No trial. No feature tiers. Use the platform for free.
            </p>

            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-800 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Webworks platform fee</span>
              </div>
            </div>

            <Link
              href="/signup"
              className="w-full mt-4 py-3.5 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Create your free page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Everything Included */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Everything is included:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlimited links and profile customization</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlimited digital products and downloads</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Connect your own domain with SSL included</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Collect and manage subscribers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Send email newsletters</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Live media kit with updated stats</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sponsorship proposals and rate cards</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct Stripe payouts through Stripe Connect</span>
              </div>
            </div>

            {/* Comparison Pill */}
            <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span>Some creator platforms charge a monthly subscription and/or transaction fees.</span>
              <span className="text-emerald-700 font-bold shrink-0">Webworks: $0 platform fee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
