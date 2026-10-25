"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="h-16 px-6 sm:px-8 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between transition-all">
        {/* Left: Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-sm tracking-wide">W</span>
          </div>
          <span className="font-bold text-base text-zinc-950 tracking-tight">
            Webworks
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-600">
          <a
            href="#features"
            className="hover:text-zinc-950 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-zinc-950 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="hover:text-zinc-950 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#creators"
            className="hover:text-zinc-950 transition-colors"
          >
            Creators
          </a>
        </nav>

        {/* Right: Auth & Get Started CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors px-2 py-1"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-xs active:scale-95 flex items-center gap-1.5"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
