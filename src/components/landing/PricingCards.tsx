import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function PricingCards() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">
          Simple, Transparent Pricing
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Keep More of What You Earn
        </h2>
        <p className="text-sm text-slate-400 mt-3">
          Start completely free, and upgrade to 0% platform transaction fees as your creative business grows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Plan */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Starter</div>
            <div className="text-4xl font-extrabold text-white mt-3 mb-1">$0</div>
            <div className="text-xs text-slate-400 mb-6">Free forever, no credit card required</div>

            <div className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Unlimited link-in-bio blocks
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sell up to 3 digital products
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Capture up to 500 email subscribers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 9% transaction fee on store sales
              </div>
            </div>
          </div>

          <Link
            href="/signup"
            className="mt-8 w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-bold text-center transition-all"
          >
            Get Started Free
          </Link>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-violet-500/80 shadow-2xl shadow-violet-950/60 relative flex flex-col justify-between">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
            Most Popular
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-violet-400">Creator Pro</div>
            <div className="text-4xl font-extrabold text-white mt-3 mb-1">
              $19<span className="text-sm font-normal text-slate-400 ml-1">/month</span>
            </div>
            <div className="text-xs text-slate-400 mb-6">For creators scaling serious monetization</div>

            <div className="space-y-3 text-xs text-slate-200 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />{" "}
                <strong className="text-white">0% Platform Transaction Fee</strong>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Unlimited digital products & courses
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Connect your own custom domain
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Up to 10,000 email subscribers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Live Media Kit & Brand Deals Pipeline
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Sponsorship Proposal & Rate Card Builder
              </div>
            </div>
          </div>

          <Link
            href="/signup?plan=pro"
            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold text-center shadow-lg shadow-violet-500/30 transition-all"
          >
            Upgrade to Pro
          </Link>
        </div>

        {/* Studio Plan */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Studio & Agency</div>
            <div className="text-4xl font-extrabold text-white mt-3 mb-1">
              $49<span className="text-sm font-normal text-slate-400 ml-1">/month</span>
            </div>
            <div className="text-xs text-slate-400 mb-6">For top creators, agencies and teams</div>

            <div className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Everything in Pro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Manage up to 5 creator workspaces
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Unlimited email subscribers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Dedicated account manager & custom CSS
              </div>
            </div>
          </div>

          <Link
            href="/signup?plan=studio"
            className="mt-8 w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-bold text-center transition-all"
          >
            Contact Studio Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
