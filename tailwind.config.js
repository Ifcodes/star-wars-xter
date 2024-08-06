/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        dark: "#171717",
        grey2: "#4F4F4F",
        grey1: "#E5E7EB",
        offWhite: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
