import React, { Fragment } from "react";
import {
  Box,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/home.jpg';
// import axios from 'axios';
// import { withTranslation } from "react-i18next";
// import "../../i18n";

// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  fitViewPort: {
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  section: {
    display: "block",
    marginBottom: "50px",
    maxWidth: "100vw"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20
  },
  fitPercentages: {
    width: "100%",
    height: "100%",
    maxWidth: "100vw"
  },
  button: {
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  float: {
    position: "relative",
    zIndex: 1,
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw"
  },
  img: {
    width: "100vw"
  },
  banner: {
    maxWidth: "100vw",
    backgroundImage: `url(${Background})`,
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "40vh",
    [theme.breakpoints.up('md')]: {
      minHeight: "calc(100vh - 75px)",
    }
  },
}));
function Banner() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <Box id="desktopBanner" className={classes.banner}>
          <Typography variant="h1" style={{ fontWeight: "bold" }}>
            三年之约
          </Typography>
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            青涩的约定
          </Typography>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box id="mobileBanner" className={classes.banner}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            E3T WALLET
              </Typography>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            IS NOW LIVE
              </Typography>
          <img alt="" src="#" />
        </Box>
      </Hidden>
    </>
  );
}

function Home() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <Fragment className={classes.container}>
      <Banner />
      <Container className={classes.section}>
        <Box className={classes.center} mb={3}>
          <Typography variant="h4" align="center">
            "homepage.section1.title.1"
          </Typography>
          <Typography variant="h4" align="center">
            "homepage.section1.title.2"
          </Typography>
          <img
            src="#"
            alt=""
          />
        </Box>
        <Box className={classes.center}>
          <Container>
            <Hidden smDown>
              <img
                src="#"
                alt=""
                className={classes.fitPercentages}
              />
            </Hidden>
            <Hidden mdUp>
              <img
                src="#"
                alt=""
                className={classes.fitPercentages}
              />
            </Hidden>
          </Container>
        </Box>
      </Container>
      <Container id="who uses e3t" className={classes.section}>
        <Box className={classes.center} mb={3}>
          <Typography variant="h4" align="center">
            "homepage.section2.title"
          </Typography>
          <img
            src="#"
            alt=""
          />
        </Box>
        <Box className={classes.center}>
          <Typography variant="h6" style={{ marginBottom: "50px" }}>
            "homepage.section2.subtitle
          </Typography>
          <img
            src="#"
            alt=""
            className={classes.fitPercentages}
            style={{
              marginBottom: "50px"
            }}
          />
        </Box>
      </Container>
      <Container id="what can it be used for" className={classes.section}>
        <Box className={classes.center} mb={3}>
          <Typography variant="h4" align="center">
            homepage.section3.title"
          </Typography>
          <img
            src="#"
            alt=""
          />
        </Box>
        <Box className={classes.center}>
          <Typography variant="h6" style={{ marginBottom: "50px" }}>
            homepage.section3.subtitle
          </Typography>
          <img
            src="#"
            alt=""
            className={classes.fitPercentages}
            style={{ marginBottom: "100px" }}
          />

        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
