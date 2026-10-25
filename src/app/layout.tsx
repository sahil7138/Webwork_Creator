import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webworks — Everything you need to build your creator business",
  description:
    "Share your work, sell digital products, grow your email list, collect tips, and manage brand deals — all from one place.",
  keywords: [
    "creator platform",
    "link in bio",
    "digital store",
    "media kit generator",
    "creator crm",
    "brand partnerships",
  ],
  authors: [{ name: "Webworks Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
