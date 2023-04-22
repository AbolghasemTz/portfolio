/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      counterSmall: "1024px",
      containerXs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        bodyColor: "#0A192f",
        textGreen: "#cc1830",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
};