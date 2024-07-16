import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/react/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spinner: "spinner 1.6s infinite ease",
      },
      keyframes: {
        spinner: {
          "0%": {
            transform: "rotate(45deg) rotateX(-25deg) rotateY(25deg)",
          },
          "50%": {
            transform: "rotate(45deg) rotateX(-385deg) rotateY(25deg)",
          },
          "100%": {
            transform: "rotate(45deg) rotateX(-385deg) rotateY(385deg)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};

export default config;
