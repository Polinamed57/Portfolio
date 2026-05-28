# Portfolio — Polina Kovalenko

Personal portfolio website of Polina Kovalenko, a frontend developer.
A fast, responsive single-page site featuring an about section, skills,
selected projects, education and contact details.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling with a custom dark + gold theme
- **Framer Motion** — scroll-reveal, stagger and hover animations
- **lucide-react** — icons

## Features

- Single-page layout with smooth scrolling and active-section highlighting
- Animated hero, scroll-reveal sections and interactive hover states
- Respects `prefers-reduced-motion` for accessibility
- Responsive across mobile, tablet and desktop
- SEO and Open Graph meta tags for rich link previews

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally

## Project structure

```
src/
  components/   UI sections (Hero, About, Skills, Projects, ...)
  ui/           Reusable building blocks (AnimatedSection, Tag, ...)
  data/         Typed content (profile, projects, skills, experience)
  hooks/        Custom hooks (useActiveSection)
  types/        Shared TypeScript types
```

