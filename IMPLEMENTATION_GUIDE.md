# Location Technologies Website — Content Update Implementation Guide

**Purpose:** Step-by-step guide to align the website with your real business — actual projects, correct services, real founding date, accurate tech stack, and live social links.

**Founding date:** 14 November 2023  
**LinkedIn:** https://www.linkedin.com/company/locationtechnologies/

---

## Files You Will Touch

| File | What Changes |
|------|-------------|
| `content/portfolio.json` | Replace placeholder projects with your real GitHub projects |
| `content/services.json` | Replace GIS-only services with your 6 actual services |
| `content.config.ts` | Update the service category enum to match new categories |
| `app/components/portfolio/PortfolioGrid.vue` | Update filter buttons and category maps |
| `app/components/services/ServicesTechStack.vue` | Update tech stack to full competency list |
| `app/components/about/AboutStory.vue` | Fix founding year (2019 → 2023) and story text |
| `app/components/home/HomeStats.vue` | Correct "5+ years" → "2+ years" and other stats |
| `app/components/home/HomeHero.vue` | Correct hardcoded stat text in hero |
| `app/components/layout/TheFooter.vue` | Add real LinkedIn URL, update services list |

---

## Phase 1 — Real Portfolio Projects

### Context

`content/portfolio.json` currently has 6 fabricated GIS projects (PowerGrid Authority, TransPak Logistics, etc.). These need to be replaced with your real GitHub projects.

Your 10 repos represent **6 distinct deliverable projects** when grouped:

| Project | Repos Involved | New Category |
|---------|---------------|--------------|
| CricketMania | cricketmania-app, cricketmania-frontend, cricketmania-backend | `saas` |
| Map Builder | map-builder | `mapping` |
| Travelista | travelista, travelista-backend, travelista-mobile | `saas` |
| Spatial Estate | spatial-estate | `saas` |
| TailorMe | tailorMe | `ecommerce` |
| Location Tech Portfolio | Portfolio | `saas` |

### New Category Values

| Value | Display Label | Used For |
|-------|--------------|---------|
| `saas` | SaaS & Web Apps | Full-stack web platforms, SaaS products |
| `mapping` | GIS & Mapping | Geographic/mapping tools |
| `mobile` | Mobile Apps | Mobile applications |
| `ecommerce` | E-Commerce | Shopify, WordPress, tailoring, retail |

### File to Edit: `content/portfolio.json`

Replace the **entire file** with the following. Customize `shortDesc`, `description`, `year`, and `technologies` to match what you remember about each project.

