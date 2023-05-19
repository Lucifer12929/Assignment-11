/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        whitesmoke: "#f8f8f8",
        yellow: "#FFB41D",
        "p-davys-grey-100": "#fff",
        gainsboro: "#e0e0e0",
        darkslategray: "#3f3f3f",
        
      },
      fontFamily: {
        quicksand: "Quicksand",
      },
      fontSize: {
        base: "1rem",
        xl: "1.25rem",
      },
    },

  },
  plugins: [],
}

