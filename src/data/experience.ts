import type { TimelineEntry } from "../types";

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Freelance Web Developer",
    org: "Sandra's Bake House",
    period: "Sep 2026 — Present",
    details: [
      "Redesigned a cookie startup's wholesale catalog for email outreach to Edmonton cafés: an 8-page HTML/CSS layout exported to PDF with embedded brand fonts.",
      "Cut the file size from 13.5 MB to 1.3 MB by fixing image encoding, corrected allergen labelling, and delivered across several rounds of client feedback.",
    ],
  },
  {
    kind: "education",
    title: "Full Stack Development Diploma",
    org: "University of Alberta",
    period: "Sep 2026 — Present",
    details: [
      "Coursework: Python, Django, REST APIs, relational databases, and full stack application architecture.",
      "Building end-to-end applications combining React frontends with Python/Django backends.",
    ],
  },
  {
    kind: "education",
    title: "Frontend Development Certificate",
    org: "University of Alberta",
    period: "2025 — 2026",
    details: [
      "Built website structure and layouts with HTML and CSS, applying visual design fundamentals.",
      "Created interactivity and custom features with JavaScript and React.",
      "Worked with databases to store and manage application data.",
    ],
  },
];
