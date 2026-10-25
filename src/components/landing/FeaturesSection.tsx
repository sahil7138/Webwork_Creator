"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Home,
  ShoppingBag,
  Users,
  Briefcase,
  BarChart2,
  Settings,
  Download,
  FileText,
  TrendingUp,
} from "lucide-react";

export function FeaturesSection() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <section
      id="features"
      className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-10"
    >
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Lavender Background Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(233,213,255,0.25),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>Features</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              The tools to grow <br />
              <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                your creator business.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              Everything you need in one place — from your profile to brand deals, all designed to help you create, connect and earn.
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

          {/* Right Column: Clean Studio Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-soft-card p-5 sm:p-6 text-left relative overflow-hidden flex flex-col md:flex-row gap-5">
              {/* Left Mini Sidebar */}
              <div className="w-full md:w-36 shrink-0 border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0 md:pr-4 flex md:flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">
                      W
                    </div>
                    <span className="text-xs font-bold text-zinc-950">Webworks</span>
                  </div>

                  <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
                    {[
                      { id: "home", label: "Home", icon: Home },
                      { id: "products", label: "Products", icon: ShoppingBag },
                      { id: "audience", label: "Audience", icon: Users },
                      { id: "mediakit", label: "Media Kit", icon: FileText },
                      { id: "deals", label: "Brand Deals", icon: Briefcase },
                      { id: "analytics", label: "Analytics", icon: BarChart2 },
                      { id: "settings", label: "Settings", icon: Settings },
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = activeMenu === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveMenu(item.id)}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-[11px] transition-colors shrink-0 text-left ${
                            active
                              ? "bg-purple-50 text-purple-700 font-bold"
                              : "text-zinc-500 hover:text-zinc-950"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 min-w-0 space-y-4">
                {/* Top Profile & Metrics Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Sahil"
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-zinc-950">Sahil Shaikh</div>
                      <div className="text-[10px] text-zinc-400">Content Creator</div>
                    </div>
                  </div>

                  {/* 3 Metrics */}
                  <div className="flex items-center gap-4 text-left">
                    <div>
                      <div className="text-[11px] font-black text-zinc-950">12.4k</div>
                      <div className="text-[9px] text-zinc-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-zinc-950">2.4k</div>
                      <div className="text-[9px] text-zinc-400">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-zinc-950 flex items-center gap-1">
                        $4,892
                        <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded font-bold">
                          +18%
                        </span>
                      </div>
                      <div className="text-[9px] text-zinc-400">Total Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Split: Recent Sales & Subscribers Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Recent Sales Box */}
                  <div className="p-3.5 rounded-2xl bg-zinc-50/70 border border-zinc-100 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-zinc-950">Recent Sales</span>
                      <span className="text-[10px] text-purple-600 font-medium cursor-pointer">
                        View All
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {[
                        { title: "Preset Pack", price: "$19", time: "2h ago", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" },
                        { title: "Editing Bundle", price: "$49", time: "5h ago", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" },
                        { title: "Creator Guide", price: "$9", time: "8h ago", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <img src={item.img} alt={item.title} className="w-6 h-6 rounded-md object-cover" />
                            <span className="text-[11px] font-medium text-zinc-800">{item.title}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] font-bold text-zinc-950">{item.price}</span>
                            <span className="text-[9px] text-zinc-400 block">{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subscribers & Media Kit Box */}
                  <div className="p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100/80 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500 font-medium">Subscribers</div>
                      <div className="text-lg font-black text-zinc-950 mt-0.5">2,480</div>
                      <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-2.5 h-2.5" /> + 12% this week
                      </div>

                      <div className="w-full h-8 text-purple-500 mt-2">
                        <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible" fill="none">
                          <path
                            d="M 0,20 Q 30,5 60,14 T 100,4"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-purple-100/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-zinc-950">Media Kit</span>
                      <button className="px-2.5 py-1 rounded-full bg-white border border-purple-200 text-purple-700 text-[10px] font-bold flex items-center gap-1 hover:bg-purple-50 transition-colors shadow-2xs">
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
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
