import React from "react";
import { DollarSign, Eye, ShoppingBag, Users, ArrowUpRight } from "lucide-react";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>30-Day Creator Revenue</span>
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-zinc-950 mt-2">$14,850</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
          <ArrowUpRight className="w-3 h-3" /> +18.4% vs last month
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>Total Profile Views</span>
          <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-zinc-950 mt-2">84,200</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
          <ArrowUpRight className="w-3 h-3" /> +12.5% unique visitors
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>Store Conversion Rate</span>
          <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-zinc-950 mt-2">4.82%</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
          <ArrowUpRight className="w-3 h-3" /> 2.1x industry benchmark
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span>Audience Subscribers</span>
          <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl font-extrabold text-zinc-950 mt-2">3,420</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
          <ArrowUpRight className="w-3 h-3" /> +340 this week
        </div>
      </div>
    </div>
  );
}
