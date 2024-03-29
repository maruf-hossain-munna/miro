import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors : {
        "sky-blue" : "#4262FF",
        "dark-purple" : "#02033B",
        "light-orrange" : "#FFC247",
        "base-black" : "#050038",
        "dark-gray" : "#050038",
      },
    },
  },
  plugins: [],
};
export default config;
