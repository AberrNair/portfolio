# Abeer Nair — Non-Academic Personal Portfolio

A complete, production-ready, single-page personal portfolio website for **Abeer Nair** crafted with the vibrant **"Court and Campfire"** theme.

Designed strictly around Abeer Nair's non-academic achievements: national and zonal table tennis, campus leadership at NMIMS MPSTME, athletic conditioning, travel adventures, culinary curiosity, and people communication.

---

## 🎨 Design Theme: "Court & Campfire"

- **Mood:** Vibrant, friendly, confident, and energetic. A sports poster mixed with a personal travel journal.
- **Palette:**
  - **Primary Teal:** `#0F766E` (hero and alternate section blocks)
  - **Deep Teal:** `#134E4A` (typography, cards, header)
  - **Coral Accent:** `#FF6B4A` (buttons, active pills, highlights)
  - **Saffron Accent:** `#FFB703` (badges, trophy icons, details)
  - **Warm Cream:** `#FFF8F0` (light alternating section blocks)
  - **Ink Text:** `#1F2937` (high-contrast readable body text)
- **Typography:** *Space Grotesk* and *Poppins* for bold headings, *Inter* for body text.
- **Rhythm:** Alternating Teal and Cream sections create visual energy without being too dark, too light, too minimal, or too busy.

---

## 🚀 Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS** (v3.4)
- **Framer Motion** (spring micro-interactions, animated table-tennis rally, interactive elements)
- **Lucide React** (clean line icons for sports, travel, cooking, leadership, and fitness)
- **Canvas Confetti** (celebratory contact form feedback)

---

## 📂 Project Architecture

```
portfolio/
├── index.html                   # HTML entry point with Google Fonts & meta tags
├── package.json                 # Project scripts and dependencies
├── tailwind.config.js           # Theme colors, fonts, shadows, and animations
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all portfolio content
    ├── components/
    │   ├── Navbar.jsx           # Sticky top navbar with active section scroll spy
    │   ├── Hero.jsx             # Hero section, tagline chips, 4 stats & court widget
    │   ├── BouncingBallHero.jsx # Interactive bouncing table-tennis rally
    │   ├── About.jsx            # About Abeer, "What Drives Me", profile card
    │   ├── Sports.jsx           # Table Tennis timeline, Football/Cricket, 4 lessons
    │   ├── Fitness.jsx          # Athletic conditioning, 4 pillars & regimen
    │   ├── Leadership.jsx       # Cultural Fest, SIH 2025, NMMUN 2024 & Key Takeaway
    │   ├── TravelCooking.jsx    # Split layout, traits, "Where The Two Meet", Photo Strip
    │   ├── People.jsx           # Extrovert & Communication in Action speech bubbles
    │   ├── SkillsHeatmap.jsx    # Interactive Matrix table matching document
    │   ├── Conclusion.jsx       # Full synthesis & "IN ONE LINE" banner
    │   ├── Contact.jsx          # Editable links, direct message form & confetti
    │   ├── Footer.jsx           # Monogram, quick navigation & credits
    │   ├── IconHelper.jsx       # Safe Lucide icon resolver
    │   └── SocialIcons.jsx      # Clean SVG icons for LinkedIn & GitHub
    ├── App.jsx                  # Single-page layout assembler
    ├── main.jsx                 # React root mount
    └── index.css                # Tailwind directives and court line patterns
```

---

## 🛠️ How to Run Locally

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm** or **yarn**

### 2. Installation
Clone or navigate to the project directory:
```bash
cd portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Content & Replace Placeholders

All portfolio text, links, and achievements are centralized in a single file:
👉 **[`src/data/portfolioData.js`](file:///src/data/portfolioData.js)**

- **Contact Links:** Update `personalInfo.contact.email`, `personalInfo.contact.linkedin`, and `personalInfo.contact.github`.
- **Profile Photo:** Replace the placeholder in `src/components/About.jsx` with an `<img>` tag pointing to your photo in `public/` (e.g., `<img src="/profile.jpg" alt="Abeer Nair" />`).
- **Photo Strip:** Place travel/cooking photos in `public/photos/` and reference their paths in `galleryPlaceholders` in `src/data/portfolioData.js`.

---

## 🌐 How to Deploy

### Option A: Deploy to Vercel (Recommended — 2 minutes)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Abeer Nair portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Vercel will build and assign you a fast, free live domain (e.g. `abeernair.vercel.app`) with automatic HTTPS and CI/CD on every push!

### Option B: Deploy to GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.js`, set the base path to your repository name:
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Replace with your repository name
   });
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, go to **Pages** and ensure the source is set to the `gh-pages` branch.

---

## ♿ Accessibility & Performance

- Semantic HTML5 section landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- Full keyboard focus ring indicators (`focus-visible`).
- High contrast ratios exceeding WCAG AA standards across all teal and cream backgrounds.
- Respects `prefers-reduced-motion` for motion sensitivity.
- Zero layout shift, responsive down to 375px mobile screens.

---

© 2026 Abeer Nair. Built with pride and athletic discipline.
