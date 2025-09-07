/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fernalion: {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e4dcff',
          300: '#d1c0ff',
          400: '#b899ff',
          500: '#9d6eff',
          600: '#8b47f7',
          700: '#7c35e3',
          800: '#672dbf',
          900: '#56279c',
          950: '#341469',
        },
        luxury: {
          gold: '#D4AF37',
          silver: '#C0C0C0',
          platinum: '#E5E4E2',
          charcoal: '#36454F',
        }
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
