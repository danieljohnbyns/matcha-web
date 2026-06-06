# Matcha — Design Document

## Overview

Matcha is a **landing page** for a mobile social media platform designed for **service providers** to offer, market, and communicate their services with clients. The site should feel approachable, natural, and professional — reflecting the warmth and authenticity of the matcha brand.

---

## Pages

| Page     | Route       | Purpose                                                                              |
| -------- | ----------- | ------------------------------------------------------------------------------------ |
| Home     | `/`         | Primary landing page with hero, features, how it works, screenshots, FAQ, and footer |
| About    | `/about`    | Team introduction and product mission/purpose                                        |
| Download | `/download` | App store links, QR code, and email signup for updates                               |

---

## Design Language

### Style

**Warm / Organic** — Soft shapes, natural tones, and a friendly, approachable feel.

### Content Density

**Spacious / Airy** — Generous whitespace, large padding, and breathing room between sections.

### Motion

**Minimal / None** — No animations or transitions. Content appears instantly for a clean, fast experience.

### Theme

**Light only** — No dark mode. The design uses a light, warm background throughout.

---

## Color Palette

| Role           | Color           | Hex       | Usage                                    |
| -------------- | --------------- | --------- | ---------------------------------------- |
| Primary        | Classic Matcha  | `#004450` | CTAs, links, highlights, active states   |
| Background     | Warm White      | `#FAF9F6` | Page background                          |
| Surface        | White           | `#FFFFFF` | Cards, sections, elevated surfaces       |
| Text Primary   | Charcoal        | `#2D2D2D` | Headings, body text                      |
| Text Secondary | Warm Gray       | `#6B6B6B` | Captions, descriptions, muted text       |
| Accent Light   | Soft Sage       | `#E8F2EB` | Subtle backgrounds, hover states, badges |
| Border         | Light Warm Gray | `#E0DDD6` | Dividers, card borders                   |

---

## Typography

- **Font family:** System font stack (no custom fonts — fast and native)
    ```
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    ```
- **Headings:** Bold, tight letter-spacing, charcoal color
- **Body:** Regular weight, comfortable line-height (1.6–1.8), warm gray
- **Scale:** Large hero headline → medium section headings → base body text

---

## Icons

**Ant Design Icons** — Consistent with the Ant Design component library already in the project. Used for feature highlights, UI elements, and section markers.

---

## Layout & Navigation

### Navigation Bar

- **Style:** Sticky top navbar (remains visible on scroll)
- **Content:** Logo (left) + page links: Home, About, Download (right)
- **Background:** White with a subtle bottom border
- **On mobile:** Collapse into a hamburger menu

### Page Width

- Max content width: `1200px`, centered
- Section padding: generous vertical spacing (`80px–120px` between sections)

---

## Page Specifications

### Home (`/`)

Sections in order:

1. **Hero**
    - Large headline (e.g., "Your Services. Your Community.")
    - Subheadline explaining Matcha's purpose in one sentence
    - Primary CTA button ("Download the App") in matcha green
    - Optional: hero illustration or app mockup

2. **Features / Benefits**
    - 3–4 feature cards in a grid
    - Each card: icon + short title + one-line description
    - Focus on benefits for service providers (reach clients, manage bookings, showcase work)

3. **How It Works**
    - 3-step horizontal layout (or vertical on mobile)
    - Numbered steps with icons and brief explanations

4. **Screenshots / App Preview**
    - Mobile app mockups showing key screens
    - Light background to make screenshots pop

5. **FAQ**
    - Accordion-style list of 4–6 common questions
    - Topics: what is Matcha, who is it for, how to get started, pricing, etc.

6. **Footer**
    - Logo + tagline
    - Links: Home, About, Download
    - Social media icons
    - Copyright notice

### About (`/about`)

- **Mission section:** Why Matcha exists — the problem it solves for service providers
- **Team section:** Photos and names/roles of team members (placeholder-ready)
- **Values:** 3–4 core values with icons (e.g., Community, Simplicity, Trust)
- Spacious layout with ample whitespace

### Download (`/download`)

- **App Store badge** → links to iOS App Store
- **Google Play badge** → links to Google Play Store
- **QR code** → auto-detects device and links to the correct store
- **Email signup form** → "Get notified about updates" with an email input and submit button
- Centered, clean layout with the download buttons as the primary focus

---

## Component Library

**Ant Design (antd)** is the base component library, customized with the Matcha color palette via Ant Design's theme configuration:

```ts
// antd theme override
{
  token: {
    colorPrimary: '#004450',
    colorBgBase: '#FAF9F6',
    colorTextBase: '#2D2D2D',
    borderRadius: 8,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
}
```

Components used: `Button`, `Layout`, `Menu`, `Card`, `Collapse` (FAQ), `Input` (email signup), `Grid`/`Row`/`Col`.

---

## Responsive Breakpoints

| Breakpoint | Width            | Layout                                         |
| ---------- | ---------------- | ---------------------------------------------- |
| Mobile     | `< 768px`        | Single column, stacked sections, hamburger nav |
| Tablet     | `768px – 1024px` | 2-column grids where applicable                |
| Desktop    | `> 1024px`       | Full multi-column layouts                      |

---

## Technical Notes

- **Framework:** TanStack Start (React-based, file-system routing)
- **Styling:** Tailwind CSS v4 + Ant Design theme overrides
- **Path aliases:** `#/*` maps to `./src/*`
- **Build:** Vite
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint (Tanstack config) + Prettier (no semicolons, single quotes, trailing commas)

---

## Assets Needed

- [ ] Matcha logo (SVG, light variant)
- [ ] App screenshots/mockups (3–5 key screens)
- [ ] Team photos (About page)
- [ ] App Store badge image
- [ ] Google Play badge image
- [ ] Favicon (matcha-branded)
