"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function StatsSection() {
  const stats = [
    { value: "10K+", label: "Active Creators" },
    { value: "50K+", label: "Products Sold" },
    { value: "1M+", label: "Emails Collected" },
    { value: "$2M+", label: "Creator Revenue" },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-10">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-12 lg:p-14 shadow-soft-card text-center overflow-hidden">
        {/* Very subtle ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,213,255,0.2),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-8 shadow-2xs">
            <Sparkles className="w-3 h-3 text-purple-600" />
            <span>Trusted By Creators</span>
          </div>

          {/* 4 Clean Statistics Columns with Thin Vertical Dividers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 w-full max-w-5xl">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-4 ${
                  idx < stats.length - 1 ? "md:border-r border-zinc-100" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
