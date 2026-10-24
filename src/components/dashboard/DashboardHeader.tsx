"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ExternalLink, Check, Copy } from "lucide-react";
import { DEMO_CREATOR } from "@/lib/constants";

export function DashboardHeader() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/p/${DEMO_CREATOR.username}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080c16]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5 shadow-md shadow-violet-500/20">
              <div className="w-full h-full bg-[#090d1a] rounded-[6px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>
            </div>
            <span className="font-extrabold text-base text-white">Webworks Studio</span>
          </Link>

          <span className="text-slate-600">/</span>

          {/* Live profile pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-mono">webworks.ai/{DEMO_CREATOR.username}</span>
            <button
              onClick={handleCopy}
              className="ml-1 text-slate-400 hover:text-white p-0.5 rounded transition-colors"
              title="Copy profile link"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/p/${DEMO_CREATOR.username}`}
            target="_blank"
            className="px-3 py-1.5 rounded-xl border border-white/15 hover:bg-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-all"
          >
            <span>View Public Bio</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          {/* Creator Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <img
              src={DEMO_CREATOR.avatarUrl}
              alt={DEMO_CREATOR.displayName}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-violet-500"
            />
            <span className="text-xs font-medium text-white hidden sm:inline">
              {DEMO_CREATOR.displayName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
