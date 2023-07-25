/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#4E2A81',
        'secondary': '#9A7DF9',
        'error': '#FF3B3B',
        'warning': '#FFCC00',
        'info': '#0063F7',
        'success': '#06C270',
        'dark': '#333333',
        'textGrey': '#737373'
      }
    },
  },
  plugins: [],
};
