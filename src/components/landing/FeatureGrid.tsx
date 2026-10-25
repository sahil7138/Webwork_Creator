"use client";

import React from "react";
import {
  Smartphone,
  ShoppingBag,
  Mail,
  TrendingUp,
  Briefcase,
  Zap,
  CheckCircle2,
  Sparkles,
  Users,
  Radio,
} from "lucide-react";

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-36 border-t border-zinc-200/80 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Master Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-[11px] font-mono uppercase tracking-widest text-zinc-600 mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>MODULE ARCHITECTURE // FIVE INTEGRATED ENGINES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-zinc-950 leading-[0.95]">
            Everything your creator business needs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-300">
              In one operating system.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Replace five separate subscriptions with one unified, zero-fee platform. Your bio page, digital store, audience CRM, media kit, and analytics communicate seamlessly.
          </p>
        </div>

        {/* STORYTELLING SECTION 01: UNIFIED BIO & PORTFOLIO BUILDER */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/95 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-400 hidden sm:block">
            [ 01 // 05 ] IDENTITY ENGINE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                <Smartphone className="w-3.5 h-3.5" /> Drag-and-Drop Bio Builder
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                Your portfolio, links, and work. Published in minutes.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Build a tactile, responsive creator profile with instant visual block hierarchy. Connect YouTube playlists, audio tracks, digital store collections, custom domains, and portfolio galleries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Custom Vanity Slug
                  </div>
                  <p className="text-xs text-zinc-600">
                    Host at webworks.io/yourname or map your own root domain with free automatic SSL.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Visual Theme Engine
                  </div>
                  <p className="text-xs text-zinc-600">
                    Switch between curated Studio Light, Porcelain, Slate, and Paper palettes on the fly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-7 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-xl shadow-zinc-200/40 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-zinc-600 ml-2 font-medium">webworks.io/alexa</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ● LIVE
                  </span>
                </div>

                {/* Simulated Block Reordering Demo */}
                <div className="mt-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-2xs hover:border-zinc-300 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs font-mono font-bold">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-950">Header & Verified Bio</div>
                        <div className="text-[10px] text-zinc-500 font-mono">@alexa • 850k Monthly Reach</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
                      PINNED
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-2xs hover:border-emerald-300 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center text-xs font-mono font-bold">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                          Digital Store Spotlight
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">3 ITEMS</span>
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">Figma UI Kit + Presets</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      100% PAYOUT
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-2xs hover:border-zinc-300 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs font-mono font-bold">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-950">Subscribers Newsletter Box</div>
                        <div className="text-[10px] text-zinc-500 font-mono">Automated Welcome Series</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-2xs hover:border-zinc-300 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs font-mono font-bold">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-950">Live Media Kit & Rate Card</div>
                        <div className="text-[10px] text-zinc-500 font-mono">Direct Brand Intake Form</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 02: 0% FEE DIGITAL STORE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/95 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-400 hidden sm:block">
            [ 02 // 05 ] COMMERCE ENGINE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual Demonstration */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-xl shadow-zinc-200/40 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-500">INSTANT CHECKOUT BREAKDOWN</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    STRIPE CONNECT DIRECT
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200 flex items-center gap-4 shadow-2xs">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-emerald-100 to-zinc-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-mono font-black text-lg">
                    UI
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-zinc-950 truncate">Design Systems Mastery 2026</div>
                    <div className="text-xs text-zinc-500">eBook + 65 Component Tokens</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black font-mono text-zinc-950">$120.00</div>
                    <div className="text-[10px] text-zinc-400">Gross Sale</div>
                  </div>
                </div>

                {/* Direct Comparison Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-zinc-200 space-y-2">
                    <div className="text-xs font-mono text-zinc-500">Legacy Platforms</div>
                    <div className="text-xs text-rose-600 font-mono font-bold">-10% Cut ($12.00)</div>
                    <div className="text-[11px] text-zinc-400">+$0.50 per transaction fee</div>
                    <div className="text-xs text-zinc-600 pt-1 border-t border-zinc-100">
                      You keep: <span className="font-bold text-zinc-950">$107.50</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Webworks 0% Fee
                    </div>
                    <div className="text-xs text-emerald-700 font-mono font-bold">$0.00 Platform Fee</div>
                    <div className="text-[11px] text-emerald-600">0% take-rate forever</div>
                    <div className="text-xs text-emerald-950 pt-1 border-t border-emerald-200 font-bold">
                      You keep: <span className="text-emerald-700 font-mono font-black">$120.00</span>*
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-zinc-400 text-center">
                  *Standard Stripe processing applies directly to your account.
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                <ShoppingBag className="w-3.5 h-3.5" /> Digital Commerce
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                Sell your work. Keep every single dollar.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Most platforms quietly siphon 5% to 10% of every sale you make. Webworks charges zero platform take-rate. E-books, Figma kits, presets, courses, and consultations settle instantly to your own Stripe account.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Instant Automated Delivery:</strong> Digital download links expire securely, protecting your files.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Apple Pay & Google Pay:</strong> Frictionless single-tap checkout on mobile devices.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Built-in Tip Jars:</strong> Accept community donations without third-party fees.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 03: AUDIENCE & EMAIL BROADCAST ENGINE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/95 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-400 hidden sm:block">
            [ 03 // 05 ] AUDIENCE DIRECT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                <Mail className="w-3.5 h-3.5" /> Direct Audience Relationship
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                Own your subscribers. Never lose them to an algorithm change.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Collect subscribers right from your link-in-bio, segment customers by purchase history, and broadcast markdown newsletters without ever paying Mailchimp or Substack tier penalties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Customer Tags & History
                  </div>
                  <p className="text-xs text-zinc-600">
                    Segment by buyers, VIP sponsors, and newsletter readers automatically.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <div className="text-xs font-mono font-bold text-zinc-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    CSV Export Anytime
                  </div>
                  <p className="text-xs text-zinc-600">
                    Your data is always 100% yours. One-click CSV export without locks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-xl shadow-zinc-200/40 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-700">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>AUDIENCE SEGMENTATION // LIVE</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-950">48,290 TOTAL</span>
                </div>

                {/* Subscribers table snippet */}
                <div className="space-y-2 text-xs font-mono">
                  {[
                    { email: "sarah.m@designlab.co", tag: "VIP BUYER", spend: "$240", date: "2m ago" },
                    { email: "marcus.k@studio.design", tag: "NEWSLETTER", spend: "$0", date: "14m ago" },
                    { email: "elena.v@techfoundry.io", tag: "COURSE ALUMNI", spend: "$180", date: "1h ago" },
                  ].map((sub, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white border border-zinc-200 flex items-center justify-between shadow-2xs hover:border-zinc-300 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-zinc-800">{sub.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                          {sub.tag}
                        </span>
                        <span className="text-emerald-700 font-bold">{sub.spend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Broadcast Composer Preview */}
                <div className="pt-3 border-t border-zinc-200">
                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>QUICK BROADCAST COMPOSER</span>
                      <span className="text-emerald-700 font-bold">READY TO SEND</span>
                    </div>
                    <div className="text-xs text-zinc-950 font-bold">
                      Subject: Edition #48 — The Future of Creator Software
                    </div>
                    <div className="text-[11px] text-zinc-500 line-clamp-1">
                      Today we are breaking down the exact mechanics of independent publishing...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 04: LIVE MEDIA KIT & SPONSORSHIP PIPELINE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/95 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-400 hidden sm:block">
            [ 04 // 05 ] SPONSORSHIP SUITE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual Demonstration */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-xl shadow-zinc-200/40 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-500">BRAND DEALS KANBAN</span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    $12,450 PIPELINE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-950">Linear — Dedicated YouTube Integration</span>
                      <span className="text-xs font-mono font-bold text-emerald-700">$4,500</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>Status: Contract Signed</span>
                      <span className="text-emerald-700 font-semibold">PAID VIA STRIPE</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-950">Raycast — Newsletter Primary Sponsor</span>
                      <span className="text-xs font-mono font-bold text-zinc-950">$1,850</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>Status: In Production</span>
                      <span className="text-amber-700 font-medium">AIRING NOV 4</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-950">Vercel — 3x Thread Sponsorship</span>
                      <span className="text-xs font-mono font-bold text-zinc-950">$2,250</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>Status: Proposal Sent</span>
                      <span className="text-zinc-500">AWAITING APPROVAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                <Briefcase className="w-3.5 h-3.5" /> Sponsorship Engine
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                Pitch brand deals like a high-end creative agency.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Ditch messy PDFs and static screenshots. Webworks turns your creator profile into an auto-updating live Media Kit with verified audience metrics, customizable rate cards, and a built-in proposal builder.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Auto-Verified Reach:</strong> Syncs YouTube, X, and Instagram statistics without manual Photoshop updates.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Rate Card Calculator:</strong> Set standard package rates for video integrations, newsletter headers, and socials.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700">
                    <strong className="text-zinc-950">Sponsor Intake Portal:</strong> Verified brands submit proposals directly to your dashboard inbox.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 05: REAL-TIME ATTRIBUTION & TELEMETRY */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/95 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-400 hidden sm:block">
            [ 05 // 05 ] TELEMETRY & ATTRIBUTION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                <Radio className="w-3.5 h-3.5" /> Live Traffic Telemetry
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                Understand what is converting in real time.
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Know where your highest-converting visitors come from. Track UTM campaigns, link click distributions, device breakdowns, and top referring social platforms with zero privacy-invasive tracking cookies.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">4.8%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Click-Through</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="text-xl sm:text-2xl font-black font-mono text-emerald-700">82%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Mobile Traffic</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950">0.0s</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Edge Latency</div>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-zinc-200/90 shadow-xl shadow-zinc-200/40 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <span className="text-zinc-500 uppercase">TOP REFERRING SOURCES</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    STREAMING LIVE
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-zinc-700 mb-1">
                      <span>YouTube Description Links</span>
                      <span className="text-zinc-950 font-bold">54% (12,840)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[54%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-700 mb-1">
                      <span>Instagram Bio & Stories</span>
                      <span className="text-zinc-950 font-bold">28% (6,420)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full bg-zinc-700 w-[28%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-700 mb-1">
                      <span>X / Twitter Threads</span>
                      <span className="text-zinc-950 font-bold">14% (3,280)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full bg-zinc-400 w-[14%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-700 mb-1">
                      <span>Direct & Bookmarks</span>
                      <span className="text-zinc-950 font-bold">4% (940)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full bg-zinc-300 w-[4%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
