/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0F0F0F',
        'font-gray': '#958C8D',
        'font-green': '#01FF01',
      },
      backgroundImage: {
        'hero_pattern': "url('/razer-nari-hero-desktop-wireless-gaming-headset CL.jpg')",
        'bg-spatial': "url('/razer-nari-usp02-desktop-wireless-gaming-headset.jpg')",
      },
      minHeight: {
        'full-container':' 100vh'
      },
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}