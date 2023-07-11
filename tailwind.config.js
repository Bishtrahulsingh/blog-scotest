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
        primarytxt:"#53ff0f",
        primarycode:"#858585"
      },
    },
  },
  plugins: [],
}
