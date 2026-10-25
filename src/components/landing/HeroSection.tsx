"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

export function HeroSection() {
  const creators = [
    {
      name: "Alex Carter",
      category: "Content Creator",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Priya Sharma",
      category: "Content Creator",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Daniel Kim",
      category: "Content Creator",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Sophia Patel",
      category: "Content Creator",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Ryan Cooper",
      category: "Content Creator",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6 pb-8 sm:pb-12">
      {/* Massive White Rounded Container */}
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 shadow-soft-card overflow-hidden flex flex-col justify-between items-center text-center min-h-[680px]">
        {/* Very Subtle Lavender Glow & Faint Orbit Line */}
        <div className="absolute inset-0 lavender-glow-hero pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-purple-200/30 pointer-events-none" />

        {/* Top Eyebrow Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/70 shadow-2xs mb-8">
          <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-[9px] font-black">
            W
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase text-purple-700">
            The Creator Operating System
          </span>
        </div>

        {/* Center Content with Lots of Clean Space */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-zinc-950 leading-[1.12]">
            Build your <br />
            <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
              creator business
            </span>{" "}
            <br />
            with ease.
          </h1>

          <p className="mt-6 text-sm sm:text-base text-zinc-600 max-w-lg mx-auto leading-relaxed">
            Turn your audience into revenue with a simple platform designed for
            creators. Upload, manage, and sell your content effortlessly.
          </p>

          {/* Primary Minimal Black CTA */}
          <Link
            href="/signup"
            className="mt-8 px-7 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

          {/* Social Platform Card */}
          <div className="mt-8 px-5 py-2.5 rounded-full bg-white border border-purple-200/60 shadow-xs flex items-center justify-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
              <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Facebook</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-700" />
              <span className="hidden sm:inline">LinkedIn</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
              <TwitterIcon className="w-3.5 h-3.5 text-zinc-950" />
              <span className="hidden sm:inline">X</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span className="hidden sm:inline">Instagram</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 font-medium">
              <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
              <span className="hidden sm:inline">YouTube</span>
            </span>
          </div>
        </div>

        {/* Bottom Horizontal Creator Profile Pills */}
        <div className="relative z-10 w-full pt-16 sm:pt-20">
          <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-2 scrollbar-none px-2 max-w-5xl mx-auto">
            {creators.map((creator, i) => (
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

          {/* Mobile pagination indicator dots (as shown in screenshot) */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3">
            <span className="w-4 h-1 rounded-full bg-zinc-400" />
            <span className="w-1.5 h-1 rounded-full bg-zinc-200" />
            <span className="w-1.5 h-1 rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
