/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#BA2AC7",
        navy: '#0E172A',
        green: '#90D685',
        orange: '#B25F00',
        backgroundBlueGrey: '#FFFFFF',
        accentBlue: '#A1E3FF',
        accentGreen: '#19D070',
      },
      spacing: {
      navbarHeight: '70px',
      sectionHeight: '600px'
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

