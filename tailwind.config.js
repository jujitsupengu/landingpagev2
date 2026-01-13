/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0f',
        'surface': '#141419',
        'text-primary': '#e0e0e0',
        'neon-pink': '#ff006e',
        'neon-purple': '#8338ec',
        'border-dark': '#1a1a2e',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
