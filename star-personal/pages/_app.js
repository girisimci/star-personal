import "../styles/globals.css";

import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";


const gridTheme = {
  gridColumns: 12, // default 12
  breakpoints: {
    xxl: 1600,
    xl: 1280,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 12, // default 15
  },
  col: {
    padding: 12, // default 15
  },
  container: {
    padding: 12, // default 15
    maxWidth: {
      xxl: 1140,
      xl: 1440,
      lg: 1296,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <GridThemeProvider gridTheme={gridTheme}>
        <BaseCSS />
        <Component {...pageProps} />
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
