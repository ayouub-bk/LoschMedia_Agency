/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        jetbrains: ["JetBrains Mono", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#0048A6",
        highlight: "#B01799",
        hover1: "#8C0778",
        hover2: " #002B63",
      },
    },
    screens: {
      xs: "500px",
      tablet: "800px",
      desktop: "1200px",
    },
    backgroundImage: {
      "custom-radial": "radial-gradient(at center, #0150A7, #FFFFFF)",
    },
    // boxShadow: {
    //   "custom-blue": "0 4px 8px rgba(0, 72, 166, 0.5)", // Custom shadow color
    // },
  },
  plugins: [],
};
