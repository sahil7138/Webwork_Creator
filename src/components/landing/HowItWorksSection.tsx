"use client";

import React, { useState } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Create Your Profile",
      desc: "Showcase your work, links and socials.",
    },
    {
      num: "02",
      title: "Sell Digital Products",
      desc: "Share your templates, presets, eBooks and more.",
    },
    {
      num: "03",
      title: "Grow Your Audience",
      desc: "Collect emails and stay connected.",
    },
    {
      num: "04",
      title: "Get Brand Deals",
      desc: "Make it easy for brands to work with you.",
    },
    {
      num: "05",
      title: "Track Your Growth",
      desc: "See what's working with simple analytics.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 sm:py-10"
    >
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Lavender Background Glow */}
        <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(233,213,255,0.3),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Editorial Heading & Numbered Steps */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>How It Works</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
                One platform. <br />
                <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                  Multiple ways to earn.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
                Everything you need to create, grow and monetize — without the chaos.
              </p>
            </div>

            {/* Vertical Numbered Sequence */}
            <div className="space-y-3 pt-1">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isActive
                        ? "bg-purple-50/40 border-purple-200/80 shadow-2xs"
                        : "bg-white/60 border-zinc-100 hover:border-zinc-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-mono font-bold text-purple-600 pt-0.5">
                        {step.num}
                      </span>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-bold text-zinc-950">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Webworks Clean Product Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-soft-card p-6 sm:p-7 space-y-6 text-left relative max-w-lg mx-auto">
              {/* Creator Profile Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-zinc-100 overflow-hidden ring-1 ring-zinc-200 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Sahil Shaikh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">Sahil Shaikh</h4>
                    <p className="text-[11px] text-zinc-400">Content Creator</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-zinc-950">
                    12.4k <span className="text-[10px] text-zinc-400 font-normal">followers</span>
                  </span>
                  <button className="px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold shadow-2xs transition-colors">
                    View Store
                  </button>
                </div>
              </div>

              {/* Digital Products Showcase Section */}
              <div className="pt-2 border-t border-zinc-100">
                <div className="text-xs font-bold text-zinc-950 mb-3">
                  Digital Products
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    {
                      title: "Preset Pack",
                      price: "$19",
                      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                    },
                    {
                      title: "Editing Bundle",
                      price: "$49",
                      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
                    },
                    {
                      title: "Creator Guide",
                      price: "$9",
                      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 text-center space-y-1 hover:border-purple-200 transition-colors"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-16 rounded-lg object-cover"
                      />
                      <div className="text-[10px] font-bold text-zinc-900 truncate">
                        {p.title}
                      </div>
                      <div className="text-[10px] font-extrabold text-purple-700">
                        {p.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Subscribers Box with Purple Sparkline */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-medium text-zinc-500">
                    Email Subscribers
                  </div>
                  <div className="text-lg font-black text-zinc-950 mt-0.5">2,480</div>
                  <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> + 12% this week
                  </div>
                </div>

                <div className="w-32 h-9 text-purple-500">
                  <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible" fill="none">
                    <path
                      d="M 0,22 Q 30,5 60,16 T 100,6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
