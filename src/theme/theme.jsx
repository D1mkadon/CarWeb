import { Opacity } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            borderColor: "grey",
            color: "grey",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: "#fff" },
          ".MuiSvgIcon-root": { color: "#7fffd4" },
          "&.Mui-focused .MuiSvgIcon-root": {
            color: "#fff",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: "#fff" },
          ".MuiSvgIcon-root": { color: "#7fffd4" },
          "&.Mui-focused .MuiSvgIcon-root": {
            color: "#fff",
          },
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff",
      disabled: "#fff",
    },
    secondary: {
      main: "#7fffd4",
    },
    background: {
      default: "#111",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "#7fffd4",
      disabled: "#ffffff",
    },
    divider: "#ffffff",
  },
});
export default theme;
