import React from "react";
import {
  Layers,
  Smartphone,
  ShoppingBag,
  Mail,
  TrendingUp,
  Briefcase,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 lg:py-28 border-t border-white/5 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" /> All-in-One Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Six Built-In Engines. Zero Third-Party Chaos.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Designed according to modern SaaS principles. Every module feeds data into your central creator CRM and financial intelligence engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Page Builder */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-5 border border-violet-500/30">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Visual Block Page Builder</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Drag-and-drop link trees, rich video players, Spotify/Apple Music embeds, custom headers, and instant mobile responsive previews.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" /> Preset curated themes & custom CSS
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" /> Subdomain & custom vanity URLs
              </li>
            </ul>
          </div>

          {/* Card 2: Digital Store */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-5 border border-cyan-500/30">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Creator Store & Checkout</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sell eBooks, presets, Notion templates, video courses, and 1-on-1 coaching consultations with 1-click Apple Pay & Google Pay.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Stripe Connect direct creator payouts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Automated secure download links
              </li>
            </ul>
          </div>

          {/* Card 3: Audience CRM */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-500/30">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Audience CRM & Email Broadcasts</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capture fan emails right on your profile. Auto-tag buyers, segment by activity, and send rich marketing newsletters with zero third-party fees.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Unlimited contact capture
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Auto-responder onboarding funnels
              </li>
            </ul>
          </div>

          {/* Card 4: Media Kit */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-600/20 text-rose-400 flex items-center justify-center mb-5 border border-rose-500/30">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live Media Kits & Sponsorships</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Never send a PDF again. Share a live, verified media kit with your audience demographics, past brand deliverables, and custom rate cards.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Direct brand inquiry intake forms
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Deal pipeline tracking from pitch to paid
              </li>
            </ul>
          </div>

          {/* Card 5: Sponsorship Proposal Builder */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sponsorship Proposal Builder</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assembles professional brand sponsorship pitches, rate card packages, and deliverable agreements backed by your live audience data.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Executive pitch email templates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Real-time rate packaging & deliverables
              </li>
            </ul>
          </div>

          {/* Card 6: Real-time Analytics */}
          <div className="p-7 rounded-3xl glass-panel border border-white/10 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-5 border border-indigo-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Attribution Analytics</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Know exactly which platform drives your income. Track clicks per block, conversion rates, visitor referrers, and geo-breakdowns.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> UTM campaign parameter tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Real-time visitor click heatmaps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
