# Rimoto Gear — Frontend Design Analysis
**Website:** [rimotogear.com](https://rimotogear.com)
**Tagline:** *The Ride of Your Life*
**Platform:** Shopify (Dawn/Custom Theme)
**Category:** Premium Motorcycle Riding Gear — B2C E-Commerce

---

## 1. Brand Identity & Design Philosophy

Rimoto Gear is an Indian premium motorcycle riding gear brand based in Chennai. The visual identity communicates **raw performance, speed, and masculinity** while maintaining a premium feel. The design language leans into:

- **Dark, cinematic photography** as the primary visual engine
- **All-caps bold typography** (Bebas Neue for display, Montserrat for body) for authority and attitude
- **Black base with electric yellow `#EEFC50` as the hero accent** — used on labels, CTAs, and category name tags
- **Full-bleed hero imagery** that dominates above-the-fold
- A tone that is **editorial meets motorsport** — aggressive, high-energy, and built for speed

---

## 2. Color Palette

### Primary Colors

| Role | Color Name | HEX | Usage |
|------|-----------|-----|-------|
| Background (Primary) | Carbon Black | `#0A0A0A` | Site-wide background, nav, footer |
| Background (Secondary) | Charcoal | `#111111` | Card backgrounds, section fills |
| Background (Footer Triangle) | Rich Black | `#000000` | Footer diagonal/geometric shapes |
| Text (Primary) | Pure White | `#FFFFFF` | Hero headlines, nav items, section headings |
| Text (Secondary) | Off-White | `#E8E8E8` | Body copy, sub-headings, taglines |
| Text (Muted) | Light Gray | `#AAAAAA` | Captions, meta info, footer legal links |

### Accent / Brand Colors

| Role | Color Name | HEX | Usage |
|------|-----------|-----|-------|
| ⚡ Hero Accent | Electric Yellow-Green | `#EEFC50` | **Category label tags, CTA buttons, hero label text, "Gear that Carries Legacy" headline, section accent labels** |
| Accent Text on Yellow | Deep Black | `#0A0A0A` | Text rendered ON top of `#EEFC50` backgrounds |
| CTA / Ghost Button | White Fill | `#FFFFFF` | "DISCOVER NOW" style buttons on hero |
| CTA Text | Black | `#000000` | Text inside white-fill buttons |
| Overlay Gradient | Dark Scrim | `rgba(0,0,0,0.50)` | Over hero images for text contrast |
| Border / Divider | Dark Gray | `#222222` | Separators, card borders, input borders |
| WhatsApp Float Button | WhatsApp Green | `#25D366` | Floating WhatsApp CTA (bottom-right) |

### Color Principles

- **Dominant (~75%):** Carbon Black `#0A0A0A` — the entire UI canvas
- **Structural (~15%):** White `#FFFFFF` — primary text, ghost buttons, nav
- **Accent (~10%):** Electric Yellow-Green `#EEFC50` — the brand's signature punch; used sparingly but powerfully on labels, category tags, and the video section headline
- The yellow `#EEFC50` is **the single most important brand color** — it appears on every category name pill/tag (JACKETS, PANTS, GLOVES, PROTECTORS, ACCESSORIES, URBAN, TOURING, SPORTS, SUMMER, MONSOON, WINTER) as a solid background with black text
- The "GEAR THAT **CARRIES LEGACY**" video section shows the yellow applied to the second line, creating a typographic color-split headline — a signature brand move
- Footer uses **diagonal black chevron shapes** (dark geometric background) for visual texture
- Photography provides environmental warmth — the UI palette remains strictly black + white + electric yellow

---

## 3. Typography

### Font Stack

Rimoto Gear uses **two Google Fonts** loaded via Shopify theme settings:

#### Primary / Display Font — Bebas Neue
```
Font Family: 'Bebas Neue', sans-serif
Source: Google Fonts
Weight: 400 (the only available weight — it renders as Bold by design)
Style: ALL CAPS always — Bebas Neue is a condensed all-caps display typeface
Usage: All hero headlines, section headings, category section titles,
       "RIMOR BY RIMOTO", "FOR MEN WHO CHASE THE WIN",
       "GEAR THAT CARRIES LEGACY", "HOW'S THE WEATHER?",
       "WHERE'S THE ROAD CALLING YOU?", footer "HIT THE BRAKES, LET'S CHAT!"
```

> Bebas Neue is a **tall, condensed, all-caps sans-serif** — it has zero lowercase. Every headline on this site is rendered in its singular weight. The condensed proportions allow very large font sizes without overwhelming horizontal space.

#### Secondary / Body Font — Montserrat
```
Font Family: 'Montserrat', sans-serif
Source: Google Fonts
Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
Style: Used for sub-labels, body copy, nav items, CTA button text,
       tagline copy ("CE Level 2 Certified Impact Protector"),
       hero descriptor text, footer links, legal text
```

#### CSS Import
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap');
```

#### CSS Font Variables
```css
:root {
  --font-display:  'Bebas Neue', sans-serif;
  --font-body:     'Montserrat', sans-serif;
}
```

---

### Typography Scale

| Level | Font | Size (Desktop) | Size (Mobile) | Weight | Transform | Tracking |
|-------|------|---------------|--------------|--------|-----------|---------|
| Hero Label (`crafted for...`) | Montserrat | `11px–13px` | `10px` | 600 | `uppercase` | `0.2em` |
| Hero Headline H1 | Bebas Neue | `72px–100px` | `40px–52px` | 400 | `uppercase` (inherent) | `0.03em` |
| Hero Tagline | Montserrat | `13px–15px` | `12px` | 400 | Normal | Normal |
| Section Heading | Bebas Neue | `36px–56px` | `24px–32px` | 400 | uppercase | `0.02em` |
| "WHERE'S THE ROAD" label | Montserrat | `11px–13px` | `11px` | 700 | `uppercase` | `0.2em` |
| Category Tag Pills | Montserrat | `10px–12px` | `10px` | 700 | `uppercase` | `0.15em` |
| Navigation Items | Montserrat | `13px` | `14px` | 600 | `uppercase` | `0.12em` |
| CTA Buttons | Montserrat | `11px–13px` | `11px` | 700 | `uppercase` | `0.15em` |
| Body / Descriptor | Montserrat | `13px–15px` | `13px` | 400 | Normal | Normal |
| Footer Headline | Bebas Neue | `28px–36px` | `24px` | 400 | uppercase | Normal |
| Footer Links | Montserrat | `11px–12px` | `11px` | 400 | Normal | `0.03em` |
| Price / Currency | Montserrat | `16px` | `14px` | 600 | Normal | Normal |

---

### Typography Hierarchy — Visual Example

```
CRAFTED FOR ENHANCED IMPACT ABSORPTION AND VENTILATION   ← Montserrat 600, 12px, #FFFFFF, tracked
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RIMOR BY RIMOTO                                          ← Bebas Neue, 80px, #FFFFFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CE Level 2 Certified Impact Protector                   ← Montserrat 400, 14px, #E8E8E8
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ DISCOVER NOW ]                                        ← Montserrat 700, 12px, inside white btn
```

```
GEAR THAT         ← Bebas Neue, ~80px, #FFFFFF
CARRIES LEGACY    ← Bebas Neue, ~80px, #EEFC50  (electric yellow — the color split)
```

### Font Pairing Rationale

| | Bebas Neue | Montserrat |
|--|-----------|-----------|
| **Role** | Display / Headline | Body / UI / Labels |
| **Personality** | Aggressive, condensed, athletic | Clean, modern, geometric |
| **Case** | Always uppercase (inherent) | Mixed / uppercase as needed |
| **Contrast** | Maximum visual weight | Readable at small sizes |
| **Together** | Creates hierarchy between "impact" and "information" |

---

## 4. Layout & Grid System

### Grid

- **Base Container:** Full-width (100vw) for hero/banner sections
- **Content Container:** Max-width `~1440px`, centered, with horizontal padding of `16px–40px`
- **Product Grid:** CSS Grid — 2 columns (mobile) → 3–4 columns (desktop)
- **Category Cards:** CSS Grid with equal-width columns, gap `~12px–16px`

### Hero / Banner Sections

- **Full-bleed (100vw × 100vh or 85vh)** hero images
- Text positioned **bottom-left** or **center-left** using absolute positioning over image
- Dark overlay scrim (`rgba(0,0,0,0.4–0.6)`) for text contrast
- Slider/carousel with 3 slides (auto-advancing)

### Section Layout Patterns

| Section | Layout |
|---------|--------|
| Hero Carousel | Full-bleed slideshow, 3 panels |
| Category Grid | 5-card portrait grid (Jackets, Pants, Gloves, Protectors, Accessories) |
| "Where's the road calling" | 3-column portrait card grid |
| Men's / Women's | Full-bleed landscape split sections |
| Weather Filter | 3-column portrait card grid |
| Footer | 2-column — left: logo + legal links, right: contact + socials |

### Spacing System (Estimated 8pt Grid)

```
4px   — micro spacing (icon padding)
8px   — tight spacing
16px  — base padding unit
24px  — component padding
32px  — section internal padding
48px  — small section gap
64px  — medium section gap
96px  — large section gap
```

---

## 5. Navigation

### Top Bar (Pre-header)
- Background: `#0A0A0A` (full black)
- Social icons: X (Twitter), Facebook, Instagram, YouTube — icon-only, white
- Text: White, 12px, uppercase
- Login link: White text

