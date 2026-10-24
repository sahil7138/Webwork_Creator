"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, ArrowRight, Mail, Lock, User, AtSign, CheckCircle2 } from "lucide-react";

function SignUpContent() {
  const searchParams = useSearchParams();
  const initialHandle = searchParams.get("handle") || "";
  const initialPlan = searchParams.get("plan") || "free";

  const [handle, setHandle] = useState(initialHandle);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialHandle) {
      setHandle(initialHandle);
    }
  }, [initialHandle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#06080e] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      <div className="bg-grid-pattern absolute inset-0 opacity-30 pointer-events-none" />

      {/* Top Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8 z-10 group">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-750 flex items-center justify-center text-white font-extrabold text-sm group-hover:border-zinc-500 transition-colors">
          W
        </div>
        <span className="font-extrabold text-xl text-white tracking-tight">Webworks</span>
      </Link>

      {/* SignUp Card */}
      <div className="w-full max-w-lg rounded-3xl glass-panel border border-white/10 p-8 sm:p-10 shadow-2xl shadow-black/80 relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Create Your Creator Account
          </h1>
          <p className="text-xs text-slate-400 mt-1.5">
            Join 42,000+ creators building on Webworks with zero technical hassle.
          </p>
        </div>

        {/* 100% Free Guarantee Banner */}
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Free Forever Access</span>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
            0% Platform Fee
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Claim Handle Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Claim Your Vanity URL
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-xs text-zinc-500 select-none">
                webworks.io/
              </span>
              <input
                type="text"
                required
                value={handle}
                onChange={(e) =>
                  setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))
                }
                placeholder="yourname"
                className="w-full text-xs pl-28 pr-3.5 py-2.5 rounded-xl glass-input font-medium font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Alexa Stone"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl glass-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alexa@creator.com"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl glass-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl glass-input"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-zinc-900 border-t-zinc-400 rounded-full animate-spin" />
            ) : (
              <>
                <span>Launch Creator Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-white font-semibold hover:underline">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#06080e] flex items-center justify-center text-slate-400 text-xs">
          Loading sign up...
        </div>
      }
    >
      <SignUpContent />
    </Suspense>
  );
}
