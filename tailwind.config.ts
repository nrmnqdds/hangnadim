import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255,255,0.3)",
          "0 0px 30px rgba(255,255,255,0.2)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
