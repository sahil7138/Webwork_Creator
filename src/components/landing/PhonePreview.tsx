"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ShoppingBag,
  Heart,
  Mail,
  CheckCircle2,
  TrendingUp,
  Users,
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
      <div className="flex items-center gap-2 p-1.5 mb-6 rounded-full bg-white border border-zinc-200 shadow-sm z-20">
        <span className="text-xs font-medium text-zinc-500 px-2.5">Theme:</span>
        {CREATOR_THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setCurrentTheme(theme)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              currentTheme.id === theme.id
                ? "bg-zinc-950 text-white font-bold shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Realistic Mobile Device Frame */}
      <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[48px] p-3 bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 shadow-2xl shadow-zinc-400/40 border-4 border-zinc-300 ring-1 ring-zinc-400/30">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-950 rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Inner Phone Screen */}
        <div
          className={`relative w-full h-full rounded-[38px] overflow-hidden flex flex-col ${currentTheme.background} transition-colors duration-500 border border-zinc-200/50`}
        >
          {/* Top Status Bar */}
          <div className="w-full pt-3 px-6 flex justify-between items-center text-[11px] font-medium text-zinc-600 z-30 select-none">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-zinc-600">
              <span>5G</span>
              <div className="w-5 h-2.5 rounded-xs border border-zinc-500 p-0.5 flex items-center">
                <div className="w-3 h-full bg-zinc-800 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Nav / Tabs inside creator page */}
          <div className="mt-4 px-2 flex justify-center gap-1 border-b border-zinc-200/80 pb-2.5">
            <button
              onClick={() => setActiveTab("links")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === "links"
                  ? "bg-zinc-950 text-white font-bold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              Links
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "portfolio"
                  ? "bg-zinc-950 text-white font-bold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <FolderGit2 className="w-3 h-3" /> Portfolio
            </button>
            <button
              onClick={() => setActiveTab("store")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "store"
                  ? "bg-zinc-950 text-white font-bold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <ShoppingBag className="w-3 h-3" /> Store
            </button>
            <button
              onClick={() => setActiveTab("mediakit")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                activeTab === "mediakit"
                  ? "bg-zinc-950 text-white font-bold shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <TrendingUp className="w-3 h-3" /> Stats
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
                  className="w-18 h-18 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <span className="absolute bottom-0 right-0 p-1 bg-zinc-950 text-white rounded-full shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="font-bold text-base text-zinc-950 flex items-center gap-1">
                {DEMO_CREATOR.displayName}
              </h3>
              <p className="text-xs text-zinc-600 max-w-[240px] mt-0.5 line-clamp-2">
                {DEMO_CREATOR.bio}
              </p>

              {/* Social Icons Bar */}
              <div className="flex items-center gap-3 mt-2.5 text-zinc-500">
                <a href="#instagram" className="hover:text-pink-600 transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#youtube" className="hover:text-red-600 transition-colors">
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a href="#twitter" className="hover:text-zinc-950 transition-colors">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TAB 1: LINKS & BLOCKS */}
            {activeTab === "links" && (
              <div className="space-y-2.5 pt-1">
                {/* Product Block */}
                <div
                  className={`p-3 rounded-2xl border transition-all ${currentTheme.cardBg} hover:shadow-sm`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80"
                      alt="UI Book"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-zinc-500 tracking-wider">
                          POPULAR
                        </span>
                        <span className="text-xs font-bold text-zinc-950">$49</span>
                      </div>
                      <h4 className="text-xs font-bold text-zinc-950 truncate mt-0.5">
                        Mastering Modern UI
                      </h4>
                      <p className="text-[10px] text-zinc-500 truncate">
                        240-page guide + 40 Figma components
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Link Block */}
                <a
                  href="#discord"
                  className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${currentTheme.cardBg} hover:border-zinc-300`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-950">
                        Creator community
                      </div>
                      <div className="text-[10px] text-zinc-500">
                        Connect with other creators, designers, and builders.
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                {/* Email Newsletter Box */}
                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-700" />
                    <span className="text-xs font-bold text-zinc-950">Weekly design digest</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 mb-2">
                    Useful design and creator tips, delivered every Tuesday.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-1.5">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 text-[11px] px-2.5 py-1.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-800"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-[11px] font-bold shrink-0 shadow-xs"
                    >
                      {emailSubscribed ? "✓ Joined" : "Join"}
                    </button>
                  </form>
                </div>

                {/* Tip Jar Block */}
                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Support my work
                    </span>
                    <span className="text-[10px] text-zinc-500">Send a tip</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-2">
                    {[3, 5, 10].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setTipAmount(amt)}
                        className={`py-1 rounded-lg text-xs font-medium border transition-all ${
                          tipAmount === amt
                            ? "bg-zinc-950 text-white font-bold border-zinc-950"
                            : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleTip}
                    className="w-full py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
                  >
                    {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Tip`}
                  </button>
                </div>
              </div>
            )}

            {/* TAB: PORTFOLIO SHOWCASE */}
            {activeTab === "portfolio" && (
              <div className="space-y-3 pt-1 text-left">
                <div className="flex items-center justify-between text-xs text-zinc-500 px-1">
                  <span>Selected Projects ({DEMO_PORTFOLIO_PROJECTS.length})</span>
                  <span className="text-zinc-600 font-medium">Interactive Demo</span>
                </div>

                {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className={`overflow-hidden border ${currentTheme.cardBg} ${currentTheme.buttonRadius} group transition-all hover:shadow-sm`}
                  >
                    <div className="relative h-28 w-full bg-zinc-100 overflow-hidden">
                      <img
                        src={proj.thumbnailUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/90 backdrop-blur-md text-zinc-900 border border-zinc-200/60 shadow-2xs">
                        {proj.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-zinc-950 line-clamp-1">
                        {proj.title}
                      </h4>
                      <p className="text-[10px] text-zinc-600 line-clamp-2 mt-1 leading-snug">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2 mb-2.5">
                        {proj.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[8px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200/80"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-[10px] font-bold flex items-center justify-center gap-1 transition-colors shadow-2xs"
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
                <div className="flex items-center justify-between text-xs text-zinc-500 px-1">
                  <span>3 Digital Products</span>
                  <span className="text-emerald-600 font-semibold">Instant Delivery</span>
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
                      <h4 className="text-xs font-bold text-zinc-950 truncate">{prod.title}</h4>
                      <p className="text-[10px] text-zinc-500 truncate">{prod.type}</p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-xs font-bold text-emerald-600">${prod.price}</span>
                        <button className="px-2.5 py-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-[10px] font-medium transition-all shadow-2xs">
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
                <div className="p-3 rounded-2xl border bg-white border-zinc-200 text-center shadow-xs">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Audience Reach (Sample)
                  </span>
                  <div className="text-xl font-bold text-zinc-950 mt-0.5">850,000+</div>
                  <div className="text-[10px] text-zinc-500">Total monthly reach across platforms (sample)</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2.5 rounded-xl border ${currentTheme.cardBg}`}>
                    <div className="text-[10px] text-zinc-500">Engagement</div>
                    <div className="text-sm font-bold text-zinc-950 mt-0.5">5.4%</div>
                    <div className="text-[9px] text-emerald-600 font-semibold">Example rate</div>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${currentTheme.cardBg}`}>
                    <div className="text-[10px] text-zinc-500">Audience Geo</div>
                    <div className="text-sm font-bold text-zinc-950 mt-0.5">68% US/UK</div>
                    <div className="text-[9px] text-zinc-500">Tech & Design</div>
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border ${currentTheme.cardBg}`}>
                  <div className="text-xs font-bold text-zinc-950 mb-2">Sponsorship Rates</div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-zinc-600">
                      <span>YouTube Dedicated Video</span>
                      <span className="font-bold text-zinc-950">$3,500</span>
                    </div>
                    <div className="flex justify-between text-zinc-600">
                      <span>Newsletter Header Sponsor</span>
                      <span className="font-bold text-zinc-950">$950</span>
                    </div>
                    <div className="flex justify-between text-zinc-600">
                      <span>X / Twitter Thread</span>
                      <span className="font-bold text-zinc-950">$750</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-xs">
                    Inquire for Collaboration
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Branding Badge inside preview */}
          <div className="py-2.5 text-center bg-zinc-50 border-t border-zinc-200 z-20">
            <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
              Powered by <span className="text-zinc-950 font-bold">Webworks</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
