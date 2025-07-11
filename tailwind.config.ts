import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#BEFBFF",
        darkHover: "#3a3b3c",
        darkTheme: "#242526",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "2px 2px 0 #000",
        white: "2px 2px #fff",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
