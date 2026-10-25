"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ExternalLink,
  Lock,
  Sparkles,
} from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-12">
      {/* Massive Rounded Hero Card */}
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden min-h-[720px] flex flex-col justify-between items-center text-center">
        {/* Soft Lavender Radial Ambient Glow */}
        <div className="absolute inset-0 lavender-glow-hero pointer-events-none" />

        {/* Faint Orbital Curved Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] orbit-ring pointer-events-none opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] orbit-ring pointer-events-none opacity-40" />

        {/* Top Eyebrow Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/70 shadow-2xs mb-6">
          <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-[9px] font-black">
            W
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-purple-700">
            The Creator Operating System
          </span>
        </div>

        {/* Center Headline & Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-zinc-950 leading-[1.06]">
            Build your <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
              creator business
            </span>{" "}
            <br className="hidden sm:inline" />
            with ease.
          </h1>

          <p className="mt-5 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Turn your audience into revenue with a simple platform to sell digital
            products, grow your email list, get brand deals, and more.
          </p>

          {/* Primary Black CTA Button */}
          <Link
            href="/signup"
            className="mt-6 px-7 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

          {/* Social Platforms Pill Card */}
          <div className="mt-8 px-4 py-2 rounded-full bg-white/90 border border-zinc-200/80 shadow-xs flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-zinc-700">
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                <YoutubeIcon className="w-3.5 h-3.5 text-red-500" /> YouTube
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" /> Instagram
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                <TikTokIcon className="w-3.5 h-3.5 text-zinc-950" /> TikTok
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                <TwitterIcon className="w-3.5 h-3.5 text-zinc-800" /> X
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
              </span>
            </div>
            <div className="hidden sm:block w-px h-3.5 bg-zinc-200" />
            <span className="text-[11px] text-zinc-500">
              Connect your socials and start growing.
            </span>
          </div>
        </div>

        {/* Floating Left Creator Card (Desktop / Tablet) */}
        <div className="hidden lg:block absolute left-8 top-16 w-64 p-4 rounded-3xl bg-white/95 border border-zinc-200/80 shadow-float text-left animate-float-left z-20">
          {/* Top Follower Growth Tag */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" /> +12.5k
            </span>
            <span className="text-[10px] text-zinc-400 font-medium">New Followers</span>
          </div>

          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden mb-3 aspect-[4/3] bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              alt="Sahil Shaikh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Creator Details */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-950">@sahilcreates</div>
              <div className="text-[10px] text-zinc-500">Content Creator</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-100 mb-3">
            <span className="font-extrabold text-zinc-950">162K</span>
            <span className="text-[10px] text-zinc-400">Followers</span>
            <div className="flex items-center gap-1 text-zinc-400">
              <InstagramIcon className="w-3 h-3" />
              <YoutubeIcon className="w-3 h-3" />
              <TikTokIcon className="w-3 h-3" />
            </div>
          </div>

          <Link
            href="/p/alexa"
            className="w-full py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-[11px] font-bold flex items-center justify-center transition-colors"
          >
            View Store
          </Link>
        </div>

        {/* Floating Right Revenue & Product Cards (Desktop / Tablet) */}
        <div className="hidden lg:block absolute right-8 top-16 w-64 space-y-3 animate-float-right z-20 text-left">
          {/* Card 1: Total Revenue Card */}
          <div className="p-4 rounded-3xl bg-white/95 border border-zinc-200/80 shadow-float">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">Total Revenue</span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                ↑ 24%
              </span>
            </div>
            <div className="text-2xl font-black text-zinc-950 mt-1 mb-2">
              $4,892
            </div>

            {/* Smooth Purple Wave Sparkline */}
            <svg
              className="w-full h-8 text-purple-500 overflow-visible"
              viewBox="0 0 100 25"
              fill="none"
            >
              <path
                d="M 0,20 Q 25,5 50,15 T 100,2"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0,20 Q 25,5 50,15 T 100,2 L 100,25 L 0,25 Z"
                fill="url(#purpleGlowGrad)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="purpleGlowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Card 2: Digital Product Overlay Card */}
          <div className="p-3.5 rounded-3xl bg-white/95 border border-zinc-200/80 shadow-float flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-900/10 overflow-hidden shrink-0 border border-purple-100">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-zinc-950 truncate">
                Digital Preset Pack
              </div>
              <div className="text-xs font-black text-zinc-950">$19</div>
            </div>
            <button className="px-3 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold shadow-xs transition-colors shrink-0">
              Buy Now
            </button>
          </div>
        </div>

        {/* Bottom Horizontal Creator Profile Pills */}
        <div className="relative z-10 w-full pt-12 border-t border-zinc-100/80 mt-12">
          <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-2 scrollbar-none px-2">
            {[
              {
                name: "Aarav Sharma",
                category: "Content Creator",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
              },
              {
                name: "Diya Patel",
                category: "Lifestyle Creator",
                avatar:
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
              },
              {
                name: "Rohan Mehta",
                category: "Tech Creator",
                avatar:
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80",
              },
              {
                name: "Sana Khan",
                category: "Fashion Creator",
                avatar:
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
              },
              {
                name: "Kunal Joshi",
                category: "Content Creator",
                avatar:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
              },
              {
                name: "Neha Verma",
                category: "Content Creator",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
              },
            ].map((creator, i) => (
              <div
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-2xs flex items-center gap-2.5 shrink-0 hover:border-purple-300 transition-colors"
              >
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-5 h-5 rounded-full object-cover ring-1 ring-zinc-200"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-zinc-900 leading-tight">
                    {creator.name}
                  </span>
                  <span className="text-[9px] text-zinc-400 leading-tight">
                    {creator.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
