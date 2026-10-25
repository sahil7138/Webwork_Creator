"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Check, Copy } from "lucide-react";
import { DEMO_CREATOR } from "@/lib/constants";

export function DashboardHeader() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/p/${DEMO_CREATOR.username}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-extrabold text-xs shadow-2xs">
              W
            </div>
            <span className="font-extrabold text-base text-zinc-950">Webworks Studio</span>
          </Link>

          <span className="text-zinc-300">/</span>

          {/* Live profile pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/80 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-700 font-mono text-[11px]">webworks.io/{DEMO_CREATOR.username}</span>
            <button
              onClick={handleCopy}
              className="ml-1 text-zinc-500 hover:text-zinc-950 p-0.5 rounded transition-colors"
              title="Copy profile link"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/p/${DEMO_CREATOR.username}`}
            target="_blank"
            className="px-3 py-1.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700 hover:text-zinc-950 flex items-center gap-1.5 transition-all shadow-2xs"
          >
            <span>View Public Bio</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </Link>

          {/* Creator Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-zinc-200">
            <img
              src={DEMO_CREATOR.avatarUrl}
              alt={DEMO_CREATOR.displayName}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-300"
            />
            <span className="text-xs font-semibold text-zinc-800 hidden sm:inline">
              {DEMO_CREATOR.displayName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