```json
{
  "projects": [
    {
      "id": 1,
      "slug": "cricketmania",
      "title": "CricketMania",
      "client": "CricketMania",
      "category": "saas",
      "thumbnail": "/images/portfolio/cricketmania.jpg",
      "shortDesc": "Full-stack SaaS sports management platform built with TypeScript.",
      "description": "Built a full-stack sports management platform with a React frontend, Node.js backend, and a unified app shell. Covers tournament management, live scoreboards, player statistics, and team administration dashboards.",
      "technologies": ["TypeScript", "React", "Node.js", "PostgreSQL"],
      "year": 2025,
      "featured": true
    },
    {
      "id": 2,
      "slug": "map-builder",
      "title": "Map Builder",
      "client": "Internal Tool",
      "category": "mapping",
      "thumbnail": "/images/portfolio/map-builder.jpg",
      "shortDesc": "Interactive web-based GIS tool for creating and sharing custom maps.",
      "description": "Developed a browser-based map builder that allows users to create, style, and export custom maps. Supports layer management, data import (GeoJSON, CSV), and shareable map URLs. Built entirely in JavaScript with a Leaflet-powered canvas.",
      "technologies": ["JavaScript", "Leaflet", "GeoJSON", "HTML5 Canvas"],
      "year": 2025,
      "featured": true
    },
    {
      "id": 3,
      "slug": "travelista",
      "title": "Travelista",
      "client": "Travelista",
      "category": "saas",
      "thumbnail": "/images/portfolio/travelista.jpg",
      "shortDesc": "Full-stack tour and travel planning platform — web, backend, and mobile.",
      "description": "Designed and built a complete travel planning platform spanning a React web app, Python/Django REST API backend, and a cross-platform mobile app. Features itinerary builder, trip booking management, destination guides, and real-time travel notifications.",
      "technologies": ["JavaScript", "Python", "Django", "React", "Mobile"],
      "year": 2025,
      "featured": false
    },
    {
      "id": 4,
      "slug": "spatial-estate",
      "title": "Spatial Estate",
      "client": "Spatial Estate",
      "category": "saas",
      "thumbnail": "/images/portfolio/spatial-estate.jpg",
      "shortDesc": "Real estate marketing application with map-based property discovery.",
      "description": "Built a real estate marketing platform with an interactive map interface for property discovery, radius-based filtering, neighborhood insights, and agent lead management. Combines spatial data with modern property listing workflows.",
      "technologies": ["TypeScript", "Vue.js", "PostGIS", "Node.js"],
      "year": 2025,
      "featured": true
    },
    {
      "id": 5,
      "slug": "tailorme",
      "title": "TailorMe",
      "client": "TailorMe",
      "category": "ecommerce",
      "thumbnail": "/images/portfolio/tailorme.jpg",
      "shortDesc": "Custom tailoring management system with online ordering and appointment booking.",
      "description": "Developed an end-to-end tailoring management system covering customer measurement profiles, online order placement, appointment scheduling, and order status tracking. Designed for small-to-medium tailoring businesses moving operations online.",
      "technologies": ["JavaScript", "Vue.js", "Node.js", "MySQL"],
      "year": 2025,
      "featured": false
    },
    {
      "id": 6,
      "slug": "location-tech-portfolio",
      "title": "Location Tech Portfolio",
      "client": "Location Technologies",
      "category": "saas",
      "thumbnail": "/images/portfolio/portfolio.jpg",
      "shortDesc": "Company portfolio website built with Nuxt 3, Tailwind CSS v4, and GSAP.",
      "description": "Designed and built the company's own portfolio website using Nuxt 3, Tailwind CSS v4, @nuxt/content, and GSAP animations. Features scroll-reveal effects, animated stats, filterable portfolio grid, and a fully responsive layout from mobile to desktop.",
      "technologies": ["Vue.js", "Nuxt 3", "Tailwind CSS", "GSAP"],
      "year": 2025,
      "featured": false
    }
  ]
}
```

### Todos — Phase 1

- [ ] Replace the entire contents of `content/portfolio.json` with the JSON above
- [ ] Fill in the real `year` for each project (the year you actually delivered it)
- [ ] Update `shortDesc` and `description` with actual outcomes or features you remember
- [ ] Add project thumbnails to `public/images/portfolio/` — name them `cricketmania.jpg`, `map-builder.jpg`, `travelista.jpg`, `spatial-estate.jpg`, `tailorme.jpg`, `portfolio.jpg`. Until images exist, the cards still render with gradient backgrounds — no visual breakage.
- [ ] Remove any project you don't want to show publicly (just delete its object from the array)

---

## Phase 2 — Correct Services

### Context

`content/services.json` has 6 GIS-specific services (GPS Fleet Tracking, Geofencing, etc.) but your actual offerings are much broader. Replace them with your 6 real services.

### File to Edit: `content/services.json`

Replace the **entire file**:

