/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0058bb',
        'primary-container': '#6c9fff',
        'primary-dim': '#004ca4',
        secondary: '#3853b7',
        'secondary-container': '#c6cfff',
        'surface-low': '#eff1f2',
        'surface-lowest': '#ffffff',
        'on-surface-variant': '#595c5d',
        background: '#f5f6f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
