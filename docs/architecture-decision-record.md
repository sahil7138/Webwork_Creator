# Architecture Decision Record (ADR) — Webworks Creator SaaS

## Status: Accepted
**Date:** October 2026  
**Application Name:** Webworks  
**Workspace:** `/Users/mahamadshaikh/Desktop/Webwork_Creator`

---

## 1. Context & Problem Statement
Creators and modern digital entrepreneurs require a unified platform combining link-in-bio pages, digital product commerce, audience CRM/emailing, media kit generation, and brand sponsorship tracking. Existing tools are fragmented or closed-source. **Webworks** is an independently engineered, multi-tenant creator platform designed with a high-end dark glassmorphic design system and modular micro-architecture.

---

## 2. Decision Matrix

| Domain | Decision | Rationale | Alternatives Considered |
|---|---|---|---|
| **Framework** | Next.js 16 (App Router) + React 19 + TypeScript | High performance, server components, edge routing for custom domains/slugs (`/p/[username]`), fast compilation. | Remix, Vite SPA (SPA lacks SSR/SEO for creator bio pages) |
| **Styling & Design** | Tailwind CSS v4 + Design Tokens + Glassmorphism | Rapid responsive styling, consistent color system, zero-runtime CSS footprint, smooth micro-animations. | Vanilla CSS alone (slower to scale), Tailwind v3 (lacks v4 inline theme optimization) |
| **Icons & Visuals** | Lucide React | Comprehensive, light SVG icon set with consistent stroke widths. | Heroicons, FontAwesome |
| **Data & Auth** | Supabase PostgreSQL + Row-Level Security (RLS) | Multi-tenant isolation at the DB layer; built-in auth, realtime subscriptions, and S3-compatible asset storage. | Firebase (NoSQL schema limits analytics/joins), Custom Prisma+Postgres (heavier devops overhead) |
| **Payments** | Stripe Connect Custom / Express | Enables marketplace fee splits, automated creator payouts, tax compliance, and instant checkout. | LemonSqueezy, PayPal |
| **Email Delivery** | Resend API + React Email | High deliverability, developer-first API, webhook handling for opens/clicks/bounces. | SendGrid, Mailchimp |

---

## 3. Directory Structure
```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── dashboard/
│   │   ├── page.tsx          # Overview stats, quick actions, recent earnings
│   │   ├── builder/page.tsx  # Visual block editor & live device preview
│   │   ├── store/page.tsx    # Digital products, inventory, orders
│   │   ├── audience/page.tsx # Contacts CRM, email campaigns
│   │   ├── analytics/page.tsx# Real-time traffic, conversions, UTM
│   │   └── mediakit/page.tsx # Live media kit & sponsorship rate card
│   ├── p/[username]/page.tsx # Public creator profile link-in-bio page
│   ├── layout.tsx
│   ├── page.tsx              # Marketing landing page with interactive preview
│   └── globals.css           # Design tokens, glassmorphism, glowing gradients
├── components/
│   ├── ui/                   # Reusable glass cards, badges, buttons, modals
│   ├── landing/              # Hero, phone mockup, feature highlights, pricing
│   ├── builder/              # Block palette, block editor, device frame
│   └── dashboard/            # Sidebar, stats widgets, navigation
├── lib/
│   ├── utils.ts              # cn helper, formatters (currency, dates, numbers)
│   └── constants.ts          # Default blocks, mock data, navigation items
└── types/
    └── index.ts              # Workspace, Block, Product, Contact, Deal, Metric
```

---

## 4. Phased Implementation Roadmap
- **Phase 0 (Current)**: Project setup, ADR, design system tokens, `AGENTS.md`, marketing landing page, responsive phone preview, and auth screens.
- **Phase 1**: Database schema & Supabase client integration with multi-tenant workspaces.
- **Phase 2**: Creator Studio dashboard with core navigation, earnings summary, and onboarding checklist.
- **Phase 3**: Visual drag-and-drop link-in-bio builder with live mobile preview & public `/p/[username]` rendering.
- **Phase 4**: Creator store module (digital goods, pricing, checkout flow).
- **Phase 5**: Audience CRM, contact tags, and email newsletter broadcast composer.
- **Phase 6**: Analytics engine with real-time CTR, visitor geo breakdown, and revenue charts.
- **Phase 7**: Dynamic media kit generator & brand deal sponsorship pipeline.
- **Phase 8**: Sponsorship proposal & rate card builder (verified deal proposals, deliverable tracking).
- **Phase 9**: Super-admin console, system volume telemetry & platform administration.
- **Phase 10**: Production hardening, automated E2E tests, and Vercel release readiness.
