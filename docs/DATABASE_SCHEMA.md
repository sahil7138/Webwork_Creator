# Database Schema Specification — Webworks

## Database Engine: PostgreSQL (Supabase)
This schema provides complete multi-tenancy, Row-Level Security (RLS), and atomic transactional guarantees for digital commerce.

---

## 1. Table Definitions

### `workspaces`
Represents the primary tenant and creator brand.
```sql
CREATE TABLE public.workspaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(64) UNIQUE NOT NULL,             -- e.g. "alexa" -> webworks.ai/alexa
    display_name VARCHAR(128) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    category VARCHAR(64) DEFAULT 'General Creator',
    verified BOOLEAN DEFAULT FALSE,
    custom_domain VARCHAR(255) UNIQUE,            -- e.g. "alexastone.com"
    theme JSONB DEFAULT '{...}'::jsonb,
    plan VARCHAR(32) DEFAULT 'starter',           -- starter, pro, studio
    stripe_account_id VARCHAR(128),
    stripe_payouts_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `blocks`
Represents modular content blocks on the creator's link-in-bio page.
```sql
CREATE TABLE public.blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    type VARCHAR(32) NOT NULL, -- header, link, product, email_collector, video, tip_jar
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
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `products`
Digital products, courses, consultations, and downloadable files.
```sql
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    original_price NUMERIC(10, 2),
    product_type VARCHAR(32) NOT NULL, -- ebook, preset, course, consulting, template
    cover_image TEXT,
    file_asset_url TEXT,
    sales_count INT DEFAULT 0,
    rating NUMERIC(3, 2) DEFAULT 5.0,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `orders`
E-commerce checkout transactions and commission splits.
```sql
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    customer_email VARCHAR(255) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    platform_fee NUMERIC(10, 2) DEFAULT 0.00,
    creator_payout_amount NUMERIC(10, 2) NOT NULL,
    stripe_session_id VARCHAR(255) UNIQUE,
    status VARCHAR(32) DEFAULT 'completed',
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `contacts`
Audience CRM and email marketing subscribers.
```sql
CREATE TABLE public.contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(128),
    source VARCHAR(64) DEFAULT 'Link-in-Bio',
    tags TEXT[] DEFAULT ARRAY['Subscriber'],
    total_spent NUMERIC(10, 2) DEFAULT 0.00,
    subscribed_to_newsletter BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(workspace_id, email)
);
```

### `deals`
Brand sponsorships, deliverables, and pipeline tracking.
```sql
CREATE TABLE public.deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    brand_name VARCHAR(128) NOT NULL,
    deal_value NUMERIC(10, 2) NOT NULL,
    deliverables TEXT NOT NULL,
    status VARCHAR(32) DEFAULT 'lead', -- lead, negotiating, in_production, published, paid
    due_date DATE,
    contact_email VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `analytics_events`
Real-time click tracking, impressions, and UTM attribution.
```sql
CREATE TABLE public.analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
    event_type VARCHAR(32) NOT NULL, -- page_view, link_click, product_click, tip_click
    block_id UUID REFERENCES public.blocks(id) ON DELETE SET NULL,
    referrer TEXT,
    utm_source VARCHAR(64),
    utm_campaign VARCHAR(64),
    country_code VARCHAR(8),
    device_type VARCHAR(32),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```
