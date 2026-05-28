import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        surface: "#161616",
        "surface-hover": "#1c1c1c",
        gold: "#c9a84c",
        "gold-bright": "#f0d78c",
        content: "#e8e6e0",
        muted: "#8a8a82",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Work Sans'", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,168,76,0.4), 0 12px 40px -12px rgba(201,168,76,0.25)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
