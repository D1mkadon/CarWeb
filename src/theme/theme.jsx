import { Opacity } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
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
    },
    secondary: {
      main: "#7fffd4",
    },
    background: {
      default: "#1c1c1c",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "#7fffd4",
    },
    divider: "#ffffff",
  },
});
export default theme;