### Main Navigation
- **Sticky top nav** on scroll
- Logo: Left-aligned wordmark (white logomark + "rimoto" wordmark)
- Nav items: Montserrat, All caps, `~13px`, `letter-spacing: 0.12em`, white, weight 600
- Dropdown menus: Black background, white links, clean list in Montserrat
- Right icons: Search (🔍), Account (👤), Cart (🛒) — minimal icon set, white

### Mobile Navigation
- Hamburger icon → Slide-in drawer (left)
- Full-screen dark overlay
- Same category structure as desktop dropdown

---

## 6. Buttons & CTAs

### Primary CTA — White Ghost (on Hero)
```css
/* "DISCOVER NOW" button style over hero images */
.btn-primary {
  background-color: #FFFFFF;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 12px 28px;
  border: 1.5px solid #FFFFFF;
  border-radius: 0; /* Sharp — zero radius */
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-primary:hover {
  background-color: transparent;
  color: #FFFFFF;
}
```

### Electric Yellow Accent CTA — "REACH OUT TO US"
```css
/* Footer CTA button — the yellow brand accent applied to buttons */
.btn-accent {
  background-color: #EEFC50;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 12px 28px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-accent:hover {
  background-color: #d4e048; /* slightly darkened yellow */
  color: #000000;
}
```

