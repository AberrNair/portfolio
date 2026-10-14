import pptxgen from 'pptxgenjs';
import path from 'path';
import fs from 'fs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'Abeer Nair';
pptx.company = "SVKM's NMIMS MPSTME";
pptx.title = "Abeer Nair - Non-Academic Portfolio Case Study";

// Color Palette Constants (Game of Thrones Obsidian & Gold)
const C_BG = '080B11';        // Obsidian Dark
const C_CARD = '111827';      // Deep Midnight Card
const C_CARD_BORDER = 'B45309'; // Amber Gold Border
const C_GOLD = 'F59E0B';      // Royal Gold
const C_AMBER = 'FBBF24';     // Bright Amber
const C_WHITE = 'F8FAFC';     // Crisp White Text
const C_MUTED = '94A3B8';     // Slate Muted Text
const C_CRIMSON = 'DC2626';   // Dragonfire Crimson
const C_DARK_ACCENT = '0F172A';

const FONT_HEAD = 'Georgia';
const FONT_BODY = 'Calibri';

// Helper to create slide background and standard header
function createBaseSlide(category, title, subtitle) {
  const slide = pptx.addSlide();
  slide.background = { color: C_BG };

  // Top Category Tag
  slide.addText(category.toUpperCase(), {
    x: 0.8,
    y: 0.45,
    w: 8.0,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_AMBER,
    charSpacing: 2
  });

  // Main Slide Title
  slide.addText(title, {
    x: 0.8,
    y: 0.75,
    w: 11.5,
    h: 0.55,
    fontSize: 22,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_WHITE
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8,
      y: 1.25,
      w: 11.5,
      h: 0.35,
      fontSize: 12,
      fontFace: FONT_BODY,
      italic: true,
      color: C_MUTED
    });
  }

  // Bottom gold subtle rule
  slide.addShape(pptx.ShapeType.line, {
    x: 0.8,
    y: 7.0,
    w: 11.7,
    h: 0,
    line: { color: '374151', width: 0.75 }
  });

  // Footer text
  slide.addText("Abeer Nair | The Champion's Realm • Non-Academic Portfolio Case Study", {
    x: 0.8,
    y: 7.05,
    w: 8.0,
    h: 0.25,
    fontSize: 9,
    fontFace: FONT_BODY,
    color: '6B7280'
  });

  slide.addText("2026", {
    x: 11.5,
    y: 7.05,
    w: 1.0,
    h: 0.25,
    fontSize: 9,
    fontFace: FONT_BODY,
    align: 'right',
    color: '6B7280'
  });

  return slide;
}

