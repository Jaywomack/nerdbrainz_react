const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-gray-1": "#888888",
        "custom-black-1": "#080808",
        "custom-ivory": "#FFFFF0",
      },
      backgroundImage: (theme) => ({
        "hero-image": "url(./images/hero_bg.jpeg)",
        "footer-image": "url(./images/glasses_logo.jpeg)",
      }),
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