### Category Tag / Label Pill — Electric Yellow
```css
/* The yellow label at the bottom of every category card */
.category-tag {
  display: inline-block;
  background-color: #EEFC50;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 0;
}
```

### Button Design Rules
- **Zero border-radius** — sharp rectangular corners everywhere (brand = aggressive performance)
- All-caps Montserrat with wide letter-spacing (`0.12–0.18em`)
- Three button types: white-fill (hero), ghost-white (secondary), **electric yellow** (accent/footer CTA)
- The yellow `#EEFC50` button = highest-priority action on the page
- Hover on white buttons: invert to transparent + white border
- Hover on yellow buttons: slightly darken the yellow

---

## 7. Image & Photography Style

### Photography Direction
- **High-contrast, cinematic** — moody lighting, deep shadows
- **Dark backgrounds** — studio or outdoor with dark sky/environment
- **Models in action** — riding positions, standing with bikes, dynamic angles
- **Color grade:** Cool-to-neutral tones; slightly desaturated for premium feel
- **Image orientation:** Mix of landscape (hero/banner) and portrait (category cards)

### Image Containers
- **Hero images:** 100vw × 85–100vh, `object-fit: cover`, `object-position: center`
- **Category portrait cards:** Fixed aspect ratio `~2:3` (portrait), uniform height
- **Landscape section images:** `~16:9` or full-bleed

### Image Treatment on Hover (Category Cards)
```css
.category-card img {
  transition: transform 0.4s ease;
}
.category-card:hover img {
  transform: scale(1.04);
}
```

---

## 8. Cards & Components

### Category Card
```
┌────────────────┐
│                │
│   [Portrait    │
│    Image]      │
│                │
│                │
│ ┌────────────┐ │
│ │  JACKETS   │ │  ← #EEFC50 background, #000000 text
│ │ Montserrat │ │     10–12px, 700 weight, uppercase
│ └────────────┘ │
└────────────────┘
```
- No card border or shadow
- Yellow pill/tag **overlaid at bottom-left of image** (not below it)
- Hover: subtle image zoom (`scale(1.04)`)
- The yellow tag is the ONLY color element in an otherwise black/white card

### Product Card (Collection Page)
- Clean white or dark card
- Product image (square or portrait)
- Product name: 14px, medium weight
- Price: 16px, regular
- No star ratings shown prominently
- Add to cart: appears on hover

---

## 9. Footer

### Structure
```
[Logo / Brand Mark]           [Contact Details]
[Legal Links — horizontal]    [Social Icons]
© 2026 Rimotogear             Powered by Shopify
```