// -------------------------------------------------------------
// SLIDE 1: TITLE SLIDE
// -------------------------------------------------------------
{
  const slide = pptx.addSlide();
  slide.background = { color: C_BG };

  // Decorative Golden Ambient Box
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.8,
    y: 0.8,
    w: 11.7,
    h: 5.8,
    fill: { color: C_CARD },
    line: { color: C_CARD_BORDER, width: 1.5 }
  });

  // Crown Badge
  slide.addText("PORTFOLIO ENGINEERING & DESIGN CASE STUDY", {
    x: 1.2,
    y: 1.2,
    w: 7.0,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_AMBER,
    charSpacing: 2
  });

  // Main Name / Title
  slide.addText("ABEER NAIR", {
    x: 1.2,
    y: 1.6,
    w: 7.0,
    h: 0.9,
    fontSize: 38,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_GOLD
  });

  slide.addText("The Champion's Realm: Non-Academic Portfolio", {
    x: 1.2,
    y: 2.5,
    w: 7.0,
    h: 0.45,
    fontSize: 18,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_WHITE
  });

  slide.addText("Designing a High-Performance, Cinematic Web Platform Showcasing Competitive Athletics, Campus Leadership, and Personal Curiosity.", {
    x: 1.2,
    y: 3.05,
    w: 6.8,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: C_MUTED,
    lineSpacing: 18
  });

  // Creed Callout Box
  slide.addShape(pptx.ShapeType.rect, {
    x: 1.2,
    y: 4.1,
    w: 6.8,
    h: 1.0,
    fill: { color: '0A0E17' },
    line: { color: 'D97706', width: 1 }
  });

  slide.addText('"A competitive athlete, a reliable organiser, and a curious, people-loving person who enjoys every new challenge."', {
    x: 1.4,
    y: 4.25,
    w: 6.4,
    h: 0.7,
    fontSize: 11.5,
    fontFace: FONT_HEAD,
    italic: true,
    color: 'FEF3C7',
    align: 'center'
  });

  // Presenter Metadata
  slide.addText("PRESENTER: Abeer Nair  |  B.Tech Information Technology\nINSTITUTION: SVKM's NMIMS MPSTME, Shirpur Campus", {
    x: 1.2,
    y: 5.4,
    w: 7.0,
    h: 0.8,
    fontSize: 11,
    fontFace: FONT_BODY,
    bold: true,
    color: C_AMBER,
    lineSpacing: 16
  });

  // Right Side Trophy / Athlete Card Image
  const trophyImg = path.resolve('public/images/yuva_sports_trophy_winner.jpg');
  if (fs.existsSync(trophyImg)) {
    slide.addImage({
      path: trophyImg,
      x: 8.5,
      y: 1.2,
      w: 3.6,
      h: 5.0,
      rounding: true
    });
    slide.addShape(pptx.ShapeType.rect, {
      x: 8.5,
      y: 1.2,
      w: 3.6,
      h: 5.0,
      fill: { color: '000000', transparency: 100 },
      line: { color: C_GOLD, width: 2 }
    });
    slide.addText("NMIMS Yuva Sports 2026 Winner", {
      x: 8.6,
      y: 5.8,
      w: 3.4,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_AMBER,
      align: 'center'
    });
  }
}

// -------------------------------------------------------------
// SLIDE 2: OBJECTIVES OF THE PORTFOLIO
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Strategic Vision",
    "Portfolio Objectives & Mission",
    "Translating non-academic excellence into a verifiable, high-impact digital identity"
  );

  const objectives = [
    {
      num: "01",
      title: "Holistic Human Representation",
      desc: "Transcend the rigid limitations of academic transcripts. Present a complete 360° portrait spanning national sports, campus governance, world travel, and culinary creativity.",
      tag: "Multidimensional Persona"
    },
    {
      num: "02",
      title: "Evidence-Based Verification",
      desc: "Provide authentic, documented proof of achievements—including School National Table Tennis, West Zone Inter-University, and the Yuva Sports 2026 championship victory.",
      tag: "Documented Track Record"
    },
    {
      num: "03",
      title: "Transferable Competency Mapping",
      desc: "Demonstrate how physical conditioning, tournament composure under pressure, and event security crisis management translate directly into high-stakes engineering teamwork.",
      tag: "Professional Alignment"
    },
    {
      num: "04",
      title: "Cinematic & Engaging Storytelling",
      desc: "Employ an immersive visual theme ('If Game of Thrones had a website') with rich obsidian tones, gold gradients, and interactive components that captivate recruiters and evaluators.",
      tag: "Unforgettable Experience"
    }
  ];

  objectives.forEach((obj, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 0.8 + col * 5.9;
    const y = 1.75 + row * 2.5;

    // Card background
    slide.addShape(pptx.ShapeType.rect, {
      x: x,
      y: y,
      w: 5.6,
      h: 2.25,
      fill: { color: C_CARD },
      line: { color: C_CARD_BORDER, width: 1 }
    });

    // Number Accent
    slide.addText(obj.num, {
      x: x + 0.25,
      y: y + 0.2,
      w: 0.8,
      h: 0.4,
      fontSize: 16,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_CRIMSON
    });

    // Tag
    slide.addText(obj.tag.toUpperCase(), {
      x: x + 1.2,
      y: y + 0.25,
      w: 4.1,
      h: 0.25,
      fontSize: 9,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_AMBER,
      align: 'right'
    });

    // Title
    slide.addText(obj.title, {
      x: x + 0.25,
      y: y + 0.65,
      w: 5.1,
      h: 0.35,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_WHITE
    });

    // Description
    slide.addText(obj.desc, {
      x: x + 0.25,
      y: y + 1.05,
      w: 5.1,
      h: 1.0,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: C_MUTED,
      lineSpacing: 15
    });
  });
}

