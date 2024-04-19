/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'fade-out': 'fadeOut 0.5s ease forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      screens: {
        tablette: { max: '1023px' },
        mobile: { max: '639px' },
      },
      colors: {
        primary: '#FCFDF9',
        secondary: '#ECFAC5',
        tertinary: '#A5C200',
        borderColor: '#232813',
        textColor: '#10120A',
        jaune: 'rgb(255, 213, 0)',
        bleu: 'rgb(57, 90, 235)',
      },
      fontFamily: {
        titleFont: ['Playfair Display', 'sans-serif'],
        textFont: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '3.5rem',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      transform: ['active'],
    },
  },
  plugins: [],
};
