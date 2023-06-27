/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif'],
      },
      colors:{
        primary:"#895fff",
        primaryDark:"#280095",
        primarytxt:"#03fcd5"
      },
    },
  },
  plugins: [],
}
