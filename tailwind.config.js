/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1BABA1',
        secondary: '#ff7f45',
        darkblue: '#001032',
        title: '#141D2B',
        text: '#2B303B',
        labels: '#707C94',
        placeholder: '#A0A9BD',
        line: '#D9DEE9',
        input: '#EFF2F6',
        background: '#F7F8FC',
        Off_white: '#FCFCFC',
      },
      minHeight: {
        'screen-less-20': 'calc(100vh - 5rem)',
      },
      boxShadow: {
        'custom': '3px 3px 30px rgba(212, 223, 234, 0.80)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', "sans-serif"],
        'poppins': ['Poppins', "sans-serif"],
      },
      keyframes: {
        pop: {
          '0%': {
            transform: 'scale(.95)',
          },
          '40%': {
            transform: 'scale(1.03)',
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        long_pop: {
          '0%': {
            transform: 'scale(.50)',
          },
          '40%': {
            transform: 'scale(1.10)',
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        'pop': 'pop .5s ease-in-out',
        'pop-long': 'long_pop 1.5s ease-in-out',
      }
    },
    container: {
      padding: {
        DEFAULT: '3.5%',
        'sm': '3.5%',
        'lg': '2.5%',
        'xl': '1.5%',
        '2xl': '1%',
      },
    },
  },
  plugins: [],
}

