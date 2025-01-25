/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"],
        serif: ["Guyot Headline", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
