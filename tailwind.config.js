/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
        '2xl': {'max': '1535px'},  
        'xl': {'max': '1279px'},  
        'lg': {'max': '1023px'},  
        'md': {'max': '767px'},  
        'sm': {'max': '639px'},
    },
    colors:{
      white: '#FFFFFF',
      gray:{
        100: '#F3F3F3',
        200: '#EEEEEE',
        300: '#D9D9D9',
        500: '#CACACA',
        900: '#333333',
      },
      purple: "#3B28E0",
      black: '#000000'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
