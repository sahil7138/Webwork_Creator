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
  title: "Webworks | The All-in-One Creator Operating System",
  description:
    "Empower your creative business with customizable link-in-bio pages, digital product stores, audience CRM, media kits, and real-time income analytics.",
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
      <body className="min-h-full flex flex-col bg-[#fafafa] text-zinc-900 selection:bg-zinc-950 selection:text-white">
        {children}
      </body>
    </html>
  );
}
