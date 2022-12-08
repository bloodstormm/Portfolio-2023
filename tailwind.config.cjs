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
        accent: "#ff7c45",
        darkBrown: "#3d3731",
      },
    },
  },
  plugins: [],
};
