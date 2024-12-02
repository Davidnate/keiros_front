/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: '#00304D',
        sky_blue: '#50E5F9',
        darkGreen: '#007832',
        lightGreen: '#39A900',
        titleNav: '#FBFBE2',
        letters: '#ffffff',
        secondaryColor: 'rgba(217, 217, 217, 0.6)',
        sendNov: '#6BCEDC',
        inProgress: '#F3AF00',
        rejectedNov: '#FF0000',
        acceptedNov: '#3CB200',
        greenMoodal: 'rgba(60, 239, 60, 0.5)',
        grayBack: '#D9D9D9',
        purple_new:'#71277A',
        yellow_sun: '#FDC300'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};