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
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="bg-grid-pattern absolute inset-0 pointer-events-none" />

      {/* Top Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8 z-10 group">
        <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-white font-extrabold text-sm group-hover:scale-105 transition-transform">
          W
        </div>
        <span className="font-extrabold text-xl text-zinc-950 tracking-tight">Webworks</span>
      </Link>

      {/* Auth Card */}
      <div className="w-full max-w-md rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xl shadow-zinc-200/50 relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Welcome Back</h1>
          <p className="text-xs text-zinc-500 mt-1.5">
            Sign in to manage your link-in-bio, products, and brand deals
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-2.5 mb-6">
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full py-2.5 px-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-2.5 transition-all shadow-sm"
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
            className="w-full py-2.5 px-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-2.5 transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-zinc-900" />
            Continue with GitHub
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-zinc-200 w-full" />
          <span className="bg-white px-3 text-[11px] text-zinc-400 uppercase tracking-wider relative">
            Or with email
          </span>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alexa@creator.com"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-medium text-zinc-700">Password</label>
              <a href="#forgot" className="text-[11px] text-zinc-500 hover:text-zinc-950 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-zinc-400 rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In to Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-zinc-500 mt-6">
          Don't have an account yet?{" "}
          <Link href="/signup" className="text-zinc-950 font-bold hover:underline">
            Claim Handle Free
          </Link>
        </p>
      </div>

      <div className="mt-8 text-center text-xs text-zinc-500 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600" /> 256-bit SSL encrypted & GDPR compliant
      </div>
    </div>
  );
}
