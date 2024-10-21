import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nectar-gray-1": "#C9C9C9",
        "nectar-gray-2": "#ADADAD",
        "nectar-gray-3": "#26272B",
        "nectar-white-1": "#E2E9ED",
        "nectar-white-2": "#ECECF0",
        "nectar-white-3": "#D7D7D7",
        "nectar-red": "#F43F3F",
        "nectar-dark-gray": "#2C2C30",
        "nectar-light-gray": "#3B3B42",
        "nectar-black-1": "#131316",
        "nectar-black-2": "#18181B",
      },
    },
  },
  plugins: [],
};
export default config;
