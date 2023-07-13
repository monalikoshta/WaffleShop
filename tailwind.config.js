/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        LilitaOne:["Lilita One","cursive"],
        Diphylleia: ['Diphylleia', "serif"]
      }
    },
  },
  plugins: [],
};
