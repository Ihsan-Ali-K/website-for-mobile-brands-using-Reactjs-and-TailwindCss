/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        poppins: ['poppins', 'sans-serif']
      },
      colors: {
        "primary": "#9667E0",
        "secondary": "#F7F7F7",
        "textBg": "#FFFFFF4D"
      }
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}