### Footer Styling
- Background: `#000000` with **diagonal black chevron/zigzag texture** for visual depth
- Footer headline "HIT THE BRAKES, LET'S CHAT!" — **Bebas Neue**, ~32px, white
- CTA button "REACH OUT TO US" — Montserrat 700, `#EEFC50` background, black text
- Two logo variations: geometric "R" emblem mark + Rimoto wordmark
- Links: Montserrat 400, 11px, `color: #AAAAAA`, hover: `#FFFFFF`
- Social icons: Instagram, Facebook, YouTube, X — white, 20px
- Address: A16, SIDCO Industrial Estate, Arumbakkam, Chennai - 600106
- Phone: WhatsApp link (`wa.me/917449102000`)
- Email: `contact@rimotogear.com`
- Divider lines: `1px solid #1E1E1E`

---

## 10. Iconography & Visual Elements

- **Icons:** Minimal line icons — search, user, cart, social media glyphs
- **No decorative icons** in product/content areas — photography does the work
- **Arrows:** Simple directional arrows for sliders (`←` `→`)
- **Badge:** "CE Level 2 Certified" trust badge — appears in product/landing context
- **Logo mark:** A distinctive geometric "R" emblem (used in footer)

---

## 11. Motion & Interactions

| Interaction | Behavior |
|-------------|---------|
| Hero carousel | Auto-slide, ~4–6s interval, crossfade or slide transition |
| Category card hover | Image scale `1.04`, duration `0.4s ease` |
| CTA button hover | Background/color invert, `0.2s ease` |
| Nav dropdown | Fade-in slide down, `0.2s ease` |
| Cart drawer | Slide-in from right |
| Page load | No heavy animation — fast render priority |
| Mobile nav | Slide-in drawer from left |

---

## 12. Responsive Breakpoints (Estimated)

```css
/* Mobile First */
@media (min-width: 576px)  { /* Small mobile landscape */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
@media (min-width: 1440px) { /* XL — max container */ }
```

### Key Responsive Changes
- **Hero text:** scales from `32px → 80px`
- **Category grid:** `2 col (mobile) → 3 col (tablet) → 5 col (desktop)`
- **Navigation:** hamburger drawer (mobile) → horizontal (desktop)
- **Section padding:** `16px (mobile) → 40px (desktop)`

---

## 13. E-Commerce Specific Elements

### Cart Drawer
- Slides in from right
- Dark background (`#111`)
- Line items with image thumbnails
- Quantity controls: `−` / `+` buttons
- "Estimated total" with Rs. (INR currency)
- "Check out" CTA — white button full-width

### Currency & Localization
- Currency: **Indian Rupee (Rs. / ₹)**
- Language: English
- Pricing format: `Rs. X,XXX.00`

### Trust Signals
- CE Level 2 Certified (EU standard for impact protectors)
- EU Declaration of Conformity certificate (linked in footer)
- Warranty Policy page
- Returns & Exchanges policy
- Repair & Alteration service

---

## 14. Page Sections Summary (Homepage)

| # | Section | Type | Notes |
|---|---------|------|-------|
| 1 | Announcement Bar | Static bar | Social links + login |
| 2 | Navigation | Sticky header | Logo, mega menu, icons |
| 3 | Hero Carousel | Full-bleed slideshow | 3 slides with CTA |
| 4 | Category Grid | 5-card portrait grid | Product categories |
| 5 | "Where's the road calling?" | 3-card lifestyle grid | Urban / Touring / Sports |
| 6 | Men's Banner | Full-bleed landscape | "For Men Who Chase the Win" |
| 7 | Women's Banner | Full-bleed landscape | "For Women Who Chase the Win" |
| 8 | Weather Filter | 3-card grid | Summer / Monsoon / Winter |
| 9 | Video Section | Embedded video | YouTube thumbnail preview |
| 10 | Footer | 2-col layout | Logo, links, contact, socials |

---

## 15. Design Tokens Summary (CSS Variables Reference)

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap');

