/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        navlinks: ['"Cairo Play"', 'sans-serif'],
        main: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
