import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffb400",
        gray: "#2b2a2a",
        black: "#111111",
        green: "#00ff7f",
      },
    },
  },
  plugins: [],
};
export default config;
