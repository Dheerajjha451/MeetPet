/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#002A48',
        customBg: 'rgb(247,219,167)',
        customButton: '#F2994A'
      },
    },
  },
  plugins: [],
};
