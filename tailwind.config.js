// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        folklore: {
          primary: '#8B4513',
          secondary: '#D2691E', 
          accent: '#CD853F',
          gold: '#DAA520',
          terracotta: '#E2725B',
          sage: '#9CAF88',
          cream: '#F5F5DC'
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      animation: {
        'mandala-spin': 'mandala-spin 2s ease-in-out infinite',
        'cultural-float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'mandala-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}