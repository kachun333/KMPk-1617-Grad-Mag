import React, { useState, Fragment } from "react";
import VerticalBanner from "../common/VerticalBanner";
import {
  Hidden,
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  Box,
  TextField,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Background from '../../assets/images/login.jpg';


// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      height: "calc(100vh - 64px)",
    }
  },
  banner: {
    maxWidth: "100vw",
    backgroundImage: props => `url(${Background})`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40vh",
    [theme.breakpoints.up('md')]: {
      width: "60vw",
      height: "100%",
    },
  },
  sidebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  overflow: {
    overflow: "auto",
  },
  form: {
    marginBottom: "48px"
  },
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up('md')]: {
      width: "70%",
      margin: "48px",
    }
  },
  textfield: {
    margin: theme.spacing(2),
    width: "100%",
  },
  caption: {
    width: "100%",
    height: "100%",
  }
}));
function Verify() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heandleing");
    console.log(e);
  }
  return (
    <Fragment>
      <Box id="verify" className={classes.container}>

        <Box id="desktopBanner" className={classes.banner}></Box>
        {/* <VerticalBanner background={Background} /> */}
        <Box className={`${classes.sidebox} ${classes.overflow}`}>
          <Box id="title" className={classes.title}>
            <Typography variant="overline">
              Step 1
            </Typography>
            <Hidden smDown>
              <Typography variant="h2" color="inherit">
                Verify That You Are A KMPKian
            </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h5" color="inherit">
                Verify That You Are A KMPKian
            </Typography>
            </Hidden>
          </Box>
          <form onSubmit={handleSubmit} className={`${classes.sidebox} ${classes.form}`}>
            <TextField
              id="culturalEvent"
              className={classes.textfield}
              label="Cultural Event Name"
              variant="outlined"
              helperText="e.g. BeautyAndTheBeast"
            />
            <TextField
              id="cnyEvent"
              className={classes.textfield}
              label="CNY Event Name"
              variant="outlined"
              helperText="e.g. Springtown"
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              Verify
            </Button>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Verify;