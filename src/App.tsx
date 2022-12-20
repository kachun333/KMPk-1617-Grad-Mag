import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Hidden from "@mui/material/Hidden";
import Slide from "@mui/material/Slide";
import {
  styled,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, { PropsWithChildren, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import AppRoutes from "./routes/AppRoutes";

const StyledFab = styled(Fab)({
  position: "fixed",
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
});

const HideOnScroll: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ShowOnScroll: React.FC<
  PropsWithChildren<{ children: React.ReactElement }>
> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="up" in={trigger}>
      {children}
    </Slide>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
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

  return (
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <Suspense fallback={null}>
          <CssBaseline />
          <ScrollToTop />
          <HideOnScroll>
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
            <StyledFab
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
            </StyledFab>
          </ShowOnScroll>
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
