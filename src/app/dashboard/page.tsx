"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  ShoppingBag,
  Mail,
  TrendingUp,
  Sliders,
  Plus,
  Clock,
  CheckCircle2,
  ChevronRight,
  Send,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCards } from "@/components/dashboard/StatCards";
import { BrandPitchBuilder } from "@/components/dashboard/BrandPitchBuilder";
import { EasyProfileBuilder } from "@/components/dashboard/EasyProfileBuilder";
import { DEMO_PRODUCTS, DEMO_DEALS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "builder" | "store" | "audience" | "deals">("overview");

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col">
      {/* Top Studio Navbar */}
      <DashboardHeader />

      {/* Main Studio Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Module Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-zinc-200/80 pb-3 overflow-x-auto">
          {[
            { id: "overview", label: "Overview & Analytics", icon: LayoutGrid },
            { id: "builder", label: "Profile & Portfolio Builder", icon: Sliders },
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
                    ? "bg-zinc-950 text-white font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
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
            <StatCards />

            {/* In-Flight Deals & Brand Pitch Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Recent Deals & Best Selling Products */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-zinc-950">Active Brand Sponsorship Pipeline</h3>
                    <button
                      onClick={() => setActiveTab("deals")}
                      className="text-xs text-zinc-600 hover:text-zinc-950 font-semibold flex items-center gap-1"
                    >
                      View all <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {DEMO_DEALS.map((deal) => (
                      <div
                        key={deal.id}
                        className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white text-zinc-900 border border-zinc-200 flex items-center justify-center font-bold text-sm shadow-2xs">
                            {deal.brandLogo}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-950">{deal.brandName}</div>
                            <div className="text-[10px] text-zinc-500">{deal.deliverables}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-bold text-emerald-600">
                            {formatCurrency(deal.dealValue)}
                          </div>
                          <span className="inline-block mt-0.5 text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                            {deal.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Selling Products */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-zinc-950">Top Converting Digital Products</h3>
                    <button
                      onClick={() => setActiveTab("store")}
                      className="text-xs text-zinc-600 hover:text-zinc-950 font-semibold flex items-center gap-1"
                    >
                      Manage Store <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {DEMO_PRODUCTS.map((prod) => (
                      <div
                        key={prod.id}
                        className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.coverImage}
                            alt={prod.title}
                            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-zinc-200"
                          />
                          <div>
                            <div className="text-xs font-bold text-zinc-950 truncate max-w-[200px] sm:max-w-xs">
                              {prod.title}
                            </div>
                            <div className="text-[10px] text-zinc-500">
                              {prod.salesCount} sold • ⭐ {prod.rating}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs font-bold text-zinc-950">${prod.price}</div>
                          <div className="text-[10px] text-emerald-600 font-semibold">
                            {formatCurrency(prod.salesCount * prod.price)} revenue
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Realistic Sponsorship Proposal Builder & Checklist */}
              <div className="lg:col-span-5 space-y-6">
                <BrandPitchBuilder />

                {/* Quick Profile Setup Checklist */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Creator Setup Checklist (4/5 Complete)
                  </h3>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bio profile & avatar published
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Digital product catalog live
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Stripe Connect payout active
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Email opt-in block configured
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock className="w-4 h-4 text-amber-500" /> Connect custom domain (Included Free)
                    </div>

                    <button
                      onClick={() => setActiveTab("builder")}
                      className="w-full mt-3 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-between shadow-sm transition-all"
                    >
                      <span>Open Profile & Portfolio Builder</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EASY PROFILE & PORTFOLIO BUILDER */}
        {activeTab === "builder" && <EasyProfileBuilder />}

        {/* TAB 3: STORE */}
        {activeTab === "store" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-zinc-950">Creator Digital Store</h2>
                <p className="text-xs text-zinc-500">
                  Instant checkout with Apple Pay, Google Pay, and Stripe Connect direct payouts.
                </p>
              </div>
              <button
                onClick={() => alert("Digital product creation wizard opened")}
                className="px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" /> Add Digital Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEMO_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="p-5 rounded-3xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={prod.coverImage}
                      alt={prod.title}
                      className="w-full h-40 rounded-2xl object-cover mb-4 border border-zinc-200"
                    />
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        {prod.type}
                      </span>
                      <span className="text-sm font-extrabold text-emerald-600">${prod.price}</span>
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-1.5">{prod.title}</h3>
                    <p className="text-xs text-zinc-600 line-clamp-2">{prod.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                    <span>{prod.salesCount} purchases</span>
                    <button className="text-xs text-zinc-800 font-bold hover:text-zinc-950">
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
                <h2 className="text-lg font-bold text-zinc-950">Audience CRM & Email Broadcasts</h2>
                <p className="text-xs text-zinc-500">
                  You own 100% of your subscriber data. Export anytime or send direct broadcasts.
                </p>
              </div>
              <button
                onClick={() => alert("Broadcast newsletter composer opened")}
                className="px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Compose Newsletter
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500">
                      <th className="pb-3 font-semibold">Subscriber Email</th>
                      <th className="pb-3 font-semibold">Source</th>
                      <th className="pb-3 font-semibold">Tags</th>
                      <th className="pb-3 font-semibold">Total Spent</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { email: "sarah.design@gmail.com", source: "Link-in-Bio", tag: "Buyer", spent: "$49", status: "Subscribed" },
                      { email: "marcus.k@techlead.io", source: "Newsletter Form", tag: "Lead", spent: "$0", status: "Subscribed" },
                      { email: "elena_ux@hey.com", source: "1-on-1 Session", tag: "VIP Client", spent: "$180", status: "Subscribed" },
                      { email: "kevin@startupbuilder.co", source: "Discord Link", tag: "Community", spent: "$39", status: "Subscribed" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50">
                        <td className="py-3 text-zinc-950 font-medium">{row.email}</td>
                        <td className="py-3 text-zinc-500">{row.source}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 text-[10px] font-semibold">
                            {row.tag}
                          </span>
                        </td>
                        <td className="py-3 font-bold text-emerald-600">{row.spent}</td>
                        <td className="py-3 text-zinc-700">
                          <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {row.status}
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
                <h2 className="text-lg font-bold text-zinc-950">Brand Deal Sponsorship Pipeline</h2>
                <p className="text-xs text-zinc-500">
                  Track deliverables, contracts, invoice statuses, and due dates.
                </p>
              </div>
              <button
                onClick={() => alert("New deal tracker dialog opened")}
                className="px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" /> Log Sponsorship
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEMO_DEALS.map((deal) => (
                <div
                  key={deal.id}
                  className="p-6 rounded-3xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center font-bold">
                        {deal.brandLogo}
                      </div>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                        {deal.status.replace("_", " ")}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-950 mb-1">{deal.brandName}</h3>
                    <p className="text-xs text-zinc-600 mb-4">{deal.deliverables}</p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500">Value</div>
                      <div className="text-sm font-bold text-emerald-600">
                        {formatCurrency(deal.dealValue)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-zinc-500">Due Date</div>
                      <div className="text-xs font-semibold text-zinc-800">{deal.dueDate}</div>
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
