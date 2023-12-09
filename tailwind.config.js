/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        line: '#D9DEE9',
        input: '#EFF2F6',
        background: '#F7F8FC',
        off_white: '#FCFCFC',
        text: {
          100: "#A0A9BD",
          300: "#707C94",
          500: '#555F64',
          900: "#141D2B",
        },
        primary: {
          50: "#B9E8E0",
          100: "#83D9D1",
          200: "#47C9C2",
          300: "#0FB9B3",
          400: "#00A99E",
          500: '#1BABA1',
          600: "#169A8C",
          700: "#128A77",
          800: "#0D7A62",
          900: "#086A4D",
        },
        secondary: {
          50: "#FFF2E7",
          100: "#FFE1CD",
          200: "#FFCEB2",
          300: "#FFBB97",
          400: "#FFA97C",
          500: "#FF7F45",
          600: "#FF552F",
          700: "#FF2A18",
          800: "#FF0000",
          900: "#E20000",
        },
        danger: {
          50: "#FFF7F7",
          100: "#FEEFEF",
          200: "#FCD6D7",
          300: "#FABBBD",
          400: "#F68B8D",
          500: "#F1595C",
          600: "#D75052",
          700: "#913638",
          800: "#6D292A",
          900: "#461A1B",
        },
        black: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#475569",
          600: "#334155",
          700: "#1E293B",
          800: "#0F172A",
          900: "#111112",
        },
        warning: {
          50: "#FFFAF8",
          100: "#FFF4F1",
          200: "#FEE4DA",
          300: "#FDD2C3",
          400: "#FCB298",
          500: "#FA916B",
          600: "#DF8260",
          700: "#965741",
          800: "#714231",
          900: "#492B20",
        },
        info: {
          50: "#F3FEFF",
          100: "#E7FEFF",
          200: "#C5FDFF",
          300: "#A3FCFF",
          400: "#5FF9FF",
          500: "#0CE7FA",
          600: "#00B8D4",
          700: "#007A8D",
          800: "#005E67",
          900: "#003F42",
        },
        success: {
          50: "#F3FEF8",
          100: "#E7FDF1",
          200: "#C5FBE3",
          300: "#A3F9D5",
          400: "#5FF5B1",
          500: "#50C793",
          600: "#3F9A7A",
          700: "#2E6D61",
          800: "#1F4B47",
          900: "#0F2A2E",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#68768A",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        navyblue: {
          50: "#00153C",
          100: "#001C4E",
          200: "#002761",
          300: "#003073",
          400: "#003886",
          500: "#004298",
          600: "#004BAA",
          700: "#0053BD",
          800: "#005BCF",
          900: "#0063E2",
        }
      },
      minHeight: {
        'screen-less-20': 'calc(100vh - 5rem)',
      },
      boxShadow: {
        'custom': '0px 0px 30px 0px rgba(173, 173, 173, 0.29)',
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

