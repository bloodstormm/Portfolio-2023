/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Odasans: ["Odasans Semibold", "sans-serif"],
        Wulkan: ["Wulkan", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#e5ddd4",
        accent: "#c5995d",
        darkerAccent: "#9a7a4d",
        darkBrown: "#3d3731",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
