/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#00f6ff",
        lightgray: "#4f4f4e",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGray:"#3c3c3b"
      },
      fontFamily: {
        poppins: ['Montserrat', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};