/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#393f82",
        secondary: "#3e357c",
        accent:"#0398cc"
      },
     
    },
  },
  plugins: [],
}

