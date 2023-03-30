/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./component/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '100': '100px',
        '128': '128px',
        '200': '200px',
      },
      colors: {
        A: '#00963F',
        B: '#A1C617',
        C: '#FEED01',
        D: '#FBBA00',
        E: '#FF0000',
        PointSGreen: '#66B343',
        PointSBlue: '#0D557E',
      }, 
    },

  },
  plugins: [],
}

