import React, { Suspense } from 'react';
import {
  Hidden,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Box,
  withStyles
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
// import Footer from "./components/Footer";
// import "./i18n"; 

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#aa00ff" },
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
//component level styling
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100vw",
    height: "100%",
  }
});

function App() {
  const classes = useStyles();

  return (
    // react router
    <Router>
      {/* material ui thenme provider */}
      <MuiThemeProvider theme={theme}>
        <Suspense fallback={null}>
          {/* to reset the CSS across all browsers  */}
          <CssBaseline />
          <Box className={classes.container}>
            {/* desktop navigation menu */}
            {/* hides the menu on small screens
       and any screen smaller than that  */}
            <Hidden smDown>
              <NavbarDesktop />
            </Hidden>
            {/* mobile navigation menu */}
            {/* hides the menu on medium screens
       and any screen bigger than that */}
            <Hidden mdUp>
              <NavbarMobile />
            </Hidden>
            {/* react router routes */}
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/media" exact component={Media} />
              <Route path="/media/:mediaId" exact component={Article} />
              <Route path="/contactus" exact component={ContactUs} /> */}
            </Switch>
            {/* <Footer /> */}
          </Box>
        </Suspense>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
