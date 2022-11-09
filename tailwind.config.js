/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    extend: {
      colors: {
        blue: "#0075FF",
        mgray: "#6E7191",
        dark: "#211F54"
      },
    },
  },
  plugins: [],
}