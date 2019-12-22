import React, { useState, Suspense } from 'react';
import {
  Hidden,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import Media from "./components/pages/Media";
// import Article from "./components/pages/Article";
// import ContactUs from "./components/pages/ContactUs";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import Generator from './components/pages/Generator';
import Login from './components/pages/Login';
import Verify from './components/pages/Verify';
import PageNotFound from './components/pages/PageNotFound';
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
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <Suspense fallback={null}>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar color="inherit">
              <Hidden smDown><NavbarDesktop /></Hidden>
              <Hidden mdUp><NavbarMobile /></Hidden>
            </AppBar>
          </HideOnScroll>
          {/* blank space under appbar & above banner */}
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/generator" exact component={Generator} />
            <Route path="/login" exact component={Login} />
            <Route path="/verify" exact component={Verify} />
            <Route path="/graduates" exact component={Graduates} />
            <Route path="/committee" exact component={Committee} />
            <Route path="/committee/register" exact component={CommitteeRegister} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
