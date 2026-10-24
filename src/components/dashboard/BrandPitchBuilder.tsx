"use client";

import React, { useState } from "react";
import { Send, FileText, Copy, Check, ExternalLink, Briefcase } from "lucide-react";
import { DEMO_CREATOR } from "@/lib/constants";

export function BrandPitchBuilder() {
  const [targetBrand, setTargetBrand] = useState("Linear");
  const [packageType, setPackageType] = useState<"video" | "segment" | "newsletter" | "bundle">("bundle");
  const [contactName, setContactName] = useState("Partnerships Team");
  const [copied, setCopied] = useState(false);

  const packageRates = {
    video: { name: "Dedicated Tech Stack Deep-Dive Video", price: 3500 },
    segment: { name: "60-Second In-Video Sponsored Segment", price: 1800 },
    newsletter: { name: "Newsletter Header & Link Feature", price: 950 },
    bundle: { name: "Multi-Platform Sponsorship Package (Video + Newsletter + X/Twitter)", price: 4800 },
  };

  const selectedPackage = packageRates[packageType];

  const proposalText = `Subject: Brand Partnership Proposal: ${targetBrand} × ${DEMO_CREATOR.displayName}

Hi ${contactName},

I’m ${DEMO_CREATOR.displayName}, a design engineer and tech creator reaching 850k+ product builders, engineers, and founders monthly across YouTube and X/Twitter.

I've been using ${targetBrand} in my daily production workflow and would love to propose a dedicated integration for our upcoming tech stack deep dive series.

Key verified audience metrics:
• Total Monthly Reach: 850,000+ impressions
• Engagement Rate: 5.4% (3.2x developer media average)
• Audience Demographics: 68% US/UK/EU (Tech Leads, Designers, Software Engineers)

Proposed Deliverable:
• ${selectedPackage.name}
• Investment: $${selectedPackage.price.toLocaleString()} USD
• Delivery Timeline: 2-3 weeks from contract confirmation

You can review our complete verified media kit, audience analytics, and past brand work here:
http://localhost:3000/p/${DEMO_CREATOR.username}

Would you have 10 minutes next Tuesday or Wednesday to discuss?

Best regards,
${DEMO_CREATOR.displayName}
alexa@creator.com`;

  const handleCopy = () => {
    navigator.clipboard.writeText(proposalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenMail = () => {
    const subject = encodeURIComponent(`Brand Partnership Proposal: ${targetBrand} × ${DEMO_CREATOR.displayName}`);
    const body = encodeURIComponent(proposalText);
    window.open(`mailto:partnerships@${targetBrand.toLowerCase().replace(/\s+/g, "")}.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="p-6 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-4 h-4" /> Sponsorship Proposal Builder
        </div>
        <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
          Executive Pitch
        </span>
      </div>

      <h3 className="text-base font-bold text-white mb-1.5">
        Prepare a Verified Brand Pitch
      </h3>
      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
        Select a deliverable package to assemble a personalized sponsorship pitch backed by your verified audience demographics and live media kit link.
      </p>

      {/* Configuration Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
            Target Brand Name
          </label>
          <input
            type="text"
            value={targetBrand}
            onChange={(e) => setTargetBrand(e.target.value)}
            placeholder="e.g. Linear, Figma, Raycast, Notion"
            className="w-full text-xs px-3 py-2 rounded-xl glass-input"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
            Brand Contact / Role
          </label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="e.g. Partnerships Lead, Sarah"
            className="w-full text-xs px-3 py-2 rounded-xl glass-input"
          />
        </div>
      </div>

      {/* Deliverable Package Selector */}
      <div className="mb-4">
        <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
          Select Deliverable Package
        </label>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { id: "bundle", label: "Multi-Platform Bundle", price: "$4,800" },
            { id: "video", label: "Dedicated Video", price: "$3,500" },
            { id: "segment", label: "Sponsored Segment", price: "$1,800" },
            { id: "newsletter", label: "Newsletter Feature", price: "$950" },
          ].map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              onClick={() => setPackageType(pkg.id as any)}
              className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                packageType === pkg.id
                  ? "bg-violet-600/20 border-violet-500 text-white shadow-xs"
                  : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span className="font-medium text-[11px]">{pkg.label}</span>
              <span className="font-bold text-emerald-400 text-xs">{pkg.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Generated Proposal Preview */}
      <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto mb-4">
        {proposalText}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-violet-500/20"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Proposal</span>
            </>
          )}
        </button>

        <button
          onClick={handleOpenMail}
          className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Open Email Client</span>
        </button>
      </div>
    </div>
  );
}
