/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px"
      },
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bodyFont: ['Roboto', "sans-serif"]
      },
      boxShadow:{
        navbarShadow:"0 10px 30px -10px rgba(2,12,25,0.9)",
      },
      colors:{
        bodyColor: "#3C565B",
        textLight:"#DADBDD" ,
        textDark: "#837E7C",
        hoverColor: "#2B3856",
        textGreen:"#FF8674",
        textBlue:"#A0CFEC"
      }
    },
  },
  plugins: [],
}
