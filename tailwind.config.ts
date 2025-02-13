import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^bg-(red|green|blue|yellow|purple|pink|orange)-800$/,
    },
    {
      pattern: /^hover:bg-(red|green|blue|yellow|purple|pink|orange)-700$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "forest-color": "#0F1E25",
        "forest-green-color": "#14473E",
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