// -------------------------------------------------------------
// SLIDE 3: WHY TO CREATE / THE CORE NEED
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Problem & Rationale",
    "Why Create a Non-Academic Portfolio?",
    "Addressing the critical blind spots of traditional technical resumes"
  );

  // Left Column: Traditional Resume Limitations
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.8,
    y: 1.8,
    w: 5.6,
    h: 4.9,
    fill: { color: '13111C' },
    line: { color: '7F1D1D', width: 1.5 }
  });

  slide.addText("THE TRADITIONAL RESUME DILEMMA", {
    x: 1.1,
    y: 2.05,
    w: 5.0,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_HEAD,
    bold: true,
    color: '#EF4444'
  });

  slide.addText("Flat, Unidimensional & Dry Text", {
    x: 1.1,
    y: 2.35,
    w: 5.0,
    h: 0.35,
    fontSize: 15,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_WHITE
  });

  const resumeLimits = [
    "Reduces multi-year athletic rigor into a single bullet point line.",
    "Fails to communicate pressure management, adrenaline control, and fast reflexes.",
    "Leaves organizing leadership (Security Core, SIH 2025) without human context or visual evidence.",
    "Completely ignores curiosity traits like world exploration and culinary experimentation.",
    "Lacks emotional resonance—recruiters review hundreds of identical monochrome PDFs."
  ];

  resumeLimits.forEach((item, i) => {
    slide.addText(`✖   ${item}`, {
      x: 1.1,
      y: 2.85 + i * 0.75,
      w: 5.0,
      h: 0.65,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: '#CBD5E1',
      lineSpacing: 15
    });
  });

  // Right Column: The Dedicated Platform Solution
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.9,
    y: 1.8,
    w: 5.6,
    h: 4.9,
    fill: { color: '0D1A1E' },
    line: { color: C_GOLD, width: 1.5 }
  });

  slide.addText("THE INTERACTIVE PORTFOLIO ADVANTAGE", {
    x: 7.2,
    y: 2.05,
    w: 5.0,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_AMBER
  });

  slide.addText("Living Proof of Grit, Charisma & Craft", {
    x: 7.2,
    y: 2.35,
    w: 5.0,
    h: 0.35,
    fontSize: 15,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_WHITE
  });

  const portfolioWins = [
    "Authentic Visual Proof: Live match action, trophy ceremonies, and podium addresses.",
    "Cross-Functional Transferability: Shows how athletic stamina drives 36-hour hackathons.",
    "Interactive Engagement: Switchable views, responsive filters, and dynamic timelines.",
    "Memorable Personal Brand: The 'Champion's Realm' aesthetic creates an unforgettable impression.",
    "Global Accessibility: Instant web deployment on Netlify & GitHub Pages accessible worldwide."
  ];

  portfolioWins.forEach((item, i) => {
    slide.addText(`✔   ${item}`, {
      x: 7.2,
      y: 2.85 + i * 0.75,
      w: 5.0,
      h: 0.65,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: '#FEF3C7',
      lineSpacing: 15
    });
  });
}