```json
{
  "services": [
    {
      "id": 1,
      "slug": "gis-mapping",
      "title": "Geographic & Web Mapping",
      "icon": "mdi:map",
      "shortDesc": "Custom GIS platforms, spatial analysis, and interactive web maps.",
      "description": "We design and build GIS platforms, spatial databases, and interactive web maps tailored to your operations. From QGIS and ArcGIS workflows to PostGIS-backed web applications — we bring your location data to life with precision tools used by enterprises and public-sector agencies.",
      "category": "mapping"
    },
    {
      "id": 2,
      "slug": "saas-paas",
      "title": "SaaS & PaaS Development",
      "icon": "mdi:cloud-braces",
      "shortDesc": "Highly scalable, multi-tenant SaaS and PaaS systems built to grow.",
      "description": "We architect and build highly scalable SaaS and PaaS platforms with multi-tenant support, subscription management, and cloud-native deployment. From early MVP to full enterprise scale — systems engineered to grow without re-architecting.",
      "category": "saas"
    },
    {
      "id": 3,
      "slug": "legacy-modernization",
      "title": "Legacy System Modernization",
      "icon": "mdi:layers-triple",
      "shortDesc": "Revamp old codebases with microservices, module federation, and modern stacks.",
      "description": "We migrate legacy monoliths to modern architectures — microservices, module federation, and event-driven systems. Preserve your existing data and business logic while gaining the speed, resilience, and maintainability of a modern software stack.",
      "category": "modernization"
    },
    {
      "id": 4,
      "slug": "ai-systems",
      "title": "AI-Driven Systems",
      "icon": "mdi:robot-outline",
      "shortDesc": "Intelligent web and desktop applications powered by AI and ML.",
      "description": "We integrate AI and machine learning into web and desktop applications — intelligent search, recommendation engines, document processing pipelines, and LLM-powered automation workflows. Build software that learns, adapts, and delivers measurable efficiency gains.",
      "category": "ai"
    },
    {
      "id": 5,
      "slug": "wordpress-shopify",
      "title": "WordPress & Shopify",
      "icon": "mdi:storefront-outline",
      "shortDesc": "Custom themes, plugins, and e-commerce solutions on WordPress and Shopify.",
      "description": "We build custom WordPress websites and Shopify stores tailored to your brand and business flow. From theme development and plugin customization to complete e-commerce setups — payment integrations, product management, and conversion-optimized storefronts.",
      "category": "ecommerce"
    },
    {
      "id": 6,
      "slug": "devops",
      "title": "DevOps Infrastructure",
      "icon": "mdi:server-network",
      "shortDesc": "Cloud infrastructure, CI/CD pipelines, and auto-scaling deployment architecture.",
      "description": "We design and manage cloud infrastructure, CI/CD pipelines, Docker and Kubernetes containerization, and auto-scaling deployment strategies. Build the operational backbone that makes your software reliable, observable, and cost-efficient at any scale.",
      "category": "devops"
    }
  ]
}
```

### Todos — Phase 2

- [ ] Replace the entire contents of `content/services.json` with the JSON above
- [ ] Review each description and adjust the wording to match how you naturally pitch that service
- [ ] Confirm icons exist: open https://icon-sets.iconify.design and search `mdi:cloud-braces`, `mdi:layers-triple`, `mdi:robot-outline`, `mdi:storefront-outline`, `mdi:server-network` — all are valid MDI icons

---

## Phase 3 — Fix the Content Schema

### Context

`content.config.ts` defines a strict Zod enum for service categories: `z.enum(['gis', 'tracking', 'geofencing', 'analytics'])`. Since Phase 2 introduces new categories (`mapping`, `saas`, `modernization`, `ai`, `ecommerce`, `devops`), you **must** update this schema or the content will fail to load.

### File to Edit: `content.config.ts`

**Find line 10:**
```ts
category: z.enum(['gis', 'tracking', 'geofencing', 'analytics']),
```

**Replace with:**
```ts
category: z.enum(['mapping', 'saas', 'modernization', 'ai', 'ecommerce', 'devops']),
```

### Todos — Phase 3

- [ ] Update the service `category` enum in `content.config.ts` (line 10)
- [ ] Run `pnpm dev` — if the content module throws a validation error, this is the cause. The fix above resolves it.

---

## Phase 4 — Portfolio Filter Categories

### Context

`PortfolioGrid.vue` has 5 filter buttons (All, GIS & Mapping, GPS Tracking, Geofencing, Analytics) and several internal maps keyed on `gis`, `tracking`, `geofencing`, `analytics`. These need to match the new project category values (`saas`, `mapping`, `mobile`, `ecommerce`).

### File to Edit: `app/components/portfolio/PortfolioGrid.vue`

Make the following replacements in the `<script setup>` block.

---

**1. Replace the `categories` array (around line 8):**

Find:
```js
const categories = [
  { label: 'All', value: 'all' },
  { label: 'GIS & Mapping', value: 'gis' },
  { label: 'GPS Tracking', value: 'tracking' },
  { label: 'Geofencing', value: 'geofencing' },
  { label: 'Analytics', value: 'analytics' },
]
```

Replace with:
```js
const categories = [
  { label: 'All', value: 'all' },
  { label: 'SaaS & Web Apps', value: 'saas' },
  { label: 'GIS & Mapping', value: 'mapping' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'E-Commerce', value: 'ecommerce' },
]
```

