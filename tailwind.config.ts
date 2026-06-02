import type { Config } from "tailwindcss";

/**
 * Tailwind v4 reads the design tokens (colors, fonts, shadows) from the
 * `@theme` block in src/app/globals.css. This file only declares the
 * content paths for tooling that still expects a JS config.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
