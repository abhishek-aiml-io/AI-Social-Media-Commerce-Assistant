/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0b14',
          900: '#0e0f1a',
          850: '#12131f',
          800: '#161724',
          700: '#1c1e2e',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px -6px rgba(99,102,241,0.35)',
        'glow': '0 0 40px -10px rgba(99,102,241,0.5)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
