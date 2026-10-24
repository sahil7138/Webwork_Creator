"use client";

import React, { useState, Suspense } from "react";
import { useParams } from "next/navigation";
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

function ProfileContent() {
  const params = useParams();
  const username = (params?.username as string) || "alexa";

  const [activeTab, setActiveTab] = useState<"links" | "portfolio" | "store" | "mediakit">("links");
  const [tipAmount, setTipAmount] = useState<number>(5);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [tipSent, setTipSent] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState<any>(null);
  const [purchased, setPurchased] = useState(false);

  const theme = DEMO_CREATOR.theme;

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

  return (
    <div className={`min-h-screen ${theme.background} text-slate-100 flex flex-col items-center px-4 py-8 relative selection:bg-violet-500/30`}>
      {/* Subtle ambient lighting */}
      <div className="ambient-glow-purple top-10 left-1/2 -translate-x-1/2 opacity-30" />

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto space-y-6 relative z-10">
        {/* Creator Header Profile Card */}
        <div className="text-center flex flex-col items-center">
          <div className="relative mb-3 group">
            <img
              src={DEMO_CREATOR.avatarUrl}
              alt={DEMO_CREATOR.displayName}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-violet-500/40 shadow-2xl shadow-violet-950/50"
            />
            <span className="absolute bottom-1 right-1 p-1 bg-violet-600 rounded-full text-white shadow-md">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>

          <h1 className="font-extrabold text-xl text-white flex items-center gap-1.5 tracking-tight">
            {DEMO_CREATOR.displayName}
          </h1>

          <div className="text-xs font-semibold text-violet-400 mt-0.5">
            @{username} • {DEMO_CREATOR.category}
          </div>

          <p className="text-xs text-slate-300 max-w-sm mt-2.5 leading-relaxed">
            {DEMO_CREATOR.bio}
          </p>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-4 mt-4 text-slate-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-pink-400 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-red-400 transition-all"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-sky-400 transition-all"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="p-1.5 rounded-2xl bg-black/40 border border-white/10 flex justify-center gap-1">
          <button
            onClick={() => setActiveTab("links")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "links"
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Links
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "portfolio"
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" /> Portfolio
          </button>
          <button
            onClick={() => setActiveTab("store")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "store"
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Store
          </button>
          <button
            onClick={() => setActiveTab("mediakit")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "mediakit"
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> Stats
          </button>
        </div>

        {/* TAB 1: LINKS & BLOCKS */}
        {activeTab === "links" && (
          <div className="space-y-3.5">
            {/* Featured Product Block */}
            <div
              onClick={() => handleBuy(DEMO_PRODUCTS[0])}
              className={`p-4 rounded-3xl border transition-all cursor-pointer ${theme.cardBg} hover:scale-[1.01] hover:border-violet-500/40 shadow-xl`}
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={DEMO_PRODUCTS[0].coverImage}
                  alt={DEMO_PRODUCTS[0].title}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-violet-400 tracking-wider">
                      FEATURED PRODUCT
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      ${DEMO_PRODUCTS[0].price}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white truncate mt-0.5">
                    {DEMO_PRODUCTS[0].title}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
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
              className={`p-4 rounded-3xl border flex items-center justify-between transition-all ${theme.cardBg} hover:border-violet-500/50 hover:scale-[1.01] shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Private Creator Discord</div>
                  <div className="text-[11px] text-slate-400">4,200+ engineers building in public</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            {/* 1-on-1 Consultation Block */}
            <div
              onClick={() => handleBuy(DEMO_PRODUCTS[2])}
              className={`p-4 rounded-3xl border transition-all cursor-pointer ${theme.cardBg} hover:scale-[1.01] hover:border-cyan-500/40 shadow-lg`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-cyan-400">ADVISORY</span>
                    <span className="text-xs font-bold text-white">$180</span>
                  </div>
                  <div className="text-xs font-bold text-white truncate">1-on-1 Strategy & Design Audit</div>
                  <div className="text-[11px] text-slate-400 truncate">45-min Zoom deep dive</div>
                </div>
              </div>
            </div>

            {/* Newsletter Collector Form */}
            <div className={`p-4 rounded-3xl border ${theme.cardBg} shadow-lg`}>
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">Weekly Design Digest</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Actionable tactics for design engineers delivered every Tuesday.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shrink-0 transition-all"
                >
                  {emailSubscribed ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Tip Jar */}
            <div className={`p-4 rounded-3xl border ${theme.cardBg} shadow-lg`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Support My Work
                </span>
                <span className="text-[10px] text-slate-400">Instant tip via Apple Pay</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[3, 5, 15].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTipAmount(amt)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      tipAmount === amt
                        ? "bg-violet-600/30 border-violet-500 text-white"
                        : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
              <button
                onClick={handleTip}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-violet-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Espresso Tip`}
              </button>
            </div>
          </div>
        )}

        {/* TAB: PORTFOLIO SHOWCASE */}
        {activeTab === "portfolio" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Selected Works & Case Studies</span>
              <span className="text-cyan-400 font-semibold">{DEMO_PORTFOLIO_PROJECTS.length} Projects</span>
            </div>

            {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`overflow-hidden rounded-3xl border ${theme.cardBg} shadow-xl group transition-all hover:scale-[1.01]`}
              >
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={proj.thumbnailUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                    {proj.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-500/20 transition-all"
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
                className={`p-4 rounded-3xl border ${theme.cardBg} flex gap-4 items-center shadow-lg`}
              >
                <img
                  src={prod.coverImage}
                  alt={prod.title}
                  className="w-18 h-18 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {prod.type}
                  </span>
                  <h3 className="text-xs font-bold text-white truncate mt-0.5">{prod.title}</h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{prod.description}</p>
                  <div className="flex items-center justify-between mt-2.5">
                    <span className="text-sm font-extrabold text-emerald-400">${prod.price}</span>
                    <button
                      onClick={() => handleBuy(prod)}
                      className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-md transition-all"
                    >
                      Instant Buy
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
            <div className="p-5 rounded-3xl border bg-violet-950/30 border-violet-800/40 text-center shadow-lg">
              <span className="text-[10px] font-bold text-violet-300 uppercase tracking-widest">
                Verified Creator Audience
              </span>
              <div className="text-3xl font-extrabold text-white mt-1">850,000+</div>
              <div className="text-xs text-slate-400 mt-0.5">Total Monthly Reach across YouTube & X</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className={`p-4 rounded-2xl border ${theme.cardBg} text-center`}>
                <div className="text-xs text-slate-400">Engagement Rate</div>
                <div className="text-lg font-bold text-white mt-1">5.4%</div>
                <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">3.2x industry avg</div>
              </div>
              <div className={`p-4 rounded-2xl border ${theme.cardBg} text-center`}>
                <div className="text-xs text-slate-400">Audience Geography</div>
                <div className="text-lg font-bold text-white mt-1">68% US/UK</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Tech, Design & SaaS</div>
              </div>
            </div>

            <div className={`p-5 rounded-3xl border ${theme.cardBg} shadow-lg space-y-3`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Sponsorship Offerings</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/5">
                  <span>YouTube Dedicated Video</span>
                  <span className="font-bold text-white">$3,500</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/5">
                  <span>Newsletter Header Placement</span>
                  <span className="font-bold text-white">$950</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>X / Twitter Thread Sponsor</span>
                  <span className="font-bold text-white">$750</span>
                </div>
              </div>

              <a
                href={`mailto:brand@alexastone.com?subject=Brand%20Partnership%20Inquiry%20via%20Webworks`}
                className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-500/20 transition-all"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-slate-400 hover:text-white transition-all"
          >
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Create your own page with <strong className="text-white">Webworks</strong></span>
          </a>
        </div>
      </div>

      {/* CHECKOUT MODAL */}
      {checkoutProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl glass-panel border border-white/15 p-6 shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-cyan-400">Direct Checkout</span>
                <h3 className="text-sm font-bold text-white mt-0.5">{checkoutProduct.title}</h3>
              </div>
              <button
                onClick={() => setCheckoutProduct(null)}
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between mb-4">
              <span className="text-xs text-slate-300">Total Price</span>
              <span className="text-base font-extrabold text-emerald-400">
                ${checkoutProduct.price} USD
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <input
                type="email"
                placeholder="Where should we send your files?"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl glass-input"
                defaultValue="visitor@example.com"
              />
              <div className="text-[10px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-bit encrypted checkout via Stripe
              </div>
            </div>

            <button
              onClick={completeCheckout}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold shadow-lg shadow-violet-500/30 flex items-center justify-center gap-1.5 transition-all"
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
        <div className="min-h-screen bg-[#06080e] flex items-center justify-center text-slate-400 text-xs">
          Loading creator profile...
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
