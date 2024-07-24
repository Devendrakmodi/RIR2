/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      PPFraktion: ['"PPFraktion", sans-serif'],
      Gustavo: ['"Gustavo", sans-serif'],
      Basel_Grotesk: ['"Basel Grotesk", sans-serif'],
      Dashhorizon: ['"Dashhorizon",sans-serif'],
      FtySpeedyCasual: ['"FtySpeedyCasual",sans-serif'],
      MouldyCheese: ['"MouldyCheese",sans-serif'],
      Harewataru: ['"Harewataru",sans-serif'],
      UltimateGear: ['"UltimateGear",sans-serif'],
      UltimateGearSlant: ['"UltimateGearSlant",sans-serif'],
    },
    extend: {
      colors: {
        "theme-color": "#000",
      },
      screens: {
        xs: "320px",
        sm: "500px",
      },
    },
  },
  plugins: [],
};
