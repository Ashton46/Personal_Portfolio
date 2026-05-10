/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#070911",
        navy: "#132946",
        aqua: "#9cc9e6",
        lavender: "#c3cce8",
        coal: "#0d1020",
        violet: "#8f5cff",
        cyan: "#59d7ff",
        teal: "#50f2d0",
        slime: "#a8ff60",
        paper: "#f3f0df"
      },
      boxShadow: {
        glow: "0 0 36px rgba(89, 215, 255, 0.22)",
        violet: "0 0 42px rgba(143, 92, 255, 0.24)"
      },
      backgroundImage: {
        "room-radial": "radial-gradient(circle at 20% 10%, rgba(143, 92, 255, 0.22), transparent 28%), radial-gradient(circle at 84% 18%, rgba(89, 215, 255, 0.18), transparent 24%), linear-gradient(180deg, #090a14 0%, #0d1020 48%, #070911 100%)"
      }
    }
  },
  plugins: []
};
