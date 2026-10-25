"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/[0.08]">
          {/* Brand Mark & Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/20 flex items-center justify-center text-[#00FF66] font-mono font-black text-sm shadow-xs">
                W
              </div>
              <span className="text-base font-black uppercase text-white tracking-tight">
                Webworks // The Creator OS
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono max-w-md">
              The unified operating system for digital commerce, audience CRM, media kits, and creator portfolios. 100% free with 0% platform take-rate.
            </p>
          </div>

          {/* System Telemetry & Quick Links */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL // 99.98% UPTIME</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Link
                href="/p/alexa"
                className="hover:text-[#00FF66] transition-colors flex items-center gap-1 group"
              >
                <span>Demo Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#00FF66]" />
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-[#00FF66] transition-colors"
              >
                Creator Studio
              </Link>
              <Link
                href="/login"
                className="hover:text-[#00FF66] transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © 2026 Webworks Protocol. All creator rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>ENC: 256-BIT SSL</span>
            <span>•</span>
            <span>STRIPE CONNECT CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
