/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        // ...colors

        dark: "#1b1b1b",
        light: "#f5f5f5",
        red: '#ff0000',
        blue: '#334FFF',
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
       fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
    },
    backgroundImage:{
      circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);'
    }
    },
  },
  plugins: [],
}

