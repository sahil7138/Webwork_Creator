"use client";

import React, { useState } from "react";
import { Bot, Sparkles, Copy } from "lucide-react";

export function AIPitchCopilot() {
  const [targetBrand, setTargetBrand] = useState("");
  const [generatedPitch, setGeneratedPitch] = useState("");
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);

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
  );
}
