/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: 'rgb(40, 0, 71)',
        deepBluePurple: 'rgb(38, 0, 121)',
        deepPurpleRed: 'rgb(75, 1, 96)',
        lightPurple: 'rgb(81,51,152)',
      },
    },
  },
  plugins: [],
}