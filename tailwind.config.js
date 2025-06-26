module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}