// -------------------------------------------------------------
// SLIDE 4: HEURISTIC PRINCIPLES USED (PART 1 - USABILITY HEURISTICS)
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "UX Architecture",
    "Heuristic Principles Applied (Part 1)",
    "Implementing Jakob Nielsen's 10 Usability Heuristics for seamless interaction"
  );

  const heuristics1 = [
    {
      num: "H01",
      name: "Visibility of System Status",
      focus: "Keeping the user informed at all times",
      examples: [
        "Sticky Glassmorphic Navbar: Highlights active section in real-time as user scrolls.",
        "Live State Indicators: Pulsing red broadcast dots ('Tournament Action', 'Active 2026').",
        "Interactive Matrix Feedback: Highlighted cells illuminate real-time competency breakdowns."
      ]
    },
    {
      num: "H02",
      name: "Match Between System & Real World",
      focus: "Speaking the user's language through intuitive metaphors",
      examples: [
        "Tournament Scroll Timeline: Physical tournament progression from School to University champion.",
        "Metaphorical Categorization: 'The Arena' (Sport), 'The Forge' (Fitness), 'The Hearth' (Cooking).",
        "Natural Terminology: Everyday conversational phrasing rather than developer jargon."
      ]
    },
    {
      num: "H03",
      name: "User Control and Freedom",
      focus: "Effortless navigation and flexible viewing options",
      examples: [
        "Interactive Athlete Photo Switcher: One-click tabs to switch between Trophy, Match, Gym, Travel.",
        "Instant Anchor Jumping: Smooth scroll triggers to leap between sections without lag.",
        "Global Return-To-Top Control: Persistent footer and nav shortcuts to reset view instantly."
      ]
    }
  ];

  heuristics1.forEach((h, i) => {
    const x = 0.8 + i * 3.95;
    const y = 1.8;

    slide.addShape(pptx.ShapeType.rect, {
      x: x,
      y: y,
      w: 3.75,
      h: 4.9,
      fill: { color: C_CARD },
      line: { color: C_CARD_BORDER, width: 1 }
    });

    slide.addText(h.num, {
      x: x + 0.25,
      y: y + 0.2,
      w: 1.0,
      h: 0.35,
      fontSize: 16,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_CRIMSON
    });

    slide.addText(h.name, {
      x: x + 0.25,
      y: y + 0.6,
      w: 3.25,
      h: 0.65,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_WHITE
    });

    slide.addText(h.focus, {
      x: x + 0.25,
      y: y + 1.25,
      w: 3.25,
      h: 0.45,
      fontSize: 10.5,
      fontFace: FONT_BODY,
      italic: true,
      color: C_AMBER
    });

    slide.addShape(pptx.ShapeType.line, {
      x: x + 0.25,
      y: y + 1.8,
      w: 3.25,
      h: 0,
      line: { color: '374151', width: 0.75 }
    });

    h.examples.forEach((ex, j) => {
      slide.addText(`•  ${ex}`, {
        x: x + 0.25,
        y: y + 1.95 + j * 0.95,
        w: 3.25,
        h: 0.85,
        fontSize: 10,
        fontFace: FONT_BODY,
        color: C_MUTED,
        lineSpacing: 14
      });
    });
  });
}

