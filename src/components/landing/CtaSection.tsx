"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-14">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-r from-[#fbf8fe] via-[#f7f3fd] to-white border border-purple-100 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Ambient Radial Background */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(233,213,255,0.35),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 text-left">
          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>Ready To Start?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
              Your audience is already there. <br />
              <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                Let&apos;s give them something to do.
              </span>
            </h2>

            <div>
              <Link
                href="/signup"
                className="px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Creator & Newsletter Cards */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Floating Creator Pill (Top) */}
            <div className="p-3 rounded-2xl bg-white/95 border border-purple-200/80 shadow-soft-card flex items-center justify-between gap-3 animate-float-gentle max-w-sm ml-auto">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Sahil"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-zinc-950">@sahilcreates</div>
                  <div className="text-[10px] text-zinc-400">Content Creator</div>
                </div>
              </div>
              <button className="px-3.5 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold shadow-2xs transition-colors shrink-0">
                Follow
              </button>
            </div>

            {/* Floating Newsletter Card (Bottom) */}
            <div className="p-4 rounded-2xl bg-white/95 border border-purple-200/80 shadow-soft-card flex items-center justify-between gap-3 animate-float-delayed max-w-sm ml-auto">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950">Join my email list</div>
                  <div className="text-[10px] text-zinc-500">Get updates, new drops and more.</div>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
