/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Émeraude moderne
          light: '#34D399',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Ambre chaleureux
          light: '#FBBF24',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shooting: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(-45deg)', opacity: '1' },
          '100%': { transform: 'translateX(-300px) translateY(300px) rotate(-45deg)', opacity: '0' },
        },
      },
      animation: {
        twinkle: 'twinkle var(--duration, 3s) ease-in-out infinite',
        shooting: 'shooting var(--duration, 5s) linear infinite',
      },
    },
  },
  plugins: [],
}