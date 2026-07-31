import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "var(--color-cream)",
          muted: "var(--color-cream-muted)",
        },
        navy: {
          DEFAULT: "var(--color-navy)",
          soft: "var(--color-navy-soft)",
          muted: "var(--color-navy-muted)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          deep: "var(--color-gold-deep)",
          soft: "var(--color-gold-soft)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          inverse: "var(--color-ink-inverse)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        serif: "var(--font-serif)",
        sans: "var(--font-sans)",
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
  plugins: [],
};
export default config;