---

**2. Replace `categoryIcons` (around line 26):**

Find:
```js
const categoryIcons: Record<string, string> = {
  gis: 'mdi:map',
  tracking: 'mdi:truck-fast',
  geofencing: 'mdi:map-marker-radius',
  analytics: 'mdi:chart-line',
}
```

Replace with:
```js
const categoryIcons: Record<string, string> = {
  saas: 'mdi:cloud-braces',
  mapping: 'mdi:map',
  mobile: 'mdi:cellphone',
  ecommerce: 'mdi:storefront-outline',
}
```

---

**3. Replace `categoryLabels` (around line 33):**

Find:
```js
const categoryLabels: Record<string, string> = {
  gis: 'GIS & Mapping',
  tracking: 'GPS Tracking',
  geofencing: 'Geofencing',
  analytics: 'Analytics',
}
```

Replace with:
```js
const categoryLabels: Record<string, string> = {
  saas: 'SaaS & Web Apps',
  mapping: 'GIS & Mapping',
  mobile: 'Mobile Apps',
  ecommerce: 'E-Commerce',
}
```

---

**4. Replace `categoryShort` (around line 40):**

Find:
```js
const categoryShort: Record<string, string> = {
  gis: 'GIS',
  tracking: 'Tracking',
  geofencing: 'Geofencing',
  analytics: 'Analytics',
}
```

Replace with:
```js
const categoryShort: Record<string, string> = {
  saas: 'SaaS',
  mapping: 'GIS',
  mobile: 'Mobile',
  ecommerce: 'E-Commerce',
}
```

---

**5. Replace `bgGradients` (around line 47):**

Find:
```js
const bgGradients: Record<string, string> = {
  gis: 'bg-gis',
  tracking: 'bg-track',
  geofencing: 'bg-geo',
  analytics: 'bg-analytics',
}
```

Replace with:
```js
const bgGradients: Record<string, string> = {
  saas: 'bg-saas',
  mapping: 'bg-mapping',
  mobile: 'bg-mobile',
  ecommerce: 'bg-ecommerce',
}
```

---

**6. Replace gradient CSS in `<style scoped>` (around line 153):**

Find the 4 gradient rules (`.bg-gis`, `.bg-track`, `.bg-geo`, `.bg-analytics`) and replace them with:

```css
.bg-saas {
  background: linear-gradient(135deg, #00B4D8 0%, #0a7d9c 100%);
}

.bg-mapping {
  background: linear-gradient(135deg, #00C896 0%, #0a7d63 100%);
}

.bg-mobile {
  background: linear-gradient(135deg, #16314f 0%, #0A1628 100%);
}

.bg-ecommerce {
  background: linear-gradient(135deg, #0a7d9c 0%, #00C896 100%);
}
```

### Todos — Phase 4

- [ ] Replace `categories` array
- [ ] Replace `categoryIcons` map
- [ ] Replace `categoryLabels` map
- [ ] Replace `categoryShort` map
- [ ] Replace `bgGradients` map
- [ ] Replace the 4 CSS gradient classes in `<style scoped>`
- [ ] Run `pnpm dev`, visit `/portfolio`, and test each filter button

---

## Phase 5 — Tech Stack Section

### Context

`ServicesTechStack.vue` currently shows 8 geospatial-only tools (QGIS, ArcGIS, PostGIS, Mapbox, etc.). Your actual competencies span backend, frontend, CMS/e-commerce, GIS tools, and infrastructure — update it to reflect the full picture.

### File to Edit: `app/components/services/ServicesTechStack.vue`

**Replace the `technologies` array (lines 2–11) with this 12-item list:**

```js
const technologies = [
  { name: 'Python / Django', glyph: 'Py' },
  { name: 'Node.js', glyph: 'JS' },
  { name: 'Vue.js / Nuxt', glyph: 'V' },
  { name: 'React.js', glyph: 'R' },
  { name: 'WordPress', glyph: 'WP' },
  { name: 'Shopify', glyph: 'Sh' },
  { name: 'QGIS / ArcGIS', glyph: 'GIS' },
  { name: 'GeoServer', glyph: 'GS' },
  { name: 'Erdas Imagine', glyph: 'EI' },
  { name: 'Lidar Processing', glyph: 'LiD' },
  { name: 'Docker / Kubernetes', glyph: 'DK' },
  { name: 'PostgreSQL / PostGIS', glyph: 'PG' },
]
```

