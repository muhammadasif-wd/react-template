// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "320px", // => for extra small devices
      sm: "640px", // => for small devices
      md: "768px", // => for medium devices
      lg: "1024px", // => for large devices
      xl: "1280px", // => for extra large devices
      "2xl": "1536px", // => for 2xl devices
      "3xl": "1920px", // => for 3xl devices
    },
    colors: {
      primary: "#07075d",
      secondary: "#bf3f6f",
      white: "#fff",
      dark: "#393f4a",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
