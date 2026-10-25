"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const [handleInput, setHandleInput] = useState("");

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleInput.trim()) {
      window.location.href = `/signup?handle=${encodeURIComponent(handleInput.trim())}`;
    } else {
      window.location.href = `/signup`;
    }
  };

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs font-semibold text-zinc-700 mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Introducing Webworks 2.0</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 max-w-5xl mx-auto leading-[1.12]">
          Everything you need to build your{" "}
          <span className="text-zinc-500">creator business.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Share your work, sell digital products, grow your email list, collect tips, and manage brand deals — all from one place.
        </p>

        {/* Inline Claim Handle Form */}
        <form
          onSubmit={handleClaimSubmit}
          className="mt-10 max-w-md mx-auto p-1.5 rounded-2xl bg-white border border-zinc-200/90 flex items-center shadow-xl shadow-zinc-200/50"
        >
          <div className="pl-3.5 pr-1 text-sm font-medium text-zinc-400 select-none">
            webworks.io/
          </div>
          <input
            type="text"
            value={handleInput}
            onChange={(e) => setHandleInput(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
            placeholder="yourname"
            className="flex-1 bg-transparent text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none px-1"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-bold shadow-sm transition-all shrink-0 flex items-center gap-1.5 active:scale-95"
          >
            <span>Claim your handle</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Social Proof Stats */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-xs font-medium text-zinc-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Free forever • 0% platform fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-zinc-500" />
            <span>Get paid directly through Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-zinc-500" />
            <span>Custom domains and SSL included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
