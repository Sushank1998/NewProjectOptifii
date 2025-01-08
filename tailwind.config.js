/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customColor_1-bg': '#e6d9f7', 
        'iconColor_2-bg': '#6311CB',
        'backgroundColor_3-bg': '#F3F3F9',// Replace with your desired color
        'sideBarColor_4-bg':'#1A0436',
        'sideNavColor_5-bg':'#3c2a54'
      },
    },
  },
  plugins: [],
}

