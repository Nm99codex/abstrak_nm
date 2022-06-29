module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {screens: {
      'lgS': { 'min': '991px' },
      'mob': { 'min': '1px', 'max': '991px' },},
      backgroundImage: {
        bgprimary: "linear-gradient(90deg, #ECF2F6 0%, rgba(236, 242, 246, 0) 70.31%)"
      },
    colors: {
      rose: "#C75C6F",
      primary: "#5956E9",
      light: "#ECF2F6",
      accent: "#FFDC60",
      white: "#FFFFFF"
    },
    fontFamily: {
      'dmsans': ['dmsans', 'sans-serif'],
      'poppins': ['poppins', 'sans-serif'],

    }
  },
},
  plugins: [require('@tailwindcss/line-clamp')]
}