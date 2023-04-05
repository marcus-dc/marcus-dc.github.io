/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: '#d9eeff',
        200: '#ddf0ff',
        300: '#e2f2ff',
        400: '#e6f4ff',
        500: '#eaf6ff',
        600: '#eef7ff',
      },
      dark: {
        100: '#292929',
        200: '#3d3d3d',
        300: '#535353',
        400: '#696969',
        500: '#808080',
        600: '#989898',
      },
      mixed: {
        100: '#383a3b',
        200: '#4b4d4e',
        300: '#5f6162',
        400: '#747677',
        500: '#8a8b8c',
        600: '#a0a1a2',
      }
    }
  },
  plugins: [],
};
