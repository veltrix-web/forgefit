# ForgeFit — Gym Website (Demo)

Production-grade gym website demo built with **React 18 + Tailwind CSS v3 + Vite**.

Dark industrial theme, orange brand accent (#E8490C), zero emojis, zero icon libraries.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open: http://localhost:5173

# 3. Build for production
npm run build
```

---

## Project Structure

```
gymfit/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component (assembles all sections)
    ├── index.css             # Global styles, CSS vars, Tailwind directives
    └── components/
        ├── Navbar.jsx        # Sticky nav, scroll effect, mobile hamburger
        ├── Hero.jsx          # Full-screen hero, stats, animated headline
        ├── Programs.jsx      # 4 program cards (STR / PHY / FAT / WGT)
        ├── WhyJoinUs.jsx     # Benefits + banner image section
        ├── Trainers.jsx      # Trainer profile cards
        ├── Pricing.jsx       # 3-tier plans + monthly/yearly toggle
        └── Footer.jsx        # Full footer with links + social
```

---

## Customization Guide

### Brand name
Find & replace `ForgeFit` with your client's gym name everywhere.

### Brand color
The accent color is `#E8490C` throughout. Find & replace with your client's brand color.

### Replace placeholder images
- **Hero photo** — in `Hero.jsx`, replace the placeholder `<div>` with:
  ```jsx
  <img src="/images/hero-athlete.jpg" alt="athlete" className="w-full h-full object-cover" />
  ```
- **Banner image** — in `WhyJoinUs.jsx`, replace the placeholder similarly.
- **Trainer photos** — in `Trainers.jsx`, replace initials div with `<img>` tags.

Put images in the `public/images/` folder. Reference them as `/images/filename.jpg`.

### Update pricing
Edit the `PLANS` object in `Pricing.jsx` — monthly and yearly arrays.

### Update content
- Programs: `Programs.jsx` → `PROGRAMS` array
- Trainers: `Trainers.jsx` → `TRAINERS` array
- Features: `WhyJoinUs.jsx` → `FEATURES` array
- Footer links: `Footer.jsx` → `LINKS` object

### Fonts used
- **Bebas Neue** — display / hero headlines
- **Barlow Condensed** — section headings
- **DM Sans** — body text / UI elements

Loaded via Google Fonts in `index.html`.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Brand | `#E8490C` | CTA buttons, accents, highlights |
| Dark 950 | `#080808` | Page background |
| Dark 900 | `#0E0E0E` | Alternate section bg |
| Dark 800 | `#141414` | Cards |
| Dark 700 | `#1C1C1C` | Borders |

---

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with blur effect on scroll
- Scroll-triggered fade-up animations (IntersectionObserver)
- Monthly / Yearly pricing toggle
- Card hover lift with orange border
- CSS noise + grid texture backgrounds
- Zero third-party icon libraries
- Zero emojis

---

*Built as part of the 90-Day Gym Website Challenge.*
