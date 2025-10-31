/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jd-green': '#367C2B',
        'jd-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

