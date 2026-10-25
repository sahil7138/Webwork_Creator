"use client";

import React, { useState } from "react";
import {
  Smartphone,
  ShoppingBag,
  Mail,
  TrendingUp,
  Briefcase,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
  DollarSign,
  Users,
  ChevronRight,
  Flame,
  Globe,
  Radio,
} from "lucide-react";

export function FeatureGrid() {
  const [activeModule, setActiveModule] = useState<number>(1);

  return (
    <section id="features" className="relative py-24 sm:py-36 border-t border-white/[0.08] overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,102,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,255,102,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Master Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
            <span>MODULE ARCHITECTURE // FIVE INTEGRATED ENGINES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-white leading-[0.95]">
            Everything your creator business needs.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-700">
              In one operating system.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Replace five separate subscriptions with one unified, zero-fee platform. Your bio page, digital store, audience CRM, media kit, and analytics communicate seamlessly.
          </p>
        </div>

        {/* STORYTELLING SECTION 01: UNIFIED BIO & PORTFOLIO BUILDER */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-600 hidden sm:block">
            [ 01 // 05 ] IDENTITY ENGINE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
                <Smartphone className="w-3.5 h-3.5" /> Drag-and-Drop Bio Builder
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Your portfolio, links, and work. Published in minutes.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Build a tactile, responsive creator profile with instant visual block hierarchy. Connect YouTube playlists, audio tracks, digital store collections, custom domains, and portfolio galleries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                    Custom Vanity Slug
                  </div>
                  <p className="text-xs text-zinc-400">
                    Host at webworks.io/yourname or map your own root domain with free automatic SSL.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                    Visual Theme Engine
                  </div>
                  <p className="text-xs text-zinc-400">
                    Switch between curated Studio Light, Porcelain, Slate, and Paper palettes on the fly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-7 rounded-2xl bg-[#09090c] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-zinc-500 ml-2">webworks.io/alexa</span>
                  </div>
                  <span className="text-[#00FF66] font-bold">● LIVE</span>
                </div>

                {/* Simulated Block Reordering Demo */}
                <div className="mt-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between group/item hover:border-[#00FF66]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-mono">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Header & Verified Bio</div>
                        <div className="text-[10px] text-zinc-400 font-mono">@alexa • 850k Monthly Reach</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800">
                      PINNED
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between group/item hover:border-[#00FF66]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/60 text-[#00FF66] border border-[#00FF66]/30 flex items-center justify-center text-xs font-mono">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          Digital Store Spotlight
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#00FF66] text-black font-extrabold">3 ITEMS</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 font-mono">Figma UI Kit + Presets</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#00FF66] font-bold">
                      100% PAYOUT
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between group/item hover:border-[#00FF66]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-mono">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Subscribers Newsletter Box</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Automated Welcome Series</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between group/item hover:border-[#00FF66]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-mono">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Live Media Kit & Rate Card</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Direct Brand Intake Form</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 02: 0% FEE DIGITAL STORE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-600 hidden sm:block">
            [ 02 // 05 ] COMMERCE ENGINE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual Demonstration (Product & Split Comparison) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400">INSTANT CHECKOUT BREAKDOWN</span>
                  <span className="text-[10px] font-mono font-bold text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/30">
                    STRIPE CONNECT DIRECT
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-emerald-900 to-zinc-900 border border-emerald-500/30 flex items-center justify-center text-[#00FF66] font-mono font-black text-lg">
                    UI
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white truncate">Design Systems Mastery 2026</div>
                    <div className="text-xs text-zinc-400">eBook + 65 Component Tokens</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black font-mono text-white">$120.00</div>
                    <div className="text-[10px] text-zinc-500">Gross Sale</div>
                  </div>
                </div>

                {/* Direct Comparison Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-zinc-400">Legacy Platforms</div>
                    <div className="text-xs text-red-400 font-mono font-bold">-10% Cut ($12.00)</div>
                    <div className="text-[11px] text-zinc-500">+$0.50 per transaction fee</div>
                    <div className="text-xs text-zinc-400 pt-1 border-t border-white/5">
                      You keep: <span className="font-bold text-zinc-300">$107.50</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#00FF66]/5 border border-[#00FF66]/30 space-y-2 shadow-[0_0_20px_rgba(0,255,102,0.1)]">
                    <div className="text-xs font-mono font-bold text-[#00FF66] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Webworks 0% Fee
                    </div>
                    <div className="text-xs text-[#00FF66] font-mono font-bold">$0.00 Platform Fee</div>
                    <div className="text-[11px] text-zinc-400">0% take-rate forever</div>
                    <div className="text-xs text-white pt-1 border-t border-white/10 font-bold">
                      You keep: <span className="text-[#00FF66] font-mono font-black">$120.00</span>*
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 text-center">
                  *Standard Stripe processing applies directly to your account.
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
                <ShoppingBag className="w-3.5 h-3.5" /> Digital Commerce
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Sell your work. Keep every single dollar.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Most platforms quietly siphon 5% to 10% of every sale you make. Webworks charges zero platform take-rate. E-books, Figma kits, presets, courses, and consultations settle instantly to your own Stripe account.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Instant Automated Delivery:</strong> Digital download links expire securely, protecting your files.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Apple Pay & Google Pay:</strong> Frictionless single-tap checkout on mobile devices.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Built-in Tip Jars:</strong> Accept community donations without third-party fees.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 03: AUDIENCE & EMAIL BROADCAST ENGINE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-600 hidden sm:block">
            [ 03 // 05 ] AUDIENCE DIRECT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
                <Mail className="w-3.5 h-3.5" /> Direct Audience Relationship
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Own your subscribers. Never lose them to an algorithm change.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Collect subscribers right from your link-in-bio, segment customers by purchase history, and broadcast markdown newsletters without ever paying Mailchimp or Substack tier penalties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                    Customer Tags & History
                  </div>
                  <p className="text-xs text-zinc-400">
                    Segment by buyers, VIP sponsors, and newsletter readers automatically.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                    CSV Export Anytime
                  </div>
                  <p className="text-xs text-zinc-400">
                    Your data is always 100% yours. One-click CSV export without locks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Users className="w-4 h-4 text-[#00FF66]" />
                    <span>AUDIENCE SEGMENTATION // LIVE</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">48,290 TOTAL</span>
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
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#00FF66]" />
                        <span className="text-zinc-200">{sub.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {sub.tag}
                        </span>
                        <span className="text-[#00FF66] font-bold">{sub.spend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Broadcast Composer Preview */}
                <div className="pt-3 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>QUICK BROADCAST COMPOSER</span>
                      <span className="text-[#00FF66]">READY TO SEND</span>
                    </div>
                    <div className="text-xs text-white font-bold">
                      Subject: Edition #48 — The Future of Creator Software
                    </div>
                    <div className="text-[11px] text-zinc-400 line-clamp-1">
                      Today we are breaking down the exact mechanics of independent publishing...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 04: LIVE MEDIA KIT & SPONSORSHIP PIPELINE */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-600 hidden sm:block">
            [ 04 // 05 ] SPONSORSHIP SUITE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual Demonstration (Pipeline) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-white/10 shadow-2xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400">BRAND DEALS KANBAN</span>
                  <span className="text-xs font-mono font-bold text-[#00FF66]">$12,450 PIPELINE</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Linear — Dedicated YouTube Integration</span>
                      <span className="text-xs font-mono font-bold text-[#00FF66]">$4,500</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Status: Contract Signed</span>
                      <span className="text-[#00FF66]">PAID VIA STRIPE</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Raycast — Newsletter Primary Sponsor</span>
                      <span className="text-xs font-mono font-bold text-white">$1,850</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Status: In Production</span>
                      <span className="text-amber-400">AIRING NOV 4</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">Vercel — 3x Thread Sponsorship</span>
                      <span className="text-xs font-mono font-bold text-white">$2,250</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Status: Proposal Sent</span>
                      <span className="text-zinc-500">AWAITING APPROVAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
                <Briefcase className="w-3.5 h-3.5" /> Sponsorship Engine
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Pitch brand deals like a high-end creative agency.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Ditch messy PDFs and static screenshots. Webworks turns your creator profile into an auto-updating live Media Kit with verified audience metrics, customizable rate cards, and a built-in proposal builder.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Auto-Verified Reach:</strong> Syncs YouTube, X, and Instagram statistics without manual Photoshop updates.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Rate Card Calculator:</strong> Set standard package rates for video integrations, newsletter headers, and socials.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white">Sponsor Intake Portal:</strong> Verified brands submit proposals directly to your dashboard inbox.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STORYTELLING SECTION 05: REAL-TIME ATTRIBUTION & TELEMETRY */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="absolute top-8 right-8 font-mono text-xs text-zinc-600 hidden sm:block">
            [ 05 // 05 ] TELEMETRY & ATTRIBUTION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 text-[10px] font-mono uppercase tracking-wider text-[#00FF66]">
                <Radio className="w-3.5 h-3.5" /> Live Traffic Telemetry
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Understand what is converting in real time.
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Know where your highest-converting visitors come from. Track UTM campaigns, link click distributions, device breakdowns, and top referring social platforms with zero privacy-invasive tracking cookies.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">4.8%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Click-Through</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xl sm:text-2xl font-black font-mono text-[#00FF66]">82%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Mobile Traffic</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">0.0s</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Edge Latency</div>
                </div>
              </div>
            </div>

            {/* Right Visual Demonstration */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-white/10 shadow-2xl space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-zinc-400 uppercase">TOP REFERRING SOURCES</span>
                  <span className="text-[#00FF66] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                    STREAMING LIVE
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>YouTube Description Links</span>
                      <span className="text-white font-bold">54% (12,840)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-[#00FF66] w-[54%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Instagram Bio & Stories</span>
                      <span className="text-white font-bold">28% (6,420)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-white w-[28%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>X / Twitter Threads</span>
                      <span className="text-white font-bold">14% (3,280)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-zinc-400 w-[14%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-300 mb-1">
                      <span>Direct & Bookmarks</span>
                      <span className="text-white font-bold">4% (940)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-zinc-600 w-[4%]" />
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
