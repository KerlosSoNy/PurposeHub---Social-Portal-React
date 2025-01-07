/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#fafafa',
      },
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "minxl": '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    }
  },
  width:{
    "inputForms":'clamp(303px,50vw,650px)'
  },
  plugins: [require('tailwind-scrollbar-hide')],
}