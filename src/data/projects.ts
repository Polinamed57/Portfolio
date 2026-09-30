import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "A responsive, real-time weather app consuming a third-party REST API. Features city search, geolocation, a 5-day forecast, °C/°F toggle and graceful error handling across devices.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    liveUrl: "https://weather-app-knca.vercel.app/",
    repoUrl: "https://github.com/Polinamed57/Weather-App",
    imageUrl: "/projects/project-one.png",
    year: "2025",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker with user accounts that lets you record one-time and recurring expenses, organize them into custom categories, and review spending per month. Visualizes your finances with pie, bar and history charts, plus AI-powered insights, backed by Supabase auth and database.",
    tech: ["React", "TypeScript", "Supabase", "Claude API", "Recharts"],
    liveUrl: "https://expenses-tracker-one-orpin.vercel.app",
    repoUrl: "https://github.com/Polinamed57/Expenses-Tracker",
    imageUrl: "/projects/project-two.png",
    year: "2025",
  },
];
