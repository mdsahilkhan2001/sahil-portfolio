 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // enables dark mode via `class="dark"`
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
        },
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
          "100%": { transform: "translate(0px,0px) scale(1)" }
        }
      },
      animation: {
        blob: "blob 8s infinite",
      },
    },
  },
  plugins: [],
};
