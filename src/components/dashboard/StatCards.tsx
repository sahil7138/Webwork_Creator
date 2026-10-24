import React from "react";
import { DollarSign, Eye, ShoppingBag, Users, ArrowUpRight } from "lucide-react";

export function StatCards() {
  return (
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
          <Eye className="w-4 h-4 text-zinc-300" />
        </div>
        <div className="text-2xl font-bold text-white mt-2">84,200</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-1">
          <ArrowUpRight className="w-3 h-3" /> +12.5% unique visitors
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel border border-white/10">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Store Conversion Rate</span>
          <ShoppingBag className="w-4 h-4 text-zinc-300" />
        </div>
        <div className="text-2xl font-bold text-white mt-2">4.82%</div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium mt-1">
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
  );
}
