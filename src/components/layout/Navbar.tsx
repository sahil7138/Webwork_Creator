"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & System Metric */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white group-hover:scale-105 transition-all shadow-xs relative overflow-hidden">
            <span className="font-black text-sm tracking-widest text-emerald-400">W</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-black text-base text-zinc-950 tracking-tight uppercase">
                Webworks
              </span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/90 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                OS 2.4
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Creator Operating System
            </span>
          </div>
        </Link>

        {/* Navigation Links with Monospace Indexing */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-600">
          <a
            href="#features"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors">
              [01]
            </span>
            <span>Modules</span>
          </a>
          <a
            href="#interactive-preview"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors">
              [02]
            </span>
            <span>Simulator</span>
          </a>
          <a
            href="#calculator"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors">
              [03]
            </span>
            <span>Economics</span>
          </a>
          <a
            href="#pricing"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group"
          >
            <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors">
              [04]
            </span>
            <span>Zero-Fee</span>
          </a>
          <Link
            href="/p/alexa"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group text-zinc-700"
          >
            <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors">
              [05]
            </span>
            <span>Live Demo</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-600" />
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-zinc-950 px-3.5 py-2 transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
            <span>Launch Studio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
