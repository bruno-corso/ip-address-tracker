/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        padrao: ['Rubik', 'sans-serif'],
      },
      colors: {
        'cinza-escuro': '#2B2B2B',
        'cinza-claro': '#969696'
      },
    },
  },
  plugins: [],
};

export default config;
