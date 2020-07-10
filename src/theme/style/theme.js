export default {
  colors: {
    black: "#151515",
    blue: {
      primary: "#00A5DF",
      secondary: "#5BC2E7",
    },
    grey: {
      light: "#eee",
      default: "#8A8A8A",
      dark: "#505050",
    },
    white: "#FFF",
  },
  fonts: {
    default: "'Nanum Gothic', sans-serif",
    display: "'DM Serif Display', serif",
  },
  fontSizes: [12, 16, 20, 24, 32, 40],
  space: [2, 4, 6, 8, 12, 16, 24, 32, 48, 64],
  transitions: {
    ease: (time = "200ms") => `${time} ease-in-out`,
    cubic: (time = "500ms") => `${time} cubic-bezier(0.2, 1, 0.2, 1)`,
  },
}
