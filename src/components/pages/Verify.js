import React, { useState, Fragment } from "react";
import VerticalBanner from "../common/VerticalBanner";
import {
  Hidden,
  useTheme,
  useMediaQuery,
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
    }
  },
  // banner: {
  //   maxWidth: "100vw",
  //   backgroundImage: props => `url(${Background})`,
  //   backgroundPositionX: "center",
  //   backgroundPositionY: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "40vh",
  //   [theme.breakpoints.up('md')]: {
  //     width: "60vw",
  //     height: "auto",
  //     minHeight: "calc(100vh - 64px)",
  //   },
  // },
  sidebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    padding: theme.spacing(4),
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
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
  },
  caption: {
    width: "100%",
    height: "100%",
  }
}));
function Verify() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heandleing");
    console.log(e);
  }
  return (
    <Fragment>
      <Box id="verify" className={classes.container}>
        <VerticalBanner banner="verify" />
        <Box className={classes.sidebox}>
          <Box id="title" className={classes.title}>
            <Typography variant={matches ? "h3" : "h5"} color="inherit">
              Verify That You Are A KMPKian
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} className={classes.form}>
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
              className={classes.button}
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