import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fff",
            foreground: "#000000",
            primary: {
              DEFAULT: "#0A24C5",
              foreground: "#ffffff",
            },
            secondary: { DEFAULT: "#0A24C5", foreground: "#ffffff" },
            content1: {
              DEFAULT: "#F3F7F6",
              foreground: "#040405",
            },
          },
        },
        dark: {
          colors: {
            background: "#0D001A",
            foreground: "#e0e0e0",
            primary: {
              DEFAULT: "#0A24C5",
              foreground: "#ffffff",
            },
            secondary: { DEFAULT: "#0A24C5", foreground: "#ffffff" },
            content1: {
              DEFAULT: "#10071A",
              foreground: "#00001f",
            },
          },
        },
      },
    }),
  ],
};
export default config;
