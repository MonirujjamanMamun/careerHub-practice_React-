/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure it scans your component files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'], // Use 'sans' alias for the body
      },
    },
  },
  plugins: [require('daisyui')], // Add DaisyUI plugin
};
