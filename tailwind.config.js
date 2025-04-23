/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxsm': '200px',
      'xsm': '600px',
      'ftrpx': '800px',
      'xmd': '900px', 
    }
  },
  plugins: [],
}