The existing 4-column grid (`grid-cols-2 ... min-[981px]:grid-cols-4`) handles 12 items perfectly — 3 rows of 4.

### Optional: Update the Section Header

The current heading says "Technologies We Use". You may want to update it to be broader:

In the template, find:
```html
Technologies We Use<span class="underline-grad" />
```

Consider changing to:
```html
Our Technology Stack<span class="underline-grad" />
```

And the subtitle (currently "Best-in-class geospatial and engineering tools") can become:
```html
subtitle="From backend frameworks and GIS platforms to cloud infrastructure and e-commerce — the tools we use to build precise, scalable software."
```

### Todos — Phase 5

- [ ] Replace `technologies` array in `ServicesTechStack.vue` with the 12-item list
- [ ] (Optional) Update section heading and subtitle to be less GIS-specific
- [ ] Run `pnpm dev` and visit `/services` to verify the grid renders 3 rows of 4 cards correctly

---

## Phase 6 — Company Story & Timeline (Founding Date Fix)

### Context

`AboutStory.vue` has a timeline starting in 2019 and the story text says "five years" and references GIS specifically. The real founding date is **14 November 2023** — this needs to be corrected throughout.

### File to Edit: `app/components/about/AboutStory.vue`

---

**1. Replace the `milestones` array (lines 2–27):**

Find:
```js
const milestones = [
  {
    year: '2019',
    title: 'Founded',
    description: 'Established in Rawalpindi with a focus on GIS and mapping for local enterprises.',
    alt: false,
  },
  {
    year: '2020',
    title: 'First Major Contract',
    description: 'Delivered a fleet-wide GPS tracking deployment for a national logistics operator.',
    alt: true,
  },
  {
    year: '2022',
    title: 'Expanded to GCC',
    description: 'Opened cross-border projects across the Gulf, bringing geofencing to new markets.',
    alt: false,
  },
  {
    year: '2024',
    title: '50+ Projects',
    description: 'Crossed fifty delivered projects across more than ten industries.',
    alt: true,
  },
]
```

Replace with:
```js
const milestones = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Location Technologies was established on 14 November 2023, starting with GIS, web mapping, and full-stack development for regional clients.',
    alt: false,
  },
  {
    year: '2024',
    title: 'First Deliveries',
    description: 'Delivered our first set of client projects — SaaS platforms, mapping tools, and web applications — building a strong reputation for quality and precision.',
    alt: true,
  },
  {
    year: '2024',
    title: 'Expanded Services',
    description: 'Grew offerings to include legacy system modernization, AI-driven systems, WordPress/Shopify development, and DevOps infrastructure.',
    alt: false,
  },
  {
    year: '2025',
    title: 'Growing Portfolio',
    description: 'Active delivery across SaaS, GIS, e-commerce, real estate, and travel verticals. Building a growing client base in Pakistan and internationally.',
    alt: true,
  },
]
```

---

**2. Update the story paragraphs (around lines 50–62):**

Find the `<p>` block that starts with "Location Technologies was founded with a single mission" and replace all 4 paragraphs with:

```html
<p class="mt-7 text-[16.5px] leading-[1.75] text-[#94A6BE]">
  Location Technologies was founded on <strong class="font-semibold text-[#DCE7F2]">14 November 2023</strong> with
  one mission — to build high-quality, scalable software for businesses that demand precision and reliability.
</p>
<p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
  We are a full-service software development company covering SaaS and PaaS platforms, geographic information
  systems, legacy system modernization, AI-driven applications, WordPress and Shopify websites, and DevOps
  infrastructure — all under one roof.
</p>
<p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
  In a short time, we have delivered projects across diverse domains — sports SaaS platforms, travel planning apps,
  real estate marketing systems, interactive map builders, and e-commerce platforms — always with a commitment
  to clean code and production-ready results.
</p>
<p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
  Today we are actively expanding our portfolio and client base within Pakistan and internationally, with a team
  that brings deep technical expertise and a strong understanding of real-world business requirements.
</p>
```

