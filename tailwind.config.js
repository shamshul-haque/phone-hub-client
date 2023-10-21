/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
