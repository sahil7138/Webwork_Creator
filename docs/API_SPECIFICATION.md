# REST API Specification — Webworks

## Base URL
`/api/v1`

---

## 1. Workspaces & Profile Endpoints
- `GET /api/v1/workspaces/:slug`
  - Returns public profile details, verified badge, and theme configuration.
- `PATCH /api/v1/workspaces/:slug`
  - Updates workspace display name, bio, theme tokens, or custom domain.

## 2. Block Management
- `GET /api/v1/workspaces/:slug/blocks`
  - Fetches enabled blocks ordered by `sort_order`.
- `POST /api/v1/workspaces/:slug/blocks`
  - Creates a new block (link, digital product, newsletter collector, tip jar).
- `PUT /api/v1/workspaces/:slug/blocks/reorder`
  - Updates array order for drag-and-drop sequencing.
- `DELETE /api/v1/workspaces/:slug/blocks/:blockId`
  - Deletes a block.

## 3. Commerce & Stripe Connect Checkout
- `POST /api/v1/checkout/create-session`
  - Body: `{ productId, workspaceSlug, customerEmail }`
  - Creates a Stripe Checkout Session with split payout (`application_fee_amount`).
- `POST /api/v1/webhooks/stripe`
  - Handles `checkout.session.completed`, unlocks download link, records order, and sends receipt.

## 4. Audience & CRM
- `POST /api/v1/workspaces/:slug/subscribers`
  - Body: `{ email, source }`
  - Collects subscriber from link-in-bio newsletter form.
- `GET /api/v1/workspaces/:slug/subscribers`
  - Authenticated export of subscribers with tags and lifetime spend.

## 5. Analytics & Attribution
- `POST /api/v1/analytics/event`
  - Body: `{ workspaceSlug, eventType, blockId, referrer, utmParams }`
  - Records real-time impression or click event.
- `GET /api/v1/workspaces/:slug/analytics`
  - Returns aggregated stats: 30-day views, unique clicks, conversion CTR, top referrers.

## 6. AI Creator Tools
- `POST /api/v1/ai/brand-pitch`
  - Body: `{ brandName, creatorBio, stats }`
  - Returns AI-generated custom sponsorship proposal pitch email.
- `POST /api/v1/ai/product-copy`
  - Body: `{ productTitle, category, audience }`
  - Returns compelling product descriptions and suggested pricing.
