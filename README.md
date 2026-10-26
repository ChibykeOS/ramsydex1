# RAMSYDEX GLOBAL LOGISTICS — Web Portal

Production-ready web platform developed for **RAMSYDEX GLOBAL LOGISTICS** in strict accordance with the **Website Details & Developer Brief (Amended Final Draft)**, featuring the official **DHL Color Palette**.

---

## 🎨 DHL Color Palette Implementation

| Color Name | Hex Code | Tailwind Utility | Role in UI |
|---|---|---|---|
| **DHL Express Red** | `#D40511` | `bg-dhl-red`, `text-dhl-red` | Primary high-contrast CTA buttons, urgent badges, accent borders, pin highlights |
| **DHL Red Dark/Hover** | `#BA040E` | `bg-dhl-red-hover` | Button hover and active states |
| **DHL Postyellow** | `#FFCC00` | `bg-dhl-yellow`, `text-dhl-yellow` | Primary header navigation bar, accent borders, highlight strips, trust badges |
| **DHL Warm Yellow** | `#FFE066` | `bg-dhl-yellow-light` | Highlight backgrounds and subtle tints |
| **Dark Charcoal / Carbon** | `#1A1A1A` | `bg-dhl-black`, `text-dhl-black` | Authoritative typography, top bar, hero dark background, map frame |
| **Logistics Neutral Slate** | `#F8F9FA` | `bg-gray-50`, `border-gray-200` | Clean modular card backgrounds (DSV style), comparison table strips |

---

## 🚀 Key Implemented Features

### 1. Page 1: Homepage ("The Operational Gateway")
- **Top Dispatch Bar**: Live Central Malaysia operational desk status, 24-hr SLA reminder, direct phone and WhatsApp links.
- **Header & Navigation**: High-contrast branding with `32+ Years of Excellence` badge, responsive drawer menu, and high-contrast DHL Red `[Request a Quote]` button.
- **Hero Section (DSV Style)**: Realistic logistics photography, exact 2-line headline: *"Connecting Global Markets with Reliable Supply Chain & Distribution Solutions from Central Malaysia"*, dual action buttons `[Request a Quote]` and `[Explore Solutions]`.
- **Trust Numbers Bar**: 4-stat bar across the page (`32+ Years`, `28+ Countries`, `18,500+ Shipments`, `99.5% On-Time SLA`).
- **Solutions Grid (DSV Style)**: 6 modular cards with photography, 2-sentence summaries, and 3 bullet points each.
- **Global Network Map Teaser**: Route preview linking directly to Page 3.
- **Workflow Bar**: 4-step visual operational pipeline (Inbound Receiving → QC & Customs → Hub Sorting → Last-Mile Delivery with signed POD).

### 2. Page 2: Core Solutions & Operational Capabilities
- **Comparison Table (Kuehne + Nagel Style)**: Side-by-side comparison table contrasting Standard Freight Forwarders against Ramsydex Value-Added operations.
- **Quality Control (QC) & Inbound Inspection Section**: Specialized block detailing physical carton checks, 100% SKU barcode audits, tamper seal checks, and 4-hour photo inspection reports.
- **Vehicle & Cargo Specifications**: Specifications for 1-ton vans, 3-ton/5-ton trucks, 10-ton tail-lift lorries, and 40ft container prime movers.

### 3. Page 3: Global Network & World Map
- **Interactive World Map**: SVG world map with interactive pinpoints (Central Malaysia Hub, Singapore, Thailand, China, Japan, Germany, Netherlands, USA, Australia) with click/hover inspection cards detailing route volume, services, and departure frequencies.
- **Trade Corridors**: Detailed cards for Intra-ASEAN, Sino-Malaysian, Asia-Europe, and Trans-Pacific trade lanes.
- **Multi-Region Customs Clearance**: Direct EDI filing with Royal Malaysian Customs, tariff exemption guidance (ATIGA, ACFTA, RCEP).

### 4. Page 4: About Us & Credibility
- **32-Year Legacy**: Founded in 1992, showcasing corporate longevity and trust.
- **Company Mission & Vision**: End-to-end supply chain infrastructure.
- **Three Core Pillars**: (1) Global Network Connectivity, (2) Reliable & Secure Cargo Handling, (3) Optimized Logistics Workflows.
- **Central Malaysia Hub Advantage**: Proximity to Port Klang (25 mins), KLIA Cargo Village (35 mins), and major highway corridors (PLUS, KESAS, ELITE).
- **Credentials & Accreditations**: FIATA, MAFFA, ISO 9001:2015, and Royal Malaysian Customs Broker licensing.

### 5. Page 5: Operations Gallery
- **Modular Photo Grid**: High-resolution photography filtered by categories (Fleet, Warehousing, Ocean, Air, QC).
- **Interactive Lightbox Modal**: Full-screen view with 1-line captions, previous/next navigation, and category tags.

### 6. Page 6: Contact Us & Simple Quote Form
- **Topic Selector Buttons (Maersk Style)**: Clickable pills (`[Freight Quote]`, `[Customs Clearance]`, `[QC Inspection]`, `[Supply Chain]`, `[Last Mile / Courier]`, `[General Inquiry]`) that automatically synchronize and pre-fill the form's `Service Needed` field.
- **Streamlined Fields**: Essential inputs only (Name, Company, Phone, Email, Service Needed, Origin & Destination, Cargo Details / Pallet Count).
- **PDPA Consent**: Checkbox complying with Malaysia's Personal Data Protection Act 2010.
- **Spam Protection**: Invisible honeypot field.
- **Central Malaysia Hub Info**: Shah Alam address, operating hours, phone hotline, and interactive map embed.
- **Response Commitment**: *"All inquiries reviewed and answered by our Central Malaysia desk within 24 hours during business hours."*
- **Thank-You State**: Confirms submission, logs request, and offers 1-click WhatsApp escalation.

### 7. Page 7: Legal & Utility Modals
- Malaysia PDPA 2010 compliant Privacy Policy.
- Standard logistics trading terms and conditions.
- Cookie notification banner with storage persistence.
- Floating mobile WhatsApp quick action button.

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
