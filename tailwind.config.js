import { space } from 'postcss/lib/list'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      fontFamily:{
        mono: ['"Courier New"', 'monospace']},
    },
  },
  plugins: [],
}

