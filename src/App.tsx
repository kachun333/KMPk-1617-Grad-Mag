import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import createTheme from "@mui/material/styles/createTheme";
import Hidden from "@mui/material/Hidden";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="up" in={trigger}>
      {children}
    </Slide>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  fab: {
    position: "fixed",
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
  },
}));
function App(props) {
  const [theme] = useState({
    palette: {
      type: "light",
      primary: { main: "#673ab7" },
      secondary: { main: "#f50057" },
    },
    typography: {
      fontFamily: [
        "Poppins",
        "Times New Roman",
        "FangSong",
        "仿宋",
        "STFangSong",
        "华文仿宋",
        "serif",
      ].join(","),
      h1: {
        fontSize: "4.5rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      h4: {
        fontSize: "1.6rem",
      },
      h5: {
        fontSize: "1.4rem",
      },
      h6: {
        fontSize: "1.3rem",
      },
      subtitle1: {
        fontSize: "1.2rem",
      },
      subtitle2: {
        fontSize: "1.1rem",
      },
      body1: {
        fontSize: "1.1rem",
      },
      body2: {
        fontSize: "0.9rem",
      },
      overline: {
        fontSize: "0.8rem",
      },
    },
  });
  const muiTheme = createTheme(theme);
  const classes = useStyles();
  return (
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <Suspense fallback={null}>
          <CssBaseline />
          <ScrollToTop />
          <HideOnScroll {...props}>
            <AppBar color="inherit">
              <Hidden smDown>
                <NavbarDesktop />
              </Hidden>
              <Hidden mdUp>
                <NavbarMobile />
              </Hidden>
            </AppBar>
          </HideOnScroll>
          {/* blank space under appbar & above banner */}
          <Toolbar />
          <AppRoutes />
          <Footer />
          <ShowOnScroll>
            <Fab
              className={classes.fab}
              color="primary"
              aria-label="add"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </ShowOnScroll>
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