### Todos — Phase 6

- [ ] Replace `milestones` array with corrected 2023-based timeline
- [ ] Replace the 4 story `<p>` blocks with updated text reflecting November 2023 founding and broader service scope
- [ ] Run `pnpm dev` and visit `/about` to verify the timeline reads correctly

---

## Phase 7 — Stats Update

### Context

`HomeStats.vue` (animated counters) and `HomeHero.vue` (hero stat badges) both show inflated numbers. Founded in November 2023, "5+ Years" is inaccurate. Use honest numbers.

### File 1: `app/components/home/HomeStats.vue`

**Replace the `stats` array (lines 6–10):**

Find:
```js
const stats = [
  { label: 'Projects Delivered', target: 50, suffix: '+' },
  { label: 'Industries Served', target: 10, suffix: '+' },
  { label: 'Years Experience', target: 5, suffix: '+' },
  { label: 'Client Satisfaction', target: 100, suffix: '%' },
]
```

Replace with (adjust numbers to your actual counts):
```js
const stats = [
  { label: 'Projects Delivered', target: 10, suffix: '+' },
  { label: 'Industries Served', target: 6, suffix: '+' },
  { label: 'Years Experience', target: 2, suffix: '+' },
  { label: 'Client Satisfaction', target: 100, suffix: '%' },
]
```

> Use the real count of projects you have shipped. If it's 8, use 8. If it's 15, use 15.

---

### File 2: `app/components/home/HomeHero.vue`

**Replace the `trustStats` array (lines 2–6):**

Find:
```js
const trustStats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '10+', label: 'Industries served' },
  { value: '5+', label: 'Years of expertise' },
]
```

Replace with numbers matching `HomeStats.vue`:
```js
const trustStats = [
  { value: '10+', label: 'Projects delivered' },
  { value: '6+', label: 'Industries served' },
  { value: '2+', label: 'Years of expertise' },
]
```

Keep `HomeHero.vue` and `HomeStats.vue` showing the same numbers — they're on the same page.

### Todos — Phase 7

- [ ] Update `stats` array in `HomeStats.vue`
- [ ] Update `trustStats` array in `HomeHero.vue` to match
- [ ] Decide on honest, accurate numbers before publishing

---

## Phase 8 — LinkedIn & Social Links

### Context

`TheFooter.vue` has placeholder `href="#"` for all social icons. The LinkedIn link is known — add it. Remove Twitter and Facebook if you have no active accounts there.

### File to Edit: `app/components/layout/TheFooter.vue`

**Replace the `socials` array (lines 18–22):**

Find:
```js
const socials = [
  { icon: 'mdi:linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'mdi:twitter', href: '#', label: 'Twitter' },
  { icon: 'mdi:facebook', href: '#', label: 'Facebook' },
]
```

Replace with (remove Twitter/Facebook if not active):
```js
const socials = [
  { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/company/locationtechnologies/', label: 'LinkedIn' },
]
```

Or if you have active Twitter/Facebook pages, add real URLs instead of `#`.

### Also update contact details in TheFooter.vue

The footer currently shows placeholder contact info. Update these lines:

| What to update | Current placeholder | Location in file |
|---------------|---------------------|-----------------|
| Email | `hello@loctech.pk` | line ~104 — `href="mailto:..."` |
| Phone | `+92 51 000 0000` | line ~111 — `href="tel:..."` |
| Address | `Rawalpindi, Pakistan` | line ~116 — if address is different |

### Todos — Phase 8

- [ ] Replace `socials` array with real LinkedIn URL (and real Twitter/Facebook if applicable)
- [ ] Update footer email address
- [ ] Update footer phone number
- [ ] Confirm address text is correct

---

## Phase 9 — Footer Services List

### Context

The footer's "Services" column still lists old GIS-focused services (Geofencing, Spatial Analytics, Fleet Management). Update it to your 6 real services.

### File to Edit: `app/components/layout/TheFooter.vue`

**Replace the `services` array (lines 11–16):**

Find:
```js
const services = [
  { label: 'GIS & Mapping', to: '/services' },
  { label: 'GPS Tracking', to: '/services' },
  { label: 'Geofencing', to: '/services' },
  { label: 'Spatial Analytics', to: '/services' },
  { label: 'Fleet Management', to: '/services' },
]
```