:root {
  /* ─── Colors ─────────────────────────────────────── */
  --color-bg-primary:       #0A0A0A;   /* main site background */
  --color-bg-secondary:     #111111;   /* card / section fills */
  --color-bg-card:          #161616;   /* product card bg */
  --color-black:            #000000;   /* pure black — text on yellow */

  --color-text-primary:     #FFFFFF;   /* headlines, nav */
  --color-text-secondary:   #E8E8E8;   /* body copy, taglines */
  --color-text-muted:       #AAAAAA;   /* footer links, captions */

  --color-accent:           #EEFC50;   /* ⚡ Electric Yellow — THE brand color */
  --color-accent-dark:      #D4E048;   /* hover state of yellow */
  --color-accent-text:      #000000;   /* text rendered ON yellow */

  --color-border:           #222222;   /* card/section dividers */
  --color-scrim:            rgba(0, 0, 0, 0.50); /* hero image overlay */
  --color-whatsapp:         #25D366;   /* WhatsApp floating button */

  /* ─── Typography ─────────────────────────────────── */
  --font-display:           'Bebas Neue', sans-serif;   /* ALL headlines */
  --font-body:              'Montserrat', sans-serif;   /* body, UI, labels */

  --font-size-hero:         clamp(2.5rem, 7vw, 6.25rem);  /* 40–100px */
  --font-size-section:      clamp(1.5rem, 4vw, 3.5rem);   /* 24–56px */
  --font-size-footer-head:  clamp(1.5rem, 3vw, 2.25rem);  /* 24–36px */
  --font-size-label:        0.75rem;    /* 12px — hero label */
  --font-size-body:         0.9375rem;  /* 15px — body copy */
  --font-size-nav:          0.8125rem;  /* 13px — nav items */
  --font-size-tag:          0.625rem;   /* 10px — category tags */
  --font-size-cta:          0.6875rem;  /* 11px — button text */
  --font-size-footer-link:  0.6875rem;  /* 11px — footer links */

  --font-weight-regular:    400;
  --font-weight-medium:     500;
  --font-weight-semibold:   600;
  --font-weight-bold:       700;

  --letter-spacing-hero:    0.03em;
  --letter-spacing-label:   0.20em;
  --letter-spacing-nav:     0.12em;
  --letter-spacing-tag:     0.15em;
  --letter-spacing-cta:     0.15em;

  /* ─── Spacing (8pt grid) ─────────────────────────── */
  --space-xs:    4px;
  --space-sm:    8px;
  --space-md:    16px;
  --space-lg:    24px;
  --space-xl:    40px;
  --space-2xl:   64px;
  --space-3xl:   96px;

  /* ─── Layout ─────────────────────────────────────── */
  --container-max:   1440px;
  --border-radius:   0px;   /* ZERO — sharp corners throughout */

  /* ─── Transitions ────────────────────────────────── */
  --transition-fast: 0.2s ease;
  --transition-mid:  0.4s ease;
}
```

---

## 16. Key Design Decisions & Brand Notes

1. **Zero border-radius everywhere** — sharp, blade-like rectangles reinforce the motorsport/performance identity.
2. **`#EEFC50` is the brand's heartbeat** — the electric yellow-green appears consistently on all category tag pills, the footer CTA button, and the "CARRIES LEGACY" headline split. It's used sparingly so each appearance hits hard.
3. **Bebas Neue = brand voice** — condensed, tall, all-caps with zero lowercase. Every word it renders feels like a race announcement. It's the visual equivalent of a revving engine.
4. **Montserrat = functional counterpart** — geometric, clean, legible. Handles all informational text so Bebas Neue can stay in its high-impact lane.
5. **Photography is the canvas, yellow is the signature** — the dark photography creates the mood; the yellow punctuates and signals action.
6. **The color-split headline technique** — "GEAR THAT" in white, "CARRIES LEGACY" in `#EEFC50` on the video section — is a bold typographic brand signature.
7. **Category tags as yellow pills over images** — not below, but overlaid at the bottom-left of portrait cards. This keeps images clean while branding every card with the accent color.
8. **Lifestyle segmentation UX** — Ride Type (Urban/Touring/Sports) and Weather (Summer/Monsoon/Winter) are unique to the Indian market context. This is a product discovery pattern, not just navigation.
9. **CE Level 2 certification** is a prominent trust signal — important for safety-aware buyers in the premium segment.
10. **WhatsApp floating button** — right-side sticky CTA, standard for Indian DTC brands where WhatsApp is the dominant support/sales channel.
11. **Footer diagonal chevron texture** — the black zigzag/chevron background in the footer adds visual texture without breaking the dark color palette.
12. **Dual-gender top-level navigation** — Men / Women as the primary axis reflects the brand's product expansion strategy.

---

*Document generated via frontend analysis of rimotogear.com — April 2026*
