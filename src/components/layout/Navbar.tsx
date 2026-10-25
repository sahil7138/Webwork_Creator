"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#050505]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & System Metric */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-white/20 flex items-center justify-center text-white group-hover:border-[#00FF66]/60 transition-all shadow-xs relative overflow-hidden">
            <span className="font-black text-sm tracking-widest text-[#00FF66]">W</span>
            <div className="absolute inset-0 bg-[#00FF66]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-base text-white tracking-tight uppercase">
                Webworks
              </span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 text-[#00FF66] border border-[#00FF66]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                OS 2.4
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Creator Operating System
            </span>
          </div>
        </Link>

        {/* Navigation Links with Biova Monospace Indexing */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
          <a
            href="#features"
            className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-600 group-hover:text-[#00FF66]/70 transition-colors">
              [01]
            </span>
            <span>Modules</span>
          </a>
          <a
            href="#interactive-preview"
            className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-600 group-hover:text-[#00FF66]/70 transition-colors">
              [02]
            </span>
            <span>Simulator</span>
          </a>
          <a
            href="#calculator"
            className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-600 group-hover:text-[#00FF66]/70 transition-colors">
              [03]
            </span>
            <span>Economics</span>
          </a>
          <a
            href="#pricing"
            className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-600 group-hover:text-[#00FF66]/70 transition-colors">
              [04]
            </span>
            <span>Zero-Fee</span>
          </a>
          <Link
            href="/p/alexa"
            className="hover:text-[#00FF66] transition-colors flex items-center gap-1.5 group text-zinc-300"
          >
            <span className="text-zinc-600 group-hover:text-[#00FF66]/70 transition-colors">
              [05]
            </span>
            <span>Live Demo</span>
            <ArrowUpRight className="w-3 h-3 text-[#00FF66]" />
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white px-3.5 py-2 transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2.5 rounded-lg bg-[#00FF66] hover:bg-[#19ff78] text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,102,0.25)] hover:shadow-[0_0_30px_rgba(0,255,102,0.5)] active:scale-95 flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Launch Studio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