// -------------------------------------------------------------
// SLIDE 5: HEURISTIC PRINCIPLES USED (PART 2 - COGNITIVE & AESTHETIC)
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "UX Architecture",
    "Heuristic Principles Applied (Part 2)",
    "Consistency, recognition over recall, and minimalist aesthetic design"
  );

  const heuristics2 = [
    {
      num: "H04",
      name: "Consistency & Standards",
      desc: "Strict Design Token System",
      points: [
        "Universal UI tokens across all 10 sections: 16px card radius, 1px gold border borders, obsidian backgrounds.",
        "Symmetrical Card Pairs: Mirrored structures in Fitness ('Gym Work' & 'Core Power') and People ('Connecting' & 'Speaking').",
        "Consistent Badge Taxonomy: Standardized pill tags for levels, years, and skill tags."
      ]
    },
    {
      num: "H06",
      name: "Recognition Rather Than Recall",
      desc: "Visual Scannability & Clarity",
      points: [
        "4 Hero Stat Cards: Instant quantitative anchors above the fold (National, Zonal, Winner, 3 Events).",
        "Color-Coded Badges: Red for tournaments, Amber for events, Blue for travel, Green for real-world impact.",
        "Skills Heatmap Matrix: Explicit visual grid connecting every non-academic pursuit to workplace strengths."
      ]
    },
    {
      num: "H08",
      name: "Aesthetic & Minimalist Design",
      focus: "High Signal-to-Noise Ratio",
      points: [
        "Dark obsidian background eliminates screen glare while elevating high-res photos.",
        "Carefully curated negative space gives breathing room to achievements without clutter.",
        "Purposeful Framer Motion scroll triggers—subtle elevations rather than distracting page shifts."
      ]
    }
  ];

  heuristics2.forEach((h, i) => {
    const x = 0.8 + i * 3.95;
    const y = 1.8;

    slide.addShape(pptx.ShapeType.rect, {
      x: x,
      y: y,
      w: 3.75,
      h: 4.9,
      fill: { color: C_CARD },
      line: { color: C_CARD_BORDER, width: 1 }
    });

    slide.addText(h.num, {
      x: x + 0.25,
      y: y + 0.2,
      w: 1.0,
      h: 0.35,
      fontSize: 16,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_CRIMSON
    });

    slide.addText(h.name, {
      x: x + 0.25,
      y: y + 0.6,
      w: 3.25,
      h: 0.65,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_WHITE
    });

    slide.addText(h.desc || h.focus, {
      x: x + 0.25,
      y: y + 1.25,
      w: 3.25,
      h: 0.45,
      fontSize: 10.5,
      fontFace: FONT_BODY,
      italic: true,
      color: C_AMBER
    });

    slide.addShape(pptx.ShapeType.line, {
      x: x + 0.25,
      y: y + 1.8,
      w: 3.25,
      h: 0,
      line: { color: '374151', width: 0.75 }
    });

    h.points.forEach((pt, j) => {
      slide.addText(`•  ${pt}`, {
        x: x + 0.25,
        y: y + 1.95 + j * 0.95,
        w: 3.25,
        h: 0.85,
        fontSize: 10,
        fontFace: FONT_BODY,
        color: C_MUTED,
        lineSpacing: 14
      });
    });
  });
}

// -------------------------------------------------------------
// SLIDE 6: VISUAL & ARCHITECTURAL DESIGN SYSTEM
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Visual Identity",
    "Design System: 'The Champion's Realm'",
    "Cinematic Game of Thrones Obsidian Aesthetic built on Modern React Architecture"
  );

  const designPillars = [
    {
      title: "Color Palette & Atmosphere",
      detail: "Deep Obsidian (#080B11) and Royal Midnight (#0D131F) provide an imposing foundation. Dragonfire Gold (#F59E0B) and Bright Amber (#FBBF24) symbolize victory and regal poise, with Crimson (#DC2626) accents for athletic intensity."
    },
    {
      title: "Typography System",
      detail: "Headings powered by Cinzel & Cinzel Decorative evoke ancient stone inscriptions and championship titles. Body text rendered in clean, legible Inter/Outfit guarantees effortless reading across mobile and desktop displays."
    },
    {
      title: "Motion & Micro-Interactions",
      detail: "Subtle canvas floating ember sparks, smooth spring card hover elevations (-6px translateY), animated numeric counter tickers on the Hero stats, and smooth-scroll navigation anchors create a tactile, premium feel."
    },
    {
      title: "Tech Stack & Performance",
      detail: "Built with React 19, Vite 6, Tailwind CSS 4, and Framer Motion. Zero UI kit bloat. Lightning-fast build times (2.2s), mobile-first responsive breakpoints, and pre-configured deployment rules for Netlify and Vercel."
    }
  ];

  designPillars.forEach((p, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 0.8 + col * 5.9;
    const y = 1.8 + row * 2.5;

    slide.addShape(pptx.ShapeType.rect, {
      x: x,
      y: y,
      w: 5.6,
      h: 2.25,
      fill: { color: C_CARD },
      line: { color: C_CARD_BORDER, width: 1 }
    });

    slide.addText(p.title, {
      x: x + 0.3,
      y: y + 0.25,
      w: 5.0,
      h: 0.4,
      fontSize: 14,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_GOLD
    });

    slide.addText(p.detail, {
      x: x + 0.3,
      y: y + 0.75,
      w: 5.0,
      h: 1.3,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: '#CBD5E1',
      lineSpacing: 16
    });
  });
}

