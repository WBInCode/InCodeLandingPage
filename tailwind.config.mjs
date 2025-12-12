/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#30e87a',
        'background-light': '#f6f8f7',
        'background-dark': '#112117',
        'surface-dark': '#1c2620',
        'surface-dark-lighter': '#243029',
        // changed accent from orange to a dark green to match site theme
        accent: '#0f7a44',
      },
      fontFamily: {
        display: ['Spline Sans', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
