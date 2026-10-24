# Webworks — Creator SaaS Operating System

![Webworks Banner](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

**Webworks** is an enterprise-grade, multi-tenant creator SaaS platform that combines:
1. **Interactive Link-in-Bio & Website Builder** (drag-and-drop blocks, live mobile device simulator)
2. **Creator Store & Digital Commerce** (eBooks, presets, consultations, courses, 1-click checkout)
3. **Audience CRM & Email Broadcasts** (fan contact capture, tag management, newsletter composer)
4. **Attribution & Real-Time Analytics** (CTR, traffic referrers, UTM tracking, geo metrics)
5. **Dynamic Media Kits & Sponsorship Pipeline** (live verified stats, rate cards, deal tracker)
6. **AI Creator Tools** (sponsorship pitch generator, copy assistant, price recommendations)
7. **SaaS Billing & Super-Admin Console** (multi-tier subscriptions, commission splits)

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Dark Obsidian Glassmorphism
- **Database**: [Supabase PostgreSQL](https://supabase.com) with Row-Level Security (RLS)
- **Payments**: Stripe & Stripe Connect Custom/Express
- **Icons**: Lucide React + custom SVG icons
- **Validation**: Zod

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and configure your credentials:
```bash
cp .env.example .env.local
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001).

---

## 🧭 Project Navigation
- **Marketing Landing Page**: [`/`](http://localhost:3001)
- **Creator Studio Dashboard**: [`/dashboard`](http://localhost:3001/dashboard)
- **Live Demo Bio Profile**: [`/p/alexa`](http://localhost:3001/p/alexa)
- **Authentication**: [`/login`](http://localhost:3001/login) and [`/signup`](http://localhost:3001/signup)

---

## 📁 Repository Structure
```
Webwork_Creator/
├── AGENTS.md                  # Project rules & engineering master spec
├── docs/                      # Architectural Decision Records & Schemas
│   ├── architecture-decision-record.md
│   ├── DATABASE_SCHEMA.md
│   └── API_SPECIFICATION.md
├── src/
│   ├── app/                   # App Router pages and routes
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── landing/           # Hero, PhonePreview, RevenueCalculator, Features, Pricing
│   │   ├── dashboard/         # DashboardHeader, StatCards, DealsPipeline, AIPitchCopilot
│   │   └── ui/                # SocialIcons, reusable UI primitives
│   ├── lib/
│   │   ├── supabase/          # Schema.sql & Supabase client
│   │   ├── utils.ts           # Helpers (cn, formatting)
│   │   └── constants.ts       # Themes and demo creator datasets
│   └── types/                 # TypeScript interfaces
```

---

## 📜 Documentation
- [`AGENTS.md`](./AGENTS.md) — Master Technical Specification and Agent Rules
- [`docs/architecture-decision-record.md`](./docs/architecture-decision-record.md) — Architecture Decision Record
- [`docs/DATABASE_SCHEMA.md`](./docs/DATABASE_SCHEMA.md) — Complete PostgreSQL relational schema
- [`docs/API_SPECIFICATION.md`](./docs/API_SPECIFICATION.md) — REST API endpoints
