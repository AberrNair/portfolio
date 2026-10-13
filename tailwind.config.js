/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        got: {
          bg: '#080B11',
          'bg-dark': '#040609',
          'bg-alt': '#0D131F',
          surface: '#0F172A',
          card: '#111827',
          'card-glass': 'rgba(17, 24, 39, 0.75)',
          'card-hover': '#1A2338',
          gold: '#F59E0B',
          'gold-light': '#FDE68A',
          'gold-dark': '#B45309',
          crimson: '#DC2626',
          'crimson-dark': '#991B1B',
          fire: '#FF4500',
          amber: '#D97706',
          steel: '#94A3B8',
          silver: '#E2E8F0',
          border: 'rgba(245, 158, 11, 0.22)',
          'border-bright': 'rgba(245, 158, 11, 0.45)',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', 'serif'],
        heading: ['"Cinzel"', '"Space Grotesk"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '18px',
        'card-lg': '24px',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.22)',
        'gold-glow-lg': '0 0 40px rgba(245, 158, 11, 0.35)',
        'crimson-glow': '0 0 25px rgba(220, 38, 38, 0.25)',
        'card-got': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(245, 158, 11, 0.18)',
        'card-got-hover': '0 18px 45px -5px rgba(0, 0, 0, 0.95), 0 0 25px rgba(245, 158, 11, 0.35)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(0.98)' },
        },
        floatEmber: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-120px) translateX(15px) scale(0.7)', opacity: '0.4' },
          '100%': { transform: 'translateY(-240px) translateX(-10px) scale(0.2)', opacity: '0' },
        },
        dragonPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        }
      },
      animation: {
        'flicker': 'flicker 3s ease-in-out infinite',
        'float-ember': 'floatEmber 6s linear infinite',
        'dragon-pulse': 'dragonPulse 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
