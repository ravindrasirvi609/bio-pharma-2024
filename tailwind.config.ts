import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        teal: "#00a28b",
        coral: "#ec4c5b",
        "light-blue": "#1bc8da",
        "dark-blue": "#0196c0",
      },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
export default config;
