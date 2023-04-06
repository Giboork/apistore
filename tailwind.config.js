const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [ "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: false,
  theme: {
    extend: {

    },
    fontFamily: {
      "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
