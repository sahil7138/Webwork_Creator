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
    <div className={`min-h-screen ${theme.background} text-zinc-900 flex flex-col items-center px-4 py-8 relative selection:bg-zinc-950 selection:text-white`}>
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
            <span className="absolute bottom-1 right-1 p-1 bg-zinc-950 text-white rounded-full shadow-md">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>

          <h1 className="font-extrabold text-xl text-zinc-950 flex items-center gap-1.5 tracking-tight">
            {DEMO_CREATOR.displayName}
          </h1>

          <div className="text-xs font-semibold text-zinc-500 mt-0.5">
            @{username} • {DEMO_CREATOR.category}
          </div>

          <p className="text-xs text-zinc-600 max-w-sm mt-2.5 leading-relaxed">
            {DEMO_CREATOR.bio}
          </p>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-4 mt-4 text-zinc-500">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-950 border border-zinc-200/80 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-950 border border-zinc-200/80 transition-all"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-950 border border-zinc-200/80 transition-all"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-950 border border-zinc-200/80 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="p-1 rounded-2xl bg-zinc-100 border border-zinc-200 flex justify-center gap-1">
          <button
            onClick={() => setActiveTab("links")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "links"
                ? "bg-zinc-950 text-white font-bold shadow-sm"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            Links
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "portfolio"
                ? "bg-zinc-950 text-white font-bold shadow-sm"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" /> Portfolio
          </button>
          <button
            onClick={() => setActiveTab("store")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "store"
                ? "bg-zinc-950 text-white font-bold shadow-sm"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Store
          </button>
          <button
            onClick={() => setActiveTab("mediakit")}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "mediakit"
                ? "bg-zinc-950 text-white font-bold shadow-sm"
                : "text-zinc-600 hover:text-zinc-950"
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
              className={`p-4 rounded-3xl border border-zinc-200/90 transition-all cursor-pointer ${theme.cardBg} hover:border-zinc-400 shadow-sm`}
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={DEMO_PRODUCTS[0].coverImage}
                  alt={DEMO_PRODUCTS[0].title}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase">
                      FEATURED PRODUCT
                    </span>
                    <span className="text-sm font-extrabold text-zinc-950">
                      ${DEMO_PRODUCTS[0].price}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-zinc-950 truncate mt-0.5">
                    {DEMO_PRODUCTS[0].title}
                  </h3>
                  <p className="text-[11px] text-zinc-600 truncate mt-0.5">
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
              className={`p-4 rounded-3xl border border-zinc-200/90 flex items-center justify-between transition-all ${theme.cardBg} hover:border-zinc-400 shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950">Private Creator Discord</div>
                  <div className="text-[11px] text-zinc-500">4,200+ engineers building in public</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400" />
            </a>

            {/* 1-on-1 Consultation Block */}
            <div
              onClick={() => handleBuy(DEMO_PRODUCTS[2])}
              className={`p-4 rounded-3xl border border-zinc-200/90 transition-all cursor-pointer ${theme.cardBg} hover:border-zinc-400 shadow-sm`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">ADVISORY</span>
                    <span className="text-xs font-bold text-zinc-950">$180</span>
                  </div>
                  <div className="text-xs font-bold text-zinc-950 truncate">1-on-1 Strategy & Design Audit</div>
                  <div className="text-[11px] text-zinc-500 truncate">45-min Zoom deep dive</div>
                </div>
              </div>
            </div>

            {/* Newsletter Collector Form */}
            <div className={`p-4 rounded-3xl border border-zinc-200/90 ${theme.cardBg} shadow-sm`}>
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-zinc-600" />
                <span className="text-xs font-bold text-zinc-950">Weekly Design Digest</span>
              </div>
              <p className="text-[11px] text-zinc-600 mb-3">
                Actionable tactics for design engineers delivered every Tuesday.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shrink-0 transition-all shadow-sm"
                >
                  {emailSubscribed ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Tip Jar */}
            <div className={`p-4 rounded-3xl border border-zinc-200/90 ${theme.cardBg} shadow-sm`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-zinc-600" /> Support My Work
                </span>
                <span className="text-[10px] text-zinc-500">Instant tip via Apple Pay</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[3, 5, 15].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setTipAmount(amt)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      tipAmount === amt
                        ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                        : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
              <button
                onClick={handleTip}
                className="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                {tipSent ? "❤️ Thank you so much!" : `Send $${tipAmount} Espresso Tip`}
              </button>
            </div>
          </div>
        )}

        {/* TAB: PORTFOLIO SHOWCASE */}
        {activeTab === "portfolio" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-500 px-1">
              <span>Selected Works & Case Studies</span>
              <span className="text-zinc-800 font-semibold">{DEMO_PORTFOLIO_PROJECTS.length} Projects</span>
            </div>

            {DEMO_PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`overflow-hidden rounded-3xl border border-zinc-200/90 ${theme.cardBg} shadow-sm group transition-all hover:scale-[1.01]`}
              >
                <div className="relative h-44 w-full bg-zinc-100 overflow-hidden">
                  <img
                    src={proj.thumbnailUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-white border border-white/20">
                    {proj.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-zinc-950 mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 mb-3">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
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
                className={`p-4 rounded-3xl border border-zinc-200/90 ${theme.cardBg} flex gap-4 items-center shadow-sm`}
              >
                <img
                  src={prod.coverImage}
                  alt={prod.title}
                  className="w-18 h-18 rounded-2xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    {prod.type}
                  </span>
                  <h3 className="text-xs font-bold text-zinc-950 truncate mt-0.5">{prod.title}</h3>
                  <p className="text-[11px] text-zinc-600 line-clamp-1 mt-0.5">{prod.description}</p>
                  <div className="flex items-center justify-between mt-2.5">
                    <span className="text-sm font-extrabold text-zinc-950">${prod.price}</span>
                    <button
                      onClick={() => handleBuy(prod)}
                      className="px-3.5 py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-sm transition-all"
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
            <div className="p-5 rounded-3xl border bg-zinc-50 border-zinc-200 text-center shadow-sm">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Verified Creator Audience
              </span>
              <div className="text-3xl font-extrabold text-zinc-950 mt-1">850,000+</div>
              <div className="text-xs text-zinc-500 mt-0.5">Total Monthly Reach across YouTube & X</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className={`p-4 rounded-2xl border border-zinc-200/90 ${theme.cardBg} text-center shadow-sm`}>
                <div className="text-xs text-zinc-500">Engagement Rate</div>
                <div className="text-lg font-bold text-zinc-950 mt-1">5.4%</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">3.2x industry avg</div>
              </div>
              <div className={`p-4 rounded-2xl border border-zinc-200/90 ${theme.cardBg} text-center shadow-sm`}>
                <div className="text-xs text-zinc-500">Audience Geography</div>
                <div className="text-lg font-bold text-zinc-950 mt-1">68% US/UK</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Tech, Design & SaaS</div>
              </div>
            </div>

            <div className={`p-5 rounded-3xl border border-zinc-200/90 ${theme.cardBg} shadow-sm space-y-3`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Sponsorship Offerings</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center text-zinc-700 pb-2 border-b border-zinc-200">
                  <span>YouTube Dedicated Video</span>
                  <span className="font-bold text-zinc-950">$3,500</span>
                </div>
                <div className="flex justify-between items-center text-zinc-700 pb-2 border-b border-zinc-200">
                  <span>Newsletter Header Placement</span>
                  <span className="font-bold text-zinc-950">$950</span>
                </div>
                <div className="flex justify-between items-center text-zinc-700">
                  <span>X / Twitter Thread Sponsor</span>
                  <span className="font-bold text-zinc-950">$750</span>
                </div>
              </div>

              <a
                href={`mailto:brand@alexastone.com?subject=Brand%20Partnership%20Inquiry%20via%20Webworks`}
                className="w-full mt-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-[11px] text-zinc-600 hover:text-zinc-950 transition-all shadow-sm"
          >
            <span>Create your page with <strong className="text-zinc-950">Webworks</strong></span>
          </a>
        </div>
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
