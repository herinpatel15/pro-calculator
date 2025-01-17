/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hello-light': '0 0 50px 10px #222CE83B',
        'err-light': '0 0 50px 10px #E822223B',
      },
      keyframes: {
        highlight: {
          '0%, 100%': { color: 'var(--primary-color)' },
          '50%': { color: 'var(--text-color)' },
        },
      },
      animation: {
        highlight: 'highlight 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}