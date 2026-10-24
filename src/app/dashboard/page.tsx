"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  LayoutGrid,
  ShoppingBag,
  Mail,
  TrendingUp,
  Bot,
  ExternalLink,
  Plus,
  DollarSign,
  Users,
  Eye,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Sliders,
  Copy,
  Check,
  Send,
  Zap,
} from "lucide-react";
import { DEMO_CREATOR, DEMO_PRODUCTS, DEMO_DEALS } from "@/lib/constants";
import { formatCurrency, formatCompactNumber } from "@/lib/utils";

export default function DashboardPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "builder" | "store" | "audience" | "deals">("overview");

  // AI pitch generator state
  const [targetBrand, setTargetBrand] = useState("");
  const [generatedPitch, setGeneratedPitch] = useState("");
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/p/${DEMO_CREATOR.username}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const generateAIPitch = () => {
    if (!targetBrand) return;
    setIsGeneratingPitch(true);
    setTimeout(() => {
      setGeneratedPitch(
        `Hi ${targetBrand} Partnerships Team,\n\nI’m Alexa Stone, a design engineer and tech creator reaching 850k+ founders, developers, and product designers monthly across YouTube and X/Twitter.\n\nOur audience has a 5.4% engagement rate with high purchasing intent for modern developer & design tools. I’ve loved what ${targetBrand} is doing and would love to propose a dedicated integration or product showcase in our upcoming tech stack deep dive.\n\nCheck out my verified live media kit and audience metrics here: webworks.ai/alexa\n\nBest,\nAlexa Stone`
      );
      setIsGeneratingPitch(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-slate-100 flex flex-col">
      {/* Top Studio Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080c16]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5 shadow-md shadow-violet-500/20">
                <div className="w-full h-full bg-[#090d1a] rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="font-extrabold text-base text-white">Webworks Studio</span>
            </Link>

            <span className="text-slate-600">/</span>

            {/* Live profile pill */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-mono">webworks.ai/{DEMO_CREATOR.username}</span>
              <button
                onClick={handleCopy}
                className="ml-1 text-slate-400 hover:text-white p-0.5 rounded transition-colors"
                title="Copy profile link"
              >
                {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/p/${DEMO_CREATOR.username}`}
              target="_blank"
              className="px-3 py-1.5 rounded-xl border border-white/15 hover:bg-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-all"
            >
              <span>View Public Bio</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>

            {/* Creator Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <img
                src={DEMO_CREATOR.avatarUrl}
                alt={DEMO_CREATOR.displayName}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-violet-500"
              />
              <span className="text-xs font-medium text-white hidden sm:inline">
                {DEMO_CREATOR.displayName}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Studio Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Module Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
          {[
            { id: "overview", label: "Overview & Analytics", icon: LayoutGrid },
            { id: "builder", label: "Page Builder", icon: Sliders },
            { id: "store", label: "Digital Store", icon: ShoppingBag },
            { id: "audience", label: "Audience CRM", icon: Mail },
            { id: "deals", label: "Brand Partnerships", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>30-Day Creator Revenue</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white mt-2">$14,850</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" /> +18.4% vs last month
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Total Profile Views</span>
                  <Eye className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white mt-2">84,200</div>
                <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" /> +12.5% unique visitors
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Store Conversion Rate</span>
                  <ShoppingBag className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-2xl font-bold text-white mt-2">4.82%</div>
                <div className="flex items-center gap-1 text-[11px] text-violet-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" /> 2.1x industry benchmark
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Audience Subscribers</span>
                  <Users className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-2xl font-bold text-white mt-2">3,420</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-1">
                  <ArrowUpRight className="w-3 h-3" /> +340 this week
                </div>
              </div>
            </div>

            {/* Quick Actions & AI Pitch Generator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Recent Orders & Pipeline */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white">Active Brand Sponsorship Pipeline</h3>
                    <button
                      onClick={() => setActiveTab("deals")}
                      className="text-xs text-violet-400 hover:underline flex items-center gap-1"
                    >
                      View all <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {DEMO_DEALS.map((deal) => (
                      <div
                        key={deal.id}
                        className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center font-bold text-sm">
                            {deal.brandLogo}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">{deal.brandName}</div>
                            <div className="text-[10px] text-slate-400">{deal.deliverables}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-bold text-emerald-400">
                            {formatCurrency(deal.dealValue)}
                          </div>
                          <span className="inline-block mt-0.5 text-[9px] uppercase font-semibold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                            {deal.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Selling Products */}
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white">Top Converting Digital Products</h3>
                    <button
                      onClick={() => setActiveTab("store")}
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      Manage Store <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {DEMO_PRODUCTS.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.coverImage}
                            alt={prod.title}
                            className="w-12 h-12 rounded-xl object-cover shrink-0"
                          />
                          <div>
                            <div className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                              {prod.title}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {prod.salesCount} sold • ⭐ {prod.rating}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs font-bold text-white">${prod.price}</div>
                          <div className="text-[10px] text-emerald-400 font-medium">
                            {formatCurrency(prod.salesCount * prod.price)} revenue
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: AI Brand Pitch Copilot */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-3xl glass-panel border border-violet-500/30 relative overflow-hidden">
                  <div className="ambient-glow-purple -top-20 -right-20 opacity-30" />

                  <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Bot className="w-4 h-4" /> AI Brand Pitch Copilot
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Generate an Instant Sponsorship Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Enter any brand name. Webworks AI synthesizes your verified audience demographics,
                    reach metrics, and past deal performance into a high-converting outreach email.
                  </p>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={targetBrand}
                        onChange={(e) => setTargetBrand(e.target.value)}
                        placeholder="e.g. Figma, Notion, Linear, Vercel"
                        className="flex-1 text-xs px-3 py-2 rounded-xl glass-input"
                      />
                      <button
                        onClick={generateAIPitch}
                        disabled={!targetBrand || isGeneratingPitch}
                        className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 transition-all shrink-0"
                      >
                        {isGeneratingPitch ? (
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Pitch</span>
                          </>
                        )}
                      </button>
                    </div>

                    {generatedPitch && (
                      <div className="mt-4 p-4 rounded-2xl bg-black/50 border border-violet-500/30 text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed relative">
                        <div className="flex justify-between items-center text-[10px] text-violet-400 font-sans font-bold border-b border-white/10 pb-2 mb-2">
                          <span>READY TO SEND</span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(generatedPitch);
                              alert("Pitch copied to clipboard!");
                            }}
                            className="hover:underline flex items-center gap-1"
                          >
                            <Copy className="w-3 h-3" /> Copy
                          </button>
                        </div>
                        {generatedPitch}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Profile Setup Checklist */}
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Creator Setup Checklist (4/5 Complete)
                  </h3>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bio profile & avatar published
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Digital product catalog live
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Stripe Connect payout active
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Email opt-in block configured
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4 text-amber-400" /> Connect custom domain (Pro)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BUILDER (Direct block editor inside studio) */}
        {activeTab === "builder" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Page Blocks</h2>
                  <p className="text-xs text-slate-400">
                    Drag, customize, and publish blocks to your public link-in-bio page.
                  </p>
                </div>
                <button
                  onClick={() => alert("Added new custom link block!")}
                  className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Block
                </button>
              </div>

              <div className="space-y-3">
                {DEMO_CREATOR.blocks.map((block) => (
                  <div
                    key={block.id}
                    className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-violet-400">
                        {block.order}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span>{block.title}</span>
                          {block.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-violet-500/20 text-violet-300 font-semibold">
                              {block.badge}
                            </span>
                          )}
                        </div>
                        {block.subtitle && (
                          <div className="text-[10px] text-slate-400 truncate max-w-sm">
                            {block.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">
                        Active
                      </span>
                      <button className="text-xs text-slate-400 hover:text-white px-2 py-1">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Preview on Right */}
            <div className="lg:col-span-5 flex flex-col items-center sticky top-24">
              <span className="text-xs font-semibold text-slate-400 mb-2">Live Preview</span>
              <div className="scale-90 origin-top">
                <iframe
                  src={`/p/${DEMO_CREATOR.username}`}
                  title="Profile Preview"
                  className="w-[360px] h-[650px] rounded-[40px] border-4 border-neutral-800 shadow-2xl bg-black"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STORE */}
        {activeTab === "store" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Creator Digital Store</h2>
                <p className="text-xs text-slate-400">
                  Instant checkout with Apple Pay, Google Pay, and Stripe Connect direct payouts.
                </p>
              </div>
              <button
                onClick={() => alert("Digital product creation wizard opened")}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" /> Add Digital Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEMO_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="p-5 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={prod.coverImage}
                      alt={prod.title}
                      className="w-full h-40 rounded-2xl object-cover mb-4"
                    />
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                        {prod.type}
                      </span>
                      <span className="text-sm font-extrabold text-emerald-400">${prod.price}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{prod.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{prod.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>{prod.salesCount} purchases</span>
                    <button className="text-xs text-violet-400 font-semibold hover:underline">
                      Edit details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: AUDIENCE */}
        {activeTab === "audience" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Audience CRM & Email Broadcasts</h2>
                <p className="text-xs text-slate-400">
                  You own 100% of your subscriber data. Export anytime or send direct broadcasts.
                </p>
              </div>
              <button
                onClick={() => alert("Broadcast newsletter composer opened")}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" /> Compose Newsletter
              </button>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-3 font-semibold">Subscriber Email</th>
                      <th className="pb-3 font-semibold">Source</th>
                      <th className="pb-3 font-semibold">Tags</th>
                      <th className="pb-3 font-semibold">Total Spent</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { email: "sarah.design@gmail.com", source: "Link-in-Bio", tag: "Buyer", spent: "$49", status: "Subscribed" },
                      { email: "marcus.k@techlead.io", source: "Newsletter Form", tag: "Lead", spent: "$0", status: "Subscribed" },
                      { email: "elena_ux@hey.com", source: "1-on-1 Session", tag: "VIP Client", spent: "$180", status: "Subscribed" },
                      { email: "kevin@startupbuilder.co", source: "Discord Link", tag: "Community", spent: "$39", status: "Subscribed" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="py-3 text-white font-medium">{row.email}</td>
                        <td className="py-3 text-slate-400">{row.source}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-semibold">
                            {row.tag}
                          </span>
                        </td>
                        <td className="py-3 font-semibold text-emerald-400">{row.spent}</td>
                        <td className="py-3 text-slate-300">
                          <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DEALS */}
        {activeTab === "deals" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Brand Deal Sponsorship Pipeline</h2>
                <p className="text-xs text-slate-400">
                  Track deliverables, contracts, invoice statuses, and due dates.
                </p>
              </div>
              <button
                onClick={() => alert("New deal tracker dialog opened")}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" /> Log Sponsorship
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEMO_DEALS.map((deal) => (
                <div
                  key={deal.id}
                  className="p-6 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-300 flex items-center justify-center font-bold">
                        {deal.brandLogo}
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300">
                        {deal.status.replace("_", " ")}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{deal.brandName}</h3>
                    <p className="text-xs text-slate-400 mb-4">{deal.deliverables}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Value</div>
                      <div className="text-sm font-bold text-emerald-400">
                        {formatCurrency(deal.dealValue)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Due Date</div>
                      <div className="text-xs font-semibold text-white">{deal.dueDate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
