/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0F766E',
          deep: '#134E4A',
          dark: '#0B4F4A',
          light: '#14B8A6',
          pale: '#CCFBF1',
          surface: '#115E59',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          hover: '#E85535',
          light: '#FFEBE6',
          dark: '#D94826',
        },
        saffron: {
          DEFAULT: '#FFB703',
          light: '#FFF6D6',
          dark: '#D99800',
        },
        cream: {
          DEFAULT: '#FFF8F0',
          muted: '#F6EEDB',
          card: '#FFFFFF',
          subtle: '#FAF3E8',
        },
        ink: {
          DEFAULT: '#1F2937',
          muted: '#4B5563',
          light: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Poppins', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '24px',
        'card-xl': '28px',
      },
      boxShadow: {
        'soft': '0 8px 30px -4px rgba(19, 78, 74, 0.08)',
        'warm': '0 10px 30px -4px rgba(255, 107, 74, 0.12)',
        'teal-glow': '0 10px 30px -4px rgba(15, 118, 110, 0.25)',
        'card-hover': '0 16px 36px -6px rgba(19, 78, 74, 0.16)',
      },
      keyframes: {
        bouncePaddle: {
          '0%, 100%': { transform: 'translateY(0) scale(1, 1)' },
          '45%': { transform: 'translateY(-24px) scale(0.96, 1.04)' },
          '90%': { transform: 'translateY(0) scale(1.08, 0.92)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'bounce-ball': 'bouncePaddle 1.8s cubic-bezier(0.28, 0.84, 0.42, 1) infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'floatSlow 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
