"use client";

import React from "react";
import Link from "next/link";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/80">
        {/* Left: Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-2xs">
            <span className="font-extrabold text-xs">W</span>
          </div>
          <span className="font-bold text-sm text-zinc-950 tracking-tight">
            Webworks
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="flex items-center gap-7 text-xs font-medium text-zinc-500">
          <a href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-zinc-950 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Pricing
          </a>
          <a href="#creators" className="hover:text-zinc-950 transition-colors">
            Creators
          </a>
        </nav>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-3 text-zinc-400">
          <YoutubeIcon className="w-4 h-4 hover:text-zinc-950 transition-colors cursor-pointer" />
          <InstagramIcon className="w-4 h-4 hover:text-zinc-950 transition-colors cursor-pointer" />
          <TikTokIcon className="w-4 h-4 hover:text-zinc-950 transition-colors cursor-pointer" />
          <TwitterIcon className="w-4 h-4 hover:text-zinc-950 transition-colors cursor-pointer" />
          <LinkedInIcon className="w-4 h-4 hover:text-zinc-950 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
        <div>© 2026 Webworks. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-zinc-600 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-zinc-600 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
