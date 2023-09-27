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
      boxShadow: {
        'custom': '3px 3px 30px rgba(212, 223, 234, 0.80)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
        }
      },
      animation: {
        wiggle: 'wiggle .3s ease-in-out infinite',
        pop: 'pop 1s ease-in-out',
      }
    }
  },
  plugins: [],
}

