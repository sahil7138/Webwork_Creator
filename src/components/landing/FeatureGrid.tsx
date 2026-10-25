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
    <section id="features" className="relative py-20 lg:py-28 border-t border-zinc-200/80 bg-zinc-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/90 text-xs font-semibold text-zinc-700 mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-zinc-900" /> All-in-One Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Six Built-In Engines. Zero Third-Party Chaos.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed">
            Designed according to modern SaaS principles. Every module feeds data into your central creator CRM and financial intelligence engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Beginner Profile & Portfolio Builder */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Beginner Profile & Portfolio Builder</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Launch your personal brand in 60 seconds. Choose 1-click role presets for developers, designers, photographers, writers, and creators with live project cards and sync.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> 1-Click role templates & work showcase
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Real-time mobile simulator & instant publish
              </li>
            </ul>
          </div>

          {/* Card 2: Digital Store */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Creator Store & Checkout</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sell eBooks, presets, Notion templates, video courses, and 1-on-1 coaching consultations with 1-click Apple Pay & Google Pay.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Stripe Connect direct creator payouts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Automated secure download links
              </li>
            </ul>
          </div>

          {/* Card 3: Audience CRM */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Audience CRM & Email Broadcasts</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Capture fan emails right on your profile. Auto-tag buyers, segment by activity, and send rich marketing newsletters with zero third-party fees.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Unlimited contact capture
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Auto-responder onboarding funnels
              </li>
            </ul>
          </div>

          {/* Card 4: Media Kit */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Live Media Kits & Sponsorships</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Never send a PDF again. Share a live, verified media kit with your audience demographics, past brand deliverables, and custom rate cards.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Direct brand inquiry intake forms
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Deal pipeline tracking from pitch to paid
              </li>
            </ul>
          </div>

          {/* Card 5: Sponsorship Proposal Builder */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Sponsorship Proposal Builder</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Assembles professional brand sponsorship pitches, rate card packages, and deliverable agreements backed by your live audience data.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Executive pitch email templates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Real-time rate packaging & deliverables
              </li>
            </ul>
          </div>

          {/* Card 6: Real-time Analytics */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Real-Time Attribution Analytics</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Know exactly which platform drives your income. Track clicks per block, conversion rates, visitor referrers, and geo-breakdowns.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> UTM campaign parameter tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Real-time visitor click heatmaps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
