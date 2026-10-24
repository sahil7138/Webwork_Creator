"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Heart,
  Mail,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Users,
  BookOpen,
  ArrowRight,
  FolderGit2,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { CREATOR_THEMES, DEMO_CREATOR, DEMO_PORTFOLIO_PROJECTS } from "@/lib/constants";
import { CreatorTheme } from "@/types";

export function PhonePreview() {
  const [activeTab, setActiveTab] = useState<"links" | "portfolio" | "store" | "mediakit">("portfolio");
  const [currentTheme, setCurrentTheme] = useState<CreatorTheme>(CREATOR_THEMES[0]);
  const [tipAmount, setTipAmount] = useState<number>(5);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [tipSent, setTipSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 3000);
      setUserEmail("");
    }
  };

  const handleTip = () => {
    setTipSent(true);
    setTimeout(() => setTipSent(false), 2500);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Theme Switcher Pills */}
      <div className="flex items-center gap-2 p-1.5 mb-6 rounded-full glass-panel border border-white/10 z-20">
        <span className="text-xs font-medium text-slate-400 px-2.5">Theme:</span>
        {CREATOR_THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setCurrentTheme(theme)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              currentTheme.id === theme.id
                ? "bg-white text-zinc-950 font-bold shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Realistic Mobile Device Frame */}
      <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[48px] p-3 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-2xl shadow-black/80 border-4 border-neutral-700/60 ring-1 ring-white/10">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-800" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Inner Phone Screen */}
        <div
          className={`relative w-full h-full rounded-[38px] overflow-hidden flex flex-col ${currentTheme.background} transition-colors duration-500`}
        >
          {/* Top Status Bar */}
          <div className="w-full pt-3 px-6 flex justify-between items-center text-[11px] font-medium text-slate-300 z-30 select-none">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span>5G</span>
              <div className="w-5 h-2.5 rounded-sm border border-slate-300/80 p-0.5 flex items-center">
                <div className="w-3 h-full bg-white rounded-xs" />
              </div>
            </div>
          </div>

          {/* Nav / Tabs inside creator page */}
          <div className="mt-4 px-2 flex justify-center gap-1 border-b border-white/5 pb-2.5">
            <button
              onClick={() => setActiveTab("links")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === "links"
                  ? "bg-white text-zinc-950 font-bold shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Links
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "portfolio"
                  ? "bg-white text-zinc-950 font-bold shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FolderGit2 className="w-3 h-3 text-zinc-300" /> Portfolio
            </button>
            <button
              onClick={() => setActiveTab("store")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "store"
                  ? "bg-white text-zinc-950 font-bold shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShoppingBag className="w-3 h-3 text-zinc-300" /> Store
            </button>
            <button
              onClick={() => setActiveTab("mediakit")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "mediakit"
                  ? "bg-white text-zinc-950 font-bold shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <TrendingUp className="w-3 h-3 text-zinc-300" /> Stats
            </button>
          </div>

          {/* Scrollable Content inside phone */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scrollbar-none">
            {/* Creator Header Profile */}
            <div className="text-center flex flex-col items-center">
              <div className="relative mb-2">
                <img
                  src={DEMO_CREATOR.avatarUrl}
                  alt={DEMO_CREATOR.displayName}
                  className="w-18 h-18 rounded-full object-cover ring-1 ring-white/20 shadow-lg"
                />
                <span className="absolute bottom-0 right-0 p-1 bg-white text-zinc-950 rounded-full shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-semibold text-base text-white flex items-center gap-1">
                {DEMO_CREATOR.displayName}
              </h3>
              <p className="text-xs text-slate-400 max-w-[240px] mt-0.5 line-clamp-2">
                {DEMO_CREATOR.bio}
              </p>

              {/* Social Icons Bar */}
              <div className="flex items-center gap-3 mt-2.5 text-slate-400">
                <a href="#instagram" className="hover:text-pink-400 transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#youtube" className="hover:text-red-400 transition-colors">
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#twitter" className="hover:text-sky-400 transition-colors">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TAB 1: LINKS & BLOCKS */}
            {activeTab === "links" && (
              <div className="space-y-2.5 pt-1">
                {/* Product Block */}
                <div
                  className={`p-3 rounded-2xl border transition-all ${currentTheme.cardBg} hover:scale-[1.01]`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80"
                      alt="UI Book"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-zinc-400 tracking-wider">
                          BESTSELLER
                        </span>
                        <span className="text-xs font-bold text-white">$49</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white truncate mt-0.5">
                        Mastering Modern UI
                      </h4>
                      <p className="text-[10px] text-slate-400 truncate">
                        240pg Guide + 40 Figma components
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Link Block */}
                <a
                  href="#discord"
                  className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${currentTheme.cardBg} hover:border-white/20`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Private Creator Community
                      </div>
                      <div className="text-[10px] text-slate-400">
                        4,200+ engineers & builders
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* Email Newsletter Box */}
                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-300" />
                    <span className="text-xs font-semibold text-white">Weekly Design Digest</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2">
                    Actionable creator tips delivered every Tuesday.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-1.5">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 text-[11px] px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/40"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-[11px] font-bold shrink-0 shadow-sm"
                    >
                      {emailSubscribed ? "✓ Joined" : "Join"}
                    </button>
                  </form>
                </div>

                {/* Tip Jar Block */}
                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Support the Work
                    </span>
                    <span className="text-[10px] text-slate-400">Instant tip</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-2">
                    {[3, 5, 10].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setTipAmount(amt)}
                        className={`py-1 rounded-lg text-xs font-medium border transition-all ${
                          tipAmount === amt
                            ? "bg-white text-zinc-950 font-bold border-white"
                            : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleTip}
                    className="w-full py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold shadow-sm active:scale-95 transition-all"
                  >
                    {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Tip`}
                  </button>
                </div>
              </div>
            )}

            {/* TAB: PORTFOLIO SHOWCASE */}
            {activeTab === "portfolio" && (
              <div className="space-y-3 pt-1 text-left">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Selected Projects ({DEMO_PORTFOLIO_PROJECTS.length})</span>
                  <span className="text-zinc-400 font-medium">Interactive Demo</span>
                </div>

                {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className={`overflow-hidden border ${currentTheme.cardBg} ${currentTheme.buttonRadius} group transition-all hover:scale-[1.01]`}
                  >
                    <div className="relative h-28 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={proj.thumbnailUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-200">
                        {proj.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-white line-clamp-1">
                        {proj.title}
                      </h4>
                      <p className="text-[10px] text-slate-300 line-clamp-2 mt-1 leading-snug">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2 mb-2.5">
                        {proj.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[8px] px-1.5 py-0.2 rounded bg-white/10 text-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: STORE */}
            {activeTab === "store" && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>3 Digital Products</span>
                  <span className="text-cyan-400">Instant Delivery</span>
                </div>
                {[
                  {
                    title: "Mastering Modern UI Architecture",
                    price: 49,
                    type: "Interactive eBook + Files",
                    sales: "1,240 sold",
                    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&q=80",
                  },
                  {
                    title: "Glassmorphism Micro-Interactions Kit",
                    price: 39,
                    type: "React & Tailwind Library",
                    sales: "885 sold",
                    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=200&q=80",
                  },
                  {
                    title: "1-on-1 Design & SaaS Advisory",
                    price: 180,
                    type: "45-min Zoom deep-dive",
                    sales: "64 completed",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80",
                  },
                ].map((prod, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border ${currentTheme.cardBg} flex gap-3 items-center`}
                  >
                    <img
                      src={prod.img}
                      alt={prod.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">{prod.title}</h4>
                      <p className="text-[10px] text-slate-400 truncate">{prod.type}</p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-xs font-bold text-emerald-400">${prod.price}</span>
                        <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-medium transition-all">
                          Get Access
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: MEDIA KIT */}
            {activeTab === "mediakit" && (
              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-2xl border bg-zinc-900 border-zinc-800 text-center">
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Verified Creator Stats
                  </span>
                  <div className="text-xl font-bold text-white mt-0.5">850,000+</div>
                  <div className="text-[10px] text-slate-400">Total Monthly Audience Reach</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2.5 rounded-xl border ${currentTheme.cardBg}`}>
                    <div className="text-[10px] text-slate-400">Engagement</div>
                    <div className="text-sm font-bold text-white mt-0.5">5.4%</div>
                    <div className="text-[9px] text-emerald-400">3x industry avg</div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${currentTheme.cardBg}`}>
                    <div className="text-[10px] text-slate-400">Audience Geo</div>
                    <div className="text-sm font-bold text-white mt-0.5">68% US/UK</div>
                    <div className="text-[9px] text-slate-400">Tech & Design</div>
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="text-xs font-semibold text-white mb-2">Sponsorship Rates</div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-300">
                      <span>YouTube Dedicated Video</span>
                      <span className="font-bold text-white">$3,500</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Newsletter Header Sponsor</span>
                      <span className="font-bold text-white">$950</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>X / Twitter Thread</span>
                      <span className="font-bold text-white">$750</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold shadow-sm">
                    Inquire for Collaboration
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Branding Badge inside preview */}
          <div className="py-2.5 text-center bg-black/40 border-t border-white/5 z-20">
            <span className="text-[10px] text-slate-500 font-medium tracking-wide">
              Powered by <span className="text-white font-semibold">Webworks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
