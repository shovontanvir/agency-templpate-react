module.exports = {content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
      }
    },
  },
  plugins: [],
}