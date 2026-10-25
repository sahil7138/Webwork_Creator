"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Mail,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Create Your Profile",
      desc: "Showcase your work, links and socials in a clean, unified link-in-bio.",
    },
    {
      num: "02",
      title: "Sell Digital Products",
      desc: "Share your templates, presets, eBooks and courses with 0% platform fee.",
    },
    {
      num: "03",
      title: "Grow Your Audience",
      desc: "Collect emails and stay connected with built-in subscriber management.",
    },
    {
      num: "04",
      title: "Get Brand Deals",
      desc: "Make it easy for brands to work with you through live verified media kits.",
    },
    {
      num: "05",
      title: "Track Your Growth",
      desc: "See what's working with simple, real-time analytics and attribution.",
    },
  ];

  return (
    <section id="how-it-works" className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-8 sm:p-14 lg:p-16 shadow-soft-card overflow-hidden">
        {/* Soft Lavender Background Glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(233,213,255,0.35),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column: Editorial Heading & Numbered Steps */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>How It Works</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.1]">
                One platform. <br />
                <span className="font-serif italic font-normal text-purple-600 inline-block pr-1">
                  Multiple ways to earn.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Everything you need to create, grow and monetize — without the chaos.
              </p>
            </div>

            {/* Vertical Numbered Sequence */}
            <div className="space-y-4 pt-2">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isActive
                        ? "bg-purple-50/50 border-purple-200 shadow-2xs"
                        : "bg-white/60 border-zinc-100 hover:border-zinc-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-mono font-bold text-purple-600 pt-0.5">
                        {step.num}
                      </span>
                      <div className="space-y-1">
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

          {/* Right Column: Webworks Visual Product Mockup */}
          <div className="lg:col-span-6 relative">
            {/* Floating Brand Deal Pill (Top Right) */}
            <div className="absolute -top-4 -right-2 sm:right-6 px-4 py-2 rounded-2xl bg-white/95 border border-purple-200/90 shadow-float z-30 flex items-center gap-2 text-xs font-bold text-purple-900 animate-float-delayed">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>Brand Deal</span>
              <span className="text-purple-600 font-normal">Let&apos;s collaborate →</span>
            </div>

            {/* Floating Envelope Icon */}
            <div className="absolute top-1/3 -right-4 w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 z-30 animate-float-gentle">
              <Mail className="w-4 h-4" />
            </div>

            {/* Main Center Product Card */}
            <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-soft-card p-5 sm:p-7 space-y-5 text-left relative overflow-hidden">
              {/* Creator Profile Header Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-zinc-100 h-28 border border-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator Avatar & Info Row */}
              <div className="flex items-end justify-between px-2 -mt-10 relative z-20">
                <div className="flex items-end gap-3">
                  <div className="w-16 h-16 rounded-full bg-white p-1 ring-2 ring-white shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                      alt="Sahil Shaikh"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="mb-1">
                    <h4 className="text-sm font-bold text-zinc-950">Sahil Shaikh</h4>
                    <p className="text-[11px] text-zinc-500">Content Creator</p>
                  </div>
                </div>

                <button className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs transition-colors">
                  Follow
                </button>
              </div>

              {/* Social Channels Icons */}
              <div className="flex items-center gap-2 px-2 text-zinc-500 text-xs">
                <InstagramIcon className="w-3.5 h-3.5 hover:text-pink-600 transition-colors cursor-pointer" />
                <YoutubeIcon className="w-3.5 h-3.5 hover:text-red-600 transition-colors cursor-pointer" />
                <TikTokIcon className="w-3.5 h-3.5 hover:text-zinc-950 transition-colors cursor-pointer" />
                <TwitterIcon className="w-3.5 h-3.5 hover:text-zinc-950 transition-colors cursor-pointer" />
                <LinkedInIcon className="w-3.5 h-3.5 hover:text-blue-600 transition-colors cursor-pointer" />
              </div>

              {/* Digital Products Showcase Section */}
              <div className="pt-2 border-t border-zinc-100">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-950 mb-3 px-1">
                  <span>Digital Products</span>
                  <span className="text-[10px] text-purple-600 font-semibold cursor-pointer">
                    View all (3)
                  </span>
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

              {/* Email Subscribers Box */}
              <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-medium text-zinc-500">
                    Email Subscribers
                  </div>
                  <div className="text-lg font-black text-zinc-950">2,480</div>
                  <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5" /> +12% this week
                  </div>
                </div>

                <div className="w-28 h-10 text-purple-500">
                  <svg viewBox="0 0 100 30" className="w-full h-full" fill="none">
                    <path
                      d="M 0,25 Q 30,5 60,18 T 100,5"
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
