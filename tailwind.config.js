const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        seashell: "#FBF7F3",
      },
      fontFamily: {
        mono: [
          "JetBrains\\ Mono",
          "ui\\ \\-\\ monospace",
          "SFMono\\ \\-\\ Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation\\ Mono",
          "Courier\\ New",
          "monospace",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
