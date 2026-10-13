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
    year: "2026",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker with email sign-up and per-user data protected by Row Level Security. Set monthly budgets per category, track savings goals and export any month to CSV. Type something like \"Starbucks 12.50\" and Claude picks the category through a serverless function. Pie, bar and history charts show where the money goes. Built on Supabase (PostgreSQL and Auth) and deployed on Vercel.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Claude API", "Recharts"],
    liveUrl: "https://expenses-tracker-one-orpin.vercel.app",
    repoUrl: "https://github.com/Polinamed57/Expenses-Tracker",
    imageUrl: "/projects/project-two.png",
    year: "2026",
  },
];