// -------------------------------------------------------------
// SLIDE 7: PORTFOLIO SNAPSHOT SHOWCASE (USER REQUEST: LEFT A SPACE FOR SNAPSHOT)
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Live Interface",
    "Portfolio Snapshots: Cross-Device UI Showcase",
    "Dedicated snapshot frames displaying responsive desktop, tablet, and mobile execution"
  );

  // Frame 1: Desktop Panoramic Snapshot Frame
  const deskX = 0.8;
  const deskY = 1.8;
  const deskW = 7.0;
  const deskH = 4.9;

  slide.addShape(pptx.ShapeType.rect, {
    x: deskX,
    y: deskY,
    w: deskW,
    h: deskH,
    fill: { color: '0A0E17' },
    line: { color: C_GOLD, width: 2 }
  });

  // Top browser mock bar
  slide.addShape(pptx.ShapeType.rect, {
    x: deskX,
    y: deskY,
    w: deskW,
    h: 0.35,
    fill: { color: '1F2937' },
    line: { color: '374151', width: 0.5 }
  });

  slide.addText("● ● ●   http://localhost:5174/  —  Abeer Nair | The Champion's Realm", {
    x: deskX + 0.2,
    y: deskY + 0.05,
    w: 6.6,
    h: 0.25,
    fontSize: 9,
    fontFace: FONT_BODY,
    color: '#9CA3AF'
  });

  // Embed desktop screenshot if available, with fallback placeholder
  const desktopImg = 'C:/Users/hp/.gemini/antigravity/brain/7ec1e4e1-24dc-4ed9-b883-fcceae726798/desktop_view.png';
  if (fs.existsSync(desktopImg)) {
    slide.addImage({
      path: desktopImg,
      x: deskX + 0.1,
      y: deskY + 0.45,
      w: deskW - 0.2,
      h: deskH - 0.55
    });
  } else {
    slide.addText("[ DESKTOP PORTFOLIO SNAPSHOT AREA ]\n\nFull panoramic view: Obsidian dark aesthetic, interactive Hero athlete switcher card, stats ticker, and responsive navigation.", {
      x: deskX + 0.5,
      y: deskY + 1.8,
      w: deskW - 1.0,
      h: 1.5,
      fontSize: 13,
      fontFace: FONT_HEAD,
      color: C_AMBER,
      align: 'center'
    });
  }

  // Frame 2: Mobile Viewport Snapshot Frame
  const mobX = 8.1;
  const mobY = 1.8;
  const mobW = 4.4;
  const mobH = 4.9;

  slide.addShape(pptx.ShapeType.rect, {
    x: mobX,
    y: mobY,
    w: mobW,
    h: mobH,
    fill: { color: '0A0E17' },
    line: { color: C_AMBER, width: 2 }
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: mobX,
    y: mobY,
    w: mobW,
    h: 0.35,
    fill: { color: '1F2937' },
    line: { color: '374151', width: 0.5 }
  });

  slide.addText("● ● ●   Mobile Experience (375px)", {
    x: mobX + 0.2,
    y: mobY + 0.05,
    w: 4.0,
    h: 0.25,
    fontSize: 9,
    fontFace: FONT_BODY,
    color: '#9CA3AF'
  });

  const mobileImg = 'C:/Users/hp/.gemini/antigravity/brain/7ec1e4e1-24dc-4ed9-b883-fcceae726798/mobile_view.png';
  if (fs.existsSync(mobileImg)) {
    slide.addImage({
      path: mobileImg,
      x: mobX + 0.1,
      y: mobY + 0.45,
      w: mobW - 0.2,
      h: mobH - 0.55
    });
  } else {
    slide.addText("[ MOBILE PORTFOLIO SNAPSHOT AREA ]\n\nTouch-optimized vertical stack flow: thumb-friendly photo tabs, collapsible navigation, and fluid text wrapping.", {
      x: mobX + 0.3,
      y: mobY + 1.8,
      w: mobW - 0.6,
      h: 1.5,
      fontSize: 12,
      fontFace: FONT_HEAD,
      color: C_AMBER,
      align: 'center'
    });
  }
}

