"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function CreatorShowcase() {
  const creators = [
    {
      name: "Aarav Sharma",
      category: "Digital Creator",
      followers: "345K Followers",
      tag: "Photography",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
      ],
    },
    {
      name: "Diya Patel",
      category: "Lifestyle Creator",
      followers: "180K Followers",
      tag: "Lifestyle",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80",
      ],
    },
    {
      name: "Rohan Mehta",
      category: "Tech Creator",
      followers: "320K Followers",
      tag: "Tech",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80",
      ],
    },
    {
      name: "Sara Khan",
      category: "Fashion Creator",
      followers: "410K Followers",
      tag: "Fashion",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=200&q=80",
      ],
    },
  ];

  return (
    <section
      id="creators"
      className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-10"
    >
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(233,213,255,0.2),transparent_70%)] pointer-events-none" />

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>Top Creators</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
              Built by creators, <br />
              <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                for creators.
              </span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <Link
              href="/p/alexa"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:text-purple-600 transition-colors"
            >
              <span>View all creators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Clean Creator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {creators.map((c, i) => (
            <div
              key={i}
              className="p-4 rounded-3xl bg-white border border-zinc-200/80 shadow-soft-card space-y-3.5 text-left hover:border-purple-300 transition-all group"
            >
              {/* Creator Info */}
              <div className="flex items-center gap-3">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-200 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-zinc-950 truncate">
                    {c.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 truncate">
                    {c.category}
                  </p>
                  <p className="text-[10px] font-medium text-zinc-600">
                    {c.followers}
                  </p>
                </div>
              </div>

              {/* Tag & Action Button */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  {c.tag}
                </span>
                <div className="w-5 h-5 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors cursor-pointer">
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* 3 Thumbnails Side-by-Side */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {c.thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100"
                  >
                    <img
                      src={thumb}
                      alt={`${c.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
