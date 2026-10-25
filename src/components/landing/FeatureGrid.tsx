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
            <Layers className="w-3.5 h-3.5 text-zinc-900" /> Everything in one place
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Six tools to help you run your creator business.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed">
            Your profile, store, audience, sponsorships, and analytics work together, so you spend less time switching between tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Profile & Portfolio */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Profile & Portfolio</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Create a professional profile in minutes. Add your work, links, projects, and social accounts, then publish everything from one page.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Ready-to-use templates for different creator types
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Preview your page and publish changes instantly
              </li>
            </ul>
          </div>

          {/* Card 2: Digital Store */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Sell your digital products</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sell ebooks, presets, templates, courses, and consultations directly from your profile.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Get paid directly through Stripe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Secure, automatic product delivery
              </li>
            </ul>
          </div>

          {/* Card 3: Audience CRM */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Grow and manage your audience</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Collect email subscribers from your profile, organize them by activity, and send newsletters without needing another platform.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Collect and manage your subscribers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Automated welcome emails
              </li>
            </ul>
          </div>

          {/* Card 4: Media Kit */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Your media kit, always up to date</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Share a live media kit with your audience stats, previous work, services, and rates. Update it whenever your numbers change.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Let brands contact you directly
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Keep track of brand conversations and deals
              </li>
            </ul>
          </div>

          {/* Card 5: Sponsorship Proposal Builder */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Create sponsorship proposals</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Create brand proposals using your profile, audience data, rates, and planned deliverables.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Ready-to-edit pitch templates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Build packages and define deliverables
              </li>
            </ul>
          </div>

          {/* Card 6: Real-time Analytics */}
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-5 border border-zinc-200">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Understand what is working</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                See where your visitors come from and which parts of your profile get the most attention.
              </p>
            </div>
            <ul className="mt-5 space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> Track campaigns with UTM links
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" /> See which links visitors interact with
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
