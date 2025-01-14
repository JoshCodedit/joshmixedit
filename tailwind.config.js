/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        navlinks: ['"Cairo Play"', 'sans-serif'],
        main: ['Roboto', 'sans-serif'],
      },
      colors: {
        midnight: '#22092C', // Deep purple
        mulberry: '#872341', // Burgundy red
        crimson: '#BE3144', // Bright red
        flame: '#F05941', // Vibrant orange
      },
    },
  },
  plugins: [],
  layer: {
    components: {
      '.nav-link': 'cursor-pointer relative group',
      '.nav-link::after': `content-[''] absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-crimson to-flame transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`,
    },
  },
};
