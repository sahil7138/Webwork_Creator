"use client";

import React, { useState, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Heart,
  Mail,
  CheckCircle2,
  TrendingUp,
  Users,
  ArrowRight,
  ShieldCheck,
  Check,
  FolderGit2,
} from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";
import { CREATOR_THEMES, DEMO_CREATOR, DEMO_PRODUCTS, DEMO_PORTFOLIO_PROJECTS } from "@/lib/constants";
import { CreatorTheme } from "@/types";

function ProfileContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const username = (params?.username as string) || "alexa";
  const themeParam = searchParams.get("theme");

  const [activeTab, setActiveTab] = useState<"links" | "portfolio" | "store" | "mediakit">("links");
  const [tipAmount, setTipAmount] = useState<number>(5);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [tipSent, setTipSent] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<any>(null);
  const [purchased, setPurchased] = useState(false);

  const initialTheme =
    CREATOR_THEMES.find((t) => t.id === themeParam) || DEMO_CREATOR.theme;
  const [currentTheme, setCurrentTheme] = useState<CreatorTheme>(initialTheme);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 3500);
      setEmailInput("");
    }
  };

  const handleTip = () => {
    setTipSent(true);
    setTimeout(() => setTipSent(false), 2500);
  };

  const handleBuy = (product: any) => {
    setCheckoutProduct(product);
  };

  const completeCheckout = () => {
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      setCheckoutProduct(null);
    }, 2000);
  };

  const cardStyle = {
    backgroundColor: currentTheme.cardBgHex || "#ffffff",
    borderColor: currentTheme.borderHex || "#e4e4e7",
    borderRadius: currentTheme.radiusPx || "24px",
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
    <div
      style={{
        backgroundColor: currentTheme.bgHex || "#ffffff",
        color: currentTheme.textHex || "#09090b",
      }}
      className="min-h-screen flex flex-col items-center px-4 py-8 relative selection:bg-zinc-950 selection:text-white transition-colors duration-300 pb-20"
    >
      {/* Main Container */}
      <div className="w-full max-w-md mx-auto space-y-6 relative z-10">
        {/* Creator Header Profile Card */}
        <div className="text-center flex flex-col items-center">
          <div className="relative mb-3 group">
            <img
              src={DEMO_CREATOR.avatarUrl}
              alt={DEMO_CREATOR.displayName}
              className="w-24 h-24 rounded-full object-cover ring-2 ring-zinc-200 shadow-xl"
            />
            <span
              style={{
                backgroundColor: currentTheme.accentHex || "#09090b",
                color: currentTheme.accentTextHex || "#ffffff",
              }}
              className="absolute bottom-1 right-1 p-1 rounded-full shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>

          <h1
            style={{ color: currentTheme.textHex || "#09090b" }}
            className="font-extrabold text-xl flex items-center gap-1.5 tracking-tight"
          >
            {DEMO_CREATOR.displayName}
          </h1>

          <div
            style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
            className="text-xs font-semibold mt-0.5"
          >
            @{username} • {DEMO_CREATOR.category}
          </div>

          <p
            style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
            className="text-xs max-w-sm mt-2.5 leading-relaxed"
          >
            {DEMO_CREATOR.bio}
          </p>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3 mt-4">
            {[
              { icon: InstagramIcon, href: "https://instagram.com" },
              { icon: YoutubeIcon, href: "https://youtube.com" },
              { icon: TwitterIcon, href: "https://x.com" },
              { icon: GithubIcon, href: "https://github.com" },
            ].map((s, i) => {
              const SIcon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: currentTheme.cardBgHex || "#ffffff",
                    borderColor: currentTheme.borderHex || "#e4e4e7",
                    color: currentTheme.secondaryTextHex || "#71717a",
                    borderRadius: currentTheme.radiusPx || "12px",
                  }}
                  className="p-2 border transition-all hover:opacity-80 shadow-2xs"
                >
                  <SIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            borderColor: currentTheme.borderHex || "#e4e4e7",
            borderRadius: currentTheme.radiusPx || "16px",
          }}
          className="p-1 border flex justify-center gap-1 bg-black/5"
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
                className={`flex-1 py-2 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  isActive ? "shadow-sm" : "hover:opacity-80"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: LINKS & BLOCKS */}
        {activeTab === "links" && (
          <div className="space-y-3.5">
            {/* Featured Product Block */}
            <div
              onClick={() => handleBuy(DEMO_PRODUCTS[0])}
              style={cardStyle}
              className="p-4 border shadow-sm transition-all cursor-pointer hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={DEMO_PRODUCTS[0].coverImage}
                  alt={DEMO_PRODUCTS[0].title}
                  style={{ borderRadius: currentTheme.radiusPx || "16px" }}
                  className="w-14 h-14 object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      style={badgeStyle}
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5"
                    >
                      FEATURED PRODUCT
                    </span>
                    <span
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-sm font-extrabold"
                    >
                      ${DEMO_PRODUCTS[0].price}
                    </span>
                  </div>
                  <h3
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-xs font-bold truncate mt-0.5"
                  >
                    {DEMO_PRODUCTS[0].title}
                  </h3>
                  <p
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[11px] truncate mt-0.5"
                  >
                    {DEMO_PRODUCTS[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Community Discord Link */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              style={cardStyle}
              className="p-4 border flex items-center justify-between shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    backgroundColor: currentTheme.badgeBgHex || "#f4f4f5",
                    borderColor: currentTheme.borderHex || "#e4e4e7",
                    color: currentTheme.textHex || "#09090b",
                    borderRadius: currentTheme.radiusPx || "16px",
                  }}
                  className="w-10 h-10 border flex items-center justify-center shrink-0"
                >
                  <Users className="w-5 h-5" />
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
                    className="text-[11px]"
                  >
                    Connect with other creators, designers, and builders.
                  </div>
                </div>
              </div>
              <ExternalLink
                style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                className="w-4 h-4"
              />
            </a>

            {/* 1-on-1 Consultation Block */}
            <div
              onClick={() => handleBuy(DEMO_PRODUCTS[2])}
              style={cardStyle}
              className="p-4 border shadow-sm transition-all cursor-pointer hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div
                  style={{
                    backgroundColor: currentTheme.badgeBgHex || "#f4f4f5",
                    borderColor: currentTheme.borderHex || "#e4e4e7",
                    color: currentTheme.textHex || "#09090b",
                    borderRadius: currentTheme.radiusPx || "16px",
                  }}
                  className="w-10 h-10 border flex items-center justify-center shrink-0"
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      style={badgeStyle}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                    >
                      ADVISORY
                    </span>
                    <span
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-xs font-bold"
                    >
                      $180
                    </span>
                  </div>
                  <div
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-xs font-bold truncate"
                  >
                    1-on-1 Strategy & Design Audit
                  </div>
                  <div
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[11px] truncate"
                  >
                    45-min Zoom deep dive
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Collector Form */}
            <div style={cardStyle} className="p-4 border shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Mail
                  style={{ color: currentTheme.textHex || "#09090b" }}
                  className="w-4 h-4"
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
                className="text-[11px] mb-3"
              >
                Useful design and creator tips, delivered every Tuesday.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: currentTheme.bgHex || "#ffffff",
                    borderColor: currentTheme.borderHex || "#e4e4e7",
                    color: currentTheme.textHex || "#09090b",
                    borderRadius: currentTheme.radiusPx || "12px",
                  }}
                  className="flex-1 text-xs px-3 py-2 border placeholder-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  style={actionBtnStyle}
                  className="px-4 py-2 text-xs font-bold shrink-0 transition-all shadow-sm hover:opacity-90"
                >
                  {emailSubscribed ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Tip Jar */}
            <div style={cardStyle} className="p-4 border shadow-sm">
              <div className="flex items-center justify-between mb-2.5">
                <span
                  style={{ color: currentTheme.textHex || "#09090b" }}
                  className="text-xs font-bold flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Support my work
                </span>
                <span
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="text-[10px]"
                >
                  Send a tip
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[3, 5, 15].map((amt) => {
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
                              borderRadius: currentTheme.radiusPx || "12px",
                            }
                      }
                      className="py-2 text-xs font-bold border transition-all"
                    >
                      ${amt}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleTip}
                style={actionBtnStyle}
                className="w-full py-2.5 text-xs font-bold shadow-sm transition-all hover:opacity-90"
              >
                {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Tip`}
              </button>
            </div>
          </div>
        )}

        {/* TAB: PORTFOLIO SHOWCASE */}
        {activeTab === "portfolio" && (
          <div className="space-y-4">
            <div
              style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
              className="flex items-center justify-between text-xs px-1"
            >
              <span>Selected Works & Case Studies</span>
              <span className="font-semibold">{DEMO_PORTFOLIO_PROJECTS.length} Projects</span>
            </div>

            {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                style={cardStyle}
                className="overflow-hidden border shadow-sm group transition-all hover:shadow-md"
              >
                <div className="relative h-44 w-full bg-zinc-100 overflow-hidden">
                  <img
                    src={proj.thumbnailUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    style={{
                      backgroundColor: currentTheme.cardBgHex || "#ffffff",
                      borderColor: currentTheme.borderHex || "#e4e4e7",
                      color: currentTheme.textHex || "#09090b",
                      borderRadius: currentTheme.radiusPx || "9999px",
                    }}
                    className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 border shadow-2xs backdrop-blur-md"
                  >
                    {proj.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-sm font-bold mb-1"
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-xs leading-relaxed line-clamp-2 mb-3"
                  >
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={badgeStyle}
                        className="text-[10px] px-2 py-0.5 border border-black/5"
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
                    className="w-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:opacity-90"
                  >
                    <span>Explore Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: STORE */}
        {activeTab === "store" && (
          <div className="space-y-4">
            {DEMO_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                style={cardStyle}
                className="p-4 border shadow-sm flex gap-4 items-center"
              >
                <img
                  src={prod.coverImage}
                  alt={prod.title}
                  style={{ borderRadius: currentTheme.radiusPx || "16px" }}
                  className="w-18 h-18 object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span
                    style={badgeStyle}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                  >
                    {prod.type}
                  </span>
                  <h3
                    style={{ color: currentTheme.textHex || "#09090b" }}
                    className="text-xs font-bold truncate mt-1"
                  >
                    {prod.title}
                  </h3>
                  <p
                    style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                    className="text-[11px] line-clamp-1 mt-0.5"
                  >
                    {prod.description}
                  </p>
                  <div className="flex items-center justify-between mt-2.5">
                    <span
                      style={{ color: currentTheme.textHex || "#09090b" }}
                      className="text-sm font-extrabold"
                    >
                      ${prod.price}
                    </span>
                    <button
                      onClick={() => handleBuy(prod)}
                      style={actionBtnStyle}
                      className="px-3.5 py-1.5 text-xs font-bold shadow-sm transition-all hover:opacity-90"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: MEDIA KIT */}
        {activeTab === "mediakit" && (
          <div className="space-y-4">
            <div
              style={cardStyle}
              className="p-5 border text-center shadow-sm"
            >
              <span
                style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                className="text-[10px] font-bold uppercase tracking-widest"
              >
                Audience Metrics (Sample)
              </span>
              <div
                style={{ color: currentTheme.textHex || "#09090b" }}
                className="text-3xl font-extrabold mt-1"
              >
                850,000+
              </div>
              <div
                style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                className="text-xs mt-0.5"
              >
                Total monthly reach across YouTube & X (sample data)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div style={cardStyle} className="p-4 border text-center shadow-sm">
                <div
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="text-xs"
                >
                  Engagement Rate
                </div>
                <div
                  style={{ color: currentTheme.textHex || "#09090b" }}
                  className="text-lg font-bold mt-1"
                >
                  5.4%
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                  Example metric
                </div>
              </div>
              <div style={cardStyle} className="p-4 border text-center shadow-sm">
                <div
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="text-xs"
                >
                  Audience Geography
                </div>
                <div
                  style={{ color: currentTheme.textHex || "#09090b" }}
                  className="text-lg font-bold mt-1"
                >
                  68% US/UK
                </div>
                <div
                  style={{ color: currentTheme.secondaryTextHex || "#71717a" }}
                  className="text-[10px] mt-0.5"
                >
                  Tech, Design & SaaS
                </div>
              </div>
            </div>

            <div style={cardStyle} className="p-5 border shadow-sm space-y-3">
              <h3
                style={{ color: currentTheme.textHex || "#09090b" }}
                className="text-xs font-bold uppercase tracking-wider"
              >
                Sponsorship Offerings
              </h3>
              <div className="space-y-2 text-xs">
                <div
                  style={{ borderColor: currentTheme.borderHex || "#e4e4e7" }}
                  className="flex justify-between items-center pb-2 border-b"
                >
                  <span style={{ color: currentTheme.secondaryTextHex || "#71717a" }}>
                    YouTube Dedicated Video
                  </span>
                  <span style={{ color: currentTheme.textHex || "#09090b" }} className="font-bold">
                    $3,500
                  </span>
                </div>
                <div
                  style={{ borderColor: currentTheme.borderHex || "#e4e4e7" }}
                  className="flex justify-between items-center pb-2 border-b"
                >
                  <span style={{ color: currentTheme.secondaryTextHex || "#71717a" }}>
                    Newsletter Header Placement
                  </span>
                  <span style={{ color: currentTheme.textHex || "#09090b" }} className="font-bold">
                    $950
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: currentTheme.secondaryTextHex || "#71717a" }}>
                    X / Twitter Thread Sponsor
                  </span>
                  <span style={{ color: currentTheme.textHex || "#09090b" }} className="font-bold">
                    $750
                  </span>
                </div>
              </div>

              <a
                href={`mailto:brand@alexastone.com?subject=Brand%20Partnership%20Inquiry%20via%20Webworks`}
                style={actionBtnStyle}
                className="w-full mt-4 py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all hover:opacity-90"
              >
                <Mail className="w-3.5 h-3.5" /> Inquire for Collaboration
              </a>
            </div>
          </div>
        )}

        {/* Bottom Platform Branding */}
        <div className="pt-8 pb-4 text-center">
          <a
            href="/"
            style={{
              backgroundColor: currentTheme.cardBgHex || "#ffffff",
              borderColor: currentTheme.borderHex || "#e4e4e7",
              borderRadius: currentTheme.radiusPx || "9999px",
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border text-[11px] text-zinc-600 hover:text-zinc-950 transition-all shadow-sm"
          >
            <span>Create your free <strong className="text-zinc-950">Webworks</strong> page</span>
          </a>
        </div>
      </div>

      {/* Floating Theme Switcher for Live Demo Profile */}
      <div className="fixed bottom-4 z-40 flex items-center gap-1.5 p-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-xl text-xs">
        <span className="text-[10px] font-semibold text-zinc-500 pl-2.5 pr-1">Theme:</span>
        {CREATOR_THEMES.map((th) => (
          <button
            key={th.id}
            onClick={() => setCurrentTheme(th)}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 ${
              currentTheme.id === th.id
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
              style={{ backgroundColor: th.bgHex }}
            />
            <span>{th.name}</span>
          </button>
        ))}
      </div>

      {/* CHECKOUT MODAL */}
      {checkoutProduct && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white border border-zinc-200 p-6 shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-zinc-500">Direct Checkout</span>
                <h3 className="text-sm font-bold text-zinc-950 mt-0.5">{checkoutProduct.title}</h3>
              </div>
              <button
                onClick={() => setCheckoutProduct(null)}
                className="text-zinc-400 hover:text-zinc-950 text-xs p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between mb-4">
              <span className="text-xs text-zinc-600">Total Price</span>
              <span className="text-base font-extrabold text-zinc-950">
                ${checkoutProduct.price} USD
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <input
                type="email"
                placeholder="Where should we send your files?"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950"
                defaultValue="visitor@example.com"
              />
              <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-bit encrypted checkout via Stripe
              </div>
            </div>

            <button
              onClick={completeCheckout}
              className="w-full py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-all"
            >
              {purchased ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Purchase Successful!</span>
                </>
              ) : (
                <>
                  <span>Pay ${checkoutProduct.price} with Apple Pay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PublicProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center text-zinc-500 text-xs">
          Loading creator profile...
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
