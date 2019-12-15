import React, { useState, Suspense } from 'react';
import {
  Hidden,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Box,
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import Media from "./components/pages/Media";
// import Article from "./components/pages/Article";
// import ContactUs from "./components/pages/ContactUs";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import { flexbox } from '@material-ui/system';
import Login from './components/pages/Login';
import Graduates from './components/pages/Graduates';
import Committee from './components/pages/Committee';
import CommitteeRegister from './components/pages/CommitteeRegister';
import Footer from "./components/Footer";
// import "./i18n"; 

//component level styling

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App(props) {

  const [theme, setTheme] = useState({
    palette: {
      type: "light",
      primary: { main: "#673ab7" },
      secondary: { main: "#f50057" }
    },
    typography: {
      fontFamily: "poppins",
      h1: {
        fontSize: "4.5rem"
      },
      h3: {
        fontSize: "2.5rem"
      },
      h4: {
        fontSize: "1.6rem"
      },
      h6: {
        fontSize: "1.3rem"
      },
      subtitle1: {
        fontSize: "1.2rem"
      },
      subtitle2: {
        fontSize: "1.1rem"
      },
      body1: {
        fontSize: "1rem"
      },
      overline: {
        fontSize: "0.8rem"
      }
    },
  });

  // const classes = useStyles();
  let muiTheme = createMuiTheme(theme);

  return (
    // react router
    <Router>
      {/* material ui thenme provider */}
      <MuiThemeProvider theme={muiTheme}>
        <Suspense fallback={null}>
          {/* to reset the CSS across all browsers  */}
          <CssBaseline />
          {/* desktop navigation menu */}
          {/* hides the menu on small screens
       and any screen smaller than that  */}

          <HideOnScroll {...props}>
            <AppBar
              color="inherit"
            // style={{ background: 'transparent', boxShadow: 'none'}}
            >
              <Hidden smDown>
                <NavbarDesktop />
              </Hidden>
              {/* mobile navigation menu */}
              {/* hides the menu on medium screens and any screen bigger than that */}
              <Hidden mdUp>
                <NavbarMobile />
              </Hidden>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
          {/* react router routes */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/graduates" exact component={Graduates} />
            <Route path="/committee" exact component={Committee} />
            <Route path="/committee/register" exact component={CommitteeRegister} />
          </Switch>
          <Footer />
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
