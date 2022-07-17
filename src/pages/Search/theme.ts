import { createTheme } from "@mui/material/styles";
import { ThemeOptions as ThemeOptionsOld } from "@mui/material/styles/createTheme";

// Custom theme: Colors
const themeColors = {
  color: {
    primary: "#646FD4",
    secondary: "#202449",
    _100: "#DFE3FF",
    _400: "#9BA3EB",
    _600: "#646FD4",
    _700: "#242F9B",
    _800: "#21205C",
    _850: "#272F5D",
    _900: "#202449",
    _950: "#130E35",
    red_800: "#7A2222",
    green_400: "#0FB45B",
    green_800: "#287141",
    white: "#ffffff",
    black: "#000000",
  },
} as const;

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    // mode: "dark",
    primary: {
      main: themeColors.color._600,
      contrastText: themeColors.color.white,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
};

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: typeof themeColors[Key];
};
declare module "@mui/material/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const datepickerTheme = createTheme({ ...themeColors, ...themeOptions });
