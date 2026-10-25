"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Check,
  Mail,
  Edit2,
  FolderGit2,
  ShoppingBag,
  TrendingUp,
  Radio,
} from "lucide-react";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("links");

  return (
    <section id="features" className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Lavender Background Glow */}
        <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(233,213,255,0.3),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>Everything You Need</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.1]">
              The tools to grow <br />
              <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                your creator business.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              From your profile to brand deals, everything you need is in one place. No more juggling multiple tools.
            </p>

            <div className="pt-2">
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Webworks Dashboard UI Preview */}
          <div className="lg:col-span-7 relative">
            {/* Floating Subscribers Pill (Top Right) */}
            <div className="absolute -top-4 right-4 sm:right-10 px-4 py-2 rounded-2xl bg-white/95 border border-purple-200/80 shadow-float z-30 flex items-center gap-2.5 animate-float-delayed text-left">
              <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-black text-zinc-950">+1,250</div>
                <div className="text-[10px] text-zinc-400">Total Subscribers</div>
              </div>
            </div>

            {/* Floating Checkmark Pill (Left Center) */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/25 z-30 animate-float-gentle">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>

            {/* Main Interactive Studio Mockup */}
            <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-soft-card p-5 sm:p-7 space-y-5 text-left relative overflow-hidden">
              {/* Studio Header Row */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-200 overflow-hidden ring-1 ring-zinc-200">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Sahil Shaikh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-950">Sahil Shaikh</h4>
                    <p className="text-[10px] text-zinc-400">webworks.io/sahil</p>
                  </div>
                </div>

                <button className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 text-[11px] font-medium flex items-center gap-1.5 hover:bg-zinc-100 transition-colors">
                  <Edit2 className="w-3 h-3 text-zinc-400" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Navigation Tabs inside dashboard */}
              <div className="flex items-center gap-4 text-xs font-medium border-b border-zinc-100 pb-2">
                {[
                  { id: "links", label: "Links" },
                  { id: "store", label: "Store" },
                  { id: "mediakit", label: "Media Kit" },
                  { id: "analytics", label: "Analytics" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`pb-1 transition-all ${
                      activeTab === t.id
                        ? "text-purple-600 font-bold border-b-2 border-purple-600"
                        : "text-zinc-500 hover:text-zinc-950"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Body Split: Digital Store & Recent Sales */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                {/* Left Mini Products List */}
                <div className="sm:col-span-6 space-y-2">
                  {[
                    {
                      title: "Preset Pack",
                      price: "$19",
                      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                    },
                    {
                      title: "Editing Bundle",
                      price: "$49",
                      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
                    },
                    {
                      title: "Creator Guide",
                      price: "$9",
                      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
                    },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-zinc-50/80 border border-zinc-100 flex items-center gap-2.5 hover:border-zinc-200 transition-colors"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-9 h-9 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-zinc-950 truncate">
                          {p.title}
                        </div>
                        <div className="text-[10px] text-zinc-400">{p.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Latest Sales Feed */}
                <div className="sm:col-span-6 p-3 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Latest Sales
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between items-center text-zinc-800">
                      <span className="truncate">Digital Preset Pack</span>
                      <span className="text-[10px] text-zinc-500 font-mono">2 sold</span>
                    </div>
                    <div className="flex justify-between items-center text-zinc-800">
                      <span className="truncate">Editing Bundle</span>
                      <span className="text-[10px] text-zinc-500 font-mono">1 sold</span>
                    </div>
                    <div className="flex justify-between items-center text-zinc-800">
                      <span className="truncate">Creator Guide</span>
                      <span className="text-[10px] text-zinc-500 font-mono">4 sold</span>
                    </div>
                  </div>

                  {/* Creator Photo Preview Box */}
                  <div className="rounded-xl overflow-hidden h-24 bg-zinc-200 mt-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                      alt="Sahil in studio"
                      className="w-full h-full object-cover"
                    />
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
