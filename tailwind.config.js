module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-[#0F4D8B]',
    'bg-[#6A2D91]',
    'bg-[#0096D6]',
    'bg-[#FE1808]',
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Calibri", "sans-serif"],
      },
      colors: {
        'brand': '#0F4D8B',
      },
      backgroundImage: {
        'partner': "url('../public/images/home/bg-partner.png')",
        'classic-1': "url('../public/images/global/classic1.png')",
        'classic-2': "url('../public/images/global/classic2.png')",
      }
    },
  },
  plugins: [],
}