import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5">
            <div className="w-full h-full bg-[#090d1a] rounded-[6px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-violet-400" />
            </div>
          </div>
          <span className="text-sm font-bold text-white">Webworks Creator Platform</span>
        </div>

        <p className="text-xs text-slate-500">
          © 2026 Webworks Inc. All rights reserved. Built for independent creators.
        </p>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <Link href="/p/alexa" className="hover:text-white transition-colors">
            Demo Profile
          </Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </footer>
  );
}
