/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "6xl": "900%",
      }
    },
  },
  plugins: [],
}