Replace with:
```js
const services = [
  { label: 'GIS & Web Mapping', to: '/services' },
  { label: 'SaaS & PaaS Development', to: '/services' },
  { label: 'Legacy Modernization', to: '/services' },
  { label: 'AI-Driven Systems', to: '/services' },
  { label: 'WordPress & Shopify', to: '/services' },
  { label: 'DevOps Infrastructure', to: '/services' },
]
```

### Todos — Phase 9

- [ ] Replace the `services` array in `TheFooter.vue`

---

## Phase 10 — Hero Tagline (Optional)

### Context

The hero section currently says: *"Precision GIS solutions, real-time GPS tracking, and intelligent geofencing for modern enterprises."*

This is too narrow — it misses 4 of your 6 services. Consider broadening it.

### File to Edit: `app/components/home/HomeHero.vue`

**Find (around line 44):**
```html
<p class="max-w-[540px] text-base leading-relaxed text-[#94A6BE] min-[400px]:text-[clamp(17px,1.4vw,20px)]">
  Precision GIS solutions, real-time GPS tracking, and intelligent geofencing for modern enterprises.
</p>
```

**Replace with:**
```html
<p class="max-w-[540px] text-base leading-relaxed text-[#94A6BE] min-[400px]:text-[clamp(17px,1.4vw,20px)]">
  Full-stack SaaS development, geographic systems, AI-driven applications, and DevOps infrastructure — engineered for precision at scale.
</p>
```

Also, the eyebrow text says "Pakistan's Leading Location Tech Company" — keep if accurate or adjust to something like "Software Engineering & Location Technology" to reflect your broader scope.

### Todos — Phase 10

- [ ] Update the hero `<p>` tagline in `HomeHero.vue`
- [ ] (Optional) Update the eyebrow text above the H1

---

## Master Checklist

Work through these in order. Each phase is independent once Phase 3 (schema fix) is done.

### Data Files
- [ ] **Phase 1** — Replace `content/portfolio.json` with 6 real projects
- [ ] **Phase 2** — Replace `content/services.json` with 6 real services

### Schema
- [ ] **Phase 3** — Update service category enum in `content.config.ts`

### Vue Components
- [ ] **Phase 4** — Update filter categories in `PortfolioGrid.vue` (6 changes)
- [ ] **Phase 5** — Update tech stack list in `ServicesTechStack.vue`
- [ ] **Phase 6** — Fix timeline and story text in `AboutStory.vue`
- [ ] **Phase 7** — Fix stats in `HomeStats.vue` and `HomeHero.vue`
- [ ] **Phase 8** — Add real LinkedIn URL and contact details in `TheFooter.vue`
- [ ] **Phase 9** — Update footer services list in `TheFooter.vue`
- [ ] **Phase 10** — (Optional) Broaden hero tagline in `HomeHero.vue`

### Assets
- [ ] Add project thumbnail images to `public/images/portfolio/` (optional — no breakage without them)

### Verification
- [ ] Run `pnpm dev`
- [ ] `/` — stats and hero badges show accurate numbers, tagline is updated
- [ ] `/services` — all 6 new services visible, tech stack shows full 12 items
- [ ] `/portfolio` — real projects displayed, filter buttons work for `saas`/`mapping`/`mobile`/`ecommerce`
- [ ] `/about` — timeline starts 2023, story text is accurate
- [ ] Footer — LinkedIn link opens correct page, services list matches actual services

---

## Notes

**Do phases 1, 2, and 3 together.** Phases 1 and 2 introduce new category values; Phase 3 updates the schema to accept them. If you do Phase 2 without Phase 3, Nuxt content will throw a Zod validation error on startup.

**Phase 4 must follow Phase 1.** The filter buttons in `PortfolioGrid.vue` need to match the category values in `portfolio.json`. If they don't match, cards will appear under "All" but the individual filter buttons will show empty results.

**Customize descriptions.** The project descriptions in Phase 1 and service descriptions in Phase 2 are written as starting points. Replace them with your own words — specifics like actual client names, measurable outcomes (page load times, user counts, revenue), or technical constraints you solved always make a portfolio more compelling than generic copy.
