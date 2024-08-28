/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Odasans: ["Odasans Semibold", "sans-serif"],
        Wulkan: ["Wulkan", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#e5ddd4",
        darkBackground: "#161618",
        accent: "#c5995d",
        darkAccent: "#bb9157",
        darkerAccent: "#9a7a4d",
        lighterAccent: "#B29366",
        darkBrown: "#3d3731",
        lightBrown: "#CDC7C1",
        whity: "#fff7ec",
        darky: "#323030",
      },
    },
  },
};
