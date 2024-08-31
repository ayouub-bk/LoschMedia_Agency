/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
    screens: {
      'tablet' : '810px' ,
      'desktop' :  '1200px'
    },
    colors : {
      'primary' : '#FFFFFF',
      'secondary' : '#0048A6',
      'highlight' : '#B01799',
      'hover1' : '#8C0778',
      'hover2' :" #002B63"
    }
  },
  plugins: [],
}

