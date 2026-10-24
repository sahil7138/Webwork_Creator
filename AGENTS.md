<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# PROJECT MASTER SPECIFICATION — WEBWORKS CREATOR SAAS PLATFORM

## 1. Mission & High-Level Scope
Build an enterprise-grade, multi-tenant creator SaaS platform with original branding (**Webworks**) and modern dark glassmorphic UI. The platform combines:
1. **Interactive Link-in-Bio & Website Builder**: Drag-and-drop block hierarchy, live mobile simulator, custom vanity slug (`/p/[username]`), and domain publishing.
2. **Creator Store & Digital Commerce**: E-books, design presets, video courses, 1-on-1 consultations, and instant checkout.
3. **Audience CRM & Email Marketing**: Subscriber collection, contact tags, customer segmentation, and automated newsletters.
4. **Attribution & Real-Time Analytics**: Clicks, conversion rates, earnings overview, UTM tracking, and visitor device/geo breakdown.
5. **Media Kits & Brand Partnerships**: Auto-generating verified audience metrics, rate cards, and brand deal pipeline from pitch to paid.
6. **Sponsorship Pitch & Proposal Builder**: Professional rate card calculators, deliverable packages, and verified brand proposal templates.
7. **100% Free Creator Model & Platform Console**: Zero subscription paywalls, 0% platform transaction take-rate (creators keep 100% of sales), and system health administration.

---

## 2. Architecture & Technology Stack
- **Framework**: Next.js 16 App Router (TypeScript in strict mode, React 19)
- **Styling**: Tailwind CSS v4 with custom design tokens, dark glassmorphism, glowing accents, and micro-interactions
- **Icons**: Lucide React + custom SVG icons for social platforms
- **Data & Auth**: Supabase PostgreSQL with Row-Level Security (RLS) for tenant isolation
- **Payments**: Stripe & Stripe Connect for marketplace split payouts
- **Email Delivery**: Resend API + standard webhook handling
- **Storage**: Supabase Storage / S3 for digital files and creator media assets

---

## 3. Directory Layout Conventions
```
Webwork_Creator/
├── AGENTS.md                  # Project rules & engineering master spec
├── docs/                      # Architectural Decision Records & Schemas
│   ├── architecture-decision-record.md
│   ├── DATABASE_SCHEMA.md
│   ├── API_SPECIFICATION.md
│   └── ROADMAP.md
├── public/                    # Static brand assets and icons
├── src/
│   ├── app/
│   │   ├── (auth)/            # Auth routes (login, signup)
│   │   ├── dashboard/         # Studio management interface
│   │   ├── p/[username]/      # Public creator link-in-bio profiles
│   │   ├── layout.tsx         # Global layout and fonts
│   │   ├── page.tsx           # High-converting marketing landing page
│   │   └── globals.css        # Design tokens, obsidian glassmorphism
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── landing/           # HeroSection, PhonePreview, RevenueCalculator, FeatureGrid, PricingCards
│   │   ├── dashboard/         # DashboardHeader, StatCards, DealsPipeline, BrandPitchBuilder
│   │   ├── profile/           # Public bio tabs, StoreTab, MediaKitTab, CheckoutModal
│   │   └── ui/                # Shared buttons, badges, SocialIcons
│   ├── lib/
│   │   ├── supabase/          # Supabase client & production schema.sql
│   │   ├── utils.ts           # Utility functions (cn, currency, compact numbers)
│   │   └── constants.ts       # Themes, demo creator profiles, products, deals
│   └── types/
│       └── index.ts           # TypeScript interfaces (CreatorProfile, Block, Product, Deal)
```

---

## 4. Database Entities & Row-Level Security
- `workspaces`: Creator profile, vanity slug, custom domain, theme preferences, Stripe account ID.
- `workspace_members`: Multi-tenant membership with role-based permissions (`owner`, `admin`, `collaborator`).
- `blocks`: Link trees, products, newsletters, tip jars, videos, and music embeds with drag-and-drop sort order.
- `products`: Digital downloads, pricing, sales counts, asset download links.
- `orders`: Stripe checkout sessions, customer emails, 0% platform fee, and 100% direct creator payouts.
- `contacts`: Audience subscribers, tags, source, and lifetime customer spend.
- `deals`: Sponsorship tracker, brand deliverables, pipeline status (`lead`, `negotiating`, `in_production`, `paid`).
- `analytics_events`: Real-time clicks, views, referrer domains, and UTM campaign parameters.

---

## 5. Visual Design Tokens & Aesthetic Standards
- **Aesthetic**: Obsidian Minimalism (Linear, Bento, Apple Studio dark aesthetic). Authentic, grounded, tactile, zero gimmicks or AI-generated neon.
- **Backgrounds**: Obsidian deep space (`#06080e`), surface slate (`#0c101c`), card neutral (`#121215`, `#18181b`).
- **Borders & Dividers**: Crisp hairline borders (`border-white/10`, `border-zinc-800`), high-contrast subtle focus rings.
- **Accents & CTAs**: Crisp solid white buttons with charcoal hover (`bg-white hover:bg-zinc-200 text-zinc-950 font-bold`), metallic silver accents, muted zinc secondary tags.
- **Zero Placeholder Broken States**: All demo views, avatars, and blocks render realistic mock content.

---

## 6. Implementation Roadmap
- [x] **Phase 0 — Project Scaffolding & Foundation**: Next.js 16, Tailwind v4, design tokens, marketing landing page, interactive phone simulator, revenue calculator, auth screens, and build validation.
- [ ] **Phase 1 — Database & Authentication**: Connect Supabase PostgreSQL, run `schema.sql`, configure multi-tenant RLS, and wire auth state.
- [ ] **Phase 2 — Studio Dashboard & Onboarding**: Dynamic creator overview, profile settings, and Stripe Connect onboarding.
- [ ] **Phase 3 — Visual Drag-and-Drop Page Builder**: Block CRUD, live device preview synchronization, and theme switching.
- [ ] **Phase 4 — Creator Store & Stripe Checkout**: Digital file uploading, price variants, Apple Pay / Google Pay webhooks.
- [ ] **Phase 5 — Audience CRM & Broadcasts**: Contact tagging, CSV export, and Resend newsletter broadcaster.
- [ ] **Phase 6 — Real-Time Attribution Analytics**: Visual graphs, referrer tracking, and link click heatmaps.
- [ ] **Phase 7 — Dynamic Media Kit & Brand Deals Pipeline**: Automated rate cards, sponsor intake forms, and invoice tracker.
- [ ] **Phase 8 — Brand Pitch & Proposal Builder**: Executive sponsorship outreach proposals, deliverable agreements, and invoice tracking.
- [ ] **Phase 9 — Super-Admin Console**: System audit logs, platform volume metrics, and user management.
- [ ] **Phase 10 — Production Release & Hardening**: E2E testing, SEO optimization, and Vercel edge deployment.
