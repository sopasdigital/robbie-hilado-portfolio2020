import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Nanum Gothic", styles: [400, 700, 800] },
    { name: "DM Serif Display", styles: [400] },
  ],
  headerFontFamily: ["Muli", "sans-serif"],
  bodyFontFamily: ["Muli", "serif"],
})

export default typography
