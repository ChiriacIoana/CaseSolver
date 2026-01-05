import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b73b43ff",
    },
    secondary: {
      main: "#91040dff",
    },
    background: {
      default: "#1a0112ff",
      paper: "#172b1fff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfd8dc",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});
