"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#06080e]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-750 flex items-center justify-center text-white group-hover:border-zinc-500 transition-colors">
            <span className="font-extrabold text-sm tracking-wider">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              Webworks
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                CREATOR OS
              </span>
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#interactive-preview" className="hover:text-white transition-colors">
            Live Preview
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            Earnings Model
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <Link href="/p/alexa" className="hover:text-white flex items-center gap-1 transition-colors">
            Demo Profile <ExternalLink className="w-3 h-3" />
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white px-3.5 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-sm font-bold shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>Creator Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
