/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        actOfRejection: ['"ActOfRejection"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        montserratItalic: ['"Montserrat_Italic"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        interItalic: ['"Inter_Italic"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
