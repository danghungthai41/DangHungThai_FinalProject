import { createMuiTheme } from "@material-ui/core";

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#D91A21",
      main: "#EC2029",
      dark: "#6F0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#FFDD00",
      main: "#FBB612",
      dark: "#F9A51A",
      contrastText: "#000000",
    },
    violet: {
      light: "#ff00ff",
      main: "#800080",
      dark: "#5d005d",
    },
    white: {
      main: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#4a4a4a4a",
    },
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "4rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  spacing: 20,
});
export default myTheme;