// -------------------------------------------------------------
// SLIDE 8: CORE CONTENT ARCHITECTURE & PILLARS
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Content Structure",
    "Core Pillars & Non-Academic Architecture",
    "Systematic organization of life pursuits strictly derived from documented achievements"
  );

  const pillars = [
    {
      title: "1. Competitive Sports Arena",
      tag: "Discipline & High Pressure",
      bullets: [
        "School National Table Tennis representation",
        "West Zone Inter-University competitor",
        "Winner, NMIMS Yuva Sports 2026 Champion",
        "Team sports: Football & Cricket on campus"
      ]
    },
    {
      title: "2. Athletic Conditioning",
      tag: "Daily Physical Habits",
      bullets: [
        "Sub-second reaction time & agility footwork drills",
        "Rotational torso & posterior chain power",
        "Multi-match tournament cardiovascular stamina",
        "100% daily discipline & consistent work ethic"
      ]
    },
    {
      title: "3. Campus Leadership",
      tag: "Behind-The-Scenes Coordination",
      bullets: [
        "Security Core Member (College Cultural Fest)",
        "Organising Committee Member (SIH 2025)",
        "DSN Team Member (NMMUN 2024)",
        "Calm judgement, crowd awareness & team sync"
      ]
    },
    {
      title: "4. Curiosity: Travel & Hearth",
      tag: "Exploration & Flavour Craft",
      bullets: [
        "Heritage wonder: Basilica of Bom Jesus, Old Goa",
        "Coastal journeys: Stepping outside routine",
        "Home cooking: Slow-simmered chicken curry",
        "Patience, culinary timing & sharing with others"
      ]
    },
    {
      title: "5. People & Communication",
      tag: "Extroverted Connections",
      bullets: [
        "Starting conversations & building rapid rapport",
        "Public speaking at NMIMS MPSTME wooden podium",
        "Clear verbal alignment on court and at events",
        "Connecting across Sports, Events, and Travel"
      ]
    },
    {
      title: "6. Synthesized Skill Matrix",
      tag: "Transferable Workplace Skills",
      bullets: [
        "Interactive matrix connecting pursuits to skills",
        "Teamwork, Communication, and Pressure Poise",
        "Planning, Adaptability, and Creativity mapping",
        "Holistic alignment with engineering leadership"
      ]
    }
  ];

  pillars.forEach((p, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = 0.8 + col * 3.95;
    const y = 1.8 + row * 2.5;

    slide.addShape(pptx.ShapeType.rect, {
      x: x,
      y: y,
      w: 3.75,
      h: 2.25,
      fill: { color: C_CARD },
      line: { color: C_CARD_BORDER, width: 1 }
    });

    slide.addText(p.title, {
      x: x + 0.2,
      y: y + 0.2,
      w: 3.35,
      h: 0.35,
      fontSize: 12,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_GOLD
    });

    slide.addText(p.tag.toUpperCase(), {
      x: x + 0.2,
      y: y + 0.55,
      w: 3.35,
      h: 0.25,
      fontSize: 8.5,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_AMBER
    });

    p.bullets.forEach((b, j) => {
      slide.addText(`•  ${b}`, {
        x: x + 0.2,
        y: y + 0.85 + j * 0.32,
        w: 3.35,
        h: 0.3,
        fontSize: 9.5,
        fontFace: FONT_BODY,
        color: C_MUTED
      });
    });
  });
}

