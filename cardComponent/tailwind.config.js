/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'circular' : "0px 0px 5px black",
      }
    },
  },
  plugins: [],
}

