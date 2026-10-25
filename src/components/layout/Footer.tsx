import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-extrabold text-xs shadow-2xs">
            W
          </div>
          <span className="text-sm font-bold text-zinc-950">Webworks Creator Platform</span>
        </div>

        <p className="text-xs text-zinc-500">
          © 2026 Webworks Inc. All rights reserved. Built for independent creators.
        </p>

        <div className="flex items-center gap-6 text-xs text-zinc-600">
          <Link href="/p/alexa" className="hover:text-zinc-950 transition-colors">
            Demo Profile
          </Link>
          <Link href="/dashboard" className="hover:text-zinc-950 transition-colors">
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-zinc-950 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </footer>
  );
}
