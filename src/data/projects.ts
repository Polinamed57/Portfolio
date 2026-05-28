import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "SkyCast Weather Dashboard",
    description:
      "A weather dashboard that pulls real-time conditions and a 5-day forecast for any city or the user's current location. Features search, geolocation, °C/°F toggle, dark mode and saved favorites in a clean, card-based UI.",
    tech: ["React", "TypeScript", "OpenWeather API", "CSS"],
    liveUrl: "https://weather-app-knca.vercel.app/",
    repoUrl: "https://github.com/Polinamed57/Weather-App",
    imageUrl: "/projects/project-one.png",
    year: "2025",
  },
  {
    title: "Expenses Tracker",
    description:
      "A full-stack expense tracker with user accounts that lets you record one-time and recurring expenses, organize them into custom categories, and review spending per month. Visualizes your finances with pie, bar and history charts, plus AI-powered insights, backed by Supabase auth and database.",
    tech: ["React", "TypeScript", "Supabase", "Claude API", "Recharts"],
    liveUrl: "https://expenses-tracker-one-orpin.vercel.app",
    repoUrl: "https://github.com/Polinamed57/Expenses-Tracker",
    imageUrl: "/projects/project-two.png",
    year: "2025",
  },
];