// -------------------------------------------------------------
// SLIDE 9: CONCLUSION & IMPACT
// -------------------------------------------------------------
{
  const slide = createBaseSlide(
    "Synthesis & Impact",
    "Conclusion: The Complete Engineering Athlete",
    "How non-academic excellence shapes extraordinary professional capability"
  );

  // Left Major Callout
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.8,
    y: 1.8,
    w: 6.8,
    h: 4.9,
    fill: { color: C_CARD },
    line: { color: C_GOLD, width: 1.5 }
  });

  slide.addText("THE SYNTHESIS FORMULA", {
    x: 1.1,
    y: 2.05,
    w: 6.2,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_AMBER
  });

  slide.addText("Character Forged Beyond Academics", {
    x: 1.1,
    y: 2.35,
    w: 6.2,
    h: 0.45,
    fontSize: 18,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_WHITE
  });

  const conclusions = [
    {
      domain: "ATHLETIC CALMNESS",
      detail: "Competing in national table tennis teaches composure during match-point pressure—a vital skill when debugging mission-critical production outages."
    },
    {
      domain: "OPERATIONAL LEADERSHIP",
      detail: "Managing festival security and national hackathons proves that great outcomes require meticulous behind-the-scenes planning and proactive communication."
    },
    {
      domain: "CONTINUOUS CURIOSITY",
      detail: "Exploring historic world heritage and learning delicate culinary recipes nurture an inventive, lifelong learner mindset."
    },
    {
      domain: "EXTROVERTED ALLIANCES",
      detail: "Naturally connecting with diverse people turns cross-functional engineering silos into unified, high-performing teams."
    }
  ];

  conclusions.forEach((c, idx) => {
    slide.addText(c.domain, {
      x: 1.1,
      y: 2.9 + idx * 0.95,
      w: 6.2,
      h: 0.25,
      fontSize: 10,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_GOLD
    });

    slide.addText(c.detail, {
      x: 1.1,
      y: 3.15 + idx * 0.95,
      w: 6.2,
      h: 0.65,
      fontSize: 10.5,
      fontFace: FONT_BODY,
      color: '#CBD5E1',
      lineSpacing: 14
    });
  });

  // Right Side Summary Box
  slide.addShape(pptx.ShapeType.rect, {
    x: 7.9,
    y: 1.8,
    w: 4.6,
    h: 4.9,
    fill: { color: '0A0E17' },
    line: { color: C_CARD_BORDER, width: 1 }
  });

  slide.addText("KEY PORTFOLIO METRICS", {
    x: 8.2,
    y: 2.05,
    w: 4.0,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT_HEAD,
    bold: true,
    color: C_AMBER
  });

  const metrics = [
    { label: "Facts Invented", val: "0% (100% Authentic)" },
    { label: "User Photos Embedded", val: "10 High-Res Real Photos" },
    { label: "Build & Verification", val: "Zero-Error Vite Build" },
    { label: "Source Code Management", val: "GitHub (AberrNair/portfolio)" },
    { label: "Hosting Compatibility", val: "Netlify & Vercel Ready" },
    { label: "Responsive Viewports", val: "Desktop, Tablet & Mobile" }
  ];

  metrics.forEach((m, idx) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: 8.2,
      y: 2.45 + idx * 0.7,
      w: 4.0,
      h: 0.6,
      fill: { color: C_CARD },
      line: { color: '374151', width: 0.5 }
    });

    slide.addText(m.label.toUpperCase(), {
      x: 8.35,
      y: 2.52 + idx * 0.7,
      w: 3.7,
      h: 0.2,
      fontSize: 8.5,
      fontFace: FONT_HEAD,
      bold: true,
      color: C_MUTED
    });

    slide.addText(m.val, {
      x: 8.35,
      y: 2.72 + idx * 0.7,
      w: 3.7,
      h: 0.28,
      fontSize: 11,
      fontFace: FONT_BODY,
      bold: true,
      color: C_AMBER
    });
  });
}

// Write the Presentation file
const outputPptxPath = path.resolve('Abeer_Nair_Portfolio_Presentation.pptx');
await pptx.writeFile({ fileName: outputPptxPath });
console.log(`Presentation generated successfully at: ${outputPptxPath}`);
