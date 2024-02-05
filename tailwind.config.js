/** @type {import('tailwindcss').Config} */
// import flowBitePlugin from 'flowbite/plugin';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1350px",
    },
    extend: {
      colors: {
        primary: "rgb(134,0,22)",
        accent: "rgb(255,255,255)",
        // will be changed to the current theme
      },
    },
  },
  plugins: [],
};
