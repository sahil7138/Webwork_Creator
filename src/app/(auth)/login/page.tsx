"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Mail, Lock, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#06080e] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="bg-grid-pattern absolute inset-0 opacity-30 pointer-events-none" />
      <div className="ambient-glow-purple -top-20 left-1/2 -translate-x-1/2 opacity-30" />

      {/* Top Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8 z-10 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
          <div className="w-full h-full bg-[#090d1a] rounded-[10px] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-violet-400" />
          </div>
        </div>
        <span className="font-extrabold text-xl text-white tracking-tight">Webworks</span>
      </Link>

      {/* Auth Card */}
      <div className="w-full max-w-md rounded-3xl glass-panel border border-white/10 p-8 shadow-2xl shadow-violet-950/40 relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-xs text-slate-400 mt-1.5">
            Sign in to manage your link-in-bio, products, and brand deals
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-2.5 mb-6">
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2.5 transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.1 8.9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
              />
              <path
                fill="#FBBC05"
                d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.4s.2-1.7.4-2.4L1.6 7c-.8 1.6-1.3 3.4-1.3 5.3s.5 3.7 1.3 5.3l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5l-3.7 2.9C3.5 20.1 7.4 23 12 23z"
              />
            </svg>
            Continue with Google
          </button>
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2.5 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            Continue with GitHub
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-white/10 w-full" />
          <span className="bg-[#0b101d] px-3 text-[11px] text-slate-500 uppercase tracking-wider relative">
            Or with email
          </span>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address
            </label>
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
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-medium text-slate-300">Password</label>
              <a href="#forgot" className="text-[11px] text-violet-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl glass-input"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In to Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an account yet?{" "}
          <Link href="/signup" className="text-violet-400 font-semibold hover:underline">
            Claim Handle Free
          </Link>
        </p>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-400" /> 256-bit SSL encrypted & GDPR compliant
      </div>
    </div>
  );
}
