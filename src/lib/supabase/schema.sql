-- ====================================================================
-- WEBWORKS CREATOR SAAS PLATFORM — PRODUCTION POSTGRESQL SCHEMA (SUPABASE)
-- Multi-Tenant Creator Operating System with Row-Level Security (RLS)
-- ====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. WORKSPACES (Creator Profiles & Tenant Boundary)
CREATE TABLE IF NOT EXISTS public.workspaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(64) UNIQUE NOT NULL,
    display_name VARCHAR(128) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    category VARCHAR(64) DEFAULT 'General Creator',
    verified BOOLEAN DEFAULT FALSE,
    custom_domain VARCHAR(255) UNIQUE,
    theme JSONB DEFAULT '{"id": "midnight-neon", "name": "Midnight Neon", "background": "bg-slate-950", "cardBg": "bg-slate-900/80", "textColor": "text-white", "buttonRadius": "rounded-xl"}'::jsonb,
    plan VARCHAR(32) DEFAULT 'starter' CHECK (plan IN ('starter', 'pro', 'studio')),
    stripe_account_id VARCHAR(128),
    stripe_payouts_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. WORKSPACE MEMBERS (Role-Based Access)
CREATE TABLE IF NOT EXISTS public.workspace_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    user_id UUID NOT NULL, -- references auth.users in Supabase
    role VARCHAR(32) DEFAULT 'owner' CHECK (role IN ('owner', 'admin', 'collaborator')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PAGE BLOCKS (Interactive Link-in-Bio System)
CREATE TABLE IF NOT EXISTS public.blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    type VARCHAR(32) NOT NULL CHECK (type IN ('header', 'link', 'product', 'email_collector', 'video', 'music', 'socials', 'tip_jar', 'text')),
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    url TEXT,
    price NUMERIC(10, 2),
    badge VARCHAR(64),
    icon_name VARCHAR(64),
    thumbnail_url TEXT,
    enabled BOOLEAN DEFAULT TRUE,
    sort_order INT NOT NULL DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. DIGITAL PRODUCTS (Creator Store & Instant Fulfillment)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    original_price NUMERIC(10, 2),
    product_type VARCHAR(32) NOT NULL CHECK (product_type IN ('ebook', 'preset', 'course', 'consulting', 'template')),
    cover_image TEXT,
    file_asset_url TEXT,
    sales_count INT DEFAULT 0,
    rating NUMERIC(3, 2) DEFAULT 5.0,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ORDERS & PURCHASES
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    customer_email VARCHAR(255) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    platform_fee NUMERIC(10, 2) DEFAULT 0.00,
    creator_payout_amount NUMERIC(10, 2) NOT NULL,
    stripe_session_id VARCHAR(255) UNIQUE,
    stripe_payment_intent_id VARCHAR(255),
    status VARCHAR(32) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'refunded', 'disputed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. AUDIENCE CONTACTS (Creator CRM & Subscribers)
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(128),
    source VARCHAR(64) DEFAULT 'Link-in-Bio',
    tags TEXT[] DEFAULT ARRAY['Subscriber'],
    total_spent NUMERIC(10, 2) DEFAULT 0.00,
    subscribed_to_newsletter BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(workspace_id, email)
);

-- 7. BRAND DEALS & SPONSORSHIPS PIPELINE
CREATE TABLE IF NOT EXISTS public.deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    brand_name VARCHAR(128) NOT NULL,
    deal_value NUMERIC(10, 2) NOT NULL,
    deliverables TEXT NOT NULL,
    status VARCHAR(32) DEFAULT 'lead' CHECK (status IN ('lead', 'negotiating', 'in_production', 'published', 'paid')),
    due_date DATE,
    contact_email VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. ANALYTICS EVENTS (Attribution & Real-time Clicks)
CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    event_type VARCHAR(32) NOT NULL CHECK (event_type IN ('page_view', 'link_click', 'product_click', 'tip_click', 'newsletter_signup')),
    block_id UUID REFERENCES public.blocks(id) ON DELETE SET NULL,
    referrer TEXT,
    utm_source VARCHAR(64),
    utm_medium VARCHAR(64),
    utm_campaign VARCHAR(64),
    country_code VARCHAR(8),
    device_type VARCHAR(32),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- ROW-LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Public can read published workspace profiles and blocks
CREATE POLICY "Public workspaces are viewable by everyone" 
ON public.workspaces FOR SELECT USING (true);

CREATE POLICY "Public blocks are viewable by everyone" 
ON public.blocks FOR SELECT USING (enabled = true);

CREATE POLICY "Public products are viewable by everyone" 
ON public.products FOR SELECT USING (is_published = true);

-- Analytics events can be inserted by public
CREATE POLICY "Public can log analytics events" 
ON public.analytics_events FOR INSERT WITH CHECK (true);
