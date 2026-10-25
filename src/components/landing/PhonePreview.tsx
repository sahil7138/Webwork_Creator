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

  // Theme visual tokens
  const cardStyle = {
    backgroundColor: currentTheme.cardBgHex || "#ffffff",
    borderColor: currentTheme.borderHex || "#e4e4e7",
    borderRadius: currentTheme.radiusPx || "14px",
    color: currentTheme.textHex || "#09090b",
  };

  const actionBtnStyle = {
    backgroundColor: currentTheme.accentHex || "#09090b",
    color: currentTheme.accentTextHex || "#ffffff",
    borderRadius: currentTheme.radiusPx || "12px",
  };

  const badgeStyle = {
    backgroundColor: currentTheme.badgeBgHex || "#f4f4f5",
    color: currentTheme.badgeTextHex || "#18181b",
    borderRadius: currentTheme.radiusPx || "9999px",
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* HUD Telemetry Bar */}
      <div className="mb-4 flex items-center justify-between w-full max-w-md px-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        <span className="flex items-center gap-1.5 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66] animate-pulse" />
          SIMULATOR // VIEWPORT: 390×844
        </span>
        <span className="text-zinc-600">ENGINE: V2.4 DIRECT</span>
      </div>

      {/* Theme Switcher Pills */}
      <div className="flex items-center gap-1.5 p-1.5 mb-8 rounded-xl bg-zinc-950/90 border border-white/10 shadow-2xl backdrop-blur-xl z-20 overflow-x-auto max-w-full">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 px-2.5 shrink-0">
          Theme:
        </span>
        {CREATOR_THEMES.map((theme) => {
          const isSelected = currentTheme.id === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setCurrentTheme(theme)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0 ${
                isSelected
                  ? "bg-[#00FF66] text-black font-extrabold shadow-[0_0_15px_rgba(0,255,102,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0 shadow-2xs"
                style={{ backgroundColor: theme.bgHex }}
              />
              <span>{theme.name}</span>
            </button>
          );
        })}
      </div>

      {/* Realistic Obsidian Mobile Device Frame */}
      <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[50px] p-3.5 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black shadow-[0_0_90px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,102,0.12)] border-2 border-white/15 ring-1 ring-white/10">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-zinc-900 ring-1 ring-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66] animate-pulse" />
        </div>

        {/* Inner Phone Screen */}
        <div
          style={{
            backgroundColor: currentTheme.bgHex || "#ffffff",
            color: currentTheme.textHex || "#09090b",
          }}
          className="relative w-full h-full rounded-[38px] overflow-hidden flex flex-col transition-colors duration-300 border border-zinc-200/50"
        >
          {/* Top Status Bar */}
          <div
            style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
            className="w-full pt-3 px-6 flex justify-between items-center text-[11px] font-medium z-30 select-none"
          >
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div
                style={{ borderColor: currentTheme.secondaryTextHex || "#71717a" }}
                className="w-5 h-2.5 rounded-xs border p-0.5 flex items-center"
              >
                <div
                  style={{ backgroundColor: currentTheme.textHex || "#09090b" }}
                  className="w-3 h-full rounded-2xs"
                />
              </div>
            </div>
          </div>

          {/* Nav / Tabs inside creator page */}
          <div
            style={{ borderColor: currentTheme.borderHex || "#e4e4e7" }}
            className="mt-4 px-3 flex justify-center gap-1 border-b pb-2.5"
          >
            {[
              { id: "links", label: "Links", icon: null },
              { id: "portfolio", label: "Portfolio", icon: FolderGit2 },
              { id: "store", label: "Store", icon: ShoppingBag },
              { id: "mediakit", label: "Stats", icon: TrendingUp },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={
                    isActive
                      ? {
                          backgroundColor: currentTheme.accentHex || "#09090b",
                          color: currentTheme.accentTextHex || "#ffffff",
                          borderRadius: currentTheme.radiusPx || "12px",
                        }
                      : {
                          color: currentTheme.secondaryTextHex || "#71717a",
                          borderRadius: currentTheme.radiusPx || "12px",
                        }
                  }
                  className={`px-2.5 py-1 text-xs transition-all flex items-center gap-1 ${
                    isActive ? "font-bold shadow-xs" : "font-medium hover:opacity-80"
                  }`}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
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
                <span
                  style={{
                    backgroundColor: currentTheme.accentHex || "#09090b",
                    color: currentTheme.accentTextHex || "#ffffff",
                  }}
                  className="absolute bottom-0 right-0 p-1 rounded-full shadow-md"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3
                style={{ color: currentTheme.textHex || "#09090b" }}
                className="font-bold text-base flex items-center gap-1"
              >
                {DEMO_CREATOR.displayName}
              </h3>
              <p
                style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                className="text-xs max-w-[240px] mt-0.5 line-clamp-2"
              >
                {DEMO_CREATOR.bio}
              </p>

              {/* Social Icons Bar */}
              <div className="flex items-center gap-2 mt-2.5">
                {[
                  { icon: InstagramIcon, href: "#instagram" },
                  { icon: YoutubeIcon, href: "#youtube" },
                  { icon: TwitterIcon, href: "#twitter" },
                ].map((item, i) => {
                  const SIcon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      style={{
                        backgroundColor: currentTheme.cardBgHex || "#ffffff",
                        borderColor: currentTheme.borderHex || "#e4e4e7",
                        color: currentTheme.secondaryTextHex || "#71717a",
                        borderRadius: currentTheme.radiusPx || "8px",
                      }}
                      className="p-1.5 border shadow-2xs hover:opacity-80 transition-all"
                    >
                      <SIcon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* TAB 1: LINKS & BLOCKS */}
            {activeTab === "links" && (
              <div className="space-y-2.5 pt-1">
                {/* Product Block */}
                <div
                  style={cardStyle}
                  className="p-3 border shadow-xs transition-all hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80"
                      alt="UI Book"
                      style={{ borderRadius: currentTheme.radiusPx || "12px" }}
                      className="w-12 h-12 object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          style={badgeStyle}
                          className="text-[10px] font-bold tracking-wider px-2 py-0.5"
                        >
                          POPULAR
                        </span>
                        <span
                          style={{ color: currentTheme.textHex || "#09090b" }}
                          className="text-xs font-bold"
                        >
                          $49
                        </span>
                      </div>
                      <h4
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="text-xs font-bold truncate mt-0.5"
                      >
                        Mastering Modern UI
                      </h4>
                      <p
                        style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                        className="text-[10px] truncate"
                      >
                        240-page guide + 40 Figma components
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Link Block */}
                <a
                  href="#discord"
                  style={cardStyle}
                  className="p-3 border flex items-center justify-between shadow-xs transition-all hover:opacity-90"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      style={{
                        backgroundColor: currentTheme.badgeBgHex || "#f4f4f5",
                        borderColor: currentTheme.borderHex || "#e4e4e7",
                        color: currentTheme.textHex || "#09090b",
                        borderRadius: currentTheme.radiusPx || "12px",
                      }}
                      className="w-8 h-8 border flex items-center justify-center shrink-0"
                    >
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="text-xs font-bold"
                      >
                        Creator community
                      </div>
                      <div
                        style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                        className="text-[10px]"
                      >
                        Connect with other creators, designers, and builders.
                      </div>
                    </div>
                  </div>
                  <ExternalLink
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="w-3.5 h-3.5"
                  />
                </a>

                {/* Email Newsletter Box */}
                <div style={cardStyle} className="p-3 border shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="w-3.5 h-3.5"
                    />
                    <span
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-xs font-bold"
                    >
                      Weekly design digest
                    </span>
                  </div>
                  <p
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[10px] mb-2"
                  >
                    Useful design and creator tips, delivered every Tuesday.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-1.5">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email address"
                      style={{
                        backgroundColor: currentTheme.bgHex || "#ffffff",
                        borderColor: currentTheme.borderHex || "#e4e4e7",
                        color: currentTheme.textHex || "#09090b",
                        borderRadius: currentTheme.radiusPx || "10px",
                      }}
                      className="flex-1 text-[11px] px-2.5 py-1.5 border placeholder-zinc-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      style={actionBtnStyle}
                      className="px-2.5 py-1.5 text-[11px] font-bold shrink-0 shadow-xs hover:opacity-90 transition-all"
                    >
                      {emailSubscribed ? "✓ Joined" : "Join"}
                    </button>
                  </form>
                </div>

                {/* Tip Jar Block */}
                <div style={cardStyle} className="p-3 border shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-xs font-bold flex items-center gap-1.5"
                    >
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Support my work
                    </span>
                    <span
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="text-[10px]"
                    >
                      Send a tip
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mb-2">
                    {[3, 5, 10].map((amt) => {
                      const isSelected = tipAmount === amt;
                      return (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setTipAmount(amt)}
                          style={
                            isSelected
                              ? actionBtnStyle
                              : {
                                  borderColor: currentTheme.borderHex || "#e4e4e7",
                                  backgroundColor: currentTheme.bgHex || "#ffffff",
                                  color: currentTheme.textHex || "#09090b",
                                  borderRadius: currentTheme.radiusPx || "8px",
                                }
                          }
                          className="py-1 text-xs font-medium border transition-all"
                        >
                          ${amt}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={handleTip}
                    style={actionBtnStyle}
                    className="w-full py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all hover:opacity-90"
                  >
                    {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Tip`}
                  </button>
                </div>
              </div>
            )}

            {/* TAB: PORTFOLIO SHOWCASE */}
            {activeTab === "portfolio" && (
              <div className="space-y-3 pt-1 text-left">
                <div
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="flex items-center justify-between text-xs px-1"
                >
                  <span>Selected Projects ({DEMO_PORTFOLIO_PROJECTS.length})</span>
                  <span className="font-medium">Interactive Demo</span>
                </div>

                {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    style={cardStyle}
                    className="overflow-hidden border shadow-xs group transition-all hover:shadow-sm"
                  >
                    <div className="relative h-28 w-full bg-zinc-100 overflow-hidden">
                      <img
                        src={proj.thumbnailUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span
                        style={{
                          backgroundColor: currentTheme.cardBgHex || "#ffffff",
                          color: currentTheme.textHex || "#09090b",
                          borderColor: currentTheme.borderHex || "#e4e4e7",
                          borderRadius: currentTheme.radiusPx || "6px",
                        }}
                        className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 border shadow-2xs backdrop-blur-md"
                      >
                        {proj.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="text-xs font-bold line-clamp-1"
                      >
                        {proj.title}
                      </h4>
                      <p
                        style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                        className="text-[10px] line-clamp-2 mt-1 leading-snug"
                      >
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2 mb-2.5">
                        {proj.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            style={badgeStyle}
                            className="text-[8px] px-1.5 py-0.5 border border-black/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={actionBtnStyle}
                        className="w-full py-1.5 text-[10px] font-bold flex items-center justify-center gap-1 transition-all shadow-2xs hover:opacity-90"
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
                <div
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="flex items-center justify-between text-xs px-1"
                >
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
                    style={cardStyle}
                    className="p-3 border shadow-xs flex gap-3 items-center"
                  >
                    <img
                      src={prod.img}
                      alt={prod.title}
                      style={{ borderRadius: currentTheme.radiusPx || "12px" }}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="text-xs font-bold truncate"
                      >
                        {prod.title}
                      </h4>
                      <p
                        style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                        className="text-[10px] truncate"
                      >
                        {prod.type}
                      </p>
                      <div className="flex items-center justify-between mt-1.5">
                        <span
                          style={{ color: currentTheme.textHex || "#09090b" }}
                          className="text-xs font-bold"
                        >
                          ${prod.price}
                        </span>
                        <button
                          style={actionBtnStyle}
                          className="px-2.5 py-1 text-[10px] font-medium transition-all shadow-2xs hover:opacity-90"
                        >
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
                <div
                  style={cardStyle}
                  className="p-3 border text-center shadow-xs"
                >
                  <span
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[10px] font-bold uppercase tracking-wider"
                  >
                    Audience Reach (Sample)
                  </span>
                  <div
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-xl font-bold mt-0.5"
                  >
                    850,000+
                  </div>
                  <div
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[10px]"
                  >
                    Total monthly reach across platforms (sample)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div
                    style={cardStyle}
                    className="p-2.5 border shadow-xs"
                  >
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="text-[10px]"
                    >
                      Engagement
                    </div>
                    <div
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-sm font-bold mt-0.5"
                    >
                      5.4%
                    </div>
                    <div className="text-[9px] text-emerald-600 font-semibold">
                      Example rate
                    </div>
                  </div>
                  <div
                    style={cardStyle}
                    className="p-2.5 border shadow-xs"
                  >
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="text-[10px]"
                    >
                      Audience Geo
                    </div>
                    <div
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-sm font-bold mt-0.5"
                    >
                      68% US/UK
                    </div>
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="text-[9px]"
                    >
                      Tech & Design
                    </div>
                  </div>
                </div>

                <div
                  style={cardStyle}
                  className="p-3 border shadow-xs"
                >
                  <div
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-xs font-bold mb-2"
                  >
                    Sponsorship Rates
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="flex justify-between"
                    >
                      <span>YouTube Dedicated Video</span>
                      <span
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="font-bold"
                      >
                        $3,500
                      </span>
                    </div>
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="flex justify-between"
                    >
                      <span>Newsletter Header Sponsor</span>
                      <span
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="font-bold"
                      >
                        $950
                      </span>
                    </div>
                    <div
                      style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                      className="flex justify-between"
                    >
                      <span>X / Twitter Thread</span>
                      <span
                        style={{ color: currentTheme.textHex || "#09090b" }}
                        className="font-bold"
                      >
                        $750
                      </span>
                    </div>
                  </div>
                  <button
                    style={actionBtnStyle}
                    className="w-full mt-3 py-1.5 text-xs font-bold shadow-xs hover:opacity-90 transition-all"
                  >
                    Inquire for Collaboration
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Branding Badge inside preview */}
          <div
            style={{
              backgroundColor: currentTheme.bgHex || "#ffffff",
              borderColor: currentTheme.borderHex || "#e4e4e7",
              color: currentTheme.secondaryTextHex || "#71717a",
            }}
            className="py-2.5 text-center border-t z-20"
          >
            <span className="text-[10px] font-medium tracking-wide">
              Powered by{" "}
              <span
                style={{ color: currentTheme.textHex || "#09090b" }}
                className="font-bold"
              >
                Webworks
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
