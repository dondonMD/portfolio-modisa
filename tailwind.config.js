module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { light: "#0ea5e9", dark: "#7dd3fc" },
        secondary: { light: "#e11d48", dark: "#fda4af" },
        background: { light: "#f8fafc", dark: "#020617" },
        surface: { light: "#ffffff", dark: "#0f172a" },
        "background-light": "#f8f9fa", // Replace with your light background color
        "background-dark": "#343a40", // Replace with your dark background color
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
