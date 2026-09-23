/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1D2A44',
          light: '#2C3E63',
          dark: '#141D31',
        },
        gold: {
          DEFAULT: '#C99A3B',
          light: '#E0B75C',
          dark: '#9C7626',
        },
        rust: {
          DEFAULT: '#A63A2E',
          light: '#C24C3D',
        },
        forest: {
          DEFAULT: '#33563F',
        },
        cream: {
          DEFAULT: '#F6EFE1',
          dark: '#EEE3CC',
        },
        charcoal: '#221D16',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